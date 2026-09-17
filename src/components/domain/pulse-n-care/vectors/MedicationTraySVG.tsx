import React from 'react';

export const MedicationTraySVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Tray Contour */}
      <rect x="20" y="30" width="360" height="160" rx="20" fill="#F8FAFC" stroke="#0D7E80" strokeWidth="2.5" />
      <rect x="30" y="40" width="340" height="140" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Medication Blister Pack */}
      <rect x="50" y="60" width="110" height="100" rx="10" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
      {[68, 105, 142].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="85" r="12" fill="#0D7E80" fillOpacity="0.15" stroke="#0D7E80" strokeWidth="1.5" />
          <circle cx={cx} cy="135" r="12" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.5" />
          {/* Animated Dose Pulse */}
          <circle cx={cx} cy="85" r="6" fill="#0D7E80">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
        </g>
      ))}

      {/* Insulin Pen / Syringe */}
      <rect x="180" y="70" width="170" height="24" rx="12" fill="#0D7E80" fillOpacity="0.1" stroke="#0D7E80" strokeWidth="2" />
      <rect x="180" y="78" width="60" height="8" fill="#0D7E80" rx="4" />
      <line x1="350" y1="82" x2="370" y2="82" stroke="#64748B" strokeWidth="2" />

      {/* Dose Measuring Cup */}
      <path d="M190 120 L210 165 C212 168 215 170 218 170 L252 170 C255 170 258 168 260 165 L280 120 Z" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
      <line x1="200" y1="140" x2="270" y2="140" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M198 145 L208 165 L262 165 L272 145 Z" fill="#2563EB" fillOpacity="0.2" />

      {/* Safety Scope Badge */}
      <g transform="translate(300, 125)">
        <rect x="0" y="0" width="60" height="40" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
        <text x="30" y="24" textAnchor="middle" fill="#15803D" fontSize="11" fontWeight="800" fontFamily="sans-serif">Rx Validated</text>
      </g>
    </svg>
  );
};
