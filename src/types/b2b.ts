/**
 * Pulse n Care — B2B Institutional Staffing Data Models
 * Source of Truth: p0_3_panel_platform_architecture_plan.md
 */

export type B2BOrganizationType =
  | 'hospital'
  | 'clinic'
  | 'rehab_center'
  | 'nursing_home'
  | 'corporate_wellness';

export type StaffingShiftType = '12h_day' | '12h_night' | '24h_rotational' | '8h_general';

export interface StaffingRequirementLine {
  id: string;
  roleCategory: 'registered_nurse' | 'icu_nurse' | 'physiotherapist' | 'caregiver_attendant' | 'general_physician';
  roleCategoryTitle: string; // Human readable title e.g. "ICU Registered Nurse"
  requiredCount: number;
  assignedCount: number;
  shiftType: StaffingShiftType;
  requiredQualifications: string[];
  genderPreference?: 'female' | 'male' | 'no_preference';
  agreedDailyRate: number; // INR (₹)
}

export interface OrganizationFacilityLocation {
  facilityName: string;
  department: string; // e.g., "ICU Ward 3", "Emergency Care Unit"
  address: string;
  city: string;
  pincode: string;
  contactPersonName: string;
  contactPersonPhone: string;
}

export interface OrganizationContactPerson {
  name: string;
  designation: string; // e.g. "Nursing Superintendent", "Medical Director"
  phone: string;
  email: string;
}

export type B2BRequestStatus =
  | 'draft'
  | 'submitted'
  | 'under_review'
  | 'partially_fulfilled'
  | 'fulfilled'
  | 'completed'
  | 'cancelled';

export interface OrganizationStaffingRequest {
  id: string;
  requestNumber: string; // e.g., "PNC-B2B-2026-041"
  organizationId: string;
  organizationName: string;
  organizationType: B2BOrganizationType;
  facilityLocation: OrganizationFacilityLocation;
  contactPerson: OrganizationContactPerson;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  totalDays: number;
  requirements: StaffingRequirementLine[];
  totalStaffRequired: number;
  totalStaffAssigned: number;
  contractType: 'per_shift' | 'monthly_retainer' | 'emergency_deployment';
  estimatedContractValue: number; // INR (₹)
  status: B2BRequestStatus;
  specialRequirements?: string;
  createdAt: string;
  updatedAt: string;
}

export type RosterSlotStatus =
  | 'unassigned'
  | 'assigned'
  | 'acknowledged'
  | 'in_progress'
  | 'completed'
  | 'absent'
  | 'replaced';

export interface FacilityShiftRosterSlot {
  id: string;
  requestId: string;
  requestNumber: string;
  requirementLineId: string;
  organizationId: string;
  organizationName: string;
  department: string;
  date: string; // YYYY-MM-DD
  shiftType: StaffingShiftType;
  startTime: string; // "08:00"
  endTime: string;   // "20:00"
  assignedStaffId?: string;
  assignedStaffName?: string;
  assignedStaffPhone?: string;
  assignedStaffEmployeeId?: string; // "PNC-EMP-XXXX"
  assignedStaffRole?: string;
  status: RosterSlotStatus;
  dailyRate: number;
  createdAt: string;
}

export type TimesheetStatus =
  | 'submitted'
  | 'approved_by_facility'
  | 'rejected'
  | 'processed_for_payroll';

export interface FacilityTimesheet {
  id: string;
  timesheetNumber: string; // e.g. "TS-2026-8812"
  organizationId: string;
  organizationName: string;
  requestId: string;
  requestNumber: string;
  rosterSlotId: string;
  staffId: string;
  staffName: string;
  staffEmployeeId: string; // "PNC-EMP-XXXX"
  staffRole: string;
  department: string;
  shiftDate: string;
  shiftType: StaffingShiftType;
  clockInTime?: string;
  clockOutTime?: string;
  hoursWorked: number;
  breakDurationMins: number;
  supervisorName?: string;
  supervisorSignatureStatus: 'pending' | 'signed' | 'disputed';
  approvalStatus: TimesheetStatus;
  rejectionReason?: string;
  dailyPayoutAmount: number;
  submittedAt: string;
  approvedAt?: string;
}

export interface ClarificationPrompt {
  id: string;
  requestId: string;
  question: string;
  askedBy: string;
  askedAt: string;
  answer?: string;
  answeredAt?: string;
  status: 'pending_response' | 'resolved';
}

export interface B2BSupportTicket {
  id: string;
  ticketNumber: string;
  organizationId: string;
  category: 'staffing' | 'roster' | 'timesheet' | 'billing' | 'facility' | 'urgent_issue' | 'other';
  subject: string;
  description: string;
  status: 'open' | 'in_progress' | 'waiting_for_org' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}
