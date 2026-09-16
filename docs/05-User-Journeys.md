# 05 - User Journeys: Healthcare Staffing & Home Care Platform

## Document Overview
This document outlines the detailed step-by-step user journeys for the 4 primary roles in the Healthcare Staffing & Home Care Platform, along with critical edge cases.

**Platform Constraints & Rules Applied:**
- **UI RULE**: Light theme ONLY. Brand colors: Healthcare Teal #0EA5A4, Medical Blue #2563EB. Primary text: #0F172A (never pure #000000). Font: Manrope (Inter fallback). Icons: Lucide React only.
- **ASSUMPTION**: Real payment gateway, exact payout mechanics, specific legal claims, specific medical procedures, GPS live tracking, escrow, and production regulatory compliance are assumed to be handled by third-party integrations or validated separately.
- **BUSINESS RULE**: Production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, employment classification, and local regulatory requirements require separate validation.

---

## Journey 1: CLIENT BOOKING JOURNEY

This journey covers the end-to-end process of a patient (or their family member) booking a home care service.

| Step # | Action | Screen | Information Displayed | System Response | Emotional State | Potential Friction | Required Feedback | Next Step |
|---|---|---|---|---|---|---|---|---|
| 1 | Arrives at homepage | Landing Page | Hero banner, value proposition, trust badges, service categories, search bar. | Logs anonymous session analytics. | Hopeful, seeking help | Overwhelmed if too much text. | Hover states on service cards. | Explores services |
| 2 | Explores services | Services Directory | List of available services: Home Nursing, Caregiver, Physiotherapy, Doctor Visit, Specialized Care. | Fetches active services from CMS. | Curious, evaluating options | Unclear service definitions. | Clear loading states. | Chooses a service category |
| 3 | Chooses a service category | Service Details | Service description, what to expect, pricing estimates, FAQ. | Records selection context for booking flow. | Confident in choice | Pricing seems too high or vague. | Smooth transition to booking. | Enters location/address |
| 4 | Enters location/address | Search / Location | Map interface or address autocomplete input field. | Queries location API to validate service radius. | Focused | Address not found or outside service area. | Validation success/error message. | Sets date and time preferences |
| 5 | Sets date and time preferences | Search / Scheduling | Calendar widget, time slots, duration options. | Filters availability database based on location & time. | Planning-oriented | Desired time slot is unavailable. | Highlights available slots. | Views search results |
| 6 | Views search results | Search Results | List of verified professionals, filters (rating, gender, language). | Runs matching algorithm to fetch eligible professionals. | Relieved to see options | Too few results; cognitive load if too many. | Lazy loading or pagination. | Compares professionals |
| 7 | Compares professionals | Search Results | Badges (verified), star ratings, hourly rates, distance. | Updates sort order based on user selection. | Analytical | Difficulty comparing specific credentials. | Active state on selected filters. | Views professional profile |
| 8 | Views professional profile in detail | Professional Profile | Full bio, verified credentials, patient reviews, language skills. | Fetches detailed profile data. | Reassured, building trust | Missing information (e.g., specific experience). | Skeleton loaders during fetch. | Initiates booking |
| 9 | Initiates booking | Booking Initiation | "Book Now" CTA, summary of selection. | Creates Draft booking state. | Decisive | Accidental clicks. | Haptic/Visual confirmation of click. | Provides patient details |
| 10 | Provides patient details | Patient Information Form | Form fields (Name, Age, Gender, Medical History, Chief Complaint). | Saves data to Draft booking; validates input. | Protective, cautious | Form is too long or intrusive. | Inline validation (green checkmarks). | Confirms service type |
| 11 | Confirms service type and duration | Booking Summary | Selected service, scheduled time, duration, patient info summary. | Updates Draft booking state. | Reviewing, attentive | Needs to make a change but can't find "Back". | Clear edit buttons next to sections. | Reviews pricing breakdown |
| 12 | Reviews pricing breakdown | Checkout | Line items: Base rate, taxes, platform fee, total amount. | Calculates final pricing including dynamic fees. | Price-conscious | Unexpected fees causing cart abandonment. | Transparent tooltips explaining fees. | Selects payment method |
| 13 | Selects payment method and pays | Checkout / Payment Gateway | Credit card input, saved cards, digital wallets. | **ASSUMPTION**: Integrates with Stripe/Braintree to authorize payment. Transitions to Requested state. | Anxious (standard for payments) | Payment failure; security concerns. | Secure payment badges, processing spinner. | Receives confirmation |
| 14 | Receives booking confirmation | Success Page | Booking ID, Professional details, "What's Next" instructions. | Transitions to Assigned (or Matching) state. Sends email/SMS. | Relieved, satisfied | Delay in receiving confirmation email. | Confetti animation, clear success message. | Tracks visit status |
| 15 | Tracks visit status | Active Booking Dashboard | Status timeline: Assigned -> On The Way -> Checked In -> In Progress. | **ASSUMPTION**: GPS tracking is simulated via status updates, not live mapping. | Anticipatory | Professional is late; lack of communication. | Real-time status badge updates. | Visit completed |
| 16 | Visit completed | Active Booking Dashboard | Status changes to Completed. Prompt for review. | Transitions booking to Payment Pending/Closed. | Grateful | Professional forgets to check out. | Notification badge for pending review. | Leaves review |
| 17 | Leaves review | Review Modal | Star rating input (1-5), text area for feedback, private feedback toggle. | Saves review to database, updates professional's aggregate score. | Reflective | Modal is buggy or dismisses accidentally. | Success toast upon submission. | Contacts support (optional) |
| 18 | Contacts support if issue | Support / Help Center | FAQs, Chatbot, "Create Ticket" form. | Generates support ticket mapped to booking ID. | Frustrated (if issue occurred) | Long wait times for response. | Ticket ID provided, expected SLA mentioned. | End of journey |

---

## Journey 2: PROFESSIONAL LIFECYCLE JOURNEY

This journey covers the onboarding, scheduling, and earning processes for Healthcare Professionals (Nurses, Caregivers, etc.).

| Step # | Action | Screen | Information Displayed | System Response | Emotional State | Potential Friction | Required Feedback | Next Step |
|---|---|---|---|---|---|---|---|---|
| 1 | Discovers platform | Careers / Professional Landing | Benefits of joining, earning potential, flexible hours, requirements. | Tracks referral source. | Curious, seeking opportunity | Unclear requirements. | Engaging hover effects on benefits. | Registers account |
| 2 | Registers account | Signup Form | Email, password, phone number, role selection. | Creates user account (Role: Professional). Status: Not Started. | Motivated | Phone number validation fails. | Password strength indicator. | Fills professional profile |
| 3 | Fills professional profile | Onboarding Wizard (Step 1) | Fields for basic info, qualifications, years of experience, services offered. | Saves profile data. Status changes to Draft. | Focused | Doesn't have information readily available. | Progress bar (e.g., "Step 1 of 3"). | Submits KYC documents |
| 4 | Submits KYC documents | Onboarding Wizard (Step 2) | Document upload areas (ID, Medical License, Background Check). | **SECURITY RULE**: Encrypts uploads. Changes KYC State to Submitted. | Cautious (privacy concerns) | File size too large; format not supported. | Upload progress bar, success thumbnail. | Waits for verification |
| 5 | Waits for verification | Professional Dashboard | "Verification Pending" banner. Limited dashboard access. | Enqueues profile for Admin review. | Impatient | Lack of clarity on wait time. | Estimated review time displayed. | Receives KYC approval |
| 6 | Receives KYC approval | Email / Dashboard | "Congratulations! You are verified." Full dashboard unlocked. | Changes KYC State to Approved. Unlocks scheduling. | Excited, validated | (If rejected) Frustrated; needs clear reason to re-upload. | Dismissible success banner. | Sets availability |
| 7 | Sets availability & radius | Schedule Settings | Calendar grid (recurring/custom), distance slider. | Saves availability rules and geofence radius. | Empowered | UI for recurring schedules is confusing. | Visual confirmation of saved slots. | Goes online |
| 8 | Goes online | Dashboard Header | Toggle switch (Offline / Online). | Updates real-time presence state. | Ready to work | Forgets to go online. | Status indicator changes to green. | Receives job request |
| 9 | Receives job request | Push Notification / Modal | "New Job Request!" with countdown timer (e.g., 60s). | **BUSINESS RULE**: Locks request for this user temporarily. | Adrenaline, urgency | Misses notification due to OS settings. | Sound alert, visual pulsing. | Reviews job details |
| 10 | Reviews job details | Request Details | Service type, patient age, distance, duration, estimated earnings. | Keeps timer running. | Evaluative | Not enough clinical info provided. | Clear layout highlighting key data. | Accepts job |
| 11 | Accepts job | Request Details | "Accept" button. | Transitions booking to Accepted. Sends notification to client. | Committed | Timer expires before clicking. | Button transforms to loading state. | Travels to location |
| 12 | Travels to location | Job Itinerary | Patient address, map link (Google Maps integration), "On the Way" button. | Updates booking state to On The Way. | Focused on transit | Cannot find the location. | Prompts to use default map app. | Checks in |
| 13 | Checks in at location | Job Itinerary | "Check In" button. | **ASSUMPTION**: May use basic geolocation validation. State: Checked In. | Professional | No internet connection at client's home. | Offline mode queueing for status update. | Performs care visit |
| 14 | Performs care visit | Active Visit View | Patient care plan, notes section, emergency contacts. | Logs timestamps. State: In Progress. | Engaged, empathetic | Needs to record a vital sign but UI is buried. | Easy access to quick-log buttons. | Completes visit |
| 15 | Completes visit (Check out) | Active Visit View | "Complete Visit" button, optional shift report form. | Transitions booking to Completed. Generates billing record. | Relieved, accomplished | Forgets to hit check-out. | Summary modal of hours logged. | Earnings reflected |
| 16 | Earnings reflected | Earnings Dashboard | Daily/Weekly earnings chart, pending vs. available funds. | Triggers financial ledger update. | Satisfied | Discrepancy in expected vs. actual pay. | Tooltip showing fee breakdown. | Receives payout |
| 17 | Receives payout | Wallet / Payouts | "Withdraw Funds" or automated weekly transfer log. | **ASSUMPTION**: Triggers third-party payout API. | Rewarded | Transfer delayed by bank. | Status badge (Processing, Sent, Failed). | Reads client review |
| 18 | Reads client review | Profile / Reviews | Star rating and comment from recent visit. | Updates average rating. | Reflective | Unfair negative review. | Option to "Flag for Admin Review". | End of journey |

---

## Journey 3: ADMIN OPERATIONS JOURNEY

This journey covers the daily operations of an internal platform administrator handling verifications, matching issues, and support.

| Step # | Action | Screen | Information Displayed | System Response | Emotional State | Potential Friction | Required Feedback | Next Step |
|---|---|---|---|---|---|---|---|---|
| 1 | Logs into dashboard | Admin Login | Email, Password, MFA token input. | Authenticates user. **SECURITY RULE**: Checks Admin role. | Neutral | MFA token expires. | Clear error for invalid credentials. | Reviews KPI alerts |
| 2 | Reviews KPI alerts | Admin Dashboard | Widgets: Pending KYC (12), Unassigned Bookings (3), Open Tickets (5). | Fetches real-time aggregate data. | Attentive | Data takes too long to load. | Skeleton loaders for widgets. | Opens KYC queue |
| 3 | Opens KYC queue | Verification Center | Data table of professionals in "Submitted" state. | Fetches list sorted by submission date. | Focused on task | Table is cluttered. | Hover row highlighting. | Inspects documents |
| 4 | Inspects documents | Side Drawer | Split view: Profile data on left, Document viewer (PDF/Image) on right. | Loads decrypted files into viewer. | Analytical | Document is blurry or unsupported format. | Zoom/Rotate controls for viewer. | Approves or rejects |
| 5 | Approves or rejects | Side Drawer | "Approve" / "Reject" buttons. Rejection requires selecting a reason code. | Updates KYC State. Triggers email to Professional. | Decisive | Forgets to add context to rejection. | Disables Reject button until reason is selected. | Monitors live bookings |
| 6 | Monitors live bookings | Operations Map / List | Grid of active bookings, color-coded by state (e.g., Red for delayed). | Polls for real-time status updates. | Vigilant | Too many status changes causing visual noise. | Flashing indicator for critical state changes. | Handles exception |
| 7 | Handles matching exception | Booking Details | Alert: "No eligible professional found for Booking #1024". | Halts automated matching. Status: Exception. | Problem-solving | Cannot override system easily. | Clear CTA: "Assign Manually". | Manually assigns |
| 8 | Manually assigns | Manual Assignment Modal | List of professionals slightly outside radius or criteria. | Bypasses standard rules. Transitions to Assigned. | Resourceful | Assigned professional rejects the manual push. | Confirmation toast: "Assigned to [Name]". | Reviews payments |
| 9 | Reviews transactions | Financial Ledger | List of completed bookings in Payment Pending state. | Fetches transaction logs. | Detail-oriented | Discrepancy in platform fee calculation. | Export to CSV option. | Processes batch payouts |
| 10 | Processes batch payouts | Payouts | "Run Weekly Payouts" button, summary of total funds to disburse. | **ASSUMPTION**: Executes batch script to payment gateway. | Cautious (handling money) | Gateway API timeout. | Progress bar (e.g., "Processing 45/100"). | Handles support ticket |
| 11 | Handles escalated ticket | Support Center | Client message: "Professional didn't show up." Booking context attached. | Opens internal chat/log. | Empathetic/Firm | Hard to find professional's contact info. | Quick-copy buttons for phone numbers. | Generates report |
| 12 | Generates weekly report | Reports | Date range picker, report type (Operations, Financial). | Compiles PDF/CSV asynchronously. | Accomplished | Large report crashes browser. | "Report generating, we will email you" message. | End of journey |

---

## Journey 4: ORGANIZATION STAFFING JOURNEY

This journey covers B2B clients (e.g., Hospitals, Care Homes) requesting multiple professionals for shift work.

| Step # | Action | Screen | Information Displayed | System Response | Emotional State | Potential Friction | Required Feedback | Next Step |
|---|---|---|---|---|---|---|---|---|
| 1 | Manager logs in | Org Portal Login | Corporate branding, SSO login options. | Authenticates Org Manager role. | Task-oriented | SSO configuration issue. | Redirecting spinner. | Creates staffing request |
| 2 | Creates request | New Staffing Request | Form: Role (e.g., RN), Quantity (5), Shift (Night), Dates, Requirements. | Creates Draft Request object. | Focused | Complex shift patterns are hard to input. | Dynamic form fields based on selection. | Reviews candidates |
| 3 | Reviews candidates | Candidate Pool | Platform-suggested professionals matching the request criteria. | Runs batch matching algorithm. | Evaluative | Suggested candidates lack specific ward experience. | Badges showing match percentage (e.g., "95% Match"). | Confirms shift assignments |
| 4 | Confirms assignments | Roster Builder | Drag-and-drop interface assigning professionals to specific shift slots. | Updates state to Assigned for all selected professionals. | Organized | Accidental double-booking. | UI warning: "Candidate already booked". | Manages weekly roster |
| 5 | Manages weekly roster | Roster View | Calendar view of the week, showing filled and unfilled shifts. | Saves roster state. | Confident | Hard to see overview on small screens. | Responsive horizontal scrolling. | (Professional works) |
| 6 | Professional works | (Offline/Platform) | System receives check-in/out signals from assigned professionals. | Updates timesheets automatically. | - | Professional forgets to log time. | - | Approves timesheet |
| 7 | Approves timesheet | Timesheet Review | List of hours worked by each professional, variance from scheduled. | Changes status to Approved. Generates billing line items. | Diligent | Disputes over hours worked. | Ability to edit hours (with comment). | Reviews billing |
| 8 | Reviews invoice | Billing | Consolidated monthly invoice, downloadable PDF. | Flags invoice as Viewed. | Administrative | Confusion over specific line items. | Expandable rows showing shift details. | End of journey |

---

## Journey 5: EDGE CASE JOURNEYS

These scenarios outline how the system and users handle deviations from the happy path.

### Edge Case 1: Professional Cancels Booking
1. **Trigger**: Professional clicks "Cancel" on an Accepted booking due to an emergency.
2. **System Response**: System prompts Professional for a mandatory cancellation reason. Booking state transitions to Cancelled (by Pro).
3. **Client Notification**: Client receives immediate high-priority SMS/Email: "Your professional had to cancel. We are finding a replacement."
4. **Platform Action**: System automatically re-enters the booking into the Matching pool with bumped priority.
5. **Resolution**: A new professional is Assigned. Client receives update: "New professional assigned: [Name]."

### Edge Case 2: KYC Verification Rejected
1. **Trigger**: Admin clicks "Reject" on a submitted ID document because it is expired.
2. **System Response**: KYC State changes to Re-upload Required. System emails Professional with reason code (e.g., "Document Expired").
3. **User Action**: Professional logs in, sees red banner "Action Required: Update ID".
4. **Recovery**: Professional uploads new ID. State changes back to Submitted.
5. **Resolution**: Admin reviews new document and Approves.

### Edge Case 3: Payment Fails During Checkout
1. **Trigger**: Client clicks "Pay Now", but the bank declines the transaction (e.g., insufficient funds).
2. **System Response**: Payment gateway returns error. Booking state remains Draft.
3. **UI Display**: Inline error message in Medical Blue / Red (to contrast Light Theme): "Payment declined by your bank. Please try another card."
4. **User Action**: Client selects a different saved card or enters new details and retries.
5. **Resolution**: Payment succeeds, booking transitions to Requested.

### Edge Case 4: No Eligible Professionals Found (Matching Failure)
1. **Trigger**: Client requests a highly specialized service (e.g., rare physiotherapy) in a remote location.
2. **System Response**: Matching algorithm times out after searching radius.
3. **Client UI**: Shows message: "We're expanding our network! No immediate matches found. Our team will contact you shortly."
4. **Admin Action**: Alert triggered in Admin Dashboard. Admin manually searches offline roster or contacts partner agencies.
5. **Resolution**: Admin manually assigns a professional (overriding standard radius constraints) or cancels the request and refunds the client.

### Edge Case 5: Client Disputes Completed Booking
1. **Trigger**: Professional checks out. Client receives notification but feels the professional left 30 minutes early.
2. **User Action**: Client goes to Booking History, clicks "Report an Issue / Dispute".
3. **System Response**: Opens a text form. Client submits complaint. Booking state changes to Disputed. Payment payout to Professional is temporarily frozen.
4. **Admin Action**: Admin reviews GPS timestamps, shift notes, and client message. Contacts both parties.
5. **Resolution**: Admin resolves dispute (e.g., issues partial refund, adjusts professional payout). State changes to Closed.

---
*End of User Journeys Document*
*OPEN DECISION: Exact SLA times for Support Tickets and KYC Verification turnarounds.*
