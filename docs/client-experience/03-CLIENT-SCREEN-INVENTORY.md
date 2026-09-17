# Client Screen Inventory

This document provides a comprehensive inventory of all client-facing screens in the CareConnect platform. It serves as a reference for routing, access control, and UX flows.

## 1. Public Screens

### CLT-PUB-01: Homepage
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-01 |
| Screen Name | Homepage |
| Route | `/` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Introduction to CareConnect services and value proposition. |
| Entry Points | Direct URL, Search Engine, Logo click |
| Exit Points | Services Catalog, Login, Register, How It Works |
| Primary Action | "Book Care Now" (Routes to Services) |
| Status | Exists |

### CLT-PUB-02: Services Catalog
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-02 |
| Screen Name | Services Catalog |
| Route | `/services` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Browse all available care services. |
| Entry Points | Homepage, Footer, Navigation |
| Exit Points | Service Detail |
| Primary Action | View Service Details |
| Status | Needs Redesign |

### CLT-PUB-03: Service Detail
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-03 |
| Screen Name | Service Detail |
| Route | `/services/:serviceId` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Detailed information about a specific service including pricing and scope. |
| Entry Points | Services Catalog |
| Exit Points | Booking Wizard |
| Primary Action | "Request This Service" |
| Status | Needs Redesign |

### CLT-PUB-04: How It Works
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-04 |
| Screen Name | How It Works |
| Route | `/how-it-works` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Explain the booking, assignment, and care delivery process. |
| Entry Points | Navigation, Homepage |
| Exit Points | Services Catalog, Register |
| Primary Action | "Get Started" |
| Status | Exists |

### CLT-PUB-05: For Organizations
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-05 |
| Screen Name | For Organizations |
| Route | `/organizations` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | B2B landing page for corporate tie-ups and hospital partnerships. |
| Entry Points | Footer |
| Exit Points | Contact Form |
| Primary Action | "Contact Sales" |
| Status | New |

### CLT-PUB-06: About
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-06 |
| Screen Name | About |
| Route | `/about` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Company mission, vision, and team details. |
| Entry Points | Footer |
| Exit Points | Homepage |
| Primary Action | None |
| Status | Exists |

### CLT-PUB-07: Login
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-07 |
| Screen Name | Login |
| Route | `/login` |
| Auth Required | No (Redirects if authenticated) |
| Layout | AuthLayout |
| Purpose | Authenticate existing clients. |
| Entry Points | Navigation, Booking Wizard (if guest) |
| Exit Points | Dashboard, Register, Forgot Password |
| Primary Action | "Log In" |
| Status | Exists |

### CLT-PUB-08: Register
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-08 |
| Screen Name | Register |
| Route | `/register` |
| Auth Required | No |
| Layout | AuthLayout |
| Purpose | Create a new client account. |
| Entry Points | Login, Navigation |
| Exit Points | Dashboard, Login |
| Primary Action | "Create Account" |
| Status | Exists |

### CLT-PUB-09: Forgot Password
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-09 |
| Screen Name | Forgot Password |
| Route | `/forgot-password` |
| Auth Required | No |
| Layout | AuthLayout |
| Purpose | Request password reset link. |
| Entry Points | Login |
| Exit Points | Login, Reset Password |
| Primary Action | "Send Reset Link" |
| Status | Exists |

### CLT-PUB-10: Reset Password
| Field | Value |
|-------|-------|
| Screen ID | CLT-PUB-10 |
| Screen Name | Reset Password |
| Route | `/reset-password` |
| Auth Required | No |
| Layout | AuthLayout |
| Purpose | Set a new password using a token. |
| Entry Points | Email Link |
| Exit Points | Login |
| Primary Action | "Update Password" |
| Status | Exists |

## 2. Booking Screens

### CLT-BKG-01: Booking Wizard - Step 1: Service
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-01 |
| Screen Name | Booking Wizard - Step 1: Service |
| Route | `/book/step/service` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select or confirm the base service category. |
| Entry Points | Service Detail, Dashboard "New Request" |
| Exit Points | Step 2, Exit Wizard |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-02: Booking Wizard - Step 2: Care Requirement
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-02 |
| Screen Name | Booking Wizard - Step 2: Care Requirement |
| Route | `/book/step/requirements` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Detail specific duties and care needs. |
| Entry Points | Step 1 |
| Exit Points | Step 3, Step 1 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-03: Booking Wizard - Step 3: Patient
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-03 |
| Screen Name | Booking Wizard - Step 3: Patient |
| Route | `/book/step/patient` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select existing patient or add new patient details. |
| Entry Points | Step 2 |
| Exit Points | Step 4, Step 2 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-04: Booking Wizard - Step 4: Location
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-04 |
| Screen Name | Booking Wizard - Step 4: Location |
| Route | `/book/step/location` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select or add service delivery address. |
| Entry Points | Step 3 |
| Exit Points | Step 5, Step 3 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-05: Booking Wizard - Step 5: Date
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-05 |
| Screen Name | Booking Wizard - Step 5: Date |
| Route | `/book/step/date` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select start date and duration. |
| Entry Points | Step 4 |
| Exit Points | Step 6, Step 4 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-06: Booking Wizard - Step 6: Time/Shift
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-06 |
| Screen Name | Booking Wizard - Step 6: Time/Shift |
| Route | `/book/step/time` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select shift timings (12h/24h/hourly). |
| Entry Points | Step 5 |
| Exit Points | Step 7, Step 5 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-07: Booking Wizard - Step 7: Staff Preferences
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-07 |
| Screen Name | Booking Wizard - Step 7: Staff Preferences |
| Route | `/book/step/preferences` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Select gender preference, language, etc. |
| Entry Points | Step 6 |
| Exit Points | Step 8, Step 6 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-08: Booking Wizard - Step 8: Special Requirements
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-08 |
| Screen Name | Booking Wizard - Step 8: Special Requirements |
| Route | `/book/step/special` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Add any free-text special instructions for care. |
| Entry Points | Step 7 |
| Exit Points | Step 9, Step 7 |
| Primary Action | "Continue" |
| Status | Needs Redesign |

### CLT-BKG-09: Booking Wizard - Step 9: Price Review
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-09 |
| Screen Name | Booking Wizard - Step 9: Price Review |
| Route | `/book/step/price` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | View estimated pricing based on selections. |
| Entry Points | Step 8 |
| Exit Points | Step 10, Step 8 |
| Primary Action | "Acknowledge Estimate" |
| Status | New |

### CLT-BKG-10: Booking Wizard - Step 10: Final Review & Submit
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-10 |
| Screen Name | Booking Wizard - Step 10: Final Review & Submit |
| Route | `/book/step/review` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Final review of all details before submission. |
| Entry Points | Step 9 |
| Exit Points | Booking Success, Step 9 |
| Primary Action | "Submit Request" |
| Status | Needs Redesign |

### CLT-BKG-11: Booking Success
| Field | Value |
|-------|-------|
| Screen ID | CLT-BKG-11 |
| Screen Name | Booking Success |
| Route | `/book/success/:bookingId` |
| Auth Required | Yes |
| Layout | BookingLayout |
| Purpose | Confirmation that request is received. |
| Entry Points | Submit Request |
| Exit Points | Dashboard, Booking Detail |
| Primary Action | "Go to Dashboard" |
| Status | Needs Redesign |

## 3. Client Dashboard Screens

### CLT-DASH-01: Dashboard
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-01 |
| Screen Name | Dashboard |
| Route | `/dashboard` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Overview of active care, upcoming bookings, and quick actions. |
| Entry Points | Login, Navigation |
| Exit Points | Booking Detail, New Booking, Profile |
| Primary Action | "Request Care" |
| Status | Needs Redesign |

### CLT-DASH-02: My Bookings
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-02 |
| Screen Name | My Bookings |
| Route | `/dashboard/bookings` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | List of all bookings across tabs (Upcoming, Active, Completed, Cancelled). |
| Entry Points | Dashboard Menu |
| Exit Points | Booking Detail |
| Primary Action | View Details |
| Status | Needs Redesign |

### CLT-DASH-03: Booking Detail
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-03 |
| Screen Name | Booking Detail |
| Route | `/dashboard/bookings/:bookingId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Base detail view for a specific booking. |
| Entry Points | My Bookings, Dashboard |
| Exit Points | Edit Booking, Support, Cancel |
| Primary Action | Contextual |
| Status | Needs Redesign |

### CLT-DASH-04: Booking Detail - Before Assignment
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-04 |
| Screen Name | Booking Detail - Before Assignment |
| Route | `/dashboard/bookings/:bookingId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Show status of a request being processed by ops. |
| Entry Points | Dashboard |
| Exit Points | Cancel Request |
| Primary Action | Contact Support |
| Status | New |

### CLT-DASH-05: Booking Detail - After Assignment
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-05 |
| Screen Name | Booking Detail - After Assignment |
| Route | `/dashboard/bookings/:bookingId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Show assigned caregiver profile and expected arrival. |
| Entry Points | Dashboard |
| Exit Points | View Caregiver Profile |
| Primary Action | View Profile |
| Status | New |

### CLT-DASH-06: Booking Detail - Active Care
| Field | Value |
|-------|-------|
| Screen ID | CLT-DASH-06 |
| Screen Name | Booking Detail - Active Care |
| Route | `/dashboard/bookings/:bookingId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Show daily logs, attendance, and feedback options. |
| Entry Points | Dashboard |
| Exit Points | Leave Feedback, Report Issue |
| Primary Action | View Daily Log |
| Status | New |

## 4. Patients & Addresses

### CLT-PAT-01: Saved Patients
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAT-01 |
| Screen Name | Saved Patients |
| Route | `/dashboard/patients` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Manage profiles of family members receiving care. |
| Entry Points | Dashboard Menu |
| Exit Points | Patient Detail |
| Primary Action | "Add Patient" |
| Status | Exists |

### CLT-PAT-02: Patient Detail/Edit
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAT-02 |
| Screen Name | Patient Detail/Edit |
| Route | `/dashboard/patients/:patientId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | View or modify patient medical history and details. |
| Entry Points | Saved Patients |
| Exit Points | Saved Patients |
| Primary Action | "Save Changes" |
| Status | Exists |

### CLT-PAT-03: Saved Addresses
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAT-03 |
| Screen Name | Saved Addresses |
| Route | `/dashboard/addresses` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Manage locations for care delivery. |
| Entry Points | Dashboard Menu |
| Exit Points | Add Address Modal |
| Primary Action | "Add Address" |
| Status | Exists |

## 5. Payments

### CLT-PAY-01: Payments & Invoices
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAY-01 |
| Screen Name | Payments & Invoices |
| Route | `/dashboard/payments` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | List all invoices and payment history. |
| Entry Points | Dashboard Menu |
| Exit Points | Invoice Detail, Payment Flow |
| Primary Action | "Pay Now" (if pending) |
| Status | Needs Redesign |

### CLT-PAY-02: Invoice Detail
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAY-02 |
| Screen Name | Invoice Detail |
| Route | `/dashboard/payments/:invoiceId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Detailed breakdown of charges. |
| Entry Points | Payments & Invoices |
| Exit Points | Payment Flow |
| Primary Action | "Download PDF" / "Pay Now" |
| Status | Needs Redesign |

### CLT-PAY-03: Payment Flow
| Field | Value |
|-------|-------|
| Screen ID | CLT-PAY-03 |
| Screen Name | Payment Flow |
| Route | `/checkout/:invoiceId` |
| Auth Required | Yes |
| Layout | CheckoutLayout |
| Purpose | Process payment via gateway. |
| Entry Points | Invoice Detail |
| Exit Points | Payment Success / Failure |
| Primary Action | "Complete Payment" |
| Status | Needs Redesign |

## 6. Profile

### CLT-PRF-01: Profile
| Field | Value |
|-------|-------|
| Screen ID | CLT-PRF-01 |
| Screen Name | Profile |
| Route | `/dashboard/profile` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Manage primary account owner details. |
| Entry Points | User Menu |
| Exit Points | Settings |
| Primary Action | "Update Profile" |
| Status | Exists |

### CLT-PRF-02: Security/Settings
| Field | Value |
|-------|-------|
| Screen ID | CLT-PRF-02 |
| Screen Name | Security/Settings |
| Route | `/dashboard/settings` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Change password, enable 2FA. |
| Entry Points | User Menu |
| Exit Points | Profile |
| Primary Action | "Save Security Settings" |
| Status | Exists |

### CLT-PRF-03: Notification Preferences
| Field | Value |
|-------|-------|
| Screen ID | CLT-PRF-03 |
| Screen Name | Notification Preferences |
| Route | `/dashboard/settings/notifications` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Toggle SMS/Email/WhatsApp alerts. |
| Entry Points | Settings |
| Exit Points | Settings |
| Primary Action | "Save Preferences" |
| Status | New |

## 7. Support

### CLT-SUP-01: Support Hub
| Field | Value |
|-------|-------|
| Screen ID | CLT-SUP-01 |
| Screen Name | Support Hub |
| Route | `/dashboard/support` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Access FAQs, contact operations, view tickets. |
| Entry Points | Dashboard Menu |
| Exit Points | Ticket Detail, New Ticket |
| Primary Action | "Create Ticket" |
| Status | New |

### CLT-SUP-02: Support Ticket Detail
| Field | Value |
|-------|-------|
| Screen ID | CLT-SUP-02 |
| Screen Name | Support Ticket Detail |
| Route | `/dashboard/support/:ticketId` |
| Auth Required | Yes |
| Layout | ClientLayout |
| Purpose | Chat interface with support ops for a specific issue. |
| Entry Points | Support Hub |
| Exit Points | Support Hub |
| Primary Action | "Send Message" |
| Status | New |

### CLT-SUP-03: Review/Feedback Modal
| Field | Value |
|-------|-------|
| Screen ID | CLT-SUP-03 |
| Screen Name | Review/Feedback Modal |
| Route | Modal |
| Auth Required | Yes |
| Layout | Modal Overlay |
| Purpose | Collect ratings and feedback for staff or services. |
| Entry Points | Active Care, Completed Booking |
| Exit Points | Close Modal |
| Primary Action | "Submit Feedback" |
| Status | New |

## 8. Utility

### CLT-UTL-01: 404 Not Found
| Field | Value |
|-------|-------|
| Screen ID | CLT-UTL-01 |
| Screen Name | 404 Not Found |
| Route | `*` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Handle invalid routes gracefully. |
| Entry Points | Invalid URL |
| Exit Points | Homepage |
| Primary Action | "Return Home" |
| Status | Exists |

### CLT-UTL-02: Unauthorized
| Field | Value |
|-------|-------|
| Screen ID | CLT-UTL-02 |
| Screen Name | Unauthorized |
| Route | `/401` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Shown when access is denied. |
| Entry Points | Permission Failure |
| Exit Points | Login |
| Primary Action | "Log In" |
| Status | Exists |

### CLT-UTL-03: Service Unavailable
| Field | Value |
|-------|-------|
| Screen ID | CLT-UTL-03 |
| Screen Name | Service Unavailable |
| Route | `/503` |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Maintenance mode or critical backend failure. |
| Entry Points | System Error |
| Exit Points | None |
| Primary Action | "Retry" |
| Status | New |

### CLT-UTL-04: Location Unsupported
| Field | Value |
|-------|-------|
| Screen ID | CLT-UTL-04 |
| Screen Name | Location Unsupported |
| Route | Modal/Page |
| Auth Required | No |
| Layout | PublicLayout |
| Purpose | Inform user we don't serve their pincode yet. |
| Entry Points | Booking Step 4 |
| Exit Points | Mailing List Signup |
| Primary Action | "Notify Me" |
| Status | New |

---
*End of Document*
