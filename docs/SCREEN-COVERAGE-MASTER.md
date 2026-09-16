# Master Screen Coverage Audit & Parity Matrix

**Project:** Healthcare Staffing & Home Care Platform (`C:\Users\xshan\Desktop\healthcare-platform`)  
**Audit Date:** September 16, 2026  
**Source Spec:** `docs/06-Screen-Specification.md` (62 Total Screens)  
**Target Coverage:** 100% (62 / 62 Screens Implemented or Covered with Complete UI Parity)

---

## 1. Executive Summary

This document tracks all 62 screens specified in `docs/06-Screen-Specification.md` across 4 core portals (Public & Client, Healthcare Professional, Admin Operations Command Center, Organization & Hospital) plus Utility pages. 

Status Legend:
- `[COMPLETE]` Fully implemented screen with route, layout shell, interactive components, and mock data binding.
- `[IMPLEMENTING]` Currently being added in this coverage pass to achieve 100% parity.

---

## 2. Public & Client Portal Screens (21 Screens)

| Screen ID | Screen Name | Route | Status | Target Implementation File | Notes / Features |
|---|---|---|---|---|---|
| `SCR-PUB-001` | Homepage | `/` | `[COMPLETE]` | `src/pages/public/HomePage.tsx` | 14 section editorial layout, quick care finder, SVG map visual |
| `SCR-PUB-002` | Services Catalog | `/services` | `[COMPLETE]` | `src/pages/public/ServicesPage.tsx` | Category filters, service cards, hourly rates, booking triggers |
| `SCR-CLT-001` | Search & Map | `/search` | `[COMPLETE]` | `src/pages/client/SearchPage.tsx` | Interactive split view, geographical pro markers, filter bar |
| `SCR-CLT-002` | Professional Listing | `/search/results` | `[COMPLETE]` | `src/pages/client/SearchPage.tsx` | Integrated grid view mode with filtering & sorters |
| `SCR-CLT-003` | Professional Profile View | `/pros/:id` | `[IMPLEMENTING]` | `src/pages/client/ProProfileViewPage.tsx` | Bio, verified credentials, rating, service list, calendar availability |
| `SCR-CLT-004` | Booking Wizard (Step 1: Service) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 1 category & service picker |
| `SCR-CLT-005` | Booking Wizard (Step 2: Patient) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 2 patient selector & clinical needs |
| `SCR-CLT-006` | Booking Wizard (Step 3: Location) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 3 address picker & GPS map pin |
| `SCR-CLT-007` | Booking Wizard (Step 4: Duration) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 4 shift duration & visit type |
| `SCR-CLT-008` | Booking Wizard (Step 5: Schedule) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 5 date & slot timing selector |
| `SCR-CLT-009` | Booking Wizard (Step 6: Matching) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 6 preferred vs automated matching |
| `SCR-CLT-010` | Booking Wizard (Step 7: Pro Select) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 7 top matched professional cards |
| `SCR-CLT-011` | Booking Wizard (Step 8: Pricing) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 8 cost breakdown itemization |
| `SCR-CLT-012` | Booking Wizard (Step 9: Payment) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 9 payment method selector (UPI/Card) |
| `SCR-CLT-013` | Booking Wizard (Step 10: Confirm) | `/book` | `[COMPLETE]` | `src/pages/client/BookingWizardPage.tsx` | Step 10 booking reference & tracking CTA |
| `SCR-CLT-014` | My Bookings | `/client/bookings` | `[COMPLETE]` | `src/pages/client/MyBookingsPage.tsx` | Tabbed status filters, booking cards, review triggers |
| `SCR-CLT-015` | Booking Detail & Tracking | `/client/bookings/:id` | `[COMPLETE]` | `src/pages/client/BookingDetailPage.tsx` | 14-state timeline, live GPS pin, professional profile widget |
| `SCR-CLT-016` | Submit Review | `/client/bookings/:id/review` | `[IMPLEMENTING]` | `src/pages/client/ClientReviewModal.tsx` | Rating stars, clinical care feedback, tags |
| `SCR-CLT-017` | Client Support | `/client/support` | `[IMPLEMENTING]` | `src/pages/client/ClientSupportPage.tsx` | Help center, ticket creation, ticket thread chat |
| `SCR-CLT-018` | Client Profile & Settings | `/client/profile` | `[IMPLEMENTING]` | `src/pages/client/ClientProfilePage.tsx` | Saved patients, saved addresses, emergency contacts, profile edit |
| `SCR-CLT-019` | Client Notifications | `/client/notifications` | `[IMPLEMENTING]` | `src/pages/client/ClientNotificationsPage.tsx` | Real-time care updates, shift reminders, system alerts |

---

## 3. Professional Portal Screens (13 Screens)

| Screen ID | Screen Name | Route | Status | Target Implementation File | Notes / Features |
|---|---|---|---|---|---|
| `SCR-PRO-001` | Professional Dashboard | `/pro/dashboard` | `[COMPLETE]` | `src/pages/pro/ProDashboardPage.tsx` | Operational status toggle, stats, job requests, quick actions |
| `SCR-PRO-002` | Job Requests | `/pro/jobs` | `[COMPLETE]` | `src/pages/pro/ProJobsPage.tsx` | Broadcast request queue, accept/decline modal, 45s timer |
| `SCR-PRO-003` | Job Detail | `/pro/jobs/:id` | `[COMPLETE]` | `src/pages/pro/ProJobsPage.tsx` | Clinical requirements, patient details, navigation map pin |
| `SCR-PRO-004` | Schedule / Calendar | `/pro/schedule` | `[IMPLEMENTING]` | `src/pages/pro/ProSchedulePage.tsx` | Weekly/Monthly availability grid, block unavailable dates |
| `SCR-PRO-005` | Active Visit | `/pro/visit/:id` | `[COMPLETE]` | `src/pages/pro/ProDashboardPage.tsx` | Check-in button, clinical notes recorder, vitals checklist |
| `SCR-PRO-006` | Visit Completion | `/pro/visit/:id/complete` | `[COMPLETE]` | `src/pages/pro/ProDashboardPage.tsx` | Check-out OTP verification, family sign-off, visit summary |
| `SCR-PRO-007` | Earnings Dashboard | `/pro/earnings` | `[COMPLETE]` | `src/pages/pro/ProEarningsPage.tsx` | Weekly earnings chart, payout status, downloadable statements |
| `SCR-PRO-008` | KYC Document Submission | `/pro/kyc/upload` | `[COMPLETE]` | `src/pages/pro/ProKYCPage.tsx` | Council license, identity proof, background check docs |
| `SCR-PRO-009` | KYC Status | `/pro/kyc` | `[COMPLETE]` | `src/pages/pro/ProKYCPage.tsx` | 8-state KYC step tracker, rejection reasons, resubmission |
| `SCR-PRO-010` | Professional Profile (Own) | `/pro/profile` | `[IMPLEMENTING]` | `src/pages/pro/ProProfileEditPage.tsx` | Bio, qualifications, working radius, hourly rate setup |
| `SCR-PRO-011` | Reviews Received | `/pro/reviews` | `[IMPLEMENTING]` | `src/pages/pro/ProReviewsPage.tsx` | Patient reviews, star ratings, clinical feedback scores |
| `SCR-PRO-012` | Notifications | `/pro/notifications` | `[IMPLEMENTING]` | `src/pages/pro/ProNotificationsPage.tsx` | Broadcast dispatch alerts, payout notifications, schedule changes |
| `SCR-PRO-013` | Support | `/pro/support` | `[IMPLEMENTING]` | `src/pages/pro/ProSupportPage.tsx` | Help center, priority field support tickets |

---

## 4. Admin Operations Command Center Screens (20 Screens)

| Screen ID | Screen Name | Route | Status | Target Implementation File | Notes / Features |
|---|---|---|---|---|---|
| `SCR-ADM-001` | Admin Dashboard | `/admin/dashboard` | `[COMPLETE]` | `src/pages/admin/AdminDashboardPage.tsx` | Operational KPIs, attention-required queue, live map status |
| `SCR-ADM-002` | Professional Directory | `/admin/pros` | `[IMPLEMENTING]` | `src/pages/admin/AdminProfessionalsPage.tsx` | Pro list, KYC status filter, approval/suspension actions |
| `SCR-ADM-003` | Professional Detail (Drawer) | `/admin/pros/:id` | `[IMPLEMENTING]` | `src/pages/admin/AdminProfessionalsPage.tsx` | Full pro drawer with credentials, bookings history, status controls |
| `SCR-ADM-004` | KYC Verification Queue | `/admin/kyc` | `[COMPLETE]` | `src/pages/admin/AdminKYCQueuePage.tsx` | Unverified submissions queue, urgency ordering, filter bar |
| `SCR-ADM-005` | KYC Inspector (Drawer) | `/admin/kyc/:id` | `[COMPLETE]` | `src/components/domain/KYCDocumentInspector.tsx` | Side-by-side doc viewer, verification checkboxes, approve/reject |
| `SCR-ADM-006` | Client Directory | `/admin/clients` | `[IMPLEMENTING]` | `src/pages/admin/AdminClientsPage.tsx` | Client accounts, spending stats, active bookings, status toggle |
| `SCR-ADM-007` | Organization Directory | `/admin/orgs` | `[IMPLEMENTING]` | `src/pages/admin/AdminOrganizationsPage.tsx` | Partner hospitals, facility details, contract status, active requests |
| `SCR-ADM-008` | Service Management | `/admin/services` | `[IMPLEMENTING]` | `src/pages/admin/AdminServicesPricingPage.tsx` | Services catalog editor, category structure, requirements setup |
| `SCR-ADM-009` | Pricing Management | `/admin/pricing` | `[IMPLEMENTING]` | `src/pages/admin/AdminServicesPricingPage.tsx` | Base hourly rates, tier multipliers, commission % & GST rules |
| `SCR-ADM-010` | Booking List | `/admin/bookings` | `[COMPLETE]` | `src/pages/admin/AdminBookingsPage.tsx` | 14-state filter, search, manual pro assignment, override actions |
| `SCR-ADM-011` | Booking Detail (Drawer) | `/admin/bookings/:id` | `[COMPLETE]` | `src/pages/admin/AdminBookingsPage.tsx` | Full booking inspector drawer with audit log & action buttons |
| `SCR-ADM-012` | Matching & Assignment | `/admin/matching` | `[IMPLEMENTING]` | `src/pages/admin/AdminMatchingPage.tsx` | Unassigned booking queue, pro score calculator, manual match |
| `SCR-ADM-013` | Payment Transactions | `/admin/payments` | `[IMPLEMENTING]` | `src/pages/admin/AdminPaymentsPage.tsx` | Transaction ledger, payment status, Razorpay ref, refund processor |
| `SCR-ADM-014` | Payout Management | `/admin/payouts` | `[IMPLEMENTING]` | `src/pages/admin/AdminPayoutsPage.tsx` | Professional payout batches, bank account info, payout status |
| `SCR-ADM-015` | Reviews Moderation | `/admin/reviews` | `[IMPLEMENTING]` | `src/pages/admin/AdminReviewsPage.tsx` | Review approval queue, report flags, hide/feature actions |
| `SCR-ADM-016` | Support Desk | `/admin/support` | `[IMPLEMENTING]` | `src/pages/admin/AdminSupportDeskPage.tsx` | Multi-ticket queue, ticket assignment, message composer |
| `SCR-ADM-017` | Notifications Manager | `/admin/notifications` | `[IMPLEMENTING]` | `src/pages/admin/AdminNotificationsPage.tsx` | Broadcast announcement launcher, notification template editor |
| `SCR-ADM-018` | Reports & Analytics | `/admin/reports` | `[IMPLEMENTING]` | `src/pages/admin/AdminReportsPage.tsx` | Revenue trends, booking conversion, cancellation rate, CSV export |
| `SCR-ADM-019` | Roles & Permissions | `/admin/roles` | `[IMPLEMENTING]` | `src/pages/admin/AdminRolesPage.tsx` | RBAC matrix editor, admin staff accounts, permission toggles |
| `SCR-ADM-020` | Platform Settings | `/admin/settings` | `[IMPLEMENTING]` | `src/pages/admin/AdminSettingsPage.tsx` | System timeouts, GSTIN config, demo mode toggles, backup |

---

## 5. Organization & Hospital Portal Screens (4 Screens)

| Screen ID | Screen Name | Route | Status | Target Implementation File | Notes / Features |
|---|---|---|---|---|---|
| `SCR-ORG-001` | Organization Dashboard | `/org/dashboard` | `[COMPLETE]` | `src/pages/organization/OrgDashboardPage.tsx` | Hospital unit metrics, active shifts, candidate matches, spend |
| `SCR-ORG-002` | Staffing Request Form | `/org/requests/new` | `[IMPLEMENTING]` | `src/pages/organization/OrgStaffingRequestModal.tsx` | Bulk nurse/ICU staffing requisition form & shift timing |
| `SCR-ORG-003` | Roster Management | `/org/roster` | `[IMPLEMENTING]` | `src/pages/organization/OrgRosterPage.tsx` | Weekly shift calendar grid, assigned pros, shift status |
| `SCR-ORG-004` | Timesheet Approval | `/org/timesheets` | `[IMPLEMENTING]` | `src/pages/organization/OrgTimesheetsPage.tsx` | Shift hour log verification, approval drawer, billing summary |

---

## 6. Utility & Auth Screens (4 Screens)

| Screen ID | Screen Name | Route | Status | Target Implementation File | Notes / Features |
|---|---|---|---|---|---|
| `SCR-UTL-001` | Login Modal / Page | `/login` | `[IMPLEMENTING]` | `src/pages/utility/AuthModal.tsx` | Phone / Email login, OTP 6-digit input, role selection |
| `SCR-UTL-002` | Register Modal / Page | `/register` | `[IMPLEMENTING]` | `src/pages/utility/AuthModal.tsx` | Multi-role registration form (Client / Pro / Org) |
| `SCR-UTL-003` | 404 Not Found | `*` | `[COMPLETE]` | `src/pages/utility/NotFoundPage.tsx` | Clean empty state, return home CTA |
| `SCR-UTL-004` | Unauthorized Access | `/unauthorized` | `[IMPLEMENTING]` | `src/pages/utility/UnauthorizedPage.tsx` | Role access violation state with switcher guidance |

---

## 7. Action Plan for 100% Coverage

We will implement the required pages organized cleanly under `src/pages/`:
1. **Client Portal:**
   - `src/pages/client/ProProfileViewPage.tsx` (`SCR-CLT-003`)
   - `src/pages/client/ClientReviewModal.tsx` (`SCR-CLT-016`)
   - `src/pages/client/ClientSupportPage.tsx` (`SCR-CLT-017`)
   - `src/pages/client/ClientProfilePage.tsx` (`SCR-CLT-018`)
   - `src/pages/client/ClientNotificationsPage.tsx` (`SCR-CLT-019`)

2. **Professional Portal:**
   - `src/pages/pro/ProSchedulePage.tsx` (`SCR-PRO-004`)
   - `src/pages/pro/ProProfileEditPage.tsx` (`SCR-PRO-010`)
   - `src/pages/pro/ProReviewsPage.tsx` (`SCR-PRO-011`)
   - `src/pages/pro/ProNotificationsPage.tsx` (`SCR-PRO-012`)
   - `src/pages/pro/ProSupportPage.tsx` (`SCR-PRO-013`)

3. **Admin Operations Command Center:**
   - `src/pages/admin/AdminProfessionalsPage.tsx` (`SCR-ADM-002`, `SCR-ADM-003`)
   - `src/pages/admin/AdminClientsPage.tsx` (`SCR-ADM-006`)
   - `src/pages/admin/AdminOrganizationsPage.tsx` (`SCR-ADM-007`)
   - `src/pages/admin/AdminServicesPricingPage.tsx` (`SCR-ADM-008`, `SCR-ADM-009`)
   - `src/pages/admin/AdminMatchingPage.tsx` (`SCR-ADM-012`)
   - `src/pages/admin/AdminPaymentsPage.tsx` (`SCR-ADM-013`)
   - `src/pages/admin/AdminPayoutsPage.tsx` (`SCR-ADM-014`)
   - `src/pages/admin/AdminReviewsPage.tsx` (`SCR-ADM-015`)
   - `src/pages/admin/AdminSupportDeskPage.tsx` (`SCR-ADM-016`)
   - `src/pages/admin/AdminNotificationsPage.tsx` (`SCR-ADM-017`)
   - `src/pages/admin/AdminReportsPage.tsx` (`SCR-ADM-018`)
   - `src/pages/admin/AdminRolesPage.tsx` (`SCR-ADM-019`)
   - `src/pages/admin/AdminSettingsPage.tsx` (`SCR-ADM-020`)

4. **Organization Portal:**
   - `src/pages/organization/OrgStaffingRequestModal.tsx` (`SCR-ORG-002`)
   - `src/pages/organization/OrgRosterPage.tsx` (`SCR-ORG-003`)
   - `src/pages/organization/OrgTimesheetsPage.tsx` (`SCR-ORG-004`)

5. **Utility / Auth:**
   - `src/pages/utility/AuthModal.tsx` (`SCR-UTL-001`, `SCR-UTL-002`)
   - `src/pages/utility/UnauthorizedPage.tsx` (`SCR-UTL-004`)

6. **Router Integration:**
   - Map all routes in `src/App.tsx` and wire up layout navigation links.
