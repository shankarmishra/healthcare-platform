# Data Model & TypeScript Interface Specification

This document defines complete TypeScript interfaces for all entities referenced in the Healthcare Staffing & Home Care Platform PRD. These interfaces serve as the foundation for `src/types/index.ts`.

> **BUSINESS RULE**: Production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, employment classification and local regulatory requirements require separate validation.
> **ASSUMPTION**: No escrow, GPS live tracking, specific medical procedures, specific pricing, real payment gateway, exact payout mechanics, specific legal claims, or production regulatory compliance should be stated as confirmed features.

---

## 1. Core Entities

### 1.1 User

```typescript
export type UserRole = 'client' | 'professional' | 'admin' | 'organization' | 'super_admin';

/**
 * Represents a registered user in the system.
 */
export interface User {
  /** PUBLIC */
  id: string;
  /** SENSITIVE: Email is PII */
  email: string;
  /** SENSITIVE: Phone is PII */
  phone: string;
  /** PUBLIC */
  firstName: string;
  /** PUBLIC */
  lastName: string;
  /** ROLE_RESTRICTED */
  role: UserRole;
  /** PUBLIC */
  avatar?: string;
  /** INTERNAL */
  isActive: boolean;
  /** INTERNAL */
  isEmailVerified: boolean;
  /** INTERNAL */
  isPhoneVerified: boolean;
  /** INTERNAL */
  createdAt: string; // ISO 8601
  /** INTERNAL */
  updatedAt: string;
  /** INTERNAL */
  lastLoginAt?: string;
}
```

### 1.2 Client Profile

```typescript
/**
 * Profile extension for users with the 'client' role.
 */
export interface ClientProfile {
  /** PUBLIC */
  id: string;
  /** PUBLIC */
  userId: string;
  /** SENSITIVE: Home addresses */
  addresses: Address[];
  /** ROLE_RESTRICTED: Only visible to assigned professionals and admins */
  patients: PatientProfile[];
  /** PUBLIC */
  preferredLanguages: string[];
  /** SENSITIVE */
  emergencyContact?: EmergencyContact;
  /** INTERNAL */
  bookingCount: number;
  /** INTERNAL */
  createdAt: string;
}
```

### 1.3 Patient Profile

Note: Patient is the care recipient, who may or may not be the client themselves.

```typescript
/**
 * Profile of the care recipient.
 */
export interface PatientProfile {
  /** INTERNAL */
  id: string;
  /** INTERNAL */
  clientId: string;
  /** ROLE_RESTRICTED */
  firstName: string;
  /** ROLE_RESTRICTED */
  lastName: string;
  /** ROLE_RESTRICTED */
  relationship: 'self' | 'parent' | 'spouse' | 'child' | 'sibling' | 'other';
  /** SENSITIVE */
  dateOfBirth: string;
  /** SENSITIVE */
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  /** SENSITIVE: Only visible to assigned professional and admin */
  medicalNotes?: string; 
  /** ROLE_RESTRICTED */
  mobilityStatus?: 'independent' | 'assisted' | 'wheelchair' | 'bedridden';
  /** SENSITIVE */
  allergies?: string[];
  /** SENSITIVE */
  currentMedications?: string[];
  /** INTERNAL */
  createdAt: string;
}
```

### 1.4 Professional Profile

```typescript
export type ProfessionalStatus = 'pending_verification' | 'verified' | 'active' | 'offline' | 'busy' | 'suspended' | 'deactivated';

/**
 * Profile extension for users with the 'professional' role.
 */
export interface ProfessionalProfile {
  /** PUBLIC */
  id: string;
  /** INTERNAL */
  userId: string;
  /** PUBLIC */
  displayName: string;
  /** PUBLIC */
  bio: string;
  /** PUBLIC: e.g., BSN, RN, DPT, MBBS */
  qualification: string; 
  /** PUBLIC */
  qualificationDetails: string;
  /** PUBLIC */
  specializations: string[];
  /** PUBLIC */
  experienceYears: number;
  /** PUBLIC: service IDs */
  servicesOffered: string[]; 
  /** PUBLIC: in km */
  serviceRadius: number; 
  /** INTERNAL */
  location: GeoLocation;
  /** PUBLIC */
  languages: string[];
  /** PUBLIC: base rate */
  hourlyRate: number; 
  /** PUBLIC: 0-5 */
  rating: number; 
  /** PUBLIC */
  reviewCount: number;
  /** PUBLIC */
  totalVisits: number;
  /** PUBLIC */
  isVerified: boolean;
  /** INTERNAL */
  kycStatus: KYCStatus;
  /** PUBLIC */
  availabilityStatus: ProfessionalStatus;
  /** PUBLIC */
  profilePhoto: string;
  /** SENSITIVE */
  documents: ProfessionalDocument[];
  /** PUBLIC */
  availability: AvailabilitySlot[];
  /** INTERNAL */
  createdAt: string;
  /** INTERNAL */
  updatedAt: string;
}
```

### 1.5 Shared Entities

#### Address
```typescript
export interface Address {
  id: string;
  label: string; // e.g., 'Home', 'Work'
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coordinates?: GeoLocation;
  isDefault: boolean;
}
```

#### GeoLocation
```typescript
export interface GeoLocation {
  latitude: number;
  longitude: number;
}
```

#### EmergencyContact
```typescript
export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}
```

#### ProfessionalDocument
```typescript
export interface ProfessionalDocument {
  id: string;
  type: 'id_proof' | 'license' | 'certification' | 'background_check';
  url: string; // SENSITIVE
  status: 'pending' | 'verified' | 'rejected' | 'expired';
  uploadedAt: string;
  verifiedAt?: string;
  verifiedBy?: string; // Admin User ID
  expiryDate?: string;
}
```

### 1.6 Organization & Staffing

#### Organization
```typescript
export interface Organization {
  id: string;
  name: string;
  registrationNumber: string;
  type: 'hospital' | 'clinic' | 'agency' | 'other';
  primaryContactId: string;
  billingAddress: Address;
  taxId?: string;
  status: 'active' | 'suspended' | 'pending';
  createdAt: string;
  updatedAt: string;
}
```

#### OrganizationUser
```typescript
export interface OrganizationUser {
  id: string;
  organizationId: string;
  userId: string;
  role: 'org_admin' | 'org_manager' | 'org_staff';
  createdAt: string;
}
```

#### StaffingRequest
```typescript
export interface StaffingRequest {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  serviceId: string;
  requiredQualifications: string[];
  startDate: string;
  endDate: string;
  status: JobRequestStatus;
  createdAt: string;
  updatedAt: string;
}
```

#### Shift
```typescript
export interface Shift {
  id: string;
  staffingRequestId: string;
  professionalId?: string;
  startTime: string;
  endTime: string;
  hourlyRate: number;
  status: 'open' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}
```

#### Timesheet
```typescript
export interface Timesheet {
  id: string;
  shiftId: string;
  professionalId: string;
  clockInTime: string;
  clockOutTime?: string;
  totalHours?: number;
  approvedBy?: string; // OrganizationUser ID
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

### 1.7 Service & Pricing

#### Service
```typescript
export interface Service {
  id: string;
  category: ServiceCategory; // 5 service types from PRD
  name: string;
  description: string;
  iconUrl?: string;
  isActive: boolean;
  basePricing: ServicePricing;
}
```

#### ServicePricing
```typescript
export interface ServicePricing {
  minimumRate: number;
  maximumRate: number;
  currency: string;
  pricingUnit: 'hourly' | 'per_visit' | 'daily';
}
```

### 1.8 Availability & Booking

#### AvailabilitySlot
```typescript
export interface AvailabilitySlot {
  id: string;
  professionalId: string;
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  startTime: string; // HH:mm format
  endTime: string;
  isAvailable: boolean;
}
```

#### Booking
```typescript
export interface Booking {
  id: string;
  clientId: string;
  patientId: string;
  professionalId?: string; // Assigned later if requested without specific professional
  serviceId: string;
  status: BookingStatus; // 14 states
  scheduledStartTime: string;
  scheduledEndTime: string;
  addressId: string;
  priceBreakdown: PriceBreakdown;
  paymentId?: string;
  cancellationReason?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### BookingStatusHistory
```typescript
export interface BookingStatusHistory {
  id: string;
  bookingId: string;
  status: BookingStatus;
  changedBy: string; // User ID
  timestamp: string;
  comments?: string;
}
```

#### PriceBreakdown
```typescript
export interface PriceBreakdown {
  baseAmount: number;
  taxAmount: number;
  platformFee: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
}
```

#### Visit
```typescript
export interface Visit {
  id: string;
  bookingId: string;
  professionalId: string;
  actualStartTime?: string;
  actualEndTime?: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  checkInLocation?: GeoLocation;
  checkOutLocation?: GeoLocation;
}
```

#### VisitNote
```typescript
export interface VisitNote {
  id: string;
  visitId: string;
  authorId: string;
  content: string; // SENSITIVE
  attachments?: string[]; // URLs
  createdAt: string;
}
```

### 1.9 Payments & Financials

#### Payment
```typescript
export interface Payment {
  id: string;
  bookingId: string;
  payerId: string;
  amount: number;
  currency: string;
  method: 'credit_card' | 'bank_transfer' | 'digital_wallet';
  status: PaymentStatus;
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### Refund
```typescript
export interface Refund {
  id: string;
  paymentId: string;
  amount: number;
  reason: string;
  status: 'pending' | 'processed' | 'failed';
  processedAt?: string;
}
```

#### Payout
```typescript
export interface Payout {
  id: string;
  professionalId: string;
  amount: number;
  currency: string;
  status: PayoutStatus;
  periodStart: string;
  periodEnd: string;
  processedAt?: string;
  referenceId?: string;
}
```

### 1.10 Reviews & Support

#### Review
```typescript
export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number; // 1-5
  comment?: string;
  isPublic: boolean;
  createdAt: string;
}
```

#### SupportTicket
```typescript
export interface SupportTicket {
  id: string;
  creatorId: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: SupportTicketStatus;
  subject: string;
  description: string;
  assignedTo?: string; // Admin User ID
  createdAt: string;
  updatedAt: string;
}
```

#### SupportMessage
```typescript
export interface SupportMessage {
  id: string;
  ticketId: string;
  senderId: string;
  content: string;
  attachments?: string[];
  createdAt: string;
}
```

### 1.11 Notifications & Settings

#### Notification
```typescript
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}
```

#### NotificationPreference
```typescript
export interface NotificationPreference {
  userId: string;
  email: boolean;
  sms: boolean;
  push: boolean;
  types: Record<NotificationType, boolean>;
}
```

#### PlatformSettings
```typescript
export interface PlatformSettings {
  id: string; // Singleton
  platformFeePercentage: number;
  taxRatePercentage: number;
  currency: string;
  supportEmail: string;
  supportPhone: string;
  maintenanceMode: boolean;
  updatedAt: string;
  updatedBy: string; // Admin ID
}
```

### 1.12 Admin & Security

#### Role
```typescript
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[]; // Permission IDs
}
```

#### Permission
```typescript
export interface Permission {
  id: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  description: string;
}
```

#### AuditLog
```typescript
export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  metadata: any; // JSON string or object
  ipAddress?: string;
  createdAt: string;
}
```

#### MatchingResult
```typescript
export interface MatchingResult {
  id: string;
  bookingId: string;
  professionalId: string;
  matchScore: number;
  distanceKm: number;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  createdAt: string;
}
```

---

## 2. Enum Types

```typescript
export enum BookingStatus {
  DRAFT = 'Draft',
  REQUESTED = 'Requested',
  MATCHING = 'Matching',
  ASSIGNED = 'Assigned',
  ACCEPTED = 'Accepted',
  ON_THE_WAY = 'On The Way',
  CHECKED_IN = 'Checked In',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  PAYMENT_PENDING = 'Payment Pending',
  CLOSED = 'Closed',
  REJECTED = 'Rejected',
  CANCELLED = 'Cancelled',
  DISPUTED = 'Disputed'
}

export enum KYCStatus {
  NOT_STARTED = 'Not Started',
  DRAFT = 'Draft',
  SUBMITTED = 'Submitted',
  UNDER_REVIEW = 'Under Review',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  RE_UPLOAD_REQUIRED = 'Re-upload Required',
  EXPIRED = 'Expired'
}

export enum PaymentStatus {
  PENDING = 'pending',
  AUTHORIZED = 'authorized',
  CAPTURED = 'captured',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
  DISPUTED = 'disputed'
}

export enum PayoutStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  PAID = 'paid',
  FAILED = 'failed',
  ON_HOLD = 'on_hold',
  CANCELLED = 'cancelled'
}

export enum ProfessionalStatus {
  PENDING_VERIFICATION = 'pending_verification',
  VERIFIED = 'verified',
  ACTIVE = 'active',
  OFFLINE = 'offline',
  BUSY = 'busy',
  SUSPENDED = 'suspended',
  DEACTIVATED = 'deactivated'
}

export enum SupportTicketStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  WAITING_FOR_USER = 'waiting_for_user',
  ESCALATED = 'escalated',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export enum JobRequestStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  MATCHING = 'matching',
  FILLED = 'filled',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed'
}

export enum NotificationType {
  BOOKING_UPDATE = 'booking_update',
  PAYMENT_UPDATE = 'payment_update',
  SYSTEM_ALERT = 'system_alert',
  MESSAGE_RECEIVED = 'message_received',
  PROMOTIONAL = 'promotional'
}

export enum ServiceCategory {
  HOME_NURSING = 'Home Nursing',
  CAREGIVER = 'Caregiver / Attendant',
  PHYSIOTHERAPY = 'Physiotherapy',
  DOCTOR_VISIT = 'Doctor Visit',
  SPECIALIZED_CARE = 'Specialized Care'
}

export enum TicketCategory {
  BILLING = 'billing',
  TECHNICAL = 'technical',
  ACCOUNT = 'account',
  SERVICE = 'service',
  OTHER = 'other'
}

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}
```

---

## 3. Relationships

- **User 1:1 ClientProfile / ProfessionalProfile**: A user can have one role-specific profile.
- **Client 1:N PatientProfile**: A client can manage multiple patients.
- **Client 1:N Address**: A client can have multiple saved addresses.
- **Client 1:N Booking**: A client can make multiple bookings.
- **Professional 1:N ProfessionalDocument**: Professionals upload multiple verification docs.
- **Professional 1:N AvailabilitySlot**: Professionals configure available timeslots.
- **Professional 1:N Visit**: Professionals perform multiple visits.
- **Booking 1:1 Visit**: Each booking maps to one visit occurrence.
- **Booking 1:1 Payment**: Each booking has an associated payment record.
- **Booking 1:N BookingStatusHistory**: Tracks state transitions for a booking.
- **Booking 1:N SupportTicket**: Issues can be linked to specific bookings.
- **Payment 0:1 Refund**: A payment can have an associated refund.
- **Visit 1:N VisitNote**: Professionals can log multiple notes per visit.
- **Professional 1:N Review**: Professionals receive multiple reviews from clients.
- **Organization 1:N StaffingRequest**: Orgs create multiple requests.
- **StaffingRequest 1:N Shift**: Requests break down into individual shifts.
- **Shift 1:1 Timesheet**: Each shift has a logged timesheet for payment processing.

---

## 4. Data Security Annotations

- **PUBLIC**: Fields visible to all authenticated users (e.g., professional name, basic services, public reviews).
- **ROLE_RESTRICTED**: Visible only to specific roles (e.g., patient mobility status visible to assigned professional).
- **SENSITIVE**: PII and PHI (e.g., medical notes, exact addresses, documents, birth dates) that must be encrypted at rest and restricted via strict authorization checks.
- **INTERNAL**: System fields (e.g., createdAt, status flags, audit logs) generally only modified by system actions or admins.
