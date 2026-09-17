import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_FACILITY_TIMESHEETS } from '../../data/mockB2BData';
import type { FacilityTimesheet } from '../../types';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Eye,
} from 'lucide-react';

export const OrgTimesheetsPage: React.FC = () => {
  const [timesheets, setTimesheets] = useState<FacilityTimesheet[]>(MOCK_FACILITY_TIMESHEETS);
  const [activeTab, setActiveTab] = useState<'submitted' | 'approved_by_facility' | 'rejected' | 'all'>('submitted');
  const [selectedTimesheet, setSelectedTimesheet] = useState<FacilityTimesheet | null>(null);

  // Rejection Form State
  const [rejectionReason, setRejectionReason] = useState('');
  const [isRejecting, setIsRejecting] = useState(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const filteredTimesheets = timesheets.filter((t) => {
    if (activeTab === 'all') return true;
    return t.approvalStatus === activeTab;
  });

  const handleApproveTimesheet = (id: string) => {
    setTimesheets((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            approvalStatus: 'approved_by_facility',
            approvedAt: new Date().toISOString(),
          };
        }
        return t;
      })
    );
    setActionSuccessMsg(`Timesheet ${selectedTimesheet?.timesheetNumber || id} approved for billing!`);
    setTimeout(() => {
      setActionSuccessMsg(null);
      setSelectedTimesheet(null);
      setIsRejecting(false);
    }, 1500);
  };

  const handleRejectTimesheet = (id: string) => {
    if (!rejectionReason.trim()) return;

    setTimesheets((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            approvalStatus: 'rejected',
            rejectionReason: rejectionReason,
          };
        }
        return t;
      })
    );
    setActionSuccessMsg(`Timesheet rejected. Sent to Operations for correction.`);
    setTimeout(() => {
      setActionSuccessMsg(null);
      setSelectedTimesheet(null);
      setIsRejecting(false);
      setRejectionReason('');
    }, 1500);
  };

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <Clock className="w-3.5 h-3.5" />
            Shift Verification & Superintendent Sign-Off
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Digital Shift Timesheets
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Review actual clock-in/out hours logged by internal staff for institutional retainer billing.
          </p>
        </div>

        <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/10 text-center">
          <p className="text-[10px] text-amber-300 font-bold uppercase">Pending Approval</p>
          <p className="text-xl font-extrabold text-white">
            {timesheets.filter((t) => t.approvalStatus === 'submitted').length}
          </p>
        </div>
      </div>

      {/* STATUS TABS */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-1.5 max-w-md relative z-10">
        {[
          { id: 'submitted', label: 'Pending Approval' },
          { id: 'approved_by_facility', label: 'Approved' },
          { id: 'rejected', label: 'Rejected' },
          { id: 'all', label: 'All Timesheets' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TIMESHEET TABLE */}
      <Card className="p-0 border-slate-200 shadow-xs rounded-3xl overflow-hidden bg-white relative z-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Timesheet No</th>
                <th className="p-4">Shift Date</th>
                <th className="p-4">Staff Member</th>
                <th className="p-4">Department</th>
                <th className="p-4">Clocked Times</th>
                <th className="p-4 text-center">Hours</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTimesheets.map((ts) => (
                <tr key={ts.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-blue-700">{ts.timesheetNumber}</td>
                  <td className="p-4 font-bold text-slate-900">{ts.shiftDate}</td>
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <p className="font-extrabold text-slate-900">{ts.staffName}</p>
                      <p className="text-[11px] text-slate-500">{ts.staffEmployeeId} • {ts.staffRole}</p>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-slate-800">{ts.department}</td>
                  <td className="p-4">
                    <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {ts.clockInTime || '--'} – {ts.clockOutTime || '--'}
                    </span>
                  </td>
                  <td className="p-4 text-center font-extrabold text-slate-900">{ts.hoursWorked}h</td>
                  <td className="p-4 text-center">
                    <Badge
                      variant={
                        ts.approvalStatus === 'approved_by_facility'
                          ? 'success'
                          : ts.approvalStatus === 'rejected'
                          ? 'danger'
                          : 'warning'
                      }
                      className="capitalize text-[10px] font-bold"
                    >
                      {ts.approvalStatus.replace(/_/g, ' ')}
                    </Badge>
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedTimesheet(ts);
                        setIsRejecting(false);
                        setRejectionReason('');
                      }}
                      leftIcon={<Eye className="w-3.5 h-3.5" />}
                      className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold text-[11px] cursor-pointer"
                    >
                      Review
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* SHIFT TIMESHEET REVIEW MODAL */}
      {selectedTimesheet && (
        <Modal
          isOpen={!!selectedTimesheet}
          onClose={() => setSelectedTimesheet(null)}
          title={`Timesheet Verification — ${selectedTimesheet.timesheetNumber}`}
        >
          <div className="space-y-5 text-left text-xs">
            {actionSuccessMsg ? (
              <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-extrabold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{actionSuccessMsg}</span>
              </div>
            ) : (
              <>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-blue-700 uppercase">
                    Requisition Ref: {selectedTimesheet.requestNumber}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 pt-1">{selectedTimesheet.staffName}</h3>
                  <p className="text-slate-600">Role: <strong>{selectedTimesheet.staffRole}</strong> ({selectedTimesheet.staffEmployeeId})</p>
                  <p className="text-slate-600">Department: <strong>{selectedTimesheet.department}</strong> • Date: <strong>{selectedTimesheet.shiftDate}</strong></p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-800">
                  <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Scheduled Shift</span>
                    <p className="font-extrabold text-slate-900">{selectedTimesheet.shiftType.replace(/_/g, ' ')}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Actual Clock In/Out</span>
                    <p className="font-extrabold text-blue-700">{selectedTimesheet.clockInTime} → {selectedTimesheet.clockOutTime}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Break Duration</span>
                    <p className="font-bold text-slate-900">{selectedTimesheet.breakDurationMins} Mins</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Total Verified Hours</span>
                    <p className="font-black text-emerald-700 text-sm">{selectedTimesheet.hoursWorked} Hours</p>
                  </div>
                </div>

                {/* Handover & Supervisor Notes */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <p className="font-extrabold text-slate-900">Shift Handover Note</p>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    All 4 ventilator patients in Ward 4 monitored cleanly. Vitals chart logged in daily clinical sheet.
                  </p>
                </div>

                {/* Rejection Form Input */}
                {isRejecting ? (
                  <div className="space-y-3 pt-2 border-t border-slate-200">
                    <label className="block text-xs font-bold text-red-700">Reason for Rejection *</label>
                    <textarea
                      rows={2}
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="Specify reason for rejecting shift timesheet..."
                      className="w-full px-3 py-2 rounded-xl border border-red-300 text-xs font-medium text-slate-900 bg-white"
                      required
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setIsRejecting(false)}
                        className="text-slate-700 font-bold text-xs"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleRejectTimesheet(selectedTimesheet.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
                      >
                        Confirm Rejection
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsRejecting(true)}
                      leftIcon={<XCircle className="w-3.5 h-3.5 text-red-600" />}
                      className="border-red-200 text-red-700 hover:bg-red-50 font-bold text-xs cursor-pointer"
                    >
                      Reject Timesheet
                    </Button>

                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleApproveTimesheet(selectedTimesheet.id)}
                      leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer px-4"
                    >
                      Approve Shift Timesheet
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
