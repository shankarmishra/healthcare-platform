import React, { useState, useEffect } from 'react';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Clock, MapPin, CheckCircle2, XCircle } from 'lucide-react';

export const ProJobsPage: React.FC = () => {
  const { bookings, updateBookingStatus } = useBookings();
  const [timeLeft, setTimeLeft] = useState(45);

  const jobOffers = bookings.filter((b) => b.status === 'ASSIGNED' || b.status === 'REQUESTED');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-left">
      <div>
        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Professional Portal</span>
        <h1 className="text-3xl font-extrabold text-text-primary">Incoming Job Requests</h1>
        <p className="text-xs text-text-muted mt-1">Accept or decline visit requests within the 45-second timer.</p>
      </div>

      <div className="space-y-4">
        {jobOffers.length === 0 ? (
          <Card className="p-8 text-center text-text-muted">
            No active job requests at this moment. Stay online to receive notifications.
          </Card>
        ) : (
          jobOffers.map((job) => (
            <Card key={job.id} className="p-6 border-l-4 border-l-amber-500 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Clock className="w-3.5 h-3.5 animate-spin" />
                  <span>Offer Expires in {timeLeft}s</span>
                </div>
                <span className="text-xs font-mono font-bold text-text-muted">{job.bookingCode}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-text-primary">{job.serviceName}</h3>
                  <p className="text-text-muted">Patient: {job.patientProfile.firstName} {job.patientProfile.lastName}</p>
                  <div className="flex items-center gap-1 text-text-muted mt-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>{job.address.line1}, {job.address.city}</span>
                  </div>
                </div>

                <div className="bg-canvas-secondary p-4 rounded-xl border border-border-default space-y-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-bold">
                    <span>Earning for visit:</span>
                    <span className="text-brand-teal text-base">₹{job.priceBreakdown.professionalEarning}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="danger"
                      size="sm"
                      className="w-1/2"
                      leftIcon={<XCircle className="w-4 h-4" />}
                      onClick={() => updateBookingStatus(job.id, 'REJECTED')}
                    >
                      Decline
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-1/2"
                      leftIcon={<CheckCircle2 className="w-4 h-4" />}
                      onClick={() => updateBookingStatus(job.id, 'ACCEPTED')}
                    >
                      Accept Job
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
