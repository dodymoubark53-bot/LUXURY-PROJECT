import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useSearchParams } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star, 
  Compass, 
  MapPin, 
  Calendar, 
  X, 
  Check, 
  Flame, 
  Image as ImageIcon, 
  ListPlus, 
  Layers, 
  DollarSign, 
  AlertTriangle 
} from 'lucide-react';

const TripsManager = () => {
  const { trips, addTrip, updateTrip, deleteTrip } = useData();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [destinationFilter, setDestinationFilter] = useState('all');

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTripId, setEditingTripId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' | 'itinerary' | 'highlights' | 'included' | 'images'

  // Form State
  const [form, setForm] = useState({
    title: '',
    slug: '',
    destination: 'egypt',
    market: 'Brasil',
    language: 'pt-BR',
    type: 'City Break',
    duration: '4 Dias / 3 Noites',
    price: 0,
    rating: 5.0,
    reviewCount: 0,
    popular: false,
    overview: '',
    highlights: [],
    included: [],
    excluded: [],
    images: [''],
    itinerary: [
      { day: 1, title: 'اليوم الأول - الاستقبال والوصول', description: 'الوصول والتوجيه إلى الفندق مع الاستراحة.', meals: 'غير مشمول' }
    ]
  });

  // Open edit modal automatically if URL query param `?edit=id` exists
  useEffect(() => {
    const editId = searchParams.get('edit');
    if (editId) {
      const targetTrip = trips.find(t => t.id === editId);
      if (targetTrip) {
        handleOpenEdit(targetTrip);
      }
    }
  }, [searchParams, trips]);

  const handleOpenAdd = () => {
    setEditingTripId(null);
    setForm({
      title: '',
      slug: '',
      destination: 'egypt',
      market: 'Global',
      language: 'en',
      type: 'Classic',
      duration: '5 Days / 4 Nights',
      price: 990,
      rating: 5.0,
      reviewCount: 10,
      popular: false,
      overview: '',
      highlights: ['براميدز الجيزة والأهرامات الثلاثة', 'المتحف المصري الكبير', 'جولات النيل و الأقصر'],
      included: ['الإقامة في فندق 5 نجوم مع الإفطار', 'جميع الانتقالات بأتوبيسات مكيفة حديثة', 'مرشد سياحي مرافق'],
      excluded: ['التذاكر الدولية والطيران', 'المشروبات والإكراميات الشخصية'],
      images: ['https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80'],
      itinerary: [
        { day: 1, title: 'الوصول إلى القاهرة', description: 'الاستقبال في المطار والتسكين بالفندق.', meals: 'العشاء' },
        { day: 2, title: 'جولة الأهرامات والمتحف', description: 'زيارة أهرامات الجيزة وأبو الهول والمتحف المصري.', meals: 'الإفطار والغداء' }
      ]
    });
    setActiveTab('basic');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (trip) => {
    setEditingTripId(trip.id);
    setForm({
      title: trip.title || '',
      slug: trip.slug || '',
      destination: trip.destination || 'egypt',
      market: trip.market || 'Global',
      language: trip.language || 'en',
      type: trip.type || '',
      duration: trip.duration || '',
      price: trip.price || 0,
      rating: trip.rating || 5.0,
      reviewCount: trip.reviewCount || 0,
      popular: trip.popular || false,
      overview: trip.overview || '',
      highlights: trip.highlights ? [...trip.highlights] : [],
      included: trip.included ? [...trip.included] : [],
      excluded: trip.excluded ? [...trip.excluded] : [],
      images: trip.images && trip.images.length > 0 ? [...trip.images] : [''],
      itinerary: trip.itinerary && trip.itinerary.length > 0 ? [...trip.itinerary] : [
        { day: 1, title: 'اليوم الأول', description: 'تفاصيل اليوم الأول', meals: 'الإفطار' }
      ]
    });
    setActiveTab('basic');
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('يرجى أدخال عنوان الرحلة');
      return;
    }

    if (editingTripId) {
      updateTrip(editingTripId, form);
    } else {
      addTrip(form);
    }

    setIsModalOpen(false);
    setSearchParams({});
  };

  const handleDelete = (id) => {
    deleteTrip(id);
    setDeleteConfirmId(null);
  };

  // Helper Array Managers
  const handleAddHighlight = () => setForm(f => ({ ...f, highlights: [...f.highlights, ''] }));
  const handleUpdateHighlight = (index, val) => {
    const next = [...form.highlights];
    next[index] = val;
    setForm(f => ({ ...f, highlights: next }));
  };
  const handleRemoveHighlight = (index) => setForm(f => ({ ...f, highlights: f.highlights.filter((_, i) => i !== index) }));

  const handleAddIncluded = () => setForm(f => ({ ...f, included: [...f.included, ''] }));
  const handleUpdateIncluded = (index, val) => {
    const next = [...form.included];
    next[index] = val;
    setForm(f => ({ ...f, included: next }));
  };
  const handleRemoveIncluded = (index) => setForm(f => ({ ...f, included: f.included.filter((_, i) => i !== index) }));

  const handleAddExcluded = () => setForm(f => ({ ...f, excluded: [...f.excluded, ''] }));
  const handleUpdateExcluded = (index, val) => {
    const next = [...form.excluded];
    next[index] = val;
    setForm(f => ({ ...f, excluded: next }));
  };
  const handleRemoveExcluded = (index) => setForm(f => ({ ...f, excluded: f.excluded.filter((_, i) => i !== index) }));

  const handleAddImage = () => setForm(f => ({ ...f, images: [...f.images, ''] }));
  const handleUpdateImage = (index, val) => {
    const next = [...form.images];
    next[index] = val;
    setForm(f => ({ ...f, images: next }));
  };
  const handleRemoveImage = (index) => setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== index) }));

  // Itinerary Managers
  const handleAddItineraryDay = () => {
    setForm(f => ({
      ...f,
      itinerary: [
        ...f.itinerary,
        { day: f.itinerary.length + 1, title: `اليوم ${f.itinerary.length + 1}`, description: '', meals: 'الإفطار' }
      ]
    }));
  };
  const handleUpdateItineraryDay = (index, field, val) => {
    const next = [...form.itinerary];
    next[index] = { ...next[index], [field]: val };
    setForm(f => ({ ...f, itinerary: next }));
  };
  const handleRemoveItineraryDay = (index) => {
    setForm(f => ({ ...f, itinerary: f.itinerary.filter((_, i) => i !== index) }));
  };

  // Filtered trips
  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (trip.destination && trip.destination.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (trip.id && trip.id.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDest = destinationFilter === 'all' || trip.destination?.toLowerCase() === destinationFilter.toLowerCase();
    return matchesSearch && matchesDest;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#161b22] border border-slate-800 rounded-3xl p-6">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-3">
            <Compass className="text-amber-500" />
            <span>إدارة الرحلات والبرامج السياحية (Trips Manager)</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            إضافة رحلة جديدة، التعديل الكامل على بيانات وأيام ومميزات أي رحلة موجودة، أو حذفها.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 shrink-0"
        >
          <Plus size={18} />
          <span>إضافة رحلة جديدة</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#161b22] border border-slate-800 rounded-2xl p-4">
        <div className="relative flex-1 w-full">
          <Search size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="بحث باسم الرحلة أو الكود أو الوجهة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0d1117] border border-slate-800 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 whitespace-nowrap">الوجهة:</span>
          <select
            value={destinationFilter}
            onChange={(e) => setDestinationFilter(e.target.value)}
            className="bg-[#0d1117] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/50 w-full sm:w-auto"
          >
            <option value="all">كل الوجهات ({trips.length})</option>
            <option value="egypt">مصر (Egypt)</option>
            <option value="turkey">تركيا (Turkey)</option>
            <option value="jordan">الأردن (Jordan)</option>
            <option value="morocco">المغرب (Morocco)</option>
            <option value="greece">اليونان (Greece)</option>
            <option value="dubai">دبي (Dubai)</option>
          </select>
        </div>
      </div>

      {/* Trips Table List */}
      <div className="bg-[#161b22] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="py-4 px-6">الرحلة</th>
                <th className="py-4 px-4">الوجهة والمدة</th>
                <th className="py-4 px-4">السعر والتقييم</th>
                <th className="py-4 px-4">الأكثر إقبالاً</th>
                <th className="py-4 px-6 text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredTrips.map((trip) => (
                <tr key={trip.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden shrink-0 border border-slate-700">
                        <img 
                          src={trip.images?.[0] || 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=200&q=80'} 
                          alt={trip.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm hover:text-amber-400 transition-colors">
                          {trip.title}
                        </h4>
                        <span className="text-[11px] text-slate-500 font-mono">ID: {trip.id}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700 uppercase">
                        {trip.destination || 'عام'}
                      </span>
                      <p className="text-xs text-slate-400">{trip.duration || 'غير مخصص'}</p>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="text-sm font-black text-amber-400">${trip.price || 0}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span>{trip.rating || 5.0}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    {trip.popular ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
                        <Flame size={12} />
                        <span>إقبال عالي 🔥</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500">عادي</span>
                    )}
                  </td>

                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEdit(trip)}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition-colors border border-slate-700"
                        title="تعديل تفاصيل الرحلة"
                      >
                        <Edit size={16} />
                      </button>

                      <button
                        onClick={() => setDeleteConfirmId(trip.id)}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-red-500 text-slate-400 hover:text-white transition-colors border border-slate-700"
                        title="حذف الرحلة"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredTrips.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    لا توجد رحلات مطابقة لشروط البحث.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle size={24} />
              <h3 className="font-bold text-lg text-white">تأكيد حذف الرحلة</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              هل أنت تأكد من أنك تريد حذف هذه الرحلة نهائياً؟ لن تظهر هذه الرحلة في الداش بورد أو في الموقع الرئيسي بعد الآن.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold"
              >
                إلغاء
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/20"
              >
                حذف نهائياً
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Full Trip Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col my-auto shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {editingTripId ? 'تعديل جميع بيانات الرحلة' : 'إضافة رحلة جديدة'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  قم بتعديل وتخصيص التفاصيل والبرنامج اليومي والتكلفة.
                </p>
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Tabs Header */}
            <div className="flex border-b border-slate-800 bg-[#0d1117] px-6 gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('basic')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'basic' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                البيانات الأساسية والسعر
              </button>
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'itinerary' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                البرنامج اليومي (Itinerary)
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'highlights' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                المميزات (Highlights)
              </button>
              <button
                onClick={() => setActiveTab('included')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'included' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                المشتملات والغير مشمول
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'images' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                الصور والمعرض
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              {/* TAB 1: BASIC DETAILS */}
              {activeTab === 'basic' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">عنوان الرحلة (Title)</label>
                      <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="مثال: رحلة الأهرامات والنيل الفاخرة"
                        required
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">الرابط الفرعي (Slug)</label>
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) => setForm({ ...form, slug: e.target.value })}
                        placeholder="cairo-luxury-express"
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">الوجهة (Destination)</label>
                      <select
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="egypt">مصر (Egypt)</option>
                        <option value="turkey">تركيا (Turkey)</option>
                        <option value="jordan">الأردن (Jordan)</option>
                        <option value="morocco">المغرب (Morocco)</option>
                        <option value="greece">اليونان (Greece)</option>
                        <option value="dubai">دبي (Dubai)</option>
                        <option value="tunisia">تونس (Tunisia)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">السعر ($)</label>
                      <input
                        type="number"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })}
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">مدة الرحلة</label>
                      <input
                        type="text"
                        value={form.duration}
                        onChange={(e) => setForm({ ...form, duration: e.target.value })}
                        placeholder="5 Days / 4 Nights"
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">التقييم (Rating 1 - 5)</label>
                      <input
                        type="number"
                        step="0.1"
                        max="5"
                        min="1"
                        value={form.rating}
                        onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) || 5.0 })}
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">عدد المراجعات (Reviews)</label>
                      <input
                        type="number"
                        value={form.reviewCount}
                        onChange={(e) => setForm({ ...form, reviewCount: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="flex items-center pt-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.popular}
                          onChange={(e) => setForm({ ...form, popular: e.target.checked })}
                          className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                        />
                        <span className="text-xs font-bold text-amber-400">رحلة الأكثر إقبالاً 🔥 (Popular Trip)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">الوصف العام (Overview)</label>
                    <textarea
                      rows={4}
                      value={form.overview}
                      onChange={(e) => setForm({ ...form, overview: e.target.value })}
                      placeholder="وصف شاملا وحصري للرحلة ومميزاتها الرئيسية..."
                      className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: ITINERARY */}
              {activeTab === 'itinerary' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">أيام الرحلة وخط سير الجولة</h4>
                    <button
                      type="button"
                      onClick={handleAddItineraryDay}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 text-xs font-bold border border-amber-500/30"
                    >
                      <Plus size={14} />
                      <span>إضافة يوم جديد</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {form.itinerary.map((item, index) => (
                      <div key={index} className="bg-[#0d1117] border border-slate-800 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                            اليوم {index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveItineraryDay(index)}
                            className="text-xs text-red-400 hover:text-red-300 font-bold"
                          >
                            حذف اليوم
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              placeholder="عنوان اليوم (مثال: الوصول للقاهرة وجولة الأهرامات)"
                              value={item.title || ''}
                              onChange={(e) => handleUpdateItineraryDay(index, 'title', e.target.value)}
                              className="w-full bg-[#161b22] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              placeholder="الوجبة (مثال: الإفطار والعشاء)"
                              value={item.meals || ''}
                              onChange={(e) => handleUpdateItineraryDay(index, 'meals', e.target.value)}
                              className="w-full bg-[#161b22] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                            />
                          </div>
                        </div>

                        <textarea
                          rows={2}
                          placeholder="وصف تفصيلي لأنشطة وزيارات هذا اليوم..."
                          value={item.description || ''}
                          onChange={(e) => handleUpdateItineraryDay(index, 'description', e.target.value)}
                          className="w-full bg-[#161b22] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: HIGHLIGHTS */}
              {activeTab === 'highlights' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">أبرز معالم ومميزات الرحلة (Highlights)</h4>
                    <button
                      type="button"
                      onClick={handleAddHighlight}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 text-xs font-bold border border-amber-500/30"
                    >
                      <Plus size={14} />
                      <span>إضافة ميزة</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {form.highlights.map((hl, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={hl}
                          onChange={(e) => handleUpdateHighlight(index, e.target.value)}
                          placeholder="مثال: زيارة أهرامات الجيزة والمتحف المصري الكبير"
                          className="flex-1 bg-[#0d1117] border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(index)}
                          className="p-2 text-red-400 hover:text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: INCLUDED & EXCLUDED */}
              {activeTab === 'included' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-emerald-400 text-sm">المشتملات (Included)</h4>
                      <button
                        type="button"
                        onClick={handleAddIncluded}
                        className="text-xs text-amber-400 hover:underline font-bold"
                      >
                        + إضافة
                      </button>
                    </div>

                    <div className="space-y-2">
                      {form.included.map((inc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={inc}
                            onChange={(e) => handleUpdateIncluded(index, e.target.value)}
                            placeholder="مثال: الإقامة في فندق 5 نجوم شامل الإفطار"
                            className="flex-1 bg-[#0d1117] border border-slate-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveIncluded(index)}
                            className="text-red-400 hover:text-white"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Excluded */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-rose-400 text-sm">غير المشمول (Excluded)</h4>
                      <button
                        type="button"
                        onClick={handleAddExcluded}
                        className="text-xs text-amber-400 hover:underline font-bold"
                      >
                        + إضافة
                      </button>
                    </div>

                    <div className="space-y-2">
                      {form.excluded.map((exc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={exc}
                            onChange={(e) => handleUpdateExcluded(index, e.target.value)}
                            placeholder="مثال: التذاكر الدولية للطيران"
                            className="flex-1 bg-[#0d1117] border border-slate-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-rose-500"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveExcluded(index)}
                            className="text-red-400 hover:text-white"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: IMAGES */}
              {activeTab === 'images' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">روابط صور الرحلة (Image URLs)</h4>
                    <button
                      type="button"
                      onClick={handleAddImage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 text-xs font-bold border border-amber-500/30"
                    >
                      <Plus size={14} />
                      <span>إضافة رابط صورة</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {form.images.map((imgUrl, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                          {imgUrl ? (
                            <img src={imgUrl} alt={`preview-${index}`} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">لا توجد</div>
                          )}
                        </div>

                        <input
                          type="text"
                          value={imgUrl}
                          onChange={(e) => handleUpdateImage(index, e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="flex-1 bg-[#0d1117] border border-slate-800 rounded-xl px-3 py-2.5 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                        />

                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="text-red-400 hover:text-white p-2"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">تأكد من مراجعة كل التبويبات قبل الحفظ.</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20"
                  >
                    {editingTripId ? 'حفظ التعديلات' : 'إضافة الرحلة الآن'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripsManager;
