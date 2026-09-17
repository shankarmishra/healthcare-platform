# Client Notification System

## Overview
This document outlines the CareConnect client notification system. Notifications are crucial for keeping clients informed about their bookings, staff assignments, and payments, ensuring a reassuring "Care Concierge" experience.

---

## Notification Types

### 1. BOOKING_SUBMITTED
- **Type ID:** `booking_submitted`
- **Trigger event:** After a client successfully submits a booking request.
- **Title template:** Booking Request Received
- **Body template:** We've received your request for {Service_Name} on {Date}. Our care team is reviewing it now.
- **Icon:** FileText (Blue)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** Medium
- **Channels:** In-app, Email

### 2. BOOKING_CONFIRMED
- **Type ID:** `booking_confirmed`
- **Trigger event:** After operations confirms the booking and schedules it.
- **Title template:** Booking Confirmed!
- **Body template:** Your {Service_Name} booking for {Date} at {Time} has been confirmed.
- **Icon:** CheckCircle (Green)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** High
- **Channels:** In-app, Email, SMS, Push

### 3. STAFF_ASSIGNED
- **Type ID:** `staff_assigned`
- **Trigger event:** When a specific staff member is assigned to the booking.
- **Title template:** Care Professional Assigned
- **Body template:** {Staff_Name} has been assigned to your booking. View their profile to learn more.
- **Icon:** UserCheck (Teal)
- **Action:** `/bookings/{Booking_ID}/staff`
- **Priority:** High
- **Channels:** In-app, Email, Push

### 4. STAFF_ON_WAY
- **Type ID:** `staff_on_way`
- **Trigger event:** Staff marks themselves as en route.
- **Title template:** Your Care Professional is on the way
- **Body template:** {Staff_Name} is en route. Estimated time of arrival is {ETA}.
- **Icon:** Navigation (Teal)
- **Action:** `/bookings/{Booking_ID}/tracking`
- **Priority:** High
- **Channels:** In-app, SMS, Push

### 5. STAFF_ARRIVED
- **Type ID:** `staff_arrived`
- **Trigger event:** Staff arrives at the client's location.
- **Title template:** Staff Arrived
- **Body template:** {Staff_Name} has arrived at your location.
- **Icon:** MapPin (Teal)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** High
- **Channels:** In-app, Push

### 6. CARE_STARTED
- **Type ID:** `care_started`
- **Trigger event:** Staff starts the care session.
- **Title template:** Care Session Started
- **Body template:** Your {Service_Name} session has begun.
- **Icon:** PlayCircle (Blue)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** Low
- **Channels:** In-app

### 7. CARE_COMPLETED
- **Type ID:** `care_completed`
- **Trigger event:** Staff completes the care session.
- **Title template:** Care Session Completed
- **Body template:** Your {Service_Name} session has finished. We hope you had a great experience.
- **Icon:** CheckSquare (Green)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** Medium
- **Channels:** In-app, Email, Push

### 8. PAYMENT_DUE
- **Type ID:** `payment_due`
- **Trigger event:** Invoice is generated for a booking.
- **Title template:** Payment Due
- **Body template:** An invoice for {Amount} is ready for your recent booking. Please pay by {Due_Date}.
- **Icon:** CreditCard (Amber)
- **Action:** `/payments/{Invoice_ID}`
- **Priority:** High
- **Channels:** In-app, Email, SMS, Push

### 9. PAYMENT_SUCCESS
- **Type ID:** `payment_success`
- **Trigger event:** Payment is successfully processed.
- **Title template:** Payment Received
- **Body template:** Thank you! Your payment of {Amount} has been successfully processed.
- **Icon:** Receipt (Green)
- **Action:** `/payments/{Invoice_ID}/receipt`
- **Priority:** Medium
- **Channels:** In-app, Email

### 10. BOOKING_CANCELLED
- **Type ID:** `booking_cancelled`
- **Trigger event:** Booking is cancelled by client or operations.
- **Title template:** Booking Cancelled
- **Body template:** Your booking for {Date} has been cancelled. If this was a mistake, please contact support.
- **Icon:** XCircle (Red)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** High
- **Channels:** In-app, Email, SMS

### 11. BOOKING_RESCHEDULED
- **Type ID:** `booking_rescheduled`
- **Trigger event:** Booking date/time is changed.
- **Title template:** Booking Rescheduled
- **Body template:** Your booking has been moved to {New_Date} at {New_Time}.
- **Icon:** Calendar (Blue)
- **Action:** `/bookings/{Booking_ID}`
- **Priority:** High
- **Channels:** In-app, Email, SMS, Push

### 12. REVIEW_REQUESTED
- **Type ID:** `review_requested`
- **Trigger event:** 2 hours post-care completion.
- **Title template:** How was your experience?
- **Body template:** Please rate your recent {Service_Name} session with {Staff_Name}.
- **Icon:** Star (Yellow)
- **Action:** `/bookings/{Booking_ID}/review`
- **Priority:** Medium
- **Channels:** In-app, Email, Push

### 13. STAFF_CHANGED
- **Type ID:** `staff_changed`
- **Trigger event:** Different staff member assigned due to unavailability.
- **Title template:** Update to your Care Professional
- **Body template:** {New_Staff_Name} will now be attending your booking on {Date}.
- **Icon:** RefreshCw (Amber)
- **Action:** `/bookings/{Booking_ID}/staff`
- **Priority:** High
- **Channels:** In-app, Email, SMS, Push

### 14. SUPPORT_RESPONSE
- **Type ID:** `support_response`
- **Trigger event:** Agent replies to a support ticket.
- **Title template:** Update on your Support Request
- **Body template:** Our team has responded to your ticket regarding "{Ticket_Subject}".
- **Icon:** MessageSquare (Teal)
- **Action:** `/support/{Ticket_ID}`
- **Priority:** Medium
- **Channels:** In-app, Email, Push

### 15. PROMO_OFFER
- **Type ID:** `promo_offer`
- **Trigger event:** Marketing campaign trigger.
- **Title template:** Special Offer Just For You
- **Body template:** Get {Discount} off your next booking with code {Code}. Valid until {Expiry_Date}.
- **Icon:** Gift (Purple)
- **Action:** `/promotions`
- **Priority:** Low
- **Channels:** In-app, Email, Push

### 16. SYSTEM_MAINTENANCE
- **Type ID:** `system_maintenance`
- **Trigger event:** Scheduled platform maintenance.
- **Title template:** Scheduled Maintenance Notice
- **Body template:** CareConnect will be undergoing maintenance on {Date} between {Time_Window}.
- **Icon:** AlertTriangle (Amber)
- **Action:** `/announcements`
- **Priority:** Medium
- **Channels:** In-app, Email

---

## Notification Center UI

### Bell Icon
- Positioned in the top-right header area.
- Unread count badge (red circle with white number, max '99+').
- Pulse animation on new notification arrival.

### Dropdown Panel
- **Trigger:** Click on Bell icon.
- **Width:** 380px.
- **Max Height:** 70vh, with internal scrolling.
- **Empty State:** Illustration of a resting bell, text: "You're all caught up!"

### Visual Distinction
- **Unread:** Slight background tint (e.g., `bg-blue-50`), bold title text, blue dot indicator.
- **Read:** White background, regular weight text, no dot.

### Controls
- "Mark all as read" button in panel header.
- Filter chips: All, Booking, Payment, System.
- Date Grouping Headers: "Today", "Yesterday", "This Week", "Earlier".

---

## Push Notification Spec

### Browser Push Permission Flow
1. **Pre-prompt:** Show a native-feeling modal explaining *why* we need push notifications (e.g., "Get live updates when your caregiver is on the way").
2. **Action:** If user clicks "Allow" on pre-prompt, trigger standard browser permission dialog.
3. **Rejection Handling:** If rejected, do not prompt again for 30 days. Show prompt in settings area.

### Content Format
- **Icon:** CareConnect Logo (PNG, 192x192).
- **Badge:** Monochrome logo for Android status bar (PNG, 96x96).
- **Vibration Pattern:** `[200, 100, 200]`.
- **Require Interaction:** True for High priority alerts.

### Deep Linking
- Push notification payload must contain an `url` field.
- Service Worker handles click event, checks if a client window is open. If open, focus and navigate. If closed, open a new tab to the specified URL.
