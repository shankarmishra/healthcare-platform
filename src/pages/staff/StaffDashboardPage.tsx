import React, { useState } from 'react';
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
  Calendar,
  Building2,
  FileCheck2,
} from 'lucide-react';
import { MOCK_DUTIES, MOCK_STAFF_PROFILES } from '../../data/mockStaffData';
import { MOCK_FACILITY_ROSTER_SLOTS, MOCK_FACILITY_TIMESHEETS } from '../../data/mockB2BData';

export const StaffDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const staff = MOCK_STAFF_PROFILES[0]; // Sunita Sharma, RN / PNC-EMP-0042
  const [dutyContext, setDutyContext] = useState<'home_care' | 'facility_roster'>('home_care');

  const homeDuty = MOCK_DUTIES[0];
  const facilitySlot = MOCK_FACILITY_ROSTER_SLOTS[0];
  const facilityTimesheet = MOCK_FACILITY_TIMESHEETS[0];

  return (
    <div className="space-y-6 pb-8 text-left">
      {/* Welcome Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.05} />

        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-teal-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
              Verified Care Team
            </span>
            <span className="text-[10px] font-mono text-teal-400">{staff.employeeId}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">Good morning, {staff.displayName}</h1>
          <p className="text-xs text-slate-300 font-medium">
            Role: <strong className="text-white">{staff.roleCategory.replace('_', ' ').toUpperCase()}</strong> • Status: Active Duty
          </p>
        </div>

        <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 border border-white/20 items-center justify-center text-teal-300 font-black text-xl shrink-0">
          {staff.fullName.charAt(0)}
        </div>
      </div>

      {/* Duty Context Toggle Switch */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setDutyContext('home_care')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold cursor-pointer border transition-all flex items-center gap-2 ${
            dutyContext === 'home_care'
              ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-4 h-4" /> Home Care Visits (1-on-1)
        </button>

        <button
          onClick={() => setDutyContext('facility_roster')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold cursor-pointer border transition-all flex items-center gap-2 ${
            dutyContext === 'facility_roster'
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <Building2 className="w-4 h-4" /> Hospital Facility Roster
        </button>
      </div>

      {/* HOME CARE DUTY CARD */}
      {dutyContext === 'home_care' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-600" /> Today's Scheduled Home Patient Visit
            </h2>
            <Badge variant="teal" size="sm">
              HOME CARE
            </Badge>
          </div>

          <Card className="p-6 bg-white border-teal-200 shadow-xl rounded-3xl space-y-5 relative overflow-hidden">
            <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 rounded-2xl bg-teal-50 border border-teal-200 text-center shrink-0">
                  <span className="text-[10px] font-extrabold uppercase text-teal-700 block">Shift</span>
                  <span className="text-sm font-black text-slate-900">{homeDuty.scheduledStartTime}</span>
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{homeDuty.serviceName}</h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {homeDuty.durationHours}-Hour Shift • Patient:{' '}
                    <strong className="text-slate-900">
                      {homeDuty.patientName} ({homeDuty.patientAge}y)
                    </strong>
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold self-start sm:self-auto border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {homeDuty.status.replace('_', ' ')}
              </span>
            </div>

            {/* Location & Navigation */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <p className="font-black text-slate-900">
                    {homeDuty.address.line1}, {homeDuty.address.city}
                  </p>
                  <p className="text-slate-500">
                    Pincode: {homeDuty.address.pincode} • Distance:{' '}
                    <strong className="text-slate-800 font-bold">{homeDuty.travelDistanceKm} km</strong> (~
                    {homeDuty.estimatedTravelMins} mins)
                  </p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${homeDuty.address.line1}, ${homeDuty.address.city}, ${homeDuty.address.pincode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Navigation className="w-4 h-4 text-teal-400" /> Open Turn-by-Turn Navigation (Google Maps)
              </a>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${homeDuty.clientPhone}`}
                className="p-3 rounded-2xl bg-teal-50 border border-teal-200 hover:bg-teal-100 text-teal-700 text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 text-teal-600" /> Call Client
              </a>

              <a
                href={`https://wa.me/${homeDuty.clientPhone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp
              </a>

              <Button
                onClick={() => navigate(`/staff/duties/${homeDuty.id}`)}
                className="col-span-2 sm:col-span-1 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs h-11 rounded-2xl shadow-xs"
              >
                Open Duty Checklist <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* HOSPITAL FACILITY ROSTER CARD */}
      {dutyContext === 'facility_roster' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-600" /> Today's Hospital Shift Placement
            </h2>
            <Badge variant="info" size="sm">
              FACILITY SHIFT
            </Badge>
          </div>

          <Card className="p-6 bg-white border-blue-200 shadow-xl rounded-3xl space-y-5 relative overflow-hidden">
            <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{facilitySlot.organizationName}</h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    Dept: <strong className="text-slate-900">{facilitySlot.department}</strong> • Daily Rate:{' '}
                    <strong className="text-teal-700">₹{facilitySlot.dailyRate}</strong>
                  </p>
                </div>
              </div>

              <Badge variant="success" className="self-start sm:self-auto uppercase font-bold text-[10px]">
                {facilitySlot.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="space-y-1">
                <p className="text-slate-500 font-medium">Shift Timings:</p>
                <p className="font-extrabold text-slate-900 text-sm">
                  {facilitySlot.startTime} - {facilitySlot.endTime} (12h Day Shift)
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-slate-500 font-medium">Hospital Nursing Superintendent:</p>
                <p className="font-extrabold text-slate-900 text-sm">Sr. Mary Kurien (+91-98112-99012)</p>
              </div>
            </div>

            {/* Shift Timesheet Actions */}
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-700">Digital Shift Timesheet Log:</h4>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
                <div>
                  <p className="font-extrabold text-slate-900">Timesheet #{facilityTimesheet.timesheetNumber}</p>
                  <p className="text-slate-600">
                    Status: <strong className="text-emerald-700 uppercase">{facilityTimesheet.approvalStatus.replace(/_/g, ' ')}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="primary"
                    leftIcon={<FileCheck2 className="w-3.5 h-3.5" />}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer text-xs"
                  >
                    View Shift Timesheet
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <button
          onClick={() => navigate('/staff/schedule')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-200 shadow-xs text-left space-y-2 cursor-pointer transition-all"
        >
          <Calendar className="w-5 h-5 text-teal-600" />
          <div>
            <p className="text-xs font-extrabold text-slate-900">Shift Calendar</p>
            <p className="text-[11px] text-slate-500">View upcoming roster</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/staff/availability')}
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-200 shadow-xs text-left space-y-2 cursor-pointer transition-all"
        >
          <Clock className="w-5 h-5 text-teal-600" />
          <div>
            <p className="text-xs font-extrabold text-slate-900">Availability & Leaves</p>
            <p className="text-[11px] text-slate-500">Update working days</p>
          </div>
        </button>

        <a
          href="tel:+911149208800"
          className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-slate-900 text-white shadow-xs text-left space-y-2 cursor-pointer transition-all block"
        >
          <Phone className="w-5 h-5 text-teal-400" />
          <div>
            <p className="text-xs font-extrabold text-white">Ops Control Room</p>
            <p className="text-[11px] text-slate-400">24/7 Escalation Desk</p>
          </div>
        </a>
      </div>
    </div>
  );
};
