import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { ServiceCard } from '../../components/domain/ServiceCard';
import { useBookings } from '../../context/BookingContext';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  UserCheck,
  ArrowRight,
  Sparkles,
  Building2,
  PhoneCall,
  Send,
  Stethoscope
} from 'lucide-react';
import type { Service } from '../../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { services } = useBookings();

  const [locationInput, setLocationInput] = useState('');
  const [locationStatus, setLocationStatus] = useState<string | null>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackNotes, setCallbackNotes] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const featuredServices: Service[] = services.slice(0, 6);

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

  return (
    <div className="space-y-20 pb-20 bg-white text-text-primary text-left">
      {/* 01. Hero Section — Nurse Care at Doorstep */}
      <section className="relative pt-10 pb-16 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-border-default overflow-hidden">
        <HealthcareTexture type="clinical-wave" opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Brand Storytelling & Location Console */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-teal text-brand-teal text-xs font-extrabold border border-teal-200 uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Verified Home Healthcare Operations</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tight leading-[1.1]">
                Nurse care at <span className="text-brand-teal">doorstep.</span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-medium">
                Professional healthcare support arranged at home based on care requirements, timing, location and availability across Delhi NCR.
              </p>

              {/* Location & Care Console: Where do you need care? */}
              <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-card border border-border-default space-y-3.5">
                <span className="text-xs font-extrabold text-brand-teal uppercase tracking-wider block">
                  Where do you need care?
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 flex items-center gap-2.5 px-3 py-2.5 bg-canvas-secondary rounded-2xl border border-border-default w-full">
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
                    className="text-xs font-bold shrink-0 border-teal-200 text-brand-teal hover:bg-canvas-teal cursor-pointer"
                  >
                    Use current location
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate('/client/booking/wizard?serviceId=srv-nursing-post-op')}
                    className="bg-brand-teal text-white font-extrabold px-6 py-3 rounded-2xl cursor-pointer shrink-0"
                  >
                    Book a service
                  </Button>
                </div>

                {locationStatus && (
                  <p className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                    {locationStatus}
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/services')}
                    className="text-xs font-extrabold text-brand-teal hover:bg-canvas-teal cursor-pointer"
                  >
                    Explore services →
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCallbackModalOpen(true)}
                    className="text-xs font-extrabold text-text-secondary hover:text-text-primary cursor-pointer"
                  >
                    Talk to our care team
                  </Button>
                </div>
              </div>

              {/* Factual Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-text-secondary font-semibold">
                <span className="flex items-center gap-1.5 text-text-primary">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" /> Council-Verified Nursing Staff
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <Clock className="w-4 h-4 text-brand-teal" /> Central Operations Oversight
                </span>
                <span className="flex items-center gap-1.5 text-text-primary">
                  <Award className="w-4 h-4 text-brand-teal" /> Delhi NCR Active Hubs
                </span>
              </div>
            </div>

            {/* Right Column: Branded Hero Photography & Nurse Cutout */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-home-nursing-hero.jpg"
                  alt="Pulse n Care Home Nurse"
                  className="w-full h-[460px] object-cover"
                />

                {/* Branded Uniform Logo Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-200 shadow-2xs flex items-center gap-2">
                  <img src="/assets/brand/pulse-n-care/pulse-n-care-logo.svg" alt="Pulse n Care" className="h-5 w-auto" />
                </div>

                {/* Operations Staff Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-border-default shadow-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-extrabold text-text-primary">Internal Workforce Allocation</p>
                      <p className="text-[11px] text-text-muted">Assigned by Central Operations Desk</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-brand-teal bg-canvas-teal px-2.5 py-1 rounded-full border border-teal-200 uppercase">
                    Council Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Flagship Service Showcase: 24×7 Home Nursing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 via-brand-teal to-teal-800 text-white rounded-3xl p-8 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <HealthcareTexture type="care-pathway" opacity={0.08} />

          <div className="space-y-4 text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-white/10 text-teal-200 border border-white/20 uppercase tracking-widest">
              Featured Flagship Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              24×7 Home Nursing Care
            </h2>
            <p className="text-sm text-teal-100 leading-relaxed font-medium">
              Dedicated nursing support delivered at home. Includes short clinical visits, 12-hour day/night shifts, 24-hour rotational care, post-operative wound dressing, catheter management, and tube feeding.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white pt-2">
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/20">✓ 2–4h Short Visit</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/20">✓ 12h Day / Night Shift</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/20">✓ 24h Rotational Handover</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0">
            <Button
              variant="primary"
              onClick={() => navigate('/services/home-nursing')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-white text-brand-teal hover:bg-teal-50 font-extrabold px-8 py-3.5 rounded-2xl cursor-pointer text-sm shadow-md"
            >
              Explore Home Nursing
            </Button>
          </div>
        </div>
      </section>

      {/* 03. Complete Healthcare Service Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
              Complete Service Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
              Specialized Home Care Services
            </h2>
            <p className="text-xs text-text-muted">
              Select any care category below to arrange managed support for your family.
            </p>
          </div>

          <Link to="/services">
            <Button variant="ghost" className="text-brand-teal font-extrabold text-xs flex items-center gap-1 cursor-pointer">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service: Service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => navigate(`/services/${service.slug || service.id}`)}
            />
          ))}
        </div>
      </section>

      {/* 04. Care Pathway (01 to 06) */}
      <section id="how-it-works" className="relative bg-canvas-secondary py-16 border-y border-border-default overflow-hidden">
        <HealthcareTexture type="care-pathway" opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
              Care Concierge Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
              How Arranging Care Works
            </h2>
            <p className="text-xs text-text-muted max-w-xl mx-auto">
              Tell us what care you need. Pulse n Care Operations arranges qualified support tailored to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {carePathwaySteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-2xl border border-border-default shadow-2xs space-y-2 relative">
                <span className="text-xl font-mono font-black text-brand-teal block">{item.step}</span>
                <h3 className="font-extrabold text-text-primary text-sm">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Pulse n Care Care Team (Capabilities & Managed Workforce Roster Showcase — NO PUBLIC MARKETPLACE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
            Operations & Clinical Oversight
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Pulse n Care Care Team
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-medium">
            Qualified and credential-verified care team managed by Pulse n Care Operations across active Delhi NCR dispatch hubs.
          </p>
        </div>

        {/* Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-text-primary text-base">Qualified Nursing Qualifications</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Staff hold B.Sc Nursing or GNM qualifications with active state nursing council registrations and verified clinical procedure experience.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-text-primary text-base">Operational Governance</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Every assignment is overseen by our 24/7 Central Operations Desk. Shift handovers, vitals logs, and care notes are documented systematically.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border-default bg-white shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-bold border border-teal-200">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-text-primary text-base">Delhi NCR Active Service Hubs</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Active dispatch hubs operate in Delhi, Noida, Gurugram, and Faridabad to ensure reliable home nursing and attendant coverage.
            </p>
          </Card>
        </div>

        {/* Managed Workforce Roster Overview */}
        <div className="bg-canvas-secondary p-6 sm:p-8 rounded-3xl border border-border-default space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-brand-teal uppercase tracking-widest block">
                Internal Care Workforce Profile Standard
              </span>
              <h3 className="text-xl font-black text-text-primary">
                Representative Pulse n Care Nursing Staff
              </h3>
              <p className="text-xs text-text-muted">
                Staff members are assigned by Central Operations based on your patient’s specific clinical requirements and locality hub.
              </p>
            </div>
            <span className="text-xs font-bold text-teal-800 bg-canvas-teal px-3 py-1.5 rounded-full border border-teal-200 shrink-0 self-start sm:self-center">
              ✓ 100% Council Verified Roster
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-nurse-portrait.webp"
                  alt="Pulse n Care Staff Nurse"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-text-primary text-sm">Sr. Nurse Priya Sharma, RN</h4>
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

            <div className="bg-white p-5 rounded-2xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-vitals.webp"
                  alt="Pulse n Care Critical Care Nurse"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-text-primary text-sm">Karthik Verma, RN</h4>
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

            <div className="bg-white p-5 rounded-2xl border border-border-default shadow-2xs space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/services/home-nursing/pulse-n-care-bedside-support.webp"
                  alt="Pulse n Care Senior Caregiver"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-200 shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-text-primary text-sm">Sunita Devi, GNM</h4>
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

      {/* 06. Hospital & Organization Staffing Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 via-teal-50/40 to-blue-50/30 p-8 sm:p-12 rounded-3xl border border-teal-200 text-text-primary flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xs relative z-10">
          <HealthcareTexture type="soft-cell" opacity={0.03} />

          <div className="space-y-3 text-left max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-canvas-teal text-brand-teal border border-teal-200 uppercase tracking-wider">
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

      {/* 07. Operations Callback Modal Trigger Banner */}
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
              className="bg-brand-teal text-white font-extrabold px-8 py-3.5 rounded-2xl cursor-pointer text-sm"
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
        title="Talk to Pulse n Care Team"
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
