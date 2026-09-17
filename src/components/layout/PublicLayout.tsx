import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { HealthcareTexture } from '../common/HealthcareTexture';
import {
  Bell,
  ShieldCheck,
  Phone,
  Menu,
  X,
  MapPin,
  ChevronDown,
  Building2,
  Activity,
  UserCheck,
  Stethoscope,
  ShieldPlus,
  ArrowRight,
  HeartPulse
} from 'lucide-react';
import { DELHI_NCR_SERVICE_HUBS } from '../../data/serviceAreaMatrix';

export const PublicLayout: React.FC = () => {
  const { currentRole } = useAuth();
  const { unreadCount } = useNotifications();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedHub, setSelectedHub] = useState(DELHI_NCR_SERVICE_HUBS[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setOrgDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const serviceCategories = [
    {
      title: 'Clinical Home Nursing',
      desc: 'Wound care, IV fluids, catheter & vital monitoring',
      icon: <Activity className="w-5 h-5 text-brand-teal" />,
      path: '/services/home-nursing',
      badge: 'Flagship'
    },
    {
      title: 'Caregiver / Attendant',
      desc: 'Bedside living support, bathing, mobility & feeding',
      icon: <UserCheck className="w-5 h-5 text-brand-teal" />,
      path: '/services/12-hour-caregiver-attendant'
    },
    {
      title: 'Physical Therapy',
      desc: 'Post-op orthopedic rehab, joint & stroke recovery',
      icon: <HeartPulse className="w-5 h-5 text-brand-teal" />,
      path: '/services/orthopedic-joint-rehab-physio'
    },
    {
      title: 'Doctor Home Visit',
      desc: 'MBBS/MD physician evaluation & prescriptions',
      icon: <Stethoscope className="w-5 h-5 text-brand-teal" />,
      path: '/services/general-physician-home-visit'
    },
    {
      title: 'Specialized ICU Care',
      desc: '24/7 ventilator, tracheostomy & critical monitoring',
      icon: <ShieldPlus className="w-5 h-5 text-brand-teal" />,
      path: '/services/home-icu-critical-care-nurse'
    }
  ];

  const orgServices = [
    { name: 'Hospitals & Health Systems', desc: 'ICU & ward nurse shift requisitions' },
    { name: 'Specialty Clinics', desc: 'Procedure & clinical attendant support' },
    { name: 'Senior Living Communities', desc: 'Rotational nursing & caregiver rosters' },
    { name: 'Rehabilitation Centers', desc: 'Dedicated physical therapy staff' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-primary text-text-primary antialiased font-sans">
      {/* Top Demo Role Bar */}
      <DemoRoleSwitcher />

      {/* Primary Public Navigation Header — Rafly / Framer Style Floating Glass Pill Navbar */}
      <header
        className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 max-w-6xl mx-auto w-full transition-all duration-300 relative"
      >
        {/* Floating Pill Header Capsule - Strict Fixed Height (h-13 sm:h-14) */}
        <div
          className={`w-full h-13 sm:h-14 rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-6 relative z-30 ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-2xl shadow-[0_12px_36px_rgba(15,23,42,0.12)] border border-slate-200/90'
              : 'bg-white/85 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/80'
          }`}
          style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
        >
          <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

          <div className="w-full flex items-center justify-between gap-3 sm:gap-4 relative z-10">
            
            {/* Left: Master Brand Logo & Delhi NCR Pill */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <img
                  src="/assets/brand/pulse-n-care/pulse-n-care-logo.svg"
                  alt="Pulse n Care"
                  className="h-7 sm:h-8 w-auto group-hover:scale-[1.02] transition-transform duration-200"
                />
              </Link>

              {/* Delhi NCR Coverage Hub Pill */}
              <button
                onClick={() => setLocationModalOpen(true)}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer whitespace-nowrap shadow-2xs"
              >
                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="whitespace-nowrap">{selectedHub.city} Hub</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <ChevronDown className="w-3 h-3 text-emerald-600/70 shrink-0" />
              </button>
            </div>

            {/* Center Navigation Links (Rafly-Style Floating Pill Indicators) */}
            <nav className="hidden md:flex items-center gap-1 relative shrink-0">
              
              <Link
                to="/"
                className={`px-3.5 py-1.5 text-[12px] lg:text-[13px] tracking-tight font-medium rounded-full transition-all duration-200 relative whitespace-nowrap ${
                  location.pathname === '/' 
                    ? 'text-white bg-slate-900 font-semibold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                Home
              </Link>

              {/* Services Mega-Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => navigate('/services')}
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-[12px] lg:text-[13px] tracking-tight font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    location.pathname.startsWith('/services') 
                      ? 'text-white bg-slate-900 font-semibold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span className="whitespace-nowrap">Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-teal' : 'text-slate-400'}`} />
                </button>

                {/* Mega-Menu Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[660px] bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-slate-200/90 p-5 grid grid-cols-12 gap-5 z-50 animate-fadeIn relative overflow-hidden">
                    <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

                    {/* Left Column: Care Services List */}
                    <div className="col-span-7 space-y-2 relative z-10">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-[10px] font-extrabold text-brand-teal uppercase tracking-widest whitespace-nowrap">
                          Care Services Ecosystem
                        </span>
                        <Link to="/services" className="text-[11px] font-bold text-slate-500 hover:text-brand-teal whitespace-nowrap">
                          View All (11) →
                        </Link>
                      </div>

                      <div className="space-y-1 pt-1">
                        {serviceCategories.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            className="flex items-start gap-3 p-2 rounded-2xl hover:bg-teal-50/70 transition-colors group"
                          >
                            <div className="p-2 rounded-xl bg-teal-50 border border-teal-200/70 group-hover:scale-105 transition-transform shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="text-xs font-bold text-slate-900 group-hover:text-brand-teal whitespace-nowrap">
                                  {item.title}
                                </p>
                                {item.badge && (
                                  <span className="text-[9px] font-black text-brand-teal bg-canvas-teal px-2 py-0.5 rounded-full border border-teal-200 uppercase whitespace-nowrap">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Featured Flagship Showcase */}
                    <div className="col-span-5 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-4 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
                      <img
                        src="/assets/services/home-nursing/pulse-n-care-team-campaign-7-9.jpg"
                        alt="Pulse n Care Team"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                      <div className="relative z-10 space-y-2">
                        <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/20 whitespace-nowrap">
                          24×7 Home Nursing
                        </span>
                        <h4 className="text-sm font-black text-white leading-tight">
                          Qualified Nurse Care at Doorstep
                        </h4>
                        <p className="text-[11px] text-teal-100/90 leading-relaxed">
                          Verified, trained nursing professionals managed by Central Ops.
                        </p>
                      </div>

                      <Link to="/services/home-nursing" className="relative z-10 pt-3">
                        <Button size="sm" className="w-full bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-xs rounded-full h-8.5 whitespace-nowrap shadow-sm">
                          Explore Home Nursing <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/#how-it-works"
                className="px-3.5 py-1.5 text-[12px] lg:text-[13px] tracking-tight font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                How It Works
              </a>

              {/* For Organizations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOrgDropdownOpen(true)}
                onMouseLeave={() => setOrgDropdownOpen(false)}
              >
                <button
                  onClick={() => navigate('/organizations')}
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-[12px] lg:text-[13px] tracking-tight font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    location.pathname === '/organizations' 
                      ? 'text-white bg-slate-900 font-semibold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span className="whitespace-nowrap">For Organizations</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${orgDropdownOpen ? 'rotate-180 text-brand-teal' : 'text-slate-400'}`} />
                </button>

                {orgDropdownOpen && (
                  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-80 bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-slate-200/90 p-4 space-y-3 z-50 animate-fadeIn">
                    <div className="flex items-center gap-2 px-2 pb-2 border-b border-slate-100">
                      <Building2 className="w-4 h-4 text-brand-teal" />
                      <span className="text-xs font-extrabold text-slate-900 whitespace-nowrap">B2B Facility Staffing</span>
                    </div>

                    <div className="space-y-1">
                      {orgServices.map((org) => (
                        <Link
                          key={org.name}
                          to="/organizations"
                          className="block p-2.5 rounded-xl hover:bg-teal-50/70 transition-colors"
                        >
                          <p className="text-xs font-bold text-slate-900 whitespace-nowrap">{org.name}</p>
                          <p className="text-[11px] text-slate-500">{org.desc}</p>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link to="/organization/dashboard">
                        <Button size="sm" className="w-full bg-brand-teal text-white font-bold text-xs h-9 rounded-full whitespace-nowrap shadow-sm">
                          Access B2B Staffing Portal →
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/client/support"
                className={`px-3.5 py-1.5 text-[12px] lg:text-[13px] tracking-tight font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  location.pathname === '/client/support' 
                    ? 'text-white bg-slate-900 font-semibold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                Support
              </Link>
            </nav>

            {/* Right Action Section */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              
              {/* 24×7 Hotline Pill */}
              <a
                href="tel:+919876543210"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border border-slate-200/70"
              >
                <Phone className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                <span>+91 98765 43210</span>
              </a>

              {currentRole === 'client' ? (
                <>
                  <Link to="/client/notifications" className="relative p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors">
                    <Bell className="w-4.5 h-4.5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
                    )}
                  </Link>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate('/client/booking/wizard')}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-[12px] px-4.5 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 whitespace-nowrap cursor-pointer h-9"
                  >
                    Book Care Now
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/client/booking/wizard')}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-[12px] px-4.5 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 whitespace-nowrap cursor-pointer h-9"
                >
                  Book Care Now
                </Button>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border border-slate-200/90 bg-white/98 backdrop-blur-2xl p-4 mt-2 rounded-3xl space-y-4 shadow-2xl relative z-40">
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                Services Catalog (11 Services)
              </Link>
              <Link
                to="/services/home-nursing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-semibold text-brand-teal pl-4 py-1.5"
              >
                ↳ 24×7 Home Nursing
              </Link>
              <a
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                How It Works
              </a>
              <Link
                to="/organizations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                For Organizations (B2B Staffing)
              </Link>
              <Link
                to="/client/support"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                Support Hub
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <Link to="/client/booking/wizard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full bg-brand-teal text-white font-extrabold h-10 rounded-full">
                  Book a Service Now
                </Button>
              </Link>
              <Link to="/client/bookings" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full font-bold h-10 rounded-full">
                  My Bookings
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            
            {/* Col 1: Brand & Operational Governance */}
            <div className="md:col-span-2 space-y-4">
              <img
                src="/assets/brand/pulse-n-care/pulse-n-care-logo-dark.svg"
                alt="Pulse n Care"
                className="h-10 w-auto"
              />
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Nurse care at doorstep. Managed home nursing, attendant care, physical therapy, and physician visits across Delhi NCR.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-teal-400 text-xs font-bold border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>100% In-House Managed Workforce</span>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400">Home Care Services</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link to="/services/home-nursing" className="hover:text-white transition-colors">24×7 Home Nursing</Link></li>
                <li><Link to="/services/12-hour-caregiver-attendant" className="hover:text-white transition-colors">12h / 24h Caregiver Attendant</Link></li>
                <li><Link to="/services/orthopedic-joint-rehab-physio" className="hover:text-white transition-colors">Orthopedic & Stroke Physiotherapy</Link></li>
                <li><Link to="/services/general-physician-home-visit" className="hover:text-white transition-colors">General Physician Home Visit</Link></li>
                <li><Link to="/services/home-icu-critical-care-nurse" className="hover:text-white transition-colors">Home ICU & Tracheostomy Care</Link></li>
              </ul>
            </div>

            {/* Col 3: Delhi NCR Hub Coverage */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400">Delhi NCR Service Hubs</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-teal" /> Delhi (South, Central, West, East)</li>
                <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-teal" /> Gurugram (DLF 1-5, Golf Course, Cyber City)</li>
                <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-teal" /> Noida & Greater Noida (Sectors 1-150)</li>
                <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-teal" /> Faridabad (Sectors 1-30, Green Fields)</li>
              </ul>
            </div>

            {/* Col 4: Operations Contact & Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400">Central Operations</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                24/7 Operations Desk for emergency nursing requisitions & scheduling queries.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 font-semibold">
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-teal" /> +91-11-4920-8800</p>
                <p>support@pulsen-care.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center sm:flex sm:justify-between text-xs text-slate-500 font-medium">
            <p>© 2026 Pulse n Care — Nurse Care at Doorstep. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Managed Clinical Operations • Delhi NCR Dispatch Network</p>
          </div>
        </div>
      </footer>

      {/* Location Selector Modal */}
      <Modal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        title="Active Delhi NCR Dispatch Hubs"
        maxWidth="md"
      >
        <div className="space-y-4 text-left">
          <p className="text-xs text-text-secondary">
            Pulse n Care operates an internal, managed healthcare workforce strictly within <strong>Delhi, Noida, Gurugram, and Faridabad (NCR)</strong>. Select your active locality hub below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DELHI_NCR_SERVICE_HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => {
                  setSelectedHub(hub);
                  setLocationModalOpen(false);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedHub.id === hub.id
                    ? 'border-brand-teal bg-canvas-teal/50 shadow-2xs'
                    : 'border-border-default bg-white hover:border-teal-200'
                }`}
              >
                <p className="font-extrabold text-text-primary text-xs flex items-center justify-between">
                  <span>{hub.city}</span>
                  {selectedHub.id === hub.id && <span className="text-[10px] font-black text-brand-teal bg-white px-2 py-0.5 rounded-full border border-teal-200 uppercase">Selected</span>}
                </p>
                <p className="text-[11px] text-text-muted mt-1">{hub.name}</p>
                <p className="text-[10px] font-medium text-brand-teal mt-1.5">✓ {hub.pincodePrefixes.length} Pincode Zones Covered</p>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <Button size="sm" onClick={() => setLocationModalOpen(false)} className="bg-brand-teal text-white font-bold px-6">
              Confirm Location
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
