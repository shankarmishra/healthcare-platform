# Client Page-by-Page Specifications

### HomePage
**Route:** `/`
**Auth Required:** No
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'Home', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ServicesPage
**Route:** `/services`
**Auth Required:** No
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'Services', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ServiceDetailPage
**Route:** `/services/:id`
**Auth Required:** No
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ServiceDetail', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### SearchPage
**Route:** `/client/search`
**Auth Required:** No
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'Search', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### BookingWizardPage
**Route:** `/client/booking/wizard`
**Auth Required:** Optional to start, required at step 3
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'BookingWizard', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### MyBookingsPage
**Route:** `/client/bookings`
**Auth Required:** Yes
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'MyBookings', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### BookingDetailPage
**Route:** `/client/bookings/:id`
**Auth Required:** Yes
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'BookingDetail', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ClientProfilePage
**Route:** `/client/profile`
**Auth Required:** Yes
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ClientProfile', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ClientNotificationsPage
**Route:** `/client/notifications`
**Auth Required:** Yes
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ClientNotifications', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ClientSupportPage
**Route:** `/client/support`
**Auth Required:** Yes
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ClientSupport', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ProProfileViewPage
**Route:** `/pros/:id`
**Auth Required:** No
**Status:** Exists

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ProProfileView', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### ClientDashboard
**Route:** `/client/dashboard`
**Auth Required:** Yes
**Status:** New / Planned Spec

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: 12-column grid layout (Main dashboard left 8 cols, Concierge quick actions & helpline right 4 cols).

#### Content Specification & 11 State-Specific Dashboard Views
The Client Dashboard adapts dynamically to the client's current care state:

1. **State 1: First Visit (Zero History)**
   - Hero banner: "Welcome to CareConnect Concierge! Let's arrange care for your family."
   - Primary CTA: "Schedule Your First Care Visit"
   - Features 3 quick onboarding steps: Add Family Member, Verify Address in NCR, Explore Services.

2. **State 2: No Active Bookings (Idle History)**
   - Shows welcome back header, quick rebook card for past service, and family patient selector.

3. **State 3: Pending Booking Request**
   - Active Banner: "Your care request is being reviewed by Operations Desk."
   - Shows booking reference code, requested date, shift, and status badge (`REQUESTED`).

4. **State 4: Awaiting Staff Assignment**
   - Active Banner: "Selecting qualified in-house staff near your locality..."
   - Shows animated ops progress bar with ETA countdown to confirmation.

5. **State 5: Confirmed Booking**
   - Active Card: "Staff Assigned & Care Confirmed!"
   - Displays assigned nurse photo, name, council registration badge, and visit checklist.

6. **State 6: Upcoming Visit (Tomorrow / Next Days)**
   - Displays countdown clock to shift start, shift start instructions, and masked staff call CTA.

7. **State 7: Staff En Route (`ON_THE_WAY`)**
   - Active Banner: "Staff member is traveling to your care location."
   - Includes real-time GPS transit tracking card with estimated arrival time (ETA 18 mins).

8. **State 8: Care In Progress (`IN_PROGRESS`)**
   - Active Card: "Care Visit Active • Checked In at 10:02 AM"
   - Displays vital signs monitoring widget and live clinical activity log.

9. **State 9: Visit Completed (`COMPLETED`)**
   - Active Banner: "Care Visit Completed Successfully!"
   - Prompts 5-star review modal CTA ("Rate Your Care Experience") and digital visit summary link.

10. **State 10: Payment Pending (`PAYMENT_PENDING`)**
    - Alert Banner: "Invoice #INV-2026-8819 Ready for Payment"
    - Displays total GST itemized amount with "Pay Now via UPI / Card" primary CTA.

11. **State 11: Support Issue Active (`SUPPORT_ISSUE`)**
    - Notification Card: "Support Ticket #TKT-9912 in Progress"
    - Shows live chat message thread preview and Operations Lead contact hotline.

#### Interactions
- Primary CTAs trigger booking wizard or detail drill-down.
- Staff call button routes call through masked privacy phone gateway.
- Support button opens quick drawer to submit ticket.

#### Responsive Behavior
- **Desktop (1280px+)**: 8-col main timeline + 4-col concierge sidebar.
- **Tablet (768-1279px)**: 2-column grid. Sidebar collapses below main banner.
- **Mobile (< 768px)**: 1-column stack. Active care card pinned to top.

#### Accessibility
- **Focus Order**: Top banner -> Active care card -> Quick actions -> Recent history.
- **Aria Live**: `aria-live="polite"` region for active visit status updates.

---

### SavedPatients
**Route:** `/client/patients`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'SavedPatients', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### PatientDetail
**Route:** `/client/patients/:id`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'PatientDetail', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### SavedAddresses
**Route:** `/client/addresses`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'SavedAddresses', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### PaymentsInvoices
**Route:** `/client/payments`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'PaymentsInvoices', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### InvoiceDetail
**Route:** `/client/payments/:id`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'InvoiceDetail', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### Settings
**Route:** `/client/settings`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'Settings', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---

### Security
**Route:** `/client/security`
**Auth Required:** Yes
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'Security', Breadcrumbs.
   - Layout: Flex row, center aligned.
   - Component: Custom Hero or standard page header.
2. **Main Data Section**
   - Purpose: Display primary information for this route.
   - Content: Specific fields depending on the entity (Lists, Details, Forms).
   - Layout: CSS Grid or Flexbox stack based on content volume.
   - Component: Card grids, Data tables, or interactive forms.
   - Empty State: 'No records found' with an illustrative icon and CTA.
   - Loading State: Shimmering skeleton blocks matching the expected layout.

#### Interactions
- Buttons have hover effects (shadow increase, color shift).
- Forms have inline validation.
- Deletion or destructive actions trigger a confirmation modal.
- Modals trap focus and can be closed via 'Esc' key or clicking the backdrop.

#### Responsive Behavior
- **Desktop (1280px+)**: Multi-column grids (e.g., 3-4 cards per row). Sidebars fully visible.
- **Tablet (768-1279px)**: 2-column grids. Sidebar collapses to icons or hamburger menu.
- **Mobile (< 768px)**: 1-column stack. Typography scales down (H1 becomes 28px). Bottom navigation or hamburger menu.

#### Accessibility
- **Focus Order**: Logical top-to-bottom, left-to-right via `tabindex='0'`.
- **Aria Labels**: All icon-only buttons require `aria-label`.
- **Keyboard Shortcuts**: 'Enter' to submit forms, 'Esc' to close drawers/modals.

---


## Detailed Specific Overrides

### Dashboard Overrides
The ClientDashboard aggregates data from multiple sources. It displays a "Welcome Banner" with dynamic greetings. The "Upcoming Care" section requires real-time polling or websockets to reflect active shifts.

### Settings Overrides
The Settings page includes deeply nested toggle groups for Notification Preferences (Email, SMS, Push) broken down by category (Marketing, Booking Updates, Security).

### Security Overrides
Requires current password to change to a new password. Implement a password strength meter (progress bar with color coding: red, yellow, green) below the new password input.

