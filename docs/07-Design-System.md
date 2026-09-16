# Healthcare Staffing & Home Care Platform - Design System Specification

## Overview
This document defines EVERY visual token and rule that the implementation must follow. No component may deviate from these specifications. The design system is constructed to convey a platform that is CALM, CONFIDENT, INTELLIGENT, HUMAN, PRECISE, and PROFESSIONAL.

This specification serves as the single source of truth for the frontend development team, UI/UX designers, and quality assurance testers. Any visual deviation from this document is considered a bug.

## 1. Design Philosophy

### 1.1 Core Principles
- **LIGHT THEME ONLY**: No dark mode implementation is planned or permitted. All components must be designed and optimized exclusively for a light-themed environment. This ensures readability of complex medical data under varying real-world lighting conditions (e.g., bright clinics, patients' homes).
- **Premium = Restraint**: A premium feel is achieved through fewer colors, fonts, shadows, and animations, but ensuring each element is of the highest quality. We prioritize signal over noise.
- **Visual Target Breakdown**:
  - 40% Healthcare Trust (Safety, reliability, cleanliness)
  - 25% Modern SaaS (Efficiency, clarity, usability)
  - 20% Premium Marketplace (Desirability, ease of use)
  - 15% Operational Enterprise (Power, scale, control)
- **Personality Traits**: CALM + CONFIDENT + INTELLIGENT + HUMAN + PRECISE + PROFESSIONAL.
- **Sources of Premium Quality**: Typography scale, spacing consistency, composition balance, high image quality, restrained motion, and clear hierarchy.
- **Prohibited Aesthetics**: Gradients (mostly), glow effects, neon colors, heavy or dark shadows, overly large "giant" cards, excessive 3D elements, glassmorphism, or any trendy UI patterns that distract from utility and trust.

### 1.2 The "Why"
In healthcare software, user trust is paramount. High contrast, clear typography, and predictable interactions reduce cognitive load and prevent errors. The restraint in the visual language ensures that the content (patient data, schedules, medical information) remains the primary focus. Every extra visual element is a cognitive burden.

## 2. Color System

The color system is heavily restricted to ensure consistency and prevent "rainbow" interfaces. Colors have specific semantic meanings and must never be used purely for decoration.

### 2.1 Core Surfaces
These colors define the background areas of the application.

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `canvas-primary` | `#FFFFFF` | 255, 255, 255 | Primary canvas (main backgrounds, card backgrounds, modals) |
| `canvas-secondary` | `#F8FAFC` | 248, 250, 252 | Secondary background (sidebar, off-canvas areas, table headers) |
| `canvas-tertiary` | `#F1F5F9` | 241, 245, 249 | Soft section background (nested panels, distinct areas, disabled states) |
| `canvas-cool` | `#F4F8FB` | 244, 248, 251 | Subtle cool surface (informative backgrounds, specific sections) |
| `canvas-warm` | `#FFF8F1` | 255, 248, 241 | Warm surface (selected sections, human-centric content, highlighted rows) |
| `canvas-teal` | `#F0FDFA` | 240, 253, 250 | Soft teal surface (healthcare-specific highlights, subtle active states) |
| `canvas-blue` | `#EFF6FF` | 239, 246, 255 | Soft blue surface (interactive or active states, informational panels) |
| `canvas-green` | `#F0FDF4` | 240, 253, 244 | Soft green surface (success areas, completed steps) |
| `canvas-orange`| `#FFF7ED` | 255, 247, 237 | Soft orange surface (warning/pending areas, attention needed) |

### 2.2 Text Colors
Text must always have sufficient contrast. Never use pure black or low-contrast grays.

| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#0F172A` | Primary text (Headings, primary body text, active nav). Never use pure `#000000`. |
| `text-secondary` | `#334155` | Secondary text (Subtitles, less important body text, secondary labels) |
| `text-tertiary` | `#475569` | Tertiary / supporting text (Captions, helper text, inactive tabs) |
| `text-muted` | `#64748B` | Muted / metadata (Timestamps, very low priority info, breadcrumbs) |
| `text-placeholder`| `#94A3B8` | Placeholder text in inputs only |
| `text-disabled` | `#CBD5E1` | Disabled state text (buttons, inputs) |
| `text-inverse` | `#FFFFFF` | Text on dark backgrounds (primary buttons, dark banners) |

### 2.3 Border Colors
Borders provide structure without overwhelming the content.

| Token | Hex | Usage |
|---|---|---|
| `border-default` | `#E2E8F0` | Default 1px borders (Cards, inputs, general dividers) |
| `border-light` | `#EDF2F7` | Very light borders (Subtle dividers within cards, internal table borders) |
| `border-emphasis`| `#CBD5E1` | Emphasized borders (Active inputs, prominent separators, drag-and-drop zones) |
| `border-dark` | `#94A3B8` | High contrast borders for specific accessibility needs |

### 2.4 Brand Colors
These colors define the personality of the platform. Use them deliberately.

| Token | Hex | Usage |
|---|---|---|
| `brand-teal` | `#0EA5A4` | Healthcare primary — care, health, verification, positive moments, primary CTAs, main logo |
| `brand-teal-light`| `#5EEAD4` | Healthcare accent light — subtle highlights, illustrations |
| `brand-teal-dark`| `#0F766E` | Healthcare deep accent — hover states for primary buttons, pressed states |
| `brand-blue` | `#2563EB` | Medical blue — navigation active states, info, professional tech, system states, links |
| `brand-blue-light`| `#93C5FD` | Medical blue light — subtle highlights, illustrations |
| `brand-blue-dark`| `#1D4ED8` | Deep blue accent — hover states for blue buttons, pressed states |

### 2.5 Semantic Status Colors
These colors must strictly align with their semantic meaning across the entire platform.

| Status | Color | Hex | Background Tint | Usage |
|---|---|---|---|---|
| Success | Green | `#16A34A` | `#DCFCE7` | Completed shifts, Approved KYC, Verified credentials |
| Info | Blue | `#2563EB` | `#DBEAFE` | Active bookings, In Progress status, Informational alerts |
| Warning | Amber | `#D97706` | `#FEF3C7` | Pending reviews, Under Review KYC, Missing information |
| Danger | Red | `#DC2626` | `#FEE2E2` | Rejected applications, Cancelled shifts, Errors, Destructive actions |
| Neutral | Slate | `#64748B` | `#F1F5F9` | Draft status, Offline status, Disabled elements, Unassigned shifts |

### 2.6 Color Application Rules
- **Color Density Rule**: Any single section (e.g., a card, a sidebar, a modal) must adhere to: 70-90% neutral/light surfaces, 5-15% brand colors, 1-10% semantic accents.
- **Surface Restriction**: Never fill entire sections with teal or blue backgrounds. Backgrounds should almost exclusively use the canvas tokens.
- **Gradient Rule**: Gradients are strictly optional and exceedingly rare. 
  - **Allowed**: Hero section background, large editorial content section, premium visual moments (like marketing pages).
  - **Never Allowed**: Buttons, cards, tables, forms, navbars, repetitive sections, UI components.
  - **Allowed Gradients**: `white` → `canvas-blue`, `white` → `canvas-teal`, `white` → `canvas-warm`. Transitions must be incredibly subtle, usually radial or top-to-bottom linear.
- **Text Contrast**: Text on colored backgrounds must ALWAYS be tested for WCAG AA compliance. `white` text on `brand-teal` and `brand-blue` is acceptable.

## 3. Typography System

Typography is the primary driver of the "premium" feel. Precision in scale, line height, and spacing is mandatory.

### 3.1 Font Families
- **Primary**: `Manrope` (A geometric sans-serif that balances modern tech with friendly, human curves).
- **Fallback**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`.
- **Monospace** (for technical data like IDs): `JetBrains Mono`, `Fira Code`, `Courier New`, `monospace`.
- **Loading**: Load via Google Fonts. Self-host if privacy requirements dictate.
- **Weights Required**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold). Do not load weights 100, 200, 300, or 900 to optimize performance.

### 3.2 Font Weight System
Strict adherence to weights ensures a predictable visual hierarchy.

| Weight | CSS Value | Usage |
|---|---|---|
| Regular | 400 | All body text, descriptions, paragraph content, standard table cells. |
| Medium | 500 | Form labels, secondary emphasis, table headers, small metadata. |
| SemiBold | 600 | Button text, card titles, prominent links, sub-navigation active states. |
| Bold | 700 | Primary section headings, H1-H3, important statistics. |
| ExtraBold | 800 | Hero heading only (marketing or primary dashboard entry). |

### 3.3 Type Scale — Desktop (≥ 1024px)
Use these explicit pixel values or their `rem` equivalents (assuming 16px base).

| Level | Font Size (px) | Font Size (rem) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero Display | 56-64 | 3.5-4 | 800 | 1.05-1.1 | -0.02em |
| H1 | 44-48 | 2.75-3 | 700 | 1.1-1.15 | -0.015em |
| H2 | 36-40 | 2.25-2.5 | 700 | 1.15-1.2 | -0.01em |
| H3 | 24-28 | 1.5-1.75 | 700 | 1.2-1.25 | 0 |
| H4 | 18-20 | 1.125-1.25 | 600 | 1.25-1.3 | 0 |
| Body Large | 17-18 | 1.0625-1.125 | 400 | 1.6 | 0 |
| Body | 15-16 | 0.9375-1 | 400 | 1.5-1.6 | 0 |
| Small | 13-14 | 0.8125-0.875 | 400 | 1.4-1.5 | 0 |
| Metadata | 11-12 | 0.6875-0.75 | 500 | 1.4 | 0.01em |

### 3.4 Type Scale — Mobile (< 768px)
Headings scale down significantly on mobile, while body text remains legible.

| Level | Font Size (px) | Line Height |
|---|---|---|
| Hero Display | 38-46 | 1.1 |
| H1 | 32-38 | 1.15 |
| H2 | 28-32 | 1.2 |
| H3 | 22-26 | 1.25 |
| H4 | 18-20 | 1.3 |
| Body Large | 16-17 | 1.5 |
| Body | 15-16 | 1.5 |
| Small | 13-14 | 1.4 |
| Metadata | 11-12 | 1.4 |

### 3.5 Typography Rules
- **No Orphan Words**: Ensure line lengths (measure) are constrained (max 70-80 characters for body text) to prevent orphan words. Use `max-width: 65ch` for reading paragraphs.
- **Heading Margins**: `margin-bottom` for headings should typically be `0.5x` to `1x` the font size. `margin-top` (when preceded by other content) should be `1.5x` to `2x` the font size to clearly group it with the following content.
- **Underlining**: Links within body paragraphs should be underlined on hover. Standalone links or navigation links should not be underlined unless active.
- **All Caps**: Use sparingly. Only for metadata, small table headers, or specific badges. Must always be combined with tracking (letter-spacing) of `0.05em` to `0.1em` and `font-weight: 600` or `700`.

## 4. Spacing System

Spacing strictly adheres to a 4px/8px base scale. This is non-negotiable and applies to padding, margins, gaps, and positioning.

### 4.1 The Core Scale
`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 120`

**Prohibited Values**: `2px, 5px, 6px, 10px, 13px, 14px, 15px, 17px, 18px, 25px, 30px` or any non-grid value. If it is not in the scale above, do not use it. 

### 4.2 Application Matrix
| Context | Spacing Value | CSS Utility Equivalent (e.g. Tailwind) |
|---|---|---|
| Minimal inline separation (icon + text) | 4px - 8px | `gap-1`, `gap-2` |
| Form field internal padding | 12px (v), 16px (h) | `px-4 py-3` |
| Form field vertical gap | 16px - 20px | `gap-4`, `gap-5` |
| Standard internal card padding | 20px - 24px | `p-5`, `p-6` |
| Large card internal padding | 32px | `p-8` |
| Dashboard grid gap (between cards) | 24px - 32px | `gap-6`, `gap-8` |
| Section header to content gap | 24px | `mb-6` |
| Major section vertical padding | 64px - 120px | `py-16`, `py-32` |
| Mobile page padding (edges) | 16px | `px-4` |
| Tablet page padding (edges) | 24px | `px-6` |
| Desktop page padding (edges) | 32px | `px-8` |
| Large screen page padding (edges)| 40px+ | `px-10+` |

## 5. Border Radius System

Radius is used to soften the UI but must remain highly professional. Over-rounding looks juvenile; under-rounding looks dated.

### 5.1 The Scale
| Token | Radius Value | Element Usage |
|---|---|---|
| `rounded-sm` | 4px - 6px | Small interactive elements (checkboxes, tooltips, tiny badges) |
| `rounded-md` | 8px | Small cards, inner containers |
| `rounded-lg` | 10px - 12px | Buttons, Inputs, Selects, Textareas, Modals (mobile) |
| `rounded-xl` | 16px | Cards (standard), Alerts, Dropdowns |
| `rounded-2xl`| 20px - 24px | Cards (large/featured), Modals (desktop), Hero media containers |
| `rounded-3xl`| 32px | Very large editorial images |
| `rounded-full`| 9999px | Badges, Pills, Avatars (circular), specific toggle switches |

### 5.2 Specific Rules
- **Buttons**: Must use 10-12px (`rounded-lg`). Do NOT use fully rounded (pill-shaped) buttons for primary actions. Pill shapes are reserved for tags/badges.
- **Cards**: Do NOT use fully rounded cards. 16px (`rounded-xl`) is the standard.
- **Avatars**: Typically 9999px (circular). In specific professional listings, 16px (squircle) is allowed.

## 6. Shadow System

Shadows are used sparingly for depth, elevation, and layering, never for mere decoration.

### 6.1 The Scale
| Level | CSS Value | Visual Effect | Usage |
|---|---|---|---|
| Shadow 1 (Subtle) | `0 1px 2px rgba(15,23,42,0.04)` | Barely visible depth | Inline elements, subtle depth on interactive non-card elements, secondary buttons |
| Shadow 2 (Card) | `0 8px 24px rgba(15,23,42,0.05)` | Elevated distinct container | Cards on hover, standard dropdown menus, popovers, sticky headers |
| Shadow 3 (Floating) | `0 16px 40px rgba(15,23,42,0.08)` | Distinctly hovering over page | Modals, drawers, floating action panels, toast notifications |
| Shadow 4 (Focus) | `0 0 0 2px rgba(14,165,164,0.25)`| Focus ring | Accessibility focus states on inputs, buttons, and links |

### 6.2 Specific Rules
- **Preference**: Border > Shadow. Use a 1px border (`border-default`) instead of a shadow to define containers whenever possible. This flattens the UI and makes it look more modern.
- **Restriction**: Never use dark shadows. Shadows must always be tinted with the dark slate color (`#0F172A`) at very low opacities (4-8%). Pure black shadows (`rgba(0,0,0,x)`) are strictly forbidden.
- **Hover Transitions**: Shadow transitions should take 200ms with ease-out timing.

## 7. Layout System

The layout system ensures consistency across varying screen sizes.

### 7.1 Breakpoints
| Breakpoint | CSS Width | Name | Layout Behavior |
|---|---|---|---|
| `sm` | `< 640px` | Mobile | Single column, stacked content, full width elements, bottom navigation/hamburger. |
| `md` | `640px - 767px` | Large Mobile | Single column, adjusted padding, slightly larger fonts. |
| `lg` | `768px - 1023px`| Tablet | 2-column grids allowed, sidebars become drawers, off-canvas menus. |
| `xl` | `1024px - 1279px`| Desktop | Multi-column layouts (up to 4), visible permanent sidebars. |
| `2xl` | `1280px+` | Large Desktop | Max-width constraints apply, extra whitespace around containers. |

### 7.2 Container Constraints
| Context | Max Width | Centering |
|---|---|---|
| Main Application Content | 1280px | Margin auto |
| Marketing Pages | 1200px - 1320px | Margin auto |
| Admin Dashboard Tables | 1400px or Full-width | Padding left/right |
| Reading/Blog/Legal Content | 720px - 800px | Margin auto |

## 8. Grid System

- **Standard Grid**: 12-column grid structure on desktop, 8 on tablet, 4 on mobile.
- **Gaps**: Standard grid gap is `24px` (`gap-6`). Large gap is `32px` (`gap-8`).
- **Main Content**: Max-width `1280px`, centered horizontally.
- **Admin Dashboard**: Expandable up to `1400px` when needed for complex tables, otherwise stick to `1280px`.
- **Rule**: Do NOT stretch content endlessly on large screens. Content should center and maintain a readable maximum width. Text should never span the full width of a 2560px monitor.

## 9. Icon System

Icons provide quick visual recognition and break up heavy text.

- **Library**: `Lucide React` ONLY. No FontAwesome, no Heroicons, no custom SVGs unless strictly necessary for a logo.
- **Stroke Width**: `1.75px` to `2.0px`. Do not use thin `1px` or heavy `3px` strokes.
- **Sizes**:
  - Small (`16px`): Metadata, tight UI, table headers.
  - Default (`20px`): Buttons, navigation links, inline with body text.
  - Large (`24px`): Stand-alone icons, primary actions, card headers.
  - Extra Large (`32px`, `48px`, `64px`): Empty states, marketing graphics, major section headers.
- **Rules**:
  - Never mix icon libraries.
  - Never replace all text with icons; always pair icons with text labels for accessibility unless universally understood (e.g., search magnifying glass, close X, trash can).
  - Use `text-muted` or `text-tertiary` for decorative icons, and `text-primary` or semantic colors for functional/status icons.

## 10. Component Visual Specifications

This section dictates the exact construction of core UI components.

### 10.1 Buttons
Buttons must clearly communicate action and priority.

| Variant | Background | Text | Border | Hover | Focus Ring |
|---|---|---|---|---|---|
| **Primary** | `brand-teal` | `white` | none | `brand-teal-dark` | `brand-teal` tint |
| **Secondary** | `transparent` | `text-primary` | 1px `border-default` | `canvas-secondary` | `border-emphasis` |
| **Ghost** | `transparent` | `text-secondary`| none | `canvas-tertiary` | `border-emphasis` |
| **Danger** | `status-danger`| `white` | none | `#B91C1C` | `status-danger` tint |
| **Danger Ghost**| `transparent` | `status-danger`| none | `canvas-tertiary` | `status-danger` tint |
| **Disabled** | `canvas-tertiary`| `text-disabled`| none | no change | none |

- **Dimensions**:
  - Default: Height 40px, Padding 12px 20px, Font 14px/15px.
  - Small: Height 36px, Padding 8px 16px, Font 13px/14px.
  - Large: Height 48px, Padding 16px 24px, Font 16px.
- **Border radius**: 12px (`rounded-lg`).
- **Font**: 600 weight.
- **Icon placement**: 8px gap between icon and text.
- **Loading State**: Replace text/icon with a spinner, keep button dimensions fixed. Do not allow button to shrink/grow.

### 10.2 Inputs (Text, Select, Textarea)
Form fields must be highly legible and clearly indicate their state.

- **Dimensions**: Height 44px (default). Textarea height varies based on `rows` attribute.
- **Padding**: 12px 16px.
- **Typography**: 15px/16px text size. Prevents iOS zoom.
- **Border**: 1px `border-default`.
- **Radius**: 12px (`rounded-lg`).
- **Normal State**: Background `white`, text `text-primary`.
- **Hover State**: Border changes to `border-emphasis`.
- **Focus State**: Border changes to `brand-teal`, adds ring `2px rgba(14,165,164,0.25)`. Outline must be removed.
- **Error State**: Border changes to `status-danger`, adds ring `2px rgba(220,38,38,0.25)`.
- **Disabled State**: Background `canvas-tertiary`, text `text-disabled`, border `border-default`.
- **Label**: 14px, 500 weight, 6px margin bottom. Color: `text-primary`.
- **Helper text**: 13px `text-muted`, 4px margin top.
- **Error text**: 13px `status-danger`, 4px margin top. Always include an error icon (`AlertCircle` 16px) next to the text.

### 10.3 Badges / Status Pills
Used to indicate the state of an entity (e.g., booking, professional).

- **Padding**: 4px 10px.
- **Radius**: 9999px (`rounded-full`).
- **Typography**: 12px, 500 weight, uppercase or title case.
- **Construction**: Each status maps to a background (light tint, 10-15% opacity of semantic color) + text color (100% opacity of semantic color) + optional dot indicator (4-6px dot before text, matching text color).
- **Example**: 'Approved' -> bg `#DCFCE7`, text `#16A34A`, dot `#16A34A`.
- **Rule**: Always include a text label — never use color-only status indicators.

### 10.4 Cards
The primary container for grouped information.

- **Background**: `white`.
- **Border**: 1px `border-default`.
- **Radius**: 16px (`rounded-xl`).
- **Padding**: 20px-24px standard, 32px for large layout cards.
- **Shadow**: Shadow 1 (Subtle) OR none (border-only preferred for a flatter, modern look).
- **Hover (Interactive Cards Only)**: Elevate to Shadow 2 (Card), border changes to `border-emphasis`. Add `transform: translateY(-2px)` with 200ms transition.
- **Header Structure**: Flex container, align-items center, justify-content space-between. Title (H4/H3) on left, actions (buttons/dropdowns) on right.
- **Divider**: Use 1px `border-default` to separate card header, body, and footer sections.

### 10.5 Modals & Dialogs
Used for focused tasks or confirmation without leaving the context.

- **Dimensions**:
  - Small/Confirm: Max-width 400px.
  - Standard: Max-width 560px.
  - Large/Complex Form: Max-width 800px.
- **Radius**: 20px (`rounded-2xl`).
- **Background**: `white`.
- **Shadow**: Shadow 3 (Floating).
- **Backdrop**: `rgba(15,23,42,0.4)` (dark slate at 40% opacity). Optional backdrop-blur of 2px-4px.
- **Interactivity**: Must close via Escape key, backdrop click, or X button in top right.
- **Padding**: 24px-32px internal padding.
- **Structure**:
  - Header: Title (H3), close button. Sticky if body scrolls.
  - Body: Scrollable area.
  - Footer: Action buttons (Primary right, secondary left/adjacent). Sticky if body scrolls. Top border `border-light`.

### 10.6 Drawers (Slide-overs)
Used for complex editing, filters, or detailed views that require more vertical space than a modal.

- **Dimensions**:
  - Desktop Standard: Width 480px.
  - Desktop Large: Width 600px.
  - Mobile: Full screen (100% width).
- **Shadow**: Shadow 3 (Floating).
- **Animation**: Slide-in from right (admin/desktop) or bottom (mobile). 300ms cubic-bezier transition.
- **Interactivity**: Close via Escape key, backdrop click, or X button.
- **Structure**: Fixed header (title + close), scrollable body (padding 24px), fixed footer (actions, padding 16px 24px, top border `border-default`).

### 10.7 Tables
Crucial for the Admin and Organization views. Must handle dense data gracefully.

- **Row height**: 52px (dense) to 64px (standard).
- **Header (`th`)**: Sticky positioning at top (z-index 50), `canvas-secondary` background, 13px, 600 weight, uppercase, `text-muted`. Bottom border `border-default`.
- **Cells (`td`)**: 14px or 15px `text-primary`. Padding 16px horizontal, aligned middle vertical.
- **Borders**: 1px `border-light` between rows (`border-bottom`). No vertical borders.
- **Hover**: `canvas-secondary` row highlight on `tbody tr:hover`.
- **Actions**: Positioned in the right-most column, usually represented by an ellipsis (More Options) dropdown or primary action button.
- **Pagination**: Positioned at bottom, options for 10/25/50 per page. Includes 'Previous' and 'Next' buttons and current page indicator.

### 10.8 Toasts / Notifications
Ephemeral system messages.

- **Position**: Top-right (desktop), Top-center or Bottom-center (mobile).
- **Duration**: 4-6 seconds auto-dismiss. Keep open if user hovers.
- **Variants**: Success (green icon), Error (red icon), Warning (amber icon), Info (blue icon).
- **Design**: White background, 1px `border-default`. Left-border color (4px width) indicating status, OR an icon indicating status.
- **Shadow**: Shadow 3 (Floating).
- **Radius**: 12px (`rounded-lg`).
- **Content**: Bold title (14px), brief description (13px, `text-secondary`). Close X button top right.

### 10.9 Avatars & Profiles
Visual representation of users.

- **Sizes**: 24px (inline), 32px (navbar default), 40px (table default), 48px (card header), 64px, 96px (profile detail).
- **Radius**: 9999px (circular).
- **Fallback**: Initials (max 2 characters) with a consistent background color (e.g., `canvas-blue` with `brand-blue` text).
- **Status Indicator**: Absolute positioned 10px-12px dot bottom-right indicating online/offline/busy status.
- **Images**: Must use `object-fit: cover` to avoid distortion.

### 10.10 Dividers & Separators
- **Color**: `border-default` or `border-light`.
- **Thickness**: 1px.
- **Usage**: Use margins (whitespace) to create space rather than relying heavily on visual dividers. Dividers should be used to separate distinct, unrelated sections or list items. Horizontal rules (`<hr>`) should have margin of at least 24px top and bottom.

### 10.11 Skeletons / Loading States
- **Animation**: Continuous pulse animation (opacity change) between `canvas-tertiary` and `canvas-secondary`.
- **Radius**: Match the component it is replacing (e.g., 12px for buttons, 9999px for text lines, 16px for image placeholders).
- **Usage**: Prefer skeletons over generic spinners for full page or section loads. Use spinners (brand-teal) strictly for button loading states or small data refresh events.

### 10.12 Tabs
Navigation within a specific view.

- **Style**: Underline style preferred over pill style.
- **Text**: 14px or 15px, 500 weight.
- **Inactive**: `text-tertiary`, transparent border. Hover changes text to `text-primary`.
- **Active**: `brand-teal` text, 2px bottom border `brand-teal`.
- **Spacing**: 24px to 32px gap between tab items.

### 10.13 Tooltips
For additional context on hover.

- **Background**: `text-primary` (Dark slate, `#0F172A`).
- **Text**: `white`, 12px, 400 weight.
- **Padding**: 6px 10px.
- **Radius**: 6px (`rounded-sm`).
- **Arrow**: Optional 4px triangle pointing to the target element.
- **Trigger**: Delay of 300ms before appearing to avoid flashing.

## 11. Accessibility (A11y) Rules
Compliance is mandatory, particularly for a healthcare platform.

- **Contrast**: All text must meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text). Use contrast checking tools.
- **Focus Rings**: Keyboard focus must be clearly visible. Use the 2px ring defined in the Shadow System (`Shadow 4`). Never remove `outline` in CSS without providing a `box-shadow` or `border` fallback. Focus rings must have high contrast against the background.
- **Click Targets**: Minimum 44x44px touch target on mobile for interactive elements (icons, buttons, links). Use padding to expand click areas without visually enlarging the element.
- **Screen Readers**:
  - Ensure all icons have `aria-hidden="true"` if decorative.
  - Functional icons (e.g., a standalone edit pencil) must have an appropriate `aria-label`.
  - Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`).
  - Use appropriate `role` attributes for custom components (e.g., `role="dialog"` for modals).
- **Forms**: Every input must have a programmatically associated label (using `id` and `for` attributes). Placeholder text is NOT a replacement for a label.

## 12. Motion & Animation
Animations must feel professional, not playful.

- **Philosophy**: Snappy, purposeful, unobtrusive. Motion should guide the eye, not distract it.
- **Duration**:
  - 150ms - 200ms for micro-interactions (hover, focus, button clicks).
  - 300ms for macro-interactions (modals appearing, drawers sliding, page transitions).
- **Easing**:
  - Ease-out for appearing elements (`cubic-bezier(0, 0, 0.2, 1)`). Fast entrance, slow stop.
  - Ease-in for disappearing elements (`cubic-bezier(0.4, 0, 1, 1)`). Slow start, fast exit.
- **Properties to animate**: `opacity`, `transform`, `background-color`, `border-color`, `box-shadow`, `color`.
- **Never animate**: `width`, `height`, `margin`, `padding`, `top/left/right/bottom` (unless strictly necessary, prefer hardware accelerated `transform: translate()` instead to avoid repaints).

## 13. Z-Index Scale
Maintain a strict z-index scale to prevent overlapping issues and messy CSS.

| Level | Value | Element Category |
|---|---|---|
| `z-hide` | -1 | Visually hidden elements, behind content backgrounds. |
| `z-base` | 0 | Default content, standard document flow. |
| `z-elevated` | 10 | Cards, specific absolute positioned inline elements, badges. |
| `z-dropdown` | 40 | Dropdown menus, select popovers, autocomplete menus. |
| `z-sticky` | 50 | Sticky headers, table headers, sticky action bars. |
| `z-drawer` | 60 | Drawers, off-canvas navigation panels, bottom sheets. |
| `z-modal` | 70 | Modals, dialogs, fullscreen overlays. |
| `z-toast` | 80 | Toasts, snackbars, global system notifications. |
| `z-tooltip` | 90 | Tooltips (must always be on top of everything). |

## 14. Responsive Behavior
- **Mobile First Approach**: Design and implement starting from the smallest screen, using `min-width` media queries to add complexity for larger screens.
- **Navigation**:
  - Desktop: Top horizontal nav or persistent left sidebar.
  - Mobile: Bottom tab bars (for primary user apps) or hamburger menu opening a full-width drawer (for admin apps).
- **Tables**: On mobile, traditional data tables do not work. They must either:
  1. Wrap in a container with `overflow-x: auto` (acceptable for admin).
  2. Collapse into a stacked card format, where each row becomes a card (required for client/professional facing apps). Never squish table columns unreadably.
- **Stacking**: Side-by-side elements on desktop (e.g., form inputs) should stack vertically on mobile.

## 15. Forms & Validation
- **Required Fields**: Indicate with an asterisk (*) in `text-muted` or `status-danger`.
- **Validation Timing**: Validate on blur (when user leaves field) or on form submit. Do not aggressively validate on every keystroke (e.g., showing a red error while the user is still typing their email) unless it's a specific format constraint like a password strength meter.
- **Error States**: Must clearly highlight the input (red border) AND provide text explaining the error below the input. Never rely on color alone.
- **Success States**: For complex forms, a green checkmark icon inside the input can indicate a successfully validated field.

## 16. Empty States
Crucial for onboarding and general UX. Never leave a screen blank.

- **Visuals**: Use a subtle, large icon (32px-64px) or a custom illustration in `text-muted` or `canvas-blue`.
- **Text**: Clear, bold title (H4 or large body) explaining the state (e.g., "No Bookings Yet"). A secondary muted string explaining how to populate the area or what happens next.
- **Action**: Always provide a primary action button if the user can create the content (e.g., "Book a Service", "Add New Client").
- **Positioning**: Centered vertically and horizontally within the container.

## 17. Component Composition Rules
- **Forms within Modals**: Modals containing forms should have sticky headers and footers (with actions) if the form scrolls. The main action should be on the right.
- **Card Actions**: Primary actions for a card should be in the top right header, or bottom right footer. Do not scatter actions randomly within the card body.
- **Data Density**:
  - Admin/Organization Views: Prioritize data density over white space to minimize scrolling and maximize information architecture.
  - Client/Professional Views: Prioritize white space, large tap targets, and guidance over data density.
- **Destructive Actions**: Buttons that delete data or cancel operations must be clearly marked (red) and should typically require a confirmation step (modal or double-click) to prevent accidental data loss.

---
## 18. Interaction Patterns
- **Hover States**: All interactive elements (buttons, links, cards, list items) MUST have a distinct hover state. This provides immediate feedback to the user.
- **Active/Pressed States**: Buttons must show visual feedback when clicked (usually a slightly darker background or a subtle scale-down transform like `scale(0.98)`).
- **Disabled States**: Clearly communicate why an element is disabled using a tooltip if possible. Do not rely solely on lower opacity.

## 19. Loading and Progressive Enhancement
- **Lazy Loading**: Images and heavy components below the fold should be lazy-loaded to improve initial page load times.
- **Progressive Enhancement**: Ensure basic functionality works without JavaScript, or provide a robust fallback.
- **Skeleton Screens**: Use skeleton screens that accurately represent the structure of the incoming data, rather than generic loading spinners, to reduce perceived wait times.

## 20. Code Architecture for Design Tokens
- **CSS Variables**: All design tokens (colors, spacing, typography) should map directly to CSS custom properties (variables) at the root level.
- **Naming Convention**: Use a consistent naming convention (e.g., `--color-brand-teal`, `--spacing-24`, `--font-size-h1`).
- **Tailwind Configuration**: If using Tailwind CSS, ensure the `tailwind.config.js` is strictly constrained to only the values defined in this document. Disable all unused core plugins to keep the output CSS minimal.

---
**End of Specification.**
