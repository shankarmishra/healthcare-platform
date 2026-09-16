# Actual Route Inventory & IA Parity Report

**Project:** Healthcare Staffing & Home Care Platform (`C:\Users\xshan\Desktop\healthcare-platform`)  
**Audit Date:** September 16, 2026  
**Source Code Source of Truth:** `src/App.tsx`  
**IA Specification Source:** `docs/03-Information-Architecture.md`

---

## 1. Route Discovery Summary

- **Total Defined Routes in App.tsx:** 47
- **Unique Standalone Pages:** 26
- **Duplicate Route Aliases:** 4
- **Redirect Routes:** 3
- **Protected Routes (Context-Aware Role Shells):** 28
- **Public Routes:** 5

---

## 2. Actual Route Inventory Table

| Route | Component | Portal | Protected? | Role | Actually Reachable? | Notes |
|---|---|---|---|---|---|---|
| `/` | `HomePage` | Public | No | Public | Yes | Main landing page with 14 sections |
| `/services` | `ServicesPage` | Public | No | Public | Yes | Services catalog grid |
| `/search` | `SearchPage` | Public/Client | No | Client | Yes | Map split-view search |
| `/pros/:id` | `ProProfileViewPage` | Public/Client | No | Client | Yes | Pro profile & review view |
| `/book` | `BookingWizardPage` | Client | No (Demo) | Client | Yes | 10-step client booking wizard |
| `/client/search` | `SearchPage` | Client | No (Demo) | Client | Yes | **Duplicate alias** of `/search` |
| `/client/booking/wizard` | `BookingWizardPage` | Client | No (Demo) | Client | Yes | **Duplicate alias** of `/book` |
| `/client/bookings` | `MyBookingsPage` | Client | No (Demo) | Client | Yes | Tabbed client booking list |
| `/client/bookings/:id` | `BookingDetailPage` | Client | No (Demo) | Client | Yes | Live tracking & visit status |
| `/client/support` | `ClientSupportPage` | Client | No (Demo) | Client | Yes | Client tickets & FAQ |
| `/client/profile` | `ClientProfilePage` | Client | No (Demo) | Client | Yes | Saved family patients & addresses |
| `/client/notifications` | `ClientNotificationsPage` | Client | No (Demo) | Client | Yes | Client notification center |
| `/pro` | `Navigate` | Professional | No (Demo) | Professional | Yes (Redirect) | Redirects to `/pro/dashboard` |
| `/pro/dashboard` | `ProDashboardPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Operational dashboard & active visit |
| `/pro/jobs` | `ProJobsPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Broadcast job request queue |
| `/pro/schedule` | `ProSchedulePage` | Professional | Yes (`ProLayout`) | Professional | Yes | Availability & shift calendar |
| `/pro/earnings` | `ProEarningsPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Weekly earnings chart & payout log |
| `/pro/kyc` | `ProKYCPage` | Professional | Yes (`ProLayout`) | Professional | Yes | KYC status & document uploader |
| `/pro/profile` | `ProProfileEditPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Pro profile & hourly rate setup |
| `/pro/reviews` | `ProReviewsPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Reviews received from patients |
| `/pro/notifications` | `ProNotificationsPage` | Professional | Yes (`ProLayout`) | Professional | Yes | Job dispatch alerts |
| `/pro/support` | `ProSupportPage` | Professional | Yes (`ProLayout`) | Professional | Yes | SOS helpline & field tickets |
| `/admin` | `Navigate` | Admin | No (Demo) | Admin | Yes (Redirect) | Redirects to `/admin/dashboard` |
| `/admin/dashboard` | `AdminDashboardPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Ops Command Center KPIs |
| `/admin/professionals` | `AdminProfessionalsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Pro list & pro detail drawer |
| `/admin/kyc` | `AdminKYCQueuePage` | Admin | Yes (`AdminLayout`) | Admin | Yes | KYC queue & document inspector |
| `/admin/clients` | `AdminClientsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Client directory & spend stats |
| `/admin/organizations` | `AdminOrganizationsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | B2B Hospital contract directory |
| `/admin/services` | `AdminServicesPricingPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Services catalog & rate editor |
| `/admin/pricing` | `AdminServicesPricingPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | **Duplicate view mapping** |
| `/admin/bookings` | `AdminBookingsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Booking list & inspector drawer |
| `/admin/matching` | `AdminMatchingPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Dispatch & match score console |
| `/admin/payments` | `AdminPaymentsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Financial payment transaction ledger |
| `/admin/payouts` | `AdminPayoutsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Batch payout disbursement log |
| `/admin/reviews` | `AdminReviewsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Review moderation queue |
| `/admin/support` | `AdminSupportDeskPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Multi-ticket operations support desk |
| `/admin/notifications` | `AdminNotificationsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | Platform broadcast notification launcher |
| `/admin/reports` | `AdminReportsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | GMV & net revenue analytics |
| `/admin/roles` | `AdminRolesPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | RBAC access permission matrix |
| `/admin/settings` | `AdminSettingsPage` | Admin | Yes (`AdminLayout`) | Admin | Yes | System timeouts & GSTIN settings |
| `/organization` | `Navigate` | Organization | No (Demo) | Organization | Yes (Redirect) | Redirects to `/organization/dashboard` |
| `/organization/dashboard` | `OrgDashboardPage` | Organization | Yes (`OrgLayout`) | Organization | Yes | B2B Hospital staffing metrics |
| `/organization/requests` | `OrgRosterPage` | Organization | Yes (`OrgLayout`) | Organization | Yes | **Duplicate alias** of `/organization/roster` |
| `/organization/roster` | `OrgRosterPage` | Organization | Yes (`OrgLayout`) | Organization | Yes | Ward roster schedule & shift grid |
| `/organization/timesheets` | `OrgTimesheetsPage` | Organization | Yes (`OrgLayout`) | Organization | Yes | Digitized timesheet approval queue |
| `/unauthorized` | `UnauthorizedPage` | Utility | No | Public | Yes | Role restriction guidance page |
| `*` | `NotFoundPage` | Utility | No | Public | Yes | 404 page |

---

## 3. Route Discrepancy & Drift Report

- **Duplicate Route Aliases (4):**
  - `/client/search` maps to the same component as `/search`.
  - `/client/booking/wizard` maps to the same component as `/book`.
  - `/admin/pricing` maps to the same component as `/admin/services`.
  - `/organization/requests` maps to the same component as `/organization/roster`.
- **Missing Direct Routes (Modals/Drawers as Sub-components):**
  - `SCR-UTL-001` (Login) & `SCR-UTL-002` (Register) exist as `AuthModal.tsx` triggerable across pages, rather than standalone routes.
  - `SCR-CLT-016` (Submit Review) exists as `ClientReviewModal.tsx`.
  - `SCR-ORG-002` (Staffing Request) exists as `OrgStaffingRequestModal.tsx`.
  - `SCR-ADM-003`, `SCR-ADM-005`, `SCR-ADM-011` exist as slide-over drawers inside parent admin routes.
