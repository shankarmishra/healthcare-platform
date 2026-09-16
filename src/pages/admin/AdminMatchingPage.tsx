import React, { useState } from 'react';
import { Cpu, MapPin, CheckCircle2 } from 'lucide-react';
import { MOCK_BOOKINGS, MOCK_PROFESSIONALS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import type { Booking, ProfessionalProfile } from '../../types';

export const AdminMatchingPage: React.FC = () => {
  const [unassignedBookings, setUnassignedBookings] = useState<Booking[]>(
    MOCK_BOOKINGS.filter((b: Booking) => b.status === 'REQUESTED' || b.status === 'MATCHING' || !b.professionalId)
  );
  const [selectedBooking, setSelectedBooking] = useState<Booking>(unassignedBookings[0] || MOCK_BOOKINGS[0]);
  const [successMsg, setSuccessMsg] = useState('');

  const availablePros: ProfessionalProfile[] = MOCK_PROFESSIONALS.filter((p: ProfessionalProfile) => p.isVerified);

  const handleManualDispatch = (proId: string) => {
    setSuccessMsg(`Booking #${selectedBooking.id} assigned manually to ${MOCK_PROFESSIONALS.find((p: ProfessionalProfile) => p.id === proId)?.displayName}`);
    setTimeout(() => {
      setSuccessMsg('');
      setUnassignedBookings(unassignedBookings.filter((b: Booking) => b.id !== selectedBooking.id));
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Matching & Manual Dispatch Console</h1>
        <p className="text-slate-600 text-xs mt-1">Algorithmic professional assignment engine for unallocated patient care requests</p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" /> {successMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Unassigned Booking Queue */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-600" /> Dispatch Queue ({unassignedBookings.length})
          </h2>

          <div className="space-y-3">
            {unassignedBookings.map((b: Booking) => (
              <div
                key={b.id}
                onClick={() => setSelectedBooking(b)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedBooking?.id === b.id
                    ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold text-teal-800">{b.id}</span>
                  <BookingStatusBadge status={b.status} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mt-2">{b.serviceName}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{b.clientName} • {b.address.line1}</p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-100">
                  <span>Scheduled: {b.scheduledDate} ({b.scheduledTimeSlot})</span>
                  <span className="font-bold text-slate-800">₹{b.priceBreakdown.totalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Booking Matching Algorithm Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedBooking ? (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">Care Request Details</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedBooking.serviceName}</h2>
                <p className="text-xs text-slate-500 mt-0.5">Booking #{selectedBooking.id} • Patient: {selectedBooking.patientProfile.firstName} {selectedBooking.patientProfile.lastName}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs text-slate-700 border border-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="font-semibold">Care Location:</span> {selectedBooking.address.line1}, {selectedBooking.address.city}
                </div>
                <div>
                  <span className="font-semibold">Special Instructions:</span> {selectedBooking.specialInstructions || 'Standard home care procedures required.'}
                </div>
              </div>

              {/* Recommended Pros */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Top Algorithmic Matches (Distance + Qualification Score)</h3>
                <div className="space-y-3">
                  {availablePros.map((pro: ProfessionalProfile, index: number) => (
                    <div key={pro.id} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img src={pro.profilePhoto} alt={pro.displayName} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{pro.displayName}</span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {98 - index * 4}% Match Score
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">{pro.qualification} • {pro.serviceRadius} km coverage • ₹{pro.hourlyRate}/hr</p>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleManualDispatch(pro.id)}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2 rounded-xl shrink-0 cursor-pointer"
                      >
                        Dispatch Professional
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
              No unassigned bookings requiring dispatch.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
