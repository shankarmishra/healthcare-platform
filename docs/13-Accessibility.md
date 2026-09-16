# 13. Accessibility (A11y) Specification

## Document Overview
This document defines the Accessibility (A11y) specification for the Healthcare Staffing & Home Care Platform. The target standard is WCAG 2.1 AA compliance, tailored specifically to the needs of a multi-sided healthcare marketplace serving vulnerable populations. 

**Target Audience:** UI/UX Designers, Front-End Engineers (React/Next.js), QA Engineers, and Product Managers.

---

## 1. Accessibility Philosophy

**[BUSINESS RULE] Accessibility as a Requirement**
In the context of a healthcare platform, accessibility is not a "nice-to-have" feature; it is a fundamental requirement. Our platform serves vulnerable populations, including elderly patients, individuals with permanent or temporary disabilities, users with low vision, and users experiencing high cognitive load or stress during medical events.

**[BUSINESS RULE] Universal Operability**
Every interactive element on the platform MUST be operable via multiple input modalities: mouse, keyboard, screen reader, touch, and switch devices.

**[UI RULE] Information Communication**
Status, context, and meaning must NEVER be communicated by color alone. Secondary indicators (icons, text labels, patterns) must always accompany color-coded information.

**[BUSINESS RULE] Cognitive Load Management**
Healthcare decisions are inherently stressful. The platform must adhere to principles of cognitive accessibility, providing clear, unambiguous language, consistent navigation patterns, and preventing errors before they occur.

---

## 2. Color & Contrast

**[UI RULE] Light Theme Constraint**
The platform operates strictly in a **LIGHT THEME ONLY** environment. All contrast calculations are based on this assumption.

### 2.1 Contrast Ratios
**[UI RULE] Minimum Contrast Standards (WCAG AA)**
| Element Type | Minimum Contrast Ratio | Target Standard | Notes |
|---|---|---|---|
| Normal text (< 18px or < 14pt) | 4.5:1 | WCAG AA | Applies to body text, form labels, helper text. |
| Large text (>= 18px bold or >= 24px) | 3.0:1 | WCAG AA | Applies to headings `h1`-`h4`, large callouts. |
| UI components & graphical objects | 3.0:1 | WCAG AA | Inputs, buttons, focus rings, essential icons. |
| Focus indicators | 3.0:1 | WCAG AA | Must contrast against adjacent background colors. |

### 2.2 Brand Color Verifications
**[TECHNICAL RULE] Contrast Verification on #FFFFFF (White) Background**
*Note: Calculations assume pure white `#FFFFFF` background.*

| Color Hex | Brand Context | Contrast vs #FFFFFF | Pass/Fail (Normal) | Pass/Fail (Large) | Notes |
|---|---|---|---|---|---|
| `#0F172A` | Primary Text (Slate 900) | 15.4:1 | ✓ PASS | ✓ PASS | Default text color. Never use pure `#000000`. |
| `#334155` | Secondary Text (Slate 700) | 9.7:1 | ✓ PASS | ✓ PASS | Used for subtitles, form labels. |
| `#475569` | Tertiary Text (Slate 600) | 7.1:1 | ✓ PASS | ✓ PASS | Used for metadata, timestamps. |
| `#64748B` | Quaternary Text (Slate 500) | 4.6:1 | ✓ PASS | ✓ PASS | Used for placeholder text (barely passes). |
| `#94A3B8` | Disabled Text (Slate 400) | 2.8:1 | ✗ FAIL | ✗ FAIL | Placeholder only, NEVER for readable content. |
| `#0EA5A4` | Healthcare Teal | 3.1:1 | ✗ FAIL | ✓ PASS | Do not use for body text. Safe for large headings and UI components. |
| `#2563EB` | Medical Blue | 4.5:1 | ✓ PASS | ✓ PASS | Safe for links and small button text. |
| `#16A34A` | Success Green | 3.0:1 | ✗ FAIL | ✓ PASS | Do not use for small text. Use darker shade for text (`#15803D`). |
| `#D97706` | Warning Amber | 3.0:1 | ✗ FAIL | ✓ PASS | Do not use for small text. Use darker shade for text (`#B45309`). |
| `#DC2626` | Error Red | 4.5:1 | ✓ PASS | ✓ PASS | Safe for error messages and destructive actions. |

---

## 3. Keyboard Navigation

### 3.1 Focus Management
**[UI RULE] Visible Focus Indicator**
All interactive elements MUST have a highly visible focus indicator when accessed via keyboard.
- **Implementation:** `outline: 2px solid #0EA5A4; outline-offset: 2px;` or Tailwind equivalent `focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2`.
- **Prohibition:** NEVER use `outline: none` without providing a robust, visible alternative.

**[TECHNICAL RULE] Logical Reading Order**
Focus order (tab order) MUST follow the logical reading order of the DOM: top-to-bottom, left-to-right (in LTR languages).
- Avoid relying on CSS visual reordering (`flex-direction: row-reverse`, `order: -1`) if it breaks the DOM structure, as screen readers follow the DOM, not visual presentation.

**[TECHNICAL RULE] Skip to Content**
Every page MUST include a "Skip to main content" link as the absolute first focusable element in the DOM.
- It should be visually hidden until it receives focus.
- Target: `<main id="main-content">`

### 3.2 Keyboard Shortcuts & Interactions
**[UI RULE] Global Interactions**
| Key | Action | Context |
|---|---|---|
| `Tab` | Move focus forward | Global |
| `Shift` + `Tab` | Move focus backward | Global |
| `Enter` / `Space` | Activate button/link | Buttons, links, checkboxes, radio buttons |
| `Escape` | Close overlay/cancel | Modals, drawers, dropdowns, popovers |

**[UI RULE] Component Interactions**
| Component | Key | Action |
|---|---|---|
| **Tabs** | `Right Arrow` | Move focus to next tab |
| | `Left Arrow` | Move focus to previous tab |
| | `Home` | Move focus to first tab |
| | `End` | Move focus to last tab |
| **Dropdown / Select** | `Up Arrow` | Move to previous option |
| | `Down Arrow` | Move to next option |
| | `Enter` | Select option and close |
| **Radio Group** | `Arrow Keys` | Move focus and select adjacent radio button |

### 3.3 Focus Trapping
**[TECHNICAL RULE] Modal & Drawer Focus Trapping**
When a modal dialog or drawer is opened:
1. The background MUST be hidden from screen readers (`aria-hidden="true"` on `#root` or similar).
2. Keyboard focus MUST be trapped within the modal/drawer. Tabbing from the last focusable element must wrap around to the first focusable element.
3. Upon closing, focus MUST be returned to the element that triggered the modal.

---

## 4. ARIA Attributes

### 4.1 HTML Landmarks
**[TECHNICAL RULE] Landmark Structure**
Proper landmark usage allows screen reader users to navigate efficiently.

| Landmark | ARIA Role | HTML5 Element | Usage Context |
|---|---|---|---|
| Header | `role="banner"` | `<header>` | The main page header (logo, global nav). |
| Navigation | `role="navigation"` | `<nav>` | All primary navigation regions. MUST have `aria-label` if multiple exist. |
| Main content | `role="main"` | `<main>` | The primary content area of the page. Only one per page. |
| Sidebar | `role="complementary"` | `<aside>` | Admin sidebar, context-sensitive side panels. |
| Footer | `role="contentinfo"` | `<footer>` | Page footer containing legal, copyright, secondary links. |
| Search | `role="search"` | `<form role="search">` | Search inputs (e.g., finding a professional). |

### 4.2 Component-Specific ARIA Requirements

**[TECHNICAL RULE] Button Accessibility**
- Loading state: `aria-busy="true"`, `aria-label="Loading..."`
- Disabled state: `aria-disabled="true"` (use instead of HTML `disabled` attribute if the button still needs to be focusable for tooltip explanation).
- Toggle buttons (e.g., availability switch): `aria-pressed="true/false"`

**[TECHNICAL RULE] Modal & Drawer Accessibility**
- Container: `role="dialog"`, `aria-modal="true"`
- Labelling: `aria-labelledby="modal-title-id"`
- Description: `aria-describedby="modal-desc-id"` (if applicable)

**[TECHNICAL RULE] Tabs Accessibility**
- Container: `role="tablist"`
- Tab buttons: `role="tab"`, `aria-selected="true/false"`, `aria-controls="panel-id"`
- Tab panels: `role="tabpanel"`, `aria-labelledby="tab-id"`, `tabIndex="0"`

**[TECHNICAL RULE] Data Table Accessibility (Admin Portal)**
- Container: `role="table"` or native `<table>`
- Caption: `<caption className="sr-only">List of pending verifications</caption>`
- Sortable headers: `aria-sort="ascending/descending/none"`
- Pagination: Nav region with `aria-label="Pagination"`. Current page indicated by `aria-current="page"`.

**[TECHNICAL RULE] Status Badges (Booking States, KYC States)**
- Live updates: `role="status"`
- Visuals: Always include a text label. NEVER rely on color or icon alone.
  - *Bad:* `<div class="bg-red-500 rounded-full w-4 h-4"></div>`
  - *Good:* `<span class="bg-red-100 text-red-800"><Icon name="XCircle" aria-hidden="true" /> Rejected</span>`

**[TECHNICAL RULE] Toast & Notifications**
- Errors / Critical: `role="alert"`, `aria-live="assertive"`
- Success / Info: `role="status"`, `aria-live="polite"`

**[TECHNICAL RULE] Stepper (Client Booking Wizard)**
- Container: `<nav aria-label="Booking progress">`
- Steps: `<ol>` list.
- Current Step: `aria-current="step"` on the active step.
- Completed Steps: Visually hidden text `<span class="sr-only">Completed: </span>` preceding the step name.

**[TECHNICAL RULE] Map Interface (Professional Discovery)**
- Container: `aria-label="Interactive map of nearby healthcare professionals"`
- Map markers: `role="button"`, `aria-label="Dr. Jane Smith, 4.8 stars, 2 miles away. Press enter to view details."`
- **[UI RULE] Map Alternative:** A map MUST ALWAYS have a fully accessible list-view alternative containing the same information.

**[TECHNICAL RULE] File Upload (Professional KYC)**
- Dropzone: `aria-label="Upload document"`, drag state `aria-dropeffect="copy"`
- Progress indicator: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.

**[TECHNICAL RULE] Availability Toggle (Professional Portal)**
- Component: `role="switch"`
- State: `aria-checked="true/false"`
- Label: `aria-label="Online availability"`

**[TECHNICAL RULE] Job Request Countdown Timer**
- Container: `role="timer"`
- Updates: `aria-live="polite"`
- **[BUSINESS RULE] Timer Announcements:** Do not announce every second. Announce at logical intervals (e.g., "30 seconds remaining", "10 seconds remaining", "Time expired").
- **[ASSUMPTION] Time Extension:** If WCAG strict compliance requires time extensions, the system may need a "Request more time" button, though this conflicts with real-time on-demand dispatching. Marked as OPEN DECISION.

---

## 5. Form Accessibility

**[UI RULE] Labels & Association**
- Every `<input>`, `<select>`, and `<textarea>` MUST have a visible `<label>`.
- The label must be programmatically associated using `htmlFor` (React) matching the input's `id`.

**[TECHNICAL RULE] Required Fields & Validation**
- Required fields MUST use `aria-required="true"`.
- A visible indicator (like `*`) must be present and explained at the top of the form.
- Invalid fields MUST use `aria-invalid="true"`.
- Error messages MUST be linked to the input via `aria-describedby`.

```jsx
// Example of accessible form field
<div>
  <label htmlFor="patient-dob" className="text-slate-700">Date of Birth *</label>
  <input 
    id="patient-dob"
    type="date"
    aria-required="true"
    aria-invalid={!!errors.dob}
    aria-describedby={errors.dob ? "dob-error" : "dob-hint"}
  />
  {errors.dob && (
    <p id="dob-error" className="text-red-600" role="alert">
      Date of birth is required and must be in the past.
    </p>
  )}
  {!errors.dob && (
    <p id="dob-hint" className="text-slate-500 text-sm">
      Required for patient age verification.
    </p>
  )}
</div>
```

**[TECHNICAL RULE] Fieldset Grouping**
Groups of related inputs (e.g., Radio buttons for "Service Type", Checkboxes for "Symptoms") MUST be grouped using `<fieldset>` and a descriptive `<legend>`.

**[TECHNICAL RULE] Autocomplete Attributes**
To reduce cognitive load and typing effort, use standard HTML `autocomplete` attributes where applicable (e.g., `autocomplete="given-name"`, `autocomplete="tel"`, `autocomplete="street-address"`).

---

## 6. Semantic HTML

**[TECHNICAL RULE] Heading Hierarchy**
- Use `<h1>` through `<h6>` in a strict, unbroken hierarchy.
- There MUST be exactly one `<h1>` per page.
- Do not skip levels (e.g., do not jump from `<h2>` to `<h4>`).
- Use CSS for visual sizing; use semantic tags for document structure.

**[TECHNICAL RULE] Element Selection**
- **Buttons vs. Links:**
  - Use `<button>` for actions that change the state of the page (Submit, Open Modal, Save, Toggle).
  - Use `<a>` for actions that navigate to a new URL or anchor point.
- **Interactive Divs:**
  - NEVER use `<div onClick={...}>` as a substitute for a button. If a custom component is built from a div, it MUST have `role="button"`, `tabIndex="0"`, and `onKeyDown` handlers for Enter/Space.

**[TECHNICAL RULE] Tabular Data**
- Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` for data tables (Admin portal).
- Do not use CSS grid/flexbox mimicking a table for tabular data unless aria table roles are perfectly applied.

---

## 7. Touch Accessibility

**[UI RULE] Target Dimensions**
- Minimum touch target size: 44px by 44px (WCAG 2.1 SC 2.5.5).
- Inline text links are exempt, but standalone icon buttons must meet this requirement.

**[UI RULE] Target Spacing**
- Minimum spacing between interactive touch targets: 8px to prevent accidental taps.

**[UI RULE] Hover Independence**
- No critical functionality or information can be accessible ONLY via mouse hover.
- Tooltips triggered by hover MUST also be triggered by focus.
- Actions appearing on row hover (e.g., in Admin tables) MUST have an ever-present equivalent (e.g., an overflow menu button) or be visible at all times on touch devices.

**[UI RULE] Gesture Alternatives**
- Swipe gestures (e.g., swipe to delete, swipe to accept job) MUST have a tap-based button equivalent.

---

## 8. Reduced Motion

**[UI RULE] Respecting OS Preferences**
The application MUST respect the user's OS-level motion preferences using the `prefers-reduced-motion: reduce` media query.

**[TECHNICAL RULE] Reduced Motion Implementation**
When reduced motion is enabled:
- **Remove:** Smooth scrolling, entrance animations (fade-ins, slide-ins), parallax effects, decorative loaders.
- **Keep:** State change indicators (e.g., toggle switch sliding), essential progress bars (but disable indeterminate pulsing).
- **Implementation (Tailwind):** Use the `motion-reduce:` modifier. For global disabling, apply a wildcard rule setting transition durations to `0ms`.

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Content Accessibility

**[UI RULE] Image Alternatives (Alt Text)**
- Informative images (e.g., Profile photo of a Professional): MUST have descriptive alt text (`alt="Profile photo of Dr. Jane Smith"`).
- Decorative images (e.g., abstract background patterns): MUST have empty alt text (`alt=""`) or `aria-hidden="true"` so screen readers ignore them.

**[BUSINESS RULE] Plain Language**
- Target reading level: 8th grade (excluding necessary medical terminology).
- Avoid idioms, jargon, and complex sentence structures.

**[UI RULE] Descriptive Link Text**
- Link text MUST make sense out of context.
- *Bad:* "Click here to view the report."
- *Good:* "View the Q3 Financial Report."

**[ASSUMPTION] Video Captions**
- MVP Assumption: No native video hosting is planned. If videos are embedded (e.g., YouTube), the platform relies on the provider's captioning. If custom video is added, Closed Captions (VTT) become a REQUIREMENT.

---

## 10. Responsive Accessibility

**[UI RULE] Zoom and Text Resizing**
- Content MUST remain readable and functional when the browser is zoomed to 200%.
- Users MUST be able to resize text up to 200% without loss of content or functionality (no truncated text).

**[UI RULE] Reflow**
- Content MUST reflow to fit a 320px viewport (standard mobile width) without requiring horizontal scrolling (except for specific components like wide data tables, which must be contained in a scrollable region with `tabIndex="0"` and an `aria-label`).

---

## 11. Accessibility by Role Context

### 11.1 Client / Patient Portal
- **Primary Input:** Touch (Mobile Web) + Keyboard/Mouse (Desktop).
- **Key Challenges:** The booking wizard is complex. Form accessibility, clear error handling, and logical stepper progression are hyper-critical.
- **Demographic Note:** This interface serves the highest proportion of elderly and disabled users. Strict adherence to large text contrast and touch target sizing is paramount.

### 11.2 Professional Portal
- **Primary Input:** Touch (Mobile-first, potentially native app wrapped).
- **Key Challenges:** The Job Acceptance Flow involves time pressure (countdown timer).
- **A11y Priority:** Ensuring live regions announce the incoming job and timer reliably without causing screen reader panic. Large touch targets for "Accept" / "Reject" while walking or moving.

### 11.3 Admin & Operations Portal
- **Primary Input:** Keyboard + Mouse (Desktop).
- **Key Challenges:** Dense data tables, complex filtering, multi-step verification forms.
- **A11y Priority:** Keyboard navigation efficiency. Power users relying on keyboard shortcuts or screen readers must be able to parse large tables and execute bulk actions without mouse dependence.

### 11.4 Organization / Hospital Portal
- **Primary Input:** Keyboard + Mouse (Desktop).
- **Key Challenges:** Roster management, timesheet approvals.
- **A11y Priority:** Semantic grouping of bulk inputs, accessible calendar/date pickers for shift scheduling.

---

## 12. Screen Reader Testing Checklist (Audit Protocol)

Before any major release, the QA team MUST execute this checklist using standard screen readers (NVDA on Windows/Firefox, VoiceOver on macOS/Safari, VoiceOver on iOS, TalkBack on Android).

1. **[ ] Page Titles:** Does `<title>` accurately describe the page and state? (e.g., "Step 2: Choose Service - Healthcare Platform").
2. **[ ] Landmarks:** Can the user navigate by landmark (Header, Main, Navigation)?
3. **[ ] Headings:** Does the heading tree form a logical outline without missing levels?
4. **[ ] Tab Order:** Does tabbing flow top-to-bottom, left-to-right? Does it match visual order?
5. **[ ] Focus Visibility:** Is the teal focus ring visible on every interactable element?
6. **[ ] Image Alt Text:** Are profile pictures and document previews announced correctly? Are decorative SVG icons ignored?
7. **[ ] Form Validation:** When submitting an empty form, are errors announced? Does focus move to the first invalid input?
8. **[ ] Modals:** When clicking "Cancel Booking", does focus stay trapped in the confirmation modal?
9. **[ ] Dynamic Updates:** When a new message arrives or a job status changes, is it announced via a polite live region?
10. **[ ] Custom Controls:** Do star rating inputs, date pickers, and maps function via keyboard alone?

---

## 13. Open Decisions & Assumptions

- **[OPEN DECISION]** Timer Extensions: Do we implement a mechanism to extend the timer on the Professional Job Request screen to strictly comply with WCAG guidelines on time limits, or rely on the real-time nature of the marketplace as an exception?
- **[ASSUMPTION]** Third-Party IFrames: It is assumed that any integrated third-party tools (e.g., payment gateways like Stripe Elements) handle their own internal accessibility compliance.
- **[ASSUMPTION]** Document Parsing: KYC documents uploaded as PDFs/Images are not guaranteed to be accessible themselves; accessibility applies only to the upload interface.

*End of Document*
