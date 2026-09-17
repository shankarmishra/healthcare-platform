# HEALTHCARE PLATFORM — CLIENT UX/UI BLUEPRINT INDEX

**Project**: `C:\Users\xshan\Desktop\healthcare-platform`  
**Target Area**: Client / Patient Experience (Public Pages, Booking Concierge, Client Portal)  
**Positioning**: Care Concierge — Calm, Reassuring, Premium, Trustworthy  
**Service Region**: Delhi NCR (Delhi, Noida, Gurugram, Faridabad)  

---

## Document Inventory

This index lists all 21 core blueprint specification documents created in `docs/client-experience/`.

| # | Document File | Primary Focus / Description | Lines |
|---|---|---|---|
| **00** | [`00-CLIENT-UX-MASTER-BLUEPRINT.md`](./00-CLIENT-UX-MASTER-BLUEPRINT.md) | **Master Blueprint**: Product positioning, business model, core UX questions, document map, and 6-phase implementation roadmap. | 500+ |
| **01** | [`01-CLIENT-INFORMATION-ARCHITECTURE.md`](./01-CLIENT-INFORMATION-ARCHITECTURE.md) | **Information Architecture**: Complete sitemap, route inventory, header/footer/mobile navigation specs, and deep link strategy. | 350+ |
| **02** | [`02-CLIENT-JOURNEY-MAP.md`](./02-CLIENT-JOURNEY-MAP.md) | **User Journey Map**: 28-stage client lifecycle from initial discovery to repeat booking, complete with Mermaid transition flowcharts. | 450+ |
| **03** | [`03-CLIENT-SCREEN-INVENTORY.md`](./03-CLIENT-SCREEN-INVENTORY.md) | **Screen Inventory**: Exhaustive catalog of all 43 client-facing screens across public, booking, portal, and utility states. | 350+ |
| **04** | [`04-CLIENT-PAGE-BY-PAGE-SPEC.md`](./04-CLIENT-PAGE-BY-PAGE-SPEC.md) | **Page-by-Page Specification**: Deep-dive layout, section, widget, interaction, and responsive specs for 19 key pages. | 850+ |
| **05** | [`05-CLIENT-BOOKING-FLOW.md`](./05-CLIENT-BOOKING-FLOW.md) | **Booking Concierge Flow**: Complete 10-step booking wizard spec, inputs, night shift rollover logic, and draft persistence. | 650+ |
| **06** | [`06-CLIENT-STATE-MATRIX.md`](./06-CLIENT-STATE-MATRIX.md) | **State Machine Matrix**: 19 client-visible booking states, badges, headline copy, next-state transitions, and Mermaid state diagram. | 350+ |
| **07** | [`07-CLIENT-DESIGN-SYSTEM.md`](./07-CLIENT-DESIGN-SYSTEM.md) | **Design System Tokens**: Colors (#0EA5A4 Teal), typography scale, spacing, shadows, component variants, and healthcare textures. | 450+ |
| **08** | [`08-CLIENT-INTERACTION-SYSTEM.md`](./08-CLIENT-INTERACTION-SYSTEM.md) | **Motion & Interaction System**: Page transitions, micro-interactions, modal spring dynamics, skeleton shimmers, and reduced motion. | 450+ |
| **09** | [`09-CLIENT-NOTIFICATION-SYSTEM.md`](./09-CLIENT-NOTIFICATION-SYSTEM.md) | **Notification Center**: 16 notification trigger templates, in-app bell drawer, SMS/Email multi-channel matrix, and push specs. | 350+ |
| **10** | [`10-CLIENT-ERROR-RECOVERY.md`](./10-CLIENT-ERROR-RECOVERY.md) | **Error Recovery & Empty States**: 30+ specific error scenarios, warm recovery copy, auto-retries, and 7 custom empty state designs. | 450+ |
| **11** | [`11-CLIENT-COPY-VOICE-GUIDE.md`](./11-CLIENT-COPY-VOICE-GUIDE.md) | **Copy & Voice Guide**: Care Concierge brand voice, page-by-page copy inventory, state messaging matrix, and vocabulary rules. | 450+ |
| **12** | [`12-CLIENT-RESPONSIVE-SPEC.md`](./12-CLIENT-RESPONSIVE-SPEC.md) | **Responsive Adaptation**: Breakpoint rules (<640px, 640-1023px, 1024px+), mobile touch targets (44px), and mobile sticky bars. | 350+ |
| **13** | [`13-CLIENT-ACCESSIBILITY-SPEC.md`](./13-CLIENT-ACCESSIBILITY-SPEC.md) | **Accessibility & WCAG 2.1 AA**: Color contrast audit, keyboard focus rings, ARIA landmarks/announcements, and screen reader rules. | 450+ |
| **14** | [`14-CLIENT-MEDIA-ASSET-SPEC.md`](./14-CLIENT-MEDIA-ASSET-SPEC.md) | **Media & Asset Guidelines**: Photography requirements, Lucide icon sizing, 10 SVG procedural textures, and WebP optimization. | 350+ |
| **15** | [`15-CLIENT-SEO-PERFORMANCE.md`](./15-CLIENT-SEO-PERFORMANCE.md) | **SEO & Performance Spec**: Core Web Vitals targets (LCP < 2.5s, INP < 200ms), meta tags, JSON-LD schemas, and route code-splitting. | 300+ |
| **16** | [`16-CLIENT-AUTHENTICATION-FLOW.md`](./16-CLIENT-AUTHENTICATION-FLOW.md) | **Authentication Flow**: Progressive auth (late gate), OTP login/register modals, JWT session handling, and security rules. | 350+ |
| **17** | [`17-CLIENT-PAYMENT-INVOICE-SPEC.md`](./17-CLIENT-PAYMENT-INVOICE-SPEC.md) | **Payment & Invoicing**: UPI/Card/Netbanking integration, GST itemization (18%), invoice PDF specs, and automated refund policies. | 300+ |
| **18** | [`18-CLIENT-REVIEW-FEEDBACK-SPEC.md`](./18-CLIENT-REVIEW-FEEDBACK-SPEC.md) | **Review & Feedback System**: Post-care review trigger, 5-star sub-ratings (punctuality, hygiene), highlight tags, and NPS surveys. | 250+ |
| **19** | [`19-CLIENT-REPEAT-REBOOK-SPEC.md`](./19-CLIENT-REPEAT-REBOOK-SPEC.md) | **Repeat & Recurring Care**: 1-click quick rebook, request same staff preference, weekly recurring care rules, and care packages. | 250+ |
| **20** | [`20-CLIENT-IMPLEMENTATION-BACKLOG.md`](./20-CLIENT-IMPLEMENTATION-BACKLOG.md) | **Implementation Backlog**: Prioritized execution roadmap (32 items: P0 Core Flow to P3 Polish) with effort, complexity, and dependencies. | 450+ |

---

## Strategic Principles Summary

1. **Care Concierge Core Identity**: The platform acts as a calm, reassuring, highly-guided healthcare partner. We remove complex marketplace bidding and provider filtering. The client explains their care needs; the platform handles staff dispatch.
2. **In-House Workforce Model**: All caregivers, nurses, and physios are internal credentialed staff. Language emphasizes *service, care, availability, operations* rather than *marketplace, freelancers, provider discovery*.
3. **Delhi NCR Geographic Restriction**: Serves Delhi, Noida, Gurugram, and Faridabad. Location picker enforces NCR boundary validation with helpful out-of-area guidance.
4. **Light Theme Exclusive**: Clean, clinical-grade palette (`#FFFFFF` background, `#F8FAFC` canvas, `#0EA5A4` brand teal, `#2563EB` medical blue) ensuring high trust and contrast.
5. **Progressive & Late Authentication**: Clients explore services and fill out care requirements before being prompted for authentication, maximizing conversion and reducing friction.
