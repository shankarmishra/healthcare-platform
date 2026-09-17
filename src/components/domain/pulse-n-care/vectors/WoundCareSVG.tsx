import React from 'react';

export const WoundCareSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Sterile Zone */}
      <rect x="30" y="25" width="340" height="170" rx="16" fill="#F0FDFA" stroke="#0D7E80" strokeWidth="2" strokeDasharray="6 4" />

      {/* Sterile Dressing Pad */}
      <rect x="60" y="55" width="130" height="110" rx="12" fill="#FFFFFF" stroke="#0D7E80" strokeWidth="2" />
      <rect x="75" y="70" width="100" height="80" rx="8" fill="#CCFBF1" stroke="#0D7E80" strokeWidth="1.5" />
      {/* Grid Pattern on Gauze */}
      <path d="M95 70 V150 M115 70 V150 M135 70 V150 M155 70 V150" stroke="#99F6E4" strokeWidth="1.5" />
      <path d="M75 90 H175 M75 110 H175 M75 130 H175" stroke="#99F6E4" strokeWidth="1.5" />

      {/* Animated Hygiene Scan Ring */}
      <rect x="70" y="65" width="110" height="90" rx="10" fill="none" stroke="#0D7E80" strokeWidth="2">
        <animate attributeName="stroke-dasharray" values="0,400;400,0" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Bandage Roll */}
      <g transform="translate(220, 60)">
        <ellipse cx="40" cy="40" rx="35" ry="35" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
        <ellipse cx="40" cy="40" rx="18" ry="18" fill="#F1F5F9" stroke="#0D7E80" strokeWidth="2" />
        <path d="M40 75 Q 90 75 110 110" fill="none" stroke="#CBD5E1" strokeWidth="24" strokeLinecap="round" />
        <path d="M40 75 Q 90 75 110 110" fill="none" stroke="#0D7E80" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      </g>

      {/* Aseptic Indicator Badge */}
      <g transform="translate(240, 145)">
        <rect x="0" y="0" width="110" height="32" rx="16" fill="#0D7E80" />
        <text x="55" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">Aseptic Protocol ✓</text>
      </g>
    </svg>
  );
};
