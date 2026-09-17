import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  MOCK_B2B_REQUESTS,
  MOCK_FACILITY_ROSTER_SLOTS,
  MOCK_B2B_CLARIFICATIONS,
} from '../../data/mockB2BData';
import {
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  Send,
} from 'lucide-react';

export const OrgRequestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find request by ID or requestNumber, fallback to first mock request
  const request =
    MOCK_B2B_REQUESTS.find((r) => r.id === id || r.requestNumber === id) ||
    MOCK_B2B_REQUESTS[0];

  const assignedSlots = MOCK_FACILITY_ROSTER_SLOTS.filter(
    (s) => s.requestId === request.id || s.requestNumber === request.requestNumber
  );

  // Clarifications
  const [clarifications, setClarifications] = useState(MOCK_B2B_CLARIFICATIONS);
  const [replyText, setReplyText] = useState('');
  const [replySuccessMsg, setReplySuccessMsg] = useState<string | null>(null);

  const pendingClarification = clarifications.find((c) => c.status === 'pending_response');

  const handleSendClarificationReply = () => {
    if (!replyText.trim() || !pendingClarification) return;

    setClarifications((prev) =>
      prev.map((c) => {
        if (c.id === pendingClarification.id) {
          return {
            ...c,
            answer: replyText,
            answeredAt: new Date().toISOString(),
            status: 'resolved',
          };
        }
        return c;
      })
    );

    setReplySuccessMsg('Your clarification response has been transmitted to Pulse n Care Operations!');
    setTimeout(() => {
      setReplySuccessMsg(null);
      setReplyText('');
    }, 2500);
  };

  const pct = Math.round((request.totalStaffAssigned / request.totalStaffRequired) * 100);

  return (
    <div className="space-y-8 text-left max-w-6xl mx-auto relative px-4 sm:px-6">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* TOP NAV & HEADER */}
      <div className="space-y-4 relative z-10">
        <button
          type="button"
          onClick={() => navigate('/organization/requests')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Requisitions</span>
        </button>

        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-extrabold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/20">
                {request.requestNumber}
              </span>
              <Badge
                variant={
                  request.status === 'fulfilled'
                    ? 'success'
                    : request.status === 'partially_fulfilled'
                    ? 'warning'
                    : 'info'
                }
                className="capitalize font-bold text-xs"
              >
                {request.status.replace(/_/g, ' ')}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {request.facilityLocation.department} Staffing Requisition
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">
              Facility: <strong>{request.organizationName}</strong> • Deployment: <strong>{request.startDate} to {request.endDate}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              onClick={() => navigate('/organization/support')}
              className="border-slate-700 text-white hover:bg-white/10 font-bold text-xs"
            >
              Contact Operations
            </Button>
          </div>
        </div>
      </div>

      {/* CLARIFICATION LOOP ALERT IF PENDING */}
      {pendingClarification && (
        <Card className="p-6 bg-amber-50/90 border-amber-200 text-amber-950 shadow-sm rounded-3xl space-y-4 relative z-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-amber-950">
                  Operations Requested Clarification
                </h4>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Action Required
                </span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                {pendingClarification.question}
              </p>
              <span className="text-[10px] text-amber-700 font-bold block pt-1">
                Asked by: {pendingClarification.askedBy}
              </span>
            </div>
          </div>

          {replySuccessMsg ? (
            <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{replySuccessMsg}</span>
            </div>
          ) : (
            <div className="space-y-3 pt-2 border-t border-amber-200/80">
              <textarea
                rows={2}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your response to Operations..."
                className="w-full px-3 py-2 rounded-xl border border-amber-300 text-xs font-medium text-slate-900 bg-white"
              />
              <div className="flex justify-end">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={handleSendClarificationReply}
                  leftIcon={<Send className="w-3.5 h-3.5" />}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
                >
                  Submit Response to Operations
                </Button>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* OVERALL FULFILLMENT BOARD */}
      <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Overall Workforce Fulfillment Board</h3>
            <p className="text-xs text-slate-500">Live position fulfillment tracked by Pulse n Care Operations</p>
          </div>

          <div className="text-right">
            <p className="text-xl font-black text-slate-900">
              {request.totalStaffAssigned} / {request.totalStaffRequired} Assigned
            </p>
            <p className="text-xs font-bold text-blue-600">{pct}% Fulfilled</p>
          </div>
        </div>

        {/* Progress Fill Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Requirements Lines Breakdown Table */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Requirement Lines Breakdown</h4>
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 font-extrabold text-slate-700 uppercase tracking-wider">
                <tr>
                  <th className="p-3">Requirement Line</th>
                  <th className="p-3">Shift</th>
                  <th className="p-3 text-center">Required</th>
                  <th className="p-3 text-center">Assigned</th>
                  <th className="p-3 text-center">Gap</th>
                  <th className="p-3 text-right">Daily Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {request.requirements.map((line) => {
                  const gap = Math.max(0, line.requiredCount - line.assignedCount);
                  return (
                    <tr key={line.id} className="hover:bg-slate-50/60">
                      <td className="p-3">
                        <p className="font-extrabold text-slate-900">{line.roleCategoryTitle}</p>
                        <p className="text-[11px] text-slate-500">{line.requiredQualifications.join(' • ')}</p>
                      </td>
                      <td className="p-3">
                        <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {line.shiftType.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="p-3 text-center font-bold text-slate-900">{line.requiredCount}</td>
                      <td className="p-3 text-center font-extrabold text-emerald-700">{line.assignedCount}</td>
                      <td className="p-3 text-center font-extrabold">
                        {gap > 0 ? (
                          <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            {gap} Open
                          </span>
                        ) : (
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Covered
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-right font-bold text-slate-900">
                        ₹{line.agreedDailyRate.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* FULFILLMENT TIMELINE & ASSIGNED ROSTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* LEFT 7 COLS: ASSIGNED FACILITY WORKFORCE */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Assigned Facility Workforce</h3>
                <p className="text-xs text-slate-500">Internal staff deployed by Pulse n Care Operations</p>
              </div>
              <Link to="/organization/roster" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                View Roster
              </Link>
            </div>

            <div className="space-y-3">
              {assignedSlots.length > 0 ? (
                assignedSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5">
                      <p className="font-extrabold text-slate-900">{slot.assignedStaffName || 'Assigned Staff'}</p>
                      <p className="text-[11px] text-slate-600 font-medium">
                        ID: {slot.assignedStaffEmployeeId} • Role: {slot.assignedStaffRole}
                      </p>
                      <p className="text-[10px] text-slate-500">Shift: {slot.shiftType.replace(/_/g, ' ')} ({slot.startTime}–{slot.endTime})</p>
                    </div>
                    <Badge variant="success" className="capitalize">
                      {slot.status}
                    </Badge>
                  </div>
                ))
              ) : (
                <div className="py-6 text-center text-xs text-slate-500">
                  Operations is currently assigning eligible internal staff to roster slots.
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* RIGHT 5 COLS: INTERACTIVE TIMELINE */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Requisition Lifecycle Timeline</h3>
              <p className="text-xs text-slate-500">Real-time status updates from Operations</p>
            </div>

            <div className="space-y-4 text-xs">
              {[
                { time: '17 Sep 08:30', title: 'Requisition Submitted', desc: `Requisition ${request.requestNumber} submitted by ${request.contactPerson.name}.`, done: true },
                { time: '17 Sep 09:15', title: 'Operations Review Started', desc: 'Eligibility Engine matching active ICU certified staff.', done: true },
                { time: '17 Sep 11:00', title: '4 ICU Day Nurses Assigned', desc: 'Roster slots populated with verified internal staff.', done: true },
                { time: '17 Sep 14:20', title: 'Remaining Slots Assignment', desc: 'Operations assigning 3 Night Nurses & 1 Physio.', done: false },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-[10px] ${
                      step.done ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step.done ? '✓' : idx + 1}
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-extrabold text-slate-900">{step.title}</p>
                    <p className="text-[11px] text-slate-600 leading-snug">{step.desc}</p>
                    <span className="text-[10px] text-slate-400 block pt-0.5">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
