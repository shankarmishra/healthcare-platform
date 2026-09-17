import React from 'react';

export interface DelhiNCRMapSVGProps {
  className?: string;
  activeHubId?: string;
  selectedCity?: string;
  onSelectHub?: (hubId: string) => void;
  interactive?: boolean;
}

export const DelhiNCRMapSVG: React.FC<DelhiNCRMapSVGProps> = ({
  className = 'w-full h-auto',
  activeHubId,
  selectedCity,
  onSelectHub,
  interactive = true
}) => {
  // Determine which hub is highlighted based on props
  const isSelected = (id: string, city: string) => {
    if (activeHubId) return activeHubId === id;
    const targetCity = selectedCity || city;
    if (targetCity) {
      const cityNorm = targetCity.toLowerCase();
      if (id === 'hub-south-delhi' && (cityNorm.includes('delhi') || cityNorm.includes('central'))) return true;
      if (id === 'hub-noida' && cityNorm.includes('noida')) return true;
      if (id === 'hub-gurugram' && (cityNorm.includes('gurugram') || cityNorm.includes('gurgaon'))) return true;
      if (id === 'hub-faridabad' && cityNorm.includes('faridabad')) return true;
    }
    // Default highlight South Delhi if none specified
    return id === 'hub-south-delhi';
  };

  return (
    <div className="relative group overflow-hidden rounded-3xl border border-slate-200/80 shadow-card bg-slate-900">
      <svg
        viewBox="0 0 900 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="delhiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D7E80" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="noidaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.10" />
          </linearGradient>

          <linearGradient id="gurugramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.10" />
          </linearGradient>

          <linearGradient id="faridabadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.10" />
          </linearGradient>

          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
          </linearGradient>

          {/* Grid pattern */}
          <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
          </pattern>
        </defs>

        {/* Base Background Rect */}
        <rect width="900" height="560" fill="url(#bgGrad)" />
        <rect width="900" height="560" fill="url(#mapGrid)" />

        {/* Regional Boundaries (Detailed Geographic Polygons) */}
        
        {/* 1. Haryana / Gurugram Region Polygon (Bottom Left) */}
        <g id="region-gurugram">
          <path
            d="M 60 260 L 180 230 L 320 280 L 360 380 L 300 510 L 80 520 L 40 400 Z"
            fill="url(#gurugramGrad)"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.9"
          />
          <text x="170" y="440" fill="#6EE7B7" fontSize="13" fontWeight="800" letterSpacing="1.5">
            GURUGRAM NCR ZONE
          </text>
          <text x="170" y="458" fill="#94A3B8" fontSize="10" fontWeight="600">
            DLF Cyber City • Golf Course Rd • Sec 56
          </text>
        </g>

        {/* 2. Uttar Pradesh / Noida Region Polygon (Mid-Right) */}
        <g id="region-noida">
          <path
            d="M 530 140 L 730 110 L 860 200 L 840 380 L 680 410 L 550 320 L 520 220 Z"
            fill="url(#noidaGrad)"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.9"
          />
          <text x="650" y="290" fill="#93C5FD" fontSize="13" fontWeight="800" letterSpacing="1.5">
            NOIDA & GREATER NOIDA
          </text>
          <text x="650" y="308" fill="#94A3B8" fontSize="10" fontWeight="600">
            Sector 18 • Sector 62 • Techzone • Expway
          </text>
        </g>

        {/* 3. Faridabad Region Polygon (Bottom Center/Right) */}
        <g id="region-faridabad">
          <path
            d="M 360 380 L 550 320 L 680 410 L 620 530 L 410 530 Z"
            fill="url(#faridabadGrad)"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.9"
          />
          <text x="470" y="470" fill="#FCD34D" fontSize="12" fontWeight="800" letterSpacing="1.2">
            FARIDABAD HUB ZONE
          </text>
          <text x="470" y="486" fill="#94A3B8" fontSize="9" fontWeight="600">
            Mathura Road • Sec 15/16 • NIT
          </text>
        </g>

        {/* 4. Delhi NCR Main Region Polygon (Center / Central / South / North / West Delhi) */}
        <g id="region-delhi">
          <path
            d="M 220 80 L 460 70 L 530 140 L 520 220 L 550 320 L 360 380 L 320 280 L 180 230 Z"
            fill="url(#delhiGrad)"
            stroke="#0D7E80"
            strokeWidth="2.5"
          />
          {/* Sub-District Labels */}
          <text x="350" y="130" fill="#38BDF8" fontSize="11" fontWeight="700" opacity="0.7">
            NORTH / WEST DELHI
          </text>
          <text x="320" y="210" fill="#5EEAD4" fontSize="14" fontWeight="900" letterSpacing="1.5">
            SOUTH & CENTRAL DELHI
          </text>
          <text x="320" y="228" fill="#94A3B8" fontSize="10" fontWeight="600">
            Connaught Place • AIIMS • Defence Colony • Saket
          </text>
        </g>

        {/* Yamuna River Ribbon (Serpentine Blue Vector Path) */}
        <g id="yamuna-river">
          <path
            d="M 460 60 C 470 120, 510 160, 515 210 C 520 260, 540 300, 545 350 C 550 400, 590 440, 610 540"
            fill="none"
            stroke="url(#riverGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 460 60 C 470 120, 510 160, 515 210 C 520 260, 540 300, 545 350 C 550 400, 590 440, 610 540"
            fill="none"
            stroke="#E0F2FE"
            strokeWidth="2"
            strokeDasharray="8 6"
            opacity="0.6"
          />
          <text x="545" y="170" fill="#7DD3FC" fontSize="10" fontWeight="800" transform="rotate(75 545 170)">
            YAMUNA RIVER
          </text>
        </g>

        {/* Expressways & Major Arterial Roads */}
        <g id="expressways" strokeWidth="2.5" opacity="0.8">
          {/* Ring Road Loop */}
          <ellipse cx="370" cy="220" rx="90" ry="60" fill="none" stroke="#F59E0B" strokeDasharray="6 4" />
          <text x="445" y="195" fill="#FCD34D" fontSize="9" fontWeight="700">Inner Ring Rd</text>

          {/* NH-48 Delhi-Gurugram Expressway */}
          <path d="M 350 240 L 220 320 L 150 420" stroke="#0EA5E9" strokeDasharray="8 4" strokeWidth="3" />
          <text x="235" y="325" fill="#7DD3FC" fontSize="9" fontWeight="800" transform="rotate(-30 235 325)">
            NH-48 (Delhi - Gurgaon Expway)
          </text>

          {/* Noida - Greater Noida Expressway */}
          <path d="M 520 220 L 650 300 L 780 370" stroke="#3B82F6" strokeDasharray="8 4" strokeWidth="3" />
          <text x="640" y="285" fill="#93C5FD" fontSize="9" fontWeight="800" transform="rotate(25 640 285)">
            Noida - Gr. Noida Expway
          </text>

          {/* Mathura Road (Faridabad Corridor) */}
          <path d="M 400 270 L 480 390 L 520 510" stroke="#F59E0B" strokeDasharray="8 4" strokeWidth="3" />
          <text x="460" y="370" fill="#FCD34D" fontSize="9" fontWeight="800" transform="rotate(55 460 370)">
            Mathura Rd (NH-19)
          </text>
        </g>

        {/* Dispatch Radius Inter-Hub Connection Lines */}
        <path
          d="M 380 230 L 610 210 L 220 330 L 480 400 Z"
          fill="#0D7E80"
          fillOpacity="0.03"
          stroke="#14B8A6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* ========================================================================= */}
        {/* HUB NODE 1: SOUTH / CENTRAL DELHI HUB                                     */}
        {/* ========================================================================= */}
        {(() => {
          const active = isSelected('hub-south-delhi', 'Delhi');
          return (
            <g
              id="hub-south-delhi"
              transform="translate(380, 230)"
              className={interactive ? 'cursor-pointer group/node' : ''}
              onClick={() => onSelectHub && onSelectHub('hub-south-delhi')}
            >
              {/* Radar Pulse Animation */}
              <circle cx="0" cy="0" r="38" fill="none" stroke="#0D7E80" strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="18;45;18" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
              {active && (
                <circle cx="0" cy="0" r="50" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5 3">
                  <animate attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                </circle>
              )}

              <circle cx="0" cy="0" r="22" fill="#0D7E80" fillOpacity={active ? "0.4" : "0.2"} />
              <circle cx="0" cy="0" r="12" fill={active ? "#14B8A6" : "#0D7E80"} stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              {/* Hub Badge */}
              <g transform="translate(-75, -52)">
                <rect
                  x="0"
                  y="0"
                  width="150"
                  height="34"
                  rx="10"
                  fill={active ? "#0F172A" : "#1E293B"}
                  stroke={active ? "#14B8A6" : "#334155"}
                  strokeWidth={active ? "2" : "1"}
                  className="shadow-lg"
                />
                <circle cx="15" cy="17" r="4" fill="#10B981" />
                <text x="25" y="16" fill="#FFFFFF" fontSize="11" fontWeight="800">
                  South Delhi Hub
                </text>
                <text x="25" y="28" fill={active ? "#2DD4BF" : "#94A3B8"} fontSize="9" fontWeight="700">
                  {active ? "★ ACTIVE DISPATCH • 15 MINS" : "Operational • 20 Mins"}
                </text>
              </g>
            </g>
          );
        })()}

        {/* ========================================================================= */}
        {/* HUB NODE 2: NOIDA SECTOR 62 HUB                                           */}
        {/* ========================================================================= */}
        {(() => {
          const active = isSelected('hub-noida', 'Noida');
          return (
            <g
              id="hub-noida"
              transform="translate(610, 210)"
              className={interactive ? 'cursor-pointer group/node' : ''}
              onClick={() => onSelectHub && onSelectHub('hub-noida')}
            >
              <circle cx="0" cy="0" r="34" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="16;40;16" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3.2s" repeatCount="indefinite" />
              </circle>

              <circle cx="0" cy="0" r="20" fill="#2563EB" fillOpacity={active ? "0.4" : "0.2"} />
              <circle cx="0" cy="0" r="11" fill={active ? "#3B82F6" : "#2563EB"} stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              <g transform="translate(-65, -50)">
                <rect
                  x="0"
                  y="0"
                  width="130"
                  height="34"
                  rx="10"
                  fill={active ? "#0F172A" : "#1E293B"}
                  stroke={active ? "#3B82F6" : "#334155"}
                  strokeWidth={active ? "2" : "1"}
                />
                <circle cx="15" cy="17" r="4" fill="#3B82F6" />
                <text x="25" y="16" fill="#FFFFFF" fontSize="11" fontWeight="800">
                  Noida Hub (Sec 62)
                </text>
                <text x="25" y="28" fill={active ? "#60A5FA" : "#94A3B8"} fontSize="9" fontWeight="700">
                  {active ? "★ ACTIVE DISPATCH • 20 MINS" : "Operational • 25 Mins"}
                </text>
              </g>
            </g>
          );
        })()}

        {/* ========================================================================= */}
        {/* HUB NODE 3: GURUGRAM CYBER CITY HUB                                       */}
        {/* ========================================================================= */}
        {(() => {
          const active = isSelected('hub-gurugram', 'Gurugram');
          return (
            <g
              id="hub-gurugram"
              transform="translate(220, 330)"
              className={interactive ? 'cursor-pointer group/node' : ''}
              onClick={() => onSelectHub && onSelectHub('hub-gurugram')}
            >
              <circle cx="0" cy="0" r="34" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="16;40;16" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2.8s" repeatCount="indefinite" />
              </circle>

              <circle cx="0" cy="0" r="20" fill="#10B981" fillOpacity={active ? "0.4" : "0.2"} />
              <circle cx="0" cy="0" r="11" fill={active ? "#34D399" : "#10B981"} stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              <g transform="translate(-70, 16)">
                <rect
                  x="0"
                  y="0"
                  width="140"
                  height="34"
                  rx="10"
                  fill={active ? "#0F172A" : "#1E293B"}
                  stroke={active ? "#34D399" : "#334155"}
                  strokeWidth={active ? "2" : "1"}
                />
                <circle cx="15" cy="17" r="4" fill="#10B981" />
                <text x="25" y="16" fill="#FFFFFF" fontSize="11" fontWeight="800">
                  Gurugram DLF Hub
                </text>
                <text x="25" y="28" fill={active ? "#6EE7B7" : "#94A3B8"} fontSize="9" fontWeight="700">
                  {active ? "★ ACTIVE DISPATCH • 18 MINS" : "Operational • 22 Mins"}
                </text>
              </g>
            </g>
          );
        })()}

        {/* ========================================================================= */}
        {/* HUB NODE 4: FARIDABAD CENTRAL HUB                                         */}
        {/* ========================================================================= */}
        {(() => {
          const active = isSelected('hub-faridabad', 'Faridabad');
          return (
            <g
              id="hub-faridabad"
              transform="translate(480, 400)"
              className={interactive ? 'cursor-pointer group/node' : ''}
              onClick={() => onSelectHub && onSelectHub('hub-faridabad')}
            >
              <circle cx="0" cy="0" r="34" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="16;40;16" dur="3.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3.4s" repeatCount="indefinite" />
              </circle>

              <circle cx="0" cy="0" r="20" fill="#F59E0B" fillOpacity={active ? "0.4" : "0.2"} />
              <circle cx="0" cy="0" r="11" fill={active ? "#FBBF24" : "#F59E0B"} stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              <g transform="translate(-70, 16)">
                <rect
                  x="0"
                  y="0"
                  width="140"
                  height="34"
                  rx="10"
                  fill={active ? "#0F172A" : "#1E293B"}
                  stroke={active ? "#FBBF24" : "#334155"}
                  strokeWidth={active ? "2" : "1"}
                />
                <circle cx="15" cy="17" r="4" fill="#F59E0B" />
                <text x="25" y="16" fill="#FFFFFF" fontSize="11" fontWeight="800">
                  Faridabad Central
                </text>
                <text x="25" y="28" fill={active ? "#FDE047" : "#94A3B8"} fontSize="9" fontWeight="700">
                  {active ? "★ ACTIVE DISPATCH • 25 MINS" : "Operational • 30 Mins"}
                </text>
              </g>
            </g>
          );
        })()}

        {/* Map Header Overlay Banner */}
        <g transform="translate(25, 25)">
          <rect width="320" height="46" rx="12" fill="#0F172A" fillOpacity="0.9" stroke="#334155" strokeWidth="1" />
          <circle cx="22" cy="23" r="6" fill="#10B981" />
          <text x="36" y="20" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="0.5">
            PULSE N CARE · DELHI NCR DISPATCH MAP
          </text>
          <text x="36" y="34" fill="#94A3B8" fontSize="10" fontWeight="600">
            Real-time Staff Coverage & Hub Network Matrix
          </text>
        </g>

        {/* Map Legend Overlay Card (Bottom Left) */}
        <g transform="translate(25, 455)">
          <rect width="280" height="85" rx="12" fill="#0F172A" fillOpacity="0.9" stroke="#334155" strokeWidth="1" />
          <text x="14" y="20" fill="#E2E8F0" fontSize="10" fontWeight="800" letterSpacing="1">
            MAP LEGEND & COVERAGE GUARANTEE
          </text>

          {/* Yamuna River Legend */}
          <line x1="14" y1="35" x2="35" y2="35" stroke="#38BDF8" strokeWidth="4" />
          <text x="42" y="38" fill="#CBD5E1" fontSize="9" fontWeight="600">Yamuna River Belt</text>

          {/* Expressway Legend */}
          <line x1="145" y1="35" x2="168" y2="35" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="4 2" />
          <text x="175" y="38" fill="#CBD5E1" fontSize="9" fontWeight="600">Expressways (NH48/Noida)</text>

          {/* Hub Pins Legend */}
          <circle cx="20" cy="55" r="5" fill="#14B8A6" />
          <text x="32" y="58" fill="#CBD5E1" fontSize="9" fontWeight="600">Active Operational Hubs</text>

          {/* 2-Hour Dispatch Guarantee Badge */}
          <rect x="14" y="66" width="250" height="14" rx="4" fill="#0D7E80" fillOpacity="0.3" stroke="#0D7E80" strokeWidth="1" />
          <text x="139" y="77" textAnchor="middle" fill="#5EEAD4" fontSize="9" fontWeight="800">
            ✓ Guaranteed 2-Hour In-House Staff Arrival in Delhi NCR
          </text>
        </g>
      </svg>
    </div>
  );
};
