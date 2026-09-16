# Permissions & Role-Based Access Control (RBAC) Specification

**Document Iteration:** v1.0  
**Project:** Healthcare Staffing & Home Care Platform  

This document outlines the Permissions & Role-Based Access Control (RBAC) specification for the platform.

---

## 1. Role Definitions

### 1.1 Roles
**BUSINESS RULE:** The platform enforces strict role separation across the four main user personas: Client, Professional, Organization, and internal Administration.

| Role | Code | Description | Portal Access |
|---|---|---|---|
| Client | `client` | End user booking healthcare services | Client Marketplace |
| Professional | `professional` | Healthcare worker providing services | Professional Portal |
| Operations Admin | `ops_admin` | Day-to-day operations management | Admin Portal (limited) |
| KYC Admin | `kyc_admin` | Professional verification specialist | Admin Portal (KYC module) |
| Finance Admin | `finance_admin` | Payment and payout management | Admin Portal (Finance module) |
| Support Agent | `support_agent` | Customer support representative | Admin Portal (Support module) |
| Super Admin | `super_admin` | Full platform access | Admin Portal (all) |
| Organization Manager | `org_manager` | Hospital/clinic account manager | Organization Portal |
| Organization Coordinator | `org_coordinator` | Shift and roster coordinator | Organization Portal (limited) |

**TECHNICAL RULE:** The Demo Role Switcher is NOT a real RBAC mechanism. It's a development utility behind a `demoMode` flag.
**UI RULE:** Only Light Theme is supported for all role portals. Primary text must be `#0F172A` (never pure `#000000`).

---

## 2. Permission Matrix

**SECURITY RULE:** Access is denied by default. Explicit permission must be granted in the matrix below.

### 2.1 Professional Management
| Action | Client | Professional | Ops Admin | KYC Admin | Finance Admin | Support Agent | Super Admin | Org Manager |
|---|---|---|---|---|---|---|---|---|
| View own profile | - | ✓ | - | - | - | - | - | - |
| Edit own profile | - | ✓ | - | - | - | - | - | - |
| View all professionals | - | - | ✓ | ✓ | - | ✓ | ✓ | - |
| View professional detail | ✓ (public) | - | ✓ (full) | ✓ (full) | - | ✓ (limited) | ✓ (full) | ✓ (assigned only) |
| Suspend professional | - | - | ✓ | - | - | - | ✓ | - |
| Deactivate professional | - | - | - | - | - | - | ✓ | - |
| Manage pro availability | - | ✓ | ✓ | - | - | - | ✓ | - |

### 2.2 KYC / Verification
| Action | Professional | KYC Admin | Super Admin |
|---|---|---|---|
| Submit documents | ✓ | - | - |
| View own KYC status | ✓ | - | - |
| View KYC queue | - | ✓ | ✓ |
| Approve KYC | - | ✓ | ✓ |
| Reject KYC | - | ✓ | ✓ |
| Request re-upload | - | ✓ | ✓ |

### 2.3 Booking Management
| Action | Client | Professional | Ops Admin | Finance Admin | Support Agent | Super Admin | Org Manager |
|---|---|---|---|---|---|---|---|
| Create Booking | ✓ | - | ✓ | - | - | ✓ | ✓ |
| View Own Bookings | ✓ | ✓ | - | - | - | - | ✓ |
| View All Bookings | - | - | ✓ | - | ✓ | ✓ | - |
| Update Booking | ✓ | - | ✓ | - | - | ✓ | ✓ |
| Accept Booking | - | ✓ | - | - | - | - | - |
| Reject Booking | - | ✓ | - | - | - | - | - |
| Cancel Booking | ✓ | - | ✓ | - | ✓ | ✓ | ✓ |
| Check-in/Check-out | - | ✓ | - | - | - | ✓ | - |

### 2.4 Client Management
| Action | Client | Professional | Ops Admin | Finance Admin | Support Agent | Super Admin | Org Manager |
|---|---|---|---|---|---|---|---|
| View own profile | ✓ | - | - | - | - | - | - |
| Edit own profile | ✓ | - | - | - | - | - | - |
| View all clients | - | - | ✓ | - | ✓ | ✓ | - |
| View client detail | - | ✓ (active) | ✓ (full) | - | ✓ (full) | ✓ (full) | - |
| Deactivate client | - | - | ✓ | - | - | ✓ | - |

### 2.5 Service Management
| Action | Ops Admin | Super Admin |
|---|---|---|
| View Services | ✓ | ✓ |
| Create Service | - | ✓ |
| Update Service | - | ✓ |
| Delete Service | - | ✓ |

### 2.6 Pricing Management
**ASSUMPTION:** Specific pricing mechanics and rate cards vary greatly by geography and require local validation.
| Action | Finance Admin | Super Admin |
|---|---|---|
| View Pricing | ✓ | ✓ |
| Modify Pricing | - | ✓ |
| Create Discounts | ✓ | ✓ |

### 2.7 Payment Management
| Action | Client | Finance Admin | Support Agent | Super Admin |
|---|---|---|---|---|
| View Own Payments | ✓ | - | - | - |
| View All Payments | - | ✓ | ✓ | ✓ |
| Refund Payment | - | ✓ | - | ✓ |
| Dispute Payment | ✓ | - | ✓ | ✓ |

### 2.8 Payout Management
| Action | Professional | Finance Admin | Super Admin |
|---|---|---|---|
| View Own Payouts | ✓ | - | - |
| View All Payouts | - | ✓ | ✓ |
| Process Payout | - | ✓ | ✓ |
| Hold Payout | - | ✓ | ✓ |

### 2.9 Review Management
| Action | Client | Professional | Ops Admin | Support Agent | Super Admin |
|---|---|---|---|---|---|
| Write Review | ✓ | ✓ | - | - | - |
| View Reviews | ✓ | ✓ | ✓ | ✓ | ✓ |
| Moderate Review | - | - | ✓ | - | ✓ |
| Delete Review | - | - | - | - | ✓ |

### 2.10 Support Management
| Action | Client | Professional | Support Agent | Ops Admin | Super Admin |
|---|---|---|---|---|---|
| Create Ticket | ✓ | ✓ | - | - | - |
| View Own Tickets | ✓ | ✓ | - | - | - |
| View All Tickets | - | - | ✓ | ✓ | ✓ |
| Reply Ticket | ✓ | ✓ | ✓ | ✓ | ✓ |
| Close Ticket | ✓ | ✓ | ✓ | ✓ | ✓ |

### 2.11 Organization Management
| Action | Org Manager | Org Coordinator | Ops Admin | Super Admin |
|---|---|---|---|---|
| View Org Profile | ✓ | ✓ | ✓ | ✓ |
| Edit Org Profile | ✓ | - | ✓ | ✓ |
| Manage Staffing Req | ✓ | ✓ | - | ✓ |
| Manage Roster | ✓ | ✓ | - | ✓ |
| Approve Timesheet | ✓ | ✓ | - | ✓ |
| Manage Org Users | ✓ | - | - | ✓ |

### 2.12 Notification Management
| Action | All Users | Ops Admin | Super Admin |
|---|---|---|---|
| View Own Notifs | ✓ | - | - |
| Mark as Read | ✓ | - | - |
| Send Global Notif | - | ✓ | ✓ |
| Manage Templates | - | - | ✓ |

### 2.13 Report Access
| Action | Ops Admin | Finance Admin | Super Admin | Org Manager |
|---|---|---|---|---|
| View Ops Reports | ✓ | - | ✓ | - |
| View Fin Reports | - | ✓ | ✓ | - |
| View Org Reports | - | - | ✓ | ✓ |
| Export Data | ✓ | ✓ | ✓ | ✓ (own only) |

### 2.14 Settings Management
| Action | Super Admin |
|---|---|
| View Global Settings| ✓ |
| Edit Global Settings| ✓ |

### 2.15 Audit Log Access
| Action | Super Admin |
|---|---|
| View Audit Logs | ✓ |
| Export Audit Logs | ✓ |

---

## 3. Route Guards

**SECURITY RULE:** Role checks must happen at both the UI (routing) level and API (backend middleware) level.

| Route Pattern | Allowed Roles | Redirect on Unauthorized |
|---|---|---|
| `/` | Public (all) | - |
| `/services` | Public (all) | - |
| `/search` | Public (all) | - |
| `/pro/:id` | Public (all) | - |
| `/book/*` | `client` | `/login` |
| `/my-bookings` | `client` | `/login` |
| `/booking/:id/track` | `client` | `/login` |
| `/pro/dashboard` | `professional` | `/login` |
| `/pro/jobs` | `professional` | `/login` |
| `/pro/schedule` | `professional` | `/login` |
| `/pro/visit/:id` | `professional` | `/login` |
| `/pro/earnings` | `professional` | `/login` |
| `/pro/kyc` | `professional` | `/login` |
| `/admin/*` | `ops_admin`, `kyc_admin`, `finance_admin`, `support_agent`, `super_admin` | `/login` |
| `/admin/verification` | `kyc_admin`, `super_admin` | `/admin/dashboard` |
| `/admin/payments` | `finance_admin`, `super_admin` | `/admin/dashboard` |
| `/admin/payouts` | `finance_admin`, `super_admin` | `/admin/dashboard` |
| `/admin/roles` | `super_admin` | `/admin/dashboard` |
| `/admin/settings` | `super_admin` | `/admin/dashboard` |
| `/org/*` | `org_manager`, `org_coordinator` | `/login` |

---

## 4. Data-Level Access Control

**BUSINESS RULE:** Users must only access data directly relevant to their engagement on the platform.

*   **Client:** Can view and manage their own bookings, personal profile, registered patient profiles, and view public professional profiles.
*   **Professional:** Can view and manage their own profile, KYC documentation, availability, accepted bookings/visits, earnings, and limited patient info (only provided for actively accepted bookings).
*   **Ops Admin:** Can view all bookings, all professionals, and all clients (summary level).
*   **KYC Admin:** Can view professional documents, licenses, IDs, and the KYC queue.
*   **Finance Admin:** Can view all payments, all payouts, invoices, and financial reports.
*   **Support Agent:** Can view tickets assigned to them, and related booking/client/professional info necessary for resolution.
*   **Super Admin:** Can view and manage all data in the system.
*   **Organization:** Can view their own staffing requests, assigned professionals, own roster, and own timesheets.

---

## 5. Sensitive Data Masking

**SECURITY RULE:** PII and PHI must be masked based on the current context and relationship between the user viewing the data and the subject of the data.

| Data Field | Client View | Professional View | Admin View | Public View |
|---|---|---|---|---|
| Patient phone | Own only | After acceptance | Full | Hidden |
| Patient medical notes | Own only | After check-in | Full | Hidden |
| Professional phone | Hidden | Own only | Full | Hidden |
| Professional email | Hidden | Own only | Full | Hidden |
| Payment details | Own masked | Hidden | Full | Hidden |
| Government ID | Hidden | Own only | Full | Hidden |
| Address (full) | Own only | After acceptance | Full | Hidden |
| Address (area/city) | - | Before acceptance | - | Visible |

---

## 6. Destructive Action Authorization

**BUSINESS RULE:** Highly sensitive or irreversible actions require additional confirmations and strict audit logging.

| Action | Minimum Role | Requires Confirmation | Audit Logged |
|---|---|---|---|
| Reject KYC | `kyc_admin` | Yes (reason required) | Yes |
| Suspend professional | `ops_admin` | Yes | Yes |
| Cancel booking | `client` (own) / `ops_admin` (any) | Yes | Yes |
| Process refund | `finance_admin` | Yes | Yes |
| Process payout | `finance_admin` | Yes (batch) | Yes |
| Delete service | `super_admin` | Yes | Yes |
| Modify pricing | `super_admin` | Yes | Yes |
| Deactivate account | `super_admin` | Yes | Yes |
| Change role | `super_admin` | Yes | Yes |

---

## 7. Session Management

*   **Session timeout:** **ASSUMPTION:** Set to 30 minutes of idle time for all roles.
*   **Session expiry:** **UI RULE:** Show a modal with a 60-second countdown and an option to "Extend Session" using brand color `#0EA5A4` for the primary button.
*   **Concurrent sessions:** **OPEN DECISION:** Should we allow a single user account to be logged in from multiple devices simultaneously? (Recommendation: Limit to 1 active session for admins/professionals, allow up to 3 for clients).
*   **Force logout:** Admin can force-logout any user from the Admin Portal.
*   **Session Token Storage:** Use HTTP-only, secure cookies. No sensitive token data in local storage.

---

## 8. Demo Mode vs Production

**TECHNICAL RULE:** The platform architecture must support a strict environment split regarding authentication mechanics.

*   **Demo mode:** 
    *   Role switcher is visible in the UI header.
    *   All portals accessible without real authentication (bypassed).
    *   Demo data is loaded and sandboxed.
    *   Triggered by `NEXT_PUBLIC_DEMO_MODE=true`.
*   **Production:** 
    *   Standard authentication (e.g., JWT / OAuth).
    *   RBAC enforced stringently.
    *   No role switcher present in the UI.

---

## 9. Regulatory & Compliance Assumptions

**ASSUMPTION:** Production healthcare licensing, scope of practice, patient privacy (HIPAA/GDPR equivalents), consent, payments/tax, employment classification, and local regulatory requirements require separate validation and are NOT fully modeled in this baseline RBAC.

**SECURITY RULE:** Any future additions to handle explicit Medical Records (EHR) must introduce a specific 'Medical Reviewer' role with dedicated audit logging per view.

---

## 10. Audit Logging Specification

All destructive actions and PHI access must be logged.
*   **Event:** Action taken (e.g., `KYC_REJECTED`, `BOOKING_CANCELLED`)
*   **Actor:** User ID and Role performing the action
*   **Target:** ID of the affected resource (User ID, Booking ID)
*   **Timestamp:** UTC Timestamp
*   **IP Address:** Masked or fully logged based on privacy policy (**OPEN DECISION**)

---
*End of Document*
