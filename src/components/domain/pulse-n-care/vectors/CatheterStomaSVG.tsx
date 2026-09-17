import React from 'react';

export const CatheterStomaSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Sterile Drainage Bag */}
      <path d="M70 50 L160 50 L175 160 C175 170 165 180 150 180 L80 180 C65 180 55 170 55 160 Z" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="2" />
      {/* Graduated Volume Markings */}
      <line x1="140" y1="80" x2="160" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="135" y1="110" x2="160" y2="110" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="130" y1="140" x2="160" y2="140" stroke="#94A3B8" strokeWidth="1.5" />
      <text x="110" y="115" fill="#64748B" fontSize="9" fontWeight="700">500ml</text>

      {/* Drainage Tube with Pulse Line */}
      <path d="M115 20 L115 50" stroke="#0D7E80" strokeWidth="4" strokeLinecap="round" />
      <circle cx="115" cy="35" r="3" fill="#2563EB">
        <animate attributeName="cy" values="20;50" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Stoma / Ostomy Appliance Container */}
      <g transform="translate(210, 50)">
        <rect x="0" y="0" width="150" height="120" rx="14" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="75" cy="60" r="32" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="75" cy="60" r="16" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" />
        <text x="75" y="105" textAnchor="middle" fill="#1E40AF" fontSize="11" fontWeight="800">Skin Barrier & Flange</text>
      </g>

      {/* Hygiene Lock Badge */}
      <g transform="translate(55, 60)">
        <rect x="0" y="0" width="70" height="22" rx="4" fill="#0D7E80" />
        <text x="35" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">Closed System</text>
      </g>
    </svg>
  );
};
