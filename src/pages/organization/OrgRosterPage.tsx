import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MOCK_PROFESSIONALS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { OrgStaffingRequestModal } from './OrgStaffingRequestModal';

export const OrgRosterPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shifts = [
    { day: 'Mon 21', shift: 'Night Shift (20:00 - 08:00)', ward: 'ICU Ward 3', pro: MOCK_PROFESSIONALS[0], status: 'Confirmed' },
    { day: 'Tue 22', shift: 'Night Shift (20:00 - 08:00)', ward: 'ICU Ward 3', pro: MOCK_PROFESSIONALS[1], status: 'Confirmed' },
    { day: 'Wed 23', shift: 'Day Shift (08:00 - 20:00)', ward: 'Surgical Ward A', pro: MOCK_PROFESSIONALS[2], status: 'Check-in Verified' },
    { day: 'Thu 24', shift: 'Day Shift (08:00 - 20:00)', ward: 'Surgical Ward A', pro: MOCK_PROFESSIONALS[3], status: 'Assigned' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hospital Ward Roster Schedule</h1>
          <p className="text-slate-600 text-xs mt-1">Max Hospital Delhi NCR • Active Weekly Nursing Shifts</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Request Staff Requisition
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Shift Date</th>
                <th className="p-4">Ward / Department</th>
                <th className="p-4">Shift Timing</th>
                <th className="p-4">Assigned Professional</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {shifts.map((s, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{s.day}</td>
                  <td className="p-4 font-semibold text-blue-800">{s.ward}</td>
                  <td className="p-4 text-slate-700">{s.shift}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={s.pro.profilePhoto} alt={s.pro.displayName} className="w-7 h-7 rounded-full object-cover border border-slate-200" />
                      <span className="font-bold text-slate-900">{s.pro.displayName}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-teal-50 text-teal-800 rounded-md font-semibold text-[11px] border border-teal-200">
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <OrgStaffingRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
