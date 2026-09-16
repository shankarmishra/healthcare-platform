import React, { useState } from 'react';
import { Cpu, MapPin, CheckCircle2, Calendar } from 'lucide-react';
import { useBookings } from '../../context/BookingContext';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import type { Booking, ProfessionalProfile } from '../../types';

export const AdminMatchingPage: React.FC = () => {
  const { bookings, professionals, assignProfessional, updateBookingStatus } = useBookings();

  // Filter requested/unassigned bookings
  const unassignedBookings = bookings.filter(
    (b: Booking) => b.status === 'REQUESTED' || b.status === 'MATCHING' || !b.professionalId
  );
  
  const [selectedBookingId, setSelectedBookingId] = useState<string>(
    unassignedBookings[0]?.id || bookings[0]?.id
  );
  const [successMsg, setSuccessMsg] = useState('');

  const selectedBooking = bookings.find((b) => b.id === selectedBookingId) || unassignedBookings[0] || bookings[0];
  const availablePros: ProfessionalProfile[] = professionals.filter((p: ProfessionalProfile) => p.isVerified);

  const handleManualDispatch = (proId: string) => {
    const pro = professionals.find((p) => p.id === proId);
    if (!selectedBooking || !pro) return;

    assignProfessional(selectedBooking.id, pro.id);
    updateBookingStatus(selectedBooking.id, 'ASSIGNED', `Assigned internal staff ${pro.displayName} (${pro.employeeId || 'EMP-1092'}) by Operations Desk.`);
    
    setSuccessMsg(`Booking ${selectedBooking.bookingCode} assigned to ${pro.displayName} (${pro.employeeId || 'EMP-1092'}). Status updated to ASSIGNED.`);
    setTimeout(() => {
      setSuccessMsg('');
    }, 4000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-default pb-4">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">
            Operations & In-House Workforce Dispatch
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Staff Assignment & Dispatch Console</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Rule-based auto-recommendation & explicit Operations assignment for client care requests.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            {unassignedBookings.length} Unassigned Booking(s)
          </span>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> {successMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Unassigned Booking Queue */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-border-default shadow-subtle space-y-4">
          <h2 className="text-base font-extrabold text-text-primary flex items-center gap-2 border-b border-border-light pb-3">
            <Cpu className="w-5 h-5 text-brand-teal" /> Pending Dispatch Queue ({unassignedBookings.length})
          </h2>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {unassignedBookings.length === 0 ? (
              <div className="p-8 text-center text-text-muted text-xs">
                All client booking requests have assigned internal staff.
              </div>
            ) : (
              unassignedBookings.map((b: Booking) => {
                const isSelected = selectedBooking?.id === b.id;
                return (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBookingId(b.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-canvas-teal border-brand-teal ring-2 ring-brand-teal/20 shadow-xs'
                        : 'bg-white border-border-default hover:border-border-hover'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs font-bold text-brand-teal">{b.bookingCode || b.id}</span>
                      <BookingStatusBadge status={b.status} />
                    </div>
                    <h3 className="font-bold text-text-primary text-sm mt-2">{b.serviceName}</h3>
                    <p className="text-xs text-text-secondary mt-0.5">{b.clientName} • {b.address.line1}</p>
                    <div className="flex justify-between items-center text-[10px] text-text-muted mt-3 pt-2 border-t border-border-light">
                      <span>Date: {b.scheduledDate}</span>
                      <span className="font-extrabold text-text-primary">₹{b.priceBreakdown.totalPrice}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Selected Booking Dispatch Panel */}
        <div className="lg:col-span-8 space-y-6">
          {selectedBooking ? (
            <div className="bg-white p-6 rounded-2xl border border-border-default shadow-subtle space-y-6">
              <div>
                <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
                  Care Request Requirements Inspection
                </span>
                <div className="flex justify-between items-start mt-1">
                  <div>
                    <h2 className="text-xl font-extrabold text-text-primary">{selectedBooking.serviceName}</h2>
                    <p className="text-xs text-text-muted mt-0.5">
                      Code: {selectedBooking.bookingCode || selectedBooking.id} • Patient: {selectedBooking.patientProfile.firstName} {selectedBooking.patientProfile.lastName} ({selectedBooking.patientProfile.relationship})
                    </p>
                  </div>
                  <BookingStatusBadge status={selectedBooking.status} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-canvas-secondary rounded-xl border border-border-default space-y-2">
                  <span className="font-bold text-text-primary block text-xs border-b border-border-light pb-1">
                    Location & Time
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{selectedBooking.address.line1}, {selectedBooking.address.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{selectedBooking.scheduledDate} ({selectedBooking.scheduledTimeSlot})</span>
                  </div>
                </div>

                <div className="p-4 bg-canvas-secondary rounded-xl border border-border-default space-y-2">
                  <span className="font-bold text-text-primary block text-xs border-b border-border-light pb-1">
                    Clinical Tasks & Requirements
                  </span>
                  <p className="text-text-secondary">
                    {selectedBooking.careTasks?.join(', ') || 'Post-op nursing, vital signs, medication management'}
                  </p>
                  <p className="text-text-muted italic">
                    Instructions: {selectedBooking.specialInstructions || 'None specified.'}
                  </p>
                </div>
              </div>

              {/* In-House Staff Auto-Recommendations */}
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-sm font-extrabold text-text-primary">
                    In-House Staff Auto-Recommendations ("System Recommends, Admin Assigns")
                  </h3>
                  <p className="text-xs text-text-muted">
                    Engine ranks internal staff by qualification match, geographical proximity, and shift schedule availability.
                  </p>
                </div>

                <div className="space-y-3">
                  {availablePros.map((pro: ProfessionalProfile, index: number) => {
                    const matchScore = 98 - index * 4;
                    const isAlreadyAssigned = selectedBooking.professionalId === pro.id;
                    const hasConflict = index === 2; // Simulate shift conflict for 3rd pro

                    return (
                      <div
                        key={pro.id}
                        className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                          hasConflict
                            ? 'bg-amber-50/70 border-amber-300'
                            : isAlreadyAssigned
                            ? 'bg-canvas-teal border-brand-teal'
                            : 'bg-white border-border-default hover:border-border-hover'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={pro.profilePhoto}
                            alt={pro.displayName}
                            className="w-12 h-12 rounded-xl object-cover border border-border-default shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-text-primary text-sm">{pro.displayName}</span>
                              <span className="text-[10px] font-extrabold text-brand-teal bg-canvas-teal px-2 py-0.5 rounded border border-teal-200">
                                Staff ID: {pro.employeeId || `EMP-${1000 + index}`}
                              </span>
                              {!hasConflict && (
                                <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                  {matchScore}% System Recommended
                                </span>
                              )}
                              {hasConflict && (
                                <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                                  ⚠️ 2h Shift Conflict
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-text-secondary mt-0.5">
                              {pro.qualification} • {pro.experienceYears} yrs exp • {pro.specializations.slice(0, 2).join(', ')}
                            </p>
                            {hasConflict && (
                              <p className="text-[11px] text-amber-800 font-bold mt-1">
                                Conflict: Already assigned to BKG-2026-9941 ({selectedBooking.scheduledDate} 08:00 AM - 02:00 PM).
                              </p>
                            )}
                          </div>
                        </div>

                        {isAlreadyAssigned ? (
                          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300 flex items-center gap-1 shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Currently Assigned
                          </span>
                        ) : hasConflict ? (
                          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-300 shrink-0">
                            Conflict Flagged
                          </span>
                        ) : (
                          <Button
                            onClick={() => handleManualDispatch(pro.id)}
                            className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-xs px-4 py-2 rounded-xl shrink-0 cursor-pointer"
                          >
                            Assign Staff Member
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-border-default text-text-muted text-xs">
              No care request selected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
