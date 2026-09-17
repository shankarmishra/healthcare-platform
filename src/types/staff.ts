/**
 * Pulse n Care — Staff & Care Operations Command Center Data Models
 * Source of Truth: docs/10-Data-Model.md & Staff Master Spec
 */

import type { Address, EmergencyContact } from './index';

export type StaffRoleCategory =
  | 'registered_nurse'
  | 'icu_nurse'
  | 'physiotherapist'
  | 'caregiver_attendant'
  | 'general_physician';

export type StaffEmploymentStatus =
  | 'active'
  | 'onboarding'
  | 'on_leave'
  | 'suspended'
  | 'archived';

export type StaffVerificationStatus =
  | 'pending'
  | 'in_review'
  | 'verified'
  | 'rejected';

export type StaffAccountStatus =
  | 'pending_invite'
  | 'active'
  | 'password_reset_required'
  | 'locked'
  | 'disabled';

export interface StaffAccount {
  id: string;
  staffId: string;
  loginEmail: string;
  employeeId: string; // e.g., "PNC-EMP-0042" (Immutable)
  accountStatus: StaffAccountStatus;
  firstLoginRequired: boolean;
  lastLoginAt?: string;
  passwordChangedAt?: string;
}

export interface StaffEducation {
  id: string;
  qualification: string; // e.g., "B.Sc Nursing", "BPT"
  specialization?: string;
  institution: string;
  boardOrUniversity?: string;
  startYear?: number;
  completionYear: number;
  certificateUrl?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface StaffExperience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  responsibilities: string;
  careCategory?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface StaffDocument {
  id: string;
  staffId: string;
  type:
    | 'nursing_license'
    | 'degree_certificate'
    | 'identity_proof'
    | 'background_check'
    | 'experience_letter'
    | 'address_proof';
  documentNumber: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  expiresAt?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
}

export interface StaffLeave {
  id: string;
  staffId: string;
  staffName: string;
  type: 'casual' | 'sick' | 'annual' | 'emergency';
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  affectedDutiesCount?: number;
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface StaffWeeklyAvailability {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  startTime: string; // "08:00"
  endTime: string;   // "20:00"
  isAvailable: boolean;
}

export interface StaffShiftEligibility {
  canDo12HourDay: boolean;
  canDo12HourNight: boolean;
  canDo24HourShift: boolean;
  canDoB2BHospitalRoster: boolean;
}

export interface StaffProfile {
  id: string;
  userId: string;
  employeeId: string; // "PNC-EMP-XXXX"
  photoUrl?: string;
  fullName: string;
  displayName: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  phone: string;
  alternatePhone?: string;
  email: string;
  residentialAddress: Address;
  emergencyContact: EmergencyContact;

  // Professional Classification
  roleCategory: StaffRoleCategory;
  primaryServiceId: string;
  eligibleServiceIds: string[];
  skills: string[];
  specializations: string[];
  totalExperienceYears: number;
  languages: string[];

  // Geographic & Shift Eligibility
  eligibleCities: string[]; // ['Delhi', 'Noida', 'Gurugram', 'Faridabad']
  eligibleLocalities: string[];
  eligiblePincodes: string[];
  shiftEligibility: StaffShiftEligibility;

  // Schedule & Availability
  weeklySchedule: StaffWeeklyAvailability[];

  // Operational Verification & Status
  employmentStatus: StaffEmploymentStatus;
  verificationStatus: StaffVerificationStatus;
  onboardingCompletionPercent: number; // 0 - 100%

  // Repeating Sub-models
  education: StaffEducation[];
  experience: StaffExperience[];
  documents: StaffDocument[];

  // Performance Metrics (Admin internal)
  completedDutyCount: number;
  averageRating: number;
  reviewCount: number;

  // Confidential Admin Notes
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// Duty State Machine
export type DutyStatus =
  | 'UNASSIGNED'
  | 'ASSIGNED'
  | 'ACKNOWLEDGED'
  | 'TRAVELLING'
  | 'ARRIVED'
  | 'IN_CARE'
  | 'COMPLETED'
  | 'DECLINED'
  | 'CANCELLED'
  | 'REASSIGNED';

export interface Duty {
  id: string;
  bookingId: string;
  bookingCode: string;
  staffId: string;
  staffName: string;
  staffPhone: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  patientName: string;
  patientAge?: number;
  serviceCategory: string;
  serviceName: string;
  scheduledDate: string;      // YYYY-MM-DD
  scheduledStartTime: string; // "10:00 AM" or "22:00"
  scheduledEndTime: string;   // "10:00 AM" (overnight)
  durationHours: number;
  address: Address;
  careInstructions: string[];
  vitalsRequired: boolean;
  status: DutyStatus;
  statusHistory: { status: DutyStatus; timestamp: string; note?: string }[];
  travelStartedAt?: string;
  arrivedAt?: string;
  careStartedAt?: string;
  careCompletedAt?: string;
  travelDistanceKm?: number;
  estimatedTravelMins?: number;
  assignedAt: string;
}

export interface CommunicationLog {
  id: string;
  timestamp: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  recipientId: string;
  recipientName: string;
  recipientRole: string;
  channel: 'call' | 'sms' | 'whatsapp' | 'in_app';
  subject: string;
  status: 'initiated' | 'delivered' | 'failed';
}
