import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import type { Service } from '../../types';

export const BookingWizardPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { services, createBooking } = useBookings();

  const initialServiceId = searchParams.get('serviceId') || services[0]?.id;

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service>(
    services.find((s) => s.id === initialServiceId) || services[0]
  );

  // Step 2: Care Requirements & Tasks
  const [careCategory, setCareCategory] = useState<string>('post_surgery');
  const [selectedTasks, setSelectedTasks] = useState<string[]>([
    'Vital signs monitoring & logging',
    'Medication timely administration',
    'Hygiene & bathing support'
  ]);

  // Step 3: Patient Profile
  const [patientFirstName, setPatientFirstName] = useState('Kamla');
  const [patientLastName, setPatientLastName] = useState('Mehta');
  const [patientRelationship, setPatientRelationship] = useState('parent');
  const [patientAge, setPatientAge] = useState('68');
  const [patientGender, setPatientGender] = useState<'male' | 'female' | 'other'>('female');
  const [medicalConditions, setMedicalConditions] = useState('Post-op total knee replacement (TKR), Type-2 Diabetes');
  const [mobilityStatus, setMobilityStatus] = useState<'independent' | 'assisted' | 'wheelchair' | 'bedridden'>('assisted');
  const [emergencyName, setEmergencyName] = useState('Rahul Mehta');

  // Step 4: Location & Access
  const [addressType, setAddressType] = useState('Home Apartment');
  const [addressLine1, setAddressLine1] = useState('Flat 402, Sterling Residency');
  const [addressLine2, setAddressLine2] = useState('100 Feet Road, Indiranagar');
  const [landmark, setLandmark] = useState('Opposite Toit Brewpub, Gate 2');
  const [city, setCity] = useState('Bangalore');
  const [pincode, setPincode] = useState('560038');
  const [accessNotes, setAccessNotes] = useState('Elevator active 24/7. Visitor parking inside gate.');

  // Step 5: Date & Recurrence
  const [scheduleType, setScheduleType] = useState<'single' | 'range' | 'recurring'>('range');
  const [startDate, setStartDate] = useState('2026-03-20');
  const [endDate, setEndDate] = useState('2026-03-27');
  const [recurringDays, setRecurringDays] = useState<string[]>(['Mon', 'Wed', 'Fri']);

  // Step 6: Time & Shift Type
  const [shiftType, setShiftType] = useState('Day Shift (12 Hours)');
  const [timeSlot, setTimeSlot] = useState('08:00 AM - 08:00 PM');
  const [durationHours, setDurationHours] = useState(12);

  // Step 7: Staff Preferences
  const [preferredRole, setPreferredRole] = useState('B.Sc Registered Nurse');
  const [preferredGender, setPreferredGender] = useState<'no_preference' | 'female' | 'male'>('female');
  const [minExperience, setMinExperience] = useState('3+ Years');
  const [languages, setLanguages] = useState<string[]>(['English', 'Hindi', 'Kannada']);

  // Step 8: Special Requirements
  const [specialInstructions, setSpecialInstructions] = useState(
    'Patient needs gentle handling for left leg movement. Require strict aseptic dressing for surgical incision.'
  );
  const [medicalEquipment, setMedicalEquipment] = useState<string[]>(['Air Mattress', 'Walker', 'BP Monitor']);

  // Persist draft in sessionStorage
  useEffect(() => {
    const savedState = sessionStorage.getItem('healthcare_b2c_booking_draft_v3');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.step) setStep(parsed.step);
        if (parsed.patientFirstName) setPatientFirstName(parsed.patientFirstName);
        if (parsed.patientLastName) setPatientLastName(parsed.patientLastName);
        if (parsed.addressLine1) setAddressLine1(parsed.addressLine1);
        if (parsed.startDate) setStartDate(parsed.startDate);
        if (parsed.shiftType) setShiftType(parsed.shiftType);
      } catch (e) {
        console.warn('Failed to parse saved wizard state', e);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      'healthcare_b2c_booking_draft_v3',
      JSON.stringify({
        step,
        patientFirstName,
        patientLastName,
        addressLine1,
        startDate,
        shiftType
      })
    );
  }, [step, patientFirstName, patientLastName, addressLine1, startDate, shiftType]);

  const stepsList = [
    '1. Service',
    '2. Tasks',
    '3. Patient',
    '4. Location',
    '5. Dates',
    '6. Shift',
    '7. Staff Prefs',
    '8. Instructions',
    '9. Pricing',
    '10. Review'
  ];

  const availableTasksList = [
    'Sterile wound dressing & aseptic care',
    'Vital signs monitoring & digital logging',
    'Medication timely administration (Oral / Injections)',
    'IV / IM injection & drip management',
    'Bathing, oral hygiene & sponge bath',
    'Bed transfers, mobility & positioning',
    'Ryle tube / PEG tube feeding assistance',
    'Catheter & urinary bag care',
    'Night supervision & bed alarm monitor',
    'Bedsore prevention & position rotation'
  ];

  const handleTaskToggle = (task: string) => {
    if (selectedTasks.includes(task)) {
      setSelectedTasks(selectedTasks.filter((t) => t !== task));
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleLanguageToggle = (lang: string) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  // Pricing Calculations
  const calculateDaysCount = () => {
    if (scheduleType === 'single') return 1;
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const diffDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;
    return isNaN(diffDays) || diffDays < 1 ? 1 : diffDays;
  };

  const daysCount = calculateDaysCount();
  const baseRatePerDay = selectedService.pricing.basePrice * (durationHours > 8 ? durationHours : 1);
  const subtotalBeforeNight = baseRatePerDay * daysCount;
  const isNightShift = shiftType.toLowerCase().includes('night');
  const nightSurcharge = isNightShift ? Math.round(subtotalBeforeNight * 0.2) : 0;
  const subtotal = subtotalBeforeNight + nightSurcharge;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleConfirmSubmit = () => {
    sessionStorage.removeItem('healthcare_b2c_booking_draft_v3');
    const newBooking = createBooking({
      service: selectedService,
      patient: {
        id: `pat-${Date.now()}`,
        clientId: 'clt-001',
        firstName: patientFirstName,
        lastName: patientLastName,
        relationship: patientRelationship as any,
        dateOfBirth: `${2026 - parseInt(patientAge || '65')}-01-01`,
        gender: patientGender,
        medicalNotes: medicalConditions,
        mobilityStatus,
        createdAt: new Date().toISOString()
      },
      address: {
        id: `addr-${Date.now()}`,
        label: addressType,
        line1: addressLine1,
        line2: addressLine2,
        landmark,
        city,
        state: 'Karnataka',
        pincode,
        latitude: 12.9716,
        longitude: 77.5946
      },
      scheduledDate: startDate,
      scheduledTimeSlot: timeSlot,
      durationHours,
      careTasks: selectedTasks,
      shiftType,
      dateRange: {
        startDate,
        endDate: scheduleType === 'single' ? startDate : endDate,
        isRecurring: scheduleType === 'recurring',
        recurringDays
      },
      staffPreferences: {
        role: preferredRole,
        gender: preferredGender,
        languages
      },
      specialInstructions
    });

    navigate(`/client/bookings/${newBooking.id}`);
  };

  const minDateString = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left relative">
      <HealthcareTexture type="care-pathway" opacity={0.03} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-default pb-4 gap-3 relative z-10">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">
            In-House Managed Workforce Portal
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Service & Care Requirement Wizard</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Specify your patient's exact clinical needs. Our Operations Desk will assign qualified internal staff.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-text-secondary bg-canvas-tertiary px-3 py-1.5 rounded-full border border-border-default">
            Step {step} of 10
          </span>
        </div>
      </div>

      {/* Stepper Progress Bar */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-1.5 relative z-10">
        {stepsList.map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;

          return (
            <button
              key={label}
              onClick={() => isDone && setStep(stepNum)}
              disabled={!isDone && !isActive}
              className="text-left space-y-1 focus:outline-none disabled:cursor-not-allowed"
            >
              <div
                className={clsx(
                  'h-2 rounded-full transition-all',
                  isDone && 'bg-brand-teal',
                  isActive && 'bg-brand-teal ring-2 ring-brand-teal/30 animate-pulse',
                  !isDone && !isActive && 'bg-border-default'
                )}
              />
              <span
                className={clsx(
                  'text-[10px] font-bold block truncate',
                  isActive ? 'text-brand-teal font-extrabold' : isDone ? 'text-text-primary' : 'text-text-muted'
                )}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Step Content */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 space-y-6 border-border-default shadow-subtle bg-white">
            {/* STEP 1: Select Service */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 1: Select Primary Health Service</h2>
                  <p className="text-xs text-text-muted">Choose from our managed internal clinical & attendant services catalog.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((srv) => {
                    const isSelected = selectedService.id === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={clsx(
                          'p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3',
                          isSelected
                            ? 'border-brand-teal bg-canvas-teal ring-2 ring-brand-teal/20 shadow-xs'
                            : 'border-border-default bg-white hover:border-border-hover'
                        )}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-text-primary text-sm">{srv.name}</span>
                            {isSelected && <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />}
                          </div>
                          <p className="text-xs text-text-secondary line-clamp-2">{srv.shortDescription}</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-border-light pt-2 text-xs">
                          <span className="text-text-muted font-medium">{srv.estimatedDuration}</span>
                          <span className="font-extrabold text-brand-teal">₹{srv.pricing.basePrice} / unit</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Care Requirements & Tasks */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 2: Care Category & Clinical Tasks</h2>
                  <p className="text-xs text-text-muted">Select specific duties for our assigned internal staff to perform.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Primary Condition Focus</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'post_surgery', label: 'Post-Surgery Recovery' },
                      { id: 'elderly_care', label: 'Elderly / Senior Care' },
                      { id: 'bedridden', label: 'Bedridden / Total Care' },
                      { id: 'stroke_rehab', label: 'Stroke / Neuro Rehab' },
                      { id: 'chronic_illness', label: 'Chronic Illness Support' },
                      { id: 'palliative', label: 'Palliative Care' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCareCategory(cat.id)}
                        className={clsx(
                          'p-3 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all',
                          careCategory === cat.id
                            ? 'bg-brand-teal text-white border-brand-teal shadow-xs'
                            : 'bg-canvas-secondary border-border-default text-text-primary hover:border-border-hover'
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Select Required Tasks & Duties
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableTasksList.map((task) => {
                      const isChecked = selectedTasks.includes(task);
                      return (
                        <div
                          key={task}
                          onClick={() => handleTaskToggle(task)}
                          className={clsx(
                            'p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-semibold transition-all',
                            isChecked
                              ? 'bg-canvas-teal border-brand-teal text-brand-teal font-bold'
                              : 'bg-white border-border-default text-text-secondary hover:border-border-hover'
                          )}
                        >
                          <span>{task}</span>
                          <div
                            className={clsx(
                              'w-4 h-4 rounded flex items-center justify-center border',
                              isChecked ? 'bg-brand-teal border-brand-teal text-white' : 'border-border-hover'
                            )}
                          >
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Profile */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 3: Patient Details & Medical History</h2>
                  <p className="text-xs text-text-muted">Information required to ensure safe medical delivery.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Patient First Name"
                    value={patientFirstName}
                    onChange={(e) => setPatientFirstName(e.target.value)}
                  />
                  <Input
                    label="Patient Last Name"
                    value={patientLastName}
                    onChange={(e) => setPatientLastName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Relationship</label>
                    <select
                      value={patientRelationship}
                      onChange={(e) => setPatientRelationship(e.target.value)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="parent">Parent (Mother / Father)</option>
                      <option value="self">Myself</option>
                      <option value="spouse">Spouse</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="other">Other Relative</option>
                    </select>
                  </div>
                  <Input
                    label="Age (Years)"
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                  />
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Gender</label>
                    <select
                      value={patientGender}
                      onChange={(e) => setPatientGender(e.target.value as any)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Mobility Status</label>
                    <select
                      value={mobilityStatus}
                      onChange={(e) => setMobilityStatus(e.target.value as any)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="assisted">Assisted Walking (Needs Support)</option>
                      <option value="independent">Fully Independent</option>
                      <option value="wheelchair">Wheelchair Bound</option>
                      <option value="bedridden">Bedridden / Total Assistance</option>
                    </select>
                  </div>
                  <Input
                    label="Emergency Contact Name"
                    value={emergencyName}
                    onChange={(e) => setEmergencyName(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Medical Diagnosis & Clinical Notes
                  </label>
                  <textarea
                    rows={2}
                    value={medicalConditions}
                    onChange={(e) => setMedicalConditions(e.target.value)}
                    className="w-full p-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    placeholder="List surgeries, chronic conditions, allergies, or precautions..."
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Location & Access */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 4: Care Location & Access Instructions</h2>
                  <p className="text-xs text-text-muted">Help our staff reach your location promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Location Type</label>
                    <select
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="Home Apartment">Home / Apartment</option>
                      <option value="Independent Villa">Independent Villa / House</option>
                      <option value="Hospital Room">Hospital Ward / Room</option>
                      <option value="Assisted Living">Assisted Living Facility</option>
                    </select>
                  </div>
                  <Input
                    label="House / Flat No. & Building Name"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    leftIcon={<MapPin className="w-4 h-4 text-text-muted" />}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Street Address & Area"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                  <Input
                    label="Landmark / Major Intersection"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="City" value={city} onChange={(e) => setCity(e.target.value)} />
                  <Input label="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Access / Entry Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={accessNotes}
                    onChange={(e) => setAccessNotes(e.target.value)}
                    className="w-full p-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    placeholder="Elevator availability, visitor entry rules, parking details..."
                  />
                </div>
              </div>
            )}

            {/* STEP 5: Date & Recurrence */}
            {step === 5 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 5: Schedule & Recurrence Pattern</h2>
                  <p className="text-xs text-text-muted">Choose single visits, contiguous dates, or recurring weekly shifts.</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'single', label: 'Single Day Visit', desc: 'One-off appointment' },
                    { id: 'range', label: 'Contiguous Dates', desc: 'Multiple consecutive days' },
                    { id: 'recurring', label: 'Weekly Recurring', desc: 'Selected days every week' }
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setScheduleType(st.id as any)}
                      className={clsx(
                        'p-3.5 rounded-xl border text-left cursor-pointer transition-all space-y-1',
                        scheduleType === st.id
                          ? 'border-brand-teal bg-canvas-teal ring-2 ring-brand-teal/20'
                          : 'border-border-default bg-white hover:border-border-hover'
                      )}
                    >
                      <span className="text-xs font-extrabold text-text-primary block">{st.label}</span>
                      <span className="text-[10px] text-text-muted block">{st.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    label="Start Date"
                    min={minDateString}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  {scheduleType !== 'single' && (
                    <Input
                      type="date"
                      label="End Date"
                      min={startDate}
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  )}
                </div>

                {scheduleType === 'recurring' && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                      Select Days Of Week
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                        const isSelected = recurringDays.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => {
                              if (isSelected) setRecurringDays(recurringDays.filter((d) => d !== day));
                              else setRecurringDays([...recurringDays, day]);
                            }}
                            className={clsx(
                              'w-10 h-10 rounded-xl text-xs font-bold border flex items-center justify-center cursor-pointer transition-all',
                              isSelected
                                ? 'bg-brand-teal text-white border-brand-teal'
                                : 'bg-canvas-secondary border-border-default text-text-secondary'
                            )}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 6: Time & Shift Type */}
            {step === 6 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 6: Timing & Shift Type</h2>
                  <p className="text-xs text-text-muted">Select shift duration and care hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Day Shift (12 Hours)', time: '08:00 AM - 08:00 PM', hours: 12 },
                    { label: 'Night Shift (10 PM - 8 AM)', time: '10:00 PM - 08:00 AM', hours: 10 },
                    { label: 'Half Day (6 Hours)', time: '08:00 AM - 02:00 PM', hours: 6 },
                    { label: '24-Hour Live-in Care', time: 'Round the Clock (24h)', hours: 24 },
                    { label: 'Short Visit (2 Hours)', time: '10:00 AM - 12:00 PM', hours: 2 }
                  ].map((s) => (
                    <div
                      key={s.label}
                      onClick={() => {
                        setShiftType(s.label);
                        setTimeSlot(s.time);
                        setDurationHours(s.hours);
                      }}
                      className={clsx(
                        'p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between',
                        shiftType === s.label
                          ? 'border-brand-teal bg-canvas-teal ring-2 ring-brand-teal/20'
                          : 'border-border-default bg-white hover:border-border-hover'
                      )}
                    >
                      <div>
                        <span className="font-extrabold text-text-primary text-xs block">{s.label}</span>
                        <span className="text-[11px] text-text-muted flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-brand-teal" /> {s.time}
                        </span>
                      </div>
                      {shiftType === s.label && <CheckCircle2 className="w-4 h-4 text-brand-teal" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 7: Staff Preferences */}
            {step === 7 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 7: Staff Qualification & Preferences</h2>
                  <p className="text-xs text-text-muted">Define preferences for internal staff assignment.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Staff Designation / Role
                  </label>
                  <select
                    value={preferredRole}
                    onChange={(e) => setPreferredRole(e.target.value)}
                    className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                  >
                    <option value="B.Sc Registered Nurse">B.Sc Registered Nurse (RN)</option>
                    <option value="GNM Staff Nurse">GNM Staff Nurse</option>
                    <option value="Certified Caregiver">Certified Bedside Caregiver / Attendant</option>
                    <option value="Senior Physiotherapist">Senior Physiotherapist (BPT/MPT)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                      Staff Gender Preference
                    </label>
                    <select
                      value={preferredGender}
                      onChange={(e) => setPreferredGender(e.target.value as any)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="female">Female Staff Preferred</option>
                      <option value="male">Male Staff Preferred</option>
                      <option value="no_preference">No Preference (First Available)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                      Minimum Experience Level
                    </label>
                    <select
                      value={minExperience}
                      onChange={(e) => setMinExperience(e.target.value)}
                      className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    >
                      <option value="1+ Years">1+ Years Experience</option>
                      <option value="3+ Years">3+ Years Experience (Recommended)</option>
                      <option value="5+ Years">5+ Years Senior Experience</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Languages Spoken By Staff
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'].map((lang) => {
                      const isSelected = languages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => handleLanguageToggle(lang)}
                          className={clsx(
                            'px-3 py-1.5 rounded-full text-xs font-bold border cursor-pointer transition-all',
                            isSelected
                              ? 'bg-brand-teal text-white border-brand-teal'
                              : 'bg-canvas-secondary border-border-default text-text-secondary'
                          )}
                        >
                          {lang}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 8: Special Instructions */}
            {step === 8 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 8: Special Instructions & Equipment</h2>
                  <p className="text-xs text-text-muted">Important details for staff handling and preparation.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Specific Care Notes & Instructions
                  </label>
                  <textarea
                    rows={4}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full p-3.5 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
                    placeholder="Enter any special requests, diet instructions, or patient behavioral tips..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Medical Equipment Available At Site
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['Air Mattress', 'Walker / Cane', 'Wheelchair', 'BP Monitor', 'Pulse Oximeter', 'Suction Machine'].map((eq) => {
                      const isSelected = medicalEquipment.includes(eq);
                      return (
                        <button
                          key={eq}
                          type="button"
                          onClick={() => {
                            if (isSelected) setMedicalEquipment(medicalEquipment.filter((m) => m !== eq));
                            else setMedicalEquipment([...medicalEquipment, eq]);
                          }}
                          className={clsx(
                            'p-2.5 rounded-xl border text-xs font-semibold text-center cursor-pointer transition-all',
                            isSelected
                              ? 'bg-canvas-teal border-brand-teal text-brand-teal font-bold'
                              : 'bg-white border-border-default text-text-secondary'
                          )}
                        >
                          {eq}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 9: Price Estimate Breakdown */}
            {step === 9 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 9: Price Estimate Breakdown</h2>
                  <p className="text-xs text-text-muted">Transparent itemized pricing for your care request.</p>
                </div>

                <div className="bg-canvas-secondary p-5 rounded-2xl border border-border-default space-y-3 text-xs">
                  <div className="flex justify-between font-extrabold text-text-primary text-sm border-b border-border-default pb-2">
                    <span>{selectedService.name} ({shiftType})</span>
                    <span>₹{subtotalBeforeNight}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Duration & Recurrence</span>
                    <span>{daysCount} Day(s) × {durationHours} Hours</span>
                  </div>
                  {isNightShift && (
                    <div className="flex justify-between text-amber-700 font-semibold">
                      <span>Night Shift Surcharge (+20%)</span>
                      <span>₹{nightSurcharge}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-text-secondary">
                    <span>GST (18% Statutory Tax)</span>
                    <span>₹{gst}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-brand-teal text-base border-t border-border-default pt-2">
                    <span>Total Estimated Amount</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2 text-xs text-emerald-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    No hidden dispatch fees. Payment is authorized after Operations Desk confirms staff assignment.
                  </span>
                </div>
              </div>
            )}

            {/* STEP 10: Review & Submit */}
            {step === 10 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-extrabold text-text-primary">Step 10: Review & Request Submission</h2>
                  <p className="text-xs text-text-muted">Review your booking summary before submitting to Operations.</p>
                </div>

                <div className="bg-canvas-teal p-4 rounded-2xl border border-teal-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div className="text-xs text-teal-900 space-y-0.5">
                    <span className="font-extrabold block">In-House Staff Allocation Model</span>
                    <span>
                      Your request will be routed to our Central Dispatch Desk. System recommends staff by skill & proximity, and Operations confirms assignment within 15 minutes.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-canvas-secondary rounded-xl border border-border-default space-y-2">
                    <span className="font-bold text-text-primary block text-xs border-b border-border-light pb-1">
                      Service & Tasks
                    </span>
                    <p className="font-extrabold text-text-primary">{selectedService.name}</p>
                    <p className="text-text-muted">{selectedTasks.slice(0, 3).join(', ')}...</p>
                  </div>
                  <div className="p-4 bg-canvas-secondary rounded-xl border border-border-default space-y-2">
                    <span className="font-bold text-text-primary block text-xs border-b border-border-light pb-1">
                      Patient Details
                    </span>
                    <p className="font-extrabold text-text-primary">{patientFirstName} {patientLastName} ({patientAge} yrs)</p>
                    <p className="text-text-muted">{medicalConditions}</p>
                  </div>
                </div>

                <div className="p-4 bg-canvas-secondary rounded-xl border border-border-default space-y-2 text-xs">
                  <span className="font-bold text-text-primary block text-xs border-b border-border-light pb-1">
                    Location & Schedule
                  </span>
                  <p className="font-semibold text-text-primary">{addressLine1}, {addressLine2}, {city}</p>
                  <p className="text-text-muted">{startDate} • {shiftType}</p>
                </div>
              </div>
            )}

            {/* Stepper Footer Controls */}
            <div className="flex justify-between items-center border-t border-border-default pt-4">
              <Button
                variant="secondary"
                onClick={() => step > 1 && setStep(step - 1)}
                disabled={step === 1}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                className="cursor-pointer"
              >
                Back
              </Button>

              {step < 10 ? (
                <Button
                  variant="primary"
                  onClick={() => setStep(step + 1)}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold cursor-pointer"
                >
                  Continue to Step {step + 1}
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleConfirmSubmit}
                  leftIcon={<CheckCircle2 className="w-4 h-4" />}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold px-6 cursor-pointer"
                >
                  Submit Care Request
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Persistent Desktop Summary Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white p-5 rounded-2xl border border-border-default shadow-subtle space-y-4 sticky top-6">
            <h3 className="font-extrabold text-text-primary text-sm border-b border-border-light pb-2">
              Requirement Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-text-muted font-medium">Service:</span>
                <span className="font-bold text-text-primary text-right">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted font-medium">Patient:</span>
                <span className="font-bold text-text-primary">{patientFirstName} {patientLastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted font-medium">Start Date:</span>
                <span className="font-bold text-text-primary">{startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted font-medium">Shift Type:</span>
                <span className="font-bold text-brand-teal text-right">{shiftType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted font-medium">Fulfillment:</span>
                <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Operations Dispatch
                </span>
              </div>

              <div className="border-t border-border-default pt-3 space-y-1.5">
                <div className="flex justify-between text-text-secondary">
                  <span>Base Rate ({daysCount} d)</span>
                  <span>₹{subtotalBeforeNight}</span>
                </div>
                {isNightShift && (
                  <div className="flex justify-between text-amber-700 font-semibold">
                    <span>Night Surcharge</span>
                    <span>₹{nightSurcharge}</span>
                  </div>
                )}
                <div className="flex justify-between text-text-secondary">
                  <span>GST (18%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="flex justify-between font-extrabold text-text-primary text-sm pt-1 border-t border-border-light">
                  <span>Estimated Total</span>
                  <span className="text-brand-teal">₹{grandTotal}</span>
                </div>
              </div>
            </div>

            <div className="bg-canvas-teal p-3 rounded-xl border border-teal-200 flex items-center gap-2 text-[11px] text-teal-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Assigned staff background checked & KYC verified.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
