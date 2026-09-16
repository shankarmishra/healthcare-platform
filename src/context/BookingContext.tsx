/**
 * Healthcare Staffing & Home Care Platform
 * Central Booking State Machine & Marketplace Context
 * Source of Truth: docs/09-State-Machine.md, docs/06-Screen-Specification.md
 */

import React, { createContext, useContext, useState } from 'react';
import type {
  Booking,
  BookingStatus,
  Service,
  ProfessionalProfile,
  ServiceCategory,
  KYCStatus,
  PatientProfile,
  Address,
  PriceBreakdown,
  UserRole,
  BookingStatusHistory
} from '../types';
import {
  MOCK_BOOKINGS,
  MOCK_SERVICES,
  MOCK_PROFESSIONALS,
  MOCK_CLIENTS
} from '../data/mockData';

interface BookingWizardDraft {
  service?: Service;
  patient?: PatientProfile;
  address?: Address;
  scheduledDate?: string;
  scheduledTimeSlot?: string;
  durationHours?: number;
  selectedProfessional?: ProfessionalProfile;
  specialInstructions?: string;
}

interface BookingContextType {
  bookings: Booking[];
  services: Service[];
  professionals: ProfessionalProfile[];
  wizardDraft: BookingWizardDraft;

  // Wizard state management
  updateWizardDraft: (data: Partial<BookingWizardDraft>) => void;
  resetWizardDraft: () => void;

  // State machine actions
  createBooking: (draft: BookingWizardDraft) => Booking;
  updateBookingStatus: (bookingId: string, newStatus: BookingStatus, note?: string) => void;
  assignProfessional: (bookingId: string, professionalId: string) => void;
  cancelBooking: (bookingId: string, reason: string) => void;

  // KYC Management
  updateKYCStatus: (professionalId: string, newStatus: KYCStatus, rejectionReason?: string) => void;

  // Filters & Lookups
  getBookingById: (bookingId: string) => Booking | undefined;
  getServiceById: (serviceId: string) => Service | undefined;
  getProfessionalById: (proId: string) => ProfessionalProfile | undefined;
  filterServicesByCategory: (category?: ServiceCategory) => Service[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [services] = useState<Service[]>(MOCK_SERVICES);
  const [professionals, setProfessionals] = useState<ProfessionalProfile[]>(MOCK_PROFESSIONALS);
  const [wizardDraft, setWizardDraft] = useState<BookingWizardDraft>({});

  const updateWizardDraft = (data: Partial<BookingWizardDraft>) => {
    setWizardDraft((prev) => ({ ...prev, ...data }));
  };

  const resetWizardDraft = () => {
    setWizardDraft({});
  };

  const calculatePrice = (service: Service, duration: number = 1): PriceBreakdown => {
    const base = service.pricing.basePrice;
    const subtotal = base * duration;
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;
    const commissionPercent = service.pricing.platformCommissionPercent || 15;
    const commission = Math.round((subtotal * commissionPercent) / 100);
    const proEarning = subtotal - commission;

    return {
      serviceBasePrice: base,
      durationUnits: duration,
      subtotal,
      taxesAndFees: gst,
      discount: 0,
      totalPrice: total,
      professionalEarning: proEarning,
      platformCommission: commission
    };
  };

  const createBooking = (draft: BookingWizardDraft): Booking => {
    const service = draft.service || services[0];
    const duration = draft.durationHours || 1;
    const price = calculatePrice(service, duration);
    const defaultPatient = MOCK_CLIENTS[0].patients[0];
    const defaultAddress = MOCK_CLIENTS[0].addresses[0];

    const newBooking: Booking = {
      id: `bkg-${Date.now()}`,
      bookingCode: `BKG-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      clientId: 'clt-001',
      clientName: 'Rahul Mehta',
      clientPhone: '+91-XXXXX-C0001',
      patientProfile: draft.patient || defaultPatient,
      serviceId: service.id,
      serviceName: service.name,
      serviceCategory: service.category,
      professionalId: draft.selectedProfessional?.id || 'pro-001',
      professionalName: draft.selectedProfessional?.displayName || 'Dr. Anjali Sharma, BPT',
      professionalPhoto: draft.selectedProfessional?.profilePhoto || 'https://images.unsplash.com/photo-1594824813566-88855ce78905?w=300&q=80',
      professionalPhone: '+91-XXXXX-X0001',
      address: draft.address || defaultAddress,
      scheduledDate: draft.scheduledDate || '2026-03-18',
      scheduledTimeSlot: draft.scheduledTimeSlot || '10:00 AM - 11:00 AM',
      durationHours: duration,
      status: 'ACCEPTED',
      statusHistory: [
        { status: 'DRAFT', timestamp: new Date().toISOString(), actorId: 'clt-001', actorRole: 'client' },
        { status: 'REQUESTED', timestamp: new Date().toISOString(), actorId: 'clt-001', actorRole: 'client' },
        { status: 'MATCHING', timestamp: new Date().toISOString(), actorId: 'sys', actorRole: 'super_admin' },
        { status: 'ASSIGNED', timestamp: new Date().toISOString(), actorId: 'sys', actorRole: 'super_admin' },
        { status: 'ACCEPTED', timestamp: new Date().toISOString(), actorId: 'pro-001', actorRole: 'professional' }
      ],
      priceBreakdown: price,
      paymentStatus: 'COMPLETED',
      specialInstructions: draft.specialInstructions || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setBookings((prev) => [newBooking, ...prev]);
    resetWizardDraft();
    return newBooking;
  };

  const updateBookingStatus = (bookingId: string, newStatus: BookingStatus, note?: string) => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id === bookingId) {
          const newEntry: BookingStatusHistory = {
            status: newStatus,
            timestamp: new Date().toISOString(),
            actorId: 'user',
            actorRole: 'admin' as UserRole,
            note
          };
          return {
            ...b,
            status: newStatus,
            statusHistory: [...b.statusHistory, newEntry],
            updatedAt: new Date().toISOString()
          };
        }
        return b;
      })
    );
  };

  const assignProfessional = (bookingId: string, professionalId: string) => {
    const pro = getProfessionalById(professionalId);
    if (!pro) return;

    setBookings((prev) =>
      prev.map((b) => {
        if (b.id === bookingId) {
          return {
            ...b,
            professionalId: pro.id,
            professionalName: pro.displayName,
            professionalPhoto: pro.profilePhoto,
            status: 'ASSIGNED',
            updatedAt: new Date().toISOString()
          };
        }
        return b;
      })
    );
  };

  const cancelBooking = (bookingId: string, reason: string) => {
    updateBookingStatus(bookingId, 'CANCELLED', reason);
  };

  const updateKYCStatus = (professionalId: string, newStatus: KYCStatus, rejectionReason?: string) => {
    setProfessionals((prev) =>
      prev.map((p) => {
        if (p.id === professionalId) {
          return {
            ...p,
            kycStatus: newStatus,
            isVerified: newStatus === 'approved',
            availabilityStatus: newStatus === 'approved' ? 'active' : 'pending_verification',
            kycRejectionReason: rejectionReason,
            updatedAt: new Date().toISOString()
          };
        }
        return p;
      })
    );
  };

  const getBookingById = (id: string) => bookings.find((b) => b.id === id);
  const getServiceById = (id: string) => services.find((s) => s.id === id);
  const getProfessionalById = (id: string) => professionals.find((p) => p.id === id);

  const filterServicesByCategory = (category?: ServiceCategory) => {
    if (!category) return services;
    return services.filter((s) => s.category === category);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        services,
        professionals,
        wizardDraft,
        updateWizardDraft,
        resetWizardDraft,
        createBooking,
        updateBookingStatus,
        assignProfessional,
        cancelBooking,
        updateKYCStatus,
        getBookingById,
        getServiceById,
        getProfessionalById,
        filterServicesByCategory
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
};
