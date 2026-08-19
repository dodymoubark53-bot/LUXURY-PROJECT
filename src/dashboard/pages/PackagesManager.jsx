import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Package, Plus, Trash2, Edit, X, Star, Calendar, DollarSign } from 'lucide-react';

const PackagesManager = () => {
  const { packages, addPackage, updatePackage, deletePackage } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    destination: 'Multi-Country',
    duration: '10 Days / 9 Nights',
    price: 1500,
    type: 'Cultural',
    popular: true,
    description: '',
    image: ''
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setForm({
      title: '',
      slug: '',
      destination: 'Multi-Country',
      duration: '10 Days / 9 Nights',
      price: 1500,
      type: 'Classic Package',
      popular: true,
      description: '',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (pkg) => {
    setEditingId(pkg.id);
    setForm({
      title: pkg.title || '',
      slug: pkg.slug || '',
      destination: pkg.destination || 'Multi-Country',
      duration: pkg.duration || '',
      price: pkg.price || 0,
      type: pkg.type || '',
      popular: pkg.popular || false,
      description: pkg.description || '',
      image: pkg.image || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return alert('يرجى أدخال اسم الباكدج');

    if (editingId) {
      updatePackage(editingId, form);
    } else {
      addPackage(form);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#161b22] border border-slate-800 rounded-3xl p-6">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-3">
            <Package className="text-blue-400" />
            <span>إدارة الباكدجز والبرامج السياحية (Packages Manager)</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            إدارة رحلات الدول المتعددة، باكدجز شهر العسل والبرامج الخاصة.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-blue-500/20 shrink-0"
        >
          <Plus size={18} />
          <span>إضافة باكدج جديد</span>
        </button>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="bg-[#161b22] border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-48 bg-slate-800 relative">
                <img 
                  src={pkg.image || 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80'} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                  {pkg.destination}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400">{pkg.duration}</span>
                  <span className="text-lg font-black text-amber-400">${pkg.price}</span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug">{pkg.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{pkg.description}</p>
              </div>
            </div>

            <div className="p-5 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/40">
              <span className="text-xs text-slate-400 font-mono">{pkg.id}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(pkg)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-500/20"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => setDeleteConfirmId(pkg.id)}
                  className="p-2 rounded-xl bg-slate-800 text-red-400 hover:text-white hover:bg-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-bold text-lg text-white">تأكيد حذف الباكدج</h3>
            <p className="text-xs text-slate-300">هل أنت متاكد من حذف هذا الباكدج؟</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteConfirmId(null)} className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 font-bold">إلغاء</button>
              <button onClick={() => { deletePackage(deleteConfirmId); setDeleteConfirmId(null); }} className="px-4 py-2 rounded-xl bg-red-500 text-white text-xs font-bold">حذف</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-white">{editingId ? 'تعديل الباكدج' : 'إضافة باكدج جديد'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={18} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">اسم الباكدج</label>
                <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">السعر ($)</label>
                  <input type="number" value={form.price} onChange={e => setForm({ ...form, price: parseFloat(e.target.value) || 0 })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">المدة</label>
                  <input type="text" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">رابط الصورة</label>
                <input type="text" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white font-mono" />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">الوصف</label>
                <textarea rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full bg-[#0d1117] border border-slate-800 rounded-xl p-2.5 text-white" />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold">إلغاء</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-blue-500 text-slate-950 font-bold">حفظ</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackagesManager;
