# Client Booking Flow Specification

## Overview
The Booking Wizard is a comprehensive 10-step Care Concierge process guiding clients through requesting home care services across Delhi, Noida, Gurugram, and Faridabad.

### Global Design & Layout Guidelines (Care Concierge Principles)
*   **DO NOT Look Like a Form**: Avoid dense 20-field layouts, small inputs, or cold administrative tables. Use large selection cards, progressive disclosure, contextual questions, live summary, contextual help, clear progress indicators, and smart defaults.
*   **Sticky Desktop Action Area**: Live summary card on right (1/3 column) tracking service, patient, location, start date, shift, and itemized subtotal.
*   **Mobile Sticky CTA Bar**: Fixed bottom bar on mobile viewports with "Continue to Step X" and cost preview.
*   **Progress Bar**: Top visual stepper (1-10) with clickable completed steps and active pulsing node.
*   **Validation & Draft Persistence**: Form state auto-saves to `localStorage` under `careconnect_b2c_booking_draft_v3`. Validation is enforced before step transitions.
*   **Authentication Gate**: Progressive late authentication triggered after Step 9 (before final submission).

---

## Step 1: Service Selection
*   **Title**: Choose a Service
*   **Subtitle**: Select the type of care you need for your loved one.
*   **Card Layout**: 11 large selection cards featuring service icon, title, short description, duration estimate, and base price tag.
*   **Validation**: Must select exactly one service.
*   **Data Dependencies**: None.
*   **Data Output**: `serviceId` (string), `serviceCategory`.

---

## Step 2: Smart Care Requirement (Contextual Questions per Service)
The wizard dynamically adapts questions based on the selected `serviceCategory` so clients are NEVER asked irrelevant questions:

### A. If Service = Home Nursing (`home_nursing`)
*   **Primary Focus**: Post-Surgery Recovery, Elderly Nursing, Chronic Illness, Wound Care, ICU Transition.
*   **Contextual Questions**:
    *   Surgical incision / Wound dressing requirements (Sterile Dressing, Sutures Removal, Drain Care).
    *   Intravenous / Injection needs (IV Antibiotics, IM Injections, Drip Management).
    *   Tube Feeding & Catheter care (Ryle's Tube, PEG Tube, Urinary Catheter Bag).

### B. If Service = Physiotherapy (`physiotherapy`)
*   **Primary Focus**: Orthopedic Rehab (Joint Replacement, Fracture), Neuro Rehab (Stroke, Parkinson's), Spine & Back Care.
*   **Contextual Questions**:
    *   Affected body area / joint (Knee, Hip, Shoulder, Spine, Post-Stroke).
    *   Weight-bearing & mobility status (Bedridden, Wheelchair, Walker, Independent).
    *   Surgeon / Physician rehabilitation protocol attached? (Yes/No).

### C. If Service = Doctor Visit (`doctor_visit`)
*   **Primary Focus**: General Physician Consultation, Geriatric Assessment, Post-Hospital Follow-up.
*   **Contextual Questions**:
    *   Primary chief complaint (Fever, Breathing issue, Medication review, General weakness).
    *   Vital signs available at home? (Blood Pressure, Oxygen SpO2, Temperature, Sugar).

### D. If Service = Caregiver / Attendant (`caregiver_attendant`)
*   **Primary Focus**: Bedside hygiene, Sponge bath, Feeding, Mobility support, Bed alarm & night supervision.

---

## Step 3: Patient Selection (`SavedPatientSelector`)
*   **Title**: Who needs care?
*   **Subtitle**: Select an existing family member or add a new patient profile.
*   **Fast Path**: Selecting a saved patient card auto-fills medical history, mobility status, allergies, and contact notes.
*   **Add Patient Drawer**: Includes Name, Relationship (Parent, Spouse, Self, Child), Age, Gender, Mobility Status, and Medical History Notes.

---

## Step 4: Location & Location Detection System (`LocationPicker`)

### Delhi NCR Service Area Matrix Validation
Validates address pincode against the active service area registry (Delhi, Noida, Gurugram, Faridabad, and configured nearby hubs).

### 13 Location System States Matrix
Every location state is explicitly specified with headline, supporting copy, visual icon/SVG, primary CTA, and animation behavior:

| State ID | Headline | Supporting Text | Visual Icon / SVG | Primary CTA | Animation Rule |
|---|---|---|---|---|---|
| **LOC-01: Idle** | "Enter Care Address" | "Type your locality, building, or pincode in Delhi NCR." | `MapPin` | "Detect My Location" | Static |
| **LOC-02: Permission Request** | "Enable Location Access" | "Allow CareConnect to detect your current locality for instant coverage check." | `Navigation` | "Allow Access" | FadeIn |
| **LOC-03: Detecting** | "Detecting your locality..." | "Communicating with GPS satellites..." | `Compass` | "Cancel" | Pulse 1.2s |
| **LOC-04: Located** | "GPS Coordinates Found" | "Latitude: 28.6139, Longitude: 77.2090." | `CheckCircle2` | "Resolve Address" | Scale bounce |
| **LOC-05: Address Resolved** | "Defence Colony, New Delhi" | "A-124, Defence Colony, Pincode 110024." | `MapPin` | "Verify Coverage" | FadeIn |
| **LOC-06: Checking Coverage** | "Verifying Service Area..." | "Checking active staff availability in Pincode 110024..." | `Loader2` | None | Spin 800ms |
| **LOC-07: Supported** | "Service Area Confirmed" | "CareConnect active hub is within 3.2 km of your location." | `ShieldCheck` | "Continue to Schedule" | Green flash |
| **LOC-08: Unsupported** | "We don't serve this area yet" | "CareConnect operates in Delhi, Noida, Gurugram & Faridabad. We are expanding soon." | `AlertCircle` | "Request Service in My Area" | Red shake |
| **LOC-09: Permission Denied** | "Location Access Blocked" | "Browser location permission was denied. Please enter your address manually." | `Lock` | "Enter Address Manually" | FadeIn |
| **LOC-10: GPS Failed** | "GPS Signal Unavailable" | "Unable to retrieve high-accuracy GPS coordinates." | `WifiOff` | "Try Again" | FadeIn |
| **LOC-11: Geocoding Failed** | "Address Lookup Issue" | "Could not map coordinates to a known street address." | `Map` | "Enter Street Address" | FadeIn |
| **LOC-12: Retrying** | "Re-connecting to GPS..." | "Attempting high-accuracy location acquisition..." | `RefreshCw` | "Cancel" | Spin 1s |
| **LOC-13: Confirmed** | "Care Location Saved" | "Defence Colony, New Delhi (Home Apartment)." | `CheckCircle` | "Continue to Step 5" | Static |

---

## Step 5: Schedule & Recurrence
*   **Title**: When do you need care?
*   **Duration Options**: Single Day Visit, Contiguous Date Range (Start/End Date picker), Weekly Recurring (Mon-Sun weekday pills with total shift counter).

---

## Step 6: Shift Selection & Overnight Date Rollover Calculator
*   **Shift Types**:
    *   12-Hour Day Shift (08:00 AM - 08:00 PM)
    *   10-Hour Night Shift (10:00 PM - 08:00 AM) — *Calculates overnight date rollover banner (e.g. 24 Sep 10:00 PM → 25 Sep 08:00 AM)*
    *   Half Day (6 Hours)
    *   24-Hour Live-in Care (Round the Clock)
    *   Per-Visit Consultation (45-60 mins)

### Availability Copy Rule
*   If a requested time slot is unavailable, the client is **NEVER** told *"Professional unavailable."*
*   **Client Language Used**: *"Those timings aren't currently available for your location. We recommend selecting another shift time or requesting a callback from our Ops Desk."*
*   **Options Presented**: Choose another time, Choose another date, Request callback.

---

## Step 7: Staff Preferences
*   Role designation dropdown (B.Sc Registered Nurse, GNM Staff Nurse, Certified Caregiver, Senior Physiotherapist).
*   Gender preference pills (Female Preferred, Male Preferred, No Preference).
*   Language tags (English, Hindi, Kannada, Tamil).

---

## Step 8: Special Requirements & Equipment Notes
*   Free-text clinical handling notes textarea.
*   Medical equipment checkboxes (Oxygen cylinder, Patient lift, Hospital bed, Wheelchair).

---

## Step 9: Transparent Price Breakdown
*   **Itemized Price Ledger**:
    *   Base Service Rate × Days × Duration
    *   Night Shift Surcharge (+20% adjustment if overnight)
    *   Statutory GST (18%)
    *   **Estimated Total Amount**
*   **Client Guidance**: Total cost explained clearly without exposing internal platform margin or commission split math.

---

## Step 10: Final Review & Operations Dispatch Simulation
*   Summary cards for Service, Patient, Location, Schedule, Shift, and Price.
*   Progressive Late Auth Modal triggered if user is guest.
*   **Post-Submission Animated Simulation**:
    *   Stage 1: *"Request Received"* (Reviewing requirements)
    *   Stage 2: *"Selecting Internal Staff"* (Automated ops dispatch)
    *   Stage 3: *"Staff Assigned & Confirmed"* (Reveals approved staff name, photo, qualification, council verification tag).
*   CTA: *"View Active Booking Timeline"* (`/client/bookings/{id}`).

---
*End of Booking Flow Specification*

