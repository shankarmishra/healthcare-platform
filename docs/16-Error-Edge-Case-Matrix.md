# 16. Error Handling, Edge Case, Loading State, Empty State, and Confirmation UX Matrix

This specification details the error handling, edge cases, loading states, empty states, and confirmation dialogs for the Healthcare Staffing & Home Care Platform. 

**UI RULE**: This is a LIGHT THEME ONLY product.
**UI RULE**: Brand colors: Healthcare Teal #0EA5A4, Medical Blue #2563EB. Primary text: #0F172A (never pure #000000).
**UI RULE**: Font: Manrope (Inter fallback). Icons: Lucide React only.

---

## 1. Error State Design Principle

Every error must explain:
1. **WHAT** happened
2. **WHY** it happened
3. **WHAT** the user should do next

**UI RULE**: Never show a generic "Something went wrong" without context.
**UI RULE**: Never show technical error codes or stack traces to end users.
**BUSINESS RULE**: Errors should guide the user towards recovery, minimizing support tickets.
**SECURITY RULE**: Authentication and authorization errors must not leak sensitive system information (e.g., distinguishing between "user not found" and "invalid password" should be avoided generically, though UX may require specific guidance in some flows).

---

## 2. Error Matrix

For each error scenario, the matrix defines:
- **Error ID**: Unique identifier for tracking (e.g., ERR-001)
- **Scenario**: What went wrong
- **Context**: Where it occurs (screen/flow)
- **Affected Role**: Client / Professional / Admin / Organization
- **Error Message (User-Facing)**: Exact copy the user sees
- **Cause Explanation**: Technical or business reason it happened
- **Recovery Action(s)**: What the user can do to fix it
- **UI Treatment**: Inline error / Toast / Full-page / Modal
- **Icon**: Lucide icon to display
- **Color**: Status color mapping (e.g., destructive/red, warning/yellow)

### 2.1 Form Validation Errors
*Context: Registration, Profile Update, Booking Request, Organization Onboarding*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-FORM-001 | Required field empty | "[Field name] is required" | Focus on field | Inline | AlertCircle | Red | UI RULE |
| ERR-FORM-002 | Invalid email format | "Please enter a valid email address" | Focus on field | Inline | AlertCircle | Red | UI RULE |
| ERR-FORM-003 | Invalid phone number | "Please enter a valid phone number" | Focus on field | Inline | AlertCircle | Red | UI RULE |
| ERR-FORM-004 | Password too short | "Password must be at least 8 characters" | Focus on field | Inline | AlertCircle | Red | SECURITY RULE |
| ERR-FORM-005 | Password mismatch | "Passwords do not match" | Focus on confirm field | Inline | AlertCircle | Red | UI RULE |
| ERR-FORM-006 | Invalid date | "Please select a valid date" | Open date picker | Inline | Calendar | Red | UI RULE |
| ERR-FORM-007 | Past date selected | "Please select a future date" | Open date picker | Inline | Calendar | Red | BUSINESS RULE |
| ERR-FORM-008 | Invalid file type | "Only PDF, JPG, and PNG files are accepted" | Clear file input | Inline | FileX | Red | TECHNICAL RULE |
| ERR-FORM-009 | File too large | "File size must be under 10MB" | Clear file input | Inline | HardDrive | Red | TECHNICAL RULE |
| ERR-FORM-010 | Location not found | "We couldn't find this address. Please try a different one." | Clear and refocus | Inline | MapPinOff | Red | TECHNICAL RULE |
| ERR-FORM-011 | Invalid postal code | "Please enter a valid postal code for your region" | Focus on field | Inline | MapPinOff | Red | BUSINESS RULE |
| ERR-FORM-012 | Name contains numbers | "Name cannot contain numbers or special characters" | Focus on field | Inline | Type | Red | UI RULE |
| ERR-FORM-013 | Minimum age requirement | "You must be at least 18 years old to register" | Clear date | Inline | Calendar | Red | BUSINESS RULE |
| ERR-FORM-014 | Duplicate phone number | "This phone number is already registered" | Go to login | Inline | Phone | Red | BUSINESS RULE |
| ERR-FORM-015 | Invalid bank account | "Please check your bank account details" | Focus on field | Inline | CreditCard | Red | BUSINESS RULE |
| ERR-FORM-016 | Description too long | "Description must be under 500 characters" | Focus on field | Inline | AlignLeft | Red | UI RULE |
| ERR-FORM-017 | Missing consent | "You must agree to the Terms of Service" | Focus checkbox | Inline | CheckSquare | Red | BUSINESS RULE |
| ERR-FORM-018 | Special characters in ID | "ID number must contain only alphanumeric characters" | Focus on field | Inline | Hash | Red | UI RULE |
| ERR-FORM-019 | Future date of birth | "Date of birth cannot be in the future" | Clear date | Inline | Calendar | Red | BUSINESS RULE |
| ERR-FORM-020 | Invalid Organization Tax ID | "Tax ID format is invalid" | Focus on field | Inline | Building | Red | BUSINESS RULE |

### 2.2 Authentication Errors
*Context: Login, Password Reset, Token Validation*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-AUTH-001 | Invalid credentials | "Incorrect email or password. Please try again." | Clear password, focus | Inline | AlertCircle | Red | SECURITY RULE |
| ERR-AUTH-002 | Account locked | "Your account has been temporarily locked due to multiple failed attempts. Please try again in 30 minutes." | Wait / Contact support | Modal | Lock | Red | SECURITY RULE |
| ERR-AUTH-003 | Session expired | "Your session has expired. Please sign in again." | Redirect to login | Toast | Clock | Orange | SECURITY RULE |
| ERR-AUTH-004 | Unauthorized access | "You don't have permission to access this page." | Redirect to appropriate portal | Full-page | ShieldAlert | Red | SECURITY RULE |
| ERR-AUTH-005 | Unverified email | "Please verify your email address to continue." | Resend verification | Modal | MailWarning | Orange | BUSINESS RULE |
| ERR-AUTH-006 | 2FA failure | "Invalid authentication code. Please try again." | Clear input | Inline | Key | Red | SECURITY RULE |
| ERR-AUTH-007 | Password reset expired | "This password reset link has expired. Please request a new one." | Request new link | Full-page | Clock | Orange | SECURITY RULE |
| ERR-AUTH-008 | Suspended account | "Your account has been suspended. Please contact support." | Contact support | Full-page | Ban | Red | BUSINESS RULE |
| ERR-AUTH-009 | Login from new device | "New device detected. Please verify via email code." | Enter code | Modal | Smartphone | Orange | SECURITY RULE |
| ERR-AUTH-010 | Missing Demo Flag | "Demo mode is not enabled for this environment." | Remove URL param | Full-page | AlertTriangle | Red | TECHNICAL RULE |

### 2.3 Payment Errors
*Context: Checkout, Payouts, Wallet Top-up (ASSUMPTION)*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-PAY-001 | Payment declined | "Payment could not be completed. Your bank declined the transaction." | Retry / Change method | Toast | CreditCard | Red | BUSINESS RULE |
| ERR-PAY-002 | Payment timeout | "Payment processing timed out. Please try again." | Retry | Toast | Clock | Orange | TECHNICAL RULE |
| ERR-PAY-003 | Insufficient funds | "Payment failed due to insufficient funds. Please try another payment method." | Change method | Modal | Wallet | Red | BUSINESS RULE |
| ERR-PAY-004 | Duplicate payment | "It looks like this payment was already processed." | View booking | Toast | Copy | Orange | BUSINESS RULE |
| ERR-PAY-005 | Refund failed | "Refund could not be processed. Please contact support." | Contact support | Modal | RefreshCcw | Red | BUSINESS RULE |
| ERR-PAY-006 | Card expired | "Your card has expired. Please update your payment method." | Update card | Modal | CreditCard | Red | BUSINESS RULE |
| ERR-PAY-007 | Fraud suspected | "Transaction flagged for security reasons. Please contact your bank." | Contact bank / support | Modal | ShieldAlert | Red | SECURITY RULE |
| ERR-PAY-008 | Gateway unavailable | "Payment gateway is currently unavailable. Please try again later." | Retry later | Toast | ServerOff | Orange | TECHNICAL RULE |
| ERR-PAY-009 | Invalid currency | "This service does not support the selected currency." | Switch currency | Inline | DollarSign | Red | BUSINESS RULE |
| ERR-PAY-010 | Payout account invalid | "Your payout bank account details are invalid. Please update them." | Update account | Modal | Building | Red | BUSINESS RULE |

### 2.4 Booking Errors
*Context: Search, Matching, Acceptance, Cancellation*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-BKG-001 | No professionals found | "No healthcare professionals are currently available in your area for this service. We'll notify you when someone becomes available." | Change time / Notify me | Empty State | SearchX | Gray | BUSINESS RULE |
| ERR-BKG-002 | Professional unavailable | "The selected professional is no longer available for this time slot." | Choose another / Auto-match | Modal | UserX | Orange | BUSINESS RULE |
| ERR-BKG-003 | Time slot conflict | "This time slot conflicts with an existing booking." | Choose different time | Inline | CalendarX | Red | BUSINESS RULE |
| ERR-BKG-004 | Booking cancelled by pro | "Your booking has been cancelled by the healthcare professional. We're finding another professional for you." | Wait for re-match / Cancel | Modal | AlertTriangle | Orange | BUSINESS RULE |
| ERR-BKG-005 | Cancellation too late | "This booking cannot be cancelled as the professional is already on the way." | Contact support | Modal | Clock | Red | BUSINESS RULE |
| ERR-BKG-006 | Expired job request | "This job request has expired. The professional did not respond in time." | Re-trigger matching | Toast | Hourglass | Orange | BUSINESS RULE |
| ERR-BKG-007 | Service out of bounds | "This service is not available at the selected address." | Change address | Inline | MapPinOff | Red | BUSINESS RULE |
| ERR-BKG-008 | Maximum concurrent bookings | "You have reached the maximum number of active bookings allowed." | Complete existing | Modal | Briefcase | Orange | BUSINESS RULE |
| ERR-BKG-009 | Professional missing required skills | "This professional does not have the specific skills required for this booking." | Select another | Modal | UserMinus | Red | BUSINESS RULE |
| ERR-BKG-010 | Org budget exceeded (ASSUMPTION) | "Booking exceeds organizational staffing budget." | Request approval | Modal | DollarSign | Red | BUSINESS RULE |

### 2.5 KYC Errors
*Context: Professional Registration, Admin Verification*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-KYC-001 | Document rejected | "Your [document type] was not accepted: [rejection reason]. Please re-upload a valid document." | Re-upload | Modal | FileX | Red | BUSINESS RULE |
| ERR-KYC-002 | Upload failed | "Document upload failed. Please check your connection and try again." | Retry upload | Toast | UploadCloud | Orange | TECHNICAL RULE |
| ERR-KYC-003 | KYC expired | "Your verification has expired. Please submit updated documents." | Start KYC flow | Full-page banner | ShieldAlert | Red | BUSINESS RULE |
| ERR-KYC-004 | Blur detected | "The uploaded image is too blurry. Please ensure all text is legible." | Re-upload | Inline | CameraOff | Orange | UI RULE |
| ERR-KYC-005 | Name mismatch | "The name on the document does not match your profile name." | Update profile/doc | Modal | UserX | Red | BUSINESS RULE |
| ERR-KYC-006 | Missing signature | "The document is missing a required signature." | Re-upload | Inline | PenTool | Red | BUSINESS RULE |
| ERR-KYC-007 | Expired document | "The uploaded document has expired. Please provide a valid one." | Re-upload | Inline | Clock | Red | BUSINESS RULE |
| ERR-KYC-008 | Unsupported document type | "This document type is not supported for verification." | Upload correct doc | Inline | FileMinus | Red | BUSINESS RULE |
| ERR-KYC-009 | System verification timeout | "Third-party background check timed out. We will retry automatically." | Wait | Toast | RefreshCw | Orange | TECHNICAL RULE |
| ERR-KYC-010 | License suspended (API Check) | "Our system indicates your medical license is currently suspended." | Contact Support | Modal | ShieldBan | Red | SECURITY RULE |

### 2.6 Network / System Errors
*Context: Global*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-NET-001 | Network disconnected | "You appear to be offline. Some features may be unavailable." | Check connection | Global Banner | WifiOff | Orange | TECHNICAL RULE |
| ERR-NET-002 | Server error | "We're experiencing technical difficulties. Please try again in a few minutes." | Retry | Toast | ServerOff | Red | TECHNICAL RULE |
| ERR-NET-003 | Request timeout | "The request took too long. Please try again." | Retry | Toast | Clock | Orange | TECHNICAL RULE |
| ERR-NET-004 | Service unavailable | "This service is temporarily unavailable. Please try again later." | Wait / Contact support | Full-page | CloudOff | Red | TECHNICAL RULE |
| ERR-NET-005 | App version deprecated | "Your app version is no longer supported. Please update to the latest version." | Update app | Full-page | DownloadCloud | Red | TECHNICAL RULE |
| ERR-NET-006 | API Rate Limit Exceeded | "You are making requests too quickly. Please slow down." | Wait 60s | Toast | Activity | Orange | TECHNICAL RULE |
| ERR-NET-007 | Database connection lost | "System maintenance in progress. Data may be temporarily unavailable." | Wait | Global Banner | Database | Orange | TECHNICAL RULE |
| ERR-NET-008 | Storage quota exceeded | "System storage issue. Cannot upload files right now." | Contact Admin | Toast | HardDrive | Red | TECHNICAL RULE |
| ERR-NET-009 | Invalid API Key (Admin context) | "Configuration error: Invalid integration key." | Check settings | Toast | Key | Red | SECURITY RULE |
| ERR-NET-010 | Push notification failure | "Could not register device for notifications." | Check OS settings | Toast | BellOff | Orange | TECHNICAL RULE |

### 2.7 Booking Flow Edge Cases
*Context: Complex asynchronous interactions*

| Error ID | Scenario | Message | Recovery | UI Treatment | Icon | Color | Rule Type |
|---|---|---|---|---|---|---|---|
| ERR-EDGE-001 | Browser refresh during booking | Preserve state, show "Resume booking?" dialog | Resume / Start over | Modal | RotateCcw | Blue | UI RULE |
| ERR-EDGE-002 | Back button during booking | Navigate to previous step, preserve data | Continue from previous step | N/A | ArrowLeft | N/A | UI RULE |
| ERR-EDGE-003 | Professional goes offline during matching | Remove from pool, continue matching | Automatic re-match | Toast | UserMinus | Orange | BUSINESS RULE |
| ERR-EDGE-004 | Duplicate booking attempt | "You already have a booking for this time slot." | View existing booking | Modal | Copy | Red | BUSINESS RULE |
| ERR-EDGE-005 | Price changed during checkout | "Pricing has been updated since you started. Review the new pricing." | Review new price | Modal | DollarSign | Orange | BUSINESS RULE |
| ERR-EDGE-006 | Visit completion delayed | System sends reminder to professional | Admin notification | Push Notif | Clock | Blue | BUSINESS RULE |
| ERR-EDGE-007 | Network loss during check-in | Queue check-in, retry when online | Show pending state | Inline | WifiOff | Orange | TECHNICAL RULE |
| ERR-EDGE-008 | Patient emergency during visit | "Emergency protocol activated." | Call emergency services | Modal | Ambulance | Red | BUSINESS RULE |
| ERR-EDGE-009 | Professional location spoofing detected | "Invalid location detected for check-in." | Retry with actual GPS | Modal | MapPinOff | Red | SECURITY RULE |
| ERR-EDGE-010 | Client cancels exactly at professional arrival | "Cancellation involves penalty as professional has arrived." | Accept penalty | Modal | AlertOctagon | Red | BUSINESS RULE |

---

## 3. Empty State Design

Empty states must be engaging, informative, and provide a clear path forward.

**UI RULE**: All empty states must contain a primary Headline, Supporting Text, and a Visual (Lucide Icon).
**UI RULE**: Use subtle gray tones for visuals to indicate absence, paired with primary brand color buttons for CTAs.

### 3.1 Client Empty States
*Context: Client Portal*

| Empty ID | Context | Headline | Supporting Text | Visual | Primary CTA | Secondary CTA | Rule Type |
|---|---|---|---|---|---|---|---|
| EMPTY-CLT-001 | No search results | "No professionals found" | "Try adjusting your filters or expanding your search area." | SearchX | Adjust Filters | Clear All Filters | UI RULE |
| EMPTY-CLT-002 | No bookings | "No bookings yet" | "Your booking history will appear here once you book your first service." | Calendar | Find Care | - | UI RULE |
| EMPTY-CLT-003 | No notifications | "All caught up!" | "You'll be notified about booking updates and important messages." | Bell | - | - | UI RULE |
| EMPTY-CLT-004 | No reviews given | "No reviews yet" | "After a completed visit, you can share your feedback." | Star | View Past Bookings | - | UI RULE |
| EMPTY-CLT-005 | No saved patients | "No care recipients added" | "Add the people you're booking care for." | UserPlus | Add Care Recipient | - | UI RULE |
| EMPTY-CLT-006 | Empty Cart/Checkout | "Your booking is empty" | "Select a service to get started." | ShoppingCart | Browse Services | - | UI RULE |
| EMPTY-CLT-007 | No saved locations | "No addresses saved" | "Add your home or other locations for faster booking." | Home | Add Address | - | UI RULE |
| EMPTY-CLT-008 | No payment methods | "No payment methods" | "Add a card to quickly pay for your bookings." | CreditCard | Add Payment Method | - | UI RULE |
| EMPTY-CLT-009 | No chat messages | "No messages" | "Your conversations with professionals will appear here." | MessageSquare | - | - | UI RULE |
| EMPTY-CLT-010 | No preferred pros | "No preferred professionals" | "Star professionals after a visit to save them here." | Heart | Browse Professionals | - | UI RULE |

### 3.2 Professional Empty States
*Context: Professional App / Portal*

| Empty ID | Context | Headline | Supporting Text | Visual | Primary CTA | Secondary CTA | Rule Type |
|---|---|---|---|---|---|---|---|
| EMPTY-PRO-001 | No job requests | "No new requests" | "New job requests will appear here when clients book services in your area." | Briefcase | Update Availability | - | UI RULE |
| EMPTY-PRO-002 | No upcoming visits | "No upcoming visits" | "Accepted bookings will appear here once you're assigned to a job." | Calendar | View Job Requests | - | UI RULE |
| EMPTY-PRO-003 | No earnings | "No earnings yet" | "Your earnings will be shown here after you complete your first visit." | Wallet | Find Jobs | - | UI RULE |
| EMPTY-PRO-004 | No reviews received | "No reviews yet" | "Client reviews will appear here after your completed visits." | Star | - | - | UI RULE |
| EMPTY-PRO-005 | KYC not started | "Verification not started" | "Submit your credentials to start accepting jobs on the platform." | ShieldAlert | Start Verification | - | UI RULE |
| EMPTY-PRO-006 | No skills listed | "No skills added" | "Add your specialties to match with relevant job requests." | Award | Add Skills | - | UI RULE |
| EMPTY-PRO-007 | Availability empty | "Availability not set" | "Let clients know when you can work by setting your schedule." | Clock | Set Schedule | - | UI RULE |
| EMPTY-PRO-008 | No timesheets | "No timesheets to submit" | "Completed shifts for organizations will appear here." | FileText | - | - | UI RULE |
| EMPTY-PRO-009 | Empty compliance | "No compliance docs" | "Upload your licenses and certificates to stay compliant." | FileCheck | Upload Documents | - | UI RULE |
| EMPTY-PRO-010 | No notifications | "You're all set" | "Check back later for new job alerts or updates." | BellOff | - | - | UI RULE |

### 3.3 Admin Empty States
*Context: Admin Dashboard*

| Empty ID | Context | Headline | Supporting Text | Visual | Primary CTA | Secondary CTA | Rule Type |
|---|---|---|---|---|---|---|---|
| EMPTY-ADM-001 | No pending KYC | "Verification queue is clear" | "All professional verifications are up to date." | ShieldCheck | - | - | UI RULE |
| EMPTY-ADM-002 | No open tickets | "No open tickets" | "All support tickets have been resolved." | CheckCircle | - | - | UI RULE |
| EMPTY-ADM-003 | No unassigned bookings | "All bookings are assigned" | "There are no bookings waiting for professional assignment." | CheckCircle | View All Bookings | - | UI RULE |
| EMPTY-ADM-004 | No active disputes | "No disputes" | "There are currently no disputed bookings or payments." | Scale | - | - | UI RULE |
| EMPTY-ADM-005 | No flagged users | "No flagged accounts" | "No users have been reported or flagged by the system." | FlagOff | - | - | UI RULE |
| EMPTY-ADM-006 | Empty audit log | "No activity logs" | "System activities will be recorded here." | Activity | - | - | UI RULE |
| EMPTY-ADM-007 | No payout batches | "No pending payouts" | "All professional payments have been processed." | Banknote | View Processed Payouts | - | UI RULE |
| EMPTY-ADM-008 | No platform alerts | "System is healthy" | "No active system alerts or degraded services." | Activity | - | - | UI RULE |
| EMPTY-ADM-009 | Empty role list | "No custom roles" | "Create roles to manage staff permissions." | Users | Create Role | - | UI RULE |
| EMPTY-ADM-010 | No organizations | "No registered organizations" | "Hospital and clinic partners will appear here." | Building | Invite Organization | - | UI RULE |

### 3.4 Organization Empty States
*Context: Organization / Hospital Portal*

| Empty ID | Context | Headline | Supporting Text | Visual | Primary CTA | Secondary CTA | Rule Type |
|---|---|---|---|---|---|---|---|
| EMPTY-ORG-001 | No staffing requests | "No active requests" | "Create a staffing request to hire professionals." | FilePlus | Create Request | - | UI RULE |
| EMPTY-ORG-002 | No active shifts | "No active shifts" | "Confirmed professional shifts will appear here." | CalendarDays | View Requests | - | UI RULE |
| EMPTY-ORG-003 | No pending timesheets | "All timesheets approved" | "No professional timesheets require your approval right now." | FileCheck | - | - | UI RULE |
| EMPTY-ORG-004 | No locations | "No facilities added" | "Add your clinic or hospital locations." | Building2 | Add Location | - | UI RULE |
| EMPTY-ORG-005 | No invoices | "No pending invoices" | "Your billing statements will appear here." | Receipt | - | - | UI RULE |

---

## 4. Loading State Design

**UI RULE**: Prefer skeleton screens over spinners for layout-heavy components.
**UI RULE**: Use a consistent gradient sweep animation for skeletons (1.5s linear infinite).
**UI RULE**: Never use full-screen blocking spinners unless processing a critical transaction (e.g., payment, checkout submission).

### 4.1 Skeleton Patterns

| Component | Skeleton Description | Visual Layout |
|---|---|---|
| Professional Card | Gray rectangle (avatar) + 3 gray lines (name, category, rating) + button placeholder | `[Avatar Box] [---] [---] [--] [Button Box]` |
| KPI Card | Large gray number + small gray label | `[Large Text Block] [Small Text Block]` |
| Table Row | Gray blocks matching column widths, 5 rows visible | `[--] [----] [---] [-----] [--]` x5 |
| Profile Header | Circle (avatar) + 2 wide lines + 1 short line | `(O) [----------] [------] [---]` |
| Booking Timeline | Vertical gray line + 4 circle markers + gray text blocks | `| ( ) [----] | ( ) [----]` |
| Service Card | Gray rectangle (image) + 2 lines + button | `[Image Box] [----] [--] [Button]` |
| Search Results | 4 professional card skeletons stacked vertically | 4x Professional Card layout |
| Map | Gray rectangle with subtle pin markers | `[Large Rectangle Map Base]` |
| Chart | Gray rectangle with axis lines | `[Axes Lines] [Wavy Block]` |
| Chat Thread | Alternating left/right text bubble skeletons | `[Left Bubble] [Right Bubble]` |
| Document Preview | Large portrait gray rectangle | `[A4 Proportion Block]` |
| Settings Form | Label blocks + Input block skeletons | `[Label] [Input Box]` x4 |

### 4.2 Loading Behavior

| Context | Loading Pattern | Interaction Allowed |
|---|---|---|
| Page load | Full skeleton layout | None (navigation only) |
| Data refresh | Skeleton overlay on existing content | None on the specific component |
| Button action | Inline spinner in button, button disabled | No (button disabled) |
| Form submission | Button loading state + disabled form inputs | No (form locked) |
| File upload | Progress bar + percentage | Cancel upload |
| Search | Results area skeleton (debounce 300ms) | Change search terms |
| Pagination | Next page skeleton appended / replaced | No |
| Drawer open | Drawer skeleton while content fetches | Close drawer |
| Payment processing | Full screen modal with Lottie animation | NONE (Back button intercepted) |
| Map panning | Shimmering placeholder blocks for new pins | Pan / Zoom map |

**TECHNICAL RULE**: Skeletons should only render if data fetch exceeds 200ms to prevent UI flicker on fast networks.

---

## 5. Confirmation Dialog Design

**UI RULE**: Destructive actions must require explicit confirmation.
**UI RULE**: The confirmation button must describe the action (e.g., "Delete User", not "OK").
**UI RULE**: Use Status Colors for the confirm button (Red = Danger, Blue/Teal = Primary, Yellow = Warning).

For each destructive/important action, define:

| Action | Title | Message | Consequences | Requires Reason | Cancel Label | Confirm Label | Confirm Style | Role |
|---|---|---|---|---|---|---|---|---|
| Reject KYC | Reject Verification | "This will reject [Name]'s verification. They will be notified with your reason." | Professional cannot accept jobs | Yes (required) | Cancel | Reject Verification | Danger (Red) | Admin |
| Suspend Professional | Suspend Professional | "This will immediately suspend [Name]. Active bookings are affected." | Active bookings need reassignment | Yes (required) | Cancel | Suspend | Danger (Red) | Admin |
| Cancel Booking | Cancel Booking | "This booking will be cancelled. [Cancellation policy if applicable]" | Client refund per policy | Optional | Keep Booking | Cancel Booking | Danger (Red) | Client/Pro |
| Process Refund | Process Refund | "₹[Amount] will be refunded to [Name]'s original payment method." | Financial record created | Yes (required) | Cancel | Process Refund | Warning (Yellow) | Admin |
| Process Payout | Process Batch Payout | "[N] payouts totaling ₹[Amount] will be processed. Cannot be undone." | Financial records created | No | Cancel | Process Payouts | Primary (Teal)| Admin |
| Delete Service | Delete Service | "This will remove [Service] from the platform. Existing bookings are safe." | Service no longer available | No | Cancel | Delete Service | Danger (Red) | Admin |
| Deactivate Account | Deactivate Account | "This account will be permanently deactivated. Immediate loss of access." | Irreversible | Yes (required) | Cancel | Deactivate | Danger (Red) | Admin |
| Close Support Ticket | Close Ticket | "This will close support ticket #[ID]. The user will be notified." | Ticket marked resolved | No | Cancel | Close Ticket | Primary (Blue) | Admin |
| Modify Pricing | Update Pricing | "This will update pricing for [Service]. Changes apply to future bookings." | Affects future pricing | No | Cancel | Update Pricing | Primary (Teal)| Admin |
| Revoke Org Access | Revoke Access | "This removes [User]'s access to [Organization]. They will be logged out." | User loses org permissions | No | Cancel | Revoke Access | Danger (Red) | Org Admin |
| Approve Timesheet | Approve Timesheet | "Approving this timesheet will initiate billing for [Amount] hours." | Financial obligation | No | Cancel | Approve | Primary (Teal)| Org Admin |
| Report User | Report [User] | "Please provide details on why you are reporting this user." | Admin review triggered | Yes (required) | Cancel | Submit Report | Warning (Yellow)| Client/Pro |

**BUSINESS RULE**: Actions marked "Danger" involving financial transactions or account suspensions MUST generate an audit log entry visible to Super Admins.

---

## 6. Success State Design

Positive reinforcement is crucial for a trustworthy healthcare platform.

**UI RULE**: Keep success messages concise. Do not overwhelm the user.
**UI RULE**: Use green/teal accents and Lucide CheckCircle or PartyPopper icons.

| Context | Feedback | Duration | Action / Next Steps |
|---|---|---|---|
| Booking confirmed | Full-screen success with Lottie + booking summary + next steps | Persistent | "View Booking", "Back to Home" |
| Payment successful | Toast + booking status update | Toast: 5s | Status changes to Paid |
| KYC approved | Status banner update + congratulations toast | Toast: 5s | Banner disappears |
| Review submitted | Toast "Thank you for your feedback" | Toast: 4s | Modal closes |
| Payout processed | Toast + table status update | Toast: 5s | Status changes to Processed |
| Professional accepted job | Status card update + client notification sent indicator | Persistent | Card moves to "Upcoming" |
| Visit completed | Completion screen with summary + earnings | Persistent | "Go to Dashboard" |
| Document uploaded | Inline checkmark + filename displayed | Persistent | Next step enabled |
| Profile updated | Toast "Profile saved successfully" | Toast: 3s | - |
| Password changed | Toast "Password updated securely" + forced logout (optional) | Toast: 4s | - |
| Ticket resolved | Toast "Ticket marked as resolved" | Toast: 3s | Ticket moves to "Closed" |
| Shift confirmed | Toast "Shift confirmed and assigned" | Toast: 5s | Shift moves to active roster |

---

## 7. ASSUMPTIONS & OPEN DECISIONS

- **ASSUMPTION**: Wallet top-up functionality is supported in some regions and subject to specific payment gateway rules.
- **ASSUMPTION**: Organization budget limits and checks are enforced prior to booking confirmation (requires backend integration).
- **ASSUMPTION**: Refund processing is an Admin-only action and relies on the payment gateway's API capabilities.
- **OPEN DECISION**: How long should a Professional have to accept a "Requested" job before the ERR-BKG-006 (Expired job request) state is triggered? (Recommended: 15-30 minutes for urgent, 24 hours for scheduled).
- **OPEN DECISION**: Does the "Network disconnected" banner completely block app usage, or allow offline read-only access to cached data (like upcoming schedules)?
- **OPEN DECISION**: For "Approve Timesheet" confirmations, should digital signatures be required? (Security/Compliance review needed).

*(End of Error Handling, Edge Case, Loading State, Empty State, and Confirmation UX Matrix)*
