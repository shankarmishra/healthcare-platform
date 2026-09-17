import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { Save } from 'lucide-react';
import { MOCK_STAFF_PROFILES } from '../../data/mockStaffData';

export const StaffAvailabilityPage: React.FC = () => {
  const [schedule, setSchedule] = useState(MOCK_STAFF_PROFILES[0].weeklySchedule);
  const [isSaved, setIsSaved] = useState(false);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
        <div>
          <Badge variant="teal" size="sm">Shift Roster Rules</Badge>
          <h1 className="text-xl font-black text-slate-900 mt-1">Weekly Availability</h1>
          <p className="text-xs text-slate-500">Submit working hours for automated assignment conflict checking.</p>
        </div>
        <Button onClick={handleSave} className="bg-brand-teal text-white font-extrabold text-xs px-5 rounded-full shadow-sm">
          <Save className="w-3.5 h-3.5 mr-1" /> {isSaved ? 'Saved!' : 'Save Availability'}
        </Button>
      </div>

      <Card className="p-6 bg-white border-slate-200 shadow-md rounded-3xl space-y-4">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

        <div className="space-y-3">
          {schedule.map((item, idx) => (
            <div key={item.dayOfWeek} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.isAvailable}
                  onChange={e => {
                    const updated = [...schedule];
                    updated[idx].isAvailable = e.target.checked;
                    setSchedule(updated);
                  }}
                  className="w-4 h-4 rounded text-brand-teal focus:ring-brand-teal"
                />
                <span className="font-extrabold text-slate-900 w-24">{days[item.dayOfWeek]}</span>
              </div>

              {item.isAvailable ? (
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Hours:</span>
                  <span className="font-mono font-bold text-slate-900">{item.startTime} - {item.endTime}</span>
                </div>
              ) : (
                <span className="text-slate-400 font-bold">Unavailable / Off Day</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
