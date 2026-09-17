import React from 'react';

export const DelhiNCRMapSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Boundary Card */}
      <rect x="10" y="10" width="480" height="260" rx="20" fill="#F8FAFC" stroke="#0D7E80" strokeWidth="2" />
      <path d="M10 140 H490" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 10 V270" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />

      {/* Hub Network Connecting Paths */}
      <path d="M190 90 L330 110 L350 200 L170 190 Z" fill="#0D7E80" fillOpacity="0.04" stroke="#0D7E80" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M190 90 L330 110" stroke="#0D7E80" strokeWidth="2.5" />
      <path d="M190 90 L170 190" stroke="#0D7E80" strokeWidth="2.5" />
      <path d="M330 110 L350 200" stroke="#0D7E80" strokeWidth="2.5" />
      <path d="M170 190 L350 200" stroke="#0D7E80" strokeWidth="2.5" />

      {/* Hub Node 1: Delhi Central */}
      <g transform="translate(190, 90)">
        <circle cx="0" cy="0" r="18" fill="#0D7E80" fillOpacity="0.15" />
        <circle cx="0" cy="0" r="10" fill="#0D7E80" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <rect x="-45" y="-36" width="90" height="22" rx="6" fill="#0F172A" />
        <text x="0" y="-21" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">New Delhi Hub</text>
      </g>

      {/* Hub Node 2: Noida */}
      <g transform="translate(330, 110)">
        <circle cx="0" cy="0" r="18" fill="#2563EB" fillOpacity="0.15" />
        <circle cx="0" cy="0" r="10" fill="#2563EB" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <rect x="-35" y="-36" width="70" height="22" rx="6" fill="#0F172A" />
        <text x="0" y="-21" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">Noida Hub</text>
      </g>

      {/* Hub Node 3: Gurugram */}
      <g transform="translate(170, 190)">
        <circle cx="0" cy="0" r="18" fill="#10B981" fillOpacity="0.15" />
        <circle cx="0" cy="0" r="10" fill="#10B981" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <rect x="-45" y="16" width="90" height="22" rx="6" fill="#0F172A" />
        <text x="0" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">Gurugram Hub</text>
      </g>

      {/* Hub Node 4: Faridabad */}
      <g transform="translate(350, 200)">
        <circle cx="0" cy="0" r="18" fill="#F59E0B" fillOpacity="0.15" />
        <circle cx="0" cy="0" r="10" fill="#F59E0B" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <rect x="-45" y="16" width="90" height="22" rx="6" fill="#0F172A" />
        <text x="0" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">Faridabad Hub</text>
      </g>

      {/* Sequential Node Radar Rings */}
      <circle cx="190" cy="90" r="28" fill="none" stroke="#0D7E80" strokeWidth="1.5">
        <animate attributeName="r" values="10;32;10" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Coverage Guarantee Badge */}
      <g transform="translate(25, 225)">
        <rect x="0" y="0" width="220" height="30" rx="8" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="1.5" />
        <text x="110" y="19" textAnchor="middle" fill="#0D7E80" fontSize="11" fontWeight="800">✓ Verified 2-Hour Dispatch Region</text>
      </g>
    </svg>
  );
};
