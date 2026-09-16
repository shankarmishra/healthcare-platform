import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/domain/ServiceCard';
import { ProfessionalCard } from '../../components/domain/ProfessionalCard';
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
  CheckCircle2,
  Building2,
  ChevronDown,
  ChevronUp,
  Search,
  Calendar,
  Activity,
  HeartPulse,
  Navigation,
  FileCheck2,
  CheckCircle
} from 'lucide-react';
import type { Service, ProfessionalProfile } from '../../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { services, professionals } = useBookings();
  const [searchLocation, setSearchLocation] = useState('Indiranagar, Bangalore');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCareDate, setSelectedCareDate] = useState<string>('Today');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(4);

  const topProfessionals: ProfessionalProfile[] = professionals.filter((p: ProfessionalProfile) => p.isVerified).slice(0, 3);
  const featuredServices: Service[] = services.slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?location=${encodeURIComponent(searchLocation)}&category=${selectedCategory}`);
  };

  const careJourneySteps = [
    { title: 'Requested', desc: 'Patient submits care requirements', icon: <Calendar className="w-4 h-4" /> },
    { title: 'Matched', desc: '45s algorithmic provider scoring', icon: <Activity className="w-4 h-4" /> },
    { title: 'Accepted', desc: 'Credentialed nurse confirms shift', icon: <UserCheck className="w-4 h-4" /> },
    { title: 'On the Way', desc: 'Real-time GPS transit monitoring', icon: <Navigation className="w-4 h-4" /> },
    { title: 'Checked In', desc: 'QR code arrival verification', icon: <FileCheck2 className="w-4 h-4" /> },
    { title: 'Care Active', desc: 'Clinical vitals & procedure logging', icon: <HeartPulse className="w-4 h-4" /> },
    { title: 'Completed', desc: 'Digital summary & patient review', icon: <CheckCircle className="w-4 h-4" /> }
  ];

  const faqs = [
    {
      q: 'How are healthcare professionals background verified?',
      a: 'Every nurse and caregiver undergoes a 5-pillar verification audit: State Nursing Council active registration check, government photo ID verification, criminal background record check, 2 professional references validation, and infectious disease screening.'
    },
    {
      q: 'What happens if my assigned nurse is delayed?',
      a: 'Our Ops Command Center monitors real-time GPS check-ins. If a caregiver is delayed over 15 minutes, automated dispatch alerts operations staff and offers immediate priority re-assignment or 100% refund.'
    },
    {
      q: 'Is pricing transparent without hidden fees?',
      a: 'Yes. All prices are itemized up-front including base hourly rate, GST (18%), and platform fee before payment. No unexpected cash demands at home.'
    },
    {
      q: 'Can hospitals and clinics order emergency staffing?',
      a: 'Yes! Healthcare facilities use our Organization Portal for 8h/12h ICU nurse ward coverage with digitized timesheet sign-offs.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-white">
      {/* 01. Hero Section — Healthcare Blueprint Texture (Medical Contour Grid) */}
      <section className="relative pt-12 pb-20 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
        <HealthcareTexture type="medical-grid" opacity={0.05} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Storytelling Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Verified Home Healthcare & Hospital Staffing Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Hospital-Grade <span className="text-teal-700">Clinical Care</span> at Your Doorstep.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Book licensed home nurses, physiotherapists, caregivers, and doctors in Bangalore. 100% credential-verified with transparent hourly pricing and real-time visit tracking.
              </p>

              {/* 02. Concierge Search Console: WHERE / WHAT CARE / WHEN */}
              <form
                onSubmit={handleSearch}
                className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center gap-3 max-w-2xl relative z-20"
              >
                {/* Field 1: WHERE */}
                <div className="flex-1 flex items-center gap-3 px-3 w-full border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                  <div className="w-full text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. Where (Locality)</label>
                    <input
                      type="text"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      placeholder="e.g. Indiranagar, Bangalore"
                      className="w-full text-xs sm:text-sm font-bold text-slate-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Field 2: WHAT CARE */}
                <div className="flex-1 flex items-center gap-3 px-3 w-full border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0">
                  <Search className="w-5 h-5 text-teal-600 shrink-0" />
                  <div className="w-full text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. What Care</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-900 focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option value="all">All Care Types</option>
                      <option value="home_nursing">Home Nursing</option>
                      <option value="caregiver">Attendant Care</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="doctor_visit">Doctor Visit</option>
                    </select>
                  </div>
                </div>

                {/* Field 3: WHEN */}
                <div className="flex-1 flex items-center gap-3 px-3 w-full">
                  <Calendar className="w-5 h-5 text-teal-600 shrink-0" />
                  <div className="w-full text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">3. When</label>
                    <select
                      value={selectedCareDate}
                      onChange={(e) => setSelectedCareDate(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-900 focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option value="Today">Immediate (Today)</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Week">Scheduled Shift</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl cursor-pointer shrink-0">
                  Find Care
                </Button>
              </form>

              {/* Quick Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-teal-600" /> 100% Council Verified
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Clock className="w-4 h-4 text-teal-600" /> 45s Auto-Match Dispatch
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Award className="w-4 h-4 text-teal-600" /> 4.9/5 Patient Rating
                </span>
              </div>
            </div>

            {/* Right Hero Editorial Visual with Floating Product Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Verified South Asian Home Healthcare Nurse"
                  className="w-full h-[460px] object-cover"
                />
                
                {/* Floating Product Badge Card */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-slate-900">Dr. Anjali S. • 4.9 ★</span>
                  <span className="text-[10px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">2.4 km</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900">Active Care Visit</p>
                      <p className="text-[11px] text-slate-500">Post-Op ICU Nursing • Indiranagar</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    GPS Tracked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. 4-Pillar Trust Verification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            { title: 'Council License Audit', desc: '100% valid state nursing council registration & degree verification.' },
            { title: 'Police Background Check', desc: 'Mandatory criminal record verification for home safety.' },
            { title: 'Infectious Disease Screen', desc: 'Up-to-date vaccination status and clinical safety protocols.' },
            { title: 'Continuous Quality Score', desc: 'Ratings & review score monitoring with zero-tolerance policy.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-left hover:border-teal-300 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-teal-600" />
              <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Service Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Medical Offerings</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Specialized Home Healthcare Services</h2>
          </div>
          <Link to="/services">
            <Button variant="ghost" className="text-teal-700 font-bold text-xs flex items-center gap-1 cursor-pointer">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service: Service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => navigate(`/search?serviceId=${service.id}`)}
            />
          ))}
        </div>
      </section>

      {/* 05. How It Works — Care Pathway Blueprint */}
      <section id="how-it-works" className="relative bg-slate-50 py-16 border-y border-slate-200 overflow-hidden">
        <HealthcareTexture type="care-pathway" opacity={0.04} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center relative z-10">
          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Simple 4-Step Process</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">How Booking Home Care Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Service & Location', desc: 'Choose nursing, physio, or caregiver needs for your address.' },
              { step: '02', title: 'Automated Provider Scoring', desc: 'Matching engine finds verified professionals within 5km radius.' },
              { step: '03', title: 'Confirm Booking & Vitals', desc: 'Transparent fee breakdown with instant digital payment.' },
              { step: '04', title: 'Track Visit & Care Logs', desc: 'Follow GPS arrival and review clinical notes upon completion.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-left relative">
                <span className="text-2xl font-black text-teal-600/30">{item.step}</span>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. Active Care Journey Interactive Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Transparent Lifecycle</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Active Care Visit Journey</h2>
          <p className="text-xs sm:text-sm text-slate-600">Click any milestone stage below to inspect automated operations transparency.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
            {careJourneySteps.map((s, idx) => {
              const isSelected = activeTimelineStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTimelineStep(idx)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-102'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700'
                  }`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">{s.title}</p>
                    <p className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                      Step {idx + 1}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold shrink-0">
                {careJourneySteps[activeTimelineStep].icon}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Stage {activeTimelineStep + 1}: {careJourneySteps[activeTimelineStep].title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{careJourneySteps[activeTimelineStep].desc}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200 shrink-0">
              Verified Operational Event
            </span>
          </div>
        </div>
      </section>

      {/* 07. Featured Professionals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Verified Medical Roster</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Top-Rated Healthcare Professionals</h2>
          </div>
          <Link to="/search">
            <Button variant="ghost" className="text-teal-700 font-bold text-xs flex items-center gap-1 cursor-pointer">
              View All 60+ Professionals <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProfessionals.map((pro: ProfessionalProfile) => (
            <ProfessionalCard
              key={pro.id}
              professional={pro}
              onSelect={() => navigate(`/search?proId=${pro.id}`)}
              onViewProfile={() => navigate(`/pros/${pro.id}`)}
            />
          ))}
        </div>
      </section>

      {/* 10. Hospital / Organization Staffing Callout — LIGHT THEME REBUILD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-teal-50 p-8 sm:p-12 rounded-3xl border border-blue-200 text-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm relative z-10">
          <HealthcareTexture type="soft-cell" opacity={0.05} />
          
          <div className="space-y-3 text-left max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">
              <Building2 className="w-4 h-4 text-blue-600" /> B2B Healthcare Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Hospital & Clinic Ward Staffing Solutions</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Manipal, Fortis, and Apollo partner healthcare facilities use our Organization Portal to broadcast 8h/12h ICU & Ward nurse requisitions with instant automated roster matching.
            </p>
          </div>
          <Link to="/organization/dashboard" className="relative z-10 shrink-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl cursor-pointer">
              Access Organization Portal
            </Button>
          </Link>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
        <div className="text-center">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Common Questions</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-5 bg-slate-50/70 font-bold text-sm text-slate-900 flex justify-between items-center cursor-pointer hover:bg-slate-100/60"
              >
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp className="w-4 h-4 text-teal-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {openFaq === index && (
                <div className="p-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 13. Final Concierge CTA Banner — LIGHT THEME REBUILD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-teal-200 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Need Immediate Clinical Home Care?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Book online in 3 minutes or speak with our 24/7 Ops Concierge Desk for custom discharge planning.
            </p>
          </div>
          <Link to="/search">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-4 rounded-xl cursor-pointer">
              Book Home Care Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
