import React, { useState } from 'react';
import { LottieAnimation } from '../../components/common/LottieAnimation';
import type { LottieAnimationType } from '../../components/common/LottieAnimation';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  MapPin,
  Activity,
  ShieldAlert,
  Heart,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { clsx } from 'clsx';

interface LottieItem {
  id: LottieAnimationType;
  title: string;
  category: string;
  description: string;
  recommendedUsages: { area: string; rationale: string; icon: React.ReactNode }[];
}

export const LottieShowcasePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({
    'radar-beacon': true,
    'vitals-heartbeat': true,
    'success-check': true,
    'healthcare-cross': true,
    'ambulance-dispatch': true,
    'nursing-care': true
  });

  const [cardBg, setCardBg] = useState<{ [key: string]: 'dark' | 'light' | 'teal' }>({
    'radar-beacon': 'dark',
    'vitals-heartbeat': 'light',
    'success-check': 'light',
    'healthcare-cross': 'teal',
    'ambulance-dispatch': 'dark',
    'nursing-care': 'light'
  });

  const [approvedAnimations, setApprovedAnimations] = useState<{ [key: string]: boolean }>({
    'radar-beacon': true,
    'vitals-heartbeat': true,
    'success-check': true
  });

  const toggleApproval = (id: string) => {
    setApprovedAnimations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const lottieList: LottieItem[] = [
    {
      id: 'radar-beacon',
      title: '01. Radar Beacon / Map Radar Pulse',
      category: 'Map & Location Tracking',
      description: 'Concentric expanding radar pulse ring with center beacon. Smooth 60fps loop.',
      recommendedUsages: [
        { area: 'Real Leaflet Map Hub Pins', rationale: 'Replaces static markers with live 2-Hour dispatch radius rings.', icon: <MapPin className="w-4 h-4 text-teal-600" /> },
        { area: 'LocationPicker GPS Detector', rationale: 'Displays while communicating with browser GPS satellites.', icon: <Zap className="w-4 h-4 text-amber-600" /> },
        { area: 'Staff Arrival Radar Overlay', rationale: 'Shows live proximity in the client booking tracking page.', icon: <Sparkles className="w-4 h-4 text-brand-teal" /> }
      ]
    },
    {
      id: 'vitals-heartbeat',
      title: '02. Vitals Heartbeat / ECG Waveform',
      category: 'Clinical Vitals & Health',
      description: 'Dynamic moving ECG pulse line with trailing glow. Ideal for clinical metrics.',
      recommendedUsages: [
        { area: 'Hero Section Vitals Card', rationale: 'Placed inside the floating "Clinical Vitals" hero card.', icon: <Activity className="w-4 h-4 text-teal-600" /> },
        { area: 'Home Nursing Service Header', rationale: 'Adds medical credibility to the flagship nursing header.', icon: <Heart className="w-4 h-4 text-rose-600" /> },
        { area: 'Staff Shift Vitals Charting', rationale: 'Header icon on nurse vitals logging screen.', icon: <ShieldCheck className="w-4 h-4 text-emerald-600" /> }
      ]
    },
    {
      id: 'success-check',
      title: '03. Spring Animated Success Checkmark',
      category: 'Verification & Confirmation',
      description: 'Scale-up green circle with smooth stroke draw checkmark.',
      recommendedUsages: [
        { area: 'Address Confirmed Banner', rationale: 'Shows when user verifies care location pincode.', icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" /> },
        { area: 'Booking Confirmation Screen', rationale: 'Celebratory animation on final step of booking wizard.', icon: <ShieldCheck className="w-4 h-4 text-teal-600" /> },
        { area: 'Council Nurse KYC Approved', rationale: 'Badge on verified staff profiles.', icon: <Sparkles className="w-4 h-4 text-brand-teal" /> }
      ]
    },
    {
      id: 'healthcare-cross',
      title: '04. Glowing Healthcare Cross',
      category: 'Care Concierge & Services',
      description: 'Pulsing medical cross with soft aura expansion.',
      recommendedUsages: [
        { area: 'Doctor Home Visit Card', rationale: 'Primary badge for physician home evaluation service.', icon: <ShieldCheck className="w-4 h-4 text-teal-600" /> },
        { area: 'Talk To Care Concierge Modal', rationale: 'Header icon on callback request dialog.', icon: <Sparkles className="w-4 h-4 text-brand-teal" /> }
      ]
    },
    {
      id: 'ambulance-dispatch',
      title: '05. Emergency Dispatch Siren Pulse',
      category: 'Safety & Emergency Escalation',
      description: 'High-visibility flashing siren beacon animation.',
      recommendedUsages: [
        { area: 'Emergency Escalation Protocol', rationale: 'Highlights early warning breathlessness/fever alerts.', icon: <ShieldAlert className="w-4 h-4 text-rose-600" /> },
        { area: '2-Hour Emergency Dispatch Badge', rationale: 'Top banner accent on urgent care requests.', icon: <Zap className="w-4 h-4 text-amber-600" /> }
      ]
    },
    {
      id: 'nursing-care',
      title: '06. Compassionate Care Heart',
      category: 'Attendant & Elderly Care',
      description: 'Pulsing heart symbol representing personal care & companionship.',
      recommendedUsages: [
        { area: 'Elderly Bedside Attendant Card', rationale: 'Visual accent on caregiver 12h/24h service cards.', icon: <Heart className="w-4 h-4 text-rose-600" /> },
        { area: 'Patient Hygiene Section', rationale: 'Header icon on bathing/grooming care scope.', icon: <Sparkles className="w-4 h-4 text-brand-teal" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left relative pb-28">
      <HealthcareTexture type="medical-grid" opacity={0.03} />

      {/* Hero Showcase Header */}
      <section className="bg-slate-900 text-white border-b border-slate-800 pt-10 pb-12 relative overflow-hidden">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.05} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-black uppercase tracking-widest border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" /> Lottie Animation Playground & Review UI
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Lottie Vector Animations Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-medium">
            Inspect all 6 interactive Lottie animations below. Toggle playback, test light/dark backgrounds, and review recommended placements. Tell us which ones you want to keep!
          </p>
        </div>
      </section>

      {/* Main Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-2xs">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Available Animations: {lottieList.length}</h2>
            <p className="text-xs text-slate-500">60 FPS Scalable Vector Lottie Animations (Zero Quality Loss)</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50 px-3.5 py-2 rounded-2xl border border-teal-200">
            <Info className="w-4 h-4 text-teal-600" /> Click "Approve" on animations you want activated
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lottieList.map((item) => {
            const playing = isPlaying[item.id] ?? true;
            const bg = cardBg[item.id] || 'light';
            const approved = approvedAnimations[item.id] || false;

            return (
              <Card
                key={item.id}
                className={clsx(
                  'p-6 space-y-5 rounded-3xl transition-all border relative overflow-hidden bg-white shadow-subtle',
                  approved ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-slate-200'
                )}
              >
                {/* Header Title & Category */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-teal uppercase tracking-widest block">
                      {item.category}
                    </span>
                    <h3 className="font-black text-slate-900 text-base mt-0.5">{item.title}</h3>
                  </div>
                  <button
                    onClick={() => toggleApproval(item.id)}
                    className={clsx(
                      'px-3 py-1 rounded-full text-xs font-black cursor-pointer transition-all shrink-0 border',
                      approved
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'
                    )}
                  >
                    {approved ? '✓ Approved' : '+ Select'}
                  </button>
                </div>

                {/* Animation Canvas Container */}
                <div
                  className={clsx(
                    'h-48 rounded-2xl flex items-center justify-center relative border transition-colors overflow-hidden',
                    bg === 'dark' && 'bg-slate-950 border-slate-800',
                    bg === 'light' && 'bg-slate-100 border-slate-200',
                    bg === 'teal' && 'bg-teal-950 border-teal-800'
                  )}
                >
                  <LottieAnimation
                    type={item.id}
                    className="w-32 h-32"
                    autoplay={playing}
                    loop={true}
                  />

                  {/* Canvas Controls Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-xl shadow-xs border border-slate-200">
                      <button
                        onClick={() => setIsPlaying((p) => ({ ...p, [item.id]: !playing }))}
                        className="p-1 hover:bg-slate-200 rounded-md text-slate-700 cursor-pointer"
                        title={playing ? 'Pause' : 'Play'}
                      >
                        {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => setIsPlaying((p) => ({ ...p, [item.id]: true }))}
                        className="p-1 hover:bg-slate-200 rounded-md text-slate-700 cursor-pointer"
                        title="Replay"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bg Switcher Buttons */}
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-xl shadow-xs border border-slate-200 text-[10px] font-bold text-slate-700">
                      <button
                        onClick={() => setCardBg((b) => ({ ...b, [item.id]: 'light' }))}
                        className={clsx('px-1.5 py-0.5 rounded cursor-pointer', bg === 'light' && 'bg-slate-300 font-extrabold')}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => setCardBg((b) => ({ ...b, [item.id]: 'dark' }))}
                        className={clsx('px-1.5 py-0.5 rounded cursor-pointer', bg === 'dark' && 'bg-slate-800 text-white font-extrabold')}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.description}</p>

                {/* Recommended Usages List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                    Recommended UI Placements:
                  </span>
                  <div className="space-y-1.5">
                    {item.recommendedUsages.map((rec, idx) => (
                      <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 space-y-0.5 text-xs">
                        <div className="flex items-center gap-2 font-extrabold text-slate-900">
                          {rec.icon}
                          <span>{rec.area}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium pl-6">{rec.rationale}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Sticky Bottom Review Summary Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white p-4 border-t border-slate-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">Your Review Selections</span>
            <p className="text-sm font-extrabold text-white">
              Approved Animations:{' '}
              <span className="text-teal-300 font-mono font-black">
                {Object.keys(approvedAnimations).filter((k) => approvedAnimations[k]).length} of 6
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-300 hidden md:inline">
              Selected:{' '}
              {Object.keys(approvedAnimations)
                .filter((k) => approvedAnimations[k])
                .join(', ') || 'None'}
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => alert(`Selected Animations: ${Object.keys(approvedAnimations).filter((k) => approvedAnimations[k]).join(', ')}`)}
              className="bg-brand-teal text-white font-black text-xs px-6 py-2.5 rounded-xl cursor-pointer shadow-md"
            >
              Confirm Selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
