import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { MOCK_DUTIES, MOCK_STAFF_PROFILES } from '../../data/mockStaffData';

export const StaffDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const staff = MOCK_STAFF_PROFILES[0]; // Anita Sharma
  const nextDuty = MOCK_DUTIES[0]; // Active duty

  return (
    <div className="space-y-6 pb-8">
      
      {/* Welcome Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-teal-950 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.05} />
        
        <div className="space-y-1 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            Internal Care Team
          </span>
          <h1 className="text-xl sm:text-2xl font-black">Good morning, {staff.displayName}</h1>
          <p className="text-xs text-teal-100/90 font-medium">Thursday, 17 September 2026 • Employee ID: <span className="font-mono text-white font-bold">{staff.employeeId}</span></p>
        </div>

        <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 border border-white/20 items-center justify-center text-teal-300 font-black text-xl shrink-0">
          {staff.fullName.charAt(0)}
        </div>
      </div>

      {/* WHAT DO I NEED TO DO TODAY? - PRIMARY DUTY CARD */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-teal" /> What Do I Need To Do Today?
          </h2>
          <Badge variant="teal" size="sm">ACTIVE DUTY</Badge>
        </div>

        <Card className="p-6 bg-white border-teal-200 shadow-xl rounded-3xl space-y-5 relative overflow-hidden">
          <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

          {/* Time & Service Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded-2xl bg-teal-50 border border-teal-200 text-center shrink-0">
                <span className="text-[10px] font-extrabold uppercase text-brand-teal block">Shift</span>
                <span className="text-sm font-black text-slate-900">{nextDuty.scheduledStartTime}</span>
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">{nextDuty.serviceName}</h3>
                <p className="text-xs text-slate-500 font-semibold">{nextDuty.durationHours}-Hour Shift • Patient: <strong className="text-slate-900">{nextDuty.patientName} ({nextDuty.patientAge}y)</strong></p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold self-start sm:self-auto border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {nextDuty.status.replace('_', ' ')}
            </span>
          </div>

          {/* Location & Route Block */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-xs font-black text-slate-900">{nextDuty.address.line1}, {nextDuty.address.city}</p>
                  <p className="text-[11px] text-slate-500">Pincode: {nextDuty.address.pincode} • Distance: <strong className="text-slate-800 font-bold">{nextDuty.travelDistanceKm} km</strong> (~{nextDuty.estimatedTravelMins} mins travel)</p>
                </div>
              </div>
            </div>

            {/* Turn-by-Turn Maps Route CTA */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${nextDuty.address.line1}, ${nextDuty.address.city}, ${nextDuty.address.pincode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Navigation className="w-4 h-4 text-teal-400" /> Open Turn-by-Turn Navigation Route (Google Maps)
            </a>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <a
              href={`tel:${nextDuty.clientPhone}`}
              className="p-3 rounded-2xl bg-teal-50 border border-teal-200 hover:bg-teal-100 text-brand-teal text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
            >
              <Phone className="w-4 h-4 text-brand-teal" /> Call Client
            </a>

            <a
              href={`https://wa.me/${nextDuty.clientPhone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp
            </a>

            <Button
              onClick={() => navigate(`/staff/duties/${nextDuty.id}`)}
              className="col-span-2 sm:col-span-1 bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-xs h-11 rounded-2xl shadow-sm"
            >
              Open Duty Checklist <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Quick Action Operations Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button
          onClick={() => navigate('/staff/availability')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-200 shadow-xs text-left space-y-2 cursor-pointer transition-all"
        >
          <Clock className="w-5 h-5 text-brand-teal" />
          <div>
            <p className="text-xs font-extrabold text-slate-900">Manage Availability</p>
            <p className="text-[11px] text-slate-500">Update working days & hours</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/staff/leave')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-200 shadow-xs text-left space-y-2 cursor-pointer transition-all"
        >
          <Calendar className="w-5 h-5 text-brand-teal" />
          <div>
            <p className="text-xs font-extrabold text-slate-900">Request Leave</p>
            <p className="text-[11px] text-slate-500">Submit time-off requests</p>
          </div>
        </button>

        <a
          href="tel:+911149208800"
          className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-slate-900 text-white shadow-xs text-left space-y-2 cursor-pointer transition-all block"
        >
          <Phone className="w-5 h-5 text-teal-400" />
          <div>
            <p className="text-xs font-extrabold text-white">Contact Operations</p>
            <p className="text-[11px] text-slate-400">24/7 Central Desk escalation</p>
          </div>
        </a>
      </div>
    </div>
  );
};
