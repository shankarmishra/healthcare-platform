import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { MOCK_PROFESSIONALS } from '../../data/mockData';
import { Button } from '../../components/common/Button';

export const OrgTimesheetsPage: React.FC = () => {
  const [timesheets, setTimesheets] = useState([
    { id: 'TS-101', proName: MOCK_PROFESSIONALS[0].displayName, ward: 'ICU Ward 3', hours: 12, date: 'Sept 20, 2026', status: 'pending', amount: 9600 },
    { id: 'TS-102', proName: MOCK_PROFESSIONALS[1].displayName, ward: 'Emergency Ward', hours: 12, date: 'Sept 20, 2026', status: 'approved', amount: 8400 },
    { id: 'TS-103', proName: MOCK_PROFESSIONALS[2].displayName, ward: 'General Surgical', hours: 8, date: 'Sept 21, 2026', status: 'pending', amount: 5600 }
  ]);

  const approveTimesheet = (id: string) => {
    setTimesheets(timesheets.map(t => t.id === id ? { ...t, status: 'approved' } : t));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Hospital Timesheet Approvals</h1>
        <p className="text-slate-600 text-xs mt-1">Audit verified shift hours logged by contracted nursing staff for billing approval</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Timesheet ID</th>
                <th className="p-4">Professional</th>
                <th className="p-4">Ward Location</th>
                <th className="p-4">Logged Hours</th>
                <th className="p-4">Billing Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {timesheets.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-900">{t.id}</td>
                  <td className="p-4 font-bold text-slate-900">{t.proName}</td>
                  <td className="p-4 font-semibold text-blue-800">{t.ward}</td>
                  <td className="p-4 font-bold text-slate-800">{t.hours} Hours ({t.date})</td>
                  <td className="p-4 font-extrabold text-teal-700">₹{t.amount.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md font-semibold text-[11px] border ${
                      t.status === 'approved'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {t.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {t.status === 'pending' ? (
                      <Button
                        size="sm"
                        onClick={() => approveTimesheet(t.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 ml-auto cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" /> Approve Hours
                      </Button>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Approved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
