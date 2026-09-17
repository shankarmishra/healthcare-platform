import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
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

      {/* Primary Public Navigation Header — iOS Ultra-Premium Glassmorphism */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/80 h-16 flex items-center'
            : 'bg-white/95 backdrop-blur-lg border-b border-slate-100 h-20 flex items-center'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          
          {/* Left: Master Logo & Location Hub Selector */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <img
                src="/assets/brand/pulse-n-care/pulse-n-care-logo.svg"
                alt="Pulse n Care"
                className="h-9 sm:h-11 w-auto group-hover:scale-102 transition-transform"
              />
            </Link>

            {/* Delhi NCR Coverage Hub Pill */}
            <button
              onClick={() => setLocationModalOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-teal/80 border border-teal-200 text-xs font-extrabold text-brand-teal hover:bg-teal-100/80 transition-all cursor-pointer shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
              <span>Delhi NCR Care Hubs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <ChevronDown className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            </button>
          </div>

          {/* Center Navigation Links (with Mega-Menus) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative">
            
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-all relative ${
                location.pathname === '/' ? 'text-brand-teal bg-canvas-teal/60 font-extrabold' : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
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
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  location.pathname.startsWith('/services') ? 'text-brand-teal bg-canvas-teal/60 font-extrabold' : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-teal' : 'text-slate-400'}`} />
              </button>

              {/* Mega-Menu Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[640px] bg-white rounded-3xl shadow-card border border-border-default p-6 grid grid-cols-12 gap-6 mt-1.5 z-50 animate-fadeIn">
                  
                  {/* Left Column: Care Services List */}
                  <div className="col-span-7 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-[11px] font-extrabold text-brand-teal uppercase tracking-widest">
                        Care Services Ecosystem
                      </span>
                      <Link to="/services" className="text-[11px] font-bold text-text-muted hover:text-brand-teal">
                        View All (11) →
                      </Link>
                    </div>

                    <div className="space-y-1 pt-1">
                      {serviceCategories.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-canvas-teal/50 transition-colors group"
                        >
                          <div className="p-2 rounded-xl bg-canvas-teal border border-teal-200 group-hover:scale-105 transition-transform shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-extrabold text-text-primary group-hover:text-brand-teal">
                                {item.title}
                              </p>
                              {item.badge && (
                                <span className="text-[9px] font-black text-brand-teal bg-canvas-teal px-2 py-0.5 rounded-md border border-teal-200 uppercase">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-text-muted leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Flagship Showcase */}
                  <div className="col-span-5 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-4 text-white flex flex-col justify-between relative overflow-hidden">
                    <img
                      src="/assets/services/home-nursing/pulse-n-care-team-campaign-7-9.jpg"
                      alt="Pulse n Care Team"
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="relative z-10 space-y-2">
                      <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-md border border-white/20">
                        24×7 Home Nursing
                      </span>
                      <h4 className="text-base font-black text-white leading-tight">
                        Qualified Nurse Care at Doorstep
                      </h4>
                      <p className="text-[11px] text-teal-100 leading-relaxed">
                        In-house council-verified nurses assigned by Central Operations.
                      </p>
                    </div>

                    <Link to="/services/home-nursing" className="relative z-10 pt-4">
                      <Button size="sm" className="w-full bg-brand-teal text-white font-extrabold text-xs rounded-xl h-9">
                        Explore Home Nursing <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#how-it-works"
              className="px-3.5 py-2 text-sm font-bold text-text-secondary hover:text-text-primary hover:bg-slate-50 rounded-xl transition-all"
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
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  location.pathname === '/organizations' ? 'text-brand-teal bg-canvas-teal/60 font-extrabold' : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                }`}
              >
                <span>For Organizations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${orgDropdownOpen ? 'rotate-180 text-brand-teal' : 'text-slate-400'}`} />
              </button>

              {orgDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-3xl shadow-card border border-border-default p-4 space-y-3 mt-1.5 z-50 animate-fadeIn">
                  <div className="flex items-center gap-2 px-2 pb-2 border-b border-slate-100">
                    <Building2 className="w-4 h-4 text-brand-teal" />
                    <span className="text-xs font-extrabold text-text-primary">B2B Facility Staffing</span>
                  </div>

                  <div className="space-y-1">
                    {orgServices.map((org) => (
                      <Link
                        key={org.name}
                        to="/organizations"
                        className="block p-2.5 rounded-xl hover:bg-canvas-teal/50 transition-colors"
                      >
                        <p className="text-xs font-extrabold text-text-primary">{org.name}</p>
                        <p className="text-[11px] text-text-muted">{org.desc}</p>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <Link to="/organization/dashboard">
                      <Button size="sm" className="w-full bg-brand-teal text-white font-bold text-xs h-9 rounded-xl">
                        Access B2B Staffing Portal →
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/client/support"
              className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-all ${
                location.pathname === '/client/support' ? 'text-brand-teal bg-canvas-teal/60 font-extrabold' : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
              }`}
            >
              Support
            </Link>
          </nav>

          {/* Right Action Section */}
          <div className="hidden md:flex items-center gap-3">
            {currentRole === 'client' ? (
              <>
                <Link to="/client/notifications" className="relative p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-canvas-tertiary">
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-status-danger rounded-full ring-2 ring-white" />
                  )}
                </Link>
                <Link to="/client/bookings">
                  <Button variant="ghost" size="sm" className="font-bold text-xs">
                    My Bookings
                  </Button>
                </Link>
                <Link to="/client/booking/wizard">
                  <Button variant="primary" size="sm" className="bg-brand-teal text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xs">
                    Book a Service
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted font-medium">Portal Active:</span>
                <span className="text-xs font-extrabold text-brand-teal bg-canvas-teal px-3 py-1 rounded-full border border-teal-200 uppercase">
                  {currentRole}
                </span>
                <Link to="/client/booking/wizard">
                  <Button variant="primary" size="sm" className="bg-brand-teal text-white font-extrabold text-xs px-5 py-2.5 rounded-xl ml-1">
                    Book a Service
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-default bg-white p-5 space-y-4 shadow-xl">
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-text-primary hover:text-brand-teal py-2 border-b border-slate-100"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-text-primary hover:text-brand-teal py-2 border-b border-slate-100"
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
                className="block text-sm font-bold text-text-primary hover:text-brand-teal py-2 border-b border-slate-100"
              >
                How It Works
              </a>
              <Link
                to="/organizations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-text-primary hover:text-brand-teal py-2 border-b border-slate-100"
              >
                For Organizations (B2B Staffing)
              </Link>
              <Link
                to="/client/support"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-text-primary hover:text-brand-teal py-2 border-b border-slate-100"
              >
                Support Hub
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <Link to="/client/booking/wizard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full bg-brand-teal text-white font-extrabold h-11 rounded-xl">
                  Book a Service Now
                </Button>
              </Link>
              <Link to="/client/bookings" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full font-bold h-10 rounded-xl">
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
