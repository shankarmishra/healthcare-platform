import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Users,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  HeartPulse,
  Activity,
  UserCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import type { Booking } from '../../types';

export const ClientDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { bookings } = useBookings();

  // Filter bookings for active user
  const clientBookings = bookings.filter((b) => b.clientId === 'clt-001' || b.clientName === `${currentUser.firstName} ${currentUser.lastName}`);
  
  // Find active/upcoming booking
  const activeBooking = clientBookings.find((b) =>
    ['REQUESTED', 'MATCHING', 'ASSIGNED', 'ACCEPTED', 'ON_THE_WAY', 'CHECKED_IN', 'IN_PROGRESS'].includes(b.status)
  ) || clientBookings[0];

  const recentBookings = clientBookings.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left relative bg-white">
      <HealthcareTexture type="medical-grid" opacity={0.03} />

      {/* 01. Welcome Header Banner */}
      <div className="bg-gradient-to-r from-teal-50 via-slate-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-teal-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-extrabold text-brand-teal border border-teal-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" /> Care Concierge Client Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Welcome back, {currentUser.firstName || 'Rahul'}!
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
            Your home care management dashboard. Monitor active clinical visits, manage family patient profiles, and schedule managed nursing care across Delhi NCR.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto">
          <Link to="/client/booking/wizard" className="w-full sm:w-auto">
            <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />} className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-hover text-white font-bold cursor-pointer">
              Schedule New Care
            </Button>
          </Link>
        </div>
      </div>

      {/* 02. Quick Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Active Care Visits', value: clientBookings.filter(b => ['IN_PROGRESS', 'ACCEPTED', 'ON_THE_WAY'].includes(b.status)).length, icon: <Activity className="w-5 h-5 text-brand-teal" />, color: 'bg-teal-50 border-teal-200' },
          { label: 'Total Bookings', value: clientBookings.length, icon: <Calendar className="w-5 h-5 text-brand-blue" />, color: 'bg-blue-50 border-blue-200' },
          { label: 'Saved Patients', value: 2, icon: <Users className="w-5 h-5 text-emerald-600" />, color: 'bg-emerald-50 border-emerald-200' },
          { label: 'Service Coverage', value: 'Delhi NCR', icon: <MapPin className="w-5 h-5 text-amber-600" />, color: 'bg-amber-50 border-amber-200' }
        ].map((stat, idx) => (
          <Card key={idx} className={`p-4 border ${stat.color} shadow-2xs space-y-1`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-muted">{stat.label}</span>
              {stat.icon}
            </div>
            <p className="text-2xl font-extrabold text-text-primary">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* 03. Active / Next Care Visit Highlight Banner */}
      {activeBooking ? (
        <Card className="p-6 border-brand-teal bg-canvas-teal/40 space-y-6 shadow-subtle relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-teal-200/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-brand-teal" /> Active Care Milestone
                </span>
                <BookingStatusBadge status={activeBooking.status} />
              </div>
              <h2 className="text-xl font-extrabold text-text-primary">{activeBooking.serviceName}</h2>
              <p className="text-xs text-text-muted font-mono font-bold">Booking Reference: {activeBooking.bookingCode}</p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/client/bookings/${activeBooking.id}`)}
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="bg-white border-teal-300 text-brand-teal font-bold cursor-pointer"
            >
              View Live Timeline
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-text-muted font-bold block">Patient Details</span>
              <p className="font-extrabold text-text-primary text-sm">{activeBooking.patientProfile.firstName} {activeBooking.patientProfile.lastName}</p>
              <p className="text-text-secondary">{activeBooking.patientProfile.medicalNotes || 'Post-op clinical care'}</p>
            </div>

            <div className="space-y-1">
              <span className="text-text-muted font-bold block">Schedule & Location</span>
              <p className="font-bold text-text-primary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-teal" /> {activeBooking.scheduledDate}
              </p>
              <p className="text-text-secondary flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-teal" /> {activeBooking.scheduledTimeSlot}
              </p>
              <p className="text-text-secondary flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" /> {activeBooking.address.line1}, {activeBooking.address.city}
              </p>
            </div>

            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-teal-200">
              <span className="text-text-muted font-bold block">Assigned In-House Staff</span>
              {activeBooking.professionalName ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {activeBooking.professionalPhoto && (
                      <img src={activeBooking.professionalPhoto} alt="" className="w-8 h-8 rounded-full object-cover border border-teal-200" />
                    )}
                    <div>
                      <p className="font-extrabold text-text-primary text-xs flex items-center gap-1">
                        {activeBooking.professionalName} <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                      </p>
                      <span className="text-[10px] text-brand-teal font-semibold">Council Verified Staff</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="w-full text-xs font-bold text-brand-teal bg-teal-50 hover:bg-teal-100 cursor-pointer">
                    <PhoneCall className="w-3.5 h-3.5 mr-1.5" /> Call Staff Member
                  </Button>
                </div>
              ) : (
                <div className="text-text-muted text-xs space-y-1 pt-1">
                  <p className="font-bold text-amber-700 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-amber-600" /> Operations Desk Reviewing
                  </p>
                  <p className="text-[11px]">Selecting qualified internal staff for your location...</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      ) : null}

      {/* 04. Quick Navigation Hub */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-text-primary">Quick Concierge Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/client/booking/wizard">
            <Card className="p-5 border-border-default hover:border-brand-teal transition-all shadow-subtle group cursor-pointer space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Plus className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-text-primary text-sm group-hover:text-brand-teal">Book Home Care</h4>
              <p className="text-xs text-text-muted">Schedule nursing, physio, or attendant care for family.</p>
            </Card>
          </Link>

          <Link to="/client/profile">
            <Card className="p-5 border-border-default hover:border-brand-teal transition-all shadow-subtle group cursor-pointer space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-text-primary text-sm group-hover:text-brand-teal">Family Patient Profiles</h4>
              <p className="text-xs text-text-muted">Manage patient medical notes, allergies, and contacts.</p>
            </Card>
          </Link>

          <Link to="/client/support">
            <Card className="p-5 border-border-default hover:border-brand-teal transition-all shadow-subtle group cursor-pointer space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-text-primary text-sm group-hover:text-brand-teal">24/7 Support Desk</h4>
              <p className="text-xs text-text-muted">Contact operations desk, raise tickets, or view FAQs.</p>
            </Card>
          </Link>
        </div>
      </div>

      {/* 05. Recent Care Bookings List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-text-primary">Recent Care History</h3>
          <Link to="/client/bookings">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />} className="text-brand-teal font-bold text-xs cursor-pointer">
              View All Bookings
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {recentBookings.map((b: Booking) => (
            <Card
              key={b.id}
              onClick={() => navigate(`/client/bookings/${b.id}`)}
              className="p-4 border-border-default hover:border-border-emphasis transition-all shadow-2xs cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-text-primary text-sm">{b.serviceName}</span>
                  <BookingStatusBadge status={b.status} />
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span>Code: <strong className="text-text-primary">{b.bookingCode}</strong></span>
                  <span>Patient: <strong className="text-text-primary">{b.patientProfile.firstName}</strong></span>
                  <span>Date: <strong className="text-text-primary">{b.scheduledDate}</strong></span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-border-light">
                <span className="text-sm font-extrabold text-brand-teal">₹{b.priceBreakdown.totalPrice}</span>
                <ChevronRight className="w-5 h-5 text-text-muted" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
