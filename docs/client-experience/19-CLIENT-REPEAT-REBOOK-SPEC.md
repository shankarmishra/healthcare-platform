# CareConnect Client Experience Specification: Repeat & Rebooking Flow

**Document ID:** CC-UX-19
**Status:** IMPLEMENTATION-READY
**Author:** Senior UX/UI Planning Team
**Target Audience:** Frontend Developers, QA Engineers, Product Managers
**Version:** 1.0.0

## Overview
This document outlines the flows for clients who require ongoing, repeated, or recurring care. Because healthcare staffing often involves building trust between a patient and a specific care provider, the platform must make it exceptionally easy to rebook the same service, request the same staff, and manage recurring schedules.

---

## 1. Quick Rebook Flow

The Quick Rebook feature minimizes friction for users who need the exact same service again.

### 1.1 Entry Points
- **Dashboard:** "Recent Services" section features a "Book Again" button next to recent cards.
- **Booking Details Page (Completed):** A prominent "Book Again" primary CTA.
- **My Bookings (List View):** A rebook icon (circular arrow) next to completed bookings.

### 1.2 The "Fast-Forward" Wizard
When "Book Again" is clicked, the system bypasses the initial wizard steps.
- **Pre-filled Data:**
  - Service Type (e.g., "12-Hour Attendant")
  - Patient Details (Name, Age, Gender, Medical Conditions)
  - Service Address
- **Starting Point:** The wizard opens directly at **Step 5: Date & Time Selection**.
- **User Action:** The client only needs to select the new date/time, review the summary, and pay.
- **Editability:** A top banner says: "Rebooking based on Booking #123. [Edit Patient or Address]" which allows them to jump back if they need to change something.

---

## 2. Request Same Staff Preference

Continuity of care is a premium feature for the CareConnect brand.

### 2.1 Triggering the Request
- **During Review:** If a client rates a staff member 4 or 5 stars, an option appears: "Save [Staff Name] to your preferred care team."
- **During Quick Rebook:** 
  - A toggle appears on the Date & Time step: `[Toggle] Request [Staff Name] again`.
  - *Helper Text:* "We will prioritize assigning [Staff Name] to this booking. If they are unavailable, we will assign another highly qualified professional."

### 2.2 System Handling
- **Not Guaranteed:** The UI must clearly communicate that specific staff cannot be 100% guaranteed due to scheduling/leaves.
- **Alternative Assignment Notification:**
  - If the requested staff is unavailable, the client receives a notification: "Update: [Staff Name] is unavailable for your selected dates. We have assigned [New Staff Name], who has been briefed fully on your care requirements."

### 2.3 "My Care Team" Page (Future Phase)
- A dedicated section under Profile where clients can view their preferred staff, see their availability, and initiate bookings directly from the staff profile.

---

## 3. Recurring Care Management

For chronic care, elderly care, or long-term physiotherapy, clients need to set up "subscribe and forget" schedules.

### 3.1 Setup in Booking Wizard
- **Step 5 (Date & Time):** Introduce a "Repeat this booking" toggle.
- **Options:**
  - Daily
  - Weekly (Select days: M T W T F S S)
  - Custom interval
- **End Date:** "Until [Date]" or "After [X] sessions".

### 3.2 Recurring Booking Management Page
- **Navigation:** `Dashboard` > `Recurring Care`
- **UI Presentation:** A list of active subscriptions.
- **Card Details:**
  - Service Name
  - Schedule (e.g., "Every Monday and Thursday at 10:00 AM")
  - Upcoming session date.
- **Actions Menu:**
  - **Pause Care:** Temporarily halt generation of new bookings (e.g., patient is hospitalized).
  - **Resume Care:** Restart the schedule.
  - **Modify Schedule:** Change days/times for future bookings.
  - **Cancel Recurring Booking:** Stop all future occurrences (prompts for confirmation).

### 3.3 Billing for Recurring Care
- Weekly consolidated billing or pre-paid wallet deduction.
- **UI Notification:** "Invoice for the upcoming week generated. Auto-pay scheduled for [Date]."

---

## 4. Care Packages (Pre-defined Bundles)

Instead of individual bookings, clients can buy structured, multi-day packages at a discounted rate.

### 4.1 Package Selection
- **Location:** Service Detail Page (e.g., "Post-Surgery Care")
- **Options:**
  - Pay Per Visit (Standard price)
  - 7-Day Package (10% discount)
  - 15-Day Package (15% discount)
  - 30-Day Package (20% discount)

### 4.2 Package Progress Tracker
- **Dashboard UI:** A specialized progress card replaces the standard upcoming booking card.
- **Visuals:** A horizontal timeline or circular progress indicator.
  - Text: "Session 4 of 15 Completed"
  - "Next session: Tomorrow at 9 AM"
- **Flexibility:** Client can click "Reschedule" for individual sessions within the package without affecting the rest, subject to the 24-hour notice policy.

---

## 5. Past Bookings as Templates

For power users managing care for multiple family members.

### 5.1 Concept
- Every completed booking acts as a saved template.
- Under `My Bookings` > `Past Bookings`, an action "Save as Template" is available.

### 5.2 Template Execution
- Client goes to a new `Templates` tab.
- Clicks a template named "Grandpa's Weekly Physio".
- Instantly generates a draft booking with all 10 steps pre-filled based on the historical data.
- Client reviews the final summary screen and clicks "Confirm & Pay".

---

## 6. UI States & Validation Logic

- **Validation Error - Service Discontinued:** If a client tries to Quick Rebook a service that is no longer offered by CareConnect, show a modal: "This specific service is no longer available. Please browse our current catalog."
- **Validation Error - Location Unserviceable:** If the client's saved address is no longer in the serviceable NCR zones, halt the rebook flow at the address step with a clear error.
- **Empty States:** 
  - *Recurring Care:* "You don't have any ongoing care schedules. Set up recurring care during your next booking."
  - *Templates:* "Save time by creating templates from your past bookings."

## 7. Performance Considerations
- The API call to fetch template data or "Quick Rebook" pre-fill data must be highly optimized, fetching patient, address, and service data in a single aggregate query to ensure the wizard loads instantly.

---
*End of Specification CC-UX-19*
