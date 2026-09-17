import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  ShieldCheck,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Trash2,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Lock,
  User as UserIcon
} from 'lucide-react';
import type { StaffRoleCategory } from '../../types/staff';
import { DELHI_NCR_SERVICE_HUBS } from '../../data/serviceAreaMatrix';

export const AdminAddStaffWizardPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Identity
    fullName: '',
    displayName: '',
    gender: 'female' as 'female' | 'male' | 'other',
    dateOfBirth: '',
    phone: '',
    alternatePhone: '',
    email: '',
    employeeId: `PNC-EMP-${Math.floor(1000 + Math.random() * 9000)}`,
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',
    residentialCity: 'Noida',
    residentialLine1: '',
    residentialPincode: '',

    // Step 2: Professional Role
    roleCategory: 'registered_nurse' as StaffRoleCategory,
    primaryServiceId: 'home-nursing',
    totalExperienceYears: 4,
    languages: ['Hindi', 'English'],

    // Step 3: Education
    education: [
      { id: '1', qualification: 'B.Sc Nursing', institution: 'Delhi Nursing Institute', completionYear: 2020 }
    ],

    // Step 4: Experience
    experience: [
      { id: '1', organization: 'Max Healthcare', role: 'Staff Nurse', startDate: '2020-06-01', endDate: '2023-12-31', responsibilities: 'Post-op clinical care and vitals monitoring.' }
    ],

    // Step 5: Skills
    skills: ['Vital Tracking', 'Sterile Dressing', 'Catheter Maintenance', 'IV Fluids'],

    // Step 6: Service Eligibility
    eligibleServices: ['home-nursing', '12-hour-caregiver-attendant'],

    // Step 7: Service Areas
    eligibleCities: ['Noida', 'Delhi'],
    eligiblePincodes: ['201301', '201309', '110091'],

    // Step 8: Shift & Weekly Availability
    canDo12HourDay: true,
    canDo12HourNight: true,
    canDo24HourShift: false,
    canDoB2BHospitalRoster: true,

    // Step 9: Documents
    documents: [
      { id: 'd1', type: 'nursing_license', documentNumber: 'DNC-RN-9921', fileName: 'nursing_license.pdf' }
    ],

    // Step 10: Verification Checklist
    identityVerified: true,
    licenseVerified: true,
    backgroundCheckVerified: true,

    // Step 11: Credentials
    sendInviteEmail: true,
    tempPassword: `PncCare@${Math.floor(1000 + Math.random() * 9000)}`
  });

  const steps = [
    { num: 1, label: 'Identity' },
    { num: 2, label: 'Role' },
    { num: 3, label: 'Education' },
    { num: 4, label: 'Experience' },
    { num: 5, label: 'Skills' },
    { num: 6, label: 'Services' },
    { num: 7, label: 'Coverage' },
    { num: 8, label: 'Availability' },
    { num: 9, label: 'Documents' },
    { num: 10, label: 'Verification' },
    { num: 11, label: 'Account' },
    { num: 12, label: 'Review' }
  ];

  const handleNext = () => {
    if (currentStep < 12) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmittedSuccess(true);
    }, 1200);
  };

  if (isSubmittedSuccess) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 space-y-6 text-center">
        <Card className="p-8 sm:p-12 space-y-6 bg-white border-teal-200 shadow-xl rounded-3xl relative overflow-hidden">
          <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />
          <div className="w-20 h-20 bg-teal-50 border-2 border-teal-200 rounded-full flex items-center justify-center mx-auto text-brand-teal shadow-inner">
            <CheckCircle className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <Badge variant="teal" size="md">Staff Profile & Credentials Provisioned</Badge>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {formData.fullName || 'Anita Sharma'} Added to Operations
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Employee ID <strong className="text-brand-teal font-extrabold">{formData.employeeId}</strong> has been created. A security invitation email has been sent for first-login password configuration.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Employee ID:</span>
              <span className="font-extrabold text-slate-900">{formData.employeeId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Role Category:</span>
              <span className="font-extrabold text-brand-teal uppercase">{formData.roleCategory.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Account Status:</span>
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Pending First Login</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              onClick={() => navigate('/admin/staff')}
              className="bg-brand-teal text-white font-extrabold px-8 py-3 rounded-full w-full sm:w-auto"
            >
              Go to Staff Directory
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmittedSuccess(false);
                setCurrentStep(1);
              }}
              className="w-full sm:w-auto font-bold px-6 py-3 rounded-full"
            >
              Add Another Staff Member
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="teal">Staff Onboarding Stepper</Badge>
            <span className="text-xs font-mono text-slate-400">ID: {formData.employeeId}</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Add In-House Staff Member</h1>
          <p className="text-xs text-slate-500">Configure identity, qualifications, coverage, availability & login account.</p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/admin/staff')}
          className="self-start sm:self-auto font-bold text-xs"
        >
          ← Cancel & Return
        </Button>
      </div>

      {/* 12-Step Horizontal Stepper Bar */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs overflow-x-auto">
        <div className="flex items-center justify-between min-w-[760px] px-2">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setCurrentStep(s.num)}
              className={`flex items-center gap-1.5 text-xs font-extrabold cursor-pointer transition-colors px-2 py-1 rounded-lg ${
                currentStep === s.num
                  ? 'bg-brand-teal text-white shadow-xs'
                  : currentStep > s.num
                  ? 'text-teal-700 hover:bg-teal-50'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-bold ${
                currentStep === s.num
                  ? 'bg-white text-brand-teal'
                  : currentStep > s.num
                  ? 'bg-teal-100 text-teal-800'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {currentStep > s.num ? '✓' : s.num}
              </span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Content Container */}
      <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-md rounded-3xl relative overflow-hidden">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

        {/* STEP 1: BASIC IDENTITY */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-brand-teal" /> Step 1: Basic Identity & Contact
              </h3>
              <p className="text-xs text-slate-500">Provide legal name, assigned employee ID, and contact channels.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Legal Name *"
                placeholder="e.g. Anita Sharma"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              />
              <Input
                label="Display / Operational Name *"
                placeholder="e.g. Nurse Anita"
                value={formData.displayName}
                onChange={e => setFormData({ ...formData, displayName: e.target.value })}
              />
              <Input
                label="Assigned Employee ID (Immutable) *"
                value={formData.employeeId}
                readOnly
                className="bg-slate-50 font-mono font-bold text-brand-teal"
              />
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Gender *</label>
                <select
                  value={formData.gender}
                  onChange={e => setFormData({ ...formData, gender: e.target.value as any })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-brand-teal"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Input
                label="Primary Phone (+91) *"
                placeholder="+91 98112 34567"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                label="Email Address *"
                placeholder="anita.nursing@pulsen-care.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                label="Date of Birth *"
                type="date"
                value={formData.dateOfBirth}
                onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />
              <Input
                label="Emergency Contact Name & Relation *"
                placeholder="Ramesh Sharma (Spouse)"
                value={formData.emergencyContactName}
                onChange={e => setFormData({ ...formData, emergencyContactName: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* STEP 2: PROFESSIONAL ROLE */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-teal" /> Step 2: Professional Role & Classification
              </h3>
              <p className="text-xs text-slate-500">Define employee category, experience tier, and language capabilities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Role Category *</label>
                <select
                  value={formData.roleCategory}
                  onChange={e => setFormData({ ...formData, roleCategory: e.target.value as StaffRoleCategory })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-900 focus:ring-2 focus:ring-brand-teal"
                >
                  <option value="registered_nurse">Registered Nurse (RN / B.Sc / GNM)</option>
                  <option value="icu_nurse">Specialized ICU & Critical Care Nurse</option>
                  <option value="physiotherapist">Orthopedic & Neuro Physiotherapist (BPT / MPT)</option>
                  <option value="caregiver_attendant">12h / 24h Caregiver Bedside Attendant</option>
                  <option value="general_physician">General Physician (MBBS / MD Home Visit)</option>
                </select>
              </div>

              <Input
                label="Total Years of Clinical Experience *"
                type="number"
                value={formData.totalExperienceYears}
                onChange={e => setFormData({ ...formData, totalExperienceYears: Number(e.target.value) })}
              />

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Languages Spoken</label>
                <input
                  type="text"
                  placeholder="e.g. Hindi, English, Punjabi"
                  value={formData.languages.join(', ')}
                  onChange={e => setFormData({ ...formData, languages: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 & 4: EDUCATION & EXPERIENCE */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-teal" /> Step 3: Education & Academic Qualifications
              </h3>
              <p className="text-xs text-slate-500">Record formal degrees, diplomas, and university affiliations.</p>
            </div>

            {formData.education.map((edu, idx) => (
              <div key={edu.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-brand-teal">Qualification #{idx + 1}</span>
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => setFormData({ ...formData, education: formData.education.filter(e => e.id !== edu.id) })}
                      className="text-rose-500 hover:text-rose-700 text-xs font-bold"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    label="Degree / Diploma *"
                    placeholder="B.Sc Nursing"
                    value={edu.qualification}
                    onChange={e => {
                      const updated = [...formData.education];
                      updated[idx].qualification = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                  />
                  <Input
                    label="Institution / University *"
                    placeholder="Delhi Nursing Institute"
                    value={edu.institution}
                    onChange={e => {
                      const updated = [...formData.education];
                      updated[idx].institution = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                  />
                  <Input
                    label="Completion Year *"
                    type="number"
                    value={edu.completionYear}
                    onChange={e => {
                      const updated = [...formData.education];
                      updated[idx].completionYear = Number(e.target.value);
                      setFormData({ ...formData, education: updated });
                    }}
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setFormData({
                ...formData,
                education: [...formData.education, { id: Date.now().toString(), qualification: '', institution: '', completionYear: 2022 }]
              })}
              className="font-bold text-xs"
            >
              + Add Another Qualification
            </Button>
          </div>
        )}

        {/* STEP 5: SKILLS */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-teal" /> Step 5: Clinical & Care Skills Matrix
              </h3>
              <p className="text-xs text-slate-500">Select verified skills for automated assignment conflict checking.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'Vital Tracking',
                'Sterile Dressing',
                'Ryle\'s Tube Management',
                'Catheter Care',
                'IV Fluid Administration',
                'Bedside Hygiene',
                'Tracheostomy Care',
                'Ventilator Monitoring',
                'Post-TKR Rehab',
                'Stroke Rehab',
                'Elderly Bedridden Support'
              ].map((skill) => {
                const isSelected = formData.skills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => {
                      const updated = isSelected
                        ? formData.skills.filter(s => s !== skill)
                        : [...formData.skills, skill];
                      setFormData({ ...formData, skills: updated });
                    }}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50 border-brand-teal text-brand-teal shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-teal-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{skill}</span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-brand-teal" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 7: SERVICE COVERAGE */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-teal" /> Step 7: Delhi NCR Service Hub & Area Coverage
              </h3>
              <p className="text-xs text-slate-500">Define cities and pincode zones where this staff member can deliver duty.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DELHI_NCR_SERVICE_HUBS.map((hub) => {
                const isChecked = formData.eligibleCities.includes(hub.city);
                return (
                  <button
                    key={hub.id}
                    onClick={() => {
                      const updated = isChecked
                        ? formData.eligibleCities.filter(c => c !== hub.city)
                        : [...formData.eligibleCities, hub.city];
                      setFormData({ ...formData, eligibleCities: updated });
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-teal-50 border-brand-teal shadow-2xs'
                        : 'bg-white border-slate-200 hover:border-teal-200'
                    }`}
                  >
                    <p className="text-xs font-extrabold text-slate-900 flex items-center justify-between">
                      <span>{hub.city}</span>
                      {isChecked && <CheckCircle className="w-4 h-4 text-brand-teal" />}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">{hub.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 11: LOGIN CREDENTIAL SETUP */}
        {currentStep === 11 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-teal" /> Step 11: Security & Staff Login Account Setup
              </h3>
              <p className="text-xs text-slate-500">Configure login email and send security invitation for password creation.</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold">Security Architecture Enforcement:</p>
                <p className="mt-0.5">Admin does NOT set or see plaintext passwords. The staff member will receive an invitation email and perform mandatory first-login password configuration at <code className="font-mono text-amber-950 font-bold">/staff/first-login</code>.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Login Identifier / Email *"
                value={formData.email}
                readOnly
                className="bg-slate-50 font-bold"
              />
              <Input
                label="Employee ID Badge *"
                value={formData.employeeId}
                readOnly
                className="bg-slate-50 font-mono font-bold text-brand-teal"
              />
            </div>
          </div>
        )}

        {/* STEP 12: REVIEW & SUBMIT */}
        {currentStep === 12 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-teal" /> Step 12: Final Review & Operations Submission
              </h3>
              <p className="text-xs text-slate-500">Verify staff onboarding data before issuing operational credentials.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-brand-teal uppercase">Identity</span>
                <p className="font-black text-sm text-slate-900">{formData.fullName || 'Anita Sharma'}</p>
                <p className="text-slate-500 font-mono">ID: {formData.employeeId}</p>
                <p className="text-slate-500">{formData.phone}</p>
                <p className="text-slate-500">{formData.email}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-brand-teal uppercase">Classification</span>
                <p className="font-extrabold text-slate-900 uppercase">{formData.roleCategory.replace('_', ' ')}</p>
                <p className="text-slate-500">{formData.totalExperienceYears} Years Experience</p>
                <p className="text-slate-500">Languages: {formData.languages.join(', ')}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold text-brand-teal uppercase">Service Area</span>
                <p className="font-bold text-slate-900">{formData.eligibleCities.join(', ')}</p>
                <p className="text-slate-500">{formData.skills.length} Verified Skills Selected</p>
              </div>
            </div>
          </div>
        )}

        {/* Stepper Navigation Actions */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="font-bold text-xs"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {currentStep < 12 ? (
            <Button
              onClick={handleNext}
              className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-xs px-6 rounded-full"
            >
              Continue to Step {currentStep + 1} <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-brand-teal hover:bg-brand-teal-hover text-white font-black text-xs px-8 py-3 rounded-full shadow-md"
            >
              {isSubmitting ? 'Provisioning Staff Profile...' : 'Submit Staff & Create Account'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
