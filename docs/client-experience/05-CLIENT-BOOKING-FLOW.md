# Client Booking Flow Specification
## Overview
The Booking Wizard is a comprehensive 10-step process guiding clients through requesting care services.

### Global Elements
*   **Progress Bar**: Top of screen. Visual stepper 1-10. Completed steps have a teal circle with a checkmark. Current step has a solid teal circle. Future steps have a slate-200 outline circle.
*   **Validation**: Clients cannot proceed to the next step until the current step is 100% valid.
*   **Draft Persistence**: Form state is saved to `localStorage` under `careconnect_booking_draft`. Auto-saves on every field change.
*   **Authentication Gate**: Step 3 (Patient) requires login. If unauthenticated, a login modal appears, blocking progression until successful.
*   **Layout**: Mobile: Stacked form. Desktop: Two-column layout (Form on left 2/3, Order Summary on right 1/3).

---

## Step 1: Service Selection
*   **Title**: Choose a Service
*   **Subtitle**: Select the type of care you need for your loved one.
*   **Fields / Inputs**:
    *   Grid of 11 Service Cards (Home Nursing, Caregiver, Physiotherapy, Doctor Visit, etc.).
    *   **Type**: Radio group presented as cards.
    *   **Validation**: Must select exactly one service.
    *   **Required**: Yes.
*   **Data Dependencies**: None.
*   **Data Output**: `serviceId` (string).
*   **Actions**: "Next" button enabled only after selection.

## Step 2: Care Requirement
*   **Title**: Describe Your Needs
*   **Subtitle**: Help us understand the patient's condition.
*   **Fields**:
    *   **Primary Condition**: Select dropdown (e.g., Post-surgery, Elderly care, Chronic illness). Required.
    *   **Mobility Status**: Radio group (Fully independent, Needs some help, Bedridden). Required.
    *   **Detailed Description**: Textarea. "Please describe specific requirements or conditions...". Optional. Max 500 chars.
*   **Validation**: Primary condition and mobility are required.
*   **Data Dependencies**: `serviceId` to tailor the Primary Condition dropdown options.
*   **Data Output**: `conditionId`, `mobilityLevel`, `description`.

## Step 3: Patient Selection
*   **Title**: Who needs care?
*   **Subtitle**: Select an existing patient or add a new one.
*   **Auth Gate**: Trigger login here if needed.
*   **Fields**:
    *   **Patient List**: Radio cards of saved patients.
    *   **Add New Patient Button**: Opens a drawer with fields: Name, Age, Gender, Relationship, Weight (optional), Medical History (textarea).
*   **Validation**: Must select or create a valid patient profile.
*   **Data Dependencies**: User ID to fetch existing patients.
*   **Data Output**: `patientId`.

## Step 4: Location
*   **Title**: Where will care be provided?
*   **Subtitle**: We currently serve Delhi NCR.
*   **Fields**:
    *   **Saved Addresses**: Radio cards of saved addresses.
    *   **Add New Address Button**: Fields: Pincode (Validates against NCR list), City (Auto-filled), State, Building/House No, Area/Street, Landmark.
*   **Validation**: Pincode must be valid NCR pincode. All address fields required except Landmark.
*   **Error Messages**: "Pincode is outside our service area."
*   **Data Output**: `addressId` or raw address object.

## Step 5: Date Selection
*   **Title**: When do you need care?
*   **Subtitle**: Select the start and end dates.
*   **Fields**:
    *   **Duration Type**: Radio (Single Day, Multiple Days, Ongoing).
    *   **Calendar Picker**: Select Start Date. Select End Date (if Multiple Days).
*   **Validation**: Start date must be at least 4 hours in the future. End date must be >= Start date.
*   **Data Output**: `startDate`, `endDate`, `durationType`.

## Step 6: Time/Shift
*   **Title**: Select Schedule
*   **Subtitle**: Choose the shift timing.
*   **Fields**:
    *   **Shift Type**: Radio (12-hour Day, 12-hour Night, 24-hour Live-in, Custom Hours).
    *   **Custom Time Picker**: (Only if Custom Hours selected) Start Time, End Time.
*   **Validation**: Custom hours must be minimum 4 hours.
*   **Data Output**: `shiftType`, `startTime`, `endTime`.

## Step 7: Staff Preferences
*   **Title**: Professional Preferences
*   **Subtitle**: Any specific requirements for the caregiver?
*   **Fields**:
    *   **Gender Preference**: Radio (No Preference, Male, Female).
    *   **Language**: Multi-select (Hindi, English, etc.).
    *   **Experience Level**: Radio (Standard, Premium - 5+ years, Expert). Note: Affects pricing.
*   **Validation**: All fields default to "No Preference" or defaults. Optional.
*   **Data Output**: `preferredGender`, `languages`, `experienceLevel`.

## Step 8: Special Requirements
*   **Title**: Special Instructions
*   **Subtitle**: Any other details we should know?
*   **Fields**:
    *   **Pets in house?**: Toggle (Yes/No).
    *   **Specific Medical Equipment Available?**: Checkboxes (Oxygen cylinder, Hospital bed, Wheelchair).
    *   **Additional Notes**: Textarea.
*   **Validation**: None (all optional).
*   **Data Output**: `hasPets`, `equipment`, `notes`.

## Step 9: Price Review
*   **Title**: Review Pricing
*   **Subtitle**: Estimated cost based on your selections.
*   **Fields (Read-only)**:
    *   Base Rate (per day/shift) x Number of days.
    *   Experience Level Premium (if any).
    *   Taxes (18% GST).
    *   Total Estimated Amount.
*   **Interactions**: "View detailed breakdown" accordion.
*   **Validation**: None. Information only.

## Step 10: Final Review
*   **Title**: Review & Confirm
*   **Subtitle**: Please check all details before submitting.
*   **Fields**:
    *   Summary cards for Service, Patient, Location, Schedule, Preferences.
    *   "Edit" button next to each summary section (routes back to specific step).
    *   Terms & Conditions Checkbox (Required).
*   **Actions**: "Submit Booking Request" (Primary CTA).
*   **Success State**: Navigates to `/client/bookings/{id}` with success toast.
*   **Error Recovery**: If API fails, show red alert banner, keep user on Step 10, allow retry.
