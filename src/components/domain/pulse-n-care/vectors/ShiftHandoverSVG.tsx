import React from 'react';
import { Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';

export const ShiftHandoverSVG: React.FC = () => {
  return (
    <div className="bg-canvas-secondary p-5 rounded-3xl border border-border-default space-y-4 text-left">
      <div className="flex items-center justify-between border-b border-border-default pb-3">
        <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-teal" /> Rotational Care Continuity
        </span>
        <span className="text-[10px] font-bold text-slate-700 bg-white px-2.5 py-0.5 rounded-full border border-border-default">
          24×7 COVERAGE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-xs">
        {/* Day Shift Node */}
        <div className="p-4 bg-white rounded-2xl border border-border-default space-y-2 text-center shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-text-primary text-sm block">Day Shift</span>
            <span className="text-text-muted text-[11px]">08:00 AM – 08:00 PM (12h)</span>
          </div>
          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full block border border-amber-200">
            Primary Nurse Active
          </span>
        </div>

        {/* Handover Node */}
        <div className="p-4 bg-canvas-teal rounded-2xl border border-teal-200 space-y-2 text-center shadow-xs">
          <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-brand-teal text-sm block">Structured Handover</span>
            <span className="text-teal-800 text-[11px]">15-Min Clinical Briefing</span>
          </div>
          <span className="text-[10px] font-extrabold text-teal-900 bg-white px-2 py-0.5 rounded-full block border border-teal-200">
            Vitals • Meds • Pending Tasks
          </span>
        </div>

        {/* Night Shift Node */}
        <div className="p-4 bg-white rounded-2xl border border-border-default space-y-2 text-center shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-200">
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-text-primary text-sm block">Night Shift</span>
            <span className="text-text-muted text-[11px]">08:00 PM – 08:00 AM (12h)</span>
          </div>
          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full block border border-indigo-200">
            Overnight Nurse Active
          </span>
        </div>
      </div>
    </div>
  );
};
