# Client Error Recovery

## Overview
This document defines how the CareConnect platform handles errors, exceptions, and empty states. The tone must always remain calm, reassuring, and helpful, avoiding technical jargon to maintain the "Care Concierge" standard.

---

## Error Categories

1. **Network errors:** Offline, timeout, 502/503/504 gateways.
2. **Validation errors:** Invalid form input, missing required fields.
3. **Business logic errors:** Location unsupported, service unavailable, outside operating hours.
4. **Authentication errors:** Session expired, unauthorized, invalid credentials.
5. **Payment errors:** Card declined, insufficient balance, UPI timeout.
6. **Not found errors:** Booking ID doesn't exist, 404 page not found.

---

## Error Scenarios

### 1. Booking wizard: Location not in NCR
- **Error ID:** `err_biz_location_unsupported`
- **Location:** Booking Wizard (Address Step)
- **Message:** "Currently, our services are only available in the Delhi NCR region (Delhi, Noida, Gurugram, Faridabad). We're expanding soon!"
- **Visual:** Inline alert box (amber) below the address input.
- **Recovery action:** "Provide different address" or "Join waitlist".
- **Auto-recovery:** None.

### 2. Booking wizard: No available time slots
- **Error ID:** `err_biz_no_slots`
- **Location:** Booking Wizard (Schedule Step)
- **Message:** "All our care professionals are fully booked for this date. Please select another date."
- **Visual:** Toast notification + grayed-out calendar date.
- **Recovery action:** Suggest nearest available dates.
- **Auto-recovery:** None.

### 3. Booking wizard: Patient profile incomplete
- **Error ID:** `err_val_patient_incomplete`
- **Location:** Booking Wizard (Patient Step)
- **Message:** "We need a bit more medical history to provide the best care. Please fill in the required fields."
- **Visual:** Inline red text under missing fields, red shake animation.
- **Recovery action:** Focus user on the missing field.
- **Auto-recovery:** None.

### 4. Booking wizard: Network timeout on submit
- **Error ID:** `err_net_timeout_submit`
- **Location:** Booking Wizard (Final Submit)
- **Message:** "We're having trouble connecting. Please check your internet connection and try again. Don't worry, your progress is saved."
- **Visual:** Modal dialog over the loading state.
- **Recovery action:** "Try Again" button.
- **Auto-recovery:** Auto-retry 3 times with exponential backoff before showing error.

### 5. Booking wizard: Session expired mid-wizard
- **Error ID:** `err_auth_session_expired`
- **Location:** Any step in Booking Wizard
- **Message:** "For your security, your session has expired. Please log in again to continue your booking."
- **Visual:** Full-screen modal overlay.
- **Recovery action:** "Log In" button (redirects to login with a `next` parameter to return to wizard state).
- **Auto-recovery:** None.

### 6. Payment: Card declined
- **Error ID:** `err_pay_card_declined`
- **Location:** Payment Gateway / Checkout
- **Message:** "Your bank declined this transaction. Please check your card details or try a different payment method."
- **Visual:** Inline error in the payment form widget.
- **Recovery action:** "Use another method".
- **Auto-recovery:** None.

### 7. Payment: UPI timeout
- **Error ID:** `err_pay_upi_timeout`
- **Location:** Payment Processing overlay
- **Message:** "The UPI app didn't respond in time. No worries, your money is safe. Please try again."
- **Visual:** Toast notification.
- **Recovery action:** "Retry Payment".
- **Auto-recovery:** Poll status for up to 5 minutes before showing timeout.

### 8. Booking detail: Booking not found
- **Error ID:** `err_notfound_booking`
- **Location:** `/bookings/[id]` route
- **Message:** "We couldn't find this booking. It may have been removed or you might have followed an outdated link."
- **Visual:** Full page error state with illustration.
- **Recovery action:** "View My Bookings" button.
- **Auto-recovery:** None.

### 9. Search: No results
- **Error ID:** `err_notfound_search`
- **Location:** Search bar / Services list
- **Message:** "We couldn't find exactly what you're looking for."
- **Visual:** Inline empty state.
- **Recovery action:** "Browse all services" or "Chat with Support".
- **Auto-recovery:** Clear search input on click.

### 10. Profile: Save failed
- **Error ID:** `err_net_save_failed`
- **Location:** Profile Settings page
- **Message:** "Unable to save your changes right now. We'll try again automatically."
- **Visual:** Toast notification (amber).
- **Recovery action:** "Retry Now".
- **Auto-recovery:** Background sync queue.

### 11. Auth: Wrong password
- **Error ID:** `err_auth_wrong_password`
- **Location:** Login page
- **Message:** "The password you entered is incorrect. Please try again."
- **Visual:** Inline error text.
- **Recovery action:** "Forgot Password?" link.
- **Auto-recovery:** None.

### 12. Auth: Account locked
- **Error ID:** `err_auth_account_locked`
- **Location:** Login page
- **Message:** "For your security, your account is temporarily locked after multiple failed attempts. Please try again in 15 minutes or reset your password."
- **Visual:** Warning banner at top of login form.
- **Recovery action:** "Reset Password".
- **Auto-recovery:** Unlocks automatically after 15 mins.

### 13. Auth: OTP expired
- **Error ID:** `err_auth_otp_expired`
- **Location:** OTP verification step
- **Message:** "This code has expired. Let's send you a new one."
- **Visual:** Inline text below input.
- **Recovery action:** "Resend Code".
- **Auto-recovery:** None.

### 14. General: API 500
- **Error ID:** `err_net_500`
- **Location:** Global application
- **Message:** "We're experiencing a temporary technical hiccup on our end. Our team has been notified."
- **Visual:** Toast notification or Error Boundary fallback UI.
- **Recovery action:** "Refresh Page".
- **Auto-recovery:** None.

### 15. General: Rate limited
- **Error ID:** `err_net_429`
- **Location:** Global application
- **Message:** "You're moving too fast! Please wait a moment before trying again."
- **Visual:** Toast notification.
- **Recovery action:** Wait and retry.
- **Auto-recovery:** Auto-retry after `Retry-After` header duration.

### 16. General: Offline mode
- **Error ID:** `err_net_offline`
- **Location:** Global application shell
- **Message:** "You are currently offline. Some features may be unavailable until your connection is restored."
- **Visual:** Persistent banner at the top of the screen (gray/amber).
- **Recovery action:** Reconnect to Wi-Fi/Data.
- **Auto-recovery:** Banner auto-dismisses when connection (`navigator.onLine`) is restored.

*(...additional specific scenarios follow standard patterns...)*

---

## Empty State Designs

Empty states occur when lists or data feeds have no content. They are opportunities for education and clear calls to action.

### My Bookings (no bookings yet)
- **Icon:** Calendar with a subtle '+' or star.
- **Headline:** No bookings yet
- **Description:** "You haven't requested any care services yet. Whenever you're ready, we're here to help."
- **CTA button:** "Book a Service" (Primary)

### Notifications (no notifications)
- **Icon:** Sleeping bell or resting inbox icon.
- **Headline:** You're all caught up!
- **Description:** "You don't have any new notifications right now. We'll let you know when there's an update."
- **CTA button:** None.

### Saved Patients (no patients saved)
- **Icon:** ID Card or User Profile placeholder.
- **Headline:** Who are you caring for?
- **Description:** "Add details for yourself or a loved one to make future bookings faster."
- **CTA button:** "Add Patient Profile" (Primary)

### Saved Addresses (no addresses)
- **Icon:** Map pin or house icon.
- **Headline:** No saved locations
- **Description:** "Save your home or secondary addresses for a quicker booking experience."
- **CTA button:** "Add Address" (Secondary)

### Payments (no payment history)
- **Icon:** Receipt or wallet icon.
- **Headline:** No payment history
- **Description:** "Your past invoices and receipts will appear here once you complete a booking."
- **CTA button:** "View Services" (Outline)

### Support (no tickets)
- **Icon:** Chat bubble or headset icon.
- **Headline:** How can we help?
- **Description:** "You haven't contacted support yet. If you have any questions or issues, let us know."
- **CTA button:** "Start a Chat" or "Read FAQs"

### Reviews (no reviews given)
- **Icon:** Empty stars.
- **Headline:** No reviews yet
- **Description:** "After your care sessions, you can leave feedback here to help us maintain our high standards."
- **CTA button:** None.
