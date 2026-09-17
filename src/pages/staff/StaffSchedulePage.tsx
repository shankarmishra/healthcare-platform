import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { Clock, ChevronRight } from 'lucide-react';
import { MOCK_DUTIES } from '../../data/mockStaffData';

export const StaffSchedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 pb-8">
      <div className="border-b border-slate-200 pb-3">
        <Badge variant="teal" size="sm">Staff Roster</Badge>
        <h1 className="text-xl font-black text-slate-900 mt-1">My Duty Schedule</h1>
        <p className="text-xs text-slate-500">Upcoming and completed clinical duty assignments across Delhi NCR.</p>
      </div>

      <div className="space-y-3">
        {MOCK_DUTIES.map((duty) => (
          <Card
            key={duty.id}
            onClick={() => navigate(`/staff/duties/${duty.id}`)}
            className="p-5 bg-white border-slate-200 hover:border-teal-200 shadow-md rounded-3xl cursor-pointer transition-all space-y-3 relative overflow-hidden"
          >
            <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-mono font-bold text-brand-teal">{duty.bookingCode}</span>
              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {duty.status.replace('_', ' ')}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-black text-slate-900">{duty.serviceName}</h3>
              <p className="text-xs text-slate-500 font-medium">Patient: <strong className="text-slate-800">{duty.patientName}</strong> • Date: <strong className="text-slate-800">{duty.scheduledDate}</strong></p>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-bold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-brand-teal" /> {duty.scheduledStartTime} - {duty.scheduledEndTime}
              </span>
              <span className="font-extrabold text-brand-teal flex items-center gap-1">
                View Duty <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
