import React from 'react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types';
import { ShieldAlert, User, Stethoscope, Building2, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

export const DemoRoleSwitcher: React.FC = () => {
  const { currentRole, switchRole, demoMode, currentUser } = useAuth();

  if (!demoMode) return null;

  const roles: { role: UserRole; label: string; icon: React.ReactNode; badge: string }[] = [
    { role: 'client', label: 'Client / Patient', icon: <User className="w-3.5 h-3.5" />, badge: 'Marketplace' },
    { role: 'professional', label: 'Healthcare Pro', icon: <Stethoscope className="w-3.5 h-3.5" />, badge: 'Pro App' },
    { role: 'admin', label: 'Ops Admin', icon: <ShieldCheck className="w-3.5 h-3.5" />, badge: 'Command Center' },
    { role: 'organization', label: 'Hospital Partner', icon: <Building2 className="w-3.5 h-3.5" />, badge: 'B2B Portal' }
  ];

  return (
    <div className="bg-amber-500/10 border-b border-amber-200/80 px-3 sm:px-6 py-1.5 text-xs font-medium text-amber-950 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 relative z-40 max-w-full overflow-hidden">
      <div className="flex items-center gap-2 min-w-0 shrink">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-600 text-white font-extrabold text-[10px] tracking-wider uppercase shrink-0">
          <ShieldAlert className="w-3 h-3" /> DEMO MODE
        </span>
        <span className="text-slate-700 text-[11px] sm:text-xs truncate">
          Viewing as: <strong className="text-slate-900 font-bold">{currentUser?.firstName || 'User'} {currentUser?.lastName || ''}</strong>
        </span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto max-w-full min-w-0 py-0.5 shrink-0 no-scrollbar">
        <span className="text-slate-600 hidden lg:inline font-bold text-[11px] mr-0.5 shrink-0">Switch Portal:</span>
        {roles.map((item) => {
          const isActive = currentRole === item.role;
          return (
            <button
              key={item.role}
              onClick={() => switchRole(item.role)}
              className={clsx(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-all text-[11px] sm:text-xs cursor-pointer font-bold shrink-0 shadow-2xs',
                isActive
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300/80'
              )}
            >
              {item.icon}
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
