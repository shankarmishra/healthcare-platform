import React from 'react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types';
import { ShieldAlert, User, Stethoscope, Building2, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

export const DemoRoleSwitcher: React.FC = () => {
  const { currentRole, switchRole, demoMode, currentUser } = useAuth();

  if (!demoMode) return null;

  const roles: { role: UserRole; label: string; icon: React.ReactNode; badge: string }[] = [
    { role: 'client', label: 'Client / Patient', icon: <User className="w-4 h-4" />, badge: 'Marketplace' },
    { role: 'professional', label: 'Healthcare Pro', icon: <Stethoscope className="w-4 h-4" />, badge: 'Pro App' },
    { role: 'admin', label: 'Ops Admin', icon: <ShieldCheck className="w-4 h-4" />, badge: 'Command Center' },
    { role: 'organization', label: 'Hospital Partner', icon: <Building2 className="w-4 h-4" />, badge: 'B2B Portal' }
  ];

  return (
    <div className="bg-amber-500/10 border-b border-amber-200 px-4 py-2 text-xs font-medium text-amber-900 flex flex-wrap items-center justify-between gap-3 relative z-40">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold text-[10px] tracking-wider uppercase">
          <ShieldAlert className="w-3 h-3" /> DEMO MODE
        </span>
        <span className="hidden sm:inline text-slate-700">
          Viewing as: <strong className="text-slate-900">{currentUser.firstName} {currentUser.lastName}</strong> ({currentUser.email})
        </span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full">
        <span className="text-slate-600 mr-1 hidden md:inline font-bold">Switch Portal:</span>
        {roles.map((item) => {
          const isActive = currentRole === item.role;
          return (
            <button
              key={item.role}
              onClick={() => switchRole(item.role)}
              className={clsx(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all text-xs cursor-pointer font-bold shrink-0',
                isActive
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
