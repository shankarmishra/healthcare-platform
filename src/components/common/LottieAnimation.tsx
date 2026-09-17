import React from 'react';
import * as LottieModule from 'lottie-react';

// Handle Lottie import across bundlers
const Lottie = (LottieModule as any).Lottie || LottieModule;

// ============================================================================
// 1. VALID LOTTIE JSON ANIMATION SPECIFICATIONS (COMPLIANT WITH LOTTIE-WEB)
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

const vitalsHeartbeatLottieData = {
  v: '5.5.7',
  fr: 60,
  ip: 0,
  op: 90,
  w: 300,
  h: 120,
  nm: 'ECG Pulse',
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Pulse Shape',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100] }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'ECG Group',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  c: false,
                  i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[-130, 0], [-50, 0], [-30, -10], [-15, 30], [0, -45], [15, 20], [35, 0], [130, 0]]
                }
              }
            },
            { ty: 'st', c: { a: 0, k: [0.05, 0.65, 0.65, 1] }, w: { a: 0, k: 5 } },
            { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

const successCheckLottieData = {
  v: '5.5.7',
  fr: 60,
  ip: 0,
  op: 60,
  w: 160,
  h: 160,
  nm: 'Success Check',
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Check Group',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [80, 80, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [10, 10] }, { t: 35, s: [110, 110] }, { t: 50, s: [100, 100] }] }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Circle Fill',
          it: [
            { ty: 'el', s: { a: 0, k: [100, 100] }, p: { a: 0, k: [0, 0] } },
            { ty: 'fl', c: { a: 0, k: [0.06, 0.72, 0.52, 1] } },
            { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

const LOTTIE_MAP: Record<string, object> = {
  'radar-beacon': radarBeaconLottieData,
  'vitals-heartbeat': vitalsHeartbeatLottieData,
  'success-check': successCheckLottieData
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
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  type = 'radar-beacon',
  className = 'w-16 h-16',
  loop = true,
  autoplay = true,
  style
}) => {
  const jsonObject = LOTTIE_MAP[type];

  return (
    <div className={`relative inline-flex items-center justify-center select-none overflow-hidden ${className}`} style={style}>
      {/* 1. Standard Lottie Module Player */}
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

      {/* 2. HIGH-FIDELITY VECTOR ILLUSTRATION & CSS KEYFRAME ANIMATED SCENES */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* ------------------------------------------------------------------ */}
        {/* 01. RADAR BEACON & DISPATCH LOCATION ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
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

              {/* Background Radar Grid Circles */}
              <circle cx="100" cy="100" r="90" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="100" cy="100" r="65" fill="none" stroke="#2DD4BF" strokeWidth="1.5" opacity="0.4" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
              
              {/* Crosshair Axes */}
              <line x1="10" y1="100" x2="190" y2="100" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" />

              {/* Expanding Pulse Wave Rings */}
              <circle cx="100" cy="100" r="75" fill="none" stroke="#14B8A6" strokeWidth="2.5" className="animate-ping origin-center opacity-40" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="#06B6D4" strokeWidth="2" className="animate-pulse origin-center opacity-60" />

              {/* Rotating Radar Scanner Beam */}
              <g className="origin-center animate-spin" style={{ animationDuration: '4s' }}>
                <path d="M 100 100 L 100 10 A 90 90 0 0 1 190 100 Z" fill="url(#radarSweep)" />
                <line x1="100" y1="100" x2="190" y2="100" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Radar Blip Dots */}
              <circle cx="140" cy="60" r="4" fill="#38BDF8" className="animate-ping" />
              <circle cx="65" cy="130" r="3.5" fill="#34D399" className="animate-pulse" />

              {/* Center Map Location Marker Pin */}
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

              {/* Shadow under Map Pin */}
              <ellipse cx="100" cy="130" rx="16" ry="5" fill="#0F172A" opacity="0.3" className="animate-pulse" />
            </svg>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* 02. VITALS HEARTBEAT & CLINICAL ECG WAVEFORM ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
        {type === 'vitals-heartbeat' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 280 120" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D9488" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2DD4BF" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#BE123C" />
                </linearGradient>
              </defs>

              {/* Monitor Screen Glass Container */}
              <rect x="5" y="5" width="270" height="110" rx="16" fill="#0F172A" opacity="0.95" stroke="#1E293B" strokeWidth="2" />

              {/* Medical Grid Lines */}
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.4" />
              </pattern>
              <rect x="10" y="10" width="260" height="100" fill="url(#grid)" />

              {/* Pulsing 3D Heart Illustration */}
              <g transform="translate(15, 25)" className="animate-pulse">
                <path
                  d="M 20 38 L 17 35 C 7 26 0 20 0 12 C 0 5 5 0 12 0 C 16 0 20 2 22 5 C 24 2 28 0 32 0 C 39 0 44 5 44 12 C 44 20 37 26 27 35 Z"
                  fill="url(#heartGrad)"
                  stroke="#FFF"
                  strokeWidth="1.5"
                />
              </g>

              {/* Animated Continuous ECG Rhythm Waveform */}
              <path
                d="M 60 60 L 90 60 L 100 45 L 110 80 L 122 15 L 135 95 L 148 50 L 160 60 L 260 60"
                fill="none"
                stroke="url(#ecgGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Leading Trace Pulse Glow Node */}
              <circle cx="122" cy="15" r="5" fill="#2DD4BF" className="animate-ping" />
              <circle cx="122" cy="15" r="3" fill="#FFFFFF" />

              {/* Live Vitals Digital HUD Text */}
              <text x="180" y="32" fill="#2DD4BF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                75 BPM
              </text>
              <text x="180" y="48" fill="#94A3B8" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                SPO2 98%
              </text>
              <rect x="180" y="70" width="75" height="18" rx="6" fill="#14B8A6" opacity="0.2" />
              <text x="188" y="83" fill="#2DD4BF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                ● STABLE
              </text>
            </svg>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* 03. SUCCESS CHECKMARK & VERIFIED CREST ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
        {type === 'success-check' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* Outer Golden Sparkle Sunburst Rays */}
              <g opacity="0.6" className="animate-spin origin-center" style={{ animationDuration: '20s' }}>
                <circle cx="100" cy="100" r="85" fill="none" stroke="#FBBF24" strokeWidth="2" strokeDasharray="6 8" />
              </g>

              {/* Shield Base Crest */}
              <path
                d="M 100 20 L 155 45 C 155 105 130 150 100 170 C 70 150 45 105 45 45 Z"
                fill="url(#shieldGrad)"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                className="transition-transform duration-500 hover:scale-105"
              />

              {/* Inner Shield Accent Contour */}
              <path
                d="M 100 32 L 143 52 C 143 100 123 138 100 154 C 77 138 57 100 57 52 Z"
                fill="none"
                stroke="#A7F3D0"
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Animated Spring Checkmark */}
              <path
                d="M 78 95 L 94 112 L 126 76"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />

              {/* Floating Star Particles */}
              <circle cx="40" cy="40" r="3.5" fill="#FBBF24" className="animate-ping" />
              <circle cx="165" cy="50" r="4" fill="#34D399" className="animate-bounce" />
              <circle cx="150" cy="140" r="3" fill="#FBBF24" className="animate-pulse" />

              {/* Verified Ribbon Badge */}
              <rect x="50" y="155" width="100" height="22" rx="11" fill="url(#goldGrad)" stroke="#FFF" strokeWidth="1.5" />
              <text x="100" y="170" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1">
                VERIFIED CARE
              </text>
            </svg>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* 04. HEALTHCARE CROSS & STETHOSCOPE CONCIERGE ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
        {type === 'healthcare-cross' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0F766E" />
                </linearGradient>
              </defs>

              {/* Ambient Glowing Aura */}
              <circle cx="100" cy="100" r="80" fill="#14B8A6" opacity="0.15" className="animate-ping" />
              <circle cx="100" cy="100" r="65" fill="#2DD4BF" opacity="0.2" className="animate-pulse" />

              {/* Main Medical Cross Shape */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                <path
                  d="M 80 35 H 120 V 80 H 165 V 120 H 120 V 165 H 80 V 120 H 35 V 80 H 80 Z"
                  fill="url(#crossGrad)"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  rx="10"
                />
                
                {/* Inner Cross Highlight Line */}
                <path
                  d="M 85 40 H 115 V 85 H 160 V 115 H 115 V 160 H 85 V 115 H 40 V 85 H 85 Z"
                  fill="none"
                  stroke="#5EEAD4"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </g>

              {/* Stethoscope Tubing Wrapped Around Cross */}
              <path
                d="M 45 130 C 45 160 155 160 155 130 C 155 110 135 110 135 90"
                fill="none"
                stroke="#334155"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="135" cy="85" r="7" fill="#94A3B8" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="135" cy="85" r="3" fill="#0F766E" />

              {/* Floating Medical Symbols */}
              <g transform="translate(145, 35)" className="animate-pulse">
                <rect width="24" height="12" rx="6" fill="#F43F5E" transform="rotate(-30)" />
              </g>
              <g transform="translate(25, 65)" className="animate-bounce" style={{ animationDuration: '2.5s' }}>
                <circle cx="10" cy="10" r="9" fill="#F59E0B" />
                <text x="10" y="14" fill="#FFF" fontSize="11" fontWeight="bold" textAnchor="middle">Rx</text>
              </g>
            </svg>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* 05. AMBULANCE DISPATCH & SIREN STROBE ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
        {type === 'ambulance-dispatch' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 280 160" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="vanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#F1F5F9" />
                </linearGradient>
              </defs>

              {/* Siren Red & Blue Conical Light Flashes */}
              <g className="animate-pulse">
                <polygon points="105,30 40,0 170,0" fill="#EF4444" opacity="0.35" />
                <polygon points="125,30 80,0 210,0" fill="#3B82F6" opacity="0.35" />
              </g>

              {/* Moving Road Surface Line Grid */}
              <line x1="10" y1="140" x2="270" y2="140" stroke="#64748B" strokeWidth="3" strokeDasharray="16 12" className="animate-pulse" />

              {/* Ambulance Van Body Chassis */}
              <g className="animate-bounce" style={{ animationDuration: '1.2s' }}>
                {/* Cab & Rear Box */}
                <path
                  d="M 40 60 H 180 C 190 60 200 65 205 75 L 225 100 V 125 H 40 Z"
                  fill="url(#vanGrad)"
                  stroke="#334155"
                  strokeWidth="3.5"
                />

                {/* Red Emergency Side Stripe */}
                <rect x="40" y="90" width="180" height="14" fill="#EF4444" />

                {/* Front Windshield Window */}
                <path d="M 180 65 H 195 L 210 90 H 180 Z" fill="#0EA5E9" opacity="0.7" stroke="#334155" strokeWidth="2" />

                {/* Medical Cross on Van Side */}
                <g transform="translate(100, 70)">
                  <path d="M 12 0 H 20 V 12 H 32 V 20 H 20 V 32 H 12 V 20 H 0 V 12 H 12 Z" fill="#EF4444" stroke="#FFF" strokeWidth="1" />
                </g>

                {/* Roof Dual Siren Lights */}
                <circle cx="110" cy="54" r="6" fill="#EF4444" className="animate-ping" />
                <circle cx="125" cy="54" r="6" fill="#3B82F6" className="animate-pulse" />

                {/* Wheels with Hubcaps */}
                <g transform="translate(80, 125)">
                  <circle cx="0" cy="0" r="14" fill="#1E293B" />
                  <circle cx="0" cy="0" r="6" fill="#94A3B8" />
                </g>
                <g transform="translate(180, 125)">
                  <circle cx="0" cy="0" r="14" fill="#1E293B" />
                  <circle cx="0" cy="0" r="6" fill="#94A3B8" />
                </g>
              </g>

              {/* Express Speed Badge */}
              <g transform="translate(170, 20)">
                <rect x="0" y="0" width="95" height="22" rx="11" fill="#DC2626" stroke="#FFF" strokeWidth="1.5" />
                <text x="47" y="15" fill="#FFF" fontSize="10" fontWeight="900" textAnchor="middle">
                  ⚡ 2-HR DISPATCH
                </text>
              </g>
            </svg>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* 06. NURSING & ATTENDANT COMPASSIONATE CARE ILLUSTRATION */}
        {/* ------------------------------------------------------------------ */}
        {type === 'nursing-care' && (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="careHeart" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#BE185D" />
                </linearGradient>
              </defs>

              {/* Soft Warm Radial Aura Rings */}
              <circle cx="100" cy="95" r="75" fill="#F472B6" opacity="0.15" className="animate-ping" />
              <circle cx="100" cy="95" r="55" fill="#FB7185" opacity="0.2" className="animate-pulse" />

              {/* Caring Nurse Cap Icon */}
              <g transform="translate(75, 20)" className="animate-bounce" style={{ animationDuration: '3s' }}>
                <path d="M 0 25 L 25 5 L 50 25 L 42 32 H 8 Z" fill="#FFFFFF" stroke="#DB2777" strokeWidth="2" />
                <path d="M 21 16 H 29 V 24 H 21 Z" fill="#DB2777" />
                <path d="M 17 20 H 33 V 20 Z" stroke="#DB2777" strokeWidth="2" />
              </g>

              {/* Central Glowing Heart */}
              <g transform="translate(100, 95) scale(1.3)" className="animate-pulse">
                <path
                  d="M 0 25 L -3 22 C -17 10 -25 3 -25 -7 C -25 -15 -18 -22 -10 -22 C -5 -22 0 -19 0 -19 C 0 -19 5 -22 10 -22 C 18 -22 25 -15 25 -7 C 25 3 17 10 3 22 Z"
                  fill="url(#careHeart)"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </g>

              {/* Vector Hands Cupping the Heart */}
              <path
                d="M 30 135 C 50 115 80 145 100 145 C 120 145 150 115 170 135 C 150 165 110 170 100 170 C 90 170 50 165 30 135 Z"
                fill="#FCE7F3"
                stroke="#DB2777"
                strokeWidth="2.5"
              />

              {/* Floating Mini Hearts */}
              <g className="animate-ping origin-center" style={{ animationDuration: '2s' }}>
                <path d="M 35 60 L 33 58 C 28 54 25 51 25 47 C 25 44 28 41 31 41 C 33 41 35 42 35 42 C 35 42 37 41 39 41 C 42 41 45 44 45 47 C 45 51 42 54 37 58 Z" fill="#F43F5E" />
                <path d="M 165 75 L 163 73 C 158 69 155 66 155 62 C 155 59 158 56 161 56 C 163 56 165 57 165 57 C 165 57 167 56 169 56 C 172 56 175 59 175 62 C 175 66 172 69 167 73 Z" fill="#EC4899" />
              </g>

              {/* Compassionate Badge Tag */}
              <rect x="40" y="168" width="120" height="20" rx="10" fill="#BE185D" stroke="#FFF" strokeWidth="1" />
              <text x="100" y="181" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">
                NURSING & ATTENDANT
              </text>
            </svg>
          </div>
        )}

      </div>
    </div>
  );
};
