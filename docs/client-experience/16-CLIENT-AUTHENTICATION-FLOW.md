# CareConnect Client Authentication Flow Specification

This document details the complete authentication and authorization architecture for the CareConnect client portal. It transitions the application from its current demo state into a fully secure, production-ready system.

## 1. Current State (Baseline)

Currently, the application operates in a "Demo Mode" designed for rapid prototyping and UI demonstration:
- **DemoRoleSwitcher**: A UI component that allows users to instantly switch between 'client', 'professional', and 'admin' roles.
- **AuthContext**: Provides basic state management (`currentUser`, `currentRole`, `login`, `logout`, `switchRole`) but is entirely mocked on the client side.
- **No real security**: Pages rely on the mock `currentRole` to display content, but there are no actual network boundaries or secure tokens.

## 2. Target Auth Flow

The production CareConnect platform will implement a robust authentication system tailored for the Indian market, where mobile number + OTP is the primary and preferred method of authentication.

### 2.1 Registration (Sign Up)
**Objective**: Minimize friction while capturing essential contact details.

**Flow**:
1. User clicks "Sign Up" or is prompted during the booking flow.
2. **Form Fields**: 
   - Full Name
   - Phone Number (Prefixed with +91, strictly 10 digits)
   - Email Address (Optional but recommended)
   - Password (Secure)
3. **Verification**: 
   - System sends a 6-digit OTP via SMS to the provided phone number.
   - User enters OTP in the verification screen.
4. **Completion**: 
   - Upon successful verification, the account is created.
   - User is automatically logged in.
   - User is redirected back to their intended destination (e.g., the next step of the booking wizard).

### 2.2 Login (Sign In)
**Objective**: Provide flexible, secure access.

**Methods**:
- **Primary**: Phone Number + Password.
- **Secondary (Passwordless)**: Phone Number + OTP. (User enters phone, clicks "Send OTP", enters OTP to log in. High preference for elderly users or those who forget passwords).
- **Social Login**: Google OAuth (Maps to email address if provided during registration, or links to a new account).

**Features**:
- "Remember me" functionality (extends token persistence).
- Clear error messaging for incorrect credentials or unverified accounts.

### 2.3 Password Recovery
**Flow**:
1. User clicks "Forgot Password" on the login modal.
2. User enters their registered Phone Number.
3. System sends a 6-digit OTP via SMS.
4. User enters OTP.
5. If valid, user is prompted to enter and confirm a new password.
6. Upon success, user is redirected back to the login screen with a success toast message.

## 3. Session Management

Security of user sessions is critical, especially given the sensitive nature of healthcare data.

### 3.1 Token Storage
- **Primary Approach**: `httpOnly` secure cookies. The backend will set a JWT cookie that Javascript cannot access, mitigating XSS attacks.
- **Fallback/Alternative**: If the backend architecture strictly requires Authorization headers, tokens will be stored in memory (React context) with a refresh token stored in `httpOnly` cookies. Storage in `localStorage` is discouraged for JWTs.

### 3.2 Token Lifecycle
- **Access Token**: Short-lived (e.g., 15 minutes).
- **Refresh Token**: Long-lived (e.g., 7 days if "Remember me" is checked, otherwise session-bound).
- **Refresh Mechanism**: Axios interceptors will automatically catch `401 Unauthorized` responses, attempt to use the refresh token to get a new access token, and retry the original request transparently.

### 3.3 Session Timeout
- **Idle Timeout**: After 30 minutes of complete inactivity on the platform, the user's session will automatically expire.
- **Multi-device Support**: Users can be logged in on multiple devices. Changing the password will invalidate all active sessions across all devices.

## 4. Auth Gates in Client Flow

The application must enforce strict routing rules based on authentication status.

### 4.1 Public Pages (No Auth Required)
These pages are fully accessible to indexable crawlers and unauthenticated users:
- Homepage (`/`)
- Services Overview (`/services`)
- Service Details (`/services/[id]`)
- About Us (`/about`)
- How It Works (`/how-it-works`)
- Trust & Safety (`/trust`)
- Contact (`/contact`)

### 4.2 Progressive Auth (Booking Wizard)
The booking flow (`/book`) utilizes progressive profiling:
- **Steps 1 to 8** (Service selection, patient details, location, dates): **No Auth Required**. We want users to build investment in the process without friction.
- **Step 9** (Review & Submit): **Auth Required**. Before the final submission and payment/confirmation, the system intercepts the flow.
  - If unauthenticated, the Auth Modal appears.
  - Post-login/registration, the modal closes, and the user remains on Step 9 to complete the booking.

### 4.3 Protected Pages (Auth Required)
These routes require a valid session. Unauthenticated users attempting to access these are redirected to the homepage with the Auth Modal opened.
- Client Dashboard (`/dashboard`)
- My Bookings (`/dashboard/bookings`)
- Patient Profiles (`/dashboard/patients`)
- Account Settings (`/dashboard/settings`)
- Payments & Invoices (`/dashboard/payments`)
- Support/Messaging (`/dashboard/support`)

## 5. Auth UI Specification

### 5.1 The Auth Modal
Authentication is handled via a centralized Modal component, rather than full-page redirects. This maintains context (especially during booking).
- **Design**: Clean white background, CareConnect logo, teal accents.
- **Tabs**: "Log In" and "Sign Up" tabs at the top.
- **Responsive**: Full-screen on mobile, centered modal on desktop.

### 5.2 OTP Input UI
- **Structure**: 6 individual, large input boxes.
- **Interaction**: 
  - Auto-advance focus to the next box upon typing.
  - Allow pasting a 6-digit code into the first box, automatically filling the rest.
  - Backspace moves focus to the previous box.
- **Timer**: "Resend OTP in 00:59" timer displayed below the inputs.

### 5.3 State Management UI
- **Loading States**: Submit buttons transition to a loading spinner (Lucide `Loader2` spinning) during API calls. Text changes to "Verifying...".
- **Error States**: Inline red text below the specific field that failed. For generic errors (e.g., "Invalid credentials"), a red alert banner appears at the top of the modal.

## 6. Account Security Policies

- **Password Requirements**:
  - Minimum 8 characters.
  - At least 1 uppercase letter.
  - At least 1 number.
  - At least 1 special character.
- **Rate Limiting (Brute Force Protection)**:
  - 5 consecutive failed login attempts result in a 15-minute temporary lockout for that phone number/IP.
  - OTP request rate limiting (max 3 requests per 5 minutes) to prevent SMS spam.
- **OTP Expiry**: Generated OTPs expire after exactly 5 minutes.
- **Session Expiry Notification**: 2 minutes before the 30-minute idle timeout, a toast notification warns the user: "Your session is about to expire due to inactivity. Click to stay logged in."
