# Client Interaction System

## Overview
This document defines every interaction, animation, and micro-interaction in the CareConnect client experience. The goal is to provide a calm, reassuring, premium, and trustworthy feel (Care Concierge).

## 1. Page Transitions

Consistent page transitions are essential for a smooth navigation experience without jarring visual jumps.

### Global Route Change
- **Animation Type:** Fade + Translate Y
- **Parameters:** `translateY(8px → 0)`
- **Duration:** 180-250ms
- **Easing:** `ease-out`
- **Implementation Note:** Ensure scroll position resets to top on route change unless specifically preserving state (e.g., navigating back to a list).

### Page Enter
- **Animation:** `opacity 0 → 1`, `translateY(8px) → translateY(0)`
- **Timing:** 150ms delay after exit, 200ms duration
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### Page Exit
- **Animation:** `opacity 1 → 0.5`
- **Timing:** Immediate (0 delay), 100ms duration
- **Easing:** `linear`

---

## 2. Component Animations

Micro-interactions on individual UI components provide tactile feedback to the user.

### Cards (Service Cards, Booking Cards)
- **Hover State:** `translateY(-2px)`, shadow elevation increase (e.g., `shadow-md` → `shadow-lg`)
- **Hover Duration:** 150ms
- **Hover Easing:** `ease-out`
- **Press State:** `scale(0.98)`
- **Press Duration:** 80ms
- **Press Easing:** `ease-in`

### Buttons (Primary, Secondary, Outline)
- **Hover State:** Background color shift (e.g., 5-10% darken/lighten), `shadow-sm` increase.
- **Hover Duration:** 100ms
- **Press State:** `scale(0.97)`
- **Press Duration:** 60ms
- **Loading State:** Spinner fade-in (`opacity 0 → 1`), text fade-out (`opacity 1 → 0`), 150ms transition. Button width must remain fixed to prevent layout shift.
- **Success State:** Checkmark icon morph, green background flash, 600ms total duration, returning to original state or transitioning to next step.

### Modals & Dialogs
- **Backdrop Open:** Fade-in (`opacity 0 → 1`), 150ms, `linear`.
- **Modal Open:** `scale(0.95 → 1)` + `opacity(0 → 1)`
- **Modal Open Duration:** 200ms
- **Modal Open Easing:** Spring (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`)
- **Modal Close:** `opacity(1 → 0)`, `scale(1 → 0.95)`
- **Modal Close Duration:** 150ms
- **Backdrop Close:** Fade-out (`opacity 1 → 0`), 150ms.

### Drawers (Side Panels)
- **Drawer Open:** `translateX(100% → 0)` (Right side) or `translateX(-100% → 0)` (Left side)
- **Drawer Open Duration:** 250ms
- **Drawer Open Easing:** `ease-out`
- **Drawer Close:** `translateX(0 → 100%)`
- **Drawer Close Duration:** 200ms
- **Drawer Close Easing:** `ease-in`

### Dropdowns & Select Menus
- **Dropdown Open:** `scaleY(0 → 1)`
- **Transform Origin:** `top`
- **Duration:** 120ms
- **Easing:** `ease-out`
- **Dropdown Close:** `scaleY(1 → 0)`, 100ms, `ease-in`.

### Tooltips
- **Show:** `opacity(0 → 1)` + `translateY(4px → 0)`
- **Delay:** 100ms delay before animation starts (prevents accidental flashing)
- **Duration:** 80ms
- **Hide:** `opacity(1 → 0)`, 60ms.

---

## 3. Booking Wizard Interactions

The core booking flow must feel fluid and progressive.

### Step Transitions
- **Forward Progress:** Current step slides left (`translateX(0 → -20%)`, `opacity(1 → 0)`), new step slides in from right (`translateX(20% → 0)`, `opacity(0 → 1)`).
- **Backward Progress:** Current step slides right (`translateX(0 → 20%)`, `opacity(1 → 0)`), previous step slides in from left (`translateX(-20% → 0)`, `opacity(0 → 1)`).
- **Duration:** 300ms.

### Progress Indicator
- **Progress Bar Fill:** Smooth width transition (`width` property).
- **Duration:** 300ms
- **Easing:** `ease-out`
- **Step Completion Checkmark:** Scale bounce (`scale(0 → 1.2 → 1)`), 200ms, spring curve.

### Selection States
- **Service Card Selection:** Border glow (brand-teal `#0EA5A4` or blue `#2563EB`), slight scale pulse (`scale(1.02)`), 150ms.
- **Calendar Date Select:** Background fill expands from center (ripple effect), text color inverts to white, 200ms.
- **Time Slot Select:** Pill highlight with subtle check icon sliding in from left, 150ms.

---

## 4. Loading States

Reassuring loading states prevent user anxiety during async operations.

### Skeleton Shimmer
- **Animation:** Gradient sweep (left to right) over a base gray color (`canvas` `#F8FAFC` to a slightly darker shade).
- **Duration:** 1.5s
- **Iteration:** Infinite
- **Easing:** `linear`

### Page Skeleton
- **Layout Match:** Always render skeletons that roughly match the expected page layout (e.g., header, main content area block, sidebar).
- **Transitions:** Crossfade from skeleton to actual content (`opacity` transition, 300ms).

### Button Spinner
- **Design:** 12px circular SVG spinner (2px stroke).
- **Animation:** Continuous rotation (`rotate(0 → 360deg)`).
- **Duration:** 800ms per rotation.

### Full-Page Loader
- **Usage:** Only for critical, non-interruptible transitions (e.g., processing payment, finalizing booking).
- **Design:** Centered pulsing CareConnect logo.
- **Animation:** `scale(1 → 1.05 → 1)`, `opacity(0.8 → 1 → 0.8)`.
- **Duration:** 1200ms per cycle.

---

## 5. Feedback Patterns

### Toast Notifications
- **Entrance:** Slide-in from top-right (`translateX(100%) → translateX(0)` + `opacity(0 → 1)`).
- **Duration:** 250ms, spring curve.
- **Exit:** Slide-out to top-right (`translateX(0 → 100%)` + `opacity(1 → 0)`).
- **Auto-dismiss:** 4000ms (4 seconds). Pauses on hover.

### Success State (In-Page)
- **Animation:** Green checkmark drawing animation (SVG `stroke-dasharray` transition).
- **Flourish:** Confetti-subtle particles radiating outwards from the center (CSS keyframes), 800ms total.

### Error State (Form Fields)
- **Animation:** Red shake (`translateX(±4px)`).
- **Cycles:** 3 cycles.
- **Duration:** 300ms total.
- **Text:** Error helper text fade-in (`opacity 0 → 1`, `translateY(-4px → 0)`), 150ms.

### Warning Banner
- **Entrance:** Slide-down from top of container (`height 0 → auto`, `opacity 0 → 1`).
- **Background:** Amber/Yellow soft background.
- **Duration:** 200ms, `ease-out`.

---

## 6. Scroll Interactions

### Header
- **Scroll Behavior:** Shrink on scroll down.
- **Height Change:** `h-18` (72px) → `h-14` (56px).
- **Visual Change:** Increase `backdrop-blur` and add subtle bottom border/shadow as it detaches from top.
- **Transition:** 200ms `ease`.

### Parallax
- **Usage:** Hero sections on landing pages.
- **Speed:** 0.3x scroll speed relative to standard scroll.
- **Implementation:** Use `requestAnimationFrame` for smooth transformation, avoiding layout thrashing.

### Lazy Loading Images
- **Entrance:** Fade-in on intersection (`opacity 0 → 1`).
- **Duration:** 400ms.
- **Fallback:** Show skeleton or low-res blur-up until loaded.

### Infinite Scroll
- **Indicator:** Loading spinner at the bottom of the list.
- **Trigger:** Fetch next page when user reaches within 300px of the bottom.

---

## 7. Touch & Mobile

### Swipe Gestures
- **Carousels:** Horizontal swipe for booking cards, image galleries, date selectors.
- **Physics:** Momentum scrolling enabled (`-webkit-overflow-scrolling: touch`).

### Pull-to-Refresh
- **Interaction:** Overscroll indicator at the top of feeds (e.g., My Bookings).
- **Visual:** Spinner pulls down, rotates, and triggers refresh when released past threshold.

### Long Press
- **Interaction:** Context menu on list items (e.g., booking cards).
- **Duration:** 400ms hold to trigger.
- **Feedback:** Haptic feedback (if supported via Web API) + subtle scale-down before menu opens.

### Bottom Sheet
- **Interaction:** Drag handle to expand/collapse.
- **Snap Points:** Usually 50% and 100% viewport height.
- **Physics:** Velocity-based snapping.

---

## 8. Accessibility Motion

### prefers-reduced-motion
- **Detection:** CSS media query `@media (prefers-reduced-motion: reduce)`.
- **Behavior:** 
  - All transitions/animations revert to instant state changes (`transition: none`, `animation: none`).
  - No parallax effects.
  - No auto-playing videos or carousels (require manual interaction).
  - Toast notifications appear instantly without slide animations.
  - Page transitions become instant cuts.
