# Business Requirements Document (BRD)
## Healthcare Staffing & Home Care Platform

---

## 3.1 Problem Statement
Home healthcare staffing is currently highly fragmented and heavily reliant on traditional, manual agencies. Clients and patients struggle to find verified, trusted healthcare professionals for critical in-home services such as home nursing, caregiving, physiotherapy, doctor visits, and specialized care. The process is typically opaque, slow, and lacks quality assurance. 

On the supply side, healthcare professionals lack a reliable, centralized job pipeline that offers flexible scheduling, transparent payouts, and a seamless administrative experience. Traditional agencies often take exorbitant margins while providing poor support to the care providers.

Furthermore, healthcare organizations, hospitals, and clinics need scalable staffing solutions to manage fluctuating patient volumes and temporary staff shortages, but they currently rely on multiple distinct staffing agencies with varying quality standards and disjointed communication channels.

**[BUSINESS RULE]** The platform must serve all three demand/supply profiles (Clients, Professionals, Organizations) through a unified operational backbone.

## 3.2 Business Objective
Build a comprehensive, multi-sided marketplace platform connecting clients (patients and families), healthcare professionals, and organizations/hospitals, managed centrally by an internal operations/admin team. 

The objective is to digitize and streamline the end-to-end journey of home healthcare and staffing, from initial discovery and verification to matching, booking, service delivery, and financial settlement, thereby reducing time-to-care, increasing professional utilization, and improving overall care quality.

## 3.3 Product Vision
"Trusted healthcare professionals, at your doorstep." 

The platform is designed to be a premium healthcare technology platform — it is not a traditional hospital website, nor a generic SaaS product. It must convey trust, reliability, and clinical excellence through its design, messaging, and operational rigor. 

**[UI RULE]** The application strictly utilizes a LIGHT THEME ONLY to reinforce a clean, medical, and professional environment.
**[UI RULE]** Brand colors are restricted to Healthcare Teal (#0EA5A4) as the primary brand color, and Medical Blue (#2563EB) for secondary actions and highlights. Primary text must be #0F172A (never pure #000000).
**[UI RULE]** Typography is standardized on Manrope (with Inter as fallback).
**[UI RULE]** Iconography is standardized on Lucide React exclusively.

## 3.4 Business Model Assumptions
The core business model revolves around capturing value from the matches and transactions facilitated by the platform.

- **[BUSINESS RULE]** The platform earns revenue by charging a commission on each successfully completed booking.
- **[ASSUMPTION]** Exact commission percentages (e.g., flat rate vs. tiered, client-side fee vs. professional-side fee) are an OPEN DECISION.
- **[BUSINESS RULE]** Professionals are responsible for setting their own availability, but the platform's algorithm and admin team manage the final matching and dispatching.
- **[BUSINESS RULE]** Clients must pay upfront to secure a booking, while professionals are paid post-completion of the service to ensure quality and attendance.
- **[ASSUMPTION]** Payment escrow mechanics are TBD and require integration with a compliant payment gateway.
- **[ASSUMPTION]** The employment classification of healthcare professionals (e.g., independent contractors vs. W-2 employees) requires thorough legal review based on operating regions. Currently assuming independent contractor status.

## 3.5 Target User Groups
The platform serves four primary distinct user groups:

### 1. Clients / Patients
- **Demographics:** Adults arranging care for themselves or elderly parents/relatives. Age range 30-75.
- **Needs:** Rapid access to qualified care, transparency in pricing, trust in the assigned professional, easy communication.
- **Tech Comfort:** Varies widely. The interface must be highly intuitive, accessible, and require minimal onboarding.

### 2. Healthcare Professionals
- **Demographics:** Registered nurses, certified caregivers, licensed physiotherapists, and registered medical practitioners. Age range 22-60.
- **Needs:** Flexible working hours, reliable and timely payouts, safety during home visits, reduction in administrative overhead.
- **Tech Comfort:** Moderate to high. Used to clinical systems but appreciate modern, consumer-grade mobile experiences.

### 3. Platform Operations / Admin Team
- **Demographics:** Internal employees of the platform company. Includes KYC verifiers, support agents, financial controllers, and operational managers.
- **Needs:** High-density data views, bulk actions, clear escalation paths, robust audit logs, and override capabilities.
- **Tech Comfort:** High. Can handle complex dashboards and data tables.

### 4. Organizations / Hospitals
- **Demographics:** B2B users, typically nursing directors, HR managers, or facility administrators.
- **Needs:** Ability to request staff in bulk or for recurring shifts, strict compliance verification, consolidated invoicing, and timesheet management.
- **Tech Comfort:** Moderate to high. Familiar with enterprise procurement and HR systems.

## 3.6 Platform Stakeholders
| Stakeholder Group | Primary Interest / KPI | Interaction Level |
|---|---|---|
| **Investors / Board** | Platform revenue, gross margin, growth rate, market share. | Strategic |
| **Executive Team (CEO/COO)** | Business metrics, operational efficiency, regulatory compliance. | Strategic |
| **Operations Managers** | Matching efficiency, KYC turnaround time, support volume. | Daily / Tactical |
| **Clinical Directors** | Quality of care, scope of practice adherence, credentialing. | Governance |
| **Finance Team** | Payment reconciliation, payout accuracy, tax compliance. | Daily / Tactical |
| **Legal / Compliance** | Data privacy, employment law, healthcare regulations. | Governance |

## 3.7 Business Capabilities
The platform must support the following high-level business capabilities:

1. **Professional Verification (KYC/Credentialing):** Secure upload, review, and approval of identity and medical credentials.
2. **Booking Management:** Creation, modification, cancellation, and tracking of service requests.
3. **Matching Engine:** Connecting available, qualified professionals to specific client or organizational requests based on location, service type, and availability.
4. **Payment Processing:** Secure capture of client funds, invoicing, and receipt generation.
5. **Payout Management:** Calculation of professional earnings, deductions, and batch processing of payouts.
6. **Customer Support:** Integrated ticketing system for dispute resolution and assistance.
7. **Reporting & Analytics:** Financial, operational, and clinical performance dashboards.
8. **Role-Based Access Control (RBAC):** Granular permissions for admin users based on their operational function.

## 3.8 Revenue / Fee Model
The primary revenue stream is transactional.

- **Transaction Commission:** The platform takes a percentage cut of the total booking value. 
  - **[OPEN DECISION]** OQ-001: Is the fee entirely deducted from the professional's payout, added as a premium to the client's cost, or a hybrid?
- **Future Revenue Streams (Deferred to Post-MVP):**
  - **Premium Listings:** Professionals paying for higher visibility.
  - **Organization Subscriptions:** SaaS fee for hospitals to use the platform for internal roster management.
  - **Urgent Booking Surcharges:** Additional fees applied for care requested within 24 hours.

## 3.9 Marketplace Model
This is a **Two-sided marketplace (Client ↔ Professional)** with a **B2B extension (Organization ↔ Professional)**.

- **Platform-Mediated Matching:** Unlike a pure directory where clients browse and contact professionals directly, this platform mediates the transaction to ensure quality and compliance. 
- **[BUSINESS RULE]** Clients request a service, and the platform (via algorithm or admin intervention) assigns the best-fit professional.
- **[BUSINESS RULE]** Professionals receive job requests and have the right to Accept or Reject them based on their availability.

## 3.10 Service Model
The platform initially supports 5 core services. Each has specific requirements:

| Service Type | Scope of Practice | Typical Duration | Required Qualifications |
|---|---|---|---|
| **Home Nursing** | IV administration, wound care, medication management, post-op monitoring. | 2 - 12 hours | Registered Nurse (RN), Licensed Practical Nurse (LPN) |
| **Caregiver / Attendant** | ADLs (Activities of Daily Living), bathing, feeding, companionship, mobility assistance. | 4 - 24 hours | Certified Nursing Assistant (CNA), Home Health Aide (HHA) |
| **Physiotherapy** | Post-surgical rehab, mobility exercises, pain management, stroke recovery. | 45 - 90 mins | Licensed Physiotherapist (PT) |
| **Doctor Visit** | General consultation, prescription refills, acute non-emergency diagnosis. | 30 - 60 mins | Medical Doctor (MD, DO) |
| **Specialized Care** | Dementia care, palliative care, pediatric special needs. | Varies | Varies depending on specialty |

## 3.11 Operational Model
The platform is heavily reliant on the Admin/Operations team to ensure smooth functioning, especially during the MVP phase before advanced automation is built.

- **KYC Verification Queue:** Admins manually review uploaded documents against state registries.
- **Booking Oversight:** Admins monitor bookings that are "Stuck" (e.g., requested but not accepted by any professional within 2 hours).
- **Matching Exceptions:** Admins can manually override algorithmic matches in emergency situations or VIP client requests.
- **Support Escalation:** Admins handle disputes, particularly those involving refunds or service quality complaints.
- **Payout Processing:** Finance admins review and approve weekly payout batches.

## 3.12 Customer Support Model
Support is integrated directly into the platform via a ticket-based system.

- **[BUSINESS RULE]** All roles (Client, Professional, Organization) can create support tickets.
- **Categories:** Booking Issue, Payment/Billing, KYC/Verification, Service Quality, Technical Support.
- **Ticket States:** Open → Assigned → In Progress → Resolved → Reopened.
- **[UI RULE]** Support interactions must maintain the professional, clinical tone of the platform.

## 3.13 Professional Verification Model
The KYC (Know Your Customer / Credentialing) workflow is the critical gatekeeper of the platform.

- **Workflow:** 
  1. Identity Verification (Gov ID).
  2. Qualification Validation (License numbers, diplomas).
  3. Background Check Placeholder (Integration with 3rd party to be defined).
- **KYC States:** 
  - `Not Started`
  - `Draft`
  - `Submitted`
  - `Under Review`
  - `Approved`
  - `Rejected`
  - `Re-upload Required`
  - `Expired`
- **[SECURITY RULE]** Document storage must comply with local data protection regulations regarding sensitive personal information.

## 3.14 Organization Staffing Model
The B2B component allows healthcare facilities to supplement their workforce.

- **Staffing Requests:** Organizations can request multiple professionals for specific shifts (e.g., "Need 3 RNs for Night Shift on Friday").
- **Roster Management:** View assigned professionals and their compliance status.
- **Timesheet Approval:** Organization admins must digitally sign off on the hours worked by the professional before payouts are triggered.

## 3.15 Success Metrics
The platform's success will be evaluated against the following KPIs:

- **Volume Metrics:** Total bookings completed per month, Total active professionals.
- **Efficiency Metrics:** Time to first booking (from professional approval), Matching rate (% of requests fulfilled), KYC approval turnaround time.
- **Quality Metrics:** Client satisfaction score (CSAT out of 5), Professional retention rate (active > 3 months), Support resolution time.
- **Financial Metrics:** Gross Merchandise Value (GMV), Net Platform Revenue.

## 3.16 Business Risks
- **Marketplace Cold Start:** Difficulty in attracting clients without sufficient professionals, and vice versa.
- **Regulatory Uncertainty:** Changing laws regarding gig-economy workers and healthcare staffing compliance.
- **Professional Churn:** Professionals leaving the platform to work directly with clients (disintermediation) or joining competitor agencies.
- **Pricing Sensitivity:** Balancing competitive pricing for clients while maintaining attractive payouts for professionals.

## 3.17 Operational Risks
- **KYC Bottleneck:** Manual verification causing massive delays in professional onboarding.
- **Matching Failure:** High rate of unfulfilled bookings leading to brand damage.
- **Payment Disputes:** High chargeback rates or disputes over hours worked.
- **Support Overload:** Inefficient self-service tools leading to a high volume of low-value support tickets.

## 3.18 Healthcare / Privacy Risks
**[CRITICAL RULE]** The PRD explicitly states that production healthcare licensing, scope of practice, patient privacy, consent, payments/tax, employment classification, and local regulatory requirements require separate validation.

- **Patient Data Handling:** Unauthorized access to PHI (Protected Health Information).
- **Licensing:** Deploying a professional with an expired or suspended license.
- **Scope of Practice:** Professionals performing tasks outside their legal purview.
- **Consent:** Failure to capture explicit patient consent for treatment and data processing.

## 3.19 MVP Boundaries
Clear delineation of what is included in the initial launch versus what is deferred.

**In MVP:**
- Core Booking Flow (Client requests, Professional accepts)
- Basic rule-based matching (Location + Service Type)
- KYC document upload and manual admin review
- Integration with standard payment gateway for upfront capture
- Admin dashboard for manual operational oversight

**Deferred (Post-MVP):**
- Advanced AI/ML driven matching algorithms
- Insurance / Medicare / Medicaid integration
- Real-time live GPS tracking of professionals
- Automated background check API integrations
- In-app video consultations

## 3.20 Future Expansion
Potential roadmap items beyond the immediate operational focus:
- Integration with Electronic Health Records (EHR) systems.
- Expansion into medical equipment rentals (e.g., hospital beds, oxygen concentrators).
- White-label versions of the platform for large hospital networks.
- Subscription-based wellness plans for chronic care management.

## 3.21 Open Questions
The following business decisions remain unresolved and require stakeholder sign-off:

- **OQ-001:** What is the exact platform commission percentage or fee structure?
- **OQ-002:** What is the legal employment classification model for professionals in our initial launch market?
- **OQ-003:** Which payment gateway will be used, and how will escrow/payout mechanics be technically handled to ensure compliance?
- **OQ-004:** Who is the legal entity responsible in case of a malpractice claim during a platform-booked service?
- **OQ-005:** What is the SLA (Service Level Agreement) for admin review of KYC documents?
- **OQ-006:** Do organizations require a different SLA or pricing model compared to individual clients?
- **OQ-007:** Are there specific medical procedures that are strictly prohibited from being performed under any platform-facilitated booking?
- **OQ-008:** How do we handle cancellations initiated by the professional within 2 hours of the scheduled start time?
- **OQ-009:** What is the penalty for disintermediation (client and professional transacting off-platform)?
- **OQ-010:** Which specific third-party service will be used for automated background checks in the future?

---
*Document Version: 1.0*
*Status: DRAFT*
