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

## 9. Master Classified Screen Matrix (43 Screens)

| Screen ID | Screen Name | Screen Type | Route / Mount | Entry Point | Exit Point | Purpose | Primary CTA | Secondary CTA | Key Components | State Variations | Animation Rule | Responsive Rule | Data Dependency |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **CLT-PUB-01** | Homepage | Standalone Page | `/` | Direct URL, Logo | Services, Book | Value proposition & discovery | "Book Care Now" | "Explore Services" | Hero, SearchConsole, CareJourney, FAQ | Pre-auth / Auth | Parallax, FadeIn | Stack on mobile | `services`, `professionals` |
| **CLT-PUB-02** | Services Catalog | Standalone Page | `/services` | Nav, Home | Service Detail | Full service catalog | "View Details" | "Book Service" | ServiceCard grid, SearchInput | Filtered / Empty | Stagger grid | 1-col -> 3-col | `services` |
| **CLT-PUB-03** | Service Detail | Standalone Page | `/services/:id` | Catalog, Home | Booking Wizard | Deep service explanation | "Book This Service" | "Call Support" | InclusionsList, PricingBreakdown, FAQ | Expanded FAQ | Accordion slide | 2-col -> 1-col + sticky bottom CTA | `serviceDetail` |
| **CLT-PUB-04** | How It Works | Standalone Page | `/how-it-works` | Nav, Footer | Booking Wizard | Process explanation | "Schedule Care" | "View FAQs" | 4-Step Diagram, VideoPlaceholder | Interactive steps | Step highlight | Vertical stack | Static |
| **CLT-PUB-05** | For Organizations | Standalone Page | `/organizations` | Nav, Footer | Contact Form | B2B facility staffing | "Contact B2B Sales" | "View Roster Demo" | B2BHero, CapabilityGrid, ContactModal | Default / Submitted | FadeIn | 2-col -> 1-col | Static |
| **CLT-PUB-06** | About | Standalone Page | `/about` | Footer | Home | Company mission & clinical standards | "View Services" | "Explore Careers" | MissionHero, GovernancePillars | Default | FadeIn | Stack on mobile | Static |
| **CLT-PUB-07** | Login Modal | Modal | `/login` (Modal) | Nav, Auth Gate | Dashboard, Wizard | Account login | "Send OTP" | "Login with Password" | PhoneInput, OTPGrid, AuthToggle | Phone / OTP / Password | Modal Scale 0.95->1 | Fullscreen on mobile | `authContext` |
| **CLT-PUB-08** | Register Modal | Modal | `/register` (Modal) | Auth Gate | Dashboard | New client signup | "Create Account" | "Existing User Login" | RegistrationForm, TermsCheck | Phone / Verification | Modal Scale 0.95->1 | Fullscreen on mobile | `authContext` |
| **CLT-PUB-09** | Forgot Password | Modal | `/forgot-password` | Login Modal | Login Modal | Password recovery | "Reset Password" | "Back to Login" | PhoneInput, NewPasswordInput | Request / Verified | Modal Scale | Centered | `authContext` |
| **CLT-PUB-10** | Reset Password | Standalone Page | `/reset-password` | SMS Link | Login | Complete recovery | "Update Password" | "Contact Support" | PasswordForm | Default / Success | FadeIn | Centered card | Token |
| **CLT-BKG-01** | Step 1: Service | Wizard Step | `/client/booking/wizard` | Hero, Catalog | Step 2 | Select service category | "Continue to Tasks" | "Back" | ServiceCategoryGrid, LiveSummary | Selected / Unselected | Slide-Left | 1-col -> 2-col | `services` |
| **CLT-BKG-02** | Step 2: Care Requirement | Wizard Step | Step 1 | Step 1 | Step 3 | Define clinical tasks | "Continue to Patient" | "Back" | TaskCheckboxList, ConditionPills | Selected tasks | Slide-Left | Stack checkboxes | `service.careTasks` |
| **CLT-BKG-03** | Step 3: Patient | Wizard Step | Step 2 | Step 2 | Step 4 | Pick/Add family patient | "Continue to Location" | "Add New Patient" | SavedPatientSelector, PatientModal | Selected / New Form | Slide-Left | Card stack | `client.patients` |
| **CLT-BKG-04** | Step 4: Location | Wizard Step | Step 3 | Step 3 | Step 5 | Address & NCR check | "Continue to Date" | "Detect My Location" | LocationPicker, NCRWarningBanner | Validated / Unsupported | Slide-Left | Stack inputs | `serviceAreas` |
| **CLT-BKG-05** | Step 5: Date | Wizard Step | Step 4 | Step 4 | Step 6 | Schedule dates & recurrence | "Continue to Shift" | "Back" | CalendarPicker, RecurrencePills | Single / Contiguous / Weekly | Slide-Left | Stack calendar | Draft state |
| **CLT-BKG-06** | Step 6: Shift | Wizard Step | Step 5 | Step 5 | Step 7 | Shift timing & night rollover | "Continue to Staff Prefs" | "Back" | ShiftOptionCards, NightRolloverBanner | Day / Night Rollover / 24h | Slide-Left | Card stack | Draft state |
| **CLT-BKG-07** | Step 7: Staff Preferences | Wizard Step | Step 6 | Step 6 | Step 8 | Staff role & language pref | "Continue to Notes" | "Back" | RoleDropdown, GenderPills, LanguageTags | Selected / Default | Slide-Left | Stack dropdowns | Draft state |
| **CLT-BKG-08** | Step 8: Special Requirements | Wizard Step | Step 7 | Step 7 | Step 9 | Clinical handling notes | "Continue to Pricing" | "Back" | NotesTextArea, EquipmentCheckboxes | Filled / Empty | Slide-Left | Full width | Draft state |
| **CLT-BKG-09** | Step 9: Price Review | Wizard Step | Step 8 | Step 8 | Step 10 | Itemized price breakdown | "Review Request" | "Back" | PriceItemizedLedger, GSTBreakupCard | Base / Night Surcharge / GST | Slide-Left | Full width card | Draft calculations |
| **CLT-BKG-10** | Step 10: Final Review & Submit | Wizard Step | Step 9 | Step 9 | Booking Success | Final review & dispatch trigger | "Submit Care Request" | "Edit Details" | SummaryCard, DispatchAnimation | Reviewing / Finding / Assigned | Pulse -> Confirmed | Full width card | Full wizard draft |
| **CLT-BKG-11** | Booking Success View | State/View | Step 10 | Step 10 | Booking Detail | Submission confirmation | "View Booking Details" | "Go to Dashboard" | SuccessConfetti, AssignedStaffCard | Assigned / Pending Ops | Scale bounce | Centered card | Created `booking` |
| **CLT-DSH-01** | Client Dashboard | Standalone Page | `/client/dashboard` | Login, Logo | Booking Detail, Wizard | Client home overview | "Book New Care" | "View Active Timeline" | WelcomeBanner, ActiveVisitCard, QuickActions | First Visit / Active Care / Idle | FadeIn | 1-col -> 3-col | `bookings`, `client` |
| **CLT-BKS-01** | My Bookings | Standalone Page | `/client/bookings` | Dashboard, Nav | Booking Detail | History & active visit list | "View Details" | "Book New Service" | BookingTabs, BookingCardList | Active / Completed / Cancelled | Tab slide | Stack cards | `bookings` |
| **CLT-BKS-02** | Booking Detail: Before Assignment | State/View | `/client/bookings/:id` | My Bookings, Success | Dashboard, Support | Reviewing request view | "Contact Operations" | "Cancel Request" | StatusTimeline, RequestSummary | REQUESTED / MATCHING | Pulse indicator | 2-col -> 1-col | `booking` |
| **CLT-BKS-03** | Booking Detail: After Assignment | State/View | `/client/bookings/:id` | My Bookings, Alert | Dashboard | Assigned staff view | "Call Staff Member" | "Track GPS Transit" | AssignedStaffCard, Timeline, AddressCard | ASSIGNED / ACCEPTED | FadeIn | 2-col -> 1-col | `booking`, `staff` |
| **CLT-BKS-04** | Booking Detail: Active Care | State/View | `/client/bookings/:id` | Dashboard, Alert | Support, Review | Live care session view | "View Clinical Vitals" | "Contact Ops Desk" | LiveVitalsWidget, CheckInTimeBadge | CHECKED_IN / IN_PROGRESS | Live pulse | Stack widgets | `visit`, `vitals` |
| **CLT-PAT-01** | Saved Patients | Standalone Page | `/client/patients` | Profile, Nav | Patient Detail | Family patient management | "Add Family Patient" | "Edit Patient" | PatientCardGrid, AddPatientModal | Empty / Populated | FadeIn | 1-col -> 2-col | `client.patients` |
| **CLT-PAT-02** | Add/Edit Patient Drawer | Drawer | `/client/patients` | Saved Patients | Saved Patients | Add/Edit patient form | "Save Patient Profile" | "Cancel" | PatientForm, MedicalNotesArea | Add / Edit | Drawer Slide-Right | Fullscreen on mobile | Form state |
| **CLT-ADR-01** | Saved Addresses | Standalone Page | `/client/addresses` | Profile, Nav | Add Address | Care location management | "Add New Address" | "Set Default" | AddressCardGrid, NCRValidationTag | Empty / Populated | FadeIn | 1-col -> 2-col | `client.addresses` |
| **CLT-PAY-01** | Payments & Invoices | Standalone Page | `/client/payments` | Profile, Nav | Invoice Detail | Billing history & receipts | "Download PDF Invoice" | "Pay Pending Amount" | PaymentTable, GSTReceiptCard | Paid / Pending / Refunded | FadeIn | Table -> Card stack | `payments` |
| **CLT-PAY-02** | Invoice Detail Modal | Modal | `/client/payments/:id` | Payments Page | Payments Page | Printable GST invoice | "Download PDF" | "Print Receipt" | OfficialInvoiceTemplate, GSTBreakup | Paid / Refunded | Modal Scale | Full width modal | `payment`, `booking` |
| **CLT-PRF-01** | Client Profile | Standalone Page | `/client/profile` | Nav | Settings | Account holder details | "Save Changes" | "Manage Patients" | ProfileForm, EmergencyContactCard | Edit / View | FadeIn | 2-col -> 1-col | `client`, `user` |
| **CLT-SET-01** | Settings & Preferences | Standalone Page | `/client/settings` | Profile | Profile | Notification & app settings | "Save Preferences" | "Reset Defaults" | PreferenceToggleList, LanguageSelect | Updated / Default | FadeIn | Stack toggles | `clientSettings` |
| **CLT-SEC-01** | Security & Password | Standalone Page | `/client/security` | Profile | Profile | Password & auth security | "Update Password" | "Enable 2FA" | PasswordForm, DeviceSessionList | Default / Error | FadeIn | Stack forms | `user` |
| **CLT-SUP-01** | Support Hub | Standalone Page | `/client/support` | Nav, Footer | Ticket Detail | Client help center & FAQs | "Create Support Ticket" | "Call 24/7 Hotline" | TicketTabs, FAQAccordion, ContactCard | Open Tickets / FAQs | Accordion slide | Stack cards | `supportTickets` |
| **CLT-SUP-02** | Create Ticket Modal | Modal | `/client/support` | Support Hub | Support Hub | Raise customer issue | "Submit Ticket" | "Cancel" | TicketForm, PriorityDropdown | Form / Submitted | Modal Scale | Fullscreen on mobile | Form state |
| **CLT-SUP-03** | Review/Feedback Modal | Modal | Booking Detail | Booking Detail | Booking Detail | Post-care ratings & feedback | "Submit Review" | "Skip" | StarRatingPicker, CareHighlightPills | Rating / Success | Modal Scale | Fullscreen on mobile | Completed booking |
| **CLT-UTL-01** | 404 Not Found | Standalone Page | `*` | Invalid URL | Homepage | Page not found recovery | "Return to Homepage" | "Search Services" | 404Illustration, NavigationLinks | Default | FadeIn | Centered layout | None |
| **CLT-UTL-02** | Unauthorized | Standalone Page | `/401` | Auth Gate | Login | Access denied page | "Log In to Account" | "Return Home" | ShieldAlertIcon, LoginCTA | Default | FadeIn | Centered card | None |
| **CLT-UTL-03** | Service Unavailable | Standalone Page | `/503` | Backend Error | None | Platform maintenance view | "Retry Connection" | "Call Support Hotline" | MaintenanceIllustration, StatusCheck | Retrying / Failed | Pulse | Centered layout | None |
| **CLT-UTL-04** | Location Unsupported | Modal / View | Booking Step 4 | LocationPicker | Wizard | Out of service area notice | "Request Service in My Area" | "Select Alternate Address" | NCRMapCoverageDiagram, EmailNotifyInput | Input / Submitted | Scale | Centered card | Location data |

---
*End of Master Classified Screen Matrix*

