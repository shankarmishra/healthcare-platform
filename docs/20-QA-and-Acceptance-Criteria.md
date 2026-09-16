# QA Strategy & Acceptance Criteria
**Project:** Healthcare Staffing & Home Care Platform
**Document ID:** 20-QA-and-Acceptance-Criteria
**Last Updated:** 2026-09-16

## 1. QA Philosophy
- **Quality is a requirement, not a phase:** Testing is integrated into the development lifecycle from day one.
- **Every feature has acceptance criteria BEFORE implementation:** No code is written without knowing how it will be tested.
- **Every screen is verified against the design system:** Strict adherence to `07-Design-System.md`.
- **Every flow is tested end-to-end:** From authentication to logout, ensuring state transitions are seamless.
- **Every edge case is accounted for:** Error states, empty states, loading states, and partial failures.
- **Light Theme Only:** The platform exclusively uses a light theme. Dark mode is explicitly excluded. [UI RULE]

## 2. Testing Levels
| Level | Scope | Tools | Owner |
|---|---|---|---|
| **Visual QA** | Design token compliance, color palette, typography | Manual review against 07-Design-System.md | Developer / Designer |
| **Functional QA** | Feature completeness, business logic, state transitions | Manual testing against 02-FRD.md, Cypress | Developer / QA |
| **Responsive QA** | Breakpoint compliance (375px, 768px, 1024px, 1280px) | Browser dev tools at all breakpoints | Developer / QA |
| **Accessibility QA**| WCAG AA compliance, ARIA attributes, semantic HTML | axe-core, keyboard testing, screen reader (VoiceOver/NVDA) | Developer |
| **Cross-Browser QA**| Browser compatibility | Chrome, Firefox, Safari, Edge (latest versions) | Developer |
| **Performance QA** | Speed, bundle size, Core Web Vitals | Lighthouse, bundle analyzer, WebPageTest | Developer |
| **State QA** | All states rendered correctly (Loading, Empty, Error) | Manual verification of all status combinations | Developer |
| **Security QA** | Auth, data protection, RBAC | OWASP ZAP, manual penetration testing | Security Team |

## 3. Visual QA Checklist (Per Screen)

Compare every screen against these design tokens and rules:

- [ ] **Colors:** Match tokens strictly. Primary: Healthcare Teal `#0EA5A4`, Secondary: Medical Blue `#2563EB`. No random hex values. [UI RULE]
- [ ] **Text Colors:** Primary text must be Slate `#0F172A`. Never use pure black `#000000`. [UI RULE]
- [ ] **Typography:** Matches scale (font size, weight, line height). Primary font is Manrope, fallback is Inter. [UI RULE]
- [ ] **Spacing:** Follows 4px/8px grid system strictly. No random margins or paddings. [UI RULE]
- [ ] **Border Radius:** Matches system definitions (btn: 12px, card: 16px, hero: 24px, badge: 9999px). [UI RULE]
- [ ] **Shadows:** Matches system (subtle/card/floating only). No heavy or harsh shadows. [UI RULE]
- [ ] **Icons:** Lucide React icons ONLY. Consistent stroke width (usually 2px) across all icons. [UI RULE]
- [ ] **Buttons:** Uses correct variants (Primary, Secondary, Ghost, Danger) and states (Default, Hover, Active, Disabled). [UI RULE]
- [ ] **Status Badges:** Uses centralized status colors + text + icon. Never relies on color alone. [UI RULE]
- [ ] **Forms:** Follows input specifications (height, padding, 2px focus ring using Healthcare Teal). [UI RULE]
- [ ] **Cards:** Uses defined border + subtle shadow. [UI RULE]
- [ ] **Backgrounds:** No dark backgrounds. Backgrounds must use Slate-50 `#F8FAFC` or White `#FFFFFF`. [UI RULE]
- [ ] **Gradients:** No excessive gradients. Only subtle, brand-approved gradients if specified. [UI RULE]
- [ ] **Theme:** Light theme is maintained uniformly throughout the application. [UI RULE]

## 4. Acceptance Criteria by Feature

**Format:** `GIVEN` [Precondition] / `WHEN` [Action] / `THEN` [Expected Result] / `[LABEL]`

### 4.1 Authentication & Authorization

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-AUTH-001 | A new user | They visit the registration page | They see a form with email, phone, password, and role selection (Client, Professional). | [BUSINESS RULE] |
| AC-AUTH-002 | A registered user | They enter valid credentials | They are authenticated and redirected to their role-appropriate dashboard. | [BUSINESS RULE] |
| AC-AUTH-003 | A registered user | They enter invalid credentials | They see a clear, localized error message explaining the issue without exposing system details. | [SECURITY RULE] |
| AC-AUTH-004 | An authenticated user | Their JWT session expires | They see a re-authentication modal with an option to extend the session or log out. | [SECURITY RULE] |
| AC-AUTH-005 | An authenticated client | They attempt to access `/admin` or `/professional` routes | They are immediately redirected to their client dashboard (`/client/dashboard`). | [SECURITY RULE] |
| AC-AUTH-006 | A user logging in | They fail login 5 consecutive times | Their account is temporarily locked for 15 minutes, and they see a lockout message. | [SECURITY RULE] |
| AC-AUTH-007 | A user requesting password reset | They enter a valid email | They receive a password reset link valid for 1 hour. | [BUSINESS RULE] |
| AC-AUTH-008 | An admin | They log out | Their session token is destroyed locally and invalidated on the server. | [SECURITY RULE] |
| AC-AUTH-009 | A user | They load the login page | All input fields have correct autocomplete attributes and ARIA labels. | [UI RULE] |
| AC-AUTH-010 | A user registering | They input a weak password | They see real-time validation failing against the strict password policy (8+ chars, upper, lower, number, special). | [SECURITY RULE] |

### 4.2 Client Booking Flow

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-BKG-001 | A client on the homepage | They click "Find Care" | They are navigated to the unified search page (`/search`). | [UI RULE] |
| AC-BKG-002 | A client on the search page | They enter a location and select "Home Nursing" | They see a filtered list of verified professionals matching the criteria. | [BUSINESS RULE] |
| AC-BKG-003 | A client viewing search results | No professionals match their criteria | They see the empty state with a helpful message and alternative actions (e.g., expand search radius). | [UI RULE] |
| AC-BKG-004 | A client on a professional profile | They click the "Book" button | They enter the booking wizard at Step 1 (Service Selection). | [BUSINESS RULE] |
| AC-BKG-005 | A client in the booking wizard | They complete all steps and submit | They see a booking confirmation with a summary, reference ID, and tracking link. | [BUSINESS RULE] |
| AC-BKG-006 | A client in step 8 (Pricing Review) | They review the price breakdown | They see: base rate, duration, applicable platform fees, taxes, discounts, and final total. | [BUSINESS RULE] |
| AC-BKG-007 | A client during payment processing | The payment gateway rejects the card | They see an error message with options to retry or change the payment method. | [TECHNICAL RULE] |
| AC-BKG-008 | A client with an active booking | The professional checks in | They see the booking status update in real-time to "Checked In" on the tracking page. | [TECHNICAL RULE] |
| AC-BKG-009 | A client with a "Completed" booking | They visit the booking detail page | They see a prompt to leave a 1-5 star review and text feedback. | [BUSINESS RULE] |
| AC-BKG-010 | A client in the booking wizard | They accidentally refresh the browser | The booking state is preserved (via local storage) and they see a "Resume booking?" dialog. | [UI RULE] |
| AC-BKG-011 | A client viewing booking history | They have multiple past bookings | They see a paginated list sorted by most recent date. | [UI RULE] |
| AC-BKG-012 | A client | They attempt to book a professional who is already booked for that time | The time slot is disabled and unclickable in the calendar component. | [BUSINESS RULE] |
| AC-BKG-013 | A client booking | They select a specific medical procedure | *[ASSUMPTION]* The platform permits this procedure under standard terms, pending legal verification. | [ASSUMPTION] |
| AC-BKG-014 | A client | They initiate a cancellation for a booking < 24 hours away | They see a warning about applicable cancellation fees before confirming. | [BUSINESS RULE] |

### 4.3 Professional Job Flow

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-JOB-001 | A verified professional | They toggle availability to "Online" | Their status changes to "Available" and they are entered into the matching pool. | [BUSINESS RULE] |
| AC-JOB-002 | An online professional | A matching booking is created by a client | They receive a real-time job request card with a 45-second countdown timer. | [BUSINESS RULE] |
| AC-JOB-003 | A professional viewing a job request | They examine the request card | It shows: service type, scheduled time, approximate distance, duration, expected earnings, and the countdown timer. | [UI RULE] |
| AC-JOB-004 | A professional with a job request | The 45-second timer expires | The request is marked as "Expired" locally, removed from their screen, and reassigned by the server. | [TECHNICAL RULE] |
| AC-JOB-005 | A professional who accepted a job | They click "Check In" at the client's location | Their status changes to "Checked In", and the client is notified. | [BUSINESS RULE] |
| AC-JOB-006 | A professional in an active visit | They complete the visit and click "Check Out" | They see a completion summary with a detailed earnings breakdown and the booking state changes to "Completed". | [BUSINESS RULE] |
| AC-JOB-007 | A professional viewing earnings | They navigate to the Earnings tab | They see a chart of weekly earnings, pending payouts, and historical data. | [UI RULE] |
| AC-JOB-008 | A professional | They attempt to go "Online" with an expired license | They are blocked from going online and prompted to update their KYC documents. | [SECURITY RULE] |
| AC-JOB-009 | A professional checking in | They are > 500 meters from the location | *[OPEN DECISION]* Does the system block the check-in or just log a geofence warning? | [OPEN DECISION] |
| AC-JOB-010 | A professional | They accept a job | The platform registers the professional as an independent contractor, not an employee. | [ASSUMPTION] |

### 4.4 KYC Verification

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-KYC-001 | A new professional | They visit the KYC setup page | They see a step-by-step document upload interface (ID, License, Certifications). | [UI RULE] |
| AC-KYC-002 | A professional | They upload a valid PDF document | They see a document preview with a success checkmark and can proceed. | [UI RULE] |
| AC-KYC-003 | A professional | They attempt to upload an invalid file type (.exe) | They see an inline error: "Only PDF, JPG, and PNG files are accepted." | [TECHNICAL RULE] |
| AC-KYC-004 | A professional with submitted KYC | They check their dashboard status | They see "Under Review" alongside the submission timestamp. | [BUSINESS RULE] |
| AC-KYC-005 | A KYC Admin | They open the verification queue | They see a data table of pending submissions, sortable by date and filterable by profession. | [UI RULE] |
| AC-KYC-006 | A KYC Admin viewing a submission | They click a table row | A right-side drawer opens displaying the document preview alongside approve/reject action buttons. | [UI RULE] |
| AC-KYC-007 | A KYC Admin | They click "Reject" | A modal dialog appears requiring them to type a rejection reason before the action can be confirmed. | [BUSINESS RULE] |
| AC-KYC-008 | A KYC Admin | They approve a professional's documents | The professional's global status changes to "Approved", unlocking platform access, and they receive an email notification. | [BUSINESS RULE] |
| AC-KYC-009 | A professional | Their KYC is marked as "Re-upload Required" | They see exactly which document failed and the admin's rejection reason. | [BUSINESS RULE] |
| AC-KYC-010 | The system | A professional's license expires tomorrow | The system automatically changes their KYC state to "Expired" at midnight and takes them offline. | [BUSINESS RULE] |

### 4.5 Admin Operations

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-ADM-001 | An Admin | They view the primary dashboard | They see critical KPI cards: Total Professionals, Pending KYC, Today's Bookings, Active Visits, Revenue, Open Tickets. | [UI RULE] |
| AC-ADM-002 | An Admin | They see a "Pending KYC" count > 0 | Clicking the KPI card directly navigates them to the filtered verification queue. | [UI RULE] |
| AC-ADM-003 | An Admin on the Bookings page | They filter by the "Disputed" status | The data table dynamically updates to show only bookings matching the selected status. | [UI RULE] |
| AC-ADM-004 | A Finance Admin | They navigate to the Payouts module | They see a table of eligible, pending payouts with a prominent "Process Batch" button. | [BUSINESS RULE] |
| AC-ADM-005 | A Finance Admin | They click "Process Batch" | A confirmation dialog appears showing the total monetary amount and record count before executing the batch. | [SECURITY RULE] |
| AC-ADM-006 | An Admin | They attempt to suspend a professional | A confirmation dialog appears explicitly listing the consequences (e.g., cancellation of future bookings). | [BUSINESS RULE] |
| AC-ADM-007 | A Super Admin | They view the Roles page | They can assign granular permissions to other admin staff (e.g., Finance vs. Support). | [SECURITY RULE] |
| AC-ADM-008 | An Admin viewing a user profile | They click "Audit Logs" | They see a chronological list of all state changes and actions performed by or on that user. | [SECURITY RULE] |
| AC-ADM-009 | An Admin processing refunds | They approve a refund | *[ASSUMPTION]* The integrated payment gateway automatically routes the funds back to the original payment method within 5-7 days. | [ASSUMPTION] |
| AC-ADM-010 | An Admin | They try to delete a user record | The system performs a soft-delete to maintain database integrity for historical bookings. | [TECHNICAL RULE] |

### 4.6 Organization Portal (B2B)

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-ORG-001 | An Org Manager | They create a staffing request | They can specify service type, required qualifications, shift schedule, and facility requirements. | [BUSINESS RULE] |
| AC-ORG-002 | An Org Manager | Their staffing request is fulfilled | They see the assigned professionals populated in their facility's shift roster view. | [UI RULE] |
| AC-ORG-003 | An Org Coordinator | A requested shift is completed | They are prompted to approve, adjust, or reject the submitted timesheet. | [BUSINESS RULE] |
| AC-ORG-004 | An Org Finance user | The billing cycle ends | They receive a consolidated invoice detailing all filled shifts and total costs. | [BUSINESS RULE] |
| AC-ORG-005 | An Org Manager | They view candidates for a request | *[OPEN DECISION]* Does the org have the right to manually reject an assigned professional before the shift starts? | [OPEN DECISION] |

### 4.7 Search & Map Integration

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-SRC-001 | A user on the search page (desktop) | The page completes loading | They see a 40/60 split layout: filterable list on the left, interactive map on the right. | [UI RULE] |
| AC-SRC-002 | A user on mobile | They tap the "Map" toggle button | A full-screen map opens displaying professional markers, hiding the list view. | [UI RULE] |
| AC-SRC-003 | A user | They apply new filters (e.g., price range) | The list results update immediately, and map markers animate to reflect the new dataset. | [TECHNICAL RULE] |
| AC-SRC-004 | A user | They click a map marker | The corresponding professional card automatically scrolls into view and highlights in the list pane. | [UI RULE] |
| AC-SRC-005 | A user | They drag the map to a new area | The search results automatically refresh based on the new bounding box. | [TECHNICAL RULE] |
| AC-SRC-006 | A user on the map | They view markers | Markers are colored using the primary Healthcare Teal and display the Lucide React `User` icon. | [UI RULE] |

### 4.8 Notifications & Messaging

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-NTF-001 | Any authenticated user | They have unread notifications | The top navigation bell icon displays a red count badge. | [UI RULE] |
| AC-NTF-002 | A user | They click the bell icon | A dropdown popover shows recent notifications with clear read/unread visual indicators. | [UI RULE] |
| AC-NTF-003 | A user | A new notification arrives via WebSocket | A toast notification appears briefly at the bottom right, and the bell counter increments. | [TECHNICAL RULE] |
| AC-NTF-004 | A user | They click "Mark all as read" | All notifications in the dropdown are visually updated, and the bell badge is cleared. | [UI RULE] |
| AC-NTF-005 | A client and professional | They have an active booking | They can exchange text messages via an in-app chat interface. | [BUSINESS RULE] |

### 4.9 Support & Ticketing

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-SUP-001 | A client or professional | They create a new support ticket | They can select a category, set priority, attach images, and provide a text description. | [BUSINESS RULE] |
| AC-SUP-002 | A Support Agent | They view the support queue | They see tickets sorted by priority and creation date, featuring status badges (Open, In Progress, Resolved). | [UI RULE] |
| AC-SUP-003 | A Support Agent | They resolve a ticket | The reporter receives an automated notification, and the ticket status updates to "Resolved". | [BUSINESS RULE] |
| AC-SUP-004 | A user viewing a resolved ticket | They are unsatisfied | They have the option to "Reopen Ticket" within 48 hours of resolution. | [BUSINESS RULE] |

### 4.10 Empty States

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-EMPTY-001 | Any list screen with no data | The screen finishes loading | A standardized contextual empty state is shown, featuring a Lucide icon, headline, supporting text, and a primary action CTA. | [UI RULE] |
| AC-EMPTY-002 | The Bookings page | The user has no bookings | The empty state explicitly explains how to find care and provides a "Search Now" button. | [UI RULE] |
| AC-EMPTY-003 | The Notifications dropdown | There are no notifications | It displays "You're all caught up!" with a subtle graphic. | [UI RULE] |

### 4.11 Error States

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-ERR-001 | A global system error occurs | The application catches the exception | A friendly error boundary screen is displayed explaining what happened and providing a "Return Home" button. | [TECHNICAL RULE] |
| AC-ERR-002 | A form has validation errors | The user attempts to submit | The form prevents submission, and inline red error text appears immediately below the offending fields. | [UI RULE] |
| AC-ERR-003 | A network timeout occurs | An API call fails | A toast notification or inline alert appears indicating connectivity issues, offering a "Retry" option. | [TECHNICAL RULE] |
| AC-ERR-004 | A user visits a non-existent URL | The router catches the 404 | A branded 404 Page Not Found screen is shown, utilizing platform styling and navigation. | [UI RULE] |

### 4.12 Loading States

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-LOAD-001 | A page requires significant data | The user waits for the initial load | Skeleton loaders matching the exact structural layout of the page are displayed. | [UI RULE] |
| AC-LOAD-002 | A button action is processing | The user clicks a submit button | The button becomes disabled, retains its width, and displays an inline spinning Lucide `Loader2` icon. | [UI RULE] |
| AC-LOAD-003 | A data table is loading | The user waits for API response | The table header renders immediately, followed by 5 rows of skeleton text. | [UI RULE] |

### 4.13 Responsive Design & Layout

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-RES-001 | Any application screen | Viewed at 375px (Mobile) | The layout stacks correctly, uses bottom-tab or hamburger navigation, and prevents horizontal scrolling. | [UI RULE] |
| AC-RES-002 | Any application screen | Viewed at 768px (Tablet) | The layout adapts gracefully, utilizing compressed navigation and adjusted grid columns. | [UI RULE] |
| AC-RES-003 | Any application screen | Viewed at 1280px (Desktop) | Full desktop experience is provided, leveraging available screen real estate and full sidebar navigation. | [UI RULE] |
| AC-RES-004 | Professional Portal | Viewed on a mobile device | Bottom tab navigation (Home, Jobs, Earnings, Profile) is fixed at the bottom of the viewport. | [UI RULE] |
| AC-RES-005 | Any interactive element | Viewed on touch devices | The minimum touch target area is exactly 44x44px to comply with usability standards. | [UI RULE] |

### 4.14 Accessibility (A11Y)

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-A11Y-001 | Any screen | Navigated solely via Keyboard | All interactive elements (links, buttons, inputs) are reachable in a logical DOM order and triggerable via Enter/Space. | [UI RULE] |
| AC-A11Y-002 | Any screen | Navigating via Keyboard | All focused elements exhibit a highly visible, consistent focus ring (Healthcare Teal, 2px). | [UI RULE] |
| AC-A11Y-003 | Any status badge | Parsed by a screen reader | The state is communicated via descriptive hidden text (e.g., `aria-label="Status: Approved"`) rather than relying on color alone. | [UI RULE] |
| AC-A11Y-004 | A modal dialog opens | Navigating via Keyboard | Focus is immediately trapped within the modal until dismissed, and background elements are unreachable. | [UI RULE] |
| AC-A11Y-005 | The user's OS settings | Set to `prefers-reduced-motion` | All non-essential animations, transitions, and map fly-to effects are disabled immediately. | [UI RULE] |
| AC-A11Y-006 | An image or icon | Rendered on screen | It contains an appropriate `alt` attribute or `aria-hidden="true"` if purely decorative. | [UI RULE] |

### 4.15 Demo Mode

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-DEMO-001 | The `demoMode` feature flag is enabled | The user views the application | A global, persistent "DEMO MODE" indicator/role switcher widget is visibly rendered. | [TECHNICAL RULE] |
| AC-DEMO-002 | The system is in Demo Mode | A user switches their role via the widget | The portal reloads immediately, switching session context and displaying the appropriate role navigation. | [TECHNICAL RULE] |
| AC-DEMO-003 | The system is in Production Mode | A user views the application | No role switcher, demo indicator, or bypass login mechanisms are visible or accessible. | [SECURITY RULE] |

### 4.16 Security & Compliance

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-SEC-001 | An API endpoint | It receives a request | It strictly validates the provided JWT, checking expiration and valid signatures. | [SECURITY RULE] |
| AC-SEC-002 | A user profile | It displays sensitive data (SSN, Phone) | The data is masked by default (e.g., `***-**-1234`) and requires explicit action to reveal. | [SECURITY RULE] |
| AC-SEC-003 | Any API payload | It contains executable scripts | The backend aggressively sanitizes all inputs to prevent XSS and SQL injection. | [SECURITY RULE] |
| AC-SEC-004 | Patient Data | It is stored or transmitted | *[ASSUMPTION]* Production healthcare licensing, scope of practice, patient privacy, and consent adhere strictly to local regulatory requirements (e.g., HIPAA), pending formal legal audit. | [ASSUMPTION] |

### 4.17 Performance

| AC-ID | GIVEN | WHEN | THEN | LABEL |
|---|---|---|---|---|
| AC-PERF-001 | A user navigates | They visit the homepage | The Lighthouse performance score must exceed 90 on desktop. | [TECHNICAL RULE] |
| AC-PERF-002 | An image asset | It is requested by the client | It is served in WebP format, appropriately sized, and lazy-loaded if below the fold. | [TECHNICAL RULE] |
| AC-PERF-003 | The application bundle | It is compiled | The main JavaScript chunk does not exceed 250KB (gzipped). | [TECHNICAL RULE] |

## 5. Pre-Release Checklist

Before any major release or production deployment, the following must be verified:

### Design & UI
- [ ] All screens implemented per `06-Screen-Specification.md`.
- [ ] All states rendered per `09-State-Machine.md`.
- [ ] Visual QA passed on all screens (Tokens, Colors, Spacing).
- [ ] Responsive QA passed explicitly at 375px, 768px, 1024px, and 1280px breakpoints.
- [ ] Light Theme enforced entirely; dark mode variables purged.
- [ ] All empty states implemented per `16-Error-Edge-Case-Matrix.md`.
- [ ] All error states implemented per `16-Error-Edge-Case-Matrix.md`.
- [ ] All loading states use appropriate skeleton loaders.
- [ ] All destructive actions (Delete, Suspend, Cancel) have confirmation dialogs.

### Technical & Quality
- [ ] Accessibility: Keyboard navigation works seamlessly.
- [ ] Accessibility: Screen reader announces complex components correctly.
- [ ] Performance: Lighthouse score > 90 on the homepage.
- [ ] Build: `npm run build` passes with zero warnings and zero errors.
- [ ] Routes: All routes resolve correctly; no dead links.
- [ ] Logs: No console errors or warnings in the production build output.
- [ ] Demo Mode: Verified that `demoMode` flag is disabled in production environments.
- [ ] Demo Data: If demo mode is active, all states are fully represented by the mock data.

## 6. Known Assumptions & Open Decisions

Throughout the QA process, the following items must be kept in mind. They represent areas where business logic is assumed or decisions are pending.

- **[OPEN DECISION]** Geofencing: Do we hard-block professional check-ins if they are outside a 500m radius of the patient's address, or merely log an anomaly for admin review?
- **[OPEN DECISION]** Organization Rejections: Can an organization manually reject a scheduled professional before the shift starts, and what is the penalty logic?
- **[ASSUMPTION]** Legal Compliance: Production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, and employment classification require separate, formal legal validation.
- **[ASSUMPTION]** Employment Classification: Professionals are treated as independent contractors by the platform, not W-2 employees.
- **[ASSUMPTION]** Payment Gateway: The integrated payment gateway automatically handles partial refunds, escrow holds (if applicable), and routing. Specific payout mechanics are mocked for MVP.
- **[ASSUMPTION]** Medical Procedures: Specific medical procedures are assumed to be covered under standard terms; however, real-world application requires strict regulatory adherence.
- **[ASSUMPTION]** GPS Live Tracking: Live tracking is mocked for the demo. Production implementation relies on specific device permissions and third-party mapping APIs.
