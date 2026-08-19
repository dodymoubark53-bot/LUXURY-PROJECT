import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Hotel, Plus, Trash2, Edit, X, Star, MapPin } from 'lucide-react';

const HotelsManager = () => {
  const { hotels, addHotel, updateHotel, deleteHotel } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [form, setForm] = useState({
    name: '',
    destination: 'egypt',
    city: 'Cairo',
    stars: 5,
    rating: 4.8,
    pricePerNight: 180,
    image: '',
    description: ''
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setForm({
      name: '',
      destination: 'egypt',
      city: 'Cairo',
      stars: 5,
      rating: 4.8,
      pricePerNight: 180,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'فندق فاخر إطلالة مباشرة على النيل والمعالم السياحية.'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (h) => {
    setEditingId(h.id);
    setForm({
      name: h.name || '',
      destination: h.destination || 'egypt',
      city: h.city || '',
      stars: h.stars || 5,
      rating: h.rating || 4.5,
      pricePerNight: h.pricePerNight || 150,
      image: h.image || '',
      description: h.description || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return alert('يرجى أدخال اسم الفندق');

    if (editingId) {
      updateHotel(editingId, form);
    } else {
      addHotel(form);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#161b22] border border-slate-800 rounded-3xl p-6">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-3">
            <Hotel className="text-emerald-400" />
            <span>إدارة الفنادق المعتمدة (Hotels Manager)</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            إضافة وتعديل بيانات الفنادق وعدد النجوم وأسعار الغرف والخدمات.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 shrink-0"
        >
          <Plus size={18} />
          <span>إضافة فندق جديد</span>
        </button>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((h) => (
          <div 
            key={h.id}
            className="bg-[#161b22] border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-40 bg-slate-800 relative">
                <img 
                  src={h.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'} 
                  alt={h.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500/90 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  <Star size={11} className="fill-slate-950" />
                  <span>{h.stars} نجوم</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                  <MapPin size={12} />
                  <span>{h.city || h.destination}</span>
                </div>

                <h3 className="font-bold text-white text-sm leading-snug">{h.name}</h3>
                <span className="text-xs font-black text-amber-400 block">${h.pricePerNight} / ليلة</span>
                <p className="text-[11px] text-slate-400 line-clamp-2">{h.description}</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/40">
              <span className="text-[11px] text-slate-500 font-mono">{h.id}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleOpenEdit(h)} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"><Edit size={14} /></button>
                <button onClick={() => setDeleteConfirmId(h.id)} className="p-1.5 rounded-lg bg-slate-800 text-red-400 hover:text-white"><Trash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-bold text-lg text-white">تأكيد حذف الفندق</h3>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteConfirmId(null)} className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 font-bold">إلغاء</button>
              <button onClick={() => { deleteHotel(deleteConfirmId); setDeleteConfirmId(null); }} className="px-4 py-2 rounded-xl bg-red-500 text-white text-xs font-bold">حذف</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-white">{editingId ? 'تعديل الفندق' : 'إضافة فندق جديد'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={18} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">اسم الفندق</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">المدينة</label>
                  <input type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">النجوم (1-5)</label>
                  <input type="number" min="1" max="5" value={form.stars} onChange={e => setForm({ ...form, stars: parseInt(e.target.value) || 5 })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">السعر/ليلة ($)</label>
                  <input type="number" value={form.pricePerNight} onChange={e => setForm({ ...form, pricePerNight: parseFloat(e.target.value) || 0 })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">رابط الصورة</label>
                <input type="text" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white font-mono" />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">الوصف والمزايا</label>
                <textarea rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold">إلغاء</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold">حفظ</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsManager;
