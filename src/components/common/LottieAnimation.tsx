import React from 'react';
import * as LottieModule from 'lottie-react';

// Handle Lottie import across bundlers
const Lottie = (LottieModule as any).Lottie || LottieModule;

// ============================================================================
// 3D HD ILLUSTRATION IMAGE ASSETS (HIGH-FIDELITY DESIGNER GRAPHICS)
// ============================================================================
export const IMAGE_ASSETS_MAP: Record<string, { src: string; title: string; alt: string }> = {
  'radar-beacon': {
    src: '/assets/images/illustrations/medical-radar-map.jpg',
    title: 'Delhi NCR Medical GPS Radar Map',
    alt: 'Real-time Delhi GPS tracking map with radar scan and hub markers'
  },
  'vitals-heartbeat': {
    src: '/assets/images/illustrations/clinical-ecg-vitals.jpg',
    title: 'Clinical Patient Vitals & ECG Monitor',
    alt: 'Glowing neon ECG pulse rhythm monitor screen with SPO2 and HR'
  },
  'success-check': {
    src: '/assets/images/illustrations/verified-care-badge.jpg',
    title: 'Verified Medical Care Accreditation Badge',
    alt: '3D emerald gold shield badge with checkmark'
  },
  'healthcare-cross': {
    src: '/assets/images/illustrations/doctor-home-visit.jpg',
    title: 'Doctor Home Visit & Stethoscope Concierge',
    alt: '3D doctor illustration with medical bag and stethoscope'
  },
  'ambulance-dispatch': {
    src: '/assets/images/illustrations/emergency-ambulance-express.jpg',
    title: '2-Hour Express Ambulance Dispatch',
    alt: 'Modern 3D ambulance vehicle with flashing sirens and speed lines'
  },
  'nursing-care': {
    src: '/assets/images/illustrations/nursing-caregiver-heart.jpg',
    title: 'Compassionate Nursing & Attendant Care',
    alt: 'Gentle hands holding glowing red heart with nurse cap'
  }
};

// ============================================================================
// VALID LOTTIE JSON ANIMATION SPECIFICATIONS (COMPLIANT WITH LOTTIE-WEB)
// ============================================================================

const radarBeaconLottieData = {
  v: '5.5.7',
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: 'Radar Beacon',
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Beacon Layer',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Group 1',
          it: [
            { ty: 'el', s: { a: 0, k: [60, 60] }, p: { a: 0, k: [0, 0] } },
            { ty: 'st', c: { a: 0, k: [0.05, 0.65, 0.65, 1] }, w: { a: 0, k: 6 } },
            { ty: 'fl', c: { a: 0, k: [0.05, 0.65, 0.65, 0.2] } },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 1, k: [{ t: 0, s: [30, 30] }, { t: 60, s: [140, 140] }, { t: 120, s: [30, 30] }] },
              r: { a: 0, k: 0 },
              o: { a: 1, k: [{ t: 0, s: [100] }, { t: 80, s: [10] }, { t: 120, s: [100] }] }
            }
          ]
        }
      ]
    }
  ]
};

const LOTTIE_MAP: Record<string, object> = {
  'radar-beacon': radarBeaconLottieData
};

export type LottieAnimationType =
  | 'radar-beacon'
  | 'vitals-heartbeat'
  | 'success-check'
  | 'healthcare-cross'
  | 'ambulance-dispatch'
  | 'nursing-care';

export interface LottieAnimationProps {
  type?: LottieAnimationType;
  mode?: 'image' | 'vector' | 'auto';
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  type = 'radar-beacon',
  mode = 'image',
  className = 'w-16 h-16',
  loop = true,
  autoplay = true,
  style
}) => {
  const imageMeta = IMAGE_ASSETS_MAP[type];
  const jsonObject = LOTTIE_MAP[type];

  // --------------------------------------------------------------------------
  // MODE A: HIGH-DEFINITION 3D RENDERED GRAPHIC IMAGE (PREFERRED BY USER)
  // --------------------------------------------------------------------------
  if (mode === 'image' && imageMeta) {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none overflow-hidden rounded-2xl group transition-all duration-300 hover:scale-[1.02] shadow-subtle border border-slate-200/80 bg-white ${className}`}
        style={style}
      >
        <img
          src={imageMeta.src}
          alt={imageMeta.alt}
          title={imageMeta.title}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Pulsing Aura Glow Effect */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-teal-500/20 group-hover:ring-teal-500/50 transition-all pointer-events-none" />

        {/* Interactive Floating Pulse LED */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-teal-500/40 text-[9px] font-black text-teal-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
          <span>HD 3D</span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // MODE B: VECTOR ILLUSTRATION & LOTTIE FALLBACK
  // --------------------------------------------------------------------------
  return (
    <div className={`relative inline-flex items-center justify-center select-none overflow-hidden ${className}`} style={style}>
      {jsonObject && typeof Lottie === 'function' ? (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Lottie
            animationData={jsonObject}
            loop={loop}
            autoplay={autoplay}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : null}

      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* 01. RADAR BEACON */}
        {type === 'radar-beacon' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <defs>
                <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0.0" />
                </radialGradient>
                <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#0F766E" />
                </linearGradient>
              </defs>

              <circle cx="100" cy="100" r="90" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="100" cy="100" r="65" fill="none" stroke="#2DD4BF" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
              
              <line x1="10" y1="100" x2="190" y2="100" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" />

              <circle cx="100" cy="100" r="75" fill="none" stroke="#14B8A6" strokeWidth="2.5" className="animate-ping origin-center opacity-40" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="#06B6D4" strokeWidth="2" className="animate-pulse origin-center opacity-60" />

              <g className="origin-center animate-spin" style={{ animationDuration: '4s' }}>
                <path d="M 100 100 L 100 10 A 90 90 0 0 1 190 100 Z" fill="url(#radarSweep)" />
                <line x1="100" y1="100" x2="190" y2="100" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              <circle cx="140" cy="60" r="4" fill="#38BDF8" className="animate-ping" />
              <circle cx="65" cy="130" r="3.5" fill="#34D399" className="animate-pulse" />

              <g className="animate-bounce" style={{ animationDuration: '2s' }}>
                <path
                  d="M 100 45 C 83 45 70 58 70 75 C 70 98 100 125 100 125 C 100 125 130 98 130 75 C 130 58 117 45 100 45 Z"
                  fill="url(#pinGrad)"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="73" r="10" fill="#FFFFFF" />
                <circle cx="100" cy="73" r="5" fill="#0D9488" className="animate-pulse" />
              </g>
              <ellipse cx="100" cy="130" rx="16" ry="5" fill="#0F172A" opacity="0.3" className="animate-pulse" />
            </svg>
          </div>
        )}

        {/* 02. VITALS HEARTBEAT */}
        {type === 'vitals-heartbeat' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 280 120" className="w-full h-full drop-shadow-md">
              <rect x="5" y="5" width="270" height="110" rx="16" fill="#0F172A" opacity="0.95" stroke="#1E293B" strokeWidth="2" />
              <path d="M 60 60 L 90 60 L 100 45 L 110 80 L 122 15 L 135 95 L 148 50 L 160 60 L 260 60" fill="none" stroke="#2DD4BF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="122" cy="15" r="5" fill="#2DD4BF" className="animate-ping" />
              <circle cx="122" cy="15" r="3" fill="#FFFFFF" />
              <text x="180" y="32" fill="#2DD4BF" fontSize="11" fontWeight="bold" fontFamily="monospace">75 BPM</text>
            </svg>
          </div>
        )}

        {/* 03. SUCCESS CHECK */}
        {type === 'success-check' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <path d="M 100 20 L 155 45 C 155 105 130 150 100 170 C 70 150 45 105 45 45 Z" fill="#10B981" stroke="#FFFFFF" strokeWidth="3.5" />
              <path d="M 78 95 L 94 112 L 126 76" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
            </svg>
          </div>
        )}

        {/* 04. HEALTHCARE CROSS */}
        {type === 'healthcare-cross' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <path d="M 80 35 H 120 V 80 H 165 V 120 H 120 V 165 H 80 V 120 H 35 V 80 H 80 Z" fill="#14B8A6" stroke="#FFFFFF" strokeWidth="3.5" className="animate-bounce" />
            </svg>
          </div>
        )}

        {/* 05. AMBULANCE DISPATCH */}
        {type === 'ambulance-dispatch' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 280 160" className="w-full h-full drop-shadow-lg">
              <circle cx="110" cy="54" r="6" fill="#EF4444" className="animate-ping" />
              <circle cx="125" cy="54" r="6" fill="#3B82F6" className="animate-pulse" />
            </svg>
          </div>
        )}

        {/* 06. NURSING CARE */}
        {type === 'nursing-care' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <circle cx="100" cy="95" r="55" fill="#FB7185" opacity="0.2" className="animate-pulse" />
            </svg>
          </div>
        )}

      </div>
    </div>
  );
};
