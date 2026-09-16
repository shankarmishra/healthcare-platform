import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { BookingStatusBadge } from '../../components/common/Badge';
import { Calendar, MapPin, User, ChevronRight, Plus } from 'lucide-react';
import { clsx } from 'clsx';

export const MyBookingsPage: React.FC = () => {
  const { bookings } = useBookings();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredBookings = bookings.filter((b) => {
    if (filter === 'active') return ['REQUESTED', 'MATCHING', 'ASSIGNED', 'ACCEPTED', 'ON_THE_WAY', 'CHECKED_IN', 'IN_PROGRESS'].includes(b.status);
    if (filter === 'completed') return ['COMPLETED', 'CLOSED'].includes(b.status);
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Client Portal</span>
          <h1 className="text-3xl font-extrabold text-text-primary">My Care Bookings</h1>
        </div>
        <Link to="/client/search">
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Book New Care Service
          </Button>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-border-default pb-3">
        {[
          { id: 'all', label: `All (${bookings.length})` },
          { id: 'active', label: 'Active & Upcoming' },
          { id: 'completed', label: 'Completed' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={clsx(
              'px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer',
              filter === tab.id
                ? 'bg-brand-teal text-white shadow-xs'
                : 'bg-white text-text-secondary hover:bg-canvas-secondary border border-border-default'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Booking Cards List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <Card className="p-8 text-center text-text-muted">
            No bookings found for this filter.
          </Card>
        ) : (
          filteredBookings.map((bkg) => (
            <Card key={bkg.id} className="p-6 hover:border-brand-teal/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-text-muted">{bkg.bookingCode}</span>
                    <BookingStatusBadge status={bkg.status} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{bkg.serviceName}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-teal" /> {bkg.scheduledDate} ({bkg.scheduledTimeSlot})
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-teal" /> Patient: {bkg.patientProfile.firstName} {bkg.patientProfile.lastName}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-teal" /> {bkg.address.line1}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-border-light">
                  <div className="text-right">
                    <span className="text-xs text-text-muted block">Total Amount</span>
                    <span className="text-lg font-extrabold text-brand-teal">₹{bkg.priceBreakdown.totalPrice}</span>
                  </div>
                  <Link to={`/client/bookings/${bkg.id}`}>
                    <Button variant="outline" size="sm" rightIcon={<ChevronRight className="w-4 h-4" />}>
                      View Status & Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
