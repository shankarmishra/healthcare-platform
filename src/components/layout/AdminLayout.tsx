import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import { CommandMenu } from '../common/CommandMenu';
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
  Activity,
  Command
} from 'lucide-react';
import { clsx } from 'clsx';

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  const adminMenu = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'KYC Verification', path: '/admin/kyc', icon: <ShieldCheck className="w-4 h-4" />, badge: '1 New' },
    { label: 'Staff Directory', path: '/admin/professionals', icon: <Users className="w-4 h-4" /> },
    { label: 'Bookings & Ops', path: '/admin/bookings', icon: <CalendarCheck className="w-4 h-4" /> },
    { label: 'Matching & Dispatch', path: '/admin/matching', icon: <Activity className="w-4 h-4" /> },
    { label: 'Clients', path: '/admin/clients', icon: <Users className="w-4 h-4" /> },
    { label: 'Hospitals & Orgs', path: '/admin/organizations', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Payments', path: '/admin/payments', icon: <CreditCard className="w-4 h-4" /> },
    { label: 'Payouts', path: '/admin/payouts', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Support Desk', path: '/admin/support', icon: <MessageSquare className="w-4 h-4" /> },
    { label: 'Services & Pricing', path: '/admin/services', icon: <Sliders className="w-4 h-4" /> },
    { label: 'Reports & Audit', path: '/admin/reports', icon: <FileText className="w-4 h-4" /> },
    { label: 'Platform Settings', path: '/admin/settings', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-secondary text-text-primary">
      <DemoRoleSwitcher />

      <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar — 100% Light Theme Rebuild */}
        <aside
          className={clsx(
            'bg-white border-r border-border-default text-text-secondary w-64 shrink-0 transition-all duration-300 z-30 flex flex-col shadow-subtle',
            !sidebarOpen && '-ml-64 lg:ml-0'
          )}
        >
          {/* Sidebar Brand Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-border-default">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-xs">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold text-text-primary leading-tight">Care Ops OS</span>
                <span className="text-[10px] text-brand-teal font-extrabold tracking-widest uppercase">Command Center</span>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-text-muted hover:text-text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto text-left">
            {adminMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all',
                    isActive
                      ? 'bg-canvas-teal text-brand-teal font-extrabold border border-teal-200 shadow-xs'
                      : 'text-text-secondary hover:bg-canvas-secondary hover:text-text-primary'
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
          <div className="p-4 border-t border-border-default text-[11px] text-text-muted text-left bg-canvas-secondary">
            <p className="font-extrabold text-text-primary">Ops Lead: Deepak Kumar</p>
            <p className="text-[10px] text-brand-teal font-bold">Care Operating System v3.0</p>
          </div>
        </aside>

        {/* Main Operational Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Bar */}
          <header className="bg-white border-b border-border-default h-16 px-6 flex items-center justify-between gap-4 shrink-0 shadow-subtle">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-canvas-tertiary cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Ctrl+K Command Menu Search Trigger */}
              <button
                onClick={() => setCommandMenuOpen(true)}
                className="hidden sm:flex items-center justify-between w-80 h-9 px-3 text-xs bg-canvas-secondary border border-border-default rounded-xl text-text-muted hover:border-brand-teal transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-brand-teal" /> Search bookings, staff, orgs...
                </span>
                <kbd className="flex items-center gap-0.5 bg-white px-2 py-0.5 rounded border text-[10px] font-mono text-text-primary font-bold shadow-2xs">
                  <Command className="w-3 h-3" /> K
                </kbd>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/admin/notifications" className="p-2 text-text-muted hover:text-text-primary relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
              </Link>
              <div className="h-6 w-px bg-border-default" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  DK
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-extrabold text-text-primary leading-tight">Deepak Kumar</span>
                  <span className="text-[10px] text-brand-teal font-bold uppercase">Central Dispatch Lead</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content Outlet */}
          <main className="flex-1 overflow-y-auto p-6 bg-canvas-secondary">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
