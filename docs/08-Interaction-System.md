# 08 - Interaction Design & Motion System

## Document Metadata
- **System:** Healthcare Staffing & Home Care Platform
- **Module:** Interaction & Motion
- **Version:** 1.0.0
- **Status:** Final Draft
- **Primary Roles:** Client, Professional, Admin, Organization
- **Theme:** LIGHT THEME ONLY
- **Brand Colors:** Healthcare Teal `#0EA5A4`, Medical Blue `#2563EB`, Primary Text `#0F172A` (never pure `#000000`)
- **Typography:** Manrope (Inter fallback)
- **Iconography:** Lucide React only

> **[ASSUMPTION]** Production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, employment classification and local regulatory requirements require separate validation. This document assumes standard web interaction patterns without confirming specific compliance frameworks (e.g., HIPAA/GDPR) regarding visual data display timing.

---

## 1. Motion Philosophy

Motion in the platform serves to explain hierarchy, state changes, and feedback. It is strictly not for entertainment. The healthcare domain requires trust, stability, and clarity; therefore, motion should be quiet, smooth, and precise.

### 1.1 Core Principles
- **[UI RULE] Purposeful:** Every animation must guide the user, explain a relationship, or provide feedback on an action.
- **[UI RULE] Calm & Professional:** Avoid chaotic, highly elastic, or "bouncy" animations.
- **[TECHNICAL RULE] Accessible:** Support `prefers-reduced-motion` at the OS and Browser level. Remove nonessential animation; keep state changes visible instantly.
- **[UI RULE] Rapid:** Users are often completing critical tasks (booking care, accepting shifts). Do not make them wait for UI animations to finish before they can interact.

### 1.2 Acceptance Criteria for General Motion
- **GIVEN** a user interacts with a state-changing element
  **WHEN** the element transitions
  **THEN** the transition must complete within the approved Timing Scale limits.
- **GIVEN** a user has enabled reduced motion in their OS
  **WHEN** they navigate the application
  **THEN** all decorative motion is disabled and functional motion resolves in 0ms.

---

## 2. Motion Timing Scale

The platform uses a strict set of tokenized durations to maintain consistency.

| Requirement ID | Category | Duration | Easing (CSS / Framer Motion) | Usage | Rule Type |
|---|---|---|---|---|---|
| `[MOT-TIM-001]` | Micro | 120-180ms | `ease-out` / `easeOut` | Button press, toggle, hover feedback, checkbox | UI RULE |
| `[MOT-TIM-002]` | Normal | 200-300ms | `cubic-bezier(0.16,1,0.3,1)` | Card transitions, dropdown open, tab switch | UI RULE |
| `[MOT-TIM-003]` | Reveal | 350-500ms | `ease-in-out` / `easeInOut` | Section scroll reveal, stepper step change | UI RULE |
| `[MOT-TIM-004]` | Large | 500-800ms | `ease-in-out` / `easeInOut` | Drawer slide, modal entrance, page transition | UI RULE |
| `[MOT-TIM-005]` | Hero | 800-1200ms | `ease-out` / `easeOut` | Hero visual entrance on initial page load only | UI RULE |

### 2.1 Easing Definitions
- **Ease Out (`ease-out`):** Starts fast, decelerates. Used for elements entering the screen or responding to direct user input.
- **Ease In Out (`ease-in-out`):** Accelerates then decelerates. Used for elements moving from one place to another on screen (e.g., progress bars, tabs).
- **Custom Deceleration (`cubic-bezier(0.16,1,0.3,1)`):** Creates a highly responsive, snappy feel for complex UI elements like menus and popovers.

---

## 3. Allowed Motion Patterns

| Pattern | Usage | Duration | Rule Type |
|---|---|---|---|
| Fade | Content reveal, modal backdrop, skeleton replace | 200-300ms | UI RULE |
| Slide | Drawer, dropdown, bottom sheet (mobile) | 300-500ms | UI RULE |
| Scale | Modal entrance (0.95 → 1.0), button feedback | 150-200ms | UI RULE |
| Opacity | Skeleton to content transition, hover states | 250ms | UI RULE |
| Height expansion | Accordion, collapsible sections, table rows | 300ms | UI RULE |
| Progress | Stepper, booking progress bar, file upload | 400ms | UI RULE |
| Counter | KPI metric count-up animation (Admin dashboard) | 600-800ms | UI RULE |
| Map pulse | Location search, Professional matching radar | 1000ms | UI RULE |
| Status transition | Badge color/text change (e.g., Draft to Submitted)| 200ms | UI RULE |

### 3.1 Pattern Acceptance Criteria
- **GIVEN** a dropdown menu is triggered
  **WHEN** the menu appears
  **THEN** it must use the Slide pattern combined with Fade, executing within 300ms.
- **GIVEN** a skeleton loader finishes resolving data
  **WHEN** the content mounts
  **THEN** it must use the Opacity pattern to crossfade over 250ms.

---

## 4. Prohibited Motion

To maintain clinical professionalism and trust, the following patterns are strictly banned.

- **[UI RULE] Violent bounce:** No spring physics that result in visible oscillating overshoot.
- **[UI RULE] Constant floating elements:** No idle "breathing" or floating graphics.
- **[UI RULE] Shaking / vibrating:** Do not shake forms on error. Use color (`#EF4444`) and icon (`Lucide: AlertCircle`) changes.
- **[UI RULE] Rotating cards:** No 3D flip effects for content discovery.
- **[UI RULE] 3D spinning:** 3D assets are prohibited.
- **[UI RULE] Particle storms:** Confetti or particle explosions on task completion are banned. Use the approved Lottie success animation instead.
- **[UI RULE] Random parallax effects:** Foreground and background must scroll uniformly.
- **[UI RULE] Cursor-following gimmicks:** The cursor must remain standard.
- **[UI RULE] Excessive spring physics:** `stiffness` and `damping` configurations in Framer Motion must strictly avoid rubber-banding.

---

## 5. Component-Specific Motion

### 5.1 Button
- **Hover:** Background color transition `150ms ease-out`.
- **Click (Active):** Subtle `scale(0.98)` `100ms ease-out`.
- **Loading:** Spinner (`Lucide: Loader2`) fade-in `200ms`, text fade-out.
- **Disabled:** No animation, immediate state change.

**Acceptance Criteria:**
- **GIVEN** a user clicks a primary button
  **WHEN** the button is depressed
  **THEN** it scales down to 98% in 100ms.
- **GIVEN** a button enters a loading state
  **WHEN** an API request is pending
  **THEN** the text fades out and a rotating Lucide spinner fades in over 200ms without changing the button's layout width.

### 5.2 Card (Interactive)
- **Hover:** Shadow transition `200ms` (Subtle default border → elevated card shadow).
- **Click:** `scale(0.99)` `80ms`.
- **Entrance (Staggered List):** Fade + slide-up, `16px` offset, `200ms` per card, `50ms` stagger delay.

**Acceptance Criteria:**
- **GIVEN** a user navigates to the Professional search results
  **WHEN** the cards render
  **THEN** they animate in sequentially with a 50ms stagger, fading in and sliding up 16px.

### 5.3 Modal
- **Entrance:** Backdrop fade `200ms` + modal `scale(0.95 → 1.0)` + fade-in `250ms`.
- **Exit:** Reverse, `200ms`.

**Acceptance Criteria:**
- **GIVEN** a user triggers a Booking Details modal
  **WHEN** the modal opens
  **THEN** the dark overlay fades in first, followed slightly by the modal scaling up from 95% to 100% in 250ms.

### 5.4 Drawer
- **Entrance:** Slide from right `350ms cubic-bezier(0.16,1,0.3,1)` + backdrop fade.
- **Exit:** Slide out `250ms` + backdrop fade.

**Acceptance Criteria:**
- **GIVEN** an Admin opens the Notification drawer
  **WHEN** the icon is clicked
  **THEN** the drawer slides smoothly from the right edge, taking 350ms to reach full width.

### 5.5 Tabs
- **Content:** Crossfade `200ms`.
- **Active Indicator:** Slide `250ms`.

**Acceptance Criteria:**
- **GIVEN** a Professional switches between 'Upcoming' and 'Completed' visits
  **WHEN** the tab is clicked
  **THEN** the active bottom-border indicator slides to the new tab in 250ms, while the content below crossfades in 200ms.

### 5.6 Stepper (Booking Wizard / Registration)
- **Step Transition:** Current content slide-out left + new content slide-in from right, `350ms`.
- **Progress Bar:** Width transition `400ms ease-in-out`.
- **Completed Step:** Checkmark (`Lucide: Check`) scale-in `200ms`.

**Acceptance Criteria:**
- **GIVEN** a Client completes "Location" and moves to "Service Selection"
  **WHEN** 'Next' is clicked
  **THEN** the progress bar extends smoothly over 400ms and the location pane slides out to the left.

### 5.7 Toast (Notifications)
- **Entrance:** Slide from top-right + fade, `300ms`.
- **Exit:** Fade + slide out (right), `200ms`.
- **Auto-dismiss:** 4-6 seconds depending on text length.

**Acceptance Criteria:**
- **GIVEN** an Organization successfully approves a timesheet
  **WHEN** the success event fires
  **THEN** a toast slides in from the top right in 300ms, stays for 4 seconds, and fades out.

### 5.8 Skeleton (Loading State)
- **Shimmer:** Gradient sweep animation, `1.5s linear infinite`.
- **Content Replace:** Skeleton fade-out + content fade-in, `250ms`.

**Acceptance Criteria:**
- **GIVEN** a slow network connection
  **WHEN** waiting for the Admin Dashboard to load
  **THEN** a shimmer effect loops constantly at 1.5s until data arrives, replacing instantly via a 250ms crossfade.

### 5.9 Badge / Status Change
- **Color Transition:** `200ms`.
- **New Badge:** `scale(0 → 1.0)` + fade-in `250ms`.
- **Primary Use Case:** Booking state changes (e.g., `Matching` → `Assigned`).

### 5.10 Table Row
- **Hover:** Background color transition `150ms`.
- **Expand/Collapse:** Height + opacity `300ms ease-in-out`.

### 5.11 Map Markers
- **Entrance:** Drop-in `scale(0 → 1.0)` with stagger `50ms`.
- **Selected:** Pulse ring animation `1.5s ease-out`.
- **Cluster:** Merge/split `300ms` when zooming.
- **[ASSUMPTION]** Live GPS tracking is not natively animated. Position updates simply translate the marker coordinates over 1000ms.

### 5.12 Availability Toggle (Professional Role)
- **Slide Indicator:** `200ms`.
- **Color Transition:** Neutral (`#94A3B8`) → Healthcare Teal (`#0EA5A4`) (going online) or vice versa.

### 5.13 Job Request Countdown (Professional Role)
- **Progress Bar:** Smooth linear decrease over 45 seconds.
- **Last 10 Seconds:** Pulse/flash warning color (`#EF4444`).
- **Expire:** Fade-out `300ms`, replacement with "Expired" state.

### 5.14 Active Visit Timer
- **Tick:** No animation (steady text display update to avoid CPU thrashing).
- **Completion:** Success pulse `500ms` on the check-out button.

### 5.15 KYC Document Upload
- **Drag Enter:** Border dashed highlight + `scale(1.02)` `200ms`.
- **Upload Progress:** Linear progress bar (width transition mapped to upload percentage).
- **Upload Complete:** Checkmark animate-in `300ms`.
- **Preview:** Fade-in `250ms`.

---

## 6. Page-Level Transitions

Page transitions must never interfere with the user's perception of speed.
- **[UI RULE] Route change:** Fade `200ms`. Minimal to zero translation (slide).
- **[UI RULE] Prohibition:** No full-page slide transitions (like native mobile apps), as this feels overwhelming on desktop web.
- **[UI RULE] Content Loading:** Content within a newly navigated page should use staggered fade-ins (Cards, Lists) or standard static mounting.

---

## 7. Scroll Behavior

- **[UI RULE] Reveal Strategy:** Sections reveal gradually using an `Intersection Observer`.
- **[TECHNICAL RULE] Trigger Point:** Animation triggers when the element is 15-20% visible in the viewport.
- **[UI RULE] Animation Payload:** Fade + slide-up (`12px` offset), `400ms`.
- **[UI RULE] Independence:** Each major section animates independently as it enters the viewport.
- **[UI RULE] Hero Section:** The top Hero section animates immediately on load, independent of scroll position.

**Acceptance Criteria:**
- **GIVEN** a user scrolls down the landing page
  **WHEN** the "How it Works" section enters 20% of the viewport
  **THEN** the section fades in and translates 12px upwards over 400ms.

---

## 8. Reduced Motion Support

Accessibility and user preference are mandatory.
- **[TECHNICAL RULE] Implementation:** Utilize CSS `@media (prefers-reduced-motion: reduce)` and equivalent Framer Motion hooks (`useReducedMotion`).
- **[UI RULE] Behavior when enabled:**
  - Remove all non-essential animations (scroll reveals, hover translations, entrance slides).
  - **Keep:** State changes (badge color updates), loading indicators (spinners/skeletons must still function to indicate system status, but consider slowing shimmer down), and progress bars.
  - **Remove:** Parallax, staggered lists.
  - **Ensure:** All structural transitions (Modals, Drawers) happen instantly (duration: `0ms`), but the resulting state change remains visually obvious.

---

## 9. Performance Budget

- **[TECHNICAL RULE] GPU Acceleration:** Animation must strictly use CSS `transform` and `opacity`.
- **[TECHNICAL RULE] Layout Thrashing:** NEVER animate `width`, `height`, `top`, `left`, `margin`, or `padding` unless absolutely required (e.g., accordions). Even then, limit usage to avoid layout recalculations.
- **[TECHNICAL RULE] Hardware Hints:** Use `will-change: transform, opacity` sparingly, only on elements that frequently animate or stutter without it.
- **[TECHNICAL RULE] Library Usage:** Use Framer Motion for complex orchestrated sequences (like the Booking Wizard stepper). For simple hover, focus, and state toggles, rely exclusively on native CSS transitions.
- **[TECHNICAL RULE] Framerate:** All animations must target 60fps on average mid-tier desktop and mobile hardware.

---

## 10. Lottie Micro-Animation System

Lottie is used exclusively for complex vector micro-animations that exceed the practical capabilities of CSS/SVG transitions.

### 10.1 Inventory

| ID | Animation | Usage | Duration | Style | Rule Type |
|---|---|---|---|---|---|
| `LOTTIE-01` | Success checkmark | Payment, booking, KYC approval | 1.5s | Minimal line-based, Healthcare Teal | UI RULE |
| `LOTTIE-02` | Document upload | KYC file dropzone empty state | 2s | Line-based arrow pulse | UI RULE |
| `LOTTIE-03` | Location pin drop | Address search confirmation | 1s | Subtle pin drop with ripple | UI RULE |
| `LOTTIE-04` | Radar pulse | Professional matching search | 2s loop | Concentric circle pulse, Medical Blue | UI RULE |
| `LOTTIE-05` | Headset/support | Support ticket submission | 1.5s | Line-based headset wave | UI RULE |
| `LOTTIE-06` | Empty state | No data contexts (No bookings) | 2s | Subtle search/magnifier | UI RULE |
| `LOTTIE-07` | Payment processing | During checkout / escrow hold | Loop | Minimal dots/spinner | UI RULE |
| `LOTTIE-08` | Verification badge | KYC status indicator | 1s | Shield/check animation | UI RULE |

### 10.2 Lottie Rules
- **[UI RULE] Restraint:** Use only where CSS animation is insufficient.
- **[UI RULE] Duration:** Prefer subtle 1-3 second animations. No long cinematic sequences.
- **[UI RULE] Tone:** Avoid childish, cartoonish Lottie files.
- **[UI RULE] Visual Style:** Minimal, line-based, premium, medical-tech aesthetic, strictly adhering to the #0EA5A4 and #2563EB color palette.
- **[UI RULE] Size:** Do not let Lottie files dominate the UI. Keep them contained to icon-sized or small illustration-sized boundaries (max `240x240px`).
- **[TECHNICAL RULE] Fallback:** Always provide a static SVG fallback in case the Lottie runtime fails to load.

---

## 11. CSS Variables & Token Implementation

To ensure strict adherence, the motion scale should be implemented as CSS custom properties globally.

```css
:root {
  /* Durations */
  --motion-duration-micro: 150ms;
  --motion-duration-normal: 250ms;
  --motion-duration-reveal: 400ms;
  --motion-duration-large: 600ms;
  --motion-duration-hero: 1000ms;

  /* Easings */
  --motion-ease-out: ease-out;
  --motion-ease-in-out: ease-in-out;
  --motion-ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-linear: linear;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-micro: 0ms;
    --motion-duration-normal: 0ms;
    --motion-duration-reveal: 0ms;
    --motion-duration-large: 0ms;
    --motion-duration-hero: 0ms;
  }
}
```

---

## 12. Open Decisions & Assumptions
1. **[OPEN DECISION]** Will we require a dedicated animation designer for the custom Lottie files, or will we source minimal stock Lottie files and re-color them?
2. **[ASSUMPTION]** GPS live tracking is not genuinely animated frame-by-frame; it relies on polling data and translating the pin every X seconds.
3. **[ASSUMPTION]** Wait times for API responses during Payment Processing or Matching might exceed Lottie animation durations, requiring smooth infinite looping states.
4. **[ASSUMPTION]** Real payment gateways (e.g., Stripe) might inject their own iFrames with uncontrollable internal animations, overriding our strict motion guidelines within that specific frame.
