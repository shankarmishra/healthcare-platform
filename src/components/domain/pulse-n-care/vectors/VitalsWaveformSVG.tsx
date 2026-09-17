import React from 'react';

export const VitalsWaveformSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-16' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-slate-900 p-3 text-emerald-400 border border-slate-800 ${className}`}>
      <div className="flex items-center justify-between text-[11px] font-mono mb-1 font-bold text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          ECG / SpO₂ MONITORING
        </span>
        <span className="text-emerald-400 font-extrabold text-xs">76 BPM • SpO₂ 98%</span>
      </div>

      <svg className="w-full h-8 text-emerald-400" viewBox="0 0 300 40" preserveAspectRatio="none">
        <path
          d="M 0,20 L 40,20 L 48,12 L 56,32 L 64,4 L 72,36 L 80,18 L 88,20 L 140,20 L 148,12 L 156,32 L 164,4 L 172,36 L 180,18 L 188,20 L 240,20 L 248,12 L 256,32 L 264,4 L 272,36 L 280,18 L 300,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
