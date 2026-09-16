# 15. Responsive Design System Specification

## Overview
This document outlines the Responsive Design System specification for the Healthcare Staffing & Home Care Platform. This ensures a consistent, accessible, and high-quality user experience across all devices and screen sizes for Clients, Professionals, Admins, and Organizations.

## 1. Breakpoint System
[UI RULE] The application will use a mobile-first approach, scaling up design complexity as screen real estate increases.

| Name | Range | Tailwind Prefix | Description |
|---|---|---|---|
| Mobile | < 640px | (default) | Phone portrait |
| Large Mobile | 640-767px | `sm:` | Phone landscape / large phone |
| Tablet | 768-1023px | `md:` | Tablet portrait |
| Desktop | 1024-1279px | `lg:` | Standard laptop |
| Large Desktop | 1280px+ | `xl:` | External monitor / wide laptop |
| Extra Large | 1536px+ | `2xl:` | Ultra-wide displays |

### Breakpoint Application Rules
- **[TECHNICAL RULE]** All components MUST be built mobile-first. Default styling targets Mobile (< 640px).
- **[TECHNICAL RULE]** Use Tailwind CSS responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to override default styles at higher breakpoints.
- **[UI RULE]** Avoid creating custom breakpoints unless absolutely necessary for a specific complex component.

## 2. Core Principle
**Mobile is NOT "desktop but narrower." Mobile layouts must be intentionally redesigned.**

### Core Responsive Tenets
- **[UI RULE] Touch Targets:** Minimum 44px × 44px for all interactive elements on touch devices to comply with accessibility standards.
- **[UI RULE] No Hover-Only Interactions:** Information or actions revealed on hover MUST have a tap equivalent or be always visible on mobile/tablet devices.
- **[UI RULE] Single-Column Layouts:** Complex forms and content areas MUST collapse to a single column on mobile.
- **[UI RULE] Modal Behavior:** Use full-screen modals on mobile to prevent scrolling within scrolling contexts.
- **[UI RULE] Drawers vs. Sheets:** Use bottom sheets instead of side drawers on mobile for easier one-handed reachability.

## 3. Content Width
To maintain readability and aesthetic balance, content should not stretch indefinitely on large screens.

| Context | Max Width | Centering |
|---|---|---|
| Main content | 1280px | Centered with auto margins |
| Marketing sections | 1200-1320px | Centered |
| Admin dashboard | 1400px | Centered |
| Full-width sections | 100% | Edge-to-edge background, content constrained |

### Width Constraints
- **[UI RULE] Large Screen Rule:** Do NOT stretch content endlessly. Maintain max width. Allow background whitespace to frame the content.
- **[UI RULE] Reading Length:** Paragraph text should not exceed 75-80 characters in width for optimal readability.

## 4. Page Padding
Padding scales proportionally with the viewport to maintain comfortable breathing room.

| Breakpoint | Padding |
|---|---|
| Mobile (< 640px) | 16px |
| Tablet (768-1023px) | 24px |
| Desktop (1024-1279px) | 32px |
| Large Desktop (1280px+) | 40px+ |

- **[UI RULE] Nested Padding:** Nested containers (e.g., cards inside a page grid) should use smaller padding than the page container to maintain hierarchy.

## 5. Navigation Responsive Behavior

### 5.1 Public / Client Header
| Breakpoint | Behavior |
|---|---|
| Desktop | Full horizontal nav: Logo, Services, How It Works, Professionals, Organizations, Support, Login, CTA (Find Care) |
| Tablet | Logo + Hamburger menu + CTA |
| Mobile | Logo + Hamburger + CTA (simplified text or icon) |

- **[UI RULE]** Hamburger menu must open a full-screen overlay or a wide slide-out menu.
- **[ASSUMPTION]** The "Find Care" CTA is the highest priority action and must remain visible at all times.

### 5.2 Professional Portal
| Breakpoint | Behavior |
|---|---|
| Desktop | Top header with horizontal nav |
| Tablet | Top header with hamburger |
| Mobile | Bottom tab bar: Dashboard \| Jobs \| Schedule \| Earnings \| More |

- **[UI RULE] Bottom Tab Limits:** Max items: 5. "More" opens a bottom sheet with remaining options (Profile, Settings, Support).
- **[UI RULE] Mobile Context:** Bottom tabs are crucial for Professionals who use the app on the go with one hand.

### 5.3 Admin Portal
| Breakpoint | Behavior |
|---|---|
| Desktop | Fixed left sidebar (260px width) + main content |
| Tablet | Collapsible sidebar (icon-only, 64px) + main content |
| Mobile | Hamburger menu → full-screen sidebar overlay |

- **[UI RULE] Admin Density:** Admins need high density. Keep the sidebar pinned on desktop.
- **[OPEN DECISION]** Should the tablet sidebar expand on hover?

### 5.4 Organization Portal
| Breakpoint | Behavior |
|---|---|
| Desktop | Standard top header with full nav |
| Tablet/Mobile | Hamburger menu |

## 6. Layout Pattern Adaptations

### 6.1 Hero Section (Homepage)
| Breakpoint | Layout |
|---|---|
| Desktop | 2-column: Left 48% (text + CTA) / Right 52% (visual/video) |
| Tablet | 2-column: Left 55% / Right 45% (smaller visual) |
| Mobile | Single column: Text + CTA → Visual below (cropped/smaller) |

### 6.2 Search Results
| Breakpoint | Layout |
|---|---|
| Desktop | Split: 40% list / 60% map (map sticky) |
| Tablet | Full-width list with map toggle button |
| Mobile | Full-width list → full-screen map modal on tap |

- **[BUSINESS RULE]** The map view must be easily accessible but not block the primary list view on small screens.

### 6.3 Professional Profile
| Breakpoint | Layout |
|---|---|
| Desktop | 2-column: Main 65% / Sticky sidebar 35% (booking card) |
| Tablet | Single column: content → booking card below |
| Mobile | Single column: content → sticky bottom CTA bar |

- **[UI RULE]** The "Book Now" CTA must be sticky at the bottom of the screen on mobile to ensure conversion rates.

### 6.4 Booking Wizard
| Breakpoint | Layout |
|---|---|
| Desktop | Centered card (max-width 720px) with step indicator |
| Tablet | Same, slightly wider padding |
| Mobile | Full-width, step indicator compact (dots or numbers only) |

### 6.5 Admin Dashboard
| Breakpoint | Layout |
|---|---|
| Desktop | 4-column KPI grid → 2-column widget grid |
| Tablet | 2-column KPI grid → single-column widgets |
| Mobile | Single-column everything, KPIs stack vertically |

### 6.6 Admin Tables
| Breakpoint | Layout |
|---|---|
| Desktop | Full table with all columns |
| Tablet | Table with horizontal scroll, priority columns visible |
| Mobile | Responsive cards OR horizontal scroll table (OPEN DECISION per table) |

- **[UI RULE] Table Cards:** On mobile, complex tables should ideally transform into a stacked card list format where each row becomes a card.

### 6.7 Admin Drawers
| Breakpoint | Layout |
|---|---|
| Desktop | Right-side drawer (480px width) |
| Tablet | Right-side drawer (400px width) |
| Mobile | Full-screen bottom sheet |

### 6.8 Cards Grid
| Breakpoint | Layout |
|---|---|
| Desktop | 3-4 columns |
| Tablet | 2 columns |
| Mobile | 1 column (full width) |

### 6.9 Service Section (Homepage)
| Breakpoint | Layout |
|---|---|
| Desktop | 1 large feature card + 4 supporting cards (asymmetric grid) |
| Tablet | 2-column grid (5 cards) |
| Mobile | Horizontal scroll carousel or vertical stack |

### 6.10 KPI Cards
| Breakpoint | Layout |
|---|---|
| Desktop | 4 per row |
| Tablet | 2 per row |
| Mobile | 2 per row (compact) or 1 per row |

### 6.11 Professional Job Card
| Breakpoint | Layout |
|---|---|
| Desktop | Horizontal card with details + actions |
| Mobile | Vertical card: key info → large Accept/Reject buttons |

- **[UI RULE] Touch Targets:** Accept/Reject buttons on mobile must be large and prominent to facilitate quick decisions.

### 6.12 Active Visit
| Breakpoint | Layout |
|---|---|
| Desktop | Large status + details panel |
| Mobile | Full-screen status, sticky action buttons at bottom |

## 7. Mobile Priority by Role
Mobile context implies specific goals. Features must be prioritized accordingly.

### 7.1 Professional (Most Critical Mobile Experience)
Professionals are field workers. Their mobile app is their primary tool.
1. Active visit status & timer (Check-in/out)
2. Job request accept/reject notifications
3. Schedule overview (Today's visits)
4. Earnings summary (Quick glance)
5. Profile & KYC document upload (Camera integration)

### 7.2 Client / Patient
Clients may book from the couch or in a hurry.
1. Search for care (Quick entry of location and needs)
2. Book service (Simplified wizard)
3. Track active visit (Is the professional on the way?)
4. View bookings (Upcoming and past)
5. Support (Emergency contacts)

### 7.3 Admin
Admins usually work on desktop, but need mobile for emergencies.
1. Critical alerts (System issues, severe disputes)
2. KYC pending queue (Quick approvals on the go)
3. Active bookings overview
4. Active visits (Monitoring)
5. Finance overview (High-level metrics)

### 7.4 Organization
Similar to Admins, usually desktop.
1. Shift confirmation requests
2. Timesheet approvals
3. Roster management

## 8. Tablet-Specific Rules
Tablets represent a hybrid zone requiring careful attention.
- **[UI RULE] Collapse Gracefully:** When desktop 2-column layouts become cramped, collapse to a content-first approach with the supporting panel placed below.
- **[UI RULE] Text Scaling:** Never squeeze text columns to the point where words hyphenate constantly. Decrease font size slightly or switch to single column.
- **[UI RULE] Form Fields:** Maintain full-width inputs on tablet rather than forcing a 2-column layout that feels compressed.
- **[UI RULE] Tables:** Allow horizontal scroll for complex tables on tablet rather than hiding critical columns. Ensure a visual indicator (fade or shadow) shows more content is available.

## 9. Typography Scaling
Font sizes must scale down gracefully to ensure readability without overwhelming small screens.
We use Manrope (Inter fallback).

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero Display | 56-64px | 44-52px | 38-46px |
| H1 | 44-48px | 38-42px | 32-38px |
| H2 | 36-40px | 32-36px | 28-32px |
| H3 | 24-28px | 22-26px | 22-26px |
| H4 | 18-20px | 18-20px | 18-20px |
| Body | 15-16px | 15-16px | 15-16px |
| Small | 13-14px | 13-14px | 13-14px |

- **[UI RULE] Line Height:** Maintain a line height of 1.5 for body text across all devices. Headings should be tighter (1.1 - 1.2).
- **[UI RULE] Font Weight:** Use Medium (500) for body text and SemiBold (600) or Bold (700) for headings to maintain contrast.

## 10. Image/Video Responsive Rules
Media must not break layouts or consume unnecessary bandwidth on mobile.

- **[UI RULE] Hero video:** Desktop full motion, tablet cropped focus, mobile → fallback to a static poster image to save bandwidth and improve performance.
- **[UI RULE] PNG characters/illustrations:** Desktop full render, mobile → cropped to focus on faces/actions or hidden entirely if they take up too much vertical space.
- **[UI RULE] Maps:** Desktop inline interactive, mobile → full-screen toggle to prevent accidental scrolling when trying to pan the map.
- **[UI RULE] Charts:** Desktop side-by-side or large canvas, mobile → stacked vertically or wrapped in a horizontal scroll container.
- **[TECHNICAL RULE] Image Loading:** Use `loading="lazy"` for all images below the fold, and provide `srcset` for responsive image sizing.

## 11. Touch Interactions & Gestures
Mobile and tablet devices rely on touch.

- **[UI RULE] Swipe to Action:** Implement swipe gestures on list items (e.g., swipe right to approve, swipe left to reject) specifically in the Professional and Admin portals.
- **[UI RULE] Pull to Refresh:** Standard pattern for lists (Job requests, Bookings) on mobile.
- **[UI RULE] Pinch to Zoom:** Ensure images (KYC documents, receipts) can be pinched to zoom on mobile devices.
- **[UI RULE] Tap vs Click:** Ensure visual feedback (active state, ripple effect) is immediate upon tap.

## 12. Forms & Input Responsive Rules
Forms are notoriously difficult on mobile.

- **[UI RULE] Input Types:** Always use correct HTML5 input types (`tel`, `email`, `number`) to trigger the correct native mobile keyboard.
- **[UI RULE] Disable Zoom:** Ensure `font-size` on inputs is at least 16px to prevent iOS Safari from auto-zooming when an input is focused.
- **[UI RULE] Sticky Submit:** On long forms (Booking Wizard, Registration), the submit or "Next" button should be sticky at the bottom of the viewport.
- **[UI RULE] Steppers:** Vertical steppers on desktop must convert to horizontal progress bars or simple step text (e.g., "Step 2 of 4") on mobile.

## 13. Modals, Dialogs & Overlays
Managing z-index and screen real estate.

- **[UI RULE] Desktop Modals:** Centered dialog box with a backdrop overlay. Clicking backdrop closes the modal.
- **[UI RULE] Mobile Modals (Sheets):** Modals should appear as bottom sheets anchored to the bottom edge. For complex tasks (e.g., filling out a sub-form), the modal should take over the full screen.
- **[UI RULE] Close Affordance:** Always provide a clear, large 'X' or 'Close' button. On iOS, support swipe-down to dismiss bottom sheets.

## 14. Accessibility on Mobile
Responsive design must include accessibility scaling.

- **[UI RULE] Dynamic Type:** Support OS-level text scaling (Dynamic Type on iOS, Display Size on Android). Do not hardcode heights on text containers.
- **[UI RULE] Contrast:** Ensure brand colors (Healthcare Teal #0EA5A4, Medical Blue #2563EB) maintain proper contrast against light backgrounds, especially outdoors on mobile screens.
- **[UI RULE] Screen Readers:** Ensure semantic HTML and proper ARIA labels are maintained across DOM changes triggered by breakpoints.

## 15. Testing Checklist
For every new screen or component, verify rendering and interaction at the following breakpoints and conditions:

- [ ] 320px (Legacy mobile - ensure no horizontal scrolling)
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape / small laptop)
- [ ] 1280px (standard desktop)
- [ ] 1440px+ (large monitor)
- [ ] 200% browser zoom on desktop
- [ ] Dark Mode (Note: System is strictly LIGHT THEME ONLY - verify that OS dark mode does not break the UI)
- [ ] Landscape orientation on mobile devices
- [ ] Keyboard navigation (Tab testing)
- [ ] Screen reader basic pass

## 16. Technical Implementation Guidelines
- **[TECHNICAL RULE] Framework:** Tailwind CSS will handle the majority of breakpoint media queries.
- **[TECHNICAL RULE] Container Queries:** Use Tailwind CSS container queries (`@container`) for highly reusable components that need to adapt based on their parent container's width rather than the viewport (e.g., Profile Cards, Statistic Widgets).
- **[TECHNICAL RULE] SSR Hydration:** Ensure that mobile-specific DOM structures do not cause hydration mismatches in React/Next.js. Use CSS for hiding/showing elements where possible, or robust client-side rendering checks if heavy DOM manipulation is required.
- **[ASSUMPTION]** All icons will be Lucide React, ensuring crisp SVG rendering across all pixel densities.

## 17. Brand Consistency Across Devices
- **[UI RULE] Theme:** LIGHT THEME ONLY.
- **[UI RULE] Colors:** Primary text must be `#0F172A` (Slate 900), never pure `#000000`. This reduces eye strain on smaller backlit devices.
- **[UI RULE] Borders & Shadows:** Use subtle shadows (`shadow-sm`, `shadow-md`) to define cards on desktop. On mobile, consider flattening the hierarchy with subtle borders (`border-gray-200`) instead of heavy shadows to save rendering performance.

---
**Document Info**
- **Status:** APPROVED
- **Version:** 1.0
- **Scope:** Cross-platform web application responsiveness
