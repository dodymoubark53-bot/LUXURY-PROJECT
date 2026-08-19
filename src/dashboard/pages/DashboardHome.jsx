import React from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Compass, 
  Package, 
  Hotel, 
  Bus, 
  MessageSquare, 
  Plus, 
  Eye, 
  Star, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Edit, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Award 
} from 'lucide-react';

const DashboardHome = () => {
  const { trips, packages, hotels, transportation, reviews, getPopularTrips } = useData();

  const popularTrips = getPopularTrips().slice(0, 5);

  const stats = [
    {
      label: 'إجمالي الرحلات النشطة',
      value: trips.length,
      icon: Compass,
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-400',
      link: '/dashboard/trips'
    },
    {
      label: 'الباكدجز والبرامج الخاصة',
      value: packages.length,
      icon: Package,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: '/dashboard/packages'
    },
    {
      label: 'الفنادق المعتمدة',
      value: hotels.length,
      icon: Hotel,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: '/dashboard/hotels'
    },
    {
      label: 'مركبات أسطول التنقل',
      value: transportation.length,
      icon: Bus,
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: '/dashboard/transportation'
    },
    {
      label: 'تقييمات وتعليقات العملاء',
      value: reviews.length,
      icon: MessageSquare,
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-400',
      link: '/dashboard/reviews'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#161b22] to-[#161b22] border border-amber-500/20 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
              <Award size={14} />
              <span>نظام إدارة Dunas Travel الفاخر</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              أهلاً بك في لوحة تحكم الموقع 👋
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              من هنا يمكنك الإشراف الكامل على جميع بيانات الموقع، التعديل على الرحلات، متابعة الرحلات الأكثر إقبالاً، وإدارة الفنادق والخدمات لحظياً.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard/trips"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              <Plus size={18} />
              <span>إضافة رحلة جديدة</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Link 
              key={i} 
              to={stat.link}
              className="group bg-[#161b22] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">{stat.label}</span>
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${stat.textColor}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-[11px] text-amber-400 font-semibold group-hover:underline">عرض والتعديل ←</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* TOP POPULAR TRIPS SECTION - (أكثر الرحلات إقبالاً) */}
      <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <Flame size={22} className="text-amber-500 animate-pulse" />
              <h2>أكثر الرحلات إقبالاً وطلباً (Top Popular Trips)</h2>
            </div>
            <p className="text-xs text-slate-400">
              ترتيب تصاعدي للرحلات الأكثر مشاهدة وطلباً وتقييماً من قبل العملاء
            </p>
          </div>

          <Link
            to="/dashboard/trips"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20"
          >
            <span>عرض كل الرحلات ({trips.length})</span>
            <span>←</span>
          </Link>
        </div>

        <div className="space-y-4">
          {popularTrips.map((trip, index) => (
            <div 
              key={trip.id}
              className="bg-[#0d1117] border border-slate-800/90 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-slate-900/40"
            >
              <div className="flex items-center gap-4">
                {/* Ranking Badge */}
                <div className={`
                  w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 border
                  ${index === 0 ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-500/10' :
                    index === 1 ? 'bg-slate-300/10 text-slate-200 border-slate-400/30' :
                    index === 2 ? 'bg-amber-800/20 text-amber-600 border-amber-700/30' :
                    'bg-slate-800 text-slate-400 border-slate-700'}
                `}>
                  #{index + 1}
                </div>

                {/* Trip Image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                  <img 
                    src={trip.images?.[0] || 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=300&q=80'} 
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-base hover:text-amber-400 transition-colors">
                      {trip.title}
                    </h3>
                    {trip.destination && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-amber-400 border border-slate-700 uppercase">
                        {trip.destination}
                      </span>
                    )}
                    {trip.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
                        🔥 الأكثر مبيعاً
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-amber-400" />
                      {trip.duration || 'غير مخصص'}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      {trip.rating || 5.0} ({trip.reviewCount || 0} تقييم)
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={13} className="text-blue-400" />
                      {trip.views || 340} مشاهدة
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions & Price */}
              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-medium">السعر المحدد</span>
                  <span className="text-lg font-black text-amber-400">
                    ${trip.price || 0}
                  </span>
                </div>

                <Link
                  to={`/dashboard/trips?edit=${trip.id}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-slate-700"
                >
                  <Edit size={14} />
                  <span>تعديل الرحلة</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 text-amber-400 font-bold">
            <Compass size={20} />
            <h3>إدارة الرحلات والبرامج</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            يمكنك إدراج رحلات جديدة، تعديل الأسعار، تغيير البرنامج اليومي التفصيلي والصور.
          </p>
          <Link
            to="/dashboard/trips"
            className="block text-center w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs transition-colors border border-slate-700"
          >
            الانتقال لإدارة الرحلات ←
          </Link>
        </div>

        <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 text-blue-400 font-bold">
            <Hotel size={20} />
            <h3>إدارة الفنادق والتنقلات</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            إضافة وتحديث بيانات الفنادق المعتمدة وأسطول حافلات وسيارات Dunas Travel.
          </p>
          <div className="flex gap-2">
            <Link
              to="/dashboard/hotels"
              className="flex-1 text-center py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold text-xs transition-colors border border-slate-700"
            >
              الفنادق
            </Link>
            <Link
              to="/dashboard/transportation"
              className="flex-1 text-center py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-400 font-bold text-xs transition-colors border border-slate-700"
            >
              التنقلات
            </Link>
          </div>
        </div>

        <div className="bg-[#161b22] border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 text-rose-400 font-bold">
            <MessageSquare size={20} />
            <h3>تقييمات وآراء العملاء</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            استعراض جميع التعليقات والآراء الخاصة بالرحلات مع إمكانية إضافة تعليق أو تعديله.
          </p>
          <Link
            to="/dashboard/reviews"
            className="block text-center w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 font-bold text-xs transition-colors border border-slate-700"
          >
            إدارة التقييمات والتعليقات ←
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
