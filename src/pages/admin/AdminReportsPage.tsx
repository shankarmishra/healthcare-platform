import React from 'react';
import { TrendingUp, Download, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';

export const AdminReportsPage: React.FC = () => {
  const monthlyRevenue = [
    { month: 'Apr', revenue: 420000, bookings: 120 },
    { month: 'May', revenue: 580000, bookings: 165 },
    { month: 'Jun', revenue: 750000, bookings: 210 },
    { month: 'Jul', revenue: 890000, bookings: 245 },
    { month: 'Aug', revenue: 1120000, bookings: 310 },
    { month: 'Sep', revenue: 1450000, bookings: 390 }
  ];

  const categoryBreakdown = [
    { name: 'ICU Nursing', percentage: 42, color: 'bg-teal-600' },
    { name: 'Elderly Care', percentage: 28, color: 'bg-blue-600' },
    { name: 'Physiotherapy', percentage: 18, color: 'bg-emerald-500' },
    { name: 'Mother & Baby', percentage: 12, color: 'bg-amber-500' }
  ];

  const handleExportCSV = () => {
    const headers = ['Month', 'Revenue_INR', 'Completed_Bookings'];
    const rows = monthlyRevenue.map((r) => [r.month, r.revenue, r.bookings]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `healthcare_reports_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-left relative">
      <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 relative z-10">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Executive Reports & Analytics</h1>
          <p className="text-slate-500 text-xs mt-1">Platform gross merchandise volume (GMV), net margin, booking conversion & cancellation trends</p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={handleExportCSV}
          className="text-xs font-bold flex items-center gap-2 cursor-pointer bg-white"
        >
          <Download className="w-4 h-4 text-teal-600" /> Export CSV Report
        </Button>
      </div>

      {/* Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative z-10">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-bold block">Monthly Gross Volume (GMV)</span>
          <span className="text-2xl font-extrabold text-slate-900 block">₹14.5 Lakhs</span>
          <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +24.8% vs last month
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-bold block">Net Platform Revenue (15%)</span>
          <span className="text-2xl font-extrabold text-teal-700 block">₹2.17 Lakhs</span>
          <span className="text-[11px] text-slate-500 block">Net operational commission margin</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-bold block">Total Care Visits Completed</span>
          <span className="text-2xl font-extrabold text-slate-900 block">390 Visits</span>
          <span className="text-[11px] text-slate-500 block">Avg 13.0 visits per day</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-bold block">Cancellation Rate</span>
          <span className="text-2xl font-extrabold text-emerald-700 block">1.8%</span>
          <span className="text-[11px] text-emerald-800 font-bold block">Within industry gold benchmark (&lt;3%)</span>
        </div>
      </div>

      {/* Revenue Trend Chart & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-sm">Monthly Revenue Growth (INR)</h3>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
              FY 2026 Q2
            </span>
          </div>

          <div className="h-64 flex items-end justify-between gap-4 pt-8 pb-2 border-b border-slate-200">
            {monthlyRevenue.map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <span className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  ₹{(item.revenue / 100000).toFixed(1)}L
                </span>
                <div
                  className="w-full bg-teal-600 rounded-t-lg transition-all group-hover:bg-teal-700"
                  style={{ height: `${(item.revenue / 1500000) * 100}%` }}
                />
                <span className="text-xs font-bold text-slate-700">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-extrabold text-slate-900 text-sm">Service Revenue Breakdown</h3>
          <div className="space-y-4">
            {categoryBreakdown.map((cat) => (
              <div key={cat.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700">{cat.name}</span>
                  <span className="text-slate-900">{cat.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Audit metrics verified against platform ledger.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
