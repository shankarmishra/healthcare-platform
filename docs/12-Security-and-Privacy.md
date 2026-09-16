# 12. Security and Privacy Specification

## Overview
This document outlines the Security & Privacy specification for the Healthcare Staffing & Home Care Platform. This platform is a multi-sided healthcare marketplace catering to Clients/Patients, Healthcare Professionals, Admins, and Organizations. This specification primarily covers UI-level security patterns, data exposure logic, masking rules, and privacy considerations. Backend security requires a separate, dedicated specification.

## 1. Security Philosophy
- **BUSINESS RULE**: Healthcare information is highly sensitive and requires strict controls.
- **SECURITY RULE**: Apply the principle of least privilege across all user roles.
- **UI RULE**: Minimize data exposure at every UI layer to prevent accidental leaks.
- **SECURITY RULE**: Role-based visibility is mandatory, not optional, for all features.
- **BUSINESS RULE**: Production healthcare licensing, patient privacy, consent, and local regulatory requirements require separate, dedicated validation processes.

## 2. Data Classification

The platform manages various types of data. This classification dictates how data is handled, stored, and displayed in the UI.

| Classification | Description | Examples | UI Treatment |
|---|---|---|---|
| **PUBLIC** | Visible to all users, including non-authenticated visitors | Professional name, aggregate rating, service category offerings | Display openly, optimized for search/discovery |
| **AUTHENTICATED** | Visible to logged-in users only | Professional qualifications, detailed biography, general availability | Require login before rendering view |
| **ROLE_RESTRICTED** | Visible only to authorized roles in specific contexts | Patient medical notes, financial data, organization staffing details | Strict role check and contextual validation before render |
| **SENSITIVE** | Requires masking, encryption, and explicit reveal actions | Phone numbers, email addresses, government IDs, payment card details | Mask by default, reveal on explicit authorized action |
| **INTERNAL** | System use only, not for general users | Audit logs, system health metrics, API keys, internal configuration | Admin-only display within specialized dashboards |

## 3. UI Security Rules

### 3.1 Information Exposure
- **SECURITY RULE**: Never display patient medical information on public pages.
- **SECURITY RULE**: Never display patient information, identifiers, or tokens in URL parameters.
- **SECURITY RULE**: Never display sensitive data in browser tab titles (e.g., use "Patient Profile" instead of "Profile: John Doe").
- **SECURITY RULE**: Never display a professional's personal contact info on their public or unassigned profile.
- **SECURITY RULE**: Never log sensitive data (PII, PHI, financial) to the browser console in production environments.
- **SECURITY RULE**: Never include sensitive data in analytics events or telemetry payloads.
- **UI RULE**: Never show patient details in notification previews (e.g., use generic messages like "New booking received").

### 3.2 Masking Patterns
Data masking minimizes exposure of sensitive information while maintaining usability.

| Data Type | Masked Format | Reveal Trigger | Notes |
|---|---|---|---|
| Phone number | `***-***-1234` | Click to reveal (authorized role) | Unmasked for professional only when booking is 'On The Way' |
| Email | `r***@***.com` | Click to reveal (authorized role) | Admin only |
| Address (public) | `Koramangala, Bangalore` | Never reveal full address publicly | Used for search and discovery |
| Address (full) | `123 MG Road, Koramangala...` | After booking acceptance | Revealed to assigned Professional |
| Government ID | `XXXX-XXXX-1234` | Admin view only | Requires specific 'Verification Admin' sub-role |
| Payment card | `****-****-****-4242` | Never reveal full card | Tokenized representation only |
| Medical notes | `[Redacted]` | After professional check-in | Client can view their own notes anytime |

### 3.3 Route Protection
- **SECURITY RULE**: All protected routes require a definitive authentication check BEFORE rendering any page content or fetching protected data.
- **UI RULE**: Wrong-role access: redirect to the appropriate portal for that role, NOT a generic 403 page (e.g., if a Professional tries to access `/admin`, redirect to `/professional/dashboard`).
- **UI RULE**: Expired session: show a modal re-authentication prompt to preserve the user's navigation context and unsaved form state.
- **UI RULE**: Direct URL access to a protected resource (when logged out): redirect to the login page with a `returnUrl` parameter, then route back upon successful authentication.

### 3.4 Document Security
- **SECURITY RULE**: KYC (Know Your Customer) documents must be displayed in a secure, custom viewer component (disabling right-click save, no direct image URL exposure).
- **ASSUMPTION**: Document URLs provided by the backend should be time-limited, signed URLs in production, expiring shortly after generation.
- **UI RULE**: Document previews rendered in admin side-drawers or modals must be watermarked with the current admin's username and timestamp to deter unauthorized sharing.
- **SECURITY RULE**: Professional verification documents (licenses, IDs) are strictly never visible to Clients/Patients.

### 3.5 Confirmation for Destructive Actions
All actions resulting in data loss, status regression, or financial impact require an explicit confirmation dialog.

| Action | Confirmation Message | Requires Reason |
|---|---|---|
| Reject KYC | "This will reject the professional's verification. They will be notified with your reason." | Yes |
| Suspend Professional | "This will immediately suspend the professional and cancel all their pending bookings." | Yes |
| Cancel Booking | "This booking will be cancelled. [Cancellation policy details]" | Optional (Depends on status) |
| Process Refund | "Amount X will be refunded to the client's original payment method." | Yes |
| Deactivate Account | "This account will be permanently deactivated. This action cannot be undone." | Yes |
| Modify Pricing | "This will affect all future bookings for this service." | No |
| Approve Timesheet | "This will lock the timesheet and initiate payout calculations." | No |

### 3.6 Audit Trail
UI actions that must generate specific audit events sent to the backend:
- KYC state changes (approval, rejection, re-upload request)
- Booking status changes (e.g., Draft → Requested, Assigned → Accepted)
- Payment processing initiation
- Refund processing initiation
- Payout execution requests
- Professional account status changes (suspension, deactivation, reactivation)
- Global pricing or service catalog changes
- Admin role/permission modifications
- Manual booking interventions (assignment, reassignment, forced cancellation)
- Support ticket escalation
- System settings changes

**Audit log entry format standard:**
```typescript
interface AuditLogEntry {
  id: string; // Unique audit event ID
  timestamp: string; // ISO 8601 UTC timestamp
  actor: { 
    userId: string; 
    role: 'CLIENT' | 'PROFESSIONAL' | 'ADMIN' | 'ORGANIZATION' | 'SYSTEM'; 
    displayName: string; 
  };
  action: string; // Standardized action code, e.g., 'KYC_APPROVED', 'BOOKING_CANCELLED'
  target: { 
    entityType: 'BOOKING' | 'USER' | 'DOCUMENT' | 'PAYMENT'; 
    entityId: string; 
  };
  details: Record<string, unknown>; // Action-specific metadata (e.g., previous state, new state)
  ipAddress?: string; // Client IP (handled primarily server-side)
}
```

## 4. Privacy Considerations

### 4.1 Data Minimization
- **UI RULE**: Each screen displays ONLY the data strictly necessary for the user's current workflow or task.
- **UI RULE**: Professional viewing a general job request (pre-acceptance) sees: service type required, general neighborhood/area, estimated duration, and potential earning — NOT the full patient name or exact address.
- **UI RULE**: Client viewing a Professional's profile sees: public biography, verified qualifications, ratings, and service offerings — NOT personal contact info or internal admin notes.
- **UI RULE**: Admin dashboard views should clearly differentiate between high-level summary/aggregate views and detailed drill-down views, requiring explicit navigation to view PII.

### 4.2 Consent Management
- **ASSUMPTION**: The platform implements explicit Client consent for sharing patient information with the specifically assigned Professional.
- **ASSUMPTION**: The platform implements explicit Professional consent for background checks and KYC processing.
- **OPEN DECISION**: Exact Cookie consent implementation strategy (banner style, categorization, integration with consent management platforms).
- **OPEN DECISION**: Detailed data retention policy (how long to keep records after account deletion or booking completion) based on regional laws.

### 4.3 Demo Data Handling
- **BUSINESS RULE**: All demo data used in presentations, staging environments, or "demo modes" must be clearly and provably synthetic.
- **SECURITY RULE**: Never use real personal information (staff, real patients, real providers) in demos.
- **SECURITY RULE**: Use generated, invalid formats for sensitive demo data: no actual government IDs, no reachable phone numbers (use 555 numbers), no real email addresses (use @example.com).
- **UI RULE**: When operating in demo mode, the UI must display a prominent, persistent "DEMO DATA" or "SANDBOX" indicator in the application header.
- **UI RULE**: The Demo role switcher (allowing quick toggling between Client/Admin/Pro views) must be strictly gated behind a `demoMode` configuration flag and is NOT a production navigation pattern.

## 5. Cross-Cutting Security Concerns

### 5.1 Input Validation
- **SECURITY RULE**: All form inputs must be validated comprehensively client-side (for UX) AND strictly server-side (for security).
- **SECURITY RULE**: Sanitize all user-generated content (e.g., profile bios, support messages, review text) before rendering it in the UI to prevent Cross-Site Scripting (XSS) attacks. Use established libraries like DOMPurify if rendering HTML, though plain text is preferred.
- **SECURITY RULE**: File upload endpoints must validate file type (MIME type and extension), file size, and ideally perform malware scanning.
- **ASSUMPTION**: Maximum file size limit is 10MB per uploaded document.
- **BUSINESS RULE**: Allowed file types for KYC and medical documents are restricted to PDF, JPG, and PNG.

### 5.2 Session Management
- **ASSUMPTION**: Authentication is managed via JWT (JSON Web Tokens) with a short-lived access token and a secure, HttpOnly refresh token.
- **ASSUMPTION**: Session timeout is configured for 30 minutes of idle time.
- **UI RULE**: A session expiry warning modal should appear 5 minutes before the session is forcefully terminated, allowing the user to extend their session.
- **SECURITY RULE**: The Admin portal must provide a "Force Logout" capability to immediately terminate all active sessions for a specific user (Client, Pro, or another Admin) in case of compromise.
- **OPEN DECISION**: Handling of concurrent sessions (e.g., logging into the mobile app and web portal simultaneously).

### 5.3 Error Information & Handling
- **SECURITY RULE**: Production errors presented to the user must be friendly, generic messages (e.g., "We encountered an unexpected issue processing your request").
- **SECURITY RULE**: ABSOLUTELY NO stack traces, internal variables, or database query fragments should be exposed in the UI or API error responses in production.
- **SECURITY RULE**: Never expose system internals, server hostnames, or underlying framework details in error messages.
- **SECURITY RULE**: Detailed technical errors, including stack traces and context, must be logged securely server-side only for debugging purposes.

## 6. Healthcare-Specific Security Notes
*The following are critical constraints derived directly from the Product Requirements Document (PRD):*

- **BUSINESS RULE**: Professional licensing and scope of practice verification require separate, rigorous validation processes that may involve third-party integrations or manual admin review. The UI must accommodate these states (e.g., 'Under Review').
- **BUSINESS RULE**: Patient privacy requirements (such as HIPAA in the US, GDPR in Europe, or equivalent local laws) depend heavily on the deployment jurisdiction. The UI must not assume a single compliance standard.
- **BUSINESS RULE**: Employment classification (independent contractor vs. W-2 employee) has significant legal and tax implications. The platform terminology must remain neutral or configurable.
- **BUSINESS RULE**: Payment, invoicing, and tax compliance regulations vary widely by region.
- **UI RULE**: The UI should be heavily CONFIGURABLE (e.g., feature flags for certain data collection fields) and should NOT imply unsupported compliance out-of-the-box.
- **UI RULE**: Do NOT display official compliance badges, seals, or certifications (e.g., "HIPAA Compliant") in the UI unless explicitly provided and authorized by the legal team.
- **ASSUMPTION**: Features like escrow, real-time live GPS tracking, management of specific complex medical procedures, specific final pricing models, real payment gateway integrations, exact payout mechanics, specific legal claims, or production regulatory compliance are assumed to require further specification and should NOT be stated as confirmed, fully designed features in this iteration.

## 7. Branding and UI Constraints
- **UI RULE**: This is a **LIGHT THEME ONLY** product. Dark mode is not currently supported or required.
- **UI RULE**: Brand colors must be strictly adhered to: Healthcare Teal `#0EA5A4` (Primary actions, branding), Medical Blue `#2563EB` (Secondary actions, links).
- **UI RULE**: Primary text color is `#0F172A` (Slate 900). Never use pure `#000000` for text to ensure readability and reduce eye strain.
- **UI RULE**: Primary typography is `Manrope`, with `Inter` configured as the standard fallback font.
- **UI RULE**: All icons used throughout the interface must be from the `Lucide React` icon set exclusively. Do not mix icon libraries.

## 8. Role-Specific Access Matrices

### 8.1 Client / Patient Access
- **View Own Data**: Full access to personal profile, booking history, payment history, and medical notes provided to the platform.
- **View Other Clients**: No access.
- **View Professionals**: Can view public profiles of all approved professionals in discovery.
- **View Assigned Professional**: Can view masked contact details upon assignment; full details unmasked only when booking status reaches 'On The Way' or 'Checked In'.

### 8.2 Healthcare Professional Access
- **View Own Data**: Full access to personal profile, KYC status, assigned booking schedule, and earnings/payout history.
- **View Other Professionals**: No access.
- **View Clients**: Cannot view any patient data during the discovery/matching phase beyond high-level requirements.
- **View Assigned Client**: Can view patient address and relevant medical notes only upon explicit acceptance of the booking, and full contact details upon check-in.

### 8.3 Admin / Operations / Finance Access
- **Global View**: Can view all platform data, but access is governed by summary vs. detail views to minimize casual exposure.
- **Sensitive Data Access**: Can view masked sensitive data (e.g., full Government IDs, full payment logs) only via explicit, audited actions (e.g., clicking 'Reveal' during a verification workflow).
- **Sub-Role Segmentation**: Finance admins primarily access payment/payout data; Operations admins primarily access booking/matching/support data; Verification admins handle KYC.
- **OPEN DECISION**: Implementation details of granular RBAC (Role-Based Access Control) for defining custom admin sub-roles.

### 8.4 Organization / Hospital Access
- **View Own Data**: Can view own corporate profile, submitted staffing requests, candidate reviews, and shift rosters.
- **View Other Organizations**: No access.
- **View Clients**: Cannot view individual patient data; patient management is handled by the platform or the assigned professional directly.

## 9. Security Incident Response

### 9.1 Breach Notification Protocol
- **SECURITY RULE**: The system must support immediate broadcasting of security alerts to all affected users (Admin dashboard alerts, email notifications).
- **BUSINESS RULE**: All potential data breaches must be reported to the Data Protection Officer (DPO) or equivalent legal entity within 24 hours of discovery.
- **UI RULE**: In the event of a compromised professional account, the UI must display a clear "Account Suspended - Security Review" state.

### 9.2 Account Recovery
- **SECURITY RULE**: Password reset links must expire within 15 minutes of generation.
- **UI RULE**: Account recovery flows must not confirm or deny the existence of an account if the email is not found in the system.
- **SECURITY RULE**: Multi-Factor Authentication (MFA) reset requires manual administrative approval after identity verification.

## 10. Third-Party Integrations Security

### 10.1 Payment Gateway
- **SECURITY RULE**: The platform UI must never process, store, or transmit raw credit card data through its own servers. All payment inputs must use the payment gateway's secure iframe or tokenization UI components (e.g., Stripe Elements).
- **UI RULE**: Display clear loading states and security locks during the payment tokenization process to reassure clients.

### 10.2 Background Check Providers
- **SECURITY RULE**: APIs interacting with background check providers must use mutual TLS (mTLS) or strong API key authentication.
- **UI RULE**: The status of background checks (Pending, Cleared, Flagged) must be clearly visible to Verification Admins, with detailed reports stored securely and accessed via temporary signed URLs.

## 11. Platform API Security

### 11.1 Rate Limiting
- **SECURITY RULE**: All API endpoints exposed to the frontend must be rate-limited to prevent brute-force attacks and abuse.
- **UI RULE**: The UI should gracefully handle `429 Too Many Requests` responses by displaying a "Please try again later" message or a retry countdown, rather than a generic error.

### 11.2 CORS (Cross-Origin Resource Sharing)
- **SECURITY RULE**: The backend API must explicitly whitelist the allowed origin URLs (e.g., `https://app.healthcareplatform.com`, `https://admin.healthcareplatform.com`).
- **UI RULE**: Ensure the frontend application handles CORS errors securely without exposing internal routing details to the user.

## 12. Security Audit and Compliance Checklist

### 12.1 Pre-Launch Requirements
- [ ] Penetration testing completed and critical vulnerabilities remediated.
- [ ] Static Application Security Testing (SAST) integrated into the CI/CD pipeline.
- [ ] Dynamic Application Security Testing (DAST) performed on staging environments.
- [ ] Dependency scanning enabled to catch known vulnerabilities in third-party libraries (e.g., npm audit).

### 12.2 Ongoing Maintenance
- **SECURITY RULE**: Security dependencies must be updated within 7 days of a critical vulnerability announcement.
- **BUSINESS RULE**: Annual security training is required for all administrative and operational staff accessing the platform backend.

## 13. Secure Development Lifecycle (SDLC)
- **SECURITY RULE**: All code changes must undergo peer review focusing on security implications.
- **SECURITY RULE**: Developers must adhere to OWASP Top 10 guidelines during feature development.
- **BUSINESS RULE**: Security champions should be appointed within each development squad to advocate for best practices.

## 14. Data Deletion and Right to be Forgotten
- **BUSINESS RULE**: Users have the right to request deletion of their personal data in accordance with applicable privacy laws.
- **UI RULE**: Provide a clear "Delete Account" option within the user settings, requiring secondary confirmation (e.g., password re-entry).
- **SECURITY RULE**: The system must implement a "soft delete" strategy initially, transitioning to a "hard delete" or anonymization after the required legal retention period expires.

## 15. Vulnerability Disclosure Program
- **BUSINESS RULE**: Establish a channel for security researchers and users to responsibly report discovered vulnerabilities.
- **UI RULE**: Maintain a visible "Security" or "Responsible Disclosure" page linked from the platform footer outlining the reporting process and expectations.

## 16. Device and Endpoint Security

### 16.1 Supported Devices and Browsers
- **BUSINESS RULE**: The platform UI must be officially supported on the latest 2 major versions of Chrome, Safari, Firefox, and Edge.
- **SECURITY RULE**: Users accessing the platform on unsupported or severely outdated browsers must be presented with a blocking warning indicating that their environment is not secure enough for healthcare operations.
- **UI RULE**: For the professional mobile interface (if rendered as a web app or PWA), detect and warn if the device OS is outdated.

### 16.2 Mobile Application Specifics
- **SECURITY RULE**: The mobile app must not store clear-text credentials or sensitive patient data on the device's local storage.
- **SECURITY RULE**: Implement certificate pinning to prevent Man-in-the-Middle (MitM) attacks on mobile clients.
- **UI RULE**: Support biometric authentication (FaceID / TouchID) as an alternative to password entry for subsequent logins, but require standard authentication for critical account changes.
- **SECURITY RULE**: Ensure the app interface is blurred or obscured when the device's app switcher/recent apps view is active.

## 17. Geographic and Jurisdiction Compliance

### 17.1 Data Residency
- **BUSINESS RULE**: Based on the deployment region, patient data must reside in specific geographic locations (e.g., EU for GDPR, US for HIPAA).
- **UI RULE**: The admin platform settings must display the current active data region, but this value should be strictly read-only and configured at the infrastructure level.

### 17.2 Cross-Border Data Transfer
- **SECURITY RULE**: Explicit user consent must be captured if any data is transferred across international borders for processing (e.g., using a global CDN or analytics provider).
- **UI RULE**: Include necessary disclosures in the Privacy Policy regarding international data flows.

## 18. Physical Security Considerations (For Professionals)

### 18.1 In-Home Visit Protocols
- **BUSINESS RULE**: Professionals must verify the identity of the client upon arrival at the home.
- **UI RULE**: The Professional app must include a "Check-in Checklist" reminding the user to verify client ID if required by the service type.
- **ASSUMPTION**: A "Panic Button" or "Emergency Assist" feature within the Professional app interface should trigger immediate alerts to Ops Admins.

### 18.2 Device Loss or Theft
- **SECURITY RULE**: In the event a Professional's device is lost or stolen, Admins must have the ability to instantly revoke all active sessions for that user.
- **UI RULE**: The Professional portal must allow users to view their active sessions and manually revoke access from unrecognized devices.

## 19. Backup and Disaster Recovery

### 19.1 Data Backups
- **SECURITY RULE**: All databases must undergo automated daily encrypted backups.
- **BUSINESS RULE**: Backup retention periods must align with the legal requirements of the operating jurisdiction (e.g., 7 years for certain healthcare records).

### 19.2 UI Availability During Outages
- **UI RULE**: During scheduled maintenance, the platform must display a clear, branded maintenance page indicating expected downtime, rather than a standard server error.
- **UI RULE**: If core backend services are unavailable but the CDN is operational, the frontend should gracefully degrade, showing "Service Temporarily Unavailable" messages instead of infinitely loading spinners or broken layouts.

## 20. Penetration Testing and Audits

### 20.1 Routine Assessments
- **BUSINESS RULE**: Comprehensive third-party penetration testing must be conducted at least annually.
- **SECURITY RULE**: Any vulnerabilities classified as 'High' or 'Critical' must be resolved within 48 hours of discovery.

### 20.2 Audit Logging Review
- **SECURITY RULE**: A dedicated system must automatically monitor audit logs for suspicious patterns (e.g., an Admin exporting an unusually large number of user records).
- **UI RULE**: The Admin dashboard should feature a "Security Alerts" widget for privileged users to review automated anomaly detections.

## 21. User Communication Security

### 21.1 In-Platform Messaging
- **SECURITY RULE**: All in-app communication between Clients and Professionals must be encrypted in transit and at rest.
- **SECURITY RULE**: The messaging system must automatically detect and warn users if they attempt to share sensitive items like credit card numbers or plain text passwords.
- **UI RULE**: Include a persistent warning banner in the chat interface: "For your security, never share passwords or financial information in this chat."

### 21.2 Email and SMS Notifications
- **SECURITY RULE**: Email and SMS notifications must never include sensitive PHI (Protected Health Information) or PII directly in the message body.
- **UI RULE**: Notifications should use generic templates (e.g., "You have a new secure message regarding your booking. Log in to view.") and provide a secure link to the platform.

## 22. End-to-End Cryptography

### 22.1 Encryption in Transit
- **SECURITY RULE**: All data exchanged between the UI (browser/mobile) and the backend API must be encrypted using TLS 1.2 or higher (TLS 1.3 preferred).
- **SECURITY RULE**: Weak cipher suites must be disabled on all load balancers and API gateways.
- **UI RULE**: The platform should implement HSTS (HTTP Strict Transport Security) to ensure browsers only connect via HTTPS.

### 22.2 Encryption at Rest
- **BUSINESS RULE**: All databases, block storage, and file systems storing PII, PHI, or credentials must be encrypted at rest using AES-256 or equivalent strong encryption.
- **SECURITY RULE**: Cryptographic keys must be managed by a dedicated Key Management Service (KMS) with strict access policies and automated rotation schedules.

## 23. Continuous Monitoring and Logging

### 23.1 Real-time Security Information and Event Management (SIEM)
- **SECURITY RULE**: All critical system logs and audit trails must be forwarded in real-time to a centralized SIEM platform.
- **BUSINESS RULE**: The SIEM must be configured to trigger immediate alerts to the Security Operations Center (SOC) or designated on-call engineers for suspicious activities.

### 23.2 Anomaly Detection
- **SECURITY RULE**: Implement machine learning or rule-based models to detect behavioral anomalies, such as a Professional accessing records of unassigned clients or multiple failed login attempts from distinct IPs.
- **UI RULE**: When anomalous behavior is detected, the UI should prompt the user for additional verification (e.g., CAPTCHA or step-up authentication) before proceeding.

## 24. Future Security Enhancements (Roadmap)
- **OPEN DECISION**: Implementation of a decentralized identity model (SSI) for Professional credential verification.
- **OPEN DECISION**: Support for FIDO2 / WebAuthn standard for phishing-resistant passwordless authentication for all user roles.
- **OPEN DECISION**: Advanced Data Loss Prevention (DLP) tools integrated directly into the chat and document upload workflows.
- **ASSUMPTION**: These enhancements are not scoped for the MVP release and will be prioritized in subsequent phases based on risk assessments and regulatory demands.

## 25. Definitions and Acronyms
- **PII**: Personally Identifiable Information
- **PHI**: Protected Health Information
- **KYC**: Know Your Customer
- **RBAC**: Role-Based Access Control
- **DPO**: Data Protection Officer
- **MFA**: Multi-Factor Authentication
- **SIEM**: Security Information and Event Management

## Appendix A: Regional Healthcare Compliance Mapping
- **United States**: Health Insurance Portability and Accountability Act (HIPAA), Health Information Technology for Economic and Clinical Health (HITECH) Act.
- **European Union**: General Data Protection Regulation (GDPR), Network and Information Systems (NIS) Directive.
- **United Kingdom**: UK GDPR, Data Protection Act 2018.
- **Canada**: Personal Information Protection and Electronic Documents Act (PIPEDA), Personal Health Information Protection Act (PHIPA) in Ontario.
- **Australia**: Privacy Act 1988, My Health Records Act 2012.

---
*Document Version: 1.0.0*
*Status: DRAFT*
*Review Required: Security, Legal, Engineering*
