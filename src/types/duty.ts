/**
 * Pulse n Care — Unified Duty Data Models
 * Abstracts both 1-on-1 Home Care visits and Hospital Facility shifts.
 * Source of Truth: p0_master_architecture_hardening_plan.md
 */

import type { Address } from './index';
import type { DutyStatus } from './staff';

export type DutySource = 'home_care' | 'facility';

export interface UnifiedDuty {
  id: string;
  dutyCode: string; // e.g., "DUT-2026-9912"
  source: DutySource;
  bookingId?: string;
  bookingCode?: string;
  organizationRequestId?: string;
  requestNumber?: string;
  requirementLineId?: string;
  rosterSlotId?: string;

  staffId: string;
  staffName: string;
  staffPhone: string;
  staffEmployeeId: string; // "PNC-EMP-XXXX"
  staffRole: string;

  clientOrOrgId: string;
  clientOrOrgName: string;
  contactPhone: string;

  patientName?: string;
  patientAge?: number;
  facilityDepartment?: string;

  serviceCategory: string;
  serviceName: string;

  scheduledStart: string; // ISO 8601 e.g. "2026-09-25T08:00:00Z"
  scheduledEnd: string;   // ISO 8601 e.g. "2026-09-25T20:00:00Z"
  durationHours: number;
  isOvernight: boolean;

  location: Address;
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
