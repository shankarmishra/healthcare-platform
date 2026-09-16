import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { OrgStaffingRequestModal } from './OrgStaffingRequestModal';
import { Building2, Plus } from 'lucide-react';

export const OrgDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'roster' | 'timesheets'>('requests');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8 text-left max-w-6xl mx-auto relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* Hospital Banner — Light Theme Rebuild */}
      <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Manipal Specialty Hospital</h1>
            <p className="text-xs text-slate-600 font-medium">B2B Contract #HOSP-KA-88192 • East Campus, HAL Airport Rd</p>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          leftIcon={<Plus className="w-4 h-4" />}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
        >
          New Nursing Staffing Request
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 relative z-10">
        {[
          { id: 'requests', label: 'Open Staffing Requests (2)' },
          { id: 'roster', label: 'Weekly Roster' },
          { id: 'timesheets', label: 'Timesheet Approvals' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panel Content */}
      <Card className="p-6 space-y-4 border-slate-200 shadow-xs relative z-10">
        {activeTab === 'requests' && (
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Active Hospital Staffing Requisitions</h3>
            <div className="space-y-3">
              {[
                {
                  id: 'req-1',
                  role: 'ICU Staff Nurse (Night Shift)',
                  qual: 'B.Sc Nursing + ICU Certified',
                  qty: '3 Nurses',
                  date: 'Tonight (08:00 PM - 08:00 AM)',
                  status: 'FULFILLED',
                  assigned: 'Dr. Anjali S., Nurse Kavita M., Nurse Priya R.'
                },
                {
                  id: 'req-2',
                  role: 'General Ward Duty Nurse',
                  qual: 'GNM / B.Sc Nursing',
                  qty: '2 Nurses',
                  date: 'Tomorrow Morning Shift',
                  status: 'MATCHING',
                  assigned: 'Automated candidate scoring in progress...'
                }
              ].map((req) => (
                <div key={req.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-sm">{req.role}</h4>
                      <Badge variant={req.status === 'FULFILLED' ? 'success' : 'warning'}>{req.status}</Badge>
                    </div>
                    <p className="text-slate-600">Requirement: {req.qual} • Quantity: <strong>{req.qty}</strong></p>
                    <p className="text-slate-500 font-medium">Shift Time: {req.date}</p>
                    <p className="text-teal-700 font-bold pt-1">Assigned Roster: {req.assigned}</p>
                  </div>
                  <Button size="sm" variant="outline" className="self-start sm:self-center cursor-pointer bg-white">
                    Manage Request
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roster' && (
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Hospital Shift Roster Schedule</h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-900">Manipal ICU Ward - Week 12 Roster</p>
              <div className="grid grid-cols-7 gap-2 pt-2 text-center font-bold">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">{day}</span>
                    <span className="text-teal-700 block mt-1">3 Nurses</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timesheets' && (
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Pending Timesheet Sign-Offs</h3>
            <div className="p-4 rounded-xl border border-slate-200 bg-emerald-50/50 text-xs flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-900">Dr. Anjali S. — 12h ICU Night Shift</p>
                <p className="text-slate-500">Shift Completed: 16-Sep-2026 08:00 AM • QR Code Verified</p>
              </div>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer">
                Approve Timesheet
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Staffing Request Modal */}
      <OrgStaffingRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
