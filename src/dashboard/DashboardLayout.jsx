import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Compass, 
  Package, 
  Hotel, 
  Bus, 
  MessageSquare, 
  ArrowLeft, 
  Menu, 
  X, 
  Sparkles,
  TrendingUp,
  SlidersHorizontal,
  Bell
} from 'lucide-react';
import Logo from '../components/ui/Logo';

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      name: 'الصفحة الرئيسية',
      english: 'Overview & Popular Trips',
      path: '/dashboard',
      icon: LayoutDashboard,
      badge: 'الرئيسية'
    },
    {
      name: 'إدارة الرحلات',
      english: 'Trips Management',
      path: '/dashboard/trips',
      icon: Compass,
    },
    {
      name: 'إدارة الباكدجز',
      english: 'Packages Management',
      path: '/dashboard/packages',
      icon: Package,
    },
    {
      name: 'إدارة الفنادق',
      english: 'Hotels Management',
      path: '/dashboard/hotels',
      icon: Hotel,
    },
    {
      name: 'إدارة التنقلات',
      english: 'Transportation Fleet',
      path: '/dashboard/transportation',
      icon: Bus,
    },
    {
      name: 'التعليقات والتقييمات',
      english: 'Trip Reviews & Comments',
      path: '/dashboard/reviews',
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans dir-rtl">
      {/* Top Header Bar */}
      <header className="h-16 bg-[#161b22] border-b border-slate-800 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-3">
            <Logo theme="dark" height={36} />
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Admin Control Panel
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <span className="text-xs text-slate-400 font-medium">
              لوحة تحكم إدارة DUNAS TRAVEL
            </span>
          </div>

          <button className="relative p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 transition-colors">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-200 shadow-md shadow-amber-500/10"
          >
            <ArrowLeft size={16} />
            <span>العودة للموقع</span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static inset-y-0 right-0 z-50 w-72 bg-[#161b22] border-l border-slate-800/80 
          transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 
          transition-transform duration-300 ease-in-out flex flex-col justify-between p-4 top-16 lg:top-0
        `}>
          <div className="space-y-6">
            <div className="px-3 pt-2">
              <p className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">
                قائمة التحكم والأقسام
              </p>
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      group flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/5 font-semibold' 
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={19} className={isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'} />
                      <span>{item.name}</span>
                    </div>

                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles size={16} />
              <span className="text-xs font-bold">نظام الإدارة المباشر</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              أي تعديل تقوم به من هذه الصفحة يتم تحديثه تلقائياً وفي التو واللحظة عبر جميع صفحات الموقع.
            </p>
          </div>
        </aside>

        {/* Main Dashboard Content Area */}
        <main className="flex-1 bg-[#0d1117] overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
