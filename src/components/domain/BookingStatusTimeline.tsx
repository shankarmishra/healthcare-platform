import React from 'react';
import type { BookingStatus, BookingStatusHistory } from '../../types';
import { CheckCircle2, Clock, MapPin, Activity, UserCheck, Navigation, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

export interface BookingStatusTimelineProps {
  currentStatus: BookingStatus;
  history: BookingStatusHistory[];
}

export const BookingStatusTimeline: React.FC<BookingStatusTimelineProps> = ({
  currentStatus,
  history
}) => {
  const steps: { status: BookingStatus; label: string; icon: React.ReactNode }[] = [
    { status: 'REQUESTED', label: 'Requested', icon: <Clock className="w-4 h-4" /> },
    { status: 'MATCHING', label: 'Matching', icon: <Activity className="w-4 h-4" /> },
    { status: 'ACCEPTED', label: 'Accepted', icon: <UserCheck className="w-4 h-4" /> },
    { status: 'ON_THE_WAY', label: 'On The Way', icon: <Navigation className="w-4 h-4" /> },
    { status: 'CHECKED_IN', label: 'Checked In', icon: <MapPin className="w-4 h-4" /> },
    { status: 'IN_PROGRESS', label: 'Care In Progress', icon: <Activity className="w-4 h-4" /> },
    { status: 'COMPLETED', label: 'Completed', icon: <CheckCircle2 className="w-4 h-4" /> }
  ];

  const getStepState = (status: BookingStatus) => {
    const statusOrder: BookingStatus[] = [
      'DRAFT',
      'REQUESTED',
      'MATCHING',
      'ASSIGNED',
      'ACCEPTED',
      'ON_THE_WAY',
      'CHECKED_IN',
      'IN_PROGRESS',
      'COMPLETED',
      'PAYMENT_PENDING',
      'CLOSED'
    ];

    const currentIndex = statusOrder.indexOf(currentStatus);
    const stepIndex = statusOrder.indexOf(status);

    if (currentStatus === 'CANCELLED' || currentStatus === 'REJECTED') return 'cancelled';
    if (currentStatus === 'DISPUTED') return 'disputed';
    if (currentIndex === stepIndex) return 'current';
    if (currentIndex > stepIndex) return 'completed';
    return 'upcoming';
  };

  return (
    <div className="space-y-6">
      {/* Current Status Banner */}
      <div className="bg-canvas-teal border border-teal-200 rounded-card p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider block">Current Booking Status</span>
            <h3 className="text-lg font-bold text-text-primary">{currentStatus.replace(/_/g, ' ')}</h3>
          </div>
        </div>
        <span className="text-xs bg-white text-text-secondary px-3 py-1 rounded-full border border-border-default font-semibold">
          {history.length > 0 ? new Date(history[history.length - 1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
        </span>
      </div>

      {/* Stepper Timeline */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border-default">
        {steps.map((step) => {
          const state = getStepState(step.status);
          const historyEntry = history.find((h) => h.status === step.status);

          return (
            <div key={step.status} className="relative flex items-start gap-4">
              {/* Dot Icon */}
              <div
                className={clsx(
                  'absolute -left-6 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ring-4 ring-white',
                  state === 'completed' && 'bg-brand-teal text-white',
                  state === 'current' && 'bg-brand-teal text-white animate-pulse',
                  state === 'upcoming' && 'bg-canvas-tertiary text-text-muted border border-border-default',
                  state === 'cancelled' && 'bg-status-danger text-white'
                )}
              >
                {state === 'completed' ? <CheckCircle2 className="w-3.5 h-3.5" /> : step.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5
                    className={clsx(
                      'text-sm font-bold',
                      state === 'current' && 'text-brand-teal',
                      state === 'completed' && 'text-text-primary',
                      state === 'upcoming' && 'text-text-muted'
                    )}
                  >
                    {step.label}
                  </h5>
                  {historyEntry && (
                    <span className="text-xs text-text-muted">
                      {new Date(historyEntry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
                {historyEntry?.note && (
                  <p className="text-xs text-text-muted mt-1 bg-canvas-secondary p-2 rounded-md">
                    {historyEntry.note}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
