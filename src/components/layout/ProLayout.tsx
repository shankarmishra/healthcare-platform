import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useBookings } from '../../context/BookingContext';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  IndianRupee,
  User,
  ShieldCheck,
  Bell,
  Power
} from 'lucide-react';
import { clsx } from 'clsx';

export const ProLayout: React.FC = () => {
  const { currentUser } = useAuth();
  const { professionals } = useBookings();
  const location = useLocation();

  // Find active professional profile
  const proProfile = professionals.find((p) => p.userId === currentUser.id) || professionals[0];
  const [isOnline, setIsOnline] = useState(proProfile.availabilityStatus === 'active');

  const navItems = [
    { label: 'Dashboard', path: '/pro/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'My Assignments', path: '/pro/jobs', icon: <Briefcase className="w-5 h-5" />, badge: 2 },
    { label: 'Schedule & Attendance', path: '/pro/schedule', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Payroll & Earnings', path: '/pro/earnings', icon: <IndianRupee className="w-5 h-5" /> },
    { label: 'Employee Profile', path: '/pro/profile', icon: <User className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-secondary text-text-primary pb-16 md:pb-0">
      <DemoRoleSwitcher />

      {/* Header */}
      <header className="bg-white border-b border-border-default sticky top-0 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={proProfile.profilePhoto}
              alt={proProfile.displayName}
              className="w-9 h-9 rounded-full object-cover border border-border-default ring-2 ring-brand-teal/20"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-primary leading-tight flex items-center gap-1">
                {proProfile.displayName}
                {proProfile.isVerified && (
                  <span title="KYC Verified" className="inline-flex">
                    <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  </span>
                )}
              </span>
              <span className="text-xs text-brand-teal font-semibold">Employee Portal (Staff ID: {proProfile.employeeId || 'EMP-1042'})</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-canvas-secondary p-1 rounded-xl border border-border-default">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all',
                    isActive
                      ? 'bg-white text-brand-teal shadow-xs'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 bg-brand-teal text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Availability Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={clsx(
                'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border',
                isOnline
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
              )}
            >
              <Power className={clsx('w-3.5 h-3.5', isOnline ? 'text-emerald-600' : 'text-slate-400')} />
              <span>{isOnline ? 'ONLINE' : 'OFFLINE'}</span>
            </button>

            <Link to="/pro/notifications" className="p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-canvas-tertiary relative">
              <Bell className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-default z-40 flex items-center justify-around h-16 px-2 shadow-floating">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex flex-col items-center justify-center w-full h-full text-[11px] font-semibold gap-0.5 transition-colors',
                isActive ? 'text-brand-teal' : 'text-text-muted hover:text-text-primary'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
