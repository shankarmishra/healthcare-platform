import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_FACILITY_ROSTER_SLOTS } from '../../data/mockB2BData';
import type { FacilityShiftRosterSlot } from '../../types';
import {
  Users,
  Search,
  Filter,
  ShieldCheck,
  Eye,
  PlusCircle,
} from 'lucide-react';

export const OrgRosterPage: React.FC = () => {
  const navigate = useNavigate();
  const [deptFilter, setDeptFilter] = useState('all');
  const [shiftFilter, setShiftFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaffModal, setSelectedStaffModal] = useState<FacilityShiftRosterSlot | null>(null);

  // Filter slots
  const filteredSlots = MOCK_FACILITY_ROSTER_SLOTS.filter((slot) => {
    if (deptFilter !== 'all' && !slot.department.toLowerCase().includes(deptFilter.toLowerCase())) return false;
    if (shiftFilter !== 'all' && slot.shiftType !== shiftFilter) return false;
    if (
      searchQuery &&
      !slot.assignedStaffName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !slot.assignedStaffRole?.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <Users className="w-3.5 h-3.5" />
            Institutional Roster & Workforce Placement
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Facility Shift Roster
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Assigned Pulse n Care internal staff deployed to your hospital wards and shifts.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => navigate('/organization/requests/new')}
          leftIcon={<PlusCircle className="w-4 h-4" />}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-2xl cursor-pointer"
        >
          New Staffing Request
        </Button>
      </div>

      {/* FILTERS & SEARCH STRIP */}
      <Card className="p-4 bg-white border-slate-200 shadow-2xs rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 relative z-10">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by staff name or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white placeholder-slate-400 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filters:</span>
          </div>

          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white"
          >
            <option value="all">All Departments</option>
            <option value="ICU">Cardiac ICU</option>
            <option value="Recovery">Post-Op Recovery</option>
            <option value="Physiotherapy">Physiotherapy Unit</option>
          </select>

          <select
            value={shiftFilter}
            onChange={(e) => setShiftFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white"
          >
            <option value="all">All Shifts</option>
            <option value="12h_day">12h Day (08:00–20:00)</option>
            <option value="12h_night">12h Night (20:00–08:00)</option>
            <option value="8h_general">8h General (09:00–18:00)</option>
          </select>
        </div>
      </Card>

      {/* ROSTER TABLE */}
      <Card className="p-0 border-slate-200 shadow-xs rounded-3xl overflow-hidden bg-white relative z-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Shift Date</th>
                <th className="p-4">Department</th>
                <th className="p-4">Shift Timing</th>
                <th className="p-4">Assigned Staff</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Rate</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSlots.map((slot) => (
                <tr key={slot.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{slot.date}</td>
                  <td className="p-4 font-extrabold text-blue-800">{slot.department}</td>
                  <td className="p-4">
                    <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {slot.startTime} – {slot.endTime} ({slot.shiftType.replace(/_/g, ' ')})
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <p className="font-extrabold text-slate-900">{slot.assignedStaffName || 'Staff Member'}</p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        ID: {slot.assignedStaffEmployeeId} • {slot.assignedStaffRole}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Badge variant="success" className="capitalize text-[10px] font-bold">
                      {slot.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right font-bold text-slate-900">
                    ₹{slot.dailyRate.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedStaffModal(slot)}
                      leftIcon={<Eye className="w-3.5 h-3.5" />}
                      className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold text-[11px] cursor-pointer"
                    >
                      View Profile
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* PRIVACY-PROTECTED APPROVED STAFF DETAILS MODAL */}
      {selectedStaffModal && (
        <Modal
          isOpen={!!selectedStaffModal}
          onClose={() => setSelectedStaffModal(null)}
          title="Assigned Professional Metadata"
        >
          <div className="space-y-5 text-left text-xs">
            {/* Header Profile Badge */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center border-2 border-white/20 shrink-0">
                {selectedStaffModal.assignedStaffName?.substring(0, 2).toUpperCase() || 'PNC'}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-extrabold text-white">{selectedStaffModal.assignedStaffName}</h3>
                <p className="text-blue-300 font-medium text-xs">{selectedStaffModal.assignedStaffRole}</p>
                <span className="inline-block text-[10px] font-mono font-bold bg-white/20 text-white px-2 py-0.5 rounded">
                  Employee ID: {selectedStaffModal.assignedStaffEmployeeId}
                </span>
              </div>
            </div>

            {/* Shift Assignment Context */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="font-extrabold text-slate-900">Assigned Shift Context</p>
              <p className="text-slate-600">
                Department: <strong>{selectedStaffModal.department}</strong> • Date: <strong>{selectedStaffModal.date}</strong>
              </p>
              <p className="text-slate-600">
                Shift Hours: <strong>{selectedStaffModal.startTime} – {selectedStaffModal.endTime}</strong> ({selectedStaffModal.shiftType.replace(/_/g, ' ')})
              </p>
            </div>

            {/* Approved Clinical Qualifications */}
            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">Approved Professional Qualifications</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Education</span>
                  <p className="font-bold text-slate-900">B.Sc Nursing / GNM</p>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Certifications</span>
                  <p className="font-bold text-slate-900">BLS & ACLS Certified</p>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Clinical Exp</span>
                  <p className="font-bold text-slate-900">4+ Years Hospital ICU</p>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Languages</span>
                  <p className="font-bold text-slate-900">English, Hindi</p>
                </div>
              </div>
            </div>

            {/* Privacy Protection Notice */}
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-[11px] space-y-1">
              <p className="font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Employee Data Privacy Standard
              </p>
              <p className="text-[10px] leading-relaxed text-blue-800">
                Personal employee phone numbers, home addresses, and private personnel records are protected by Pulse n Care workforce privacy policies.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                onClick={() => setSelectedStaffModal(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
              >
                Close Metadata View
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
