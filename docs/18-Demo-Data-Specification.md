# 18 - Demo Data Specification

**Status:** Draft
**Target Audience:** Engineering, QA, Design

This is the Demo Data Specification for the Healthcare Staffing & Home Care Platform. This data is designed for populating development, staging, and demo environments to provide a realistic, fully-featured state for testing and demonstration purposes.

> [!WARNING] BUSINESS RULE
> All data is SYNTHETIC. No real personal information, phone numbers, emails, or government IDs are used. 

## 1. Demo Data Principles
- **Deterministic:** All data must be deterministic (same seed/script = same data) to ensure consistent test scenarios.
- **Clearly Synthetic:** Use obvious dummy formats (e.g., `+91-XXXXX-X0001`, `.test` domains).
- **Comprehensive:** Covers EVERY major UI state and transition (KYC states, booking states, payment states).
- **Sufficient Volume:** Enough records to demonstrate pagination, filtering, search, and dashboard aggregations.
- **Realistic:** Uses realistic names, addresses (Bangalore context), and medical terminology to be believable during demonstrations.

---

## 2. Professional Profiles (20 Total)

**Distribution by Service Category:**
- Home Nursing: 6 (BSN, RN, GNM)
- Caregiver / Attendant: 5 (CNA, Home Health Aide)
- Physiotherapy: 4 (DPT, BPT, MPT)
- Doctor Visit: 3 (MBBS, MD)
- Specialized Care: 2 (ICU Nurse, Palliative)

**Distribution by KYC Status:**
- Approved: 12
- Under Review: 3
- Submitted: 2
- Rejected: 1
- Re-upload Required: 1
- Expired: 1

**Distribution by Availability:**
- Online / Available: 8
- Offline: 5
- Busy (In Visit): 3
- Pending Verification: 3
- Suspended: 1

### Detailed Professional Records

**PRO-001**
- **First Name:** Anjali
- **Last Name:** Sharma
- **Display Name:** Anjali Sharma
- **Email:** anjali.sharma@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0001
- **Gender:** Female
- **Age:** 29
- **Qualification:** BSN, RN
- **Qualification Detail:** Bachelor of Science in Nursing, Registered Nurse
- **Specializations:** Post-operative care, Wound management, IV therapy
- **Experience Years:** 6
- **Services:** Home Nursing
- **Service Radius:** 15 km
- **Location:** Koramangala, Bangalore
- **Latitude:** 12.9352 | **Longitude:** 77.6245
- **Languages:** English, Hindi, Kannada
- **Hourly Rate:** ₹800
- **Rating:** 4.9 | **Review Count:** 47 | **Total Visits:** 156
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Experienced registered nurse specializing in post-surgical home care with a focus on patient comfort and quick recovery."
- **Avatar:** pro-avatar-01.webp

**PRO-002**
- **First Name:** Rajesh
- **Last Name:** Kumar
- **Display Name:** Rajesh Kumar
- **Email:** rajesh.kumar@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0002
- **Gender:** Male
- **Age:** 34
- **Qualification:** BPT
- **Qualification Detail:** Bachelor of Physiotherapy
- **Specializations:** Stroke Rehabilitation, Sports Injuries
- **Experience Years:** 10
- **Services:** Physiotherapy
- **Service Radius:** 10 km
- **Location:** Indiranagar, Bangalore
- **Latitude:** 12.9784 | **Longitude:** 77.6408
- **Languages:** English, Kannada, Telugu
- **Hourly Rate:** ₹1200
- **Rating:** 4.8 | **Review Count:** 32 | **Total Visits:** 112
- **KYC Status:** Approved
- **Availability Status:** Busy (In Visit)
- **Bio:** "Dedicated physiotherapist helping patients regain mobility after severe trauma and strokes."
- **Avatar:** pro-avatar-02.webp

**PRO-003**
- **First Name:** Sunita
- **Last Name:** Rao
- **Display Name:** Sunita Rao
- **Email:** sunita.rao@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0003
- **Gender:** Female
- **Age:** 45
- **Qualification:** CNA
- **Qualification Detail:** Certified Nursing Assistant
- **Specializations:** Elderly Daily Assistance, Dementia Care
- **Experience Years:** 15
- **Services:** Caregiver
- **Service Radius:** 8 km
- **Location:** Jayanagar, Bangalore
- **Latitude:** 12.9299 | **Longitude:** 77.5824
- **Languages:** English, Kannada, Tamil
- **Hourly Rate:** ₹500
- **Rating:** 5.0 | **Review Count:** 89 | **Total Visits:** 420
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Compassionate caregiver with 15 years of experience supporting elderly patients with dignity and respect."
- **Avatar:** pro-avatar-03.webp

**PRO-004**
- **First Name:** Dr. Vikram
- **Last Name:** Singh
- **Display Name:** Dr. Vikram Singh
- **Email:** vikram.singh@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0004
- **Gender:** Male
- **Age:** 41
- **Qualification:** MBBS, MD
- **Qualification Detail:** MD in General Medicine
- **Specializations:** Geriatrics, Chronic Disease Management
- **Experience Years:** 12
- **Services:** Doctor Visit
- **Service Radius:** 20 km
- **Location:** Whitefield, Bangalore
- **Latitude:** 12.9698 | **Longitude:** 77.7499
- **Languages:** English, Hindi
- **Hourly Rate:** ₹2000
- **Rating:** 4.7 | **Review Count:** 24 | **Total Visits:** 65
- **KYC Status:** Approved
- **Availability Status:** Offline
- **Bio:** "General physician providing comprehensive in-home consultations for bedridden and elderly patients."
- **Avatar:** pro-avatar-04.webp

**PRO-005**
- **First Name:** Meera
- **Last Name:** Reddy
- **Display Name:** Meera Reddy
- **Email:** meera.reddy@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0005
- **Gender:** Female
- **Age:** 31
- **Qualification:** ICU Nurse
- **Qualification Detail:** Certified Critical Care Nurse
- **Specializations:** Ventilator management, Tracheostomy care
- **Experience Years:** 8
- **Services:** Specialized Care
- **Service Radius:** 25 km
- **Location:** HSR Layout, Bangalore
- **Latitude:** 12.9121 | **Longitude:** 77.6446
- **Languages:** English, Telugu, Kannada
- **Hourly Rate:** ₹2500
- **Rating:** 4.9 | **Review Count:** 18 | **Total Visits:** 45
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Specialized ICU nurse bringing hospital-level critical care to the comfort of your home."
- **Avatar:** pro-avatar-05.webp

**PRO-006**
- **First Name:** Karthik
- **Last Name:** Iyer
- **Display Name:** Karthik Iyer
- **Email:** karthik.iyer@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0006
- **Gender:** Male
- **Age:** 26
- **Qualification:** GNM
- **Qualification Detail:** General Nursing and Midwifery
- **Specializations:** Medication administration, Vitals monitoring
- **Experience Years:** 3
- **Services:** Home Nursing
- **Service Radius:** 12 km
- **Location:** Malleshwaram, Bangalore
- **Latitude:** 13.0031 | **Longitude:** 77.5643
- **Languages:** English, Tamil, Kannada
- **Hourly Rate:** ₹700
- **Rating:** 4.5 | **Review Count:** 12 | **Total Visits:** 34
- **KYC Status:** Under Review
- **Availability Status:** Pending Verification
- **Bio:** "Energetic nursing professional dedicated to providing excellent routine care and monitoring."
- **Avatar:** pro-avatar-06.webp

**PRO-007**
- **First Name:** Priya
- **Last Name:** Desai
- **Display Name:** Priya Desai
- **Email:** priya.desai@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0007
- **Gender:** Female
- **Age:** 28
- **Qualification:** MPT
- **Qualification Detail:** Master of Physiotherapy (Orthopedics)
- **Specializations:** Post-Fracture Rehab, Joint Replacement Rehab
- **Experience Years:** 5
- **Services:** Physiotherapy
- **Service Radius:** 15 km
- **Location:** JP Nagar, Bangalore
- **Latitude:** 12.9063 | **Longitude:** 77.5857
- **Languages:** English, Hindi, Gujarati
- **Hourly Rate:** ₹1400
- **Rating:** 4.9 | **Review Count:** 41 | **Total Visits:** 128
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Orthopedic physiotherapist focused on accelerated recovery protocols post-surgery."
- **Avatar:** pro-avatar-07.webp

**PRO-008**
- **First Name:** Amit
- **Last Name:** Patel
- **Display Name:** Amit Patel
- **Email:** amit.patel@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0008
- **Gender:** Male
- **Age:** 35
- **Qualification:** Trained Caregiver
- **Qualification Detail:** Certificate in Home Health Aide
- **Specializations:** Night Attendant, Mobility Assistance
- **Experience Years:** 7
- **Services:** Caregiver
- **Service Radius:** 20 km
- **Location:** Electronic City, Bangalore
- **Latitude:** 12.8452 | **Longitude:** 77.6602
- **Languages:** English, Hindi
- **Hourly Rate:** ₹450
- **Rating:** 4.6 | **Review Count:** 55 | **Total Visits:** 190
- **KYC Status:** Approved
- **Availability Status:** Busy (In Visit)
- **Bio:** "Reliable night attendant ensuring patient safety and comfort throughout the night."
- **Avatar:** pro-avatar-08.webp

**PRO-009**
- **First Name:** Dr. Sneha
- **Last Name:** Krishnan
- **Display Name:** Dr. Sneha Krishnan
- **Email:** sneha.krishnan@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0009
- **Gender:** Female
- **Age:** 38
- **Qualification:** MBBS
- **Qualification Detail:** Bachelor of Medicine, Bachelor of Surgery
- **Specializations:** General Health Check, Fever Management
- **Experience Years:** 14
- **Services:** Doctor Visit
- **Service Radius:** 10 km
- **Location:** BTM Layout, Bangalore
- **Latitude:** 12.9166 | **Longitude:** 77.6101
- **Languages:** English, Malayalam, Kannada
- **Hourly Rate:** ₹1500
- **Rating:** 4.8 | **Review Count:** 33 | **Total Visits:** 89
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Family physician available for routine checkups and minor ailments at home."
- **Avatar:** pro-avatar-09.webp

**PRO-010**
- **First Name:** Lakshmi
- **Last Name:** Narayanan
- **Display Name:** Lakshmi Narayanan
- **Email:** lakshmi.n@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0010
- **Gender:** Female
- **Age:** 42
- **Qualification:** Palliative Care Specialist
- **Qualification Detail:** Diploma in Palliative Nursing
- **Specializations:** Pain management, End-of-life care
- **Experience Years:** 18
- **Services:** Specialized Care
- **Service Radius:** 30 km
- **Location:** Marathahalli, Bangalore
- **Latitude:** 12.9569 | **Longitude:** 77.7011
- **Languages:** English, Tamil, Hindi
- **Hourly Rate:** ₹2000
- **Rating:** 5.0 | **Review Count:** 21 | **Total Visits:** 40
- **KYC Status:** Approved
- **Availability Status:** Offline
- **Bio:** "Providing holistic, empathetic palliative care focused on quality of life and symptom relief."
- **Avatar:** pro-avatar-10.webp

**PRO-011**
- **First Name:** Rahul
- **Last Name:** Verma
- **Display Name:** Rahul Verma
- **Email:** rahul.verma@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0011
- **Gender:** Male
- **Age:** 27
- **Qualification:** RN
- **Qualification Detail:** Registered Nurse
- **Specializations:** IV Therapy & Injections, Catheter Care
- **Experience Years:** 4
- **Services:** Home Nursing
- **Service Radius:** 10 km
- **Location:** Koramangala, Bangalore
- **Latitude:** 12.9340 | **Longitude:** 77.6150
- **Languages:** English, Hindi
- **Hourly Rate:** ₹900
- **Rating:** 4.7 | **Review Count:** 28 | **Total Visits:** 75
- **KYC Status:** Submitted
- **Availability Status:** Pending Verification
- **Bio:** "Skilled in aseptic techniques and minimally invasive procedures at home."
- **Avatar:** pro-avatar-11.webp

**PRO-012**
- **First Name:** Divya
- **Last Name:** Menon
- **Display Name:** Divya Menon
- **Email:** divya.menon@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0012
- **Gender:** Female
- **Age:** 33
- **Qualification:** DPT
- **Qualification Detail:** Doctor of Physical Therapy
- **Specializations:** Neurological Rehab, Parkinson's Care
- **Experience Years:** 9
- **Services:** Physiotherapy
- **Service Radius:** 15 km
- **Location:** HSR Layout, Bangalore
- **Latitude:** 12.9080 | **Longitude:** 77.6400
- **Languages:** English, Malayalam
- **Hourly Rate:** ₹1500
- **Rating:** 4.9 | **Review Count:** 45 | **Total Visits:** 150
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Specialist in neuro-physiotherapy helping patients improve balance and coordination."
- **Avatar:** pro-avatar-12.webp

**PRO-013**
- **First Name:** Suresh
- **Last Name:** Babu
- **Display Name:** Suresh Babu
- **Email:** suresh.babu@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0013
- **Gender:** Male
- **Age:** 50
- **Qualification:** Trained Caregiver
- **Qualification Detail:** Advanced Home Care Attendant
- **Specializations:** Bedridden Patient Care, Hygiene Maintenance
- **Experience Years:** 20
- **Services:** Caregiver
- **Service Radius:** 10 km
- **Location:** Jayanagar, Bangalore
- **Latitude:** 12.9250 | **Longitude:** 77.5900
- **Languages:** English, Kannada
- **Hourly Rate:** ₹550
- **Rating:** 4.8 | **Review Count:** 112 | **Total Visits:** 500
- **KYC Status:** Approved
- **Availability Status:** Online
- **Bio:** "Highly experienced attendant providing dignified care for fully bedridden patients."
- **Avatar:** pro-avatar-13.webp

**PRO-014**
- **First Name:** Dr. Anil
- **Last Name:** Kapoor
- **Display Name:** Dr. Anil Kapoor
- **Email:** anil.kapoor@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0014
- **Gender:** Male
- **Age:** 55
- **Qualification:** MBBS
- **Qualification Detail:** General Practitioner
- **Specializations:** Follow-up Consultation, Diabetic Care
- **Experience Years:** 30
- **Services:** Doctor Visit
- **Service Radius:** 8 km
- **Location:** Indiranagar, Bangalore
- **Latitude:** 12.9800 | **Longitude:** 77.6450
- **Languages:** English, Hindi, Punjabi
- **Hourly Rate:** ₹1200
- **Rating:** 4.6 | **Review Count:** 88 | **Total Visits:** 200
- **KYC Status:** Expired
- **Availability Status:** Suspended
- **Bio:** "Veteran GP focusing on chronic disease management and routine follow-ups."
- **Avatar:** pro-avatar-14.webp

**PRO-015**
- **First Name:** Neha
- **Last Name:** Gupta
- **Display Name:** Neha Gupta
- **Email:** neha.gupta@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0015
- **Gender:** Female
- **Age:** 25
- **Qualification:** BSN
- **Qualification Detail:** Bachelor of Science in Nursing
- **Specializations:** Wound Dressing & Care
- **Experience Years:** 2
- **Services:** Home Nursing
- **Service Radius:** 15 km
- **Location:** Whitefield, Bangalore
- **Latitude:** 12.9700 | **Longitude:** 77.7500
- **Languages:** English, Hindi
- **Hourly Rate:** ₹700
- **Rating:** 4.4 | **Review Count:** 10 | **Total Visits:** 25
- **KYC Status:** Rejected
- **Availability Status:** Pending Verification
- **Bio:** "Recent BSN graduate with excellent modern clinical skills in wound management."
- **Avatar:** pro-avatar-15.webp

**PRO-016**
- **First Name:** Vikram
- **Last Name:** Bhat
- **Display Name:** Vikram Bhat
- **Email:** vikram.bhat@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0016
- **Gender:** Male
- **Age:** 30
- **Qualification:** BPT
- **Qualification Detail:** Bachelor of Physiotherapy
- **Specializations:** Post-Surgical Rehab
- **Experience Years:** 6
- **Services:** Physiotherapy
- **Service Radius:** 12 km
- **Location:** JP Nagar, Bangalore
- **Latitude:** 12.9050 | **Longitude:** 77.5800
- **Languages:** English, Kannada, Hindi
- **Hourly Rate:** ₹1000
- **Rating:** 4.7 | **Review Count:** 50 | **Total Visits:** 140
- **KYC Status:** Approved
- **Availability Status:** Offline
- **Bio:** "Dedicated to helping you get back on your feet after orthopedic surgeries."
- **Avatar:** pro-avatar-16.webp

**PRO-017**
- **First Name:** Kavita
- **Last Name:** Joshi
- **Display Name:** Kavita Joshi
- **Email:** kavita.joshi@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0017
- **Gender:** Female
- **Age:** 36
- **Qualification:** CNA
- **Qualification Detail:** Certified Nursing Assistant
- **Specializations:** Elderly Daily Assistance
- **Experience Years:** 10
- **Services:** Caregiver
- **Service Radius:** 10 km
- **Location:** Malleshwaram, Bangalore
- **Latitude:** 13.0050 | **Longitude:** 77.5600
- **Languages:** English, Hindi, Marathi
- **Hourly Rate:** ₹500
- **Rating:** 4.9 | **Review Count:** 75 | **Total Visits:** 300
- **KYC Status:** Re-upload Required
- **Availability Status:** Offline
- **Bio:** "Friendly and attentive caregiver for your loved ones."
- **Avatar:** pro-avatar-17.webp

**PRO-018**
- **First Name:** Rohit
- **Last Name:** Das
- **Display Name:** Rohit Das
- **Email:** rohit.das@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0018
- **Gender:** Male
- **Age:** 28
- **Qualification:** RN
- **Qualification Detail:** Registered Nurse
- **Specializations:** Post-Surgical Care
- **Experience Years:** 5
- **Services:** Home Nursing
- **Service Radius:** 15 km
- **Location:** BTM Layout, Bangalore
- **Latitude:** 12.9150 | **Longitude:** 77.6150
- **Languages:** English, Bengali, Hindi
- **Hourly Rate:** ₹800
- **Rating:** 4.8 | **Review Count:** 40 | **Total Visits:** 110
- **KYC Status:** Under Review
- **Availability Status:** Pending Verification
- **Bio:** "Providing safe and efficient post-op care in home settings."
- **Avatar:** pro-avatar-18.webp

**PRO-019**
- **First Name:** Anita
- **Last Name:** Nair
- **Display Name:** Anita Nair
- **Email:** anita.nair@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0019
- **Gender:** Female
- **Age:** 40
- **Qualification:** Home Health Aide
- **Qualification Detail:** Certified HHA
- **Specializations:** Night Attendant
- **Experience Years:** 12
- **Services:** Caregiver
- **Service Radius:** 12 km
- **Location:** Electronic City, Bangalore
- **Latitude:** 12.8500 | **Longitude:** 77.6650
- **Languages:** English, Malayalam
- **Hourly Rate:** ₹450
- **Rating:** 4.7 | **Review Count:** 60 | **Total Visits:** 220
- **KYC Status:** Approved
- **Availability Status:** Busy (In Visit)
- **Bio:** "Vigilant night care ensuring peace of mind for families."
- **Avatar:** pro-avatar-19.webp

**PRO-020**
- **First Name:** Sanjay
- **Last Name:** Patil
- **Display Name:** Sanjay Patil
- **Email:** sanjay.patil@demo.healthplatform.test
- **Phone:** +91-XXXXX-X0020
- **Gender:** Male
- **Age:** 32
- **Qualification:** GNM
- **Qualification Detail:** General Nursing
- **Specializations:** Vitals Monitoring
- **Experience Years:** 7
- **Services:** Home Nursing
- **Service Radius:** 20 km
- **Location:** Marathahalli, Bangalore
- **Latitude:** 12.9550 | **Longitude:** 77.7050
- **Languages:** English, Hindi, Kannada
- **Hourly Rate:** ₹750
- **Rating:** 4.6 | **Review Count:** 30 | **Total Visits:** 95
- **KYC Status:** Submitted
- **Availability Status:** Pending Verification
- **Bio:** "Experienced nurse for daily vitals and medication management."
- **Avatar:** pro-avatar-20.webp

---

## 3. Client Profiles (10 Total)

**CLT-001**
- **First Name:** Rahul
- **Last Name:** Mehta
- **Email:** rahul.mehta@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0001
- **Location:** HSR Layout, Bangalore
- **Patients:** `[{"name": "Savita Mehta", "relationship": "mother", "age": 68, "condition": "Post hip replacement"}]`
- **Booking Count:** 5

**CLT-002**
- **First Name:** Sneha
- **Last Name:** Kapoor
- **Email:** sneha.kapoor@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0002
- **Location:** Indiranagar, Bangalore
- **Patients:** `[{"name": "Ravi Kapoor", "relationship": "father", "age": 75, "condition": "Dementia"}]`
- **Booking Count:** 12

**CLT-003**
- **First Name:** Amit
- **Last Name:** Singhal
- **Email:** amit.singhal@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0003
- **Location:** Koramangala, Bangalore
- **Patients:** `[{"name": "Amit Singhal", "relationship": "self", "age": 35, "condition": "Post-ACL surgery rehab"}]`
- **Booking Count:** 3

**CLT-004**
- **First Name:** Pooja
- **Last Name:** Hegde
- **Email:** pooja.hegde@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0004
- **Location:** Jayanagar, Bangalore
- **Patients:** `[{"name": "Kishan Hegde", "relationship": "grandfather", "age": 82, "condition": "Bedridden, requires daily assistance"}]`
- **Booking Count:** 8

**CLT-005**
- **First Name:** Vikram
- **Last Name:** Chatterjee
- **Email:** vikram.chatterjee@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0005
- **Location:** Whitefield, Bangalore
- **Patients:** `[{"name": "Ananya Chatterjee", "relationship": "wife", "age": 42, "condition": "Palliative care"}]`
- **Booking Count:** 15

**CLT-006**
- **First Name:** Deepika
- **Last Name:** Padukone
- **Email:** deepika.p@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0006
- **Location:** Malleshwaram, Bangalore
- **Patients:** `[{"name": "Prakash Padukone", "relationship": "father", "age": 70, "condition": "Stroke recovery"}]`
- **Booking Count:** 6

**CLT-007**
- **First Name:** Karan
- **Last Name:** Johar
- **Email:** karan.j@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0007
- **Location:** JP Nagar, Bangalore
- **Patients:** `[{"name": "Hiroo Johar", "relationship": "mother", "age": 78, "condition": "General weakness, needs night attendant"}]`
- **Booking Count:** 20

**CLT-008**
- **First Name:** Shruti
- **Last Name:** Hassan
- **Email:** shruti.h@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0008
- **Location:** Electronic City, Bangalore
- **Patients:** `[{"name": "Shruti Hassan", "relationship": "self", "age": 28, "condition": "Severe viral fever, needs IV fluids"}]`
- **Booking Count:** 1

**CLT-009**
- **First Name:** Manoj
- **Last Name:** Bajpayee
- **Email:** manoj.b@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0009
- **Location:** BTM Layout, Bangalore
- **Patients:** `[{"name": "Radhika Bajpayee", "relationship": "wife", "age": 45, "condition": "Post-operative wound care"}]`
- **Booking Count:** 4

**CLT-010**
- **First Name:** Nithya
- **Last Name:** Menen
- **Email:** nithya.m@demo.healthplatform.test
- **Phone:** +91-XXXXX-C0010
- **Location:** Marathahalli, Bangalore
- **Patients:** `[{"name": "Suresh Menen", "relationship": "father", "age": 72, "condition": "Diabetic foot ulcer management"}]`
- **Booking Count:** 7

---

## 4. Organizations (3 Total)

| ID | Name | Type | Contact | Active Shifts | Professionals Assigned |
|---|---|---|---|---|---|
| ORG-001 | City General Hospital | Hospital | Dr. Sharma | 12 | 8 |
| ORG-002 | Sunshine Senior Care | Elderly Care Facility | Anita Verma | 6 | 4 |
| ORG-003 | Apex Medical Center | Multi-specialty Clinic | Rajesh Kumar | 4 | 3 |

---

## 5. Services (11 Total)

| ID | Category | Service Name | Base Hourly Rate | Typical Duration | Qualifications Required |
|---|---|---|---|---|---|
| SVC-001 | Home Nursing | Post-Surgical Care | ₹800/hr | 4-8 hours | RN, BSN |
| SVC-002 | Home Nursing | Wound Dressing & Care | ₹700/hr | 1-2 hours | RN, GNM |
| SVC-003 | Home Nursing | IV Therapy & Injections | ₹900/hr | 1-3 hours | RN |
| SVC-004 | Caregiver | Elderly Daily Assistance | ₹500/hr | 8-12 hours | CNA, Trained Caregiver |
| SVC-005 | Caregiver | Night Attendant | ₹450/hr | 10-12 hours | Trained Caregiver |
| SVC-006 | Physiotherapy | Stroke Rehabilitation | ₹1200/hr | 1-2 hours | DPT, MPT |
| SVC-007 | Physiotherapy | Post-Fracture Rehab | ₹1000/hr | 1 hour | BPT, DPT |
| SVC-008 | Doctor Visit | General Health Check | ₹1500/visit | 30-60 min | MBBS |
| SVC-009 | Doctor Visit | Follow-up Consultation | ₹1200/visit | 20-40 min | MBBS |
| SVC-010 | Specialized | ICU Care at Home | ₹2500/hr | 12-24 hours | ICU-trained RN |
| SVC-011 | Specialized | Palliative Care | ₹2000/hr | 4-8 hours | Palliative Care Specialist |

---

## 6. Bookings (25 Total)

**BKG-001** (Completed + Closed)
- **Client:** CLT-001 | **Patient:** Savita Mehta | **Service:** SVC-001
- **Professional:** PRO-001
- **Status:** Closed
- **Date/Time:** 2026-09-01T09:00:00Z | **Duration:** 4 hours | **Amount:** ₹3200

**BKG-002** (Completed + Closed)
- **Client:** CLT-002 | **Patient:** Ravi Kapoor | **Service:** SVC-004
- **Professional:** PRO-003
- **Status:** Closed
- **Date/Time:** 2026-09-02T08:00:00Z | **Duration:** 8 hours | **Amount:** ₹4000

**BKG-003** (Completed + Closed)
- **Client:** CLT-003 | **Patient:** Amit Singhal | **Service:** SVC-007
- **Professional:** PRO-007
- **Status:** Closed
- **Date/Time:** 2026-09-03T10:00:00Z | **Duration:** 1 hour | **Amount:** ₹1000

**BKG-004** (Completed + Closed)
- **Client:** CLT-004 | **Patient:** Kishan Hegde | **Service:** SVC-005
- **Professional:** PRO-008
- **Status:** Closed
- **Date/Time:** 2026-09-04T20:00:00Z | **Duration:** 10 hours | **Amount:** ₹4500

**BKG-005** (Completed + Closed)
- **Client:** CLT-005 | **Patient:** Ananya Chatterjee | **Service:** SVC-011
- **Professional:** PRO-010
- **Status:** Closed
- **Date/Time:** 2026-09-05T09:00:00Z | **Duration:** 4 hours | **Amount:** ₹8000

**BKG-006** (Completed + Closed)
- **Client:** CLT-006 | **Patient:** Prakash Padukone | **Service:** SVC-006
- **Professional:** PRO-012
- **Status:** Closed
- **Date/Time:** 2026-09-06T11:00:00Z | **Duration:** 1 hour | **Amount:** ₹1200

**BKG-007** (Completed + Closed)
- **Client:** CLT-007 | **Patient:** Hiroo Johar | **Service:** SVC-005
- **Professional:** PRO-019
- **Status:** Closed
- **Date/Time:** 2026-09-07T21:00:00Z | **Duration:** 10 hours | **Amount:** ₹4500

**BKG-008** (Completed + Closed)
- **Client:** CLT-008 | **Patient:** Shruti Hassan | **Service:** SVC-003
- **Professional:** PRO-011
- **Status:** Closed
- **Date/Time:** 2026-09-08T14:00:00Z | **Duration:** 2 hours | **Amount:** ₹1800

**BKG-009** (In Progress)
- **Client:** CLT-002 | **Patient:** Ravi Kapoor | **Service:** SVC-004
- **Professional:** PRO-003
- **Status:** In Progress
- **Date/Time:** 2026-09-16T08:00:00Z | **Duration:** 8 hours | **Amount:** ₹4000

**BKG-010** (In Progress)
- **Client:** CLT-004 | **Patient:** Kishan Hegde | **Service:** SVC-005
- **Professional:** PRO-008
- **Status:** In Progress
- **Date/Time:** 2026-09-15T20:00:00Z | **Duration:** 12 hours | **Amount:** ₹5400

**BKG-011** (Checked In)
- **Client:** CLT-006 | **Patient:** Prakash Padukone | **Service:** SVC-006
- **Professional:** PRO-002
- **Status:** Checked In
- **Date/Time:** 2026-09-16T10:00:00Z | **Duration:** 2 hours | **Amount:** ₹2400

**BKG-012** (On The Way)
- **Client:** CLT-009 | **Patient:** Radhika Bajpayee | **Service:** SVC-002
- **Professional:** PRO-015
- **Status:** On The Way
- **Date/Time:** 2026-09-16T11:00:00Z | **Duration:** 1 hour | **Amount:** ₹700

**BKG-013** (Accepted)
- **Client:** CLT-010 | **Patient:** Suresh Menen | **Service:** SVC-002
- **Professional:** PRO-006
- **Status:** Accepted
- **Date/Time:** 2026-09-17T09:00:00Z | **Duration:** 1 hour | **Amount:** ₹700

**BKG-014** (Accepted)
- **Client:** CLT-001 | **Patient:** Savita Mehta | **Service:** SVC-001
- **Professional:** PRO-001
- **Status:** Accepted
- **Date/Time:** 2026-09-17T14:00:00Z | **Duration:** 4 hours | **Amount:** ₹3200

**BKG-015** (Assigned)
- **Client:** ORG-001 | **Patient:** N/A (Staffing) | **Service:** SVC-001
- **Professional:** PRO-018
- **Status:** Assigned
- **Date/Time:** 2026-09-18T08:00:00Z | **Duration:** 8 hours | **Amount:** ₹6400

**BKG-016** (Matching)
- **Client:** CLT-005 | **Patient:** Ananya Chatterjee | **Service:** SVC-010
- **Professional:** Unassigned
- **Status:** Matching
- **Date/Time:** 2026-09-18T20:00:00Z | **Duration:** 12 hours | **Amount:** ₹30000

**BKG-017** (Requested)
- **Client:** CLT-007 | **Patient:** Hiroo Johar | **Service:** SVC-008
- **Professional:** Unassigned
- **Status:** Requested
- **Date/Time:** 2026-09-19T10:00:00Z | **Duration:** 1 hour | **Amount:** ₹1500

**BKG-018** (Requested)
- **Client:** CLT-003 | **Patient:** Amit Singhal | **Service:** SVC-007
- **Professional:** Unassigned
- **Status:** Requested
- **Date/Time:** 2026-09-19T11:00:00Z | **Duration:** 1 hour | **Amount:** ₹1000

**BKG-019** (Draft)
- **Client:** CLT-008 | **Patient:** Shruti Hassan | **Service:** SVC-009
- **Professional:** Unassigned
- **Status:** Draft
- **Date/Time:** Unscheduled | **Duration:** 1 hour | **Amount:** ₹1200

**BKG-020** (Payment Pending)
- **Client:** CLT-004 | **Patient:** Kishan Hegde | **Service:** SVC-005
- **Professional:** PRO-013
- **Status:** Payment Pending
- **Date/Time:** 2026-09-14T20:00:00Z | **Duration:** 10 hours | **Amount:** ₹5500

**BKG-021** (Cancelled)
- **Client:** CLT-010 | **Patient:** Suresh Menen | **Service:** SVC-008
- **Professional:** Unassigned
- **Status:** Cancelled
- **Date/Time:** 2026-09-10T10:00:00Z | **Duration:** 1 hour | **Amount:** ₹1500

**BKG-022** (Cancelled)
- **Client:** CLT-002 | **Patient:** Ravi Kapoor | **Service:** SVC-004
- **Professional:** PRO-003
- **Status:** Cancelled
- **Date/Time:** 2026-09-11T08:00:00Z | **Duration:** 8 hours | **Amount:** ₹4000

**BKG-023** (Rejected)
- **Client:** CLT-009 | **Patient:** Radhika Bajpayee | **Service:** SVC-001
- **Professional:** PRO-001
- **Status:** Rejected
- **Date/Time:** 2026-09-12T09:00:00Z | **Duration:** 4 hours | **Amount:** ₹3200

**BKG-024** (Disputed)
- **Client:** CLT-006 | **Patient:** Prakash Padukone | **Service:** SVC-006
- **Professional:** PRO-016
- **Status:** Disputed
- **Date/Time:** 2026-09-13T11:00:00Z | **Duration:** 1 hour | **Amount:** ₹1000

**BKG-025** (Completed + Closed)
- **Client:** ORG-002 | **Patient:** N/A (Staffing) | **Service:** SVC-004
- **Professional:** PRO-017
- **Status:** Closed
- **Date/Time:** 2026-09-09T08:00:00Z | **Duration:** 8 hours | **Amount:** ₹4000

---

## 7. Payments (15 Total)

| ID | Booking ID | Amount | Status | Method | Date |
|---|---|---|---|---|---|
| PAY-001 | BKG-001 | ₹3200 | Completed | Card | 2026-09-01 |
| PAY-002 | BKG-002 | ₹4000 | Completed | UPI | 2026-09-02 |
| PAY-003 | BKG-003 | ₹1000 | Completed | Card | 2026-09-03 |
| PAY-004 | BKG-004 | ₹4500 | Completed | NetBanking | 2026-09-04 |
| PAY-005 | BKG-005 | ₹8000 | Completed | Card | 2026-09-05 |
| PAY-006 | BKG-006 | ₹1200 | Completed | UPI | 2026-09-06 |
| PAY-007 | BKG-007 | ₹4500 | Completed | Card | 2026-09-07 |
| PAY-008 | BKG-025 | ₹4000 | Completed | Corporate | 2026-09-09 |
| PAY-009 | BKG-020 | ₹5500 | Pending | Card | - |
| PAY-010 | BKG-011 | ₹2400 | Pending | UPI | - |
| PAY-011 | BKG-012 | ₹700 | Pending | Cash | - |
| PAY-012 | BKG-013 | ₹700 | Failed | Card | 2026-09-16 |
| PAY-013 | BKG-014 | ₹3200 | Failed | UPI | 2026-09-16 |
| PAY-014 | BKG-021 | ₹1500 | Refunded | Card | 2026-09-11 |
| PAY-015 | BKG-024 | ₹1000 | Refund Requested| UPI | 2026-09-14 |

---

## 8. Payouts (10 Total)

| ID | Professional ID | Amount | Period | Status |
|---|---|---|---|---|
| PO-001 | PRO-001 | ₹12500 | Aug Week 4 | Completed |
| PO-002 | PRO-003 | ₹18000 | Aug Week 4 | Completed |
| PO-003 | PRO-007 | ₹8000 | Aug Week 4 | Completed |
| PO-004 | PRO-008 | ₹22500 | Aug Week 4 | Completed |
| PO-005 | PRO-010 | ₹16000 | Aug Week 4 | Completed |
| PO-006 | PRO-001 | ₹9600 | Sep Week 1 | Eligible |
| PO-007 | PRO-003 | ₹12000 | Sep Week 1 | Eligible |
| PO-008 | PRO-012 | ₹6000 | Sep Week 1 | Processing |
| PO-009 | PRO-019 | ₹4500 | Sep Week 1 | Failed (Bank Issue) |
| PO-010 | PRO-016 | ₹3000 | Sep Week 1 | Held (Dispute) |

---

## 9. Support Tickets (8 Total)

| ID | User | Type | Category | Status | Priority |
|---|---|---|---|---|---|
| TKT-001 | CLT-006 | Client | Booking Issue | Open | High |
| TKT-002 | PRO-015 | Pro | KYC Help | Open | Medium |
| TKT-003 | CLT-004 | Client | Payment Issue | Assigned | High |
| TKT-004 | PRO-019 | Pro | Technical | Assigned | Low |
| TKT-005 | CLT-010 | Client | Service Quality | In Progress | High |
| TKT-006 | PRO-001 | Pro | Payment Issue | Resolved | Medium |
| TKT-007 | CLT-002 | Client | Booking Issue | Resolved | Low |
| TKT-008 | ORG-001 | Org | Technical | Reopened | Medium |

---

## 10. Reviews (15 Total)

1. **PRO-001** (Rating: 5.0) - "Anjali was incredibly professional and gentle with my mother post-surgery. Highly recommend!"
2. **PRO-003** (Rating: 4.8) - "Sunita takes great care of my father. She is punctual and very patient."
3. **PRO-007** (Rating: 5.0) - "Excellent physiotherapy sessions. My knee mobility improved drastically in just 2 weeks."
4. **PRO-008** (Rating: 4.5) - "Good night attendant. Kept my grandfather safe. A bit quiet but gets the job done."
5. **PRO-010** (Rating: 5.0) - "Lakshmi provided such compassionate palliative care for my wife. We are forever grateful."
6. **PRO-012** (Rating: 4.9) - "Karthik is very knowledgeable about stroke rehab. Highly recommended."
7. **PRO-019** (Rating: 4.0) - "Anita is good, but arrived 15 mins late one day. Otherwise fine."
8. **PRO-011** (Rating: 4.7) - "Rahul administered the IV smoothly. No pain at all."
9. **PRO-001** (Rating: 4.9) - "Always a reliable nurse to call for post-op care."
10. **PRO-017** (Rating: 3.5) - "Average service. Could be more attentive during the day."
11. **PRO-003** (Rating: 5.0) - "A lifesaver for our family. Sunita handles everything perfectly."
12. **PRO-007** (Rating: 4.8) - "Priya is strict with the exercises, which is exactly what was needed for recovery."
13. **PRO-002** (Rating: 4.6) - "Rajesh knows his stuff. Very professional."
14. **PRO-009** (Rating: 4.9) - "Dr. Sneha was very thorough in her checkup and explained everything clearly."
15. **PRO-013** (Rating: 4.8) - "Suresh is very strong and handles my bedridden father with ease."

---

## 11. Notifications (20 Total)

1. (Unread) - To CLT-002: "Your professional PRO-003 is on the way."
2. (Unread) - To PRO-006: "New booking request from CLT-010."
3. (Read) - To CLT-001: "Booking BKG-001 has been completed."
4. (Read) - To PRO-001: "Payment PO-001 processed successfully."
5. (Unread) - To Admin: "PRO-011 submitted KYC documents for review."
6. (Read) - To PRO-015: "Your KYC was rejected. Please re-upload clearer images."
7. (Unread) - To CLT-006: "Booking BKG-024 status changed to Disputed."
8. (Read) - To PRO-014: "Your license has expired. Profile suspended."
9. (Unread) - To ORG-001: "PRO-018 assigned to your staffing request."
10. (Read) - To CLT-004: "Payment pending for Booking BKG-020."
11. (Read) - To PRO-008: "Reminder: Shift starts in 1 hour."
12. (Unread) - To Admin: "Ticket TKT-001 opened by CLT-006."
13. (Read) - To CLT-008: "Your booking BKG-021 was cancelled."
14. (Read) - To PRO-003: "Client CLT-002 left a 4.8 star review."
15. (Unread) - To PRO-019: "Payout PO-009 failed. Please check bank details."
16. (Read) - To CLT-005: "Still matching a professional for BKG-016."
17. (Unread) - To ORG-002: "Invoice INV-042 generated for last week."
18. (Read) - To PRO-012: "Booking completed. Please submit timesheet."
19. (Read) - To Admin: "System alert: High booking volume in HSR Layout."
20. (Read) - To CLT-009: "PRO-001 is unavailable for the requested time."

---

## 12. Audit Logs (15 Entries)

1. `2026-09-15 10:00:00` - Admin `ADM-01` approved KYC for `PRO-012`.
2. `2026-09-15 10:15:00` - Admin `ADM-01` rejected KYC for `PRO-015`. Reason: Blur ID.
3. `2026-09-15 11:30:00` - System auto-matched `PRO-008` to `BKG-010`.
4. `2026-09-15 14:20:00` - Admin `ADM-02` updated base price of `SVC-010` to ₹2500/hr.
5. `2026-09-16 00:01:00` - System executed batch payout for Aug Week 4.
6. `2026-09-16 08:00:00` - `PRO-003` checked into `BKG-009`.
7. `2026-09-16 09:15:00` - `CLT-006` opened dispute on `BKG-024`.
8. `2026-09-16 09:30:00` - Admin `ADM-03` assigned ticket `TKT-001` to self.
9. `2026-09-16 10:00:00` - `PRO-002` checked into `BKG-011`.
10. `2026-09-16 11:00:00` - `PRO-015` marked status as 'On The Way' for `BKG-012`.
11. `2026-09-16 12:00:00` - Admin `ADM-01` suspended `PRO-014` due to license expiry.
12. `2026-09-16 12:30:00` - `ORG-001` approved timesheet for `PRO-018`.
13. `2026-09-16 13:00:00` - System generated invoice for `ORG-002`.
14. `2026-09-16 14:00:00` - Admin `ADM-02` resolved ticket `TKT-006`.
15. `2026-09-16 15:00:00` - `CLT-001` submitted 5-star review for `BKG-001`.
