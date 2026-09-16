import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import { Building2, LayoutDashboard, FileSpreadsheet, Users, Receipt } from 'lucide-react';
import { clsx } from 'clsx';

export const OrgLayout: React.FC = () => {
  const location = useLocation();

  const orgMenu = [
    { label: 'Dashboard', path: '/organization/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Staffing Requests', path: '/organization/requests', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { label: 'Roster Management', path: '/organization/roster', icon: <Users className="w-4 h-4" /> },
    { label: 'Timesheets & Billing', path: '/organization/timesheets', icon: <Receipt className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-secondary text-text-primary">
      <DemoRoleSwitcher />

      <header className="bg-white border-b border-border-default sticky top-0 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold text-text-primary leading-tight">
                Manipal Specialty Hospital
              </span>
              <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider">
                B2B Staffing Portal
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-canvas-secondary p-1 rounded-xl border border-border-default">
            {orgMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all',
                    isActive
                      ? 'bg-white text-brand-blue shadow-xs'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Contract Active
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};
