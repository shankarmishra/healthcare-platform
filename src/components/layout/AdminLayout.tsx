import React, { useState, useEffect } from 'react';
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
  Command,
  Briefcase,
} from 'lucide-react';
import { clsx } from 'clsx';

interface AdminMenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

interface AdminMenuGroup {
  group: string;
  items: AdminMenuItem[];
}

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const adminMenuGroups: AdminMenuGroup[] = [
    {
      group: 'COMMAND',
      items: [
        { label: 'Operations Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { label: 'Dispatch & Eligibility', path: '/admin/matching', icon: <Activity className="w-4 h-4" /> },
      ],
    },
    {
      group: 'CARE & CLIENTS',
      items: [
        { label: 'Home Care Bookings', path: '/admin/bookings', icon: <CalendarCheck className="w-4 h-4" /> },
        { label: 'Clients & Patients', path: '/admin/clients', icon: <Users className="w-4 h-4" /> },
        { label: 'Services & Pricing', path: '/admin/services', icon: <Sliders className="w-4 h-4" /> },
      ],
    },
    {
      group: 'WORKFORCE OS',
      items: [
        { label: 'In-House Staff Directory', path: '/admin/staff', icon: <Users className="w-4 h-4" />, badge: 'OS' },
        { label: 'KYC & License Queue', path: '/admin/kyc', icon: <ShieldCheck className="w-4 h-4" />, badge: '1 New' },
      ],
    },
    {
      group: 'B2B INSTITUTIONAL',
      items: [
        { label: 'Staffing Requisitions', path: '/admin/organization-requests', icon: <Building2 className="w-4 h-4" /> },
        { label: 'Hospitals & Partner Orgs', path: '/admin/organizations', icon: <Building2 className="w-4 h-4" /> },
      ],
    },
    {
      group: 'TALENT & ATS',
      items: [
        { label: 'Careers ATS Pipeline', path: '/admin/careers', icon: <Briefcase className="w-4 h-4" /> },
      ],
    },
    {
      group: 'FINANCE & PAYROLL',
      items: [
        { label: 'Client Invoices', path: '/admin/payments', icon: <CreditCard className="w-4 h-4" /> },
        { label: 'Staff Payroll Payouts', path: '/admin/payouts', icon: <DollarSign className="w-4 h-4" /> },
      ],
    },
    {
      group: 'QUALITY & SUPPORT',
      items: [
        { label: 'Clinical QA Reviews', path: '/admin/reviews', icon: <FileText className="w-4 h-4" /> },
        { label: 'Support Escalations', path: '/admin/support', icon: <MessageSquare className="w-4 h-4" /> },
      ],
    },
    {
      group: 'SYSTEM & AUDIT',
      items: [
        { label: 'Reports & Audit Logs', path: '/admin/reports', icon: <FileText className="w-4 h-4" /> },
        { label: 'RBAC Roles', path: '/admin/roles', icon: <ShieldCheck className="w-4 h-4" /> },
        { label: 'Platform Settings', path: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-secondary text-text-primary">
      <DemoRoleSwitcher />

      <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />

      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Backdrop Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden transition-opacity"
          />
        )}

        {/* Left Sidebar — Grouped Navigation */}
        <aside
          className={clsx(
            'bg-white border-r border-border-default text-text-secondary w-64 shrink-0 transition-transform duration-300 z-40 flex flex-col shadow-subtle',
            'fixed inset-y-0 left-0 lg:static lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {/* Sidebar Brand Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-border-default shrink-0">
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
              className="lg:hidden text-text-muted hover:text-text-primary p-1 rounded-lg hover:bg-canvas-tertiary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grouped Navigation Links */}
          <nav className="flex-1 p-3 space-y-4 overflow-y-auto text-left">
            {adminMenuGroups.map((group) => (
              <div key={group.group} className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3.5 block">
                  {group.group}
                </span>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={clsx(
                        'flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all',
                        isActive
                          ? 'bg-canvas-teal text-brand-teal font-extrabold border border-teal-200 shadow-xs'
                          : 'text-text-secondary hover:bg-canvas-secondary hover:text-text-primary'
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {item.icon}
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* Admin Footer Badge */}
          <div className="p-4 border-t border-border-default text-[11px] text-text-muted text-left bg-canvas-secondary shrink-0">
            <p className="font-extrabold text-text-primary">Ops Lead: Deepak Kumar</p>
            <p className="text-[10px] text-brand-teal font-bold">Pulse n Care OS v3.1</p>
          </div>
        </aside>

        {/* Main Operational Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Bar */}
          <header className="bg-white border-b border-border-default h-16 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 shadow-subtle">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-canvas-tertiary cursor-pointer lg:hidden"
                aria-label="Toggle Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCommandMenuOpen(true)}
                className="flex items-center justify-between w-48 sm:w-80 h-9 px-3 text-xs bg-canvas-secondary border border-border-default rounded-xl text-text-muted hover:border-brand-teal transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate">
                  <Search className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="truncate">Search ops, staff, clients...</span>
                </span>
                <kbd className="hidden sm:flex items-center gap-0.5 bg-white px-2 py-0.5 rounded border text-[10px] font-mono text-text-primary font-bold shadow-2xs shrink-0">
                  <Command className="w-3 h-3" /> K
                </kbd>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/admin/notifications" className="p-2 text-text-muted hover:text-text-primary relative rounded-lg hover:bg-canvas-tertiary">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
              </Link>
              <div className="h-6 w-px bg-border-default" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0">
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
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-canvas-secondary">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
