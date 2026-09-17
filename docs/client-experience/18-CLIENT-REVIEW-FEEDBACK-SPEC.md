# CareConnect Client Experience Specification: Review & Feedback System

**Document ID:** CC-UX-18
**Status:** IMPLEMENTATION-READY
**Author:** Senior UX/UI Planning Team
**Target Audience:** Frontend Developers, QA Engineers, Product Managers
**Version:** 1.0.0

## Overview
This document specifies the Review and Feedback system from the client's perspective. For CareConnect, feedback is vital for maintaining premium care standards. The review flow is designed to be frictionless, encouraging high completion rates while capturing granular data about specific aspects of care (punctuality, hygiene, clinical skill).

---

## 1. Review Trigger Mechanisms

Reviews must be solicited at exactly the right moment to ensure high response rates without annoying the client.

### 1.1 Trigger Event
- The system listens for the `BOOKING_STATUS_CHANGED` event.
- When a booking status changes to `COMPLETED` (marked by the care provider or operations team), the review trigger is activated.

### 1.2 Notifications
- **Immediate (Push/In-App):** As soon as status is `COMPLETED`, send:
  - *Title:* "Care completed. How was your experience?"
  - *Body:* "Please rate your care session with [Staff Name]. It takes less than a minute."
- **Email/SMS (T+2 hours):** If no review is left within 2 hours, send an SMS/Email link.
- **Reminder (T+24 hours):** If still pending, send one final reminder notification. Do not pester beyond 24 hours.

### 1.3 App Entry Points
- On the `Dashboard`: A prominent banner at the top — "You have a pending review for your recent booking on [Date]."
- On the `Booking Details` page for that specific completed booking.

---

## 2. Review Form Specifications

The review form is progressive. It starts simple to capture baseline data, then expands for users willing to provide more detail.

### 2.1 Overall Rating (The Hook)
- **UI:** 5 large, interactive star icons.
- **Interaction:** Hovering/tapping a star fills it and the preceding stars with Brand Teal (`#0EA5A4`).
- **Descriptive Labels:** (Updates dynamically below the stars as the user selects)
  - 1 Star: 😞 Needs Improvement
  - 2 Stars: 😕 Below Expectations
  - 3 Stars: 😐 Satisfactory
  - 4 Stars: 🙂 Good Care
  - 5 Stars: 🤩 Excellent Care

### 2.2 Sub-Ratings (Progressive Disclosure)
- *Trigger:* Appears smoothly immediately after the overall rating is selected.
- **Categories:**
  - Punctuality
  - Care Quality
  - Hygiene & Safety
  - Communication
- **UI:** Smaller star rows for each category. Default to the overall rating selected, allowing the user to tweak them individually.

### 2.3 Care Highlight Tags (Multi-select)
- **Prompt:** "What stood out during this visit?"
- **UI:** Pill-shaped toggle buttons.
- **Options (Positive - shown if rating >= 4):**
  - Punctual
  - Gentle Care
  - Clinical Skill
  - Polite & Respectful
  - Clean & Hygienic
  - Patient Listener
  - Went Above & Beyond
- **Options (Constructive - shown if rating <= 3):**
  - Late Arrival
  - Rough Handling
  - Unhygienic
  - Poor Communication
  - Rushed Service

### 2.4 Detailed Feedback Textarea
- **Prompt:** "Tell us more about your experience (Optional)"
- **UI:** Standard textarea. Max length 500 characters. Character counter included.
- **Placeholder:** "Your feedback helps us improve our Care Concierge service..."

### 2.5 Privacy Options
- **Checkbox:** "Hide my name from the care provider"
- **Helper text:** "Your feedback will be shared anonymously with the staff for training purposes."
- **Submit Button:** "Submit Review" (Disabled until overall rating is selected).

---

## 3. Review Display & Management

How clients view and interact with their past reviews.

### 3.1 Display on Booking Detail Page
- Once submitted, the "Pending Review" section on the `Booking Detail` page is replaced by the "Your Review" card.
- **Card Content:**
  - Star rating visually represented.
  - Text feedback (if provided).
  - Selected tags displayed as read-only pills.
  - Date of review.

### 3.2 Edit Window
- **Policy:** Clients can edit their review within **7 days** of submission.
- **UI:** An "Edit Review" ghost button appears on the review card.
- **Action:** Opens the Review Form modal prepopulated with existing data.
- After 7 days, the button disappears.

### 3.3 Staff / Admin Responses
- If the operations team or staff replies to a review, it appears nested below the client's review card.
- **UI:** Gray background (`#F8FAFC`), slightly indented.
- **Header:** "CareConnect Support responded:" or "[Staff Name] responded:"
- **Notification:** Client receives a notification when a response is posted.

---

## 4. Review Summary View

Where clients see aggregate ratings for care providers (if we expose staff profiles) or for specific services.

### 4.1 Aggregate Display
- **Location:** Service Details Page (e.g., "Home Nursing")
- **Overall Rating:** Large typography (e.g., "4.8") next to 5 stars.
- **Star Distribution Chart:**
  - 5 bars (5-star down to 1-star)
  - Fill percentage based on distribution.
- **Total Reviews:** "Based on 1,240 reviews"
- **Average Sub-ratings:** Radial progress bars or simple horizontal bars for Punctuality, Quality, etc.

### 4.2 Recent Reviews List
- Scrollable list of recent, anonymous (or first-name only) reviews from other clients.
- Helpful for building trust for new users evaluating a service.
- Filters: "Most Relevant", "Highest Rated", "Lowest Rated", "Newest".

---

## 5. NPS / Satisfaction Survey (Periodic)

Separate from transactional booking reviews, we periodically measure overall platform satisfaction.

### 5.1 Trigger
- Triggered after every 5th completed booking, or after 3 months of active platform usage.
- Presented as a modal on the Dashboard upon login/app open.

### 5.2 NPS Question
- **Text:** "How likely are you to recommend CareConnect to a friend or family member?"
- **Scale:** 0 to 10.
  - 0-6: Detractors
  - 7-8: Passives
  - 9-10: Promoters
- **UI:** Horizontal row of numbered blocks.

### 5.3 Follow-up Categorization
- Depending on the score, present a single follow-up question:
  - *If 9-10:* "What do you love most about CareConnect?" (Dropdown: Quality of Care, Ease of Booking, Customer Support, Pricing)
  - *If 0-8:* "What can we do to improve?" (Dropdown: Lower Prices, Better App Experience, Higher Quality Staff, More Services)

---

## 6. Edge Cases & Error Handling

- **Network Failure on Submit:** Show a toast: "Failed to submit review. Please try again." Keep the form data intact.
- **Booking Cancelled:** Do not trigger review flows for cancelled or no-show bookings.
- **Profanity Filter:** Frontend should implement a basic profanity regex check on the textarea and show a polite warning: "Please keep reviews respectful and constructive." before allowing submission.

## 7. Accessibility & Mobile Responsiveness
- **Star Rating A11y:** The star rating must be implemented as a group of radio buttons visually hidden, with the stars acting as labels. Keyboard navigation (arrows) must change the rating.
- **Focus Management:** When the review modal opens, focus must trap inside the modal and initial focus should be on the 1st star rating.
- **Mobile Touch Targets:** Star icons and tag pills must have a minimum `44x44px` touch target area to ensure easy tapping on mobile devices.

---
*End of Specification CC-UX-18*
