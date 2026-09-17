import React from 'react';

export const TubeFeedingSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Container */}
      <rect x="20" y="20" width="360" height="180" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      {/* Enteral Nutrition Pack */}
      <path d="M70 40 C70 30 130 30 130 40 L130 140 C130 150 70 150 70 140 Z" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="2" />
      <rect x="80" y="60" width="40" height="65" rx="4" fill="#0D7E80" fillOpacity="0.1" />
      <line x1="85" y1="80" x2="115" y2="80" stroke="#0D7E80" strokeWidth="1.5" />
      <line x1="85" y1="95" x2="115" y2="95" stroke="#0D7E80" strokeWidth="1.5" />
      <line x1="85" y1="110" x2="105" y2="110" stroke="#0D7E80" strokeWidth="1.5" />

      {/* Syringe Flushing Tool */}
      <rect x="220" y="50" width="120" height="35" rx="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
      <line x1="240" y1="50" x2="240" y2="85" stroke="#2563EB" strokeWidth="1.5" />
      <line x1="260" y1="50" x2="260" y2="85" stroke="#2563EB" strokeWidth="1.5" />
      <line x1="280" y1="50" x2="280" y2="85" stroke="#2563EB" strokeWidth="1.5" />
      <rect x="340" y="62" width="40" height="11" fill="#2563EB" rx="3" />

      {/* Flow Tube Pathway */}
      <path d="M100 145 C 100 195 200 195 200 120 C 200 85 220 67 220 67" fill="none" stroke="#0D7E80" strokeWidth="4" strokeLinecap="round" />
      
      {/* Animated Flow Bubbles */}
      <circle cx="100" cy="160" r="4" fill="#38BDF8">
        <animate attributeName="cy" values="145;185" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Label Callouts */}
      <g transform="translate(230, 120)">
        <rect x="0" y="0" width="130" height="50" rx="10" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="1.5" />
        <text x="15" y="22" fill="#0F172A" fontSize="11" fontWeight="800" fontFamily="sans-serif">Ryle's / PEG Tube</text>
        <text x="15" y="38" fill="#0D7E80" fontSize="10" fontWeight="700" fontFamily="sans-serif">Flushing & Gravity Feed</text>
      </g>
    </svg>
  );
};
