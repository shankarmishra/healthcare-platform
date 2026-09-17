/**
 * Pulse n Care — Mock Data for Care Operations Command Center & Staff Duty Portal
 */

import type { StaffProfile, StaffAccount, Duty, StaffLeave, CommunicationLog } from '../types/staff';

export const MOCK_STAFF_ACCOUNTS: StaffAccount[] = [
  {
    id: 'acc-1',
    staffId: 'staff-1',
    loginEmail: 'anita.nursing@pulsen-care.com',
    employeeId: 'PNC-EMP-0012',
    accountStatus: 'active',
    firstLoginRequired: false,
    lastLoginAt: '2026-09-17T08:30:00Z'
  },
  {
    id: 'acc-2',
    staffId: 'staff-2',
    loginEmail: 'rajesh.physio@pulsen-care.com',
    employeeId: 'PNC-EMP-0018',
    accountStatus: 'active',
    firstLoginRequired: false,
    lastLoginAt: '2026-09-16T19:15:00Z'
  },
  {
    id: 'acc-3',
    staffId: 'staff-3',
    loginEmail: 'sunita.care@pulsen-care.com',
    employeeId: 'PNC-EMP-0025',
    accountStatus: 'password_reset_required',
    firstLoginRequired: true
  },
  {
    id: 'acc-4',
    staffId: 'staff-4',
    loginEmail: 'dr.amit.doctor@pulsen-care.com',
    employeeId: 'PNC-EMP-0031',
    accountStatus: 'active',
    firstLoginRequired: false
  },
  {
    id: 'acc-5',
    staffId: 'staff-5',
    loginEmail: 'priya.icu@pulsen-care.com',
    employeeId: 'PNC-EMP-0044',
    accountStatus: 'pending_invite',
    firstLoginRequired: true
  }
];

export const MOCK_STAFF_PROFILES: StaffProfile[] = [
  {
    id: 'staff-1',
    userId: 'u-staff-1',
    employeeId: 'PNC-EMP-0012',
    fullName: 'Anita Sharma',
    displayName: 'Nurse Anita',
    gender: 'female',
    dateOfBirth: '1992-05-14',
    phone: '+91 98112 34567',
    alternatePhone: '+91 98112 34568',
    email: 'anita.nursing@pulsen-care.com',
    residentialAddress: {
      id: 'addr-s1',
      label: 'Home',
      line1: 'Flat 402, Block B, Sector 62',
      city: 'Noida',
      state: 'Uttar Pradesh',
      pincode: '201309',
      latitude: 28.627,
      longitude: 77.3725
    },
    emergencyContact: {
      name: 'Ramesh Sharma',
      relationship: 'Spouse',
      phone: '+91 98112 99999'
    },
    roleCategory: 'registered_nurse',
    primaryServiceId: 'home-nursing',
    eligibleServiceIds: ['home-nursing', '12-hour-caregiver-attendant', 'home-icu-critical-care-nurse'],
    skills: ['Vital Tracking', 'Sterile Dressing', 'Ryle\'s Tube Management', 'Catheter Care', 'IV Fluid Administration', 'Bedside Hygiene'],
    specializations: ['Post-operative Clinical Care', 'Diabetic Care', 'Geriatric Nursing'],
    totalExperienceYears: 6,
    languages: ['Hindi', 'English', 'Punjabi'],
    eligibleCities: ['Noida', 'Delhi', 'Greater Noida'],
    eligibleLocalities: ['Sector 62', 'Sector 18', 'Indirapuram', 'Mayur Vihar', 'Preet Vihar'],
    eligiblePincodes: ['201301', '201309', '110091', '110092'],
    shiftEligibility: {
      canDo12HourDay: true,
      canDo12HourNight: true,
      canDo24HourShift: false,
      canDoB2BHospitalRoster: true
    },
    weeklySchedule: [
      { dayOfWeek: 1, startTime: '08:00', endTime: '20:00', isAvailable: true },
      { dayOfWeek: 2, startTime: '08:00', endTime: '20:00', isAvailable: true },
      { dayOfWeek: 3, startTime: '08:00', endTime: '20:00', isAvailable: true },
      { dayOfWeek: 4, startTime: '08:00', endTime: '20:00', isAvailable: true },
      { dayOfWeek: 5, startTime: '08:00', endTime: '20:00', isAvailable: true },
      { dayOfWeek: 6, startTime: '08:00', endTime: '14:00', isAvailable: true },
      { dayOfWeek: 0, startTime: '00:00', endTime: '00:00', isAvailable: false }
    ],
    employmentStatus: 'active',
    verificationStatus: 'verified',
    onboardingCompletionPercent: 100,
    education: [
      {
        id: 'edu-1',
        qualification: 'B.Sc Nursing',
        institution: 'Delhi Nursing College',
        boardOrUniversity: 'Delhi University',
        completionYear: 2018,
        verificationStatus: 'verified'
      }
    ],
    experience: [
      {
        id: 'exp-1',
        organization: 'Max Healthcare Noida',
        role: 'Senior Staff Nurse (Post-Op Ward)',
        startDate: '2018-06-01',
        endDate: '2023-12-31',
        isCurrent: false,
        responsibilities: 'Managed post-surgical wound care, vitals monitoring, IV lines, and catheter maintenance.',
        verificationStatus: 'verified'
      }
    ],
    documents: [
      {
        id: 'doc-1',
        staffId: 'staff-1',
        type: 'nursing_license',
        documentNumber: 'DNC-RN-88192',
        fileName: 'dnc_nursing_license_anita.pdf',
        fileUrl: '/assets/docs/dnc_nursing_license.pdf',
        uploadedAt: '2024-01-10T10:00:00Z',
        expiresAt: '2029-01-10T10:00:00Z',
        verificationStatus: 'verified'
      },
      {
        id: 'doc-2',
        staffId: 'staff-1',
        type: 'identity_proof',
        documentNumber: 'XXXX-XXXX-9912',
        fileName: 'aadhaar_card_anita.pdf',
        fileUrl: '/assets/docs/aadhaar.pdf',
        uploadedAt: '2024-01-10T10:05:00Z',
        verificationStatus: 'verified'
      }
    ],
    completedDutyCount: 142,
    averageRating: 4.9,
    reviewCount: 38,
    internalNotes: 'Punctual, excellent clinical compliance. Highly requested for wound dressing in Noida.',
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2026-09-15T14:20:00Z'
  },
  {
    id: 'staff-2',
    userId: 'u-staff-2',
    employeeId: 'PNC-EMP-0018',
    fullName: 'Rajesh Kumar',
    displayName: 'Dr. Rajesh (PT)',
    gender: 'male',
    dateOfBirth: '1989-11-20',
    phone: '+91 98765 12345',
    email: 'rajesh.physio@pulsen-care.com',
    residentialAddress: {
      id: 'addr-s2',
      label: 'Home',
      line1: 'DLF Phase 4',
      city: 'Gurugram',
      state: 'Haryana',
      pincode: '122002',
      latitude: 28.4595,
      longitude: 77.0266
    },
    emergencyContact: {
      name: 'Kavita Kumar',
      relationship: 'Spouse',
      phone: '+91 98765 88888'
    },
    roleCategory: 'physiotherapist',
    primaryServiceId: 'orthopedic-joint-rehab-physio',
    eligibleServiceIds: ['orthopedic-joint-rehab-physio', 'general-physician-home-visit'],
    skills: ['Joint Mobilization', 'Gait Training', 'Stroke Rehabilitation', 'Post-TKR Rehabilitation', 'Paralysis Therapy'],
    specializations: ['Orthopedic Rehabilitation', 'Neurological Rehab'],
    totalExperienceYears: 8,
    languages: ['English', 'Hindi'],
    eligibleCities: ['Gurugram', 'South Delhi'],
    eligibleLocalities: ['DLF Phase 1-5', 'Golf Course Road', 'Vasant Kunj', 'Saket'],
    eligiblePincodes: ['122001', '122002', '122003', '110070', '110017'],
    shiftEligibility: {
      canDo12HourDay: true,
      canDo12HourNight: false,
      canDo24HourShift: false,
      canDoB2BHospitalRoster: false
    },
    weeklySchedule: [
      { dayOfWeek: 1, startTime: '09:00', endTime: '18:00', isAvailable: true },
      { dayOfWeek: 2, startTime: '09:00', endTime: '18:00', isAvailable: true },
      { dayOfWeek: 3, startTime: '09:00', endTime: '18:00', isAvailable: true },
      { dayOfWeek: 4, startTime: '09:00', endTime: '18:00', isAvailable: true },
      { dayOfWeek: 5, startTime: '09:00', endTime: '18:00', isAvailable: true },
      { dayOfWeek: 6, startTime: '09:00', endTime: '14:00', isAvailable: true },
      { dayOfWeek: 0, startTime: '00:00', endTime: '00:00', isAvailable: false }
    ],
    employmentStatus: 'active',
    verificationStatus: 'verified',
    onboardingCompletionPercent: 100,
    education: [
      {
        id: 'edu-2',
        qualification: 'BPT (Bachelor of Physiotherapy)',
        institution: 'Jamia Hamdard University',
        completionYear: 2016,
        verificationStatus: 'verified'
      }
    ],
    experience: [
      {
        id: 'exp-2',
        organization: 'Fortis Gurugram',
        role: 'Senior Physiotherapist',
        startDate: '2016-08-01',
        endDate: '2022-04-30',
        isCurrent: false,
        responsibilities: 'Led post-knee replacement and stroke rehabilitation sessions.',
        verificationStatus: 'verified'
      }
    ],
    documents: [
      {
        id: 'doc-3',
        staffId: 'staff-2',
        type: 'degree_certificate',
        documentNumber: 'BPT-2016-881',
        fileName: 'bpt_degree_rajesh.pdf',
        fileUrl: '/assets/docs/bpt_degree.pdf',
        uploadedAt: '2024-02-01T10:00:00Z',
        verificationStatus: 'verified'
      }
    ],
    completedDutyCount: 210,
    averageRating: 4.95,
    reviewCount: 52,
    internalNotes: 'Specialist in TKR recovery. High client satisfaction in Gurugram DLF area.',
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2026-09-14T11:00:00Z'
  }
];

export const MOCK_DUTIES: Duty[] = [
  {
    id: 'duty-101',
    bookingId: 'bkg-8819',
    bookingCode: 'BKG-2026-8819',
    staffId: 'staff-1',
    staffName: 'Anita Sharma',
    staffPhone: '+91 98112 34567',
    clientId: 'client-1',
    clientName: 'Suresh Verma',
    clientPhone: '+91 98765 43210',
    patientName: 'Ramesh Verma',
    patientAge: 72,
    serviceCategory: 'home_nursing',
    serviceName: '24×7 Clinical Home Nursing',
    scheduledDate: '2026-09-17',
    scheduledStartTime: '08:00 AM',
    scheduledEndTime: '08:00 PM',
    durationHours: 12,
    address: {
      id: 'addr-c1',
      label: 'Home',
      line1: 'B-142, Sector 62',
      line2: 'Near Fortis Hospital',
      city: 'Noida',
      state: 'Uttar Pradesh',
      pincode: '201309',
      latitude: 28.625,
      longitude: 77.375
    },
    careInstructions: [
      'Monitor Vitals every 4 hours (BP, Pulse, SpO2, Blood Sugar).',
      'Administer oral insulin dosage at 1:00 PM as prescribed by attending MD.',
      'Perform sterile wound dressing on post-op surgical site on left knee.',
      'Ensure 2-hourly positioning for bedridden care.'
    ],
    vitalsRequired: true,
    status: 'IN_CARE',
    statusHistory: [
      { status: 'ASSIGNED', timestamp: '2026-09-16T14:00:00Z', note: 'Assigned by Operations Desk' },
      { status: 'ACKNOWLEDGED', timestamp: '2026-09-16T14:10:00Z', note: 'Duty acknowledged by Nurse Anita' },
      { status: 'TRAVELLING', timestamp: '2026-09-17T07:25:00Z', note: 'Departed from Sector 62 residence' },
      { status: 'ARRIVED', timestamp: '2026-09-17T07:48:00Z', note: 'Arrived at client location' },
      { status: 'IN_CARE', timestamp: '2026-09-17T08:00:00Z', note: 'Vitals baseline checked. Care started.' }
    ],
    travelStartedAt: '2026-09-17T07:25:00Z',
    arrivedAt: '2026-09-17T07:48:00Z',
    careStartedAt: '2026-09-17T08:00:00Z',
    travelDistanceKm: 3.4,
    estimatedTravelMins: 18,
    assignedAt: '2026-09-16T14:00:00Z'
  },
  {
    id: 'duty-102',
    bookingId: 'bkg-8820',
    bookingCode: 'BKG-2026-8820',
    staffId: 'staff-2',
    staffName: 'Rajesh Kumar',
    staffPhone: '+91 98765 12345',
    clientId: 'client-2',
    clientName: 'Meenakshi Sundaram',
    clientPhone: '+91 99100 88219',
    patientName: 'Subramanian S.',
    patientAge: 68,
    serviceCategory: 'physiotherapy',
    serviceName: 'Orthopedic Post-TKR Rehabilitation',
    scheduledDate: '2026-09-17',
    scheduledStartTime: '04:00 PM',
    scheduledEndTime: '05:00 PM',
    durationHours: 1,
    address: {
      id: 'addr-c2',
      label: 'Home',
      line1: 'Apartment 804, Tower 3, DLF Phase 5',
      city: 'Gurugram',
      state: 'Haryana',
      pincode: '122002',
      latitude: 28.455,
      longitude: 77.092
    },
    careInstructions: [
      'Perform 45-minute knee flexion & quad strengthening exercises.',
      'Check post-session swelling and apply cryotherapy if required.'
    ],
    vitalsRequired: false,
    status: 'ACKNOWLEDGED',
    statusHistory: [
      { status: 'ASSIGNED', timestamp: '2026-09-16T16:00:00Z', note: 'Scheduled by Central Operations' },
      { status: 'ACKNOWLEDGED', timestamp: '2026-09-16T16:20:00Z', note: 'Duty confirmed' }
    ],
    travelDistanceKm: 5.2,
    estimatedTravelMins: 22,
    assignedAt: '2026-09-16T16:00:00Z'
  }
];

export const MOCK_STAFF_LEAVES: StaffLeave[] = [
  {
    id: 'leave-1',
    staffId: 'staff-1',
    staffName: 'Anita Sharma',
    type: 'casual',
    startDate: '2026-09-25',
    endDate: '2026-09-26',
    reason: 'Family wedding event in Agra',
    status: 'approved',
    affectedDutiesCount: 0,
    reviewedBy: 'Admin Ops',
    reviewedAt: '2026-09-15T10:00:00Z'
  },
  {
    id: 'leave-2',
    staffId: 'staff-3',
    staffName: 'Sunita Devi',
    type: 'sick',
    startDate: '2026-09-18',
    endDate: '2026-09-19',
    reason: 'Severe viral fever and recovery rest',
    status: 'pending',
    affectedDutiesCount: 1
  }
];

export const MOCK_COMMUNICATION_LOGS: CommunicationLog[] = [
  {
    id: 'comm-1',
    timestamp: '2026-09-17T07:20:00Z',
    senderId: 'staff-1',
    senderName: 'Anita Sharma',
    senderRole: 'staff',
    recipientId: 'admin-1',
    recipientName: 'Central Operations Desk',
    recipientRole: 'admin',
    channel: 'call',
    subject: 'Confirmed departure for Sector 62 duty',
    status: 'delivered'
  }
];
