import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  MapPin,
  ShieldCheck,
  Clock,
  UserCheck,
  ArrowRight,
  Sparkles,
  Building2,
  PhoneCall,
  Send,
  Stethoscope,
  CheckCircle2
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

  const handleDetectLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocationInput('DLF Phase 5, Gurugram');
          setLocationStatus('✓ Home Nursing & Clinical Services are active in your area.');
        },
        () => {
          setLocationInput('Sector 62, Noida');
          setLocationStatus('✓ Home Nursing & Clinical Services are active in your area.');
        }
      );
    } else {
      setLocationInput('Defence Colony, New Delhi');
      setLocationStatus('✓ Home Nursing & Clinical Services are active in your area.');
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

  const carePathwaySteps = [
    { step: '01', title: 'Choose your care service', desc: 'Select home nursing, attendant care, or specialized clinical services.' },
    { step: '02', title: 'Tell us who needs care', desc: 'Provide patient relationship, medical context & specific requirements.' },
    { step: '03', title: 'Choose your timing', desc: 'Select 12h day/night shift, 24h rotational care, or short clinical visits.' },
    { step: '04', title: 'Tell us where care is needed', desc: 'Provide home address in supported Delhi NCR localities.' },
    { step: '05', title: 'Pulse n Care arranges suitable staff', desc: 'Central Operations assigns qualified internal staff based on clinical needs.' },
    { step: '06', title: 'Care is confirmed', desc: 'Receive instant confirmation & assigned nurse credentials at doorstep.' }
  ];

  const serviceEcosystemTiles = [
    {
      id: 'nursing',
      title: 'Home Nursing',
      desc: 'Wound care, IV fluids, catheter hygiene & vital monitoring',
      path: '/services/home-nursing',
      image: '/assets/services/home-nursing/pulse-n-care-wound-care.webp',
      badge: '24×7 Flagship'
    },
    {
      id: 'caregiver',
      title: 'Caregiver / Attendant',
      desc: 'Bathing, mobility, diaper changes & bedside supervision',
      path: '/services/12-hour-caregiver-attendant',
      image: '/assets/services/home-nursing/pulse-n-care-bedside-support.webp',
      badge: '12h / 24h Shifts'
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      desc: 'Post-op knee rehab, joint stiffness & stroke mobility recovery',
      path: '/services/orthopedic-joint-rehab-physio',
      image: '/assets/services/home-nursing/pulse-n-care-mobility.webp',
      badge: 'Certified BPT'
    },
    {
      id: 'doctor',
      title: 'Doctor Visit',
      desc: 'In-home clinical consultation, physical exam & prescriptions',
      path: '/services/general-physician-home-visit',
      image: '/assets/services/home-nursing/pulse-n-care-medication.webp',
      badge: 'MBBS / MD'
    },
    {
      id: 'icu',
      title: 'Specialized ICU Care',
      desc: 'Ventilator management, tracheostomy suctioning & ICU setup',
      path: '/services/home-icu-critical-care-nurse',
      image: '/assets/services/home-nursing/pulse-n-care-equipment.webp',
      badge: 'Critical Care'
    }
  ];

  return (
    <div className="space-y-20 pb-20 bg-white text-text-primary text-left overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 01. FULL-WIDTH PREMIUM HEALTHCARE CAMPAIGN BANNER HERO                    */}
      {/* ========================================================================= */}
      <section className="relative min-h-[680px] pt-10 pb-16 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-border-default overflow-hidden flex items-center">
        <HealthcareTexture type="clinical-wave" opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (45%): Brand Storytelling & Location Console */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canvas-teal text-brand-teal text-xs font-black tracking-widest uppercase border border-teal-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Pulse n Care · Home Healthcare</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.05]">
                Nurse care at <span className="text-brand-teal underline decoration-teal-300 decoration-wavy decoration-2">doorstep.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl font-medium">
                Professional healthcare support arranged at home — tailored to your patient's needs, schedule and location across Delhi NCR.
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
                    📍 Use current location
                  </Button>
                </div>

                {locationStatus && (
                  <p className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 animate-fadeIn">
                    {locationStatus}
                  </p>
                )}
              </div>

              {/* Factual Hero Trust Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-text-secondary">
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 24×7 Care Options
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 12h & Night Shifts
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Delhi NCR Service Coverage
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Managed Care Team
                </span>
              </div>
            </div>

            {/* Right Column (55%): Wide Photographic Campaign Scene & Floating Product Cards */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white">
                
                {/* 5-Person Coordinated Pulse n Care Team Hero Image */}
                <img
                  src="/assets/services/home-nursing/pulse-n-care-team-hero.jpg"
                  alt="Pulse n Care Healthcare Care Team"
                  className="w-full h-[520px] object-cover object-center"
                />

                {/* Branded Uniform Logo Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-teal-200 shadow-2xs flex items-center gap-2.5">
                  <img src="/assets/brand/pulse-n-care/pulse-n-care-logo.svg" alt="Pulse n Care" className="h-6 w-auto" />
                  <span className="text-[10px] font-black text-brand-teal uppercase tracking-widest border-l border-slate-200 pl-2">
                    Official Care Team
                  </span>
                </div>

                {/* Micro Role Badges */}
                <div className="absolute top-16 right-4 flex flex-col gap-2">
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Lead Nurse (RN)
                  </span>
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Physician (MBBS)
                  </span>
                  <span className="bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/20">
                    Physiotherapist (BPT)
                  </span>
                </div>

                {/* Bottom Floating Operations Status Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-border-default shadow-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200 shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-text-primary">Managed In-House Care Roster</p>
                      <p className="text-[11px] text-text-muted">Assigned & Monitored by Central Operations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-brand-teal bg-canvas-teal px-3 py-1.5 rounded-full border border-teal-200 uppercase shrink-0">
                    Council Verified
                  </span>
                </div>
              </div>

              {/* Floating Product Card 1: Active Hubs */}
              <div className="hidden xl:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-border-default shadow-card items-center gap-3 w-64 z-20">
                <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-text-primary">Delhi NCR Coverage</p>
                  <p className="text-[10px] text-text-muted">Delhi • Noida • Gurugram • Faridabad</p>
                </div>
              </div>

              {/* Floating Product Card 2: Shift Options */}
              <div className="hidden xl:flex absolute -top-4 -left-6 bg-white p-3.5 rounded-2xl border border-border-default shadow-card items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-text-primary">Flexible Shift Options</p>
                  <p className="text-[10px] text-text-muted">Short Visit • 12h Day/Night • 24h Rotational</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. SERVICE ECOSYSTEM STRIP IMMEDIATELY BELOW HERO                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            Integrated Service Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
            Care for different needs. One coordinated team.
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl font-medium">
            Select any specialized service below to arrange verified, internal care support for your family.
          </p>
        </div>

        {/* 5 Service Tiles with Alternating Visual Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {serviceEcosystemTiles.map((tile, idx) => (
            <div
              key={tile.id}
              onClick={() => navigate(tile.path)}
              className={`group bg-white rounded-3xl border border-border-default p-4 space-y-3 cursor-pointer hover:border-brand-teal hover:shadow-card transition-all flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-1 ring-2 ring-brand-teal/30 bg-canvas-teal/10' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="relative h-32 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[9px] font-black text-brand-teal px-2 py-0.5 rounded-md border border-teal-200 uppercase">
                    {tile.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-text-primary text-sm group-hover:text-brand-teal transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-[11px] text-text-muted leading-relaxed font-medium">
                    {tile.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. FEATURED FLAGSHIP SERVICE SHOWCASE (24×7 HOME NURSING)               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <HealthcareTexture type="care-pathway" opacity={0.08} />

          <div className="space-y-4 text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-white/10 text-teal-300 border border-white/20 uppercase tracking-widest">
              Flagship Clinical Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              24×7 Home Nursing Care
            </h2>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed font-medium">
              Dedicated hospital-grade nursing care delivered at home. Includes sterile post-op wound dressings, IV/IM medication, catheter & stoma hygiene, vitals charting, and shift handovers.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white pt-2">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20">✓ 2–4h Clinical Visit</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20">✓ 12h Day / Night Shift</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20">✓ 24h Rotational Care</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0">
            <Button
              variant="primary"
              onClick={() => navigate('/services/home-nursing')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-brand-teal text-white hover:bg-brand-teal-hover font-black px-8 py-4 rounded-2xl cursor-pointer text-sm shadow-md"
            >
              Explore Home Nursing
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. SCROLL-TRIGGERED CARE PATHWAY (HOW ARRANGING CARE WORKS)              */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="relative bg-canvas-secondary py-16 border-y border-border-default overflow-hidden">
        <HealthcareTexture type="care-pathway" opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
              Care Concierge Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
              How Arranging Care Works
            </h2>
            <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto">
              Tell us what care you need. Pulse n Care Central Operations arranges qualified internal support tailored to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {carePathwaySteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-3xl border border-border-default shadow-2xs space-y-3 relative group hover:border-brand-teal transition-all">
                <span className="text-2xl font-mono font-black text-brand-teal block">{item.step}</span>
                <h3 className="font-black text-text-primary text-base">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. PULSE N CARE CARE TEAM — CAPABILITIES & TRUST (NO MARKETPLACE)        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-black text-brand-teal uppercase tracking-widest block">
            Internal Operations & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
            One team. Different kinds of care.
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-medium">
            Qualified and credential-verified care team managed directly by Pulse n Care Operations across active Delhi NCR dispatch hubs.
          </p>
        </div>

        {/* Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-black text-text-primary text-lg">Verified Nursing Qualifications</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Staff hold B.Sc Nursing, GNM, or BPT qualifications with active Delhi Nursing Council (DNC) or state registrations.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-black text-text-primary text-lg">Operational Governance</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Every assignment is overseen by our 24/7 Central Operations Desk. Handovers, vitals charts, and care logs are documented systematically.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-black text-text-primary text-lg">Delhi NCR Active Service Hubs</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Active dispatch hubs operate in Delhi, Noida, Gurugram, and Faridabad to ensure fast response times and continuous care.
            </p>
          </Card>
        </div>

        {/* Managed Care Team Roster Showcase */}
        <div className="bg-canvas-secondary p-6 sm:p-8 rounded-3xl border border-border-default space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-brand-teal uppercase tracking-widest block">
                Internal Care Workforce Roster Standard
              </span>
              <h3 className="text-xl font-black text-text-primary">
                Representative Pulse n Care Care Team
              </h3>
              <p className="text-xs text-text-muted">
                Staff members are assigned by Central Operations based on your patient’s specific clinical needs and locality hub.
              </p>
            </div>
            <span className="text-xs font-extrabold text-teal-800 bg-canvas-teal px-3.5 py-1.5 rounded-full border border-teal-200 shrink-0 self-start sm:self-center">
              ✓ 100% Council Verified Roster
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-nurse-portrait.webp"
                  alt="Pulse n Care Staff Nurse"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-black text-text-primary text-sm">Sr. Nurse Priya Sharma, RN</h4>
                  <p className="text-xs text-brand-teal font-bold">B.Sc Nursing • DNC Reg #66412</p>
                  <p className="text-[11px] text-text-muted">6+ Years ICU & Home Nursing</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
                <span className="font-medium">Specialization:</span>
                <span className="font-bold text-text-primary">Wound & Post-Op Care</span>
              </div>
              <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-[11px] font-bold text-brand-teal flex items-center justify-between">
                <span>Hub: South Delhi (Connaught Place)</span>
                <span>Active Roster</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-vitals.webp"
                  alt="Pulse n Care Critical Care Nurse"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-black text-text-primary text-sm">Karthik Verma, RN</h4>
                  <p className="text-xs text-brand-teal font-bold">B.Sc Nursing • Critical Care Cert.</p>
                  <p className="text-[11px] text-text-muted">5+ Years Ventilator & Tracheostomy</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
                <span className="font-medium">Specialization:</span>
                <span className="font-bold text-text-primary">ICU & Vitals Monitoring</span>
              </div>
              <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-[11px] font-bold text-brand-teal flex items-center justify-between">
                <span>Hub: Gurugram (DLF Phase 5)</span>
                <span>Active Roster</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-bedside-support.webp"
                  alt="Pulse n Care Senior Caregiver"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-black text-text-primary text-sm">Sunita Devi, GNM</h4>
                  <p className="text-xs text-brand-teal font-bold">GNM • Geriatric Care Specialist</p>
                  <p className="text-[11px] text-text-muted">8+ Years Senior & Bedside Care</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-text-secondary">
                <span className="font-medium">Specialization:</span>
                <span className="font-bold text-text-primary">Elderly Hygiene & Insulin</span>
              </div>
              <div className="bg-canvas-teal/50 px-3 py-1.5 rounded-xl text-[11px] font-bold text-brand-teal flex items-center justify-between">
                <span>Hub: Noida (Sector 62)</span>
                <span>Active Roster</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. HOSPITAL & B2B ORGANIZATION STAFFING CALLOUT                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 via-teal-50/40 to-blue-50/30 p-8 sm:p-12 rounded-3xl border border-teal-200 text-text-primary flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xs relative z-10">
          <HealthcareTexture type="soft-cell" opacity={0.03} />

          <div className="space-y-3 text-left max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-canvas-teal text-brand-teal border border-teal-200 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-brand-teal" /> B2B Healthcare Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-text-primary">Hospital & Clinic Staffing Solutions</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Healthcare facilities use our Organization Portal to submit 8h/12h ICU & Ward nurse requisitions with managed internal roster allocation.
            </p>
          </div>

          <Link to="/organization/dashboard" className="relative z-10 shrink-0">
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold px-6 py-3 rounded-2xl cursor-pointer">
              Access Organization Portal
            </Button>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. OPERATIONS CALLBACK MODAL TRIGGER BANNER                               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-canvas-teal/50 rounded-3xl p-8 sm:p-12 border border-teal-200 text-text-primary flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-text-primary">Need assistance arranging care?</h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Tell us what care your patient needs. Our 24/7 Operations Desk will answer your questions and arrange suitable support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              size="lg"
              onClick={() => navigate('/client/booking/wizard?serviceId=srv-nursing-post-op')}
              className="bg-brand-teal text-white font-black px-8 py-3.5 rounded-2xl cursor-pointer text-sm"
            >
              Book Home Care Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCallbackModalOpen(true)}
              leftIcon={<PhoneCall className="w-4 h-4 text-brand-teal" />}
              className="font-bold border-border-default text-text-primary bg-white cursor-pointer"
            >
              Talk to Our Care Team
            </Button>
          </div>
        </div>
      </section>

      {/* Callback Modal */}
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
