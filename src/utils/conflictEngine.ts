import type { ProfessionalProfile, Booking } from '../types';

export interface ConflictCheckResult {
  hasConflict: boolean;
  reason?: string;
  conflictingBookingCode?: string;
}

export function checkStaffConflict(
  pro: ProfessionalProfile,
  requestedDate: string,
  _timeSlot: string,
  existingBookings: Booking[]
): ConflictCheckResult {
  // 1. Leave status check
  if (pro.leaveStatus === 'on_leave' || pro.leaveStatus === 'sick_leave') {
    return {
      hasConflict: true,
      reason: `Staff member is currently marked as ${pro.leaveStatus.replace('_', ' ')}.`
    };
  }

  if (pro.leaves && pro.leaves.length > 0) {
    const isOnLeave = pro.leaves.some(
      (l) => l.status === 'approved' && requestedDate >= l.startDate && requestedDate <= l.endDate
    );
    if (isOnLeave) {
      return {
        hasConflict: true,
        reason: `Staff member has approved leave on ${requestedDate}.`
      };
    }
  }

  // 2. Shift overlap check among active bookings
  const activeStatuses = ['ASSIGNED', 'ACCEPTED', 'ON_THE_WAY', 'CHECKED_IN', 'IN_PROGRESS'];
  const conflictingBooking = existingBookings.find(
    (b) =>
      b.professionalId === pro.id &&
      b.scheduledDate === requestedDate &&
      activeStatuses.includes(b.status)
  );

  if (conflictingBooking) {
    return {
      hasConflict: true,
      reason: `Already assigned to ${conflictingBooking.bookingCode} (${conflictingBooking.scheduledTimeSlot || 'Active Shift'}).`,
      conflictingBookingCode: conflictingBooking.bookingCode
    };
  }

  return { hasConflict: false };
}
