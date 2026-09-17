# CareConnect Client Information Architecture

## 1. Overview
The CareConnect platform requires a clear, intuitive, and reassuring information architecture (IA) to guide clients through the process of discovering services, booking care, and managing their ongoing healthcare needs. This document outlines the complete client-facing IA.

## 2. Site Map

```text
CareConnect
├── Public Pages
│   ├── Home (/)
│   ├── How It Works (/how-it-works)
│   ├── About Us (/about)
│   ├── Services Catalog (/services)
│   │   ├── Home Nursing (/services/home-nursing)
│   │   ├── Caregiver/Attendant (/services/caregiver)
│   │   ├── Physiotherapy (/services/physiotherapy)
│   │   ├── Doctor Visit (/services/doctor-visit)
│   │   └── Specialized Care (/services/specialized-care)
│   ├── Organizations (B2B) (/organizations)
│   └── Search (/search)
│
├── Authentication
│   ├── Login (/login)
│   ├── Register (/register)
│   ├── Forgot Password (/forgot-password)
│   └── Reset Password (/reset-password)
│
├── Booking Flow
│   ├── Booking Landing (/book)
│   └── Booking Wizard (/client/booking/wizard)
│
└── Authenticated Client Portal
    ├── Dashboard (/client/dashboard)
    ├── Bookings (/client/bookings)
    │   └── Booking Detail (/client/bookings/:id)
    ├── Patients (/client/patients)
    │   └── Patient Detail (/client/patients/:id)
    ├── Addresses (/client/addresses)
    ├── Payments (/client/payments)
    │   └── Invoice Detail (/client/payments/:id)
    ├── Notifications (/client/notifications)
    ├── Profile (/client/profile)
    ├── Settings (/client/settings)
    ├── Security (/client/security)
    └── Support (/client/support)
```

## 3. Navigation Structure

### 3.1 Header Navigation
The header provides primary access to discovery and booking features.

- **Logo**: CareConnect (Links to Home)
- **Primary Links** (Center/Left):
  - Services (Dropdown)
  - How It Works
  - About
  - Organizations
- **Secondary Links** (Right):
  - Search Icon
  - Support
  - *If Unauthenticated*: Login | Sign Up (Primary Button)
  - *If Authenticated*: My Account (Dropdown: Dashboard, Bookings, Profile, Sign Out) | Book Care (Primary Button)

### 3.2 Footer Navigation
The footer provides comprehensive access to all secondary pages, legal, and contact information.

- **Column 1: Services**
  - Home Nursing
  - Attendant/Caregiver
  - Physiotherapy
  - Doctor Visit
  - specialized Care
- **Column 2: Company**
  - About Us
  - How It Works
  - Organizations
  - Careers
  - Press
- **Column 3: Support**
  - Help Center
  - Contact Us
  - Service Areas (Delhi, Noida, Gurugram, Faridabad)
  - Grievance Redressal
- **Column 4: Legal**
  - Terms of Service
  - Privacy Policy
  - Cancellation Policy
- **Bottom Bar**: Copyright, Social Media Links, App Download Links

### 3.3 Mobile Navigation
Mobile navigation relies on a top bar for critical actions and a hamburger menu for deep links.

- **Top Bar (Sticky)**:
  - Left: Hamburger Icon
  - Center: Logo
  - Right: Profile Icon (if auth) or Login (if unauth)
- **Hamburger Menu (Drawer)**:
  - Welcome Message / User Info
  - Services (Expandable accordion)
  - How It Works
  - About
  - Organizations
  - Help & Support
  - Sign Out (if auth)
- **Bottom Navigation (App-like experience for Authenticated Users)**:
  - Home (/client/dashboard)
  - Bookings (/client/bookings)
  - Book (+ Icon in center) (/client/booking/wizard)
  - Patients (/client/patients)
  - Menu (Triggers hamburger drawer)

### 3.4 Sidebar Navigation (Authenticated Portal Desktop)
The client portal uses a left sidebar for desktop users.

- **Dashboard** (Icon: Home)
- **My Bookings** (Icon: Calendar)
- **My Patients** (Icon: Users)
- **Saved Addresses** (Icon: Map Pin)
- **Payments & Invoices** (Icon: Credit Card)
- **Notifications** (Icon: Bell)
- **Support** (Icon: Lifebuoy)
- --- (Divider)
- **Profile** (Icon: User)
- **Settings** (Icon: Settings)
- **Security** (Icon: Lock)

## 4. Route Definitions Table

| Route | Page Component | Auth Required | Layout | Purpose |
| :--- | :--- | :---: | :--- | :--- |
| `/` | `HomePage` | No | `PublicLayout` | Landing page, value proposition, entry point |
| `/services` | `ServiceCatalogPage` | No | `PublicLayout` | List all available healthcare services |
| `/services/:id` | `ServiceDetailPage` | No | `PublicLayout` | Detailed information, pricing, scope for a specific service |
| `/how-it-works` | `HowItWorksPage` | No | `PublicLayout` | Explanation of the CareConnect process |
| `/about` | `AboutPage` | No | `PublicLayout` | Company mission, team, and credibility |
| `/organizations` | `OrganizationsPage` | No | `PublicLayout` | B2B landing page for corporate tie-ups |
| `/search` | `SearchPage` | No | `PublicLayout` | Global search results for services and info |
| `/book` | `BookingLandingPage` | No | `PublicLayout` | Entry page to start the booking process |
| `/login` | `LoginPage` | No | `AuthLayout` | User authentication |
| `/register` | `RegisterPage` | No | `AuthLayout` | New user registration |
| `/forgot-password` | `ForgotPasswordPage` | No | `AuthLayout` | Password recovery initiation |
| `/reset-password` | `ResetPasswordPage` | No | `AuthLayout` | Password reset confirmation |
| `/client/booking/wizard` | `BookingWizard` | Yes* | `WizardLayout` | Multi-step booking process (*can start unauth, requires auth to complete) |
| `/client/dashboard` | `DashboardPage` | Yes | `PortalLayout` | Overview of upcoming care, recent activity |
| `/client/bookings` | `BookingsListPage` | Yes | `PortalLayout` | List of active, upcoming, and past bookings |
| `/client/bookings/:id` | `BookingDetailPage` | Yes | `PortalLayout` | Comprehensive details for a specific booking |
| `/client/patients` | `PatientsListPage` | Yes | `PortalLayout` | Manage family members receiving care |
| `/client/patients/:id` | `PatientDetailPage` | Yes | `PortalLayout` | Edit patient details, medical history |
| `/client/addresses` | `AddressesPage` | Yes | `PortalLayout` | Manage service delivery locations |
| `/client/payments` | `PaymentsPage` | Yes | `PortalLayout` | Billing history, payment methods |
| `/client/payments/:id` | `InvoicePage` | Yes | `PortalLayout` | View and download specific invoice |
| `/client/notifications` | `NotificationsPage` | Yes | `PortalLayout` | Alert history and preferences |
| `/client/profile` | `ProfilePage` | Yes | `PortalLayout` | Personal information update |
| `/client/settings` | `SettingsPage` | Yes | `PortalLayout` | App preferences, language, timezone |
| `/client/security` | `SecurityPage` | Yes | `PortalLayout` | Password change, 2FA settings |
| `/client/support` | `SupportPage` | Yes | `PortalLayout` | Active tickets, FAQ, contact options |

## 5. Header Behavior

- **State 1: Top of Page (Public Pages)**
  - Background: Transparent (if over hero image) or Solid White (if no hero).
  - Text: Brand Teal or White depending on contrast.
  - Border: None.
- **State 2: Scrolled (Sticky)**
  - Behavior: Header becomes fixed to the top of the viewport.
  - Background: Solid White with 90% opacity and backdrop blur.
  - Text: Dark Slate.
  - Border/Shadow: Soft drop shadow (shadow-sm) to separate from content.
  - Transition: Smooth CSS transition (300ms ease-in-out).
- **State 3: Booking Wizard**
  - Minimal header to reduce distraction.
  - Shows CareConnect Logo (linking back with confirmation warning).
  - Shows "Save & Exit" option.
  - Hides primary navigation links.

## 6. Footer Structure Details

- **Design**: Dark background (Dark Slate) with White text.
- **Top Section**: Newsletter signup / "Ready to get started?" CTA.
- **Main Section**: 4-column grid (as defined in 3.2).
- **Contact Info Column**:
  - Address: CareConnect HQ, Gurugram.
  - Phone: 1800-XXX-XXXX (Toll Free).
  - Email: support@careconnect.in.
  - Emergency indicator: "For medical emergencies, please call ambulance services."
- **Bottom Section**: Divider line. Copyright info left-aligned. Privacy/Terms center. Social icons right-aligned.

## 7. Breadcrumb Strategy

Breadcrumbs are crucial for the client portal to maintain context.
- **Format**: Home > Parent > Current Page
- **Pages showing breadcrumbs**:
  - Service Details (Home > Services > Home Nursing)
  - Portal Pages (Dashboard > Bookings > Booking #1234)
  - Settings (Dashboard > Settings > Security)
- **Styling**: Small text, muted color. The current page is semi-bold and darker. Separator: Chevron-right (`>`).

## 8. Deep Link Support

The architecture must support deep linking for transactional communications (emails, SMS, push).
- **Directly Linkable (Requires auth, redirects to login with `?redirect=` parameter then back)**:
  - `/client/bookings/:id`: Link from "Your care is starting soon" SMS.
  - `/client/payments/:id`: Link from "Invoice generated" email.
  - `/client/booking/wizard?serviceId=X&rebook=true`: Link from "Time to schedule your next session".
  - `/reset-password?token=XYZ`: Direct link from email.

## 9. SEO Considerations

Public pages must be highly optimized for local SEO (Delhi NCR).

| Route | Title Tag Format | Meta Description |
| :--- | :--- | :--- |
| `/` | Home Healthcare Services in Delhi NCR \| CareConnect | Professional home nursing, attendants, and physiotherapy in Delhi, Gurugram, Noida, and Faridabad. Trusted in-house staff. |
| `/services` | Healthcare Services at Home \| CareConnect | Browse our comprehensive range of home healthcare services including nursing, physiotherapy, and elderly care. |
| `/services/:id` | [Service Name] at Home in Delhi NCR \| CareConnect | Expert [Service Name] delivered at your doorstep. Verified professionals, transparent pricing. Book today. |
| `/about` | About Us - Premium Home Healthcare \| CareConnect | Learn about CareConnect's mission to provide trustworthy, high-quality home healthcare in the Delhi NCR region. |
| `/how-it-works` | How CareConnect Works \| Book Home Care | Discover how easy it is to book professional healthcare services at home with CareConnect's 4-step process. |

## 10. Layout Definitions

- **PublicLayout**: Standard Header, standard Footer, wide container.
- **AuthLayout**: Split screen. Left side: beautiful brand imagery/testimonial. Right side: Centered auth form. Minimal header.
- **PortalLayout**: Desktop: Sticky top header, left sidebar navigation, main content area with gray canvas background. Mobile: Top bar, bottom navigation, standard content flow.
- **WizardLayout**: Distraction-free. Minimal top bar. Sticky bottom bar for "Next/Back" actions. Progress indicator at the top.

## 11. Responsive Breakpoints

- **Mobile**: < 768px (Uses Bottom Nav and Hamburger)
- **Tablet**: 768px - 1024px (Standard Header, Collapsed Sidebar)
- **Desktop**: > 1024px (Standard Header, Expanded Sidebar)
