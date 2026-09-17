import React from 'react';

export const PersonalCareSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Bed Positioning Diagram */}
      <g transform="translate(40, 40)">
        <rect x="0" y="60" width="160" height="15" rx="4" fill="#0D7E80" />
        <rect x="15" y="30" width="130" height="30" rx="6" fill="#CCFBF1" stroke="#0D7E80" strokeWidth="1.5" />
        <circle cx="35" cy="45" r="10" fill="#0D7E80" opacity="0.3" />
        
        {/* 2-Hour Repositioning Arrow */}
        <path d="M60 20 C 90 0 120 20 120 30" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />
        <text x="80" y="95" textAnchor="middle" fill="#0D7E80" fontSize="11" fontWeight="800">2-Hour Position Shift</text>
      </g>

      {/* Comfort & Grooming Tools */}
      <g transform="translate(230, 45)">
        <rect x="0" y="0" width="130" height="125" rx="12" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="45" cy="40" r="20" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M40 30 L50 50 M35 45 L55 35" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <text x="65" y="85" textAnchor="middle" fill="#1E40AF" fontSize="11" fontWeight="800">Sponge Bath & Hygiene</text>
        <text x="65" y="105" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="700">Dignified Patient Support</text>
      </g>

      {/* Heart Pulse Icon */}
      <circle cx="200" cy="110" r="18" fill="#F43F5E" fillOpacity="0.1" stroke="#F43F5E" strokeWidth="2" />
      <path d="M193 110 L197 110 L200 102 L203 118 L206 110 L207 110" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
