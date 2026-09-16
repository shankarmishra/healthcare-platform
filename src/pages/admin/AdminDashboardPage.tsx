import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Activity,
  ShieldAlert,
  Users,
  CalendarCheck,
  IndianRupee,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Clock
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookings, professionals } = useBookings();

  const pendingKYC = professionals.filter((p) => p.kycStatus === 'under_review' || p.kycStatus === 'reupload_required');
  const activeBookings = bookings.filter((b) => ['MATCHING', 'ASSIGNED', 'ACCEPTED', 'ON_THE_WAY', 'CHECKED_IN', 'IN_PROGRESS'].includes(b.status));

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

      {/* Ops Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Operations Command Center</span>
          <h1 className="text-3xl font-extrabold text-slate-900">Real-Time Platform Monitor</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/admin/kyc">
            <Button variant="outline" size="sm" leftIcon={<ShieldAlert className="w-4 h-4 text-amber-500" />} className="bg-white">
              KYC Queue ({pendingKYC.length})
            </Button>
          </Link>
          <Link to="/admin/bookings">
            <Button variant="primary" size="sm" leftIcon={<CalendarCheck className="w-4 h-4" />} className="bg-teal-600 hover:bg-teal-700 text-white font-bold">
              View Live Dispatch
            </Button>
          </Link>
        </div>
      </div>

      {/* ATTENTION REQUIRED Strip — Primary Operations Focus */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 relative z-10 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-amber-950 uppercase tracking-wider">Attention Required (3 Action Items)</h4>
            <p className="text-xs text-amber-800 font-medium">Pending operational approvals requiring dispatch manager intervention</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => navigate('/admin/kyc')}
            className="bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-bold text-amber-900 flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> Pending KYC ({pendingKYC.length})
          </button>
          <button
            onClick={() => navigate('/admin/matching')}
            className="bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-bold text-amber-900 flex items-center gap-1.5 cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5 text-teal-600" /> Dispatch Queue (1)
          </button>
          <button
            onClick={() => navigate('/admin/support')}
            className="bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-bold text-amber-900 flex items-center gap-1.5 cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-blue-600" /> Support Tickets (1)
          </button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <Card className="p-5 space-y-2 border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Active Care Visits</span>
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <span className="text-3xl font-extrabold text-slate-900">{activeBookings.length}</span>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> 100% On-Time Dispatch
          </span>
        </Card>

        <Card className="p-5 space-y-2 border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Pending Verification</span>
            <ShieldAlert className="w-5 h-5 text-amber-500" />
          </div>
          <span className="text-3xl font-extrabold text-slate-900">{pendingKYC.length}</span>
          <span className="text-[11px] text-amber-800 font-semibold">Council Audit Required</span>
        </Card>

        <Card className="p-5 space-y-2 border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Total Professionals</span>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-3xl font-extrabold text-slate-900">{professionals.length}</span>
          <span className="text-[11px] text-slate-500">60+ Active Professionals</span>
        </Card>

        <Card className="p-5 space-y-2 border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Gross Monthly Volume</span>
            <IndianRupee className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-3xl font-extrabold text-teal-700">₹14.5L</span>
          <span className="text-[11px] text-emerald-700 font-semibold">+24.8% vs last month</span>
        </Card>
      </div>

      {/* Active Bookings Dispatch Feed */}
      <Card className="p-6 border-slate-200 shadow-xs space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-slate-900">Live Care Visit Feed</h2>
          <Link to="/admin/bookings" className="text-xs font-bold text-teal-700 flex items-center gap-1 hover:underline">
            View All Bookings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {bookings.slice(0, 5).map((booking) => (
            <div key={booking.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{booking.serviceName}</span>
                  <BookingStatusBadge status={booking.status} />
                </div>
                <p className="text-slate-500">
                  Code: <strong className="text-slate-700">{booking.bookingCode}</strong> • Patient: {booking.patientProfile.firstName} {booking.patientProfile.lastName}
                </p>
              </div>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="font-extrabold text-slate-900 block">₹{booking.priceBreakdown.totalPrice}</span>
                  <span className="text-[11px] text-slate-400 block">{booking.scheduledDate}</span>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => navigate(`/admin/bookings?id=${booking.id}`)}
                  className="cursor-pointer text-xs"
                >
                  Manage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
