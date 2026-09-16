import React, { useState } from 'react';
import { Button } from '../../components/common/Button';

export const ProSchedulePage: React.FC = () => {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', date: 'Sept 21', status: 'available', slots: ['08:00 - 12:00', '14:00 - 18:00'] },
    { day: 'Tuesday', date: 'Sept 22', status: 'available', slots: ['08:00 - 20:00 (12h Shift)'] },
    { day: 'Wednesday', date: 'Sept 23', status: 'booked', slots: ['09:00 - 17:00 (Booked: Ramesh Sharma)'] },
    { day: 'Thursday', date: 'Sept 24', status: 'available', slots: ['08:00 - 16:00'] },
    { day: 'Friday', date: 'Sept 25', status: 'unavailable', slots: ['Off Day'] },
    { day: 'Saturday', date: 'Sept 26', status: 'available', slots: ['09:00 - 15:00'] },
    { day: 'Sunday', date: 'Sept 27', status: 'unavailable', slots: ['Off Day'] }
  ]);

  const toggleDayStatus = (index: number) => {
    const updated = [...schedule];
    if (updated[index].status === 'booked') return;
    updated[index].status = updated[index].status === 'available' ? 'unavailable' : 'available';
    setSchedule(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Availability & Shift Calendar</h1>
            <p className="text-slate-600 text-sm mt-1">Manage weekly availability slots and block off personal time</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-xl cursor-pointer">
            Save Weekly Availability
          </Button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 p-4 bg-white rounded-xl border border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Available for Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-700" />
            <span className="font-medium text-slate-700">Confirmed Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="font-medium text-slate-700">Blocked / Off</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                item.status === 'booked'
                  ? 'bg-teal-50 border-teal-300'
                  : item.status === 'available'
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-100 border-slate-200 opacity-75'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                    <h3 className="font-bold text-sm text-slate-900">{item.day}</h3>
                  </div>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.status === 'booked'
                        ? 'bg-teal-700'
                        : item.status === 'available'
                        ? 'bg-emerald-500'
                        : 'bg-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1 pt-2">
                  {item.slots.map((s, i) => (
                    <span
                      key={i}
                      className={`block text-[11px] p-1.5 rounded font-medium ${
                        item.status === 'booked'
                          ? 'bg-teal-700 text-white font-semibold'
                          : item.status === 'available'
                          ? 'bg-slate-100 text-slate-700'
                          : 'bg-slate-200 text-slate-500 line-through'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {item.status !== 'booked' && (
                <button
                  onClick={() => toggleDayStatus(index)}
                  className={`mt-4 w-full text-[11px] font-bold py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    item.status === 'available'
                      ? 'border-slate-300 text-slate-700 hover:bg-slate-50'
                      : 'border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100'
                  }`}
                >
                  {item.status === 'available' ? 'Block Day' : 'Mark Available'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
