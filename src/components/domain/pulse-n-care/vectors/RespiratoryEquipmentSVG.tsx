import React from 'react';

export const RespiratoryEquipmentSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Oxygen Concentrator Body */}
      <rect x="50" y="40" width="130" height="140" rx="14" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="2.5" />
      <rect x="65" y="55" width="100" height="35" rx="6" fill="#0F172A" />
      <text x="115" y="77" textAnchor="middle" fill="#38BDF8" fontSize="16" fontWeight="900" fontFamily="monospace">95% O₂</text>
      
      {/* Flowmeter Dial */}
      <circle cx="85" cy="120" r="16" fill="#F1F5F9" stroke="#0D7E80" strokeWidth="2" />
      <line x1="85" y1="120" x2="95" y2="112" stroke="#0D7E80" strokeWidth="2.5" strokeLinecap="round" />
      <text x="115" y="125" fill="#0D7E80" fontSize="12" fontWeight="800">5 L/min</text>

      {/* Pulse Oximeter Clip */}
      <g transform="translate(220, 45)">
        <rect x="0" y="0" width="130" height="70" rx="12" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <rect x="15" y="12" width="100" height="30" rx="4" fill="#0F172A" />
        <text x="40" y="32" fill="#EF4444" fontSize="14" fontWeight="900" fontFamily="monospace">98</text>
        <text x="80" y="32" fill="#10B981" fontSize="14" fontWeight="900" fontFamily="monospace">76</text>
        <text x="40" y="58" fill="#64748B" fontSize="9" fontWeight="700">%SpO₂</text>
        <text x="80" y="58" fill="#64748B" fontSize="9" fontWeight="700">PR bpm</text>
      </g>

      {/* Airflow Wave Lines */}
      <path d="M220 150 Q 250 135 280 150 T 340 150" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="d" values="M220 150 Q 250 135 280 150 T 340 150; M220 150 Q 250 165 280 150 T 340 150; M220 150 Q 250 135 280 150 T 340 150" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M220 165 Q 250 150 280 165 T 340 165" fill="none" stroke="#0D7E80" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
};
