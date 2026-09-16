import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import { BookingStatusTimeline } from '../../components/domain/BookingStatusTimeline';
import { ProfessionalCard } from '../../components/domain/ProfessionalCard';
import { ArrowLeft, PhoneCall, MessageSquare, ShieldCheck, FileText, Calendar, MapPin } from 'lucide-react';

export const BookingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { bookings, getProfessionalById } = useBookings();

  const booking = bookings.find((b) => b.id === id) || bookings[0];
  const assignedPro = booking.professionalId ? getProfessionalById(booking.professionalId) : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border-default pb-4">
        <div className="flex items-center gap-3">
          <Link to="/client/bookings">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-text-primary">{booking.serviceName}</h1>
              <BookingStatusBadge status={booking.status} />
            </div>
            <p className="text-xs text-text-muted mt-0.5 font-mono">Booking Code: {booking.bookingCode}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" leftIcon={<MessageSquare className="w-4 h-4" />}>
            Support Desk
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 14-State Timeline & Visit Progress */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6">
            <h3 className="text-base font-bold text-text-primary mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-teal" /> Care Visit Tracking
            </h3>
            <BookingStatusTimeline currentStatus={booking.status} history={booking.statusHistory} />
          </Card>

          {/* Special Instructions & Patient Notes */}
          <Card className="p-6 space-y-3">
            <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-teal" /> Patient & Medical Context
            </h4>
            <div className="text-xs text-text-secondary space-y-1 bg-canvas-secondary p-3 rounded-lg border border-border-default">
              <p><strong>Patient:</strong> {booking.patientProfile.firstName} {booking.patientProfile.lastName} ({booking.patientProfile.relationship})</p>
              <p><strong>Care Notes:</strong> {booking.specialInstructions || 'Standard clinical visit'}</p>
            </div>
          </Card>
        </div>

        {/* Right Column: Assigned Professional & Pricing */}
        <div className="lg:col-span-5 space-y-6">
          {/* Assigned Professional */}
          {assignedPro && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider">Assigned Professional</h4>
              <ProfessionalCard professional={assignedPro} />
              <div className="flex items-center gap-2 pt-2">
                <Button variant="secondary" size="sm" className="w-full" leftIcon={<PhoneCall className="w-4 h-4 text-brand-teal" />}>
                  Call Professional
                </Button>
              </div>
            </div>
          )}

          {/* Booking Location & Time */}
          <Card className="p-6 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-text-primary border-b border-border-light pb-2">Schedule & Location</h4>
            <div className="space-y-2 text-text-secondary">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal shrink-0" />
                <span>{booking.scheduledDate} ({booking.scheduledTimeSlot})</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>{booking.address.line1}, {booking.address.city} - {booking.address.pincode}</span>
              </div>
            </div>
          </Card>

          {/* Pricing Ledger */}
          <Card className="p-6 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-text-primary border-b border-border-light pb-2">Payment Receipt</h4>
            <div className="flex justify-between text-text-secondary">
              <span>Service Base</span>
              <span>₹{booking.priceBreakdown.serviceBasePrice}</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>GST (18%)</span>
              <span>₹{booking.priceBreakdown.taxesAndFees}</span>
            </div>
            <div className="pt-2 border-t border-border-light flex justify-between text-sm font-extrabold text-text-primary">
              <span>Total Paid</span>
              <span className="text-brand-teal">₹{booking.priceBreakdown.totalPrice}</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
