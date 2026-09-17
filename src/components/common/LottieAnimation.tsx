import React from 'react';
import * as LottieModule from 'lottie-react';

const LottieComp = (LottieModule as any).Lottie || LottieModule;

// ============================================================================
// PROCEDURAL LOTTIE ANIMATION DATA DEFINITIONS (60 FPS VECTOR ANIMATIONS)
// ============================================================================

// A. Radar Beacon / Map Pulse Lottie JSON
const radarBeaconLottieData = {
  v: '5.7.4',
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
      nm: 'Outer Ring',
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 90, s: [0] }, { t: 120, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [20, 20] }, { t: 90, s: [140, 140] }, { t: 120, s: [20, 20] }] }
      },
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [100, 100] },
          p: { a: 0, k: [0, 0] }
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.05, 0.65, 0.65, 1] },
          w: { a: 0, k: 4 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Mid Ring',
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 20, s: [100] }, { t: 110, s: [0] }, { t: 120, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 20, s: [20, 20] }, { t: 110, s: [100, 100] }, { t: 120, s: [20, 20] }] }
      },
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [100, 100] },
          p: { a: 0, k: [0, 0] }
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.08, 0.78, 0.78, 1] },
          w: { a: 0, k: 3 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Center Beacon',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [80, 80] }, { t: 60, s: [110, 110] }, { t: 120, s: [80, 80] }] }
      },
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [36, 36] },
          p: { a: 0, k: [0, 0] }
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.05, 0.65, 0.65, 1] }
        }
      ]
    }
  ]
};

// B. Vitals Heartbeat ECG Lottie JSON
const vitalsHeartbeatLottieData = {
  v: '5.7.4',
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
      nm: 'ECG Line',
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
        {
          ty: 'st',
          c: { a: 0, k: [0.05, 0.65, 0.65, 1] },
          w: { a: 0, k: 4 },
          lc: 2,
          lj: 2
        }
      ]
    }
  ]
};

// C. Success Checkmark Lottie JSON
const successCheckLottieData = {
  v: '5.7.4',
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
      nm: 'Circle Fill',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [80, 80, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0] }, { t: 30, s: [100, 100] }] }
      },
      shapes: [
        {
          ty: 'el',
          s: { a: 0, k: [120, 120] },
          p: { a: 0, k: [0, 0] }
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.06, 0.72, 0.52, 1] }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Checkmark',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [80, 80, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 20, s: [0, 0] }, { t: 45, s: [100, 100] }] }
      },
      shapes: [
        {
          ty: 'sh',
          ks: {
            a: 0,
            k: {
              c: false,
              i: [[0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0]],
              v: [[-25, 0], [-8, 18], [25, -18]]
            }
          }
        },
        {
          ty: 'st',
          c: { a: 0, k: [1, 1, 1, 1] },
          w: { a: 0, k: 8 },
          lc: 2,
          lj: 2
        }
      ]
    }
  ]
};

// D. Healthcare Cross Glow Lottie JSON
const healthcareCrossLottieData = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 90,
  w: 160,
  h: 160,
  nm: 'Medical Cross',
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Cross Vert',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [80, 80, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [90, 90] }, { t: 45, s: [110, 110] }, { t: 90, s: [90, 90] }] }
      },
      shapes: [
        {
          ty: 'rc',
          s: { a: 0, k: [30, 90] },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 8 }
        },
        {
          ty: 'rc',
          s: { a: 0, k: [90, 30] },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 8 }
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.05, 0.65, 0.65, 1] }
        }
      ]
    }
  ]
};

const LOTTIE_MAP: Record<string, object> = {
  'radar-beacon': radarBeaconLottieData,
  'vitals-heartbeat': vitalsHeartbeatLottieData,
  'success-check': successCheckLottieData,
  'healthcare-cross': healthcareCrossLottieData
};

export interface LottieAnimationProps {
  type?: 'radar-beacon' | 'vitals-heartbeat' | 'success-check' | 'healthcare-cross';
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
  const animationData = LOTTIE_MAP[type] || radarBeaconLottieData;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <LottieComp
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%', ...style }}
      />
    </div>
  );
};
