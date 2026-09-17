import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  MOCK_B2B_REQUESTS,
  MOCK_FACILITY_ROSTER_SLOTS,
  MOCK_FACILITY_TIMESHEETS,
  MOCK_B2B_CLARIFICATIONS,
} from '../../data/mockB2BData';
import {
  Building2,
  PlusCircle,
  Users,
  FileSpreadsheet,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';

export const OrgDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Authenticated Organization Context Data
  const orgName = 'Max Super Speciality Hospital, Saket';

  // Derived Metrics
  const activeRequests = MOCK_B2B_REQUESTS.filter((r) => r.status !== 'completed' && r.status !== 'cancelled');
  const totalStaffRequired = activeRequests.reduce((acc, r) => acc + r.totalStaffRequired, 0);
  const totalStaffAssigned = activeRequests.reduce((acc, r) => acc + r.totalStaffAssigned, 0);
  const totalGaps = Math.max(0, totalStaffRequired - totalStaffAssigned);
  const pendingTimesheets = MOCK_FACILITY_TIMESHEETS.filter((t) => t.approvalStatus === 'submitted');
  const pendingClarifications = MOCK_B2B_CLARIFICATIONS.filter((c) => c.status === 'pending_response');

  // KPI Data Array
  const kpis = [
    {
      id: 'kpi-requests',
      title: 'Active Requests',
      value: activeRequests.length.toString().padStart(2, '0'),
      subtext: `${activeRequests.filter((r) => r.status === 'partially_fulfilled').length} currently being fulfilled`,
      icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      path: '/organization/requests',
    },
    {
      id: 'kpi-workforce',
      title: 'Assigned Staff',
      value: MOCK_FACILITY_ROSTER_SLOTS.filter((s) => s.status === 'assigned' || s.status === 'acknowledged').length.toString().padStart(2, '0'),
      subtext: 'Across 3 hospital wards',
      icon: <Users className="w-5 h-5 text-teal-600" />,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      path: '/organization/roster',
    },
    {
      id: 'kpi-shifts',
      title: "Today's Shifts",
      value: '12',
      subtext: '10 confirmed · 2 in progress',
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      path: '/organization/schedule',
    },
    {
      id: 'kpi-gaps',
      title: 'Staffing Gaps',
      value: totalGaps.toString().padStart(2, '0'),
      subtext: totalGaps > 0 ? 'Needs Operations assignment' : 'Fully covered today',
      icon: <AlertCircle className="w-5 h-5 text-amber-600" />,
      color: totalGaps > 0 ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200',
      path: '/organization/requests',
    },
    {
      id: 'kpi-timesheets',
      title: 'Timesheets Pending',
      value: pendingTimesheets.length.toString().padStart(2, '0'),
      subtext: 'Awaiting superintendent sign-off',
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      path: '/organization/timesheets',
    },
  ];

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 overflow-hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <Building2 className="w-3.5 h-3.5" />
            Institutional Workforce Command
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Good morning, {orgName}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Here is your Pulse n Care managed workforce overview for today.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="primary"
            onClick={() => navigate('/organization/requests/new')}
            leftIcon={<PlusCircle className="w-4 h-4" />}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-2xl cursor-pointer shadow-md"
          >
            New Staffing Request
          </Button>
        </div>
      </div>

      {/* PRIMARY KPI STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
        {kpis.map((kpi) => (
          <div
            key={kpi.id}
            onClick={() => navigate(kpi.path)}
            className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                {kpi.title}
              </span>
              <div className={`p-2 rounded-xl border ${kpi.color}`}>{kpi.icon}</div>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {kpi.value}
              </p>
              <p className="text-[11px] font-bold text-slate-500 line-clamp-1">{kpi.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TWO-COLUMN MAIN AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* LEFT 7 COLS: TODAY'S FACILITY WORKFORCE */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 border-slate-200 shadow-xs space-y-5 bg-white rounded-3xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Today's Facility Workforce</h3>
                <p className="text-xs text-slate-500">Live shift coverage across hospital departments</p>
              </div>
              <Link
                to="/organization/roster"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>Full Roster</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                {
                  shiftTime: '08:00 – 20:00 (Day Shift)',
                  department: 'Cardiac ICU Ward 4',
                  role: 'ICU / Cardiac Critical Care Nurse',
                  assigned: 3,
                  required: 4,
                  gap: 1,
                  status: 'gap',
                },
                {
                  shiftTime: '20:00 – 08:00 (Night Shift)',
                  department: 'Cardiac ICU Ward 4',
                  role: 'ICU / Critical Care Nurse',
                  assigned: 4,
                  required: 4,
                  gap: 0,
                  status: 'covered',
                },
                {
                  shiftTime: '09:00 – 18:00 (General Shift)',
                  department: 'Physiotherapy & Rehab Unit',
                  role: 'Physiotherapist Specialist',
                  assigned: 2,
                  required: 2,
                  gap: 0,
                  status: 'covered',
                },
              ].map((shift, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate('/organization/roster')}
                  className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-extrabold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        {shift.shiftTime}
                      </span>
                      <span className="text-xs font-bold text-slate-800">{shift.department}</span>
                    </div>
                    <p className="text-sm font-extrabold text-slate-900">{shift.role}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="text-right">
                      <p className="text-xs font-black text-slate-900">
                        {shift.assigned} / {shift.required} Assigned
                      </p>
                      <p className="text-[11px] font-bold text-slate-500">
                        {shift.gap > 0 ? (
                          <span className="text-amber-700 font-bold flex items-center gap-1 justify-end">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                            {shift.gap} Staffing Gap
                          </span>
                        ) : (
                          <span className="text-emerald-700 font-bold flex items-center gap-1 justify-end">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Fully Covered
                          </span>
                        )}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ACTIVE STAFFING REQUESTS SECTION */}
          <Card className="p-6 border-slate-200 shadow-xs space-y-5 bg-white rounded-3xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Active Staffing Requests</h3>
                <p className="text-xs text-slate-500">Live fulfillment status of institutional requisitions</p>
              </div>
              <Link
                to="/organization/requests"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View All Requests</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {activeRequests.length > 0 ? (
              <div className="space-y-4">
                {activeRequests.map((req) => {
                  const pct = Math.round((req.totalStaffAssigned / req.totalStaffRequired) * 100);
                  return (
                    <div
                      key={req.id}
                      className="p-4 rounded-2xl border border-slate-200 space-y-3 bg-white hover:border-slate-300 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                              {req.requestNumber}
                            </span>
                            <Badge
                              variant={
                                req.status === 'fulfilled'
                                  ? 'success'
                                  : req.status === 'partially_fulfilled'
                                  ? 'warning'
                                  : 'info'
                              }
                              className="capitalize font-bold text-[10px]"
                            >
                              {req.status.replace(/_/g, ' ')}
                            </Badge>
                          </div>
                          <h4 className="text-sm font-extrabold text-slate-900 pt-1">
                            {req.facilityLocation.department} Staffing
                          </h4>
                        </div>

                        <Link
                          to={`/organization/requests/${req.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer shrink-0"
                        >
                          <span>View Request</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-700">
                            {req.totalStaffAssigned} / {req.totalStaffRequired} Staff Positions Assigned
                          </span>
                          <span className="font-extrabold text-blue-700">{pct}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-teal-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 font-medium pt-1">
                        Next: Pulse n Care Operations assigning remaining {req.totalStaffRequired - req.totalStaffAssigned} staff positions.
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <FileSpreadsheet className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-sm font-bold text-slate-700">No Active Staffing Requests</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  When your facility requires additional healthcare workforce, create a request and Operations will assign internal staff.
                </p>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigate('/organization/requests/new')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                >
                  Create Staffing Request
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* RIGHT 5 COLS: ACTION CENTER & UPCOMING SHIFTS */}
        <div className="lg:col-span-5 space-y-6">
          {/* ACTION CENTER: NEEDS YOUR ATTENTION */}
          <Card className="p-6 border-slate-200 shadow-xs space-y-4 bg-white rounded-3xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <h3 className="text-base font-extrabold text-slate-900">Needs Your Attention</h3>
              </div>
              <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Action Items
              </span>
            </div>

            <div className="space-y-3">
              {pendingTimesheets.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between gap-3 text-left">
                  <div className="space-y-0.5">
                    <p className="text-xs font-extrabold text-amber-950">
                      {pendingTimesheets.length} Shift Timesheets Awaiting Approval
                    </p>
                    <p className="text-[11px] text-amber-800 font-medium">
                      Superintendent sign-off required for ICU shift completion.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate('/organization/timesheets')}
                    className="border-amber-600 text-amber-900 hover:bg-amber-100 font-bold text-xs cursor-pointer shrink-0"
                  >
                    Approve
                  </Button>
                </div>
              )}

              {pendingClarifications.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-center justify-between gap-3 text-left">
                  <div className="space-y-0.5">
                    <p className="text-xs font-extrabold text-blue-950">
                      Operations Requested Clarification
                    </p>
                    <p className="text-[11px] text-blue-800 font-medium">
                      Question regarding ACLS certification for PNC-B2B-2026-041.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate('/organization/requests/req-b2b-001')}
                    className="border-blue-600 text-blue-900 hover:bg-blue-100 font-bold text-xs cursor-pointer shrink-0"
                  >
                    Respond
                  </Button>
                </div>
              )}

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-left">
                <div className="space-y-0.5">
                  <p className="text-xs font-extrabold text-slate-900">
                    1 Staffing Gap Requires Attention
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    Cardiac ICU Ward 4 Day Shift has 1 open slot.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate('/organization/roster')}
                  className="border-slate-300 text-slate-800 hover:bg-white font-bold text-xs cursor-pointer shrink-0"
                >
                  View Roster
                </Button>
              </div>
            </div>
          </Card>

          {/* UPCOMING SHIFTS */}
          <Card className="p-6 border-slate-200 shadow-xs space-y-4 bg-white rounded-3xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Upcoming Facility Shifts</h3>
              <Link
                to="/organization/schedule"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>Calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-2.5">
              {[
                { date: '18 Sep', time: '08:00–20:00', dept: 'Cardiac ICU', role: 'Registered Nurse', staff: 'Sunita Sharma, RN', status: 'Confirmed' },
                { date: '18 Sep', time: '20:00–08:00', dept: 'Cardiac ICU', role: 'Critical Care Nurse', staff: 'Pooja Verma, RN', status: 'Confirmed' },
                { date: '19 Sep', time: '08:00–20:00', dept: 'Cardiac ICU', role: 'Registered Nurse', staff: 'Rajesh Kumar, RN', status: 'Confirmed' },
                { date: '19 Sep', time: '09:00–18:00', dept: 'Physiotherapy', role: 'Physiotherapist', staff: 'Dr. Alok Verma, PT', status: 'Confirmed' },
              ].map((shift, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between text-left text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-blue-700">{shift.date}</span>
                      <span className="text-slate-500">{shift.time}</span>
                    </div>
                    <p className="font-extrabold text-slate-900">{shift.role} • {shift.dept}</p>
                    <p className="text-[11px] text-slate-600 font-medium">Assigned: {shift.staff}</p>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {shift.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* QUICK ACTIONS */}
          <Card className="p-6 border-slate-200 shadow-xs space-y-3 bg-white rounded-3xl text-left">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => navigate('/organization/requests/new')}
                className="justify-start text-xs font-bold border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-800"
              >
                + New Request
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/organization/roster')}
                className="justify-start text-xs font-bold border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-800"
              >
                View Roster
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/organization/timesheets')}
                className="justify-start text-xs font-bold border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-800"
              >
                Timesheets
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/organization/support')}
                className="justify-start text-xs font-bold border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-800"
              >
                Ops Support
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
