import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface OrgStaffingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export const OrgStaffingRequestModal: React.FC<OrgStaffingRequestModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [department, setDepartment] = useState('ICU / Critical Care');
  const [requiredCount, setRequiredCount] = useState(4);
  const [shiftTiming, setShiftTiming] = useState('12h Night Shift (20:00 - 08:00)');
  const [startDate, setStartDate] = useState('2026-09-22');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSubmitSuccess) onSubmitSuccess();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Requisition Broadcasted!</h3>
            <p className="text-xs text-slate-600">Our operations command center is matching verified ICU nurses for Manipal Hospital.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">B2B Hospital Staffing</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">New Nursing Staff Requisition</h3>
              <p className="text-xs text-slate-500">Request verified GNM/B.Sc nurses for hospital ward coverage</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Ward / Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>ICU / Critical Care</option>
                <option>Emergency & Trauma</option>
                <option>General Surgical Ward</option>
                <option>Pediatrics & NICU</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nurses Required</label>
                <input
                  type="number"
                  value={requiredCount}
                  onChange={(e) => setRequiredCount(Number(e.target.value))}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 font-bold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 font-medium"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Shift Timing Schedule</label>
              <select
                value={shiftTiming}
                onChange={(e) => setShiftTiming(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>12h Night Shift (20:00 - 08:00)</option>
                <option>12h Day Shift (08:00 - 20:00)</option>
                <option>8h Morning Shift (07:00 - 15:00)</option>
                <option>8h Evening Shift (15:00 - 23:00)</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl cursor-pointer">
              Submit Staff Requisition
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
