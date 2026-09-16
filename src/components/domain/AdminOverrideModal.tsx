import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, X } from 'lucide-react';
import { Button } from '../common/Button';
import type { Booking, ProfessionalProfile } from '../../types';

interface AdminOverrideModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  professional: ProfessionalProfile | null;
  conflictReason: string;
  onConfirmOverride: (rationale: string) => void;
}

export const AdminOverrideModal: React.FC<AdminOverrideModalProps> = ({
  isOpen,
  onClose,
  booking,
  professional,
  conflictReason,
  onConfirmOverride
}) => {
  const [rationale, setRationale] = useState('');
  const [error, setError] = useState('');

  if (!isOpen || !booking || !professional) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rationale.trim() || rationale.trim().length < 10) {
      setError('Please provide a valid operational rationale (minimum 10 characters).');
      return;
    }
    setError('');
    onConfirmOverride(rationale);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-amber-300 shadow-2xl overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200 block">
                Super Admin Security Override
              </span>
              <h2 className="text-lg font-extrabold text-white">Force Shift Conflict Assignment</h2>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Conflict Alert Box */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Conflict Detected For {professional.displayName} ({professional.employeeId || 'EMP-Staff'})</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              {conflictReason || `Staff member has an overlapping shift or leave status on ${booking.scheduledDate}.`}
            </p>
          </div>

          <div className="text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">Booking Target:</p>
            <p>
              Code: <span className="font-mono font-bold text-brand-teal">{booking.bookingCode}</span> • Service: {booking.serviceName}
            </p>
          </div>

          {/* Mandatory Rationale Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
              Mandatory Operational Rationale <span className="text-rose-600">*</span>
            </label>
            <textarea
              rows={3}
              required
              value={rationale}
              onChange={(e) => {
                setRationale(e.target.value);
                if (error) setError('');
              }}
              placeholder="Explain why this double-booking or override is required (e.g. Surge relief shift, verbal clearance by supervisor)..."
              className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:border-amber-600 focus:bg-white focus:outline-none"
            />
            {error && <p className="text-[11px] font-bold text-rose-600">{error}</p>}
            <p className="text-[10px] text-slate-500 italic">
              Note: This action will be logged permanently in the system Audit Log with your Super Admin ID.
            </p>
          </div>

          {/* Modal Actions */}
          <div className="flex justify-end gap-3 pt-2 border-t border-slate-200">
            <Button type="button" variant="outline" onClick={onClose} className="font-bold text-xs">
              Cancel
            </Button>
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs px-4">
              Confirm Forced Override
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
