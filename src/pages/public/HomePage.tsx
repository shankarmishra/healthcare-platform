import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  MapPin,
  UserCheck,
  ArrowRight,
  Sparkles,
  Building2,
  PhoneCall,
  Send,
  Stethoscope,
  Activity,
  HeartPulse,
  ShieldPlus,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const [locationInput, setLocationInput] = useState('');
  const [locationStatus, setLocationStatus] = useState<string | null>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackNotes, setCallbackNotes] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleDetectLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocationInput('DLF Phase 5, Gurugram');
          setLocationStatus('✓ Care is available in your area (Gurugram Central Hub).');
        },
        () => {
          setLocationInput('Sector 62, Noida');
          setLocationStatus('✓ Care is available in your area (Noida Express Hub).');
        }
      );
    } else {
      setLocationInput('Defence Colony, New Delhi');
      setLocationStatus('✓ Care is available in your area (South Delhi Hub).');
    }
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackModalOpen(false);
      setCallbackSubmitted(false);
    }, 2000);
  };

  const careJourneySteps = [
    { num: '01', title: 'Tell us what you need', desc: 'Specify patient relationship, clinical context, and care requirements.' },
    { num: '02', title: 'Choose service & schedule', desc: 'Select short clinical visit, 12h day/night shift, or 24h live-in care.' },
    { num: '03', title: 'Our team reviews request', desc: 'Pulse n Care Central Operations Desk evaluates clinical requirements.' },
    { num: '04', title: 'We arrange the right care team', desc: 'Qualified, council-verified internal staff allocated matching your locality.' },
    { num: '05', title: 'Care begins at home', desc: 'Instant booking confirmation and staff arrival with clinical documentation.' }
  ];

  const careScenarios = [
    {
      title: 'Post-Operative Recovery',
      desc: 'Sterile surgical dressings, drain hygiene, IV antibiotics, and vitals charting after cardiac, orthopedic, or abdominal surgery.',
      tag: 'Clinical Nursing',
      icon: <Activity className="w-5 h-5 text-brand-teal" />
    },
    {
      title: 'Long-Term Home Nursing',
      desc: 'Continuous skilled care for bedridden seniors, tracheostomy care, catheter flushing, and daily insulin administration.',
      tag: '24×7 Nursing',
      icon: <HeartPulse className="w-5 h-5 text-brand-teal" />
    },
    {
      title: 'Elderly Bedside Care',
      desc: 'Dedicated daily living support including sponge bathing, diaper changes, feeding assistance, and fall prevention.',
      tag: 'Caregiver / Attendant',
      icon: <UserCheck className="w-5 h-5 text-brand-teal" />
    },
    {
      title: 'Mobility & Joint Rehab',
      desc: 'Evidence-based physical therapy at home for knee replacement, hip surgery, stroke rehabilitation, and gait retraining.',
      tag: 'Physiotherapy',
      icon: <Activity className="w-5 h-5 text-brand-teal" />
    },
    {
      title: 'Physician Home Evaluation',
      desc: 'In-home clinical consultation by registered MBBS physicians for acute fevers, chronic illness, and post-discharge reviews.',
      tag: 'Doctor Visit',
      icon: <Stethoscope className="w-5 h-5 text-brand-teal" />
    }
  ];

  const faqItems = [
    {
      q: 'Which geographic areas do you currently serve?',
      a: 'Pulse n Care operates active dispatch hubs across Delhi, Noida, Gurugram, and Faridabad (Delhi NCR). Address pincodes are validated against regional hubs at checkout.'
    },
    {
      q: 'How are clinical staff members assigned to my booking?',
      a: 'Pulse n Care owns and manages its internal clinical workforce. Once you submit a care request, Central Operations assigns a qualified, council-verified nurse or caregiver matching your clinical needs and requested schedule.'
    },
    {
      q: 'Can I request 10-hour night shifts or 24-hour live-in care?',
      a: 'Yes! Both 10-hour night shifts (10:00 PM to 08:00 AM) and 24-hour live-in rotational care are fully supported with transparent pricing.'
    },
    {
      q: 'Do nurses bring basic medical consumables and equipment?',
      a: 'Nurses bring basic diagnostic equipment (BP monitor, pulse oximeter, digital thermometer, sterile gloves). Specific doctor-prescribed surgical dressing kits or medications should be kept ready at home.'
    },
    {
      q: 'Can I save patient profiles and addresses for recurring care?',
      a: 'Yes, client profiles support multiple saved patient records and delivery addresses for quick 1-click rebooking.'
    }
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-text-primary text-left overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 01 — FULL-WIDTH CAMPAIGN HERO BANNER                              */}
      {/* ========================================================================= */}
      <section className="relative min-h-[700px] lg:min-h-[740px] pt-10 pb-16 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-border-default overflow-hidden flex items-center">
        <HealthcareTexture type="clinical-wave" opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (45%): Brand Storytelling & Location Console */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canvas-teal text-brand-teal text-xs font-black tracking-widest uppercase border border-teal-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Pulse n Care · Home Healthcare</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.05]">
                Nurse care at <span className="text-brand-teal underline decoration-teal-300 decoration-wavy decoration-2">doorstep.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl font-medium">
                Professional care at home, arranged around your needs, schedule and location across Delhi NCR.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  variant="primary"
                  onClick={() => navigate('/client/booking/wizard?serviceId=srv-nursing-post-op')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-black text-base px-8 py-4 rounded-2xl cursor-pointer shadow-card"
                >
                  Book a service
                </Button>

                <Button
                  variant="outline"
                  onClick={() => navigate('/services')}
                  className="border-border-default text-text-primary hover:bg-canvas-secondary font-bold text-base px-6 py-4 rounded-2xl cursor-pointer"
                >
                  Explore services
                </Button>

                <button
                  onClick={() => setCallbackModalOpen(true)}
                  className="text-xs font-extrabold text-brand-teal hover:underline px-3 py-2 cursor-pointer"
                >
                  Talk to our care team →
                </button>
              </div>

              {/* Compact Care Location Console */}
              <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-card border border-border-default space-y-3">
                <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
                  Where do you need care?
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 flex items-center gap-2.5 px-3.5 py-3 bg-canvas-secondary rounded-2xl border border-border-default w-full">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                    <input
                      type="text"
                      value={locationInput}
                      onChange={(e) => {
                        setLocationInput(e.target.value);
                        setLocationStatus(null);
                      }}
                      placeholder="Enter address or pincode in Delhi, Noida, Gurugram, Faridabad..."
                      className="w-full text-xs font-bold text-text-primary bg-transparent focus:outline-none"
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDetectLocation}
                    className="text-xs font-extrabold shrink-0 border-teal-200 text-brand-teal hover:bg-canvas-teal cursor-pointer px-4 py-3 rounded-2xl"
                  >
                    📍 Use my current location
                  </Button>
                </div>

                {locationStatus && (
                  <p className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 animate-fadeIn">
                    {locationStatus}
                  </p>
                )}
              </div>

              {/* Horizontal Factual Trust Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-text-secondary">
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 24×7 Care Options
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 12h & Night Shifts
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Delhi NCR Coverage
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Managed Care Team
                </span>
              </div>
            </div>

            {/* Right Column (55%): Real 7-9 Person Healthcare Campaign Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white">
                
                {/* Real Photographic Healthcare Team Image (7-8 Professionals) */}
                <img
                  src="/assets/services/home-nursing/pulse-n-care-team-campaign-7-9.webp"
                  alt="Pulse n Care Healthcare Care Team Campaign"
                  className="w-full h-[520px] object-cover object-center"
                />

                {/* Subdued Pulse n Care Logo Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-teal-200 shadow-2xs flex items-center gap-2.5">
                  <img src="/assets/brand/pulse-n-care/pulse-n-care-logo.svg" alt="Pulse n Care" className="h-6 w-auto" />
                  <span className="text-[10px] font-black text-brand-teal uppercase tracking-widest border-l border-slate-200 pl-2">
                    Official Care Team
                  </span>
                </div>

                {/* Role Micro Labels */}
                <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Lead Nurse (RN)
                  </span>
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Physician (MBBS)
                  </span>
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Physiotherapist (BPT)
                  </span>
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Senior Caregiver (GNM)
                  </span>
                </div>

                {/* Bottom Managed Roster Status Strip */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-border-default shadow-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200 shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-text-primary">Managed In-House Care Team</p>
                      <p className="text-[11px] text-text-muted">Assigned & Monitored by Central Operations Desk</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-brand-teal bg-canvas-teal px-3 py-1.5 rounded-full border border-teal-200 uppercase shrink-0">
                    Council Verified
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — EDITORIAL ASYMMETRIC CARE ECOSYSTEM                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            Integrated Service Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
            Care for different needs, coordinated around home
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl font-medium">
            Pulse n Care arranges professional clinical care and daily living support based on patient requirements.
          </p>
        </div>

        {/* Asymmetric Editorial Grid: 1 Large Flagship Hero + 4 Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Dominant Service Card: Home Nursing (7 columns) */}
          <div
            onClick={() => navigate('/services/home-nursing')}
            className="lg:col-span-7 group bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 shadow-card cursor-pointer hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden min-h-[380px]"
          >
            <img
              src="/assets/services/home-nursing/pulse-n-care-home-nursing-hero.webp"
              alt="Home Nursing Care"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/10 text-teal-300 border border-white/20 uppercase tracking-widest">
                24×7 Flagship Service
              </span>
              <h3 className="text-3xl font-black text-white">Clinical Home Nursing</h3>
              <p className="text-sm text-teal-100 max-w-xl leading-relaxed">
                Registered B.Sc Nurses for sterile post-surgical dressing, IV/IM injections, catheter management, Ryle tube feeding, and 24-hour rotational care.
              </p>
            </div>

            <div className="relative z-10 pt-6 flex items-center justify-between">
              <span className="text-xs font-extrabold text-teal-300">Short Visit • 12h Shift • 24h Rotational</span>
              <Button size="sm" className="bg-brand-teal text-white font-black text-xs px-5 py-2.5 rounded-xl">
                Explore Home Nursing <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* 4 Supporting Services in 2x2 Grid (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Caregiver */}
            <div
              onClick={() => navigate('/services/12-hour-caregiver-attendant')}
              className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs hover:border-brand-teal hover:shadow-card transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="font-black text-text-primary text-sm group-hover:text-brand-teal transition-colors">
                  Caregiver / Attendant
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Bathing, mobility, diaper changes & daily bedside support.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-teal flex items-center gap-1">
                View Service <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Physiotherapy */}
            <div
              onClick={() => navigate('/services/orthopedic-joint-rehab-physio')}
              className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs hover:border-brand-teal hover:shadow-card transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h4 className="font-black text-text-primary text-sm group-hover:text-brand-teal transition-colors">
                  Physical Therapy
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Post-op knee rehab, joint stiffness & stroke recovery.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-teal flex items-center gap-1">
                View Service <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Doctor Visit */}
            <div
              onClick={() => navigate('/services/general-physician-home-visit')}
              className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs hover:border-brand-teal hover:shadow-card transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-black text-text-primary text-sm group-hover:text-brand-teal transition-colors">
                  Doctor Home Visit
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  In-home physician evaluation & digital prescription.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-teal flex items-center gap-1">
                View Service <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Specialized ICU */}
            <div
              onClick={() => navigate('/services/home-icu-critical-care-nurse')}
              className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs hover:border-brand-teal hover:shadow-card transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold">
                  <ShieldPlus className="w-5 h-5" />
                </div>
                <h4 className="font-black text-text-primary text-sm group-hover:text-brand-teal transition-colors">
                  Specialized ICU Care
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Ventilator management & tracheostomy monitoring.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-teal flex items-center gap-1">
                View Service <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — EDITORIAL SPLIT: WHY PULSE N CARE                            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-canvas-secondary p-8 sm:p-12 rounded-3xl border border-border-default">
          
          {/* Left Healthcare Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <img
                src="/assets/services/home-nursing/pulse-n-care-vitals.webp"
                alt="Pulse n Care Clinical Care"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right Principles */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
                Operational Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
                Care that feels organized, personal and professional.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-black text-text-primary text-base">
                  <ClipboardCheck className="w-5 h-5 text-brand-teal" />
                  <span>Right care requirement</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Services are structured around exact patient needs, clinical procedures, and physician discharge orders.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-black text-text-primary text-base">
                  <UserCheck className="w-5 h-5 text-brand-teal" />
                  <span>Managed care team</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Central Operations allocates council-verified internal staff matching clinical complexity and location.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-black text-text-primary text-base">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                  <span>Location-aware service</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Active dispatch hubs across Delhi, Noida, Gurugram, and Faridabad ensure punctual staff arrival.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-black text-text-primary text-base">
                  <PhoneCall className="w-5 h-5 text-brand-teal" />
                  <span>Ongoing support</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  24/7 Operations Desk monitors shift handovers, vitals charting, and scheduling modifications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — HOW CARE IS ARRANGED (5-STEP HORIZONTAL JOURNEY)             */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="relative bg-white py-12 border-y border-border-default overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
              Care Concierge Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
              How care is arranged
            </h2>
            <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto">
              Simple 5-step process to arrange managed healthcare support for your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {careJourneySteps.map((step) => (
              <div key={step.num} className="bg-canvas-secondary p-5 rounded-3xl border border-border-default space-y-2 relative group hover:border-brand-teal transition-all">
                <span className="text-2xl font-mono font-black text-brand-teal block">{step.num}</span>
                <h3 className="font-black text-text-primary text-sm">{step.title}</h3>
                <p className="text-[11px] text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — REAL CARE TEAM IDENTITY (HUMAN-CENTERED, NO MARKETPLACE)     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            In-House Clinical Roster Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
            Professional care, brought home.
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-medium">
            Pulse n Care manages an internal workforce of registered nurses, physicians, physiotherapists, and senior caregivers across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-border-default shadow-2xs space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/services/home-nursing/pulse-n-care-nurse-portrait.webp"
                alt="Pulse n Care Staff Nurse"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
              />
              <div>
                <h4 className="font-black text-text-primary text-base">Sr. Nurse Priya Sharma, RN</h4>
                <p className="text-xs text-brand-teal font-extrabold">B.Sc Nursing • DNC Reg #66412</p>
                <p className="text-xs text-text-muted">6+ Years ICU & Wound Care</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
              <span className="font-medium">Specialization:</span>
              <span className="font-bold text-text-primary">Post-Op & Sterile Dressings</span>
            </div>
            <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-xs font-bold text-brand-teal flex items-center justify-between">
              <span>South Delhi Dispatch Hub</span>
              <span>Active Roster</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-border-default shadow-2xs space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/services/home-nursing/pulse-n-care-vitals.webp"
                alt="Pulse n Care Critical Care Nurse"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
              />
              <div>
                <h4 className="font-black text-text-primary text-base">Karthik Verma, RN</h4>
                <p className="text-xs text-brand-teal font-extrabold">B.Sc Nursing • ICU Certified</p>
                <p className="text-xs text-text-muted">5+ Years Ventilator Care</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
              <span className="font-medium">Specialization:</span>
              <span className="font-bold text-text-primary">ICU & Tracheostomy</span>
            </div>
            <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-xs font-bold text-brand-teal flex items-center justify-between">
              <span>Gurugram Dispatch Hub</span>
              <span>Active Roster</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-border-default shadow-2xs space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/services/home-nursing/pulse-n-care-bedside-support.webp"
                alt="Pulse n Care Senior Caregiver"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
              />
              <div>
                <h4 className="font-black text-text-primary text-base">Sunita Devi, GNM</h4>
                <p className="text-xs text-brand-teal font-extrabold">GNM • Geriatric Care</p>
                <p className="text-xs text-text-muted">8+ Years Elder Support</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
              <span className="font-medium">Specialization:</span>
              <span className="font-bold text-text-primary">Elderly Hygiene & Insulin</span>
            </div>
            <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-xs font-bold text-brand-teal flex items-center justify-between">
              <span>Noida Dispatch Hub</span>
              <span>Active Roster</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — FLAGSHIP HOME NURSING FEATURE                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <img
                src="/assets/services/home-nursing/pulse-n-care-wound-care.webp"
                alt="Pulse n Care Home Nursing"
                className="w-full h-[440px] object-cover"
              />
            </div>
          </div>

          {/* Right Capabilities List */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
                Flagship Clinical Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
                Home Nursing — Professional nursing support at your doorstep.
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Registered B.Sc Nurses and GNM professionals providing sterile wound dressing, IV antibiotic infusions, catheter care, and shift handovers at home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-text-primary pt-2">
              <div className="flex items-center gap-2 p-2.5 bg-canvas-secondary rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Aseptic Wound Dressing
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-secondary rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> IV / IM Medication
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-secondary rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Catheter & Stoma Hygiene
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-canvas-secondary rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Vitals & Progress Charting
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                onClick={() => navigate('/services/home-nursing')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-brand-teal text-white font-extrabold px-8 py-3.5 rounded-2xl"
              >
                Explore Home Nursing
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — CARE SCENARIOS AT HOME                                       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            Care Contexts
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
            Care for different moments at home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careScenarios.map((sc) => (
            <div key={sc.title} className="bg-canvas-secondary p-6 rounded-3xl border border-border-default space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-white border border-teal-200">
                  {sc.icon}
                </div>
                <span className="text-[10px] font-black text-brand-teal bg-white px-2.5 py-1 rounded-md border border-teal-200 uppercase">
                  {sc.tag}
                </span>
              </div>
              <h3 className="font-black text-text-primary text-base">{sc.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed font-medium">{sc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — DELHI NCR COVERAGE MAP & HUB SELECTOR                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3 text-left">
            <span className="text-xs font-black text-teal-300 uppercase tracking-widest block">
              Active Regional Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Care across Delhi NCR
            </h2>
            <p className="text-sm text-teal-100 leading-relaxed font-medium">
              We operate active dispatch hubs in Delhi, Noida, Gurugram, and Faridabad. Enter your address or pincode during booking to verify regional staff availability.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <Button
              onClick={() => navigate('/services')}
              className="bg-brand-teal text-white font-extrabold px-8 py-4 rounded-2xl text-sm w-full sm:w-auto"
            >
              Check Your Locality Area →
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — FOR ORGANIZATIONS (B2B HOSPITAL STAFFING)                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-canvas-secondary p-8 sm:p-12 rounded-3xl border border-teal-200 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xs">
          <div className="space-y-3 text-left max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-canvas-teal text-brand-teal border border-teal-200 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-brand-teal" /> B2B Healthcare Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-text-primary">Hospital & Clinic Staffing Solutions</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Hospitals, clinics, and senior living facilities use our Organization Portal to submit 8h/12h ICU & Ward nurse requisitions with managed internal roster allocation.
            </p>
          </div>

          <Link to="/organization/dashboard" className="shrink-0">
            <Button size="lg" className="bg-brand-teal text-white font-extrabold px-8 py-3.5 rounded-2xl">
              Access Organization Portal
            </Button>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — FAQ ACCORDION                                               */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black text-text-primary tracking-tight">
            Everything you need to know about Pulse n Care
          </h2>
        </div>

        <div className="space-y-3 text-left">
          {faqItems.map((faq, idx) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-border-default overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left font-black text-text-primary text-sm sm:text-base cursor-pointer hover:text-brand-teal transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-brand-teal shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed font-medium border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — FINAL CAMPAIGN CALL TO ACTION BANNER                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-canvas-teal/50 rounded-3xl p-8 sm:p-12 border border-teal-200 text-text-primary flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
              Let’s arrange the right care for home.
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
              Tell us what kind of support you need and where care is required. Our 24/7 Operations Desk will confirm staff availability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              size="lg"
              onClick={() => navigate('/client/booking/wizard?serviceId=srv-nursing-post-op')}
              className="bg-brand-teal text-white font-black px-8 py-4 rounded-2xl cursor-pointer text-sm shadow-card"
            >
              Book Home Care Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCallbackModalOpen(true)}
              leftIcon={<PhoneCall className="w-4 h-4 text-brand-teal" />}
              className="font-bold border-border-default text-text-primary bg-white cursor-pointer px-6 py-4 rounded-2xl"
            >
              Talk to Our Care Team
            </Button>
          </div>
        </div>
      </section>

      {/* Operations Callback Modal */}
      <Modal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
        title="Talk to Pulse n Care Operations Team"
        maxWidth="md"
      >
        <div className="space-y-4 text-left">
          <p className="text-xs text-text-secondary">
            Leave your contact details. Our Operations Desk will call you back within 15 minutes to answer clinical or scheduling queries.
          </p>

          {!callbackSubmitted ? (
            <form onSubmit={handleCallbackSubmit} className="space-y-3">
              <Input
                label="Your Name"
                value={callbackName}
                onChange={(e) => setCallbackName(e.target.value)}
                placeholder="e.g. Rahul Mehta"
                required
              />
              <Input
                label="Mobile Number (+91)"
                type="tel"
                value={callbackPhone}
                onChange={(e) => setCallbackPhone(e.target.value)}
                placeholder="9876543210"
                required
              />
              <div className="space-y-1">
                <label className="text-xs font-bold text-text-secondary">Care Requirements / Notes</label>
                <textarea
                  rows={3}
                  value={callbackNotes}
                  onChange={(e) => setCallbackNotes(e.target.value)}
                  placeholder="e.g., Post-op knee surgery nursing care for 12h day shift..."
                  className="w-full p-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                leftIcon={<Send className="w-4 h-4" />}
                className="w-full bg-brand-teal text-white font-bold h-11 rounded-xl cursor-pointer"
              >
                Request Callback
              </Button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 text-center">
              ✓ Callback request received. Our care desk will reach out shortly.
            </div>
          )}
        </div>
      </Modal>

    </div>
  );
};
