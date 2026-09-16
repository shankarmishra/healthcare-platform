import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import type { ProfessionalProfile } from '../../types';

export const AdminBookingsPage: React.FC = () => {
  const { bookings, professionals, assignProfessional } = useBookings();
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const [reassignModalOpen, setReassignModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const selectedBooking = bookings.find((b) => b.id === selectedBookingId);

  const filteredBookings = statusFilter === 'all'
    ? bookings
    : bookings.filter((b) => b.status === statusFilter);

  const handleReassign = (pro: ProfessionalProfile) => {
    if (!selectedBookingId) return;
    assignProfessional(selectedBookingId, pro.id);
    setReassignModalOpen(false);
  };

  return (
    <div className="space-y-6 text-left max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Live Dispatch & Operations</span>
          <h1 className="text-3xl font-extrabold text-text-primary">All Platform Bookings</h1>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 px-3 text-xs bg-white border border-border-default rounded-lg focus:outline-none focus:border-brand-teal font-semibold"
          >
            <option value="all">Filter by All 14 States</option>
            <option value="REQUESTED">REQUESTED</option>
            <option value="MATCHING">MATCHING</option>
            <option value="ASSIGNED">ASSIGNED</option>
            <option value="ACCEPTED">ACCEPTED</option>
            <option value="ON_THE_WAY">ON_THE_WAY</option>
            <option value="CHECKED_IN">CHECKED_IN</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="PAYMENT_PENDING">PAYMENT_PENDING</option>
            <option value="CLOSED">CLOSED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-canvas-secondary uppercase text-[10px] font-extrabold text-text-muted border-b border-border-default">
              <tr>
                <th className="p-3">Booking Code</th>
                <th className="p-3">Client</th>
                <th className="p-3">Patient</th>
                <th className="p-3">Service</th>
                <th className="p-3">Assigned Pro</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {filteredBookings.map((bkg) => (
                <tr key={bkg.id} className="hover:bg-canvas-secondary/50 transition-colors">
                  <td className="p-3 font-mono font-bold text-brand-teal">{bkg.bookingCode}</td>
                  <td className="p-3 font-bold text-text-primary">{bkg.clientName}</td>
                  <td className="p-3">{bkg.patientProfile.firstName} {bkg.patientProfile.lastName}</td>
                  <td className="p-3 font-medium text-text-primary">{bkg.serviceName}</td>
                  <td className="p-3 font-medium text-text-secondary">{bkg.professionalName || 'Unassigned'}</td>
                  <td className="p-3"><BookingStatusBadge status={bkg.status} /></td>
                  <td className="p-3 font-bold text-text-primary">₹{bkg.priceBreakdown.totalPrice}</td>
                  <td className="p-3 text-right space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedBookingId(bkg.id);
                        setReassignModalOpen(true);
                      }}
                    >
                      Reassign
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Manual Reassignment Modal */}
      <Modal
        isOpen={reassignModalOpen}
        onClose={() => setReassignModalOpen(false)}
        title="Manual Matching Override & Reassignment"
        subtitle={`Select a verified professional to assign to ${selectedBooking?.bookingCode}`}
      >
        <div className="space-y-4">
          <p className="text-xs text-text-muted">
            Matching conditions check: Service eligibility, verification status, service radius (15km), availability slot.
          </p>

          <div className="space-y-2 max-h-80 overflow-y-auto">
            {professionals.filter((p) => p.isVerified).map((pro) => (
              <div
                key={pro.id}
                className="p-3 border border-border-default rounded-xl flex items-center justify-between hover:bg-canvas-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src={pro.profilePhoto} alt={pro.displayName} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-xs text-text-primary">{pro.displayName}</h5>
                    <p className="text-[11px] text-text-muted">{pro.qualification} • ₹{pro.hourlyRate}/hr</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleReassign(pro)}>
                  Assign Pro
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
