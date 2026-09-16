import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ProStatusBadge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { Clock, MapPin, ShieldCheck } from 'lucide-react';

export const ProDashboardPage: React.FC = () => {
  const { currentUser } = useAuth();
  const { bookings, professionals, updateBookingStatus } = useBookings();

  const pro = professionals.find((p) => p.userId === currentUser.id) || professionals[0];
  const activeBooking = bookings.find((b) => b.professionalId === pro.id && ['ACCEPTED', 'ON_THE_WAY', 'CHECKED_IN', 'IN_PROGRESS'].includes(b.status)) || bookings[0];

  return (
    <div className="space-y-6 text-left max-w-5xl mx-auto relative">
      <HealthcareTexture type="clinical-wave" opacity={0.03} />

      {/* Welcome Banner — Light Theme Rebuild */}
      <div className="bg-gradient-to-r from-teal-50 via-teal-100/40 to-blue-50 rounded-2xl p-6 border border-teal-200 text-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Welcome back, {pro.displayName}</h1>
            <ProStatusBadge status={pro.availabilityStatus} />
          </div>
          <p className="text-xs text-slate-600 font-medium">
            {pro.qualification} • Reg #{pro.registrationNumber} • {pro.experienceYears} Years Experience
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/90 p-3 rounded-xl text-xs border border-teal-200 shadow-2xs">
          <div>
            <span className="text-slate-500 block font-bold">Total Visits</span>
            <span className="text-lg font-extrabold text-teal-700">{pro.totalVisits}</span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <span className="text-slate-500 block font-bold">Completion</span>
            <span className="text-lg font-extrabold text-slate-900">{pro.completionRate}%</span>
          </div>
        </div>
      </div>

      {/* Active Visit Operational Console */}
      {activeBooking && (
        <Card className="p-6 border-l-4 border-l-teal-600 border-slate-200 shadow-xs space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
              <Clock className="w-4 h-4 animate-spin text-teal-600" /> Active Patient Care Visit
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">{activeBooking.bookingCode}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">{activeBooking.serviceName}</h3>
              <p className="text-slate-600 font-medium mt-0.5">Patient: {activeBooking.patientProfile.firstName} {activeBooking.patientProfile.lastName}</p>
              <div className="flex items-center gap-1 text-slate-500 mt-2">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{activeBooking.address.line1}, {activeBooking.address.city}</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between gap-3">
              <div className="flex justify-between items-center text-slate-700 font-semibold">
                <span>Current Status:</span>
                <span className="font-extrabold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  {activeBooking.status}
                </span>
              </div>
              <div className="flex gap-2">
                {activeBooking.status === 'ACCEPTED' && (
                  <Button
                    size="sm"
                    onClick={() => updateBookingStatus(activeBooking.id, 'ON_THE_WAY')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                  >
                    Start Transit (GPS ON)
                  </Button>
                )}
                {activeBooking.status === 'ON_THE_WAY' && (
                  <Button
                    size="sm"
                    onClick={() => updateBookingStatus(activeBooking.id, 'CHECKED_IN')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                  >
                    Scan Patient QR Check-In
                  </Button>
                )}
                {activeBooking.status === 'CHECKED_IN' && (
                  <Button
                    size="sm"
                    onClick={() => updateBookingStatus(activeBooking.id, 'COMPLETED')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                  >
                    Complete Shift & Log Vitals
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
        <Card className="p-5 border-slate-200 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 font-bold block">Today's Shift Payout</span>
          <span className="text-2xl font-extrabold text-slate-900 block">₹{pro.hourlyRate * 8}</span>
          <span className="text-[11px] text-teal-700 font-semibold block">8 Hours scheduled today</span>
        </Card>

        <Card className="p-5 border-slate-200 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 font-bold block">Patient Rating</span>
          <span className="text-2xl font-extrabold text-teal-700 block">4.9 ★</span>
          <span className="text-[11px] text-slate-500 block">Based on last 48 reviews</span>
        </Card>

        <Card className="p-5 border-slate-200 space-y-1 shadow-xs">
          <span className="text-xs text-slate-500 font-bold block">KYC Credential Audit</span>
          <span className="text-2xl font-extrabold text-emerald-700 block flex items-center gap-1">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Active
          </span>
          <span className="text-[11px] text-slate-500 block">Valid until Dec 2026</span>
        </Card>
      </div>
    </div>
  );
};
