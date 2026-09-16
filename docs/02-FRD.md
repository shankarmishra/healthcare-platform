# Functional Requirements Document (FRD)

## Healthcare Staffing & Home Care Platform

This document outlines the exhaustive functional requirements for the multi-sided healthcare marketplace platform.

### General Platform Rules
- **Theme:** Light theme ONLY.
- **Brand Colors:** Healthcare Teal #0EA5A4, Medical Blue #2563EB. Primary text #0F172A.
- **Typography:** Manrope (Inter fallback). Icons: Lucide React only.
- **Compliance:** Production healthcare licensing, patient privacy, and compliance require separate validation (ASSUMPTION).

---

## AUTH MODULE

### AUT-001: Registration - Client

| Field | Value |
|---|---|
| REQ-ID | AUT-001 |
| Requirement | Users can register as a Client on the platform. |
| Actor | Guest |
| Precondition | No active session |
| Action | Submits registration form with details |
| System Behavior | Creates Client user account, sends verification email |
| Success State | Account created (unverified) |
| Failure State | Shows validation error |
| Permissions | Guest |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN user on registration WHEN valid details submitted THEN account created |

### AUT-002: Registration - Professional

| Field | Value |
|---|---|
| REQ-ID | AUT-002 |
| Requirement | Users can register as a Professional. |
| Actor | Guest |
| Precondition | No active session |
| Action | Submits professional registration form |
| System Behavior | Creates Professional user account, sends verification |
| Success State | Account created |
| Failure State | Shows error |
| Permissions | Guest |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro on registration WHEN valid details submitted THEN pro account created |

### AUT-003: Login Authentication

| Field | Value |
|---|---|
| REQ-ID | AUT-003 |
| Requirement | Users can authenticate into the platform. |
| Actor | User |
| Precondition | Registered account |
| Action | Enters credentials |
| System Behavior | Validates credentials, issues JWT |
| Success State | Logged in |
| Failure State | Invalid credentials error |
| Permissions | Guest |
| Dependencies | AUTH-001 |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN user has account WHEN enters valid credentials THEN logged in |

### AUT-004: Role-Based Redirect

| Field | Value |
|---|---|
| REQ-ID | AUT-004 |
| Requirement | System redirects user to correct dashboard. |
| Actor | User |
| Precondition | Logged in |
| Action | Visits base URL |
| System Behavior | Checks role and routes to specific dashboard |
| Success State | Correct dashboard shown |
| Failure State | 403 Forbidden |
| Permissions | User |
| Dependencies | AUTH-003 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN logged in user WHEN visiting home THEN routed to role dashboard |

### AUT-005: Password Reset

| Field | Value |
|---|---|
| REQ-ID | AUT-005 |
| Requirement | User can reset their password. |
| Actor | User |
| Precondition | Forgot password |
| Action | Submits email |
| System Behavior | Sends reset link to email |
| Success State | Email sent |
| Failure State | Error shown |
| Permissions | Guest |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN user forgot password WHEN email submitted THEN link sent |

## CLIENT MODULE

### CLI-001: Profile Management

| Field | Value |
|---|---|
| REQ-ID | CLI-001 |
| Requirement | Client can manage their personal details. |
| Actor | Client |
| Precondition | Logged in |
| Action | Updates profile form |
| System Behavior | Saves profile data |
| Success State | Profile updated |
| Failure State | Validation error |
| Permissions | Client |
| Dependencies | AUTH-003 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client logged in WHEN saving profile THEN details updated |

### CLI-002: Address Book

| Field | Value |
|---|---|
| REQ-ID | CLI-002 |
| Requirement | Client can manage multiple addresses. |
| Actor | Client |
| Precondition | Logged in |
| Action | Adds/edits address |
| System Behavior | Geocodes and saves address |
| Success State | Address saved |
| Failure State | Invalid address error |
| Permissions | Client |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN client adds address WHEN valid THEN address saved |

### CLI-003: Patient Profiles

| Field | Value |
|---|---|
| REQ-ID | CLI-003 |
| Requirement | Client can manage care recipients. |
| Actor | Client |
| Precondition | Logged in |
| Action | Adds patient details |
| System Behavior | Saves medical/demographic info |
| Success State | Patient saved |
| Failure State | Validation error |
| Permissions | Client |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN client adds patient WHEN valid THEN patient profile created |

### CLI-004: Saved Preferences

| Field | Value |
|---|---|
| REQ-ID | CLI-004 |
| Requirement | Client can favorite professionals. |
| Actor | Client |
| Precondition | Logged in |
| Action | Clicks favorite on Pro |
| System Behavior | Links Pro to Client |
| Success State | Pro favorited |
| Failure State | Error saving |
| Permissions | Client |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client views pro WHEN favorited THEN saved in preferences |

## PROFESSIONAL MODULE

### PRO-001: Profile Creation

| Field | Value |
|---|---|
| REQ-ID | PRO-001 |
| Requirement | Pro completes detailed profile. |
| Actor | Professional |
| Precondition | Logged in |
| Action | Fills out qualifications and bio |
| System Behavior | Saves to DB |
| Success State | Profile updated |
| Failure State | Validation error |
| Permissions | Professional |
| Dependencies | AUTH-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro logs in WHEN completing profile THEN data saved |

### PRO-002: Availability Toggle

| Field | Value |
|---|---|
| REQ-ID | PRO-002 |
| Requirement | Pro can toggle online status. |
| Actor | Professional |
| Precondition | Approved KYC |
| Action | Toggles online/offline |
| System Behavior | Updates real-time status |
| Success State | Status updated |
| Failure State | Error updating |
| Permissions | Professional |
| Dependencies | KYC-003 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro is approved WHEN toggling status THEN availability updated |

### PRO-003: Service Radius

| Field | Value |
|---|---|
| REQ-ID | PRO-003 |
| Requirement | Pro sets maximum travel distance. |
| Actor | Professional |
| Precondition | Logged in |
| Action | Sets miles/km |
| System Behavior | Saves radius constraint |
| Success State | Radius saved |
| Failure State | Validation error |
| Permissions | Professional |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro sets radius WHEN saved THEN constraint updated |

### PRO-004: Documents Upload

| Field | Value |
|---|---|
| REQ-ID | PRO-004 |
| Requirement | Pro uploads credentials/licenses. |
| Actor | Professional |
| Precondition | Logged in |
| Action | Uploads PDF/Image |
| System Behavior | Saves to secure storage |
| Success State | File uploaded |
| Failure State | Invalid format error |
| Permissions | Professional |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN pro uploads document WHEN format valid THEN stored securely |

### PRO-005: Earnings Dashboard

| Field | Value |
|---|---|
| REQ-ID | PRO-005 |
| Requirement | Pro views past earnings. |
| Actor | Professional |
| Precondition | Logged in |
| Action | Navigates to Earnings |
| System Behavior | Fetches payout history |
| Success State | Earnings displayed |
| Failure State | Fetch error |
| Permissions | Professional |
| Dependencies | PYT-004 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN pro views earnings WHEN loaded THEN history displayed |

## KYC MODULE

### KYC-001: Document Submission

| Field | Value |
|---|---|
| REQ-ID | KYC-001 |
| Requirement | Pro submits required verification docs. |
| Actor | Professional |
| Precondition | Profile drafted |
| Action | Submits required docs |
| System Behavior | Updates KYC status to Submitted |
| Success State | Status: Submitted |
| Failure State | Upload failed |
| Permissions | Professional |
| Dependencies | PRO-004 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro submits docs WHEN complete THEN status is Submitted |

### KYC-002: Review Queue

| Field | Value |
|---|---|
| REQ-ID | KYC-002 |
| Requirement | Admin views pending KYC applications. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Views KYC queue |
| System Behavior | Lists submitted profiles |
| Success State | List displayed |
| Failure State | Fetch error |
| Permissions | Admin |
| Dependencies | KYC-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin views KYC WHEN pending exist THEN list is shown |

### KYC-003: Approval Process

| Field | Value |
|---|---|
| REQ-ID | KYC-003 |
| Requirement | Admin approves a KYC application. |
| Actor | Admin |
| Precondition | Viewing application |
| Action | Clicks Approve |
| System Behavior | Updates status to Approved, notifies Pro |
| Success State | Status: Approved |
| Failure State | State error |
| Permissions | Admin |
| Dependencies | KYC-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin reviews WHEN approved THEN status is Approved |

### KYC-004: Rejection Process

| Field | Value |
|---|---|
| REQ-ID | KYC-004 |
| Requirement | Admin rejects application with reason. |
| Actor | Admin |
| Precondition | Viewing application |
| Action | Clicks Reject, types reason |
| System Behavior | Updates status to Rejected, notifies Pro |
| Success State | Status: Rejected |
| Failure State | State error |
| Permissions | Admin |
| Dependencies | KYC-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin reviews WHEN rejected THEN status is Rejected |

### KYC-005: Expiry Tracking

| Field | Value |
|---|---|
| REQ-ID | KYC-005 |
| Requirement | System tracks document expiry. |
| Actor | System |
| Precondition | Document approved |
| Action | Daily cron checks expiry |
| System Behavior | Marks Expired, notifies Pro |
| Success State | Status: Expired |
| Failure State | Job fail |
| Permissions | System |
| Dependencies | KYC-003 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN document expires WHEN cron runs THEN status is Expired |

## SERVICE MODULE

### SER-001: Service Catalog

| Field | Value |
|---|---|
| REQ-ID | SER-001 |
| Requirement | System displays available services. |
| Actor | Client |
| Precondition | Logged in |
| Action | Navigates to services |
| System Behavior | Fetches active services |
| Success State | Services shown |
| Failure State | Fetch error |
| Permissions | Client |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client views services WHEN loaded THEN catalog shown |

### SER-002: Service Details

| Field | Value |
|---|---|
| REQ-ID | SER-002 |
| Requirement | View specific service details. |
| Actor | Client |
| Precondition | Viewing catalog |
| Action | Clicks service |
| System Behavior | Loads description and constraints |
| Success State | Details shown |
| Failure State | Fetch error |
| Permissions | Client |
| Dependencies | SVC-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client clicks service WHEN loaded THEN details shown |

### SER-003: Eligibility Rules

| Field | Value |
|---|---|
| REQ-ID | SER-003 |
| Requirement | Check if client is eligible for service. |
| Actor | System |
| Precondition | Service selected |
| Action | Validates client info |
| System Behavior | Returns eligibility boolean |
| Success State | Eligible |
| Failure State | Not Eligible |
| Permissions | System |
| Dependencies | SVC-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN service selected WHEN validated THEN eligibility returned |

### SER-004: Pricing Basis

| Field | Value |
|---|---|
| REQ-ID | SER-004 |
| Requirement | Service indicates hourly or fixed pricing. |
| Actor | System |
| Precondition | Service selected |
| Action | Fetches pricing model |
| System Behavior | Displays pricing structure |
| Success State | Pricing shown |
| Failure State | Data missing |
| Permissions | System |
| Dependencies | SVC-002 |
| Rule Type | ASSUMPTION |
| Acceptance Criteria | GIVEN service viewed WHEN pricing exists THEN model is shown |

## SEARCH MODULE

### SEA-001: Location Search

| Field | Value |
|---|---|
| REQ-ID | SEA-001 |
| Requirement | Search pros by location. |
| Actor | Client |
| Precondition | Logged in |
| Action | Enters address |
| System Behavior | Queries pros within radius |
| Success State | Results shown |
| Failure State | No results |
| Permissions | Client |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN client searches location WHEN pros near THEN list shown |

### SEA-002: Filter Results

| Field | Value |
|---|---|
| REQ-ID | SEA-002 |
| Requirement | Filter pros by criteria. |
| Actor | Client |
| Precondition | Viewing results |
| Action | Applies filter (gender, rating) |
| System Behavior | Refines result set |
| Success State | Filtered list |
| Failure State | Error |
| Permissions | Client |
| Dependencies | SRC-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client filters WHEN applied THEN results refine |

### SEA-003: Sort Results

| Field | Value |
|---|---|
| REQ-ID | SEA-003 |
| Requirement | Sort pros by distance/rating. |
| Actor | Client |
| Precondition | Viewing results |
| Action | Selects sort option |
| System Behavior | Orders result set |
| Success State | Sorted list |
| Failure State | Error |
| Permissions | Client |
| Dependencies | SRC-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client sorts WHEN selected THEN order updates |

### SEA-004: Map View

| Field | Value |
|---|---|
| REQ-ID | SEA-004 |
| Requirement | Toggle map view of results. |
| Actor | Client |
| Precondition | Viewing results |
| Action | Clicks Map |
| System Behavior | Renders map with pins |
| Success State | Map shown |
| Failure State | Map error |
| Permissions | Client |
| Dependencies | SRC-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN client clicks map WHEN loaded THEN pins displayed |

## MATCHING MODULE

### MAT-001: Auto-Match Algo

| Field | Value |
|---|---|
| REQ-ID | MAT-001 |
| Requirement | System finds best pro for request. |
| Actor | System |
| Precondition | Booking Requested |
| Action | Runs matching logic |
| System Behavior | Finds top N pros |
| Success State | Pros identified |
| Failure State | No pros found |
| Permissions | System |
| Dependencies | BKG-002 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN request made WHEN algo runs THEN pros identified |

### MAT-002: Eligibility Check

| Field | Value |
|---|---|
| REQ-ID | MAT-002 |
| Requirement | Match considers license requirements. |
| Actor | System |
| Precondition | Running algo |
| Action | Checks pro qualifications |
| System Behavior | Filters unqualified |
| Success State | Qualified list |
| Failure State | Empty list |
| Permissions | System |
| Dependencies | MCH-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN algo runs WHEN checking pros THEN only qualified included |

### MAT-003: Availability Check

| Field | Value |
|---|---|
| REQ-ID | MAT-003 |
| Requirement | Match considers real-time availability. |
| Actor | System |
| Precondition | Running algo |
| Action | Checks online status |
| System Behavior | Filters offline/busy |
| Success State | Available list |
| Failure State | Empty list |
| Permissions | System |
| Dependencies | MCH-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN algo runs WHEN checking pros THEN only available included |

### MAT-004: Timeout Logic

| Field | Value |
|---|---|
| REQ-ID | MAT-004 |
| Requirement | Match request times out if ignored. |
| Actor | System |
| Precondition | Match broadcasted |
| Action | Waits for X minutes |
| System Behavior | Cancels match if no accept |
| Success State | Match cancelled |
| Failure State | Error |
| Permissions | System |
| Dependencies | MCH-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN match broadcasted WHEN timeout reached THEN match cancels |

### MAT-005: Manual Override

| Field | Value |
|---|---|
| REQ-ID | MAT-005 |
| Requirement | Admin can manually assign a pro. |
| Actor | Admin |
| Precondition | Request pending |
| Action | Selects pro from list |
| System Behavior | Assigns booking to pro |
| Success State | Booking Assigned |
| Failure State | Assignment failed |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin views request WHEN assigning pro THEN booking Assigned |

## BOOKING MODULE

### BOO-001: Create Draft

| Field | Value |
|---|---|
| REQ-ID | BOO-001 |
| Requirement | Client starts booking process. |
| Actor | Client |
| Precondition | Logged in |
| Action | Selects service/time |
| System Behavior | Creates Draft booking |
| Success State | Status: Draft |
| Failure State | Error |
| Permissions | Client |
| Dependencies | SVC-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN client starts booking WHEN details entered THEN Draft created |

### BOO-002: Submit Request

| Field | Value |
|---|---|
| REQ-ID | BOO-002 |
| Requirement | Client submits the booking. |
| Actor | Client |
| Precondition | Draft exists |
| Action | Confirms and pays/holds |
| System Behavior | Updates to Requested |
| Success State | Status: Requested |
| Failure State | Validation fail |
| Permissions | Client |
| Dependencies | BKG-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN draft exists WHEN submitted THEN status is Requested |

### BOO-003: State: Matching

| Field | Value |
|---|---|
| REQ-ID | BOO-003 |
| Requirement | System searches for pros. |
| Actor | System |
| Precondition | Status: Requested |
| Action | Triggers matching algo |
| System Behavior | Updates to Matching |
| Success State | Status: Matching |
| Failure State | Algo fail |
| Permissions | System |
| Dependencies | BKG-002 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN requested WHEN algo starts THEN status is Matching |

### BOO-004: State: Assigned

| Field | Value |
|---|---|
| REQ-ID | BOO-004 |
| Requirement | Pro accepts the request. |
| Actor | Professional |
| Precondition | Status: Matching |
| Action | Clicks Accept |
| System Behavior | Updates to Assigned |
| Success State | Status: Assigned |
| Failure State | Already taken |
| Permissions | Professional |
| Dependencies | BKG-003 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN match request WHEN pro accepts THEN status is Assigned |

### BOO-005: State: On The Way

| Field | Value |
|---|---|
| REQ-ID | BOO-005 |
| Requirement | Pro indicates travel started. |
| Actor | Professional |
| Precondition | Status: Assigned |
| Action | Clicks Start Travel |
| System Behavior | Updates to On The Way |
| Success State | Status: On The Way |
| Failure State | Error |
| Permissions | Professional |
| Dependencies | BKG-004 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN assigned WHEN pro travels THEN status is On The Way |

### BOO-006: State: Checked In

| Field | Value |
|---|---|
| REQ-ID | BOO-006 |
| Requirement | Pro arrives at location. |
| Actor | Professional |
| Precondition | Status: On The Way |
| Action | Clicks Check In |
| System Behavior | Validates GPS, updates state |
| Success State | Status: Checked In |
| Failure State | GPS invalid |
| Permissions | Professional |
| Dependencies | BKG-005 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN on the way WHEN pro arrives THEN status is Checked In |

### BOO-007: State: In Progress

| Field | Value |
|---|---|
| REQ-ID | BOO-007 |
| Requirement | Pro starts the service timer. |
| Actor | Professional |
| Precondition | Status: Checked In |
| Action | Starts timer |
| System Behavior | Updates state, records time |
| Success State | Status: In Progress |
| Failure State | Timer error |
| Permissions | Professional |
| Dependencies | BKG-006 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN checked in WHEN service starts THEN status is In Progress |

### BOO-008: State: Completed

| Field | Value |
|---|---|
| REQ-ID | BOO-008 |
| Requirement | Pro ends the service. |
| Actor | Professional |
| Precondition | Status: In Progress |
| Action | Ends timer, submits notes |
| System Behavior | Updates state, calculates cost |
| Success State | Status: Completed |
| Failure State | Error |
| Permissions | Professional |
| Dependencies | BKG-007 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN in progress WHEN service ends THEN status is Completed |

### BOO-009: State: Payment Pending

| Field | Value |
|---|---|
| REQ-ID | BOO-009 |
| Requirement | System awaits final capture. |
| Actor | System |
| Precondition | Status: Completed |
| Action | Triggers payment flow |
| System Behavior | Updates state |
| Success State | Status: Payment Pending |
| Failure State | Gateway error |
| Permissions | System |
| Dependencies | BKG-008 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN completed WHEN cost calculated THEN status is Payment Pending |

### BOO-010: State: Cancelled

| Field | Value |
|---|---|
| REQ-ID | BOO-010 |
| Requirement | User cancels the booking. |
| Actor | Client |
| Precondition | Before completion |
| Action | Clicks Cancel |
| System Behavior | Updates state to Cancelled |
| Success State | Status: Cancelled |
| Failure State | Not allowed |
| Permissions | Client |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN active booking WHEN user cancels THEN status is Cancelled |

## VISIT MODULE

### VIS-001: Check-in Validation

| Field | Value |
|---|---|
| REQ-ID | VIS-001 |
| Requirement | System validates GPS for check-in. |
| Actor | System |
| Precondition | Pro checking in |
| Action | Compares GPS to address |
| System Behavior | Allows or blocks check-in |
| Success State | Check-in success |
| Failure State | Check-in blocked |
| Permissions | System |
| Dependencies | BKG-006 |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN pro checks in WHEN GPS near THEN check-in allowed |

### VIS-002: Active Timer

| Field | Value |
|---|---|
| REQ-ID | VIS-002 |
| Requirement | Track service duration. |
| Actor | System |
| Precondition | Status: In Progress |
| Action | Runs timer |
| System Behavior | Calculates duration on completion |
| Success State | Duration saved |
| Failure State | Timer fail |
| Permissions | System |
| Dependencies | BKG-007 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN in progress WHEN service ends THEN duration calculated |

### VIS-003: Clinical Notes

| Field | Value |
|---|---|
| REQ-ID | VIS-003 |
| Requirement | Pro adds notes to visit. |
| Actor | Professional |
| Precondition | Visit active/done |
| Action | Types notes |
| System Behavior | Saves to DB |
| Success State | Notes saved |
| Failure State | Save error |
| Permissions | Professional |
| Dependencies | BKG-008 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN pro types notes WHEN saved THEN attached to visit |

### VIS-004: Check-out Signature

| Field | Value |
|---|---|
| REQ-ID | VIS-004 |
| Requirement | Client optionally signs off. |
| Actor | Client |
| Precondition | Visit completing |
| Action | Provides e-signature |
| System Behavior | Saves signature image |
| Success State | Signature saved |
| Failure State | Error |
| Permissions | Client |
| Dependencies | BKG-008 |
| Rule Type | ASSUMPTION |
| Acceptance Criteria | GIVEN visit completing WHEN client signs THEN signature saved |

## PAYMENT MODULE

### PAY-001: Calculate Final Price

| Field | Value |
|---|---|
| REQ-ID | PAY-001 |
| Requirement | Determine final cost based on duration. |
| Actor | System |
| Precondition | Status: Completed |
| Action | Multiplies duration * rate |
| System Behavior | Generates total amount |
| Success State | Total generated |
| Failure State | Calc error |
| Permissions | System |
| Dependencies | BKG-008 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN visit completed WHEN processed THEN total calculated |

### PAY-002: Charge Method

| Field | Value |
|---|---|
| REQ-ID | PAY-002 |
| Requirement | Process payment via gateway. |
| Actor | System |
| Precondition | Status: Payment Pending |
| Action | Calls gateway API |
| System Behavior | Captures funds |
| Success State | Payment Success |
| Failure State | Payment Failed |
| Permissions | System |
| Dependencies | PAY-001 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN pending payment WHEN processed THEN charge succeeds |

### PAY-003: Retry Logic

| Field | Value |
|---|---|
| REQ-ID | PAY-003 |
| Requirement | Retry failed payments. |
| Actor | System |
| Precondition | Payment Failed |
| Action | Waits 24h, retries |
| System Behavior | Attempts capture again |
| Success State | Payment Success |
| Failure State | Failed again |
| Permissions | System |
| Dependencies | PAY-002 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN payment fails WHEN retried THEN attempt made |

### PAY-004: Issue Receipt

| Field | Value |
|---|---|
| REQ-ID | PAY-004 |
| Requirement | Send email receipt to client. |
| Actor | System |
| Precondition | Payment Success |
| Action | Generates PDF, emails |
| System Behavior | Sends receipt |
| Success State | Receipt sent |
| Failure State | Email error |
| Permissions | System |
| Dependencies | PAY-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN payment succeeds WHEN processed THEN receipt emailed |

## PAYOUT MODULE

### PYT-001: Calculate Earnings

| Field | Value |
|---|---|
| REQ-ID | PYT-001 |
| Requirement | Determine pro cut after commission. |
| Actor | System |
| Precondition | Payment Success |
| Action | Deducts platform fee |
| System Behavior | Saves earning record |
| Success State | Earning saved |
| Failure State | Calc error |
| Permissions | System |
| Dependencies | PAY-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN payment succeeds WHEN calculated THEN pro earning saved |

### PYT-002: Commission Rate

| Field | Value |
|---|---|
| REQ-ID | PYT-002 |
| Requirement | Apply platform commission. |
| Actor | System |
| Precondition | Calculating earnings |
| Action | Applies percentage |
| System Behavior | Deducts amount |
| Success State | Fee deducted |
| Failure State | Error |
| Permissions | System |
| Dependencies | PYT-001 |
| Rule Type | OPEN DECISION |
| Acceptance Criteria | GIVEN calculating earnings WHEN fee applied THEN amount correct |

### PYT-003: Batch Processing

| Field | Value |
|---|---|
| REQ-ID | PYT-003 |
| Requirement | Process payouts on schedule. |
| Actor | System |
| Precondition | Payout day |
| Action | Aggregates earnings |
| System Behavior | Sends to payout provider |
| Success State | Payouts sent |
| Failure State | Batch fail |
| Permissions | System |
| Dependencies | PYT-001 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN payout day WHEN batch runs THEN payouts processed |

### PYT-004: Payout History

| Field | Value |
|---|---|
| REQ-ID | PYT-004 |
| Requirement | Pro views past payouts. |
| Actor | Professional |
| Precondition | Logged in |
| Action | Views history |
| System Behavior | Fetches records |
| Success State | List shown |
| Failure State | Error |
| Permissions | Professional |
| Dependencies | PYT-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN pro views history WHEN loaded THEN records shown |

## REVIEW MODULE

### REV-001: Submit Rating

| Field | Value |
|---|---|
| REQ-ID | REV-001 |
| Requirement | Client rates pro 1-5 stars. |
| Actor | Client |
| Precondition | Visit Completed |
| Action | Selects rating |
| System Behavior | Saves rating |
| Success State | Rating saved |
| Failure State | Error |
| Permissions | Client |
| Dependencies | BKG-008 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN completed visit WHEN client rates THEN rating saved |

### REV-002: Submit Text

| Field | Value |
|---|---|
| REQ-ID | REV-002 |
| Requirement | Client writes review text. |
| Actor | Client |
| Precondition | Rating submitted |
| Action | Types review |
| System Behavior | Saves review |
| Success State | Review saved |
| Failure State | Error |
| Permissions | Client |
| Dependencies | REV-001 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN rating WHEN text submitted THEN review saved |

### REV-003: Moderation Hide

| Field | Value |
|---|---|
| REQ-ID | REV-003 |
| Requirement | Admin hides inappropriate review. |
| Actor | Admin |
| Precondition | Review posted |
| Action | Clicks Hide |
| System Behavior | Flags as hidden |
| Success State | Review hidden |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | REV-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin views review WHEN hidden THEN not public |

## SUPPORT MODULE

### SUP-001: Create Ticket

| Field | Value |
|---|---|
| REQ-ID | SUP-001 |
| Requirement | User submits support ticket. |
| Actor | Any User |
| Precondition | Logged in |
| Action | Fills ticket form |
| System Behavior | Creates ticket in DB |
| Success State | Ticket created |
| Failure State | Error |
| Permissions | Any |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN user submits ticket WHEN valid THEN ticket created |

### SUP-002: Assign Ticket

| Field | Value |
|---|---|
| REQ-ID | SUP-002 |
| Requirement | System routes ticket to admin. |
| Actor | System |
| Precondition | Ticket created |
| Action | Assigns to support staff |
| System Behavior | Updates owner |
| Success State | Assigned |
| Failure State | Error |
| Permissions | System |
| Dependencies | SUP-001 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN ticket created WHEN processed THEN assigned to admin |

### SUP-003: Resolve Ticket

| Field | Value |
|---|---|
| REQ-ID | SUP-003 |
| Requirement | Admin marks ticket resolved. |
| Actor | Admin |
| Precondition | Ticket open |
| Action | Provides solution, closes |
| System Behavior | Updates state to Resolved |
| Success State | Resolved |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | SUP-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin provides solution WHEN resolved THEN ticket closed |

## NOTIFICATION MODULE

### NOT-001: In-App Alerts

| Field | Value |
|---|---|
| REQ-ID | NOT-001 |
| Requirement | Show notifications in UI. |
| Actor | User |
| Precondition | Logged in |
| Action | Clicks bell icon |
| System Behavior | Fetches notifications |
| Success State | List shown |
| Failure State | Error |
| Permissions | User |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN user clicks bell WHEN loaded THEN alerts shown |

### NOT-002: Event Triggers

| Field | Value |
|---|---|
| REQ-ID | NOT-002 |
| Requirement | System sends alerts on key events. |
| Actor | System |
| Precondition | Event occurs (e.g. Booking Assigned) |
| Action | Creates notification record |
| System Behavior | Dispatches alert |
| Success State | Alert dispatched |
| Failure State | Error |
| Permissions | System |
| Dependencies | None |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN key event WHEN occurs THEN alert dispatched |

### NOT-003: Preferences

| Field | Value |
|---|---|
| REQ-ID | NOT-003 |
| Requirement | User toggles notification channels. |
| Actor | User |
| Precondition | Logged in |
| Action | Updates settings |
| System Behavior | Saves to DB |
| Success State | Settings saved |
| Failure State | Error |
| Permissions | User |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN user updates settings WHEN saved THEN preferences applied |

## ADMIN MODULE

### ADM-001: KPI Dashboard

| Field | Value |
|---|---|
| REQ-ID | ADM-001 |
| Requirement | Admin views key metrics. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Views dashboard |
| System Behavior | Aggregates stats |
| Success State | Stats shown |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin logs in WHEN dashboard loads THEN stats shown |

### ADM-002: User Suspension

| Field | Value |
|---|---|
| REQ-ID | ADM-002 |
| Requirement | Admin suspends malicious user. |
| Actor | Admin |
| Precondition | Viewing user |
| Action | Clicks Suspend |
| System Behavior | Revokes access |
| Success State | User suspended |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN admin suspends user WHEN processed THEN user cannot log in |

### ADM-003: Booking Oversight

| Field | Value |
|---|---|
| REQ-ID | ADM-003 |
| Requirement | Admin views all active bookings. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Views booking list |
| System Behavior | Fetches all bookings |
| Success State | List shown |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | BKG-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin views bookings WHEN loaded THEN all shown |

### ADM-004: Platform Configuration

| Field | Value |
|---|---|
| REQ-ID | ADM-004 |
| Requirement | Admin updates platform settings. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Changes config |
| System Behavior | Updates DB |
| Success State | Config updated |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin changes config WHEN saved THEN platform updates |

## ORGANIZATION MODULE

### ORG-001: Staffing Request

| Field | Value |
|---|---|
| REQ-ID | ORG-001 |
| Requirement | Hospital requests multiple pros. |
| Actor | Organization |
| Precondition | Logged in |
| Action | Fills shift details |
| System Behavior | Creates Request |
| Success State | Request created |
| Failure State | Error |
| Permissions | Organization |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN org requests staff WHEN valid THEN request created |

### ORG-002: Roster View

| Field | Value |
|---|---|
| REQ-ID | ORG-002 |
| Requirement | Org views assigned pros. |
| Actor | Organization |
| Precondition | Request fulfilled |
| Action | Views roster |
| System Behavior | Fetches assigned pros |
| Success State | Roster shown |
| Failure State | Error |
| Permissions | Organization |
| Dependencies | ORG-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN org views roster WHEN loaded THEN pros shown |

### ORG-003: Timesheet Approval

| Field | Value |
|---|---|
| REQ-ID | ORG-003 |
| Requirement | Org approves pro hours. |
| Actor | Organization |
| Precondition | Shift done |
| Action | Reviews hours, approves |
| System Behavior | Marks approved |
| Success State | Approved |
| Failure State | Error |
| Permissions | Organization |
| Dependencies | ORG-002 |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN org reviews hours WHEN approved THEN timesheet finalized |

## REPORTING MODULE

### REP-001: Financial Export

| Field | Value |
|---|---|
| REQ-ID | REP-001 |
| Requirement | Admin exports revenue data. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Clicks Export CSV |
| System Behavior | Generates file |
| Success State | File downloaded |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | PAY-001 |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN admin exports WHEN processed THEN CSV downloaded |

### REP-002: Utilization Chart

| Field | Value |
|---|---|
| REQ-ID | REP-002 |
| Requirement | Admin views pro utilization. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Views charts |
| System Behavior | Renders graph |
| Success State | Chart shown |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin views utilization WHEN loaded THEN chart shown |

### REP-003: Booking Reports

| Field | Value |
|---|---|
| REQ-ID | REP-003 |
| Requirement | Admin generates booking history. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Filters bookings, exports |
| System Behavior | Generates PDF/CSV |
| Success State | Report generated |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN admin exports bookings WHEN processed THEN report generated |

## RBAC MODULE

### RBA-001: Role Enforcement

| Field | Value |
|---|---|
| REQ-ID | RBA-001 |
| Requirement | API enforces role permissions. |
| Actor | System |
| Precondition | API Request |
| Action | Checks JWT role |
| System Behavior | Allows/Denies |
| Success State | Access Granted |
| Failure State | 403 Forbidden |
| Permissions | System |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN API request WHEN role checked THEN access enforced |

### RBA-002: Route Guards

| Field | Value |
|---|---|
| REQ-ID | RBA-002 |
| Requirement | Frontend prevents unauthorized nav. |
| Actor | Frontend |
| Precondition | User clicks link |
| Action | Checks permissions |
| System Behavior | Routes or Redirects |
| Success State | Nav success |
| Failure State | Redirected |
| Permissions | System |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN user navigates WHEN unauthorized THEN redirected |

### RBA-003: Data Scoping

| Field | Value |
|---|---|
| REQ-ID | RBA-003 |
| Requirement | Users only see their own data. |
| Actor | System |
| Precondition | Data Request |
| Action | Scopes query to User ID |
| System Behavior | Returns scoped data |
| Success State | Data returned |
| Failure State | Error |
| Permissions | System |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN user requests data WHEN processed THEN only owned data returned |

## SETTINGS MODULE

### SET-001: Profile Settings

| Field | Value |
|---|---|
| REQ-ID | SET-001 |
| Requirement | User updates basic settings. |
| Actor | User |
| Precondition | Logged in |
| Action | Updates timezone |
| System Behavior | Saves to DB |
| Success State | Settings saved |
| Failure State | Error |
| Permissions | User |
| Dependencies | None |
| Rule Type | BUSINESS RULE |
| Acceptance Criteria | GIVEN user updates timezone WHEN saved THEN times format correctly |

### SET-002: Theme Enforcement

| Field | Value |
|---|---|
| REQ-ID | SET-002 |
| Requirement | System enforces light theme. |
| Actor | System |
| Precondition | App Load |
| Action | Applies CSS |
| System Behavior | Renders light theme |
| Success State | Light theme shown |
| Failure State | N/A |
| Permissions | System |
| Dependencies | None |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN app loads WHEN rendering THEN light theme applied |

### SET-003: Demo Mode Toggle

| Field | Value |
|---|---|
| REQ-ID | SET-003 |
| Requirement | Admin enables demo mode. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Toggles flag |
| System Behavior | Enables demo role switcher |
| Success State | Demo mode ON |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | None |
| Rule Type | TECHNICAL RULE |
| Acceptance Criteria | GIVEN admin toggles demo WHEN saved THEN demo mode active |

## AUDIT MODULE

### AUD-001: Action Logging

| Field | Value |
|---|---|
| REQ-ID | AUD-001 |
| Requirement | System logs critical actions. |
| Actor | System |
| Precondition | Action occurs |
| Action | Writes to audit table |
| System Behavior | Saves log |
| Success State | Log saved |
| Failure State | Error |
| Permissions | System |
| Dependencies | None |
| Rule Type | SECURITY RULE |
| Acceptance Criteria | GIVEN critical action WHEN occurs THEN logged |

### AUD-002: Audit View

| Field | Value |
|---|---|
| REQ-ID | AUD-002 |
| Requirement | Admin views audit logs. |
| Actor | Admin |
| Precondition | Logged in |
| Action | Views audit page |
| System Behavior | Fetches logs |
| Success State | Logs shown |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | AUD-001 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin views audit WHEN loaded THEN logs shown |

### AUD-003: Audit Filter

| Field | Value |
|---|---|
| REQ-ID | AUD-003 |
| Requirement | Admin filters logs by user. |
| Actor | Admin |
| Precondition | Viewing logs |
| Action | Applies filter |
| System Behavior | Queries logs |
| Success State | Filtered logs shown |
| Failure State | Error |
| Permissions | Admin |
| Dependencies | AUD-002 |
| Rule Type | UI RULE |
| Acceptance Criteria | GIVEN admin filters WHEN applied THEN filtered logs shown |

