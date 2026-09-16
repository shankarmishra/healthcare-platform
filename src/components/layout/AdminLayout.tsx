import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Building2,
  Sliders,
  DollarSign,
  Activity
} from 'lucide-react';
import { clsx } from 'clsx';

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const adminMenu = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'KYC Verification', path: '/admin/kyc', icon: <ShieldCheck className="w-5 h-5" />, badge: '1 New' },
    { label: 'Professionals', path: '/admin/professionals', icon: <Users className="w-5 h-5" /> },
    { label: 'Bookings & Ops', path: '/admin/bookings', icon: <CalendarCheck className="w-5 h-5" /> },
    { label: 'Matching & Dispatch', path: '/admin/matching', icon: <Activity className="w-5 h-5" /> },
    { label: 'Clients', path: '/admin/clients', icon: <Users className="w-5 h-5" /> },
    { label: 'Hospitals & Orgs', path: '/admin/organizations', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Payments', path: '/admin/payments', icon: <CreditCard className="w-5 h-5" /> },
    { label: 'Payouts', path: '/admin/payouts', icon: <DollarSign className="w-5 h-5" /> },
    { label: 'Support Desk', path: '/admin/support', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Services & Pricing', path: '/admin/services', icon: <Sliders className="w-5 h-5" /> },
    { label: 'Reports & Audit', path: '/admin/reports', icon: <FileText className="w-5 h-5" /> },
    { label: 'Platform Settings', path: '/admin/settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-secondary text-text-primary">
      <DemoRoleSwitcher />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className={clsx(
            'bg-slate-900 text-slate-300 w-64 shrink-0 transition-all duration-300 z-30 flex flex-col',
            !sidebarOpen && '-ml-64 lg:ml-0'
          )}
        >
          {/* Sidebar Brand Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center text-white">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-white leading-tight">CommandCenter</span>
                <span className="text-[10px] text-teal-400 font-bold tracking-widest uppercase">Ops Portal</span>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {adminMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors',
                    isActive
                      ? 'bg-brand-teal text-white shadow-xs'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Admin Footer Badge */}
          <div className="p-4 border-t border-slate-800 text-[11px] text-slate-400">
            <p className="font-semibold text-slate-200">Ops Lead: Deepak Kumar</p>
            <p className="text-[10px] text-slate-500">CareConnect System v2.4</p>
          </div>
        </aside>

        {/* Main Operational Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Bar */}
          <header className="bg-white border-b border-border-default h-16 px-6 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-canvas-tertiary"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden sm:block w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search bookings, pros, clients..."
                  className="w-full h-9 pl-9 pr-4 text-xs bg-canvas-secondary border border-border-default rounded-lg focus:outline-none focus:border-brand-teal"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/admin/notifications" className="p-2 text-text-muted hover:text-text-primary relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
              </Link>
              <div className="h-6 w-px bg-border-default" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                  DK
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-bold text-text-primary leading-none">Deepak Ops</span>
                  <span className="text-[10px] text-text-muted mt-0.5">Super Admin</span>
                </div>
              </div>
            </div>
          </header>

          {/* View Container */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
