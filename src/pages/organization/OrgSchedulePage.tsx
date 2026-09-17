import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_FACILITY_ROSTER_SLOTS } from '../../data/mockB2BData';
import type { FacilityShiftRosterSlot } from '../../types';
import {
  Calendar as CalendarIcon,
} from 'lucide-react';

export const OrgSchedulePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'week' | 'day' | 'month'>('week');
  const [selectedSlot, setSelectedSlot] = useState<FacilityShiftRosterSlot | null>(null);

  const days = [
    { date: '2026-09-18', label: 'Fri 18 Sep' },
    { date: '2026-09-19', label: 'Sat 19 Sep' },
    { date: '2026-09-20', label: 'Sun 20 Sep' },
    { date: '2026-09-21', label: 'Mon 21 Sep' },
    { date: '2026-09-22', label: 'Tue 22 Sep' },
  ];

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <CalendarIcon className="w-3.5 h-3.5" />
            Institutional Shift Calendar
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Facility Shift Schedule
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Visual calendar representation of upcoming hospital ward shifts and assigned internal staff.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="bg-white/10 p-1 rounded-2xl border border-white/20 flex items-center gap-1">
          {(['day', 'week', 'month'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setViewMode(m)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                viewMode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              {m} View
            </button>
          ))}
        </div>
      </div>

      {/* CALENDAR WEEK MATRIX */}
      <div className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {days.map((d) => {
            const slotsForDay = MOCK_FACILITY_ROSTER_SLOTS.filter((s) => s.date === d.date);
            return (
              <Card key={d.date} className="p-4 bg-white border-slate-200 shadow-2xs rounded-3xl space-y-3 text-left">
                <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 text-xs">{d.label}</span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    {slotsForDay.length} Shifts
                  </span>
                </div>

                <div className="space-y-2">
                  {slotsForDay.map((slot) => (
                    <div
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot)}
                      className="p-3 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/40 hover:border-blue-300 transition-all cursor-pointer space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {slot.startTime}–{slot.endTime}
                        </span>
                        <Badge variant="success" className="text-[9px] py-0 px-1.5">
                          {slot.status}
                        </Badge>
                      </div>
                      <p className="font-extrabold text-slate-900 line-clamp-1">{slot.assignedStaffRole}</p>
                      <p className="text-[11px] font-medium text-slate-600 truncate">{slot.assignedStaffName}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* SHIFT DETAIL MODAL */}
      {selectedSlot && (
        <Modal
          isOpen={!!selectedSlot}
          onClose={() => setSelectedSlot(null)}
          title="Facility Shift Details"
        >
          <div className="space-y-4 text-left text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-mono text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                Shift ID: {selectedSlot.id}
              </span>
              <h3 className="text-base font-extrabold text-slate-900 pt-1">{selectedSlot.assignedStaffRole}</h3>
              <p className="text-slate-600">Department: <strong>{selectedSlot.department}</strong></p>
              <p className="text-slate-600">Timing: <strong>{selectedSlot.startTime} – {selectedSlot.endTime}</strong> ({selectedSlot.shiftType})</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase">Assigned Internal Staff</span>
              <p className="text-sm font-extrabold text-slate-900">{selectedSlot.assignedStaffName}</p>
              <p className="text-slate-600 font-medium">Employee ID: {selectedSlot.assignedStaffEmployeeId}</p>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                onClick={() => setSelectedSlot(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
              >
                Close Details
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
