import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import { DemoRoleSwitcher } from '../common/DemoRoleSwitcher';
import { Button } from '../common/Button';
import {
  HeartPulse,
  Search,
  Calendar,
  Bell,
  ShieldCheck,
  Phone,
  Menu,
  X
} from 'lucide-react';

export const PublicLayout: React.FC = () => {
  const { currentRole } = useAuth();
  const { unreadCount } = useNotifications();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Find Care', path: '/client/search' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'For Hospitals', path: '/organization/dashboard' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas-primary text-text-primary">
      {/* Top Demo Bar */}
      <DemoRoleSwitcher />

      {/* Primary Public Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-extrabold tracking-tight text-text-primary leading-tight">
                CareConnect
              </span>
              <span className="text-[10px] font-semibold text-brand-teal uppercase tracking-widest leading-none">
                Healthcare Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-brand-teal ${
                  location.pathname === link.path ? 'text-brand-teal' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User / CTA Section */}
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
                  <Button variant="ghost" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
                    My Bookings
                  </Button>
                </Link>
                <Link to="/client/search">
                  <Button variant="primary" size="sm" leftIcon={<Search className="w-4 h-4" />}>
                    Book Care
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">Portal Active:</span>
                <span className="text-xs font-bold text-brand-teal bg-canvas-teal px-2.5 py-1 rounded-full border border-teal-200 uppercase">
                  {currentRole}
                </span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-default bg-white p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-text-primary hover:text-brand-teal py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border-light flex flex-col gap-2">
              <Link to="/client/search" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Book Care Now
                </Button>
              </Link>
              <Link to="/client/bookings" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full">
                  My Bookings
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Public Footer */}
      <footer className="bg-canvas-secondary border-t border-border-default mt-16 text-text-secondary text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center text-white">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-text-primary">CareConnect</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Premium healthcare staffing & verified home care platform. Connecting families with clinical experts.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-teal font-semibold">
                <ShieldCheck className="w-4 h-4" /> 100% Background Verified Professionals
              </div>
            </div>

            <div>
              <h4 className="font-bold text-text-primary mb-3">Healthcare Services</h4>
              <ul className="space-y-2 text-xs text-text-muted">
                <li><Link to="/client/search" className="hover:text-brand-teal">Post-Op Home Nursing</Link></li>
                <li><Link to="/client/search" className="hover:text-brand-teal">Senior Care & Attendant</Link></li>
                <li><Link to="/client/search" className="hover:text-brand-teal">Home Physiotherapy</Link></li>
                <li><Link to="/client/search" className="hover:text-brand-teal">Doctor Home Visit</Link></li>
                <li><Link to="/client/search" className="hover:text-brand-teal">Home ICU Nursing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text-primary mb-3">Portals & Roles</h4>
              <ul className="space-y-2 text-xs text-text-muted">
                <li><Link to="/client/search" className="hover:text-brand-teal">Client / Patient Portal</Link></li>
                <li><Link to="/pro/dashboard" className="hover:text-brand-teal">Healthcare Professional Portal</Link></li>
                <li><Link to="/admin/dashboard" className="hover:text-brand-teal">Operations Command Center</Link></li>
                <li><Link to="/organization/dashboard" className="hover:text-brand-teal">Hospital & Org Staffing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text-primary mb-3">Emergency & Support</h4>
              <p className="text-xs text-text-muted mb-2">Need immediate assistance with a booking?</p>
              <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-3">
                <Phone className="w-4 h-4" /> +91-80-4920-8800
              </div>
              <p className="text-[11px] text-text-muted leading-tight">
                Operating Hours: 24/7 Support Hotline
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <p>© 2026 CareConnect Healthcare Platform. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-text-primary cursor-pointer">Privacy Policy</span>
              <span className="hover:text-text-primary cursor-pointer">Terms of Service</span>
              <span className="hover:text-text-primary cursor-pointer">Clinical Governance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
