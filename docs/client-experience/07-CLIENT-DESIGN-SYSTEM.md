# CareConnect Client Design System
## 1. Color Palette

The CareConnect brand relies on a clean, reassuring color palette that inspires trust and calm.

### Primary Colors
| Color | Hex | CSS Variable | Usage Context |
|-------|-----|--------------|---------------|
| Brand Teal | `#0EA5A4` | `--color-brand-teal` | Primary buttons, active states, key branding elements, icons. |
| Brand Blue | `#2563EB` | `--color-brand-blue` | Links, secondary accents, informational badges. |

### Canvas & Surfaces
| Color | Hex | CSS Variable | Usage Context |
|-------|-----|--------------|---------------|
| Canvas White | `#FFFFFF` | `--color-canvas-white` | Main app background, cards, modals, dropdowns. |
| Canvas Primary | `#FFFFFF` | `--color-canvas-primary`| Identical to white, used semantically for main surfaces. |
| Canvas Sec. | `#F8FAFC` | `--color-canvas-secondary`| App background in nested views, subtle highlights, alternating rows. |
| Canvas Tert. | `#F1F5F9` | `--color-canvas-tertiary`| Disabled states, skeleton loaders, muted backgrounds. |

### Text Colors
| Color | CSS Class | Usage Context |
|-------|-----------|---------------|
| Primary | `text-primary` (slate-900) | Main headings, primary body text, critical labels. |
| Secondary | `text-secondary` (slate-600) | Subheadings, descriptions, secondary body text. |
| Muted | `text-muted` (slate-400) | Disabled text, placeholders, very subtle metadata. |
| Inverse | `text-white` | Text on brand-teal or dark backgrounds. |

### Border Colors
| Color | CSS Class | Usage Context |
|-------|-----------|---------------|
| Default | `border-default` (slate-200) | Standard borders for cards, inputs, dividers. |
| Light | `border-light` (slate-100) | Subtle borders for nested components or lists. |
| Brand | `border-brand` (teal) | Active inputs, selected cards, focus rings. |

### Status Colors
| Status | Color | Usage Context |
|--------|-------|---------------|
| Success| Emerald (`#10B981`) | Success messages, confirmed bookings, completed steps. |
| Warning| Amber (`#F59E0B`) | Pending status, warnings, incomplete steps. |
| Danger | Red (`#EF4444`) | Error states, failed payments, destructive actions (cancel booking). |
| Info | Blue (`#3B82F6`) | Informational alerts, tooltips, helpful hints. |

---

## 2. Typography Scale

CareConnect uses a highly legible, modern sans-serif font stack (Inter or similar).

| Element | Size | Weight | Line Height | CSS Class | Use Case |
|---------|------|--------|-------------|-----------|----------|
| H1 | 36px (2.25rem) | 700 (Bold) | 40px | `text-4xl font-bold` | Page titles, Hero headlines. |
| H2 | 30px (1.875rem) | 600 (Semibold)| 36px | `text-3xl font-semibold` | Section headers, modal titles. |
| H3 | 24px (1.5rem) | 600 (Semibold)| 32px | `text-2xl font-semibold` | Card titles, step headers. |
| H4 | 20px (1.25rem) | 600 (Semibold)| 28px | `text-xl font-semibold` | Small subsections, important labels. |
| H5 | 18px (1.125rem) | 500 (Medium) | 28px | `text-lg font-medium` | Emphasized body text. |
| H6 | 16px (1rem) | 600 (Semibold)| 24px | `text-base font-semibold` | Form labels, button text. |
| Body 1 | 16px (1rem) | 400 (Regular) | 24px | `text-base` | Main body copy, descriptions. |
| Body 2 | 14px (0.875rem) | 400 (Regular) | 20px | `text-sm` | Secondary text, meta info. |
| Caption | 12px (0.75rem) | 400 (Regular) | 16px | `text-xs` | Help text, very small print, timestamps. |
| Label | 14px (0.875rem) | 500 (Medium) | 20px | `text-sm font-medium` | Form field labels. |

---

## 3. Spacing Scale

Based on an 4px baseline grid.

| Token | Pixel Value | Rem Value | Example Usage |
|-------|-------------|-----------|---------------|
| `1` | 4px | 0.25rem | Tighter gaps, small icon spacing. |
| `2` | 8px | 0.5rem | Small margins, inline element spacing. |
| `3` | 12px | 0.75rem | Inner padding for badges/small buttons. |
| `4` | 16px | 1rem | Standard container padding, list item gaps. |
| `5` | 20px | 1.25rem | Medium gaps. |
| `6` | 24px | 1.5rem | Standard card padding, section gaps. |
| `8` | 32px | 2rem | Major component spacing. |
| `10`| 40px | 2.5rem | Page section margins. |
| `12`| 48px | 3rem | Large structural spacing. |
| `16`| 64px | 4rem | Hero section padding. |

---

## 4. Border Radius Tokens

| Token | Pixel Value | CSS Class | Usage Context |
|-------|-------------|-----------|---------------|
| `sm` | 4px | `rounded-sm` | Checkboxes, small badges. |
| `md` | 6px | `rounded-md` | Standard buttons, inputs, tooltips. |
| `lg` | 8px | `rounded-lg` | Images, inner cards, large buttons. |
| `xl` | 12px | `rounded-xl` | Modals, standard cards. |
| `2xl` | 16px | `rounded-2xl` | Major page containers, large feature cards. |
| `full`| 9999px | `rounded-full`| Avatars, pill buttons, floating action buttons. |

---

## 5. Shadow Tokens

| Token | CSS Class | Usage Context |
|-------|-----------|---------------|
| `sm` | `shadow-sm` | Small inputs, subtle card elevations. |
| `DEFAULT` | `shadow` | Standard cards, dropdowns. |
| `md` | `shadow-md` | Modals, prominent cards, navbars. |
| `lg` | `shadow-lg` | Popovers, major interactive elements. |
| `xl` | `shadow-xl` | Drawers, heavy overlays. |
| `inner` | `shadow-inner` | Depressed states, subtle inner wells. |
| `none` | `shadow-none` | Flat design elements. |

---

## 6. Component Variants

### Button
*   **Primary**: Brand Teal background, white text. Hover: slightly darker teal. Active: scaled down 0.98.
*   **Secondary**: Canvas Primary background, Border Default, Primary text. Hover: Canvas Secondary.
*   **Ghost**: Transparent background, Primary text. Hover: Canvas Secondary.
*   **Danger**: Red background, white text. Hover: darker red.
*   **Sizes**:
    *   `sm`: height 32px, text-sm, px-3
    *   `md`: height 40px, text-base, px-4 (Default)
    *   `lg`: height 48px, text-base, px-6

### Card
*   **Default**: Canvas Primary, rounded-2xl, border-default, shadow-sm.
*   **Hoverable**: Adds `hover:shadow-md transition-shadow cursor-pointer`.
*   **Selected**: Border changes to `border-brand`, subtle teal background tint.

### Badge
*   **Status**: Success (Emerald bg/text), Warning (Amber bg/text), Danger (Red bg/text), Info (Blue bg/text).
*   **Style**: Light background (10% opacity of color) with solid text color. rounded-full, text-xs, font-medium, px-2.5, py-0.5.

### Input
*   **Default**: rounded-xl, border-default, text-primary, bg-white, h-12.
*   **Focus**: ring-2 ring-brand-teal border-transparent.
*   **Error**: border-danger ring-danger/20.

### Modal & Drawer
*   **Backdrop**: `bg-slate-900/50 backdrop-blur-sm`.
*   **Modal Container**: rounded-2xl, shadow-xl, p-6, max-w-lg w-full, centered.
*   **Drawer Container**: right-0, top-0, h-full, shadow-xl, p-6, w-full max-w-md, slide-in animation.

### Skeleton
*   **Style**: bg-canvas-tertiary, animate-pulse, rounded-md (or full for avatars).

### EmptyState
*   **Layout**: Flex col, center aligned, p-8.
*   **Elements**: Large muted icon (48px), H4 title (text-primary), Body 2 description (text-secondary), optional primary CTA button.

---

## 7. Icon System

*   **Library**: Lucide React.
*   **Sizes**:
    *   `sm`: 16px (Inline text, badges)
    *   `md`: 20px (Buttons, standard list items)
    *   `lg`: 24px (Navigation, headers)
    *   `xl`: 32px (Feature cards, Empty states)
*   **Stroke Width**: 2px consistently.
*   **Common Icons**: `User`, `Calendar`, `MapPin`, `Clock`, `Stethoscope`, `Activity`, `CheckCircle`, `AlertCircle`.

---

## 8. Form Design Patterns

*   **Labels**: Above the input, text-sm, font-medium, text-primary, mb-1.5.
*   **Placeholders**: text-muted. Realistic examples (e.g., "Enter building name, floor").
*   **Validation**: Real-time validation on blur.
*   **Error States**: Red border, text-xs text-danger error message below input (mt-1).
*   **Required Fields**: Marked with a red asterisk `*`.

---

## 9. Card Patterns

*   **Service Card**: Image header (h-40 object-cover), Title, short description, price starting at, "View Details" ghost button. Layout: Flex col.
*   **Booking Card**: Status badge top right, Service Name, Patient Name, Date/Time, Location, "View Booking" CTA. Layout: Grid or Flex row.
*   **Patient Card**: Avatar/Initial, Name, Age, Gender, Relationship. Layout: Flex row with center align.
*   **Address Card**: Home/Work icon, full address string, Default badge if applicable, Edit/Delete actions.

---

## 10. Healthcare-Specific Patterns

*   **Trust Badges**: Used on home and service pages. Icons: ShieldCheck, Award. Text: "Verified Professionals", "Background Checked", "10+ Years Experience".
*   **Verification Marks**: Blue checkmark next to Professional names.
*   **Clinical Care Indicators**: Specialized badges for medical services (e.g., "Requires Prescription", "Certified Nurse").
*   **Emergency Disclaimer**: Clear warning banner on relevant pages: "CareConnect is not for medical emergencies. Please call ambulance services immediately in case of an emergency."
