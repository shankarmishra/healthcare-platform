import React from 'react';

export const ClinicalDocumentationSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Nursing Chart Clipboard */}
      <rect x="50" y="35" width="180" height="150" rx="12" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="2.5" />
      <rect x="100" y="25" width="80" height="20" rx="6" fill="#0D7E80" />
      <circle cx="140" cy="35" r="4" fill="#FFFFFF" />

      {/* Chart Headers & Lines */}
      <line x1="70" y1="65" x2="210" y2="65" stroke="#0D7E80" strokeWidth="2" />
      <line x1="70" y1="90" x2="210" y2="90" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="70" y1="115" x2="210" y2="115" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="70" y1="140" x2="210" y2="140" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="70" y1="165" x2="210" y2="165" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Vertical Columns */}
      <line x1="110" y1="65" x2="110" y2="165" stroke="#E2E8F0" strokeWidth="1.5" />
      <line x1="160" y1="65" x2="160" y2="165" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Animated Checkmarks */}
      {[78, 103, 128, 153].map((cy, i) => (
        <path key={i} d={`M80 ${cy} L88 ${cy + 6} L100 ${cy - 6}`} fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
        </path>
      ))}

      {/* Digital Handover Card */}
      <g transform="translate(250, 45)">
        <rect x="0" y="0" width="110" height="130" rx="12" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <rect x="15" y="15" width="80" height="10" rx="3" fill="#2563EB" />
        <rect x="15" y="35" width="80" height="6" rx="2" fill="#93C5FD" />
        <rect x="15" y="50" width="80" height="6" rx="2" fill="#93C5FD" />
        <rect x="15" y="65" width="50" height="6" rx="2" fill="#93C5FD" />
        <circle cx="55" cy="100" r="14" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M49 100 L53 104 L61 96" fill="none" stroke="#2563EB" strokeWidth="2" />
      </g>
    </svg>
  );
};
