# 17. Notification System Specification

## 1. Notification Philosophy
**BUSINESS RULE** | Notifications must be timely, relevant, and actionable.
**BUSINESS RULE** | Never spam users with unnecessary notifications. Users should only be notified when their attention is required or a significant state change occurs.
**UI RULE** | Every notification must either inform of a state change or prompt an action from the user.
**SECURITY RULE** | Notifications must never expose sensitive data in previews, especially Protected Health Information (PHI) or Personally Identifiable Information (PII).
**BUSINESS RULE** | All notifications must adhere strictly to the product's light-theme-only constraint for any associated UI elements.
**BUSINESS RULE** | Ensure notifications support internationalization (i18n) structures, even if only one language is supported for MVP.

## 2. Notification Channels
| Channel | MVP Status | Description |
|---|---|---|
| In-App | IMPLEMENTED | Real-time notifications within the platform, visible in the notification center. |
| Email | PLACEHOLDER | Email notification templates defined but not sent in MVP. |
| Push | PLACEHOLDER | Push notification structure defined but not implemented in MVP. |
| SMS | PLACEHOLDER | SMS alerts for critical events (not implemented in MVP). |

**BUSINESS RULE** | For MVP, only in-app notifications are functional.
**TECHNICAL RULE** | Email/Push/SMS are defined as interfaces for future implementation. The architecture must support seamless integration of these channels later without major refactoring.
**ASSUMPTION** | Third-party services like SendGrid (Email), Firebase Cloud Messaging (Push), and Twilio (SMS) will be used post-MVP.

## 3. Notification Categories
| Category | Icon (Lucide) | Color | Description |
|---|---|---|---|
| Booking | Calendar | brand-teal (#0EA5A4) | Booking lifecycle events |
| Payment | CreditCard | status-info | Payment and refund events |
| KYC | ShieldCheck | status-warning | Verification status changes |
| Payout | Wallet | status-success | Payout processing events |
| Schedule | Clock | brand-blue (#2563EB) | Schedule and availability changes |
| Support | MessageSquare | status-info | Support ticket updates |
| System | Bell | text-muted | System announcements |
| Job | Briefcase | brand-teal (#0EA5A4) | Job request events (professional) |

**UI RULE** | Primary text color should be #0F172A (never pure #000000). Font must be Manrope (Inter fallback).
**UI RULE** | Category icons must ONLY use Lucide React icons.
**UI RULE** | Brand colors Healthcare Teal #0EA5A4 and Medical Blue #2563EB are to be used strictly for their designated categories.

## 4. Notification Event Matrix

### 4.1 Booking Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-BKG-001 | Booking requested | Admin | New Booking Request | "New {service} booking from {clientName} for {date}" | /admin/bookings/{id} | Normal |
| NTF-BKG-002 | Professional assigned | Client | Professional Assigned | "A healthcare professional has been assigned to your booking" | /booking/{id}/track | High |
| NTF-BKG-003 | Job offer received | Professional | New Job Request | "New {service} request - {area}, {date}, {duration}" | /pro/jobs/{id} | Critical |
| NTF-BKG-004 | Professional accepted | Client | Booking Confirmed | "{proName} has accepted your booking for {date}" | /booking/{id}/track | High |
| NTF-BKG-005 | Professional rejected | Admin | Booking Needs Reassignment | "{proName} declined booking #{id}. Reassignment needed." | /admin/bookings/{id} | High |
| NTF-BKG-006 | Professional on the way | Client | Professional On The Way | "{proName} is on the way to your location" | /booking/{id}/track | High |
| NTF-BKG-007 | Professional checked in | Client | Professional Arrived | "{proName} has arrived and checked in" | /booking/{id}/track | Normal |
| NTF-BKG-008 | Service started | Client | Service In Progress | "Your {service} session has started" | /booking/{id}/track | Normal |
| NTF-BKG-009 | Service completed | Client | Visit Completed | "Your {service} visit has been completed. Please leave a review." | /booking/{id}/review | Normal |
| NTF-BKG-010 | Booking cancelled by client | Professional, Admin | Booking Cancelled | "Booking #{id} has been cancelled by the client" | /pro/jobs or /admin/bookings | Normal |
| NTF-BKG-011 | Booking cancelled by admin | Client, Professional | Booking Cancelled | "Your booking #{id} has been cancelled by the platform" | /my-bookings | High |
| NTF-BKG-012 | No match found | Client, Admin | No Professionals Available | "We couldn't find a professional for your booking. Our team is looking into it." | /my-bookings | High |
| NTF-BKG-013 | Job offer expired | Admin | Job Offer Expired | "Job offer for booking #{id} expired. Professional did not respond." | /admin/bookings/{id} | High |
| NTF-BKG-014 | Shift roster updated | Organization | Roster Updated | "Shift roster for {date} has been updated" | /org/roster/{id} | Normal |
| NTF-BKG-015 | Timesheet pending | Organization | Timesheet Approval | "Timesheets for {date} are pending your approval" | /org/timesheets | High |

**BUSINESS RULE** | Booking state transitions must accurately trigger the corresponding notification events.
**ASSUMPTION** | Organizations are involved in specific staffing requests, so roster and timesheet notifications route to them.

### 4.2 Payment Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-PAY-001 | Payment successful | Client | Payment Confirmed | "Payment of ₹{amount} for booking #{id} was successful" | /my-bookings/{id} | Normal |
| NTF-PAY-002 | Payment failed | Client | Payment Failed | "Payment for booking #{id} could not be processed. Please try again." | /booking/{id}/pay | High |
| NTF-PAY-003 | Refund processed | Client | Refund Processed | "A refund of ₹{amount} has been processed to your original payment method" | /my-bookings/{id} | Normal |
| NTF-PAY-004 | Refund failed | Admin | Refund Failed | "Refund for booking #{id} failed. Manual intervention required." | /admin/payments/{id} | Critical |

**ASSUMPTION** | Real payment gateways are not fully integrated for MVP; mock webhooks will trigger these events.
**SECURITY RULE** | Never expose full credit card numbers or sensitive bank details in payment notifications.

### 4.3 KYC Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-KYC-001 | Documents submitted | Admin | New KYC Submission | "{proName} submitted verification documents" | /admin/verification/{id} | Normal |
| NTF-KYC-002 | KYC approved | Professional | Verification Approved | "Your verification has been approved! You can now start accepting jobs." | /pro/dashboard | High |
| NTF-KYC-003 | KYC rejected | Professional | Verification Rejected | "Your verification was not approved: {reason}. Please re-submit." | /pro/kyc | High |
| NTF-KYC-004 | Re-upload required | Professional | Document Re-upload Needed | "Please re-upload your {documentType}: {reason}" | /pro/kyc | High |
| NTF-KYC-005 | KYC expiring soon | Professional | Verification Expiring | "Your verification expires in {days} days. Please renew." | /pro/kyc | Normal |
| NTF-KYC-006 | KYC expired | Professional, Admin | Verification Expired | "Your verification has expired. Please submit updated documents." | /pro/kyc | Critical |

**BUSINESS RULE** | A professional cannot accept jobs if their KYC status is anything other than "Approved".
**OPEN DECISION** | What is the exact timeframe for "KYC expiring soon" (e.g., 30 days, 14 days)?

### 4.4 Payout Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-PYT-001 | Payout processed | Professional | Payout Received | "₹{amount} has been deposited to your bank account" | /pro/earnings | Normal |
| NTF-PYT-002 | Payout failed | Professional, Admin | Payout Failed | "Payout processing failed. Please verify your bank details." | /pro/earnings | High |
| NTF-PYT-003 | Payout on hold | Professional | Payout On Hold | "Your payout is temporarily on hold. Contact support for details." | /pro/support | High |

**ASSUMPTION** | Exact payout mechanics and escrow systems are assumed placeholders for MVP.

### 4.5 Support Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-SUP-001 | Ticket created | Support Agent | New Support Ticket | "New {priority} ticket from {userName}: {category}" | /admin/support/{id} | Based on priority |
| NTF-SUP-002 | Ticket assigned | Reporter | Ticket Update | "Your support ticket has been assigned to an agent" | /support/{id} | Normal |
| NTF-SUP-003 | Ticket resolved | Reporter | Ticket Resolved | "Your support ticket has been resolved" | /support/{id} | Normal |
| NTF-SUP-004 | Ticket escalated | Admin | Ticket Escalated | "Support ticket #{id} has been escalated" | /admin/support/{id} | High |

### 4.6 System Notifications
| Event ID | Event | Recipient | Title | Body | Action | Priority |
|---|---|---|---|---|---|---|
| NTF-SYS-001 | Scheduled maintenance | All | Scheduled Maintenance | "Platform maintenance scheduled for {date} {time}" | - | Normal |
| NTF-SYS-002 | New feature | All | What's New | "Check out our latest feature: {featureName}" | /changelog | Low |

## 5. In-App Notification UI

### 5.1 Notification Center
**UI RULE** | Accessible via bell icon in header (all portals).
**UI RULE** | Unread count badge (red dot with number, max "99+").
**UI RULE** | Dropdown panel on desktop (max 480px width, max 5 recent).
**UI RULE** | Full-screen on mobile.
**UI RULE** | Each notification: icon + title + body preview + timestamp + read/unread indicator.
**UI RULE** | Click: navigate to action URL, mark as read.
**UI RULE** | "Mark all as read" action at the top of the dropdown.
**UI RULE** | "View all notifications" link to full notifications page at the bottom of the dropdown.
**UI RULE** | Empty state must display an illustration (using light theme) and friendly text: "You're all caught up!"

### 5.2 Real-Time Updates
**ASSUMPTION** | WebSocket or polling for real-time notification delivery is implemented.
**UI RULE** | New notification: brief toast at top-right (auto-dismiss 4s) + bell counter increment.
**UI RULE** | Critical notifications: persistent toast until dismissed.
**TECHNICAL RULE** | Reconnection logic must silently handle network drops without spamming connection errors to the user.

### 5.3 Notification Preferences
**BUSINESS RULE** | Users can configure which notifications they receive per channel.
**ASSUMPTION** | Preference UI is located in the Settings page.
**UI RULE** | Default: all in-app notifications ON.
**SECURITY RULE** | Users cannot disable critical safety/security notifications (e.g., Password changed, KYC expired).
**UI RULE** | Toggles must use standard platform UI components with clear labeling.

## 6. Notification Data Model
**TECHNICAL RULE** | Adhere to the following data model for notifications.

```typescript
export interface Notification {
  id: string;
  recipientId: string;
  category: NotificationCategory;
  title: string;
  body: string;
  actionUrl?: string;
  priority: 'low' | 'normal' | 'high' | 'critical';
  isRead: boolean;
  readAt?: string;
  createdAt: string;
  metadata?: Record<string, string>; // e.g., bookingId, proName, amount
}

export type NotificationCategory = 
  | 'booking' | 'payment' | 'kyc' | 'payout' 
  | 'schedule' | 'support' | 'system' | 'job';

export interface NotificationPreference {
  userId: string;
  channels: {
    inApp: boolean;
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  categories: {
    booking: boolean;
    payment: boolean;
    kyc: boolean;
    payout: boolean;
    schedule: boolean;
    support: boolean;
    system: boolean;
    job: boolean;
  };
}
```

## 7. Privacy in Notifications
**SECURITY RULE** | NEVER include full patient name in notification body (use first name only).
**SECURITY RULE** | NEVER include full address.
**SECURITY RULE** | NEVER include payment details beyond amount.
**SECURITY RULE** | NEVER include medical information or condition details.
**SECURITY RULE** | Push/email previews: use generic text that doesn't expose booking details.
  - Good: "You have a new booking update"
  - Bad: "John Doe booked nursing care at 123 MG Road for his mother"
**TECHNICAL RULE** | The backend must scrub sensitive fields before persisting notifications to the `Notification` table.

## 8. Payload Definitions

### 8.1 Example Payload: Job Request
```json
{
  "id": "notif_890123",
  "recipientId": "pro_456",
  "category": "job",
  "title": "New Job Request",
  "body": "New Home Nursing request - Andheri West, Oct 12, 4 hours",
  "actionUrl": "/pro/jobs/job_789",
  "priority": "critical",
  "isRead": false,
  "createdAt": "2026-10-10T08:30:00Z",
  "metadata": {
    "jobId": "job_789",
    "service": "Home Nursing",
    "area": "Andheri West"
  }
}
```

### 8.2 Example Payload: KYC Rejected
```json
{
  "id": "notif_890124",
  "recipientId": "pro_456",
  "category": "kyc",
  "title": "Verification Rejected",
  "body": "Your verification was not approved: Blurry ID document. Please re-submit.",
  "actionUrl": "/pro/kyc",
  "priority": "high",
  "isRead": false,
  "createdAt": "2026-10-10T09:00:00Z",
  "metadata": {
    "reason": "Blurry ID document",
    "kycId": "kyc_123"
  }
}
```

## 9. Acceptance Criteria (GIVEN / WHEN / THEN)

### 9.1 In-App Notification Delivery
**GIVEN** a professional has been assigned to a client's booking,
**WHEN** the assignment is confirmed by the system,
**THEN** the client should receive an in-app notification with the title "Professional Assigned" and a priority of High.

### 9.2 Real-time Counter Updates
**GIVEN** a user is logged into the platform,
**WHEN** a new notification arrives in the background,
**THEN** the notification bell icon should increment its unread count by 1 immediately.

### 9.3 Notification Center Interaction
**GIVEN** a user has unread notifications,
**WHEN** they open the notification center and click on a specific notification,
**THEN** they should be redirected to the corresponding action URL, and the notification should be marked as read.

### 9.4 Privacy Compliance
**GIVEN** a notification is generated for a home nursing booking,
**WHEN** the notification body is constructed,
**THEN** it must not contain the patient's full last name, complete street address, or specific medical conditions.

### 9.5 Preference Enforcement
**GIVEN** a user has disabled marketing/system notifications in their settings,
**WHEN** a new feature announcement is sent (NTF-SYS-002),
**THEN** the user should not receive this notification.

### 9.6 Critical Event Exemption
**GIVEN** a user has disabled all optional notifications in their settings,
**WHEN** their KYC verification expires (NTF-KYC-006),
**THEN** they must still receive the critical notification regarding their KYC status.

### 9.7 Toast Behavior (Non-Critical)
**GIVEN** a new non-critical notification arrives while the user is active,
**WHEN** the notification is delivered,
**THEN** a toast should appear in the top-right corner and automatically dismiss after 4 seconds.

### 9.8 Persistent Critical Toasts
**GIVEN** a new critical notification arrives (e.g., Job Offer Received),
**WHEN** the notification is delivered,
**THEN** the toast should remain on screen until explicitly dismissed by the user.

### 9.9 Mark All as Read
**GIVEN** a user has multiple unread notifications,
**WHEN** they click "Mark all as read" in the notification center,
**THEN** the unread badge should disappear and all notifications should show a read state.

### 9.10 Empty State Handling
**GIVEN** a new user has no notifications,
**WHEN** they open the notification center,
**THEN** they should see the illustrated empty state with the text "You're all caught up!".

## 10. Future Considerations
**OPEN DECISION** | Selection of specific third-party providers for Email, SMS, and Push channels.
**OPEN DECISION** | Retry mechanisms and fallback strategies for failed notification deliveries on external channels.
**ASSUMPTION** | The backend architecture will utilize a message queue (e.g., RabbitMQ, SQS) to decouple notification generation from delivery, ensuring system scalability and resilience.
**ASSUMPTION** | Rate limiting rules will be implemented to prevent notification fatigue in cases of bulk state changes.
**TECHNICAL RULE** | Batch notification endpoints must be implemented to support scenarios like "Send announcement to all professionals".
**TECHNICAL RULE** | Push notification tokens must be securely stored and tied to specific device sessions, invalidated on logout.
**ASSUMPTION** | SMS templates must be pre-approved by telecom regulatory bodies (e.g., DLT in India) before they can be used in production.
**ASSUMPTION** | A cron job or background worker will evaluate schedule-based notifications (e.g., reminders 24 hours before a booking).
