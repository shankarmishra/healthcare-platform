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
**Status:** New

#### Layout Structure
- **Header**: Standard global navigation bar (Logo left, Links center, Profile/Auth right).
- **Main Content**: Single column layout centered, max-width 1280px.
- **Sidebar**: Authenticated user sidebar menu on desktop.

#### Content Specification
1. **Hero/Header Section**
   - Purpose: Establish context of the page.
   - Content: H1 Page Title 'ClientDashboard', Breadcrumbs.
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

