# 03 - Information Architecture

## Document Purpose
This document defines the structural layout, navigation schemas, routing logic, and interaction patterns for the Healthcare Staffing & Home Care Platform. This specification ensures a consistent, scalable, and intuitive experience across all user roles.

---

## 1. Global Navigation Architecture

The platform serves four distinct user roles, each requiring a tailored navigation experience.

### 1.1 Public / Client Navigation

**UI RULE**: The public site and client portal utilize a standard top-fixed header. The header becomes slightly transparent upon scrolling but maintains a solid #FFFFFF background when at the top.

**Primary Navigation Items (Desktop):**
*   **Logo**: Links to `/` (Home)
*   **Services**: Dropdown menu listing core services (Home Nursing, Caregiver, Physiotherapy, Doctor Visit, Specialized Care)
*   **How It Works**: Anchor link or separate page explaining the process
*   **Healthcare Professionals**: Public directory of available professionals
*   **For Organizations**: Landing page for corporate staffing
*   **Support**: Help center and contact information

**Action Elements:**
*   **Primary CTA**: "Find Care" or "Book Care" (Solid Brand Teal #0EA5A4 button)
*   **Secondary Action**: "Login" (Ghost button or text link #0F172A)

**Mobile View:** Top header with Logo and Hamburger menu. Hamburger opens a full-screen overlay with the navigation items.

### 1.2 Professional Portal Navigation

**UI RULE**: The professional portal uses a responsive layout. On desktop, it utilizes a top header or left sidebar depending on the sub-application structure. On mobile, it **MUST** use a bottom navigation bar for quick access while on the go.

**Desktop Navigation Items:**
*   **Dashboard**: Overview of upcoming visits, recent earnings, and urgent tasks.
*   **Jobs**: Job board / requests marketplace.
*   **Schedule**: Calendar view of accepted and pending shifts.
*   **Visits** (or Active Visit): Contextual tab active when a shift is currently happening.
*   **Earnings**: Financial overview and payout history.
*   **Profile**: Public profile management.
*   **KYC / Documents**: Credential management and verification status.
*   **Notifications**: Alert center.
*   **Support**: Help and dispute resolution.
*   **Settings**: Account preferences.

**Mobile Bottom Navigation Bar (Max 5 items):**
*   **Dashboard** (Icon: `LayoutDashboard`)
*   **Jobs** (Icon: `Briefcase`)
*   **Schedule** (Icon: `CalendarDays`)
*   **Earnings** (Icon: `Banknote`)
*   **More** (Icon: `Menu` - opens drawer: Profile, Visits, KYC, Notifications, Support, Settings)

### 1.3 Admin Navigation (Left Sidebar)

**UI RULE**: The Admin panel requires a persistent left sidebar for rapid switching between management modules. The sidebar should be collapsible.

**Sidebar Items:**
*   **Dashboard**: High-level platform metrics.
*   **Professionals**: User management for healthcare providers.
*   **Verification (KYC)**: Document review queue.
*   **Clients**: Patient/Client management.
*   **Organizations**: B2B partner management.
*   **Services**: Catalog and taxonomy management.
*   **Pricing**: Base rates, surge pricing, and fee configuration.
*   **Bookings**: Master list of all platform shifts/visits.
*   **Matching**: Manual override or inspection of automated matching algorithms.
*   **Payments**: Inbound client payments processing.
*   **Payouts**: Outbound professional earnings processing.
*   **Reviews**: Moderation of feedback and ratings.
*   **Support**: Ticketing system interface.
*   **Notifications**: System-wide broadcast management.
*   **Reports**: Exportable data analytics.
*   **Roles & Permissions**: Internal admin access control.
*   **Settings**: Global platform configurations.

### 1.4 Organization Navigation

**UI RULE**: The Organization portal uses a standard top header with secondary sub-navigation if necessary.

**Navigation Items:**
*   **Dashboard**: Overview of current staffing levels and active requests.
*   **Staffing Requests**: Create and manage bulk shift requests.
*   **Roster**: List of professionals currently deployed or favorited.
*   **Timesheets**: Approval queue for professional logged hours.
*   **Billing**: Invoices, payment methods, and financial history.
*   **Settings**: Company profile, user management.

---

## 2. Route Architecture

**TECHNICAL RULE**: All routes must be strictly typed and guarded. Accessing a route without the required role should trigger a redirect or a 404/403.

| Path | Role Required | Auth Required | Page Title | Parent Layout | Guard Logic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Public | No | Home | `PublicLayout` | None |
| `/services` | Public | No | Our Services | `PublicLayout` | None |
| `/professionals` | Public | No | Browse Caregivers | `PublicLayout` | None |
| `/login` | Any | No | Sign In | `AuthLayout` | Redirect to dashboard if authenticated |
| `/client/dashboard` | Client | Yes | Dashboard | `ClientLayout` | Requires `role === 'CLIENT'` |
| `/client/book` | Client | Yes | Book Care | `ClientLayout` | Requires `role === 'CLIENT'` |
| `/client/bookings/:id` | Client | Yes | Booking Details | `ClientLayout` | Requires `role === 'CLIENT'` & Resource ownership |
| `/pro/dashboard` | Professional | Yes | Pro Dashboard | `ProLayout` | Requires `role === 'PROFESSIONAL'` |
| `/pro/jobs` | Professional | Yes | Available Jobs | `ProLayout` | Requires `role === 'PROFESSIONAL'` & KYC Approved |
| `/pro/kyc` | Professional | Yes | Document Verification | `ProLayout` | Requires `role === 'PROFESSIONAL'` |
| `/pro/visit/active` | Professional | Yes | Active Visit | `ProLayout` | Requires `role === 'PROFESSIONAL'` & Active Shift |
| `/admin` | Admin | Yes | Admin Overview | `AdminLayout` | Requires `role === 'ADMIN'` |
| `/admin/users/pro` | Admin | Yes | Manage Professionals | `AdminLayout` | Requires `role === 'ADMIN'` |
| `/admin/kyc/review` | Admin | Yes | KYC Queue | `AdminLayout` | Requires `role === 'ADMIN'` |
| `/org/dashboard` | Organization| Yes | Org Dashboard | `OrgLayout` | Requires `role === 'ORGANIZATION'` |
| `/org/requests/new` | Organization| Yes | New Staffing Request| `OrgLayout` | Requires `role === 'ORGANIZATION'` |

**SECURITY RULE**: Resource ownership MUST be verified on dynamic routes (e.g., `/client/bookings/:id`).

---

## 3. Secondary Navigation

### 3.1 Contextual Breadcrumbs
**UI RULE**: Breadcrumbs are required in Admin, Organization, and deep Client flows.
*   Format: `Home > Parent Section > Current Page`
*   Example: `Dashboard > Professionals > John Doe > Documents`
*   Breadcrumbs use Manrope font, size 12px, color #64748B, with the current page highlighted in #0F172A.

### 3.2 Back Behavior
**UI RULE**: When a user navigates to a detail page, a prominent "Back" button (using Lucide `ArrowLeft`) must be present.
*   **Default Behavior**: Navigates to the parent list view, preserving state.
*   **Direct Link Behavior**: If landed directly on the page, "Back" goes to the logical parent.

### 3.3 Tab Navigation
**UI RULE**: Used to organize complex pages without reloading the route.
*   **Example**: Professional Profile tabs: [ About | Services | Reviews ]
*   Active tab indicated by a 2px bottom border in Brand Teal #0EA5A4 and text #0F172A.

---

## 4. Deep Linking

**TECHNICAL RULE**: Deep linking allows users to navigate directly to specific states or resources.

**Pages Supporting Direct URL Access:**
*   Public profiles: `/professional/:id`
*   Specific job listings: `/jobs/:id`
*   Booking confirmation links: `/client/bookings/:id`
*   Admin direct resource links: `/admin/kyc/:id`

**Pages Requiring Navigation Context:**
*   **Checkout Flow**: Navigating directly to payment redirects back to step 1.
*   **Form Success Pages**: Direct navigation redirects to the dashboard.

---

## 5. Drawer Behavior

**UI RULE**: Drawers are used for quick contextual actions, primarily in the Admin portal.

*   **Usage**: Admin right-side drawers (Professional detail, booking detail, KYC review, payment detail, support ticket).
*   **Width**: 480px fixed width on desktop. Full-screen on mobile.
*   **Interaction**:
    *   Escape to close.
    *   Backdrop click to close.
*   **Stacking**: Drawers **DO NOT STACK**. Only one drawer at a time.

---

## 6. Modal Behavior

**UI RULE**: Modals are used for focused interactions.

*   **Usage**:
    *   Confirmation dialogs for destructive actions.
    *   Modal for booking summary before payment.
*   **Width**: Maximum width of 560px.
*   **Interaction**:
    *   Always closable via Escape and backdrop click.

---

## 7. Demo Role Switcher

**SECURITY RULE**: The demo role switcher is a DEVELOPMENT/DEMO UTILITY ONLY.

*   **Flagging**: Must be strictly behind a `demoMode` configuration flag.
*   **Indicator**: Must display a clear "DEMO MODE" indicator.
*   **Functionality**: Allows switching between: Client | Professional | Admin | Organization.
*   **Production State**: Must NOT be confused with production role-based authentication. In production, users authenticate and see ONLY their authorized portal.

---

## 8. 404 / Not Found Behavior

**UI RULE**: Custom 404 page is required.

*   **Contextual Routing**:
    *   If authenticated, show role-appropriate navigation (e.g., Admin sidebar remains).
    *   If unauthenticated, show public navigation.

---

## 9. Route Guards

**TECHNICAL RULE**: Strict enforcement of routing permissions.

1.  **Unauthenticated Access to Protected Route**: Redirect to login.
2.  **Wrong role**: Redirect to role-appropriate dashboard.
3.  **Non-existent resource**: Render the contextual 404 page.

---

## 10. Mobile Navigation Patterns

**UI RULE**: Mobile navigation must be highly optimized.

*   **Client**: Standard top header + hamburger menu.
*   **Professional**: Bottom tab bar (5 items max: Dashboard | Jobs | Schedule | Earnings | More).
*   **Admin**: Collapsible sidebar → hamburger on mobile.
*   **Organization**: Standard top header.

---

## Assumptions & Open Decisions

*   **ASSUMPTION**: Real-time GPS live tracking is out-of-scope for the platform MVP.
*   **ASSUMPTION**: Escrow payments are handled by a third-party gateway, not directly built into platform navigation.
*   **ASSUMPTION**: Production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, employment classification and local regulatory requirements require separate validation.
*   **OPEN DECISION**: Should the Professional "Active Visit" view be a modal overlay or a dedicated route?
*   **OPEN DECISION**: Are payout mechanics manual or automated in the MVP?
