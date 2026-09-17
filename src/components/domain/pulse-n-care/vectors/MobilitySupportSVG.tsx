import React from 'react';

export const MobilitySupportSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Walker Support Frame Line Art */}
      <g transform="translate(60, 40)">
        <path d="M20 120 L20 30 C20 20 40 20 60 20 L100 20 C120 20 140 20 140 30 L140 120" stroke="#0D7E80" strokeWidth="4" fill="none" strokeLinecap="round" />
        <line x1="20" y1="60" x2="140" y2="60" stroke="#0D7E80" strokeWidth="3" />
        <line x1="20" y1="90" x2="140" y2="90" stroke="#0D7E80" strokeWidth="2" />
        <circle cx="20" cy="125" r="7" fill="#0F172A" />
        <circle cx="140" cy="125" r="7" fill="#0F172A" />
      </g>

      {/* Walking Footstep Pathway */}
      <g transform="translate(230, 45)">
        <rect x="0" y="0" width="130" height="130" rx="14" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        {/* Footprints */}
        <ellipse cx="40" cy="100" rx="8" ry="14" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="1.5" />
        <ellipse cx="85" cy="70" rx="8" ry="14" fill="#2563EB" fillOpacity="0.3" stroke="#2563EB" strokeWidth="1.5" />
        <ellipse cx="40" cy="40" rx="8" ry="14" fill="#2563EB" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M40 90 Q 85 85 85 60 T 40 30" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3" />
        <text x="65" y="120" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="800">Guided Fall-Safe Path</text>
      </g>

      {/* Safety Badge */}
      <g transform="translate(70, 155)">
        <rect x="0" y="0" width="120" height="26" rx="13" fill="#0D7E80" />
        <text x="60" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">Fall Prevention Active</text>
      </g>
    </svg>
  );
};
