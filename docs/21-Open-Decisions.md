# Open Decisions & Assumptions Registry

**Document ID**: HC-ODAR-001  
**Project**: Healthcare Staffing & Home Care Platform  
**Status**: Draft  
**Version**: 1.0  
**Last Updated**: 2026-09-16  

---

## Document Control
| Version | Date | Author | Description of Changes |
|---------|------|--------|------------------------|
| 1.0 | 2026-09-16 | Senior Product Architect | Initial draft of Open Decisions & Assumptions Registry |

---

## Introduction

### Purpose
The purpose of this Open Decisions & Assumptions Registry is to collect ALL open decisions, working assumptions, known limitations, and resolved conflicts from across the entire specification into one centralized document. This ensures that stakeholders, engineering teams, and product owners have a single source of truth for items that require further validation, clarification, or acceptance.

### Scope
This document covers business rules, technical architecture, user interface design, and legal/regulatory compliance for the MVP phase of the Healthcare Staffing & Home Care Platform. 

### Methodology
- **Implementation Strategy**: Implementation should proceed with the safest neutral assumption where possible, but items marked as "Blocking = Yes" require immediate stakeholder input.
- **Continuous Updates**: This registry is a living document and will be updated as decisions are finalized and assumptions are validated.

---

## 1. Open Decisions

These are business, design, or technical decisions that have NOT been resolved. 

### 1.1 Business Decisions

| ID | Category | Decision Required | Impact | Current Assumption | Blocking? |
|---|---|---|---|---|---|
| OD-BIZ-001 | Revenue | What is the platform commission percentage on bookings? | Affects pricing display, payout calculations, and financial models. | ASSUMPTION: 15% platform commission used in demo data. | No |
| OD-BIZ-002 | Employment | Are healthcare professionals contractors or employees? | Dictates legal, tax, UI labels, payment flow, and platform liability. | ASSUMPTION: Independent contractor model for MVP. | No |
| OD-BIZ-003 | Cancellation | What is the cancellation policy? (timeframe, penalties, refund rules) | Impacts booking cancellation flow, refund logic, client satisfaction. | ASSUMPTION: Free cancellation > 4 hours before, 50% charge < 4 hours. | No |
| OD-BIZ-004 | Pricing | Who sets pricing — platform, professional, or negotiated? | Drives pricing management UI, professional profile, matching algorithm. | ASSUMPTION: Platform sets base rates, professionals can set premium. | No |
| OD-BIZ-005 | Matching | What is the matching algorithm priority? (distance vs. rating vs. experience vs. price) | Core matching engine behavior, search result ordering. | ASSUMPTION: Distance > Availability > Rating > Experience. | No |
| OD-BIZ-006 | Payout | What is the payout frequency? (immediate, daily, weekly, bi-weekly) | Defines Finance admin UI, professional earnings display, cash flow. | ASSUMPTION: Weekly batch processing. | No |
| OD-BIZ-007 | Payout | What is the minimum payout threshold? | Dictates payout eligibility logic, professional experience. | ASSUMPTION: No minimum threshold for MVP. | No |
| OD-BIZ-008 | Verification | What specific documents are required for KYC? | Drives KYC upload UI, verification checklist, onboarding drop-off. | ASSUMPTION: Government ID + Professional License + Address Proof. | No |
| OD-BIZ-009 | Verification | Does KYC expire? If so, what is the renewal period? | KYC status machine, notification triggers, admin queue volume. | ASSUMPTION: 12-month validity. | No |
| OD-BIZ-010 | Insurance | Does the platform provide liability insurance? | Trust indicators, legal disclaimers, platform liability. | ASSUMPTION: No insurance provided in MVP, disclaimer shown. | No |
| OD-BIZ-011 | Scope | What medical procedures are professionals allowed to perform? | Service catalog structure, professional eligibility constraints. | ASSUMPTION: Determined by professional's license, platform doesn't validate clinical scope. | No |
| OD-BIZ-012 | SLA | What are the support ticket SLAs? | Support queue prioritization, escalation rules, customer satisfaction. | ASSUMPTION: No formal SLA for MVP. | No |
| OD-BIZ-013 | Dispute | What is the dispute resolution process? | Booking dispute flow, admin actions, financial adjustments. | ASSUMPTION: Manual admin review for MVP. | No |
| OD-BIZ-014 | Rating | Can professionals dispute unfair ratings? | Review moderation flow, professional retention. | ASSUMPTION: Admin can flag/remove reviews for MVP. | No |
| OD-BIZ-015 | Overtime | How is overtime handled for long shifts? | Timesheet calculation, invoice generation, professional payouts. | ASSUMPTION: Flat hourly rate applies regardless of shift length for MVP. | No |
| OD-BIZ-016 | Sub-contracting | Can a professional send a replacement if they are unavailable? | Continuity of care, platform liability, scheduling logic. | ASSUMPTION: No, clients must rebook through the platform for a new professional. | No |

### 1.2 Technical Decisions

| ID | Category | Decision Required | Impact | Current Assumption | Blocking? |
|---|---|---|---|---|---|
| OD-TECH-001 | Authentication | What authentication provider to use? (Firebase Auth, Auth0, custom) | Login/registration flow, session management, security. | ASSUMPTION: Simulated auth with role context for MVP demo. | No |
| OD-TECH-002 | Payment | What payment gateway to integrate? (Razorpay, Stripe, PayU) | Payment UI, refund flow, PCI compliance. | ASSUMPTION: Simulated payment for MVP. | No |
| OD-TECH-003 | Maps | What map provider to use? (Google Maps, Mapbox, OpenStreetMap) | Search page map, matching visualization, cost. | ASSUMPTION: Custom SVG abstract map for MVP, real map integration deferred. | No |
| OD-TECH-004 | Real-time | WebSocket or polling for real-time updates? | Notification delivery, booking tracking, server load. | ASSUMPTION: Simulated with React state for MVP. | No |
| OD-TECH-005 | Backend | What backend technology? (Node.js, Go, Python) | API layer, data persistence, team skill requirements. | ASSUMPTION: Frontend-only demo with mock data for MVP. | No |
| OD-TECH-006 | Database | What database? (PostgreSQL, MongoDB, Firestore) | Data model implementation, query performance. | ASSUMPTION: In-memory demo data for MVP. | No |
| OD-TECH-007 | SSR/SSG | Should public pages use Server-Side Rendering? | SEO, performance, initial load time. | ASSUMPTION: CSR-only for MVP, SSR migration path documented. | No |
| OD-TECH-008 | Hosting | Where will the app be deployed? | CI/CD, domain management, SSL, infrastructure cost. | ASSUMPTION: Not deployed for MVP; runs locally. | No |
| OD-TECH-009 | File Storage | Where are KYC documents stored? | Document upload, preview, data compliance. | ASSUMPTION: Placeholder images for MVP. | No |
| OD-TECH-010 | Analytics | What analytics tool? | Event tracking, user behavior insights, marketing attribution. | ASSUMPTION: No analytics for MVP. | No |
| OD-TECH-011 | Monitoring | What error monitoring tool? | Error tracking, uptime monitoring, bug resolution. | ASSUMPTION: Browser console for MVP. | No |
| OD-TECH-012 | Email/SMS | What provider to use for transactional messages? | Notification delivery, verification codes, reliability. | ASSUMPTION: Mock console logs for MVP. | No |

### 1.3 Design Decisions

| ID | Category | Decision Required | Impact | Current Assumption | Blocking? |
|---|---|---|---|---|---|
| OD-DSN-001 | Brand | What is the platform name? | Logo, meta tags, copy, domain name. | ASSUMPTION: "HealthConnect" or "CareHub" placeholder. | No |
| OD-DSN-002 | Logo | What logo to use? | Header, favicon, OG images. | ASSUMPTION: Text-only logo with Manrope font for MVP. | No |
| OD-DSN-003 | Admin Tables on Mobile | Cards vs. horizontal scroll tables? | Admin mobile experience, data density. | ASSUMPTION: Horizontal scroll with priority columns. | No |
| OD-DSN-004 | Professional Profile Indexing | Should professional profiles be publicly indexed for SEO? | SEO, privacy, user acquisition. | ASSUMPTION: Not indexed for MVP. | No |
| OD-DSN-005 | Accessibility | What WCAG level are we targeting? | Color contrast, screen reader support, keyboard navigation. | ASSUMPTION: Best effort WCAG 2.1 AA, but not formally audited for MVP. | No |
| OD-DSN-006 | Dark Mode | Should the application support dark mode? | CSS architecture, design system complexity. | ASSUMPTION: LIGHT THEME ONLY as per core rules. | No |

### 1.4 Legal/Regulatory Decisions

| ID | Category | Decision Required | Impact | Current Assumption | Blocking? |
|---|---|---|---|---|---|
| OD-LEG-001 | Privacy | What privacy policy and terms of service are needed? | Footer links, registration flow, legal liability. | ASSUMPTION: Placeholder links for MVP. | No (for MVP) |
| OD-LEG-002 | Consent | What data processing consent is required? | Registration, booking, KYC, GDPR/HIPAA compliance. | ASSUMPTION: Basic consent checkbox for MVP. | No |
| OD-LEG-003 | Data Retention | What is the data retention policy? | Account management, database size, regulatory compliance. | ASSUMPTION: Not implemented for MVP. | No |
| OD-LEG-004 | Cookie Consent | Is cookie consent banner required? | Global UI component, tracking restrictions. | ASSUMPTION: Not implemented for MVP. | No |
| OD-LEG-005 | Licensing | How are professional licenses validated? | KYC process, clinical safety. | ASSUMPTION: Manual admin review for MVP. | No |
| OD-LEG-006 | Tax | How are taxes calculated and displayed? | Pricing calculations, invoices, financial reporting. | ASSUMPTION: Flat demo tax rate for MVP. | No |
| OD-LEG-007 | HIPAA | Does the platform process PHI (Protected Health Information) requiring HIPAA compliance? | Security architecture, hosting requirements, BAAs. | ASSUMPTION: Medical details are kept abstract to minimize PHI scope for MVP demo. | No |

---

## 2. Assumptions Registry

These are assumptions made throughout the specification that need validation from respective owners.

| ID | Document Source | Assumption | Risk if Wrong | Validation Owner | Status |
|---|---|---|---|---|---|
| ASM-001 | BRD | Platform commission is 15%. | Revenue calculations and financial projections will be wrong. | Product Owner | Pending |
| ASM-002 | BRD | Professionals are independent contractors. | Significant legal liability, tax implications, and UI rework required. | Legal Team | Pending |
| ASM-003 | FRD | Job request acceptance timeout is 45 seconds. | High cancellation rates or poor professional UX if too short/long. | Product Owner | Pending |
| ASM-004 | FRD | Maximum file upload size is 10MB. | Users unable to upload high-res KYC documents, blocking onboarding. | Technical Lead | Pending |
| ASM-005 | FRD | Allowed file types: PDF, JPG, PNG. | KYC document compatibility issues for users on different devices. | Product Owner | Pending |
| ASM-006 | State Machine | GPS proximity check is used for check-in. | Visit verification reliability may suffer if GPS is inaccurate or unavailable. | Technical Lead | Pending |
| ASM-007 | State Machine | Free cancellation > 4hrs, 50% penalty < 4hrs. | Revenue loss or client dissatisfaction, professional attrition. | Product/Legal | Pending |
| ASM-008 | Security | Session timeout is 30 minutes of inactivity. | Balance between security compliance and user experience. | Security Lead | Pending |
| ASM-009 | Security | JWT-based authentication will be used. | Architecture rework if stateful sessions are required. | Technical Lead | Pending |
| ASM-010 | Data Model | Maximum 5 patients can be saved per client profile. | Unnecessary data model constraints for large families. | Product Owner | Pending |
| ASM-011 | Demo Data | Hourly rates in INR (₹). | Currency localization and formatting rework. | Product Owner | Pending |
| ASM-012 | Performance | Virtual scrolling needed for lists > 100 items. | Performance degradation on mobile devices. | Technical Lead | Pending |
| ASM-013 | SEO | CSR-only architecture for MVP (no SSR). | Poor organic search ranking for early user acquisition. | Product Owner | Pending |
| ASM-014 | Notification | WebSocket for real-time (simulated in MVP). | Delayed updates leading to missed shifts or poor UX. | Technical Lead | Pending |
| ASM-015 | KYC | Verification validity is 12 months. | Professionals may operate with expired credentials if not monitored. | Product/Legal | Pending |
| ASM-016 | Payout | Weekly batch payout processing. | Professional dissatisfaction if they expect immediate or daily payouts. | Product/Finance | Pending |
| ASM-017 | Organization | Organizations pay via monthly invoicing (not per-booking). | Finance flow mismatch, requiring new payment gateways. | Product/Finance | Pending |
| ASM-018 | RBAC | Multiple admin sub-roles (ops, kyc, finance, support). | Overly complex permission granularity for a small initial team. | Product Owner | Pending |
| ASM-019 | Media | Profile pictures are mandatory for professionals. | Drop-off in onboarding vs trust signals for clients. | Product Owner | Pending |
| ASM-020 | Reviews | Only verified clients who completed a booking can leave a review. | Fraudulent reviews if open to the public. | Product Owner | Pending |

---

## 3. Known Limitations

This section outlines known limitations of the MVP architecture and design, detailing their impact and proposed mitigation strategies.

| ID | Limitation | Impact | Mitigation | Future Phase |
|---|---|---|---|---|
| LIM-001 | No real backend database. | All data is in-memory; data is lost on page refresh. | Demo-only acceptable; backend API integration documented as future work. | Post-MVP |
| LIM-002 | No real payment gateway. | Real transactions cannot be processed; payments are simulated. | Payment flow UI is complete; gateway swap (e.g., Stripe) is modular. | Post-MVP |
| LIM-003 | No real authentication. | Users cannot securely sign up or log in; auth is simulated via context. | Auth provider (e.g., Firebase Auth) integration is modular. | Post-MVP |
| LIM-004 | No real-time WebSocket updates. | Real-time tracking relies on simulated state changes instead of server push. | WebSocket/polling architecture is documented in technical specs. | Phase 2 |
| LIM-005 | No real maps integration. | Distance and location matching are visual approximations using custom SVG. | Map provider (e.g., Google Maps) integration documented for future. | Phase 2 |
| LIM-006 | No real document storage (S3/GCS). | KYC uploads do not persist securely; uses placeholder blob images. | Secure file storage integration and pre-signed URL architecture documented. | Post-MVP |
| LIM-007 | No external email/push/SMS. | Notifications are strictly in-app via the UI notification center. | Notification payload templates defined for easy hooking into future channels. | Phase 2 |
| LIM-008 | No SSR/SEO optimization. | Public pages are CSR-only, impacting early search engine indexability. | Next.js SSR migration path is documented. | Phase 2 |
| LIM-009 | No i18n/localization. | Platform is strictly English only. | React-i18next structure can be added easily based on component design. | Phase 3 |
| LIM-010 | No offline support. | Application requires a persistent internet connection to function. | Service Worker for offline PWA capabilities is deferred. | Phase 3 |
| LIM-011 | Single Currency (INR). | Cannot process international payments or display multiple currencies. | Currency formatting utility is centralized, making future localization easier. | Phase 3 |
| LIM-012 | Simplified Chat. | Direct messaging between client and professional is simulated/basic. | SendBird or custom WebRTC chat integration deferred. | Phase 2 |

---

## 4. Conflicts Found (BRD/FRD/Plan Reconciliation)

During the specification phase, several conflicts were identified between initial requirements, product roadmaps, and technical feasibility. This section logs those conflicts and their resolutions.

| ID | Source Conflict | Description | Resolution |
|---|---|---|---|
| CNF-001 | BRD vs Tech Plan | Previous implementation plan referenced "escrow" as a confirmed feature, but no escrow licensing exists. | Reclassified as ASSUMPTION (OD-BIZ-001). UI will show price breakdown without implying funds are held in legal escrow. |
| CNF-002 | FRD vs Design | Previous plan referenced "GPS live tracking" for visit tracking, implying an Uber-like live map. | Reclassified as ASSUMPTION (ASM-006). UI shows a status timeline (On the way, Arrived) rather than live continuous map tracking to preserve battery and privacy. |
| CNF-003 | Demo Data | Previous plan referenced specific pricing (₹35-₹120 USD equivalent). | Corrected to INR-based demo data with realistic Indian healthcare pricing models to ensure consistent currency representation. |
| CNF-004 | UI Navigation | Demo Role Switcher was initially treated as a production navigation pattern. | Corrected: Role switcher is placed strictly behind a `demoMode` flag with a visible "DEMO MODE" indicator overlay. |
| CNF-005 | Vague Requirements | Previous plan had vague "build premium UI" statements lacking actionable criteria. | Replaced with specific references to the Screen Specification, Design System documents, Lucide icons, and Tailwind color scales. |
| CNF-006 | Brand Guidelines | Conflicting color palettes mentioned in disparate docs (e.g., dark mode vs light mode). | Standardized: LIGHT THEME ONLY. Brand colors enforced to Healthcare Teal #0EA5A4 and Medical Blue #2563EB. |

---

## 5. Process for Resolving Decisions & Assumptions

To move items from this registry into confirmed requirements, the following process should be observed:
1. **Review**: Product Owners and Technical Leads review the registry weekly.
2. **Assign**: Each Open Decision or Assumption is assigned to a primary owner.
3. **Research**: The owner gathers necessary data (legal consultation, user research, technical spiking).
4. **Decide**: A formal decision is recorded, and this document is updated.
5. **Propagate**: The resolution is updated in the PRD, BRD, FRD, and Architecture documents as needed.

*End of Document*
