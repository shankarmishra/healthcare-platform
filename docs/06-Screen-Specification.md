# Master Screen-by-Screen UI Specification

## SCR-PUB-001: Homepage

| Field | Description |
|---|---|
| Screen ID | SCR-PUB-001 |
| Screen Name | Homepage |
| Route | `/` |
| Role | Public |
| Purpose | Main landing page |
| Primary Goal | Complete primary action associated with Main landing page |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketing |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Main landing page |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Public JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PUB-002: Services Catalog

| Field | Description |
|---|---|
| Screen ID | SCR-PUB-002 |
| Screen Name | Services Catalog |
| Route | `/services` |
| Role | Public |
| Purpose | List available services |
| Primary Goal | Complete primary action associated with List available services |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketing |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to List available services |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Public JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-001: Search & Map

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-001 |
| Screen Name | Search & Map |
| Route | `/search` |
| Role | Client |
| Purpose | Search professionals geographically |
| Primary Goal | Complete primary action associated with Search professionals geographically |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketplace |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Search professionals geographically |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-002: Professional Listing

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-002 |
| Screen Name | Professional Listing |
| Route | `/search/results` |
| Role | Client |
| Purpose | View search results |
| Primary Goal | Complete primary action associated with View search results |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketplace |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View search results |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-003: Professional Profile

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-003 |
| Screen Name | Professional Profile |
| Route | `/pro/:id` |
| Role | Client |
| Purpose | View pro details |
| Primary Goal | Complete primary action associated with View pro details |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View pro details |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-004: Booking Wizard - Step 1 (Service Selection)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-004 |
| Screen Name | Booking Wizard - Step 1 (Service Selection) |
| Route | `/book/1` |
| Role | Client |
| Purpose | Select service category |
| Primary Goal | Complete primary action associated with Select service category |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Select service category |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-005: Booking Wizard - Step 2 (Patient Details)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-005 |
| Screen Name | Booking Wizard - Step 2 (Patient Details) |
| Route | `/book/2` |
| Role | Client |
| Purpose | Enter patient info |
| Primary Goal | Complete primary action associated with Enter patient info |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Enter patient info |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-006: Booking Wizard - Step 3 (Location)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-006 |
| Screen Name | Booking Wizard - Step 3 (Location) |
| Route | `/book/3` |
| Role | Client |
| Purpose | Provide address |
| Primary Goal | Complete primary action associated with Provide address |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Provide address |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-007: Booking Wizard - Step 4 (Service Type/Duration)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-007 |
| Screen Name | Booking Wizard - Step 4 (Service Type/Duration) |
| Route | `/book/4` |
| Role | Client |
| Purpose | Set duration |
| Primary Goal | Complete primary action associated with Set duration |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Set duration |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-008: Booking Wizard - Step 5 (Date & Time)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-008 |
| Screen Name | Booking Wizard - Step 5 (Date & Time) |
| Route | `/book/5` |
| Role | Client |
| Purpose | Select schedule |
| Primary Goal | Complete primary action associated with Select schedule |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Select schedule |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-009: Booking Wizard - Step 6 (Matching Preference)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-009 |
| Screen Name | Booking Wizard - Step 6 (Matching Preference) |
| Route | `/book/6` |
| Role | Client |
| Purpose | Auto vs manual matching |
| Primary Goal | Complete primary action associated with Auto vs manual matching |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Auto vs manual matching |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-010: Booking Wizard - Step 7 (Professional Selection)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-010 |
| Screen Name | Booking Wizard - Step 7 (Professional Selection) |
| Route | `/book/7` |
| Role | Client |
| Purpose | Choose specific pro |
| Primary Goal | Complete primary action associated with Choose specific pro |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Choose specific pro |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-011: Booking Wizard - Step 8 (Pricing Summary)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-011 |
| Screen Name | Booking Wizard - Step 8 (Pricing Summary) |
| Route | `/book/8` |
| Role | Client |
| Purpose | Review costs |
| Primary Goal | Complete primary action associated with Review costs |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Review costs |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-012: Booking Wizard - Step 9 (Payment)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-012 |
| Screen Name | Booking Wizard - Step 9 (Payment) |
| Route | `/book/9` |
| Role | Client |
| Purpose | Process payment |
| Primary Goal | Complete primary action associated with Process payment |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Process payment |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-013: Booking Wizard - Step 10 (Confirmation)

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-013 |
| Screen Name | Booking Wizard - Step 10 (Confirmation) |
| Route | `/book/10` |
| Role | Client |
| Purpose | Booking success |
| Primary Goal | Complete primary action associated with Booking success |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Booking success |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-014: My Bookings

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-014 |
| Screen Name | My Bookings |
| Route | `/client/bookings` |
| Role | Client |
| Purpose | List past/upcoming bookings |
| Primary Goal | Complete primary action associated with List past/upcoming bookings |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to List past/upcoming bookings |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-015: Booking Detail & Tracking

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-015 |
| Screen Name | Booking Detail & Tracking |
| Route | `/client/bookings/:id` |
| Role | Client |
| Purpose | Track specific booking |
| Primary Goal | Complete primary action associated with Track specific booking |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Tracking |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Track specific booking |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-016: Submit Review

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-016 |
| Screen Name | Submit Review |
| Route | `/client/review/:id` |
| Role | Client |
| Purpose | Rate professional |
| Primary Goal | Complete primary action associated with Rate professional |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Rate professional |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-017: Client Support

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-017 |
| Screen Name | Client Support |
| Route | `/client/support` |
| Role | Client |
| Purpose | Get help |
| Primary Goal | Complete primary action associated with Get help |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Get help |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-018: Client Profile / Settings

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-018 |
| Screen Name | Client Profile / Settings |
| Route | `/client/settings` |
| Role | Client |
| Purpose | Manage account |
| Primary Goal | Complete primary action associated with Manage account |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage account |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-CLT-019: Notifications

| Field | Description |
|---|---|
| Screen ID | SCR-CLT-019 |
| Screen Name | Notifications |
| Route | `/client/notifications` |
| Role | Client |
| Purpose | View alerts |
| Primary Goal | Complete primary action associated with View alerts |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View alerts |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Client JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-001: Professional Dashboard

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-001 |
| Screen Name | Professional Dashboard |
| Route | `/pro/dashboard` |
| Role | Professional |
| Purpose | Overview of schedule and earnings |
| Primary Goal | Complete primary action associated with Overview of schedule and earnings |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Overview of schedule and earnings |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-002: Job Requests

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-002 |
| Screen Name | Job Requests |
| Route | `/pro/requests` |
| Role | Professional |
| Purpose | View incoming matching requests |
| Primary Goal | Complete primary action associated with View incoming matching requests |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View incoming matching requests |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-003: Job Detail

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-003 |
| Screen Name | Job Detail |
| Route | `/pro/requests/:id` |
| Role | Professional |
| Purpose | Review specific job details |
| Primary Goal | Complete primary action associated with Review specific job details |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Review specific job details |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-004: Schedule / Calendar

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-004 |
| Screen Name | Schedule / Calendar |
| Route | `/pro/schedule` |
| Role | Professional |
| Purpose | Manage availability |
| Primary Goal | Complete primary action associated with Manage availability |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage availability |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-005: Active Visit

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-005 |
| Screen Name | Active Visit |
| Route | `/pro/visit/active` |
| Role | Professional |
| Purpose | Manage ongoing visit |
| Primary Goal | Complete primary action associated with Manage ongoing visit |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Tracking |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage ongoing visit |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-006: Visit Completion

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-006 |
| Screen Name | Visit Completion |
| Route | `/pro/visit/complete` |
| Role | Professional |
| Purpose | Finalize notes and sign off |
| Primary Goal | Complete primary action associated with Finalize notes and sign off |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Finalize notes and sign off |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-007: Earnings Dashboard

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-007 |
| Screen Name | Earnings Dashboard |
| Route | `/pro/earnings` |
| Role | Professional |
| Purpose | Track income |
| Primary Goal | Complete primary action associated with Track income |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Track income |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-008: KYC Document Submission

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-008 |
| Screen Name | KYC Document Submission |
| Route | `/pro/kyc/submit` |
| Role | Professional |
| Purpose | Upload licenses |
| Primary Goal | Complete primary action associated with Upload licenses |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Upload licenses |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-009: KYC Status

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-009 |
| Screen Name | KYC Status |
| Route | `/pro/kyc/status` |
| Role | Professional |
| Purpose | Check approval state |
| Primary Goal | Complete primary action associated with Check approval state |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Check approval state |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-010: Professional Profile (Own)

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-010 |
| Screen Name | Professional Profile (Own) |
| Route | `/pro/profile` |
| Role | Professional |
| Purpose | Edit public profile |
| Primary Goal | Complete primary action associated with Edit public profile |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Edit public profile |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-011: Reviews Received

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-011 |
| Screen Name | Reviews Received |
| Route | `/pro/reviews` |
| Role | Professional |
| Purpose | Read client feedback |
| Primary Goal | Complete primary action associated with Read client feedback |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Read client feedback |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-012: Notifications

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-012 |
| Screen Name | Notifications |
| Route | `/pro/notifications` |
| Role | Professional |
| Purpose | View pro alerts |
| Primary Goal | Complete primary action associated with View pro alerts |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View pro alerts |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-PRO-013: Support

| Field | Description |
|---|---|
| Screen ID | SCR-PRO-013 |
| Screen Name | Support |
| Route | `/pro/support` |
| Role | Professional |
| Purpose | Pro help center |
| Primary Goal | Complete primary action associated with Pro help center |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Pro help center |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Professional JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-001: Admin Dashboard

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-001 |
| Screen Name | Admin Dashboard |
| Route | `/admin` |
| Role | Admin |
| Purpose | Platform overview |
| Primary Goal | Complete primary action associated with Platform overview |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Platform overview |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-002: Professional List

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-002 |
| Screen Name | Professional List |
| Route | `/admin/pros` |
| Role | Admin |
| Purpose | Manage all pros |
| Primary Goal | Complete primary action associated with Manage all pros |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage all pros |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-003: Professional Detail (drawer)

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-003 |
| Screen Name | Professional Detail (drawer) |
| Route | `/admin/pros/:id` |
| Role | Admin |
| Purpose | View single pro |
| Primary Goal | Complete primary action associated with View single pro |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View single pro |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-004: KYC Verification Queue

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-004 |
| Screen Name | KYC Verification Queue |
| Route | `/admin/kyc` |
| Role | Admin |
| Purpose | Pending approvals |
| Primary Goal | Complete primary action associated with Pending approvals |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Pending approvals |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-005: KYC Inspector (drawer)

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-005 |
| Screen Name | KYC Inspector (drawer) |
| Route | `/admin/kyc/:id` |
| Role | Admin |
| Purpose | Review documents |
| Primary Goal | Complete primary action associated with Review documents |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Review documents |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-006: Client List

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-006 |
| Screen Name | Client List |
| Route | `/admin/clients` |
| Role | Admin |
| Purpose | Manage clients |
| Primary Goal | Complete primary action associated with Manage clients |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage clients |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-007: Organization List

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-007 |
| Screen Name | Organization List |
| Route | `/admin/orgs` |
| Role | Admin |
| Purpose | Manage hospitals/agencies |
| Primary Goal | Complete primary action associated with Manage hospitals/agencies |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage hospitals/agencies |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-008: Service Management

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-008 |
| Screen Name | Service Management |
| Route | `/admin/services` |
| Role | Admin |
| Purpose | Configure service types |
| Primary Goal | Complete primary action associated with Configure service types |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Configure service types |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-009: Pricing Management

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-009 |
| Screen Name | Pricing Management |
| Route | `/admin/pricing` |
| Role | Admin |
| Purpose | Set rates and fees |
| Primary Goal | Complete primary action associated with Set rates and fees |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Set rates and fees |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-010: Booking List

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-010 |
| Screen Name | Booking List |
| Route | `/admin/bookings` |
| Role | Admin |
| Purpose | View all bookings |
| Primary Goal | Complete primary action associated with View all bookings |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to View all bookings |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-011: Booking Detail (drawer)

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-011 |
| Screen Name | Booking Detail (drawer) |
| Route | `/admin/bookings/:id` |
| Role | Admin |
| Purpose | Investigate booking |
| Primary Goal | Complete primary action associated with Investigate booking |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Detail |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Investigate booking |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-012: Matching & Assignment

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-012 |
| Screen Name | Matching & Assignment |
| Route | `/admin/matching` |
| Role | Admin |
| Purpose | Manual matchmaking |
| Primary Goal | Complete primary action associated with Manual matchmaking |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manual matchmaking |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-013: Payment Transactions

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-013 |
| Screen Name | Payment Transactions |
| Route | `/admin/payments` |
| Role | Admin |
| Purpose | Monitor inbound money |
| Primary Goal | Complete primary action associated with Monitor inbound money |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Monitor inbound money |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-014: Payout Management

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-014 |
| Screen Name | Payout Management |
| Route | `/admin/payouts` |
| Role | Admin |
| Purpose | Process outbound money |
| Primary Goal | Complete primary action associated with Process outbound money |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Process outbound money |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-015: Reviews Moderation

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-015 |
| Screen Name | Reviews Moderation |
| Route | `/admin/reviews` |
| Role | Admin |
| Purpose | Moderate feedback |
| Primary Goal | Complete primary action associated with Moderate feedback |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Moderate feedback |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-016: Support Desk

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-016 |
| Screen Name | Support Desk |
| Route | `/admin/support` |
| Role | Admin |
| Purpose | Handle tickets |
| Primary Goal | Complete primary action associated with Handle tickets |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Handle tickets |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-017: Notifications

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-017 |
| Screen Name | Notifications |
| Route | `/admin/notifications` |
| Role | Admin |
| Purpose | System alerts |
| Primary Goal | Complete primary action associated with System alerts |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to System alerts |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-018: Reports

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-018 |
| Screen Name | Reports |
| Route | `/admin/reports` |
| Role | Admin |
| Purpose | Export data |
| Primary Goal | Complete primary action associated with Export data |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Export data |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-019: Roles & Permissions

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-019 |
| Screen Name | Roles & Permissions |
| Route | `/admin/roles` |
| Role | Admin |
| Purpose | RBAC management |
| Primary Goal | Complete primary action associated with RBAC management |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to RBAC management |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ADM-020: Platform Settings

| Field | Description |
|---|---|
| Screen ID | SCR-ADM-020 |
| Screen Name | Platform Settings |
| Route | `/admin/settings` |
| Role | Admin |
| Purpose | Global configs |
| Primary Goal | Complete primary action associated with Global configs |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Global configs |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Admin JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ORG-001: Organization Dashboard

| Field | Description |
|---|---|
| Screen ID | SCR-ORG-001 |
| Screen Name | Organization Dashboard |
| Route | `/org` |
| Role | Organization |
| Purpose | Overview of corporate staffing |
| Primary Goal | Complete primary action associated with Overview of corporate staffing |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Dashboard |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Overview of corporate staffing |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Organization JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ORG-002: Staffing Request Form

| Field | Description |
|---|---|
| Screen ID | SCR-ORG-002 |
| Screen Name | Staffing Request Form |
| Route | `/org/request` |
| Role | Organization |
| Purpose | Request bulk staff |
| Primary Goal | Complete primary action associated with Request bulk staff |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Request bulk staff |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Organization JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ORG-003: Roster Management

| Field | Description |
|---|---|
| Screen ID | SCR-ORG-003 |
| Screen Name | Roster Management |
| Route | `/org/roster` |
| Role | Organization |
| Purpose | Manage assigned staff |
| Primary Goal | Complete primary action associated with Manage assigned staff |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Manage assigned staff |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Organization JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-ORG-004: Timesheet Approval

| Field | Description |
|---|---|
| Screen ID | SCR-ORG-004 |
| Screen Name | Timesheet Approval |
| Route | `/org/timesheets` |
| Role | Organization |
| Purpose | Approve logged hours |
| Primary Goal | Complete primary action associated with Approve logged hours |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Table |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Approve logged hours |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated Organization JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-UTL-001: Login

| Field | Description |
|---|---|
| Screen ID | SCR-UTL-001 |
| Screen Name | Login |
| Route | `/login` |
| Role | All |
| Purpose | Authenticate user |
| Primary Goal | Complete primary action associated with Authenticate user |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Authenticate user |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated All JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-UTL-002: Register

| Field | Description |
|---|---|
| Screen ID | SCR-UTL-002 |
| Screen Name | Register |
| Route | `/register` |
| Role | All |
| Purpose | Create account |
| Primary Goal | Complete primary action associated with Create account |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Form |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Create account |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated All JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-UTL-003: 404 Not Found

| Field | Description |
|---|---|
| Screen ID | SCR-UTL-003 |
| Screen Name | 404 Not Found |
| Route | `*` |
| Role | All |
| Purpose | Missing page |
| Primary Goal | Complete primary action associated with Missing page |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketing |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Missing page |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated All JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

## SCR-UTL-004: Unauthorized

| Field | Description |
|---|---|
| Screen ID | SCR-UTL-004 |
| Screen Name | Unauthorized |
| Route | `/401` |
| Role | All |
| Purpose | Access denied |
| Primary Goal | Complete primary action associated with Access denied |
| Primary CTA | Primary Action Button |
| Secondary CTA | Secondary Action (e.g. Cancel, Back) |
| Layout Type | Marketing |
| Desktop Layout | Standard desktop container with appropriate margins. Sidebar if dashboard. Theme uses Healthcare Teal #0EA5A4 & Medical Blue #2563EB. Font: Manrope. |
| Tablet Layout | Responsive adaptation. Collapsed sidebar if applicable. |
| Mobile Layout | Stacked vertically. Hamburger menu. Full width elements. |
| Section Order | 1. Top Navigation<br>2. Page Header<br>3. Main Content Area<br>4. Action Footer |
| Data Required | APIs relevant to Access denied |
| Components Used | `Header`, `Button`, `Card`, `LucideReactIcons`, `LayoutContainer` |
| States | Normal, Loading (skeleton), Error (toast/banner), Empty |
| Permissions | Validated All JWT token. [SECURITY RULE] |
| Animations | Standard page transitions, hover states on buttons. |
| Media | Lucide React icons, Light Theme only. |
| Error States | Inline validation errors, API failure banners. |
| Empty States | Illustration + "No data found" + CTA. |
| Loading States | Shimmer/Skeleton loaders for data sections. |
| Success State | Toast notification "Action completed successfully." |
| Dependencies | Authentication state, user profile loaded. |

