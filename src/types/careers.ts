/**
 * Pulse n Care — Careers & HR Hiring Pipeline Data Models
 * Source of Truth: p0_3_panel_platform_architecture_plan.md
 */

export type JobEmploymentType = 'full_time' | 'part_time' | 'contract';

export interface JobPosting {
  id: string;
  jobCode: string; // e.g., "JOB-ICU-01"
  title: string;
  roleCategory: 'registered_nurse' | 'icu_nurse' | 'physiotherapist' | 'caregiver_attendant' | 'general_physician';
  employmentType: JobEmploymentType;
  location: string; // e.g. "Delhi NCR (Gurugram / South Delhi)"
  experienceRequired: string; // e.g. "2 - 5 Years"
  qualifications: string[];
  salaryRange: string; // e.g. "₹28,000 - ₹42,000 / month"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
  applicantCount: number;
  postedAt: string;
}

export type CandidateApplicationStatus =
  | 'applied'
  | 'screening'
  | 'interview_scheduled'
  | 'documents_pending'
  | 'background_check'
  | 'offered'
  | 'converted_to_staff'
  | 'rejected';

export interface JobApplication {
  id: string;
  applicationNumber: string; // e.g. "APP-2026-091"
  jobId: string;
  jobTitle: string;
  jobCode: string;
  fullName: string;
  email: string;
  phone: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  qualification: string;
  experienceYears: number;
  currentOrganization?: string;
  noticePeriodDays?: number;
  resumeUrl?: string;
  resumeFileName?: string;
  status: CandidateApplicationStatus;
  adminNotes?: string;
  interviewScheduledAt?: string;
  convertedStaffId?: string; // Links to StaffProfile ID once converted
  appliedAt: string;
  updatedAt: string;
}
