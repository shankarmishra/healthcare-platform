import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { CheckCircle2, ArrowLeft, ArrowRight, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

export const BookingWizardPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { services, professionals, createBooking } = useBookings();

  const initialServiceId = searchParams.get('serviceId') || services[0]?.id;
  const initialProId = searchParams.get('proId');

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    services.find((s) => s.id === initialServiceId) || services[0]
  );
  const [patientName, setPatientName] = useState('Kamla Mehta');
  const [patientRelationship, setPatientRelationship] = useState('parent');
  const [patientNotes, setPatientNotes] = useState('Post-op knee rehab assistance.');
  const [addressLine, setAddressLine] = useState('Flat 402, Sterling Residency, 100 Feet Rd, Indiranagar');
  const [scheduledDate, setScheduledDate] = useState('2026-03-18');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');
  const [duration, setDuration] = useState(2);
  const [selectedPro, setSelectedPro] = useState(
    professionals.find((p) => p.id === initialProId) || professionals[0]
  );
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');

  // P1 Fix: sessionStorage persistence across page refreshes
  useEffect(() => {
    const savedState = sessionStorage.getItem('healthcare_booking_wizard_draft');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.step) setStep(parsed.step);
        if (parsed.patientName) setPatientName(parsed.patientName);
        if (parsed.patientRelationship) setPatientRelationship(parsed.patientRelationship);
        if (parsed.patientNotes) setPatientNotes(parsed.patientNotes);
        if (parsed.addressLine) setAddressLine(parsed.addressLine);
        if (parsed.scheduledDate) setScheduledDate(parsed.scheduledDate);
        if (parsed.timeSlot) setTimeSlot(parsed.timeSlot);
        if (parsed.duration) setDuration(parsed.duration);
      } catch (e) {
        console.warn('Failed to parse saved wizard state', e);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      'healthcare_booking_wizard_draft',
      JSON.stringify({
        step,
        patientName,
        patientRelationship,
        patientNotes,
        addressLine,
        scheduledDate,
        timeSlot,
        duration
      })
    );
  }, [step, patientName, patientRelationship, patientNotes, addressLine, scheduledDate, timeSlot, duration]);

  const steps = [
    '1. Service',
    '2. Patient',
    '3. Address',
    '4. Schedule',
    '5. Professional',
    '6. Review & Pay'
  ];

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirmBooking = () => {
    sessionStorage.removeItem('healthcare_booking_wizard_draft');
    const newBooking = createBooking({
      service: selectedService,
      scheduledDate,
      scheduledTimeSlot: timeSlot,
      durationHours: duration,
      selectedProfessional: selectedPro,
      specialInstructions: patientNotes
    });
    navigate(`/client/bookings/${newBooking.id}`);
  };

  const calculateSubtotal = () => selectedService.pricing.basePrice * duration;
  const calculateGST = () => Math.round(calculateSubtotal() * 0.18);
  const calculateTotal = () => calculateSubtotal() + calculateGST();

  const minDateString = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 text-left relative">
      <HealthcareTexture type="care-pathway" opacity={0.03} />

      {/* Wizard Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 relative z-10">
        <div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Healthcare Concierge</span>
          <h1 className="text-2xl font-extrabold text-slate-900">Schedule Clinical Home Care</h1>
        </div>
        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          Step {step} of 6
        </span>
      </div>

      {/* Progress Stepper Bar */}
      <div className="grid grid-cols-6 gap-2 relative z-10">
        {steps.map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;

          return (
            <div key={label} className="space-y-1">
              <div
                className={clsx(
                  'h-2 rounded-full transition-all',
                  isDone && 'bg-teal-600',
                  isActive && 'bg-teal-600 animate-pulse',
                  !isDone && !isActive && 'bg-slate-200'
                )}
              />
              <span className={clsx('text-[11px] font-bold block truncate', isActive ? 'text-teal-700' : 'text-slate-400')}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Step Decision Content + Persistent Desktop Booking Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Step Content Area */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 space-y-6 border-slate-200 shadow-xs">
            {/* Step 1: Service */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">Select Care Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={clsx(
                        'p-4 rounded-2xl border cursor-pointer transition-all',
                        selectedService.id === srv.id
                          ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-600/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-900 text-sm">{srv.name}</span>
                        {selectedService.id === srv.id && <CheckCircle2 className="w-5 h-5 text-teal-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{srv.shortDescription}</p>
                      <p className="text-xs font-bold text-teal-700 mt-3">₹{srv.pricing.basePrice} / hr</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Patient Info */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">Patient Details</h2>
                <Input
                  label="Patient Full Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Enter patient name"
                />
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Relationship to Patient</label>
                  <select
                    value={patientRelationship}
                    onChange={(e) => setPatientRelationship(e.target.value)}
                    className="w-full h-11 px-4 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600"
                  >
                    <option value="self">Myself</option>
                    <option value="parent">Parent (Mother / Father)</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Clinical Notes / Requirements</label>
                  <textarea
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    rows={3}
                    className="w-full p-4 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600"
                    placeholder="E.g. Post-op knee rehab assistance, vital signs monitoring..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Address */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">Care Delivery Address</h2>
                <Input
                  label="Full Street Address & Flat/House No."
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  placeholder="Flat No, Apartment, Street"
                  leftIcon={<MapPin className="w-4 h-4 text-slate-400" />}
                />
              </div>
            )}

            {/* Step 4: Schedule */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">Schedule & Shift Duration</h2>
                <Input
                  type="date"
                  label="Select Care Date"
                  value={scheduledDate}
                  min={minDateString}
                  onChange={(e) => setScheduledDate(e.target.value)}
                />
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Time Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-4 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600"
                  >
                    <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM (Morning Shift)</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM (Mid-Morning)</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Afternoon Shift)</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Evening Shift)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Duration (Hours)</label>
                  <div className="flex gap-3">
                    {[1, 2, 4, 8, 12].map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setDuration(h)}
                        className={clsx(
                          'flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer',
                          duration === h ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                        )}
                      >
                        {h} {h === 1 ? 'hr' : 'hrs'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Professional Selection */}
            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">Select Credentialed Professional</h2>
                <div className="space-y-3">
                  {professionals.map((pro) => (
                    <div
                      key={pro.id}
                      onClick={() => setSelectedPro(pro)}
                      className={clsx(
                        'p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all',
                        selectedPro.id === pro.id
                          ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-600/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <img src={pro.profilePhoto} alt="" className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                            {pro.displayName} <ShieldCheck className="w-4 h-4 text-teal-600" />
                          </h4>
                          <p className="text-xs text-slate-500">{pro.qualification} • {pro.experienceYears} yrs exp</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-teal-700">₹{pro.hourlyRate} / hr</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Review & Payment Simulation */}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-lg font-extrabold text-slate-900">Confirm Booking & Payment</h2>
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 text-xs">
                  <div className="flex justify-between font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">
                    <span>{selectedService.name}</span>
                    <span>₹{calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>GST (18%)</span>
                    <span>₹{calculateGST()}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-teal-700 text-base border-t border-slate-200 pt-2">
                    <span>Total Payable</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Payment Method (Demo Simulation)</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={clsx(
                        'p-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer',
                        paymentMethod === 'upi' ? 'border-teal-600 bg-teal-50 text-teal-800' : 'border-slate-200 bg-white'
                      )}
                    >
                      <CreditCard className="w-4 h-4" /> UPI Instant Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={clsx(
                        'p-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer',
                        paymentMethod === 'card' ? 'border-teal-600 bg-teal-50 text-teal-800' : 'border-slate-200 bg-white'
                      )}
                    >
                      <CreditCard className="w-4 h-4" /> Credit / Debit Card
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex justify-between items-center border-t border-slate-200 pt-4">
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={step === 1}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                className="cursor-pointer"
              >
                Back
              </Button>

              {step < 6 ? (
                <Button
                  variant="primary"
                  onClick={handleNext}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleConfirmBooking}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 cursor-pointer"
                >
                  Pay & Confirm Booking
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Persistent Desktop Booking Summary Sidebar Card */}
        <div className="lg:col-span-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 sticky top-6">
            <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Booking Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Service:</span>
                <span className="font-bold text-slate-900 text-right">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Patient:</span>
                <span className="font-bold text-slate-900">{patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Date & Slot:</span>
                <span className="font-bold text-slate-900">{scheduledDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Professional:</span>
                <span className="font-bold text-teal-700">{selectedPro?.displayName || 'Auto-Assigned'}</span>
              </div>

              <div className="border-t border-slate-200 pt-3 space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({duration} hrs)</span>
                  <span>₹{calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST (18%)</span>
                  <span>₹{calculateGST()}</span>
                </div>
                <div className="flex justify-between font-extrabold text-slate-900 text-sm pt-1">
                  <span>Total Payable</span>
                  <span className="text-teal-700">₹{calculateTotal()}</span>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-3 rounded-xl border border-teal-200 flex items-center gap-2 text-[11px] text-teal-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>100% Refundable until provider check-in.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
