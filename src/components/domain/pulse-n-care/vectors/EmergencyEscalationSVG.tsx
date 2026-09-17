import React from 'react';
import { Eye, Stethoscope, AlertTriangle, UserCheck } from 'lucide-react';

export const EmergencyEscalationSVG: React.FC = () => {
  const steps = [
    { num: '01', title: 'Observation', desc: 'Nurse monitors vital signs & clinical symptoms', icon: <Eye className="w-4 h-4 text-brand-teal" /> },
    { num: '02', title: 'Nurse Assessment', desc: 'Identifies changes (e.g. low SpO₂, fever, breathlessness)', icon: <Stethoscope className="w-4 h-4 text-brand-teal" /> },
    { num: '03', title: 'Early Escalation', desc: 'Triggers clinical protocol & Ops Desk notification', icon: <AlertTriangle className="w-4 h-4 text-amber-600" /> },
    { num: '04', title: 'Physician / Family Alert', desc: 'Attending doctor & family informed immediately', icon: <UserCheck className="w-4 h-4 text-emerald-600" /> }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
      {steps.map((s) => (
        <div key={s.num} className="p-4 bg-white rounded-2xl border border-border-default shadow-2xs space-y-2 relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-extrabold text-brand-teal">{s.num}</span>
            <div className="w-8 h-8 rounded-xl bg-canvas-tertiary flex items-center justify-center">
              {s.icon}
            </div>
          </div>
          <h4 className="font-extrabold text-text-primary text-xs">{s.title}</h4>
          <p className="text-[11px] text-text-muted leading-tight">{s.desc}</p>
        </div>
      ))}
    </div>
  );
};
