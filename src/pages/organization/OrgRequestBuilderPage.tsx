import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_B2B_REQUESTS } from '../../data/mockB2BData';
import type { StaffingRequirementLine, OrganizationStaffingRequest } from '../../types';
import {
  Plus,
  Trash2,
  CheckCircle2,
  Send,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export const OrgRequestBuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [requestTitle, setRequestTitle] = useState('Max Saket ICU & Recovery Unit Staffing');
  const [department, setDepartment] = useState('Cardiac ICU Ward 4');
  const [requestType, setRequestType] = useState<'monthly_retainer' | 'per_shift' | 'emergency_deployment'>('monthly_retainer');
  const [contactName, setContactName] = useState('Dr. Rakesh Sharma');
  const [contactDesignation, setContactDesignation] = useState('Nursing Superintendent');
  const [contactPhone, setContactPhone] = useState('+91-98112-99012');
  const [contactEmail, setContactEmail] = useState('rakesh.sharma@maxhealthcare.in');
  const [startDate, setStartDate] = useState('2026-09-25');
  const [endDate, setEndDate] = useState('2026-10-25');
  const [specialRequirements, setSpecialRequirements] = useState('All staff must wear PNC sterile blue scrubs and possess valid ACLS cards.');

  // Multi-Line Requirements State
  const [requirementLines, setRequirementLines] = useState<StaffingRequirementLine[]>([
    {
      id: 'line-1',
      roleCategory: 'icu_nurse',
      roleCategoryTitle: 'ICU / Critical Care Registered Nurse',
      requiredCount: 4,
      assignedCount: 0,
      shiftType: '12h_day',
      requiredQualifications: ['B.Sc Nursing', 'ACLS Certified', 'Min 3 Yrs ICU Exp'],
      agreedDailyRate: 3200,
    },
    {
      id: 'line-2',
      roleCategory: 'icu_nurse',
      roleCategoryTitle: 'ICU / Critical Care Registered Nurse',
      requiredCount: 4,
      assignedCount: 0,
      shiftType: '12h_night',
      requiredQualifications: ['B.Sc Nursing', 'ACLS Certified'],
      agreedDailyRate: 3400,
    },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReqNo, setSubmittedReqNo] = useState<string | null>(null);

  const handleAddRequirementLine = () => {
    const newLine: StaffingRequirementLine = {
      id: `line-${Date.now()}`,
      roleCategory: 'registered_nurse',
      roleCategoryTitle: 'General Ward Registered Nurse',
      requiredCount: 2,
      assignedCount: 0,
      shiftType: '12h_day',
      requiredQualifications: ['GNM / B.Sc Nursing'],
      agreedDailyRate: 2800,
    };
    setRequirementLines([...requirementLines, newLine]);
  };

  const handleRemoveRequirementLine = (id: string) => {
    if (requirementLines.length === 1) return;
    setRequirementLines(requirementLines.filter((l) => l.id !== id));
  };

  const handleUpdateLine = (id: string, field: keyof StaffingRequirementLine, value: any) => {
    setRequirementLines(
      requirementLines.map((line) => {
        if (line.id === id) {
          if (field === 'roleCategory') {
            const titleMap: Record<string, string> = {
              registered_nurse: 'General Ward Registered Nurse',
              icu_nurse: 'ICU / Critical Care Registered Nurse',
              physiotherapist: 'Orthopedic & Rehab Physiotherapist',
              caregiver_attendant: 'Bedside Caregiver / Attendant',
              general_physician: 'General Duty Medical Officer',
            };
            return { ...line, roleCategory: value, roleCategoryTitle: titleMap[value] || value };
          }
          return { ...line, [field]: value };
        }
        return line;
      })
    );
  };

  const totalStaffRequired = requirementLines.reduce((acc, curr) => acc + Number(curr.requiredCount), 0);
  const estimatedContractValue = requirementLines.reduce((acc, curr) => acc + Number(curr.requiredCount) * curr.agreedDailyRate * 30, 0);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newReqNo = `PNC-B2B-2026-0${MOCK_B2B_REQUESTS.length + 43}`;
      const newRequest: OrganizationStaffingRequest = {
        id: `req-b2b-${Date.now()}`,
        requestNumber: newReqNo,
        organizationId: 'org-max-saket',
        organizationName: 'Max Super Speciality Hospital, Saket',
        organizationType: 'hospital',
        facilityLocation: {
          facilityName: 'Max Super Speciality Hospital, Saket',
          department,
          address: '1, 2 Press Enclave Marg, Saket',
          city: 'Delhi',
          pincode: '110017',
          contactPersonName: contactName,
          contactPersonPhone: contactPhone,
        },
        contactPerson: {
          name: contactName,
          designation: contactDesignation,
          phone: contactPhone,
          email: contactEmail,
        },
        startDate,
        endDate,
        totalDays: 30,
        requirements: requirementLines,
        totalStaffRequired,
        totalStaffAssigned: 0,
        contractType: requestType,
        estimatedContractValue,
        status: 'submitted',
        specialRequirements,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      MOCK_B2B_REQUESTS.unshift(newRequest);
      setIsSubmitting(false);
      setSubmittedReqNo(newReqNo);
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* Header Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 rounded-3xl text-white shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 bg-white/10 px-2.5 py-0.5 rounded-full">
            Institutional Requisition Builder
          </span>
          <h1 className="text-2xl font-extrabold">New Staffing Request</h1>
          <p className="text-xs text-slate-300 font-medium">
            Define multi-role clinical requirements for partner hospitals & healthcare facilities.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={() => navigate('/organization/requests')}
          className="text-white border-white/20 hover:bg-white/10 font-bold text-xs cursor-pointer"
        >
          Cancel
        </Button>
      </div>

      {/* Progress Stepper Header */}
      {!submittedReqNo && (
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          {[
            { step: 1, label: '1. Facility & Contact' },
            { step: 2, label: '2. Staffing Requirements (Multi-Line)' },
            { step: 3, label: '3. Schedule & Instructions' },
            { step: 4, label: '4. Contract Review & Submit' },
          ].map((s) => (
            <div
              key={s.step}
              onClick={() => s.step < currentStep && setCurrentStep(s.step)}
              className={`flex items-center gap-2 cursor-pointer transition-all ${
                currentStep === s.step
                  ? 'text-blue-600 font-extrabold'
                  : currentStep > s.step
                  ? 'text-teal-700 font-bold'
                  : 'text-slate-400 font-medium'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep === s.step
                    ? 'bg-blue-600 text-white shadow-xs'
                    : currentStep > s.step
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {currentStep > s.step ? '✓' : s.step}
              </div>
              <span className="hidden sm:inline text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* STEP 1: FACILITY & CONTACT */}
      {!submittedReqNo && currentStep === 1 && (
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900">Step 1: Facility & Contact Information</h2>
            <p className="text-xs text-slate-500">Provide department and facility superintendent details.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Requisition Title *"
              value={requestTitle}
              onChange={(e) => setRequestTitle(e.target.value)}
              placeholder="e.g. Cardiac ICU Roster Deployment"
              required
            />
            <Input
              label="Hospital Department / Ward *"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="e.g. ICU Ward 4 / OT Suite B"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Contact Person Name *"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Dr. Rakesh Sharma"
              required
            />
            <Input
              label="Designation *"
              value={contactDesignation}
              onChange={(e) => setContactDesignation(e.target.value)}
              placeholder="Nursing Superintendent"
              required
            />
            <Input
              label="Contact Phone (+91) *"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="+91-98112-99012"
              required
            />
            <Input
              label="Contact Email *"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="rakesh.sharma@maxhealthcare.in"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contract Deployment Type *</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'monthly_retainer', title: 'Monthly Retainer', desc: '30-day fixed roster deployment' },
                { id: 'per_shift', title: 'Per-Shift Deployment', desc: 'On-demand per shift billing' },
                { id: 'emergency_deployment', title: 'Emergency Deployment', desc: 'Rapid 4-hour response staffing' },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => setRequestType(t.id as any)}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    requestType === t.id
                      ? 'border-blue-600 bg-blue-50/50 shadow-2xs ring-1 ring-blue-600'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-extrabold text-slate-900 text-xs">{t.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button
              variant="primary"
              onClick={() => setCurrentStep(2)}
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
            >
              Continue to Staffing Requirements
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 2: MULTI-LINE REQUIREMENTS */}
      {!submittedReqNo && currentStep === 2 && (
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Step 2: Staffing Requirements (Multi-Line)</h2>
              <p className="text-xs text-slate-500">Add multiple clinical roles, quantities, and shifts to one request.</p>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={handleAddRequirementLine}
              leftIcon={<Plus className="w-4 h-4" />}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs cursor-pointer"
            >
              Add Requirement Line
            </Button>
          </div>

          <div className="space-y-4">
            {requirementLines.map((line, idx) => (
              <div key={line.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                    Requirement Line #{idx + 1}
                  </span>
                  {requirementLines.length > 1 && (
                    <button
                      onClick={() => handleRemoveRequirementLine(line.id)}
                      className="text-rose-600 hover:text-rose-800 text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove Line
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Role Category *</label>
                    <select
                      value={line.roleCategory}
                      onChange={(e) => handleUpdateLine(line.id, 'roleCategory', e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-bold text-slate-800 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="icu_nurse">ICU Registered Nurse</option>
                      <option value="registered_nurse">General Ward Registered Nurse</option>
                      <option value="physiotherapist">Physiotherapist</option>
                      <option value="caregiver_attendant">Bedside Caregiver / Attendant</option>
                      <option value="general_physician">General Duty Medical Officer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Required Quantity *</label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={line.requiredCount}
                      onChange={(e) => handleUpdateLine(line.id, 'requiredCount', Number(e.target.value))}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-bold text-slate-800 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Shift Type *</label>
                    <select
                      value={line.shiftType}
                      onChange={(e) => handleUpdateLine(line.id, 'shiftType', e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-bold text-slate-800 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="12h_day">12-Hour Day (08:00 - 20:00)</option>
                      <option value="12h_night">12-Hour Night (20:00 - 08:00)</option>
                      <option value="8h_general">8-Hour General Shift</option>
                      <option value="24h_rotational">24-Hour Rotational</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(1)}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
              className="cursor-pointer"
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={() => setCurrentStep(3)}
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
            >
              Continue to Schedule
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 3: SCHEDULE & INSTRUCTIONS */}
      {!submittedReqNo && currentStep === 3 && (
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900">Step 3: Schedule & Facility Instructions</h2>
            <p className="text-xs text-slate-500">Set deployment dates and sterile dress code instructions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Deployment Start Date *"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <Input
              label="Deployment End Date *"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Special Clinical & Scrub Instructions</label>
            <textarea
              rows={3}
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
              placeholder="e.g. Sterile scrubs, ACLS certificates, hospital orientation protocol..."
              className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(2)}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
              className="cursor-pointer"
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={() => setCurrentStep(4)}
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
            >
              Review Contract & Submit
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 4: REVIEW & SUBMIT */}
      {!submittedReqNo && currentStep === 4 && (
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-extrabold text-slate-900">Step 4: Requisition Summary & Submission</h2>
            <p className="text-xs text-slate-500">Review total staff requirements and estimated contract value.</p>
          </div>

          <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-200 space-y-3 text-xs">
            <div className="flex justify-between items-center border-b border-blue-200/80 pb-2">
              <span className="font-extrabold text-slate-900 text-sm">{requestTitle}</span>
              <Badge variant="info" className="uppercase font-bold text-[10px]">
                {requestType.replace('_', ' ')}
              </Badge>
            </div>

            <p className="text-slate-700">
              Department: <strong>{department}</strong> • Contact: <strong>{contactName} ({contactPhone})</strong>
            </p>
            <p className="text-slate-700">
              Dates: <strong>{startDate} to {endDate}</strong> (30-day cycle)
            </p>

            <div className="pt-2 border-t border-blue-200/80 space-y-1">
              <p className="font-bold text-slate-900">Staffing Lines Breakdown:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                {requirementLines.map((line) => (
                  <li key={line.id}>
                    <strong>{line.requiredCount}x</strong> {line.roleCategoryTitle} ({line.shiftType.replace('_', ' ')}) @ ₹{line.agreedDailyRate}/day
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-blue-200 text-sm font-extrabold text-slate-900">
              <span>Total Staff Required: <strong className="text-blue-700">{totalStaffRequired} Personnel</strong></span>
              <span>Est. Contract Value: <strong className="text-teal-700">₹{estimatedContractValue.toLocaleString('en-IN')}</strong></span>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(3)}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
              className="cursor-pointer"
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmitRequest}
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
            >
              Submit Staffing Requisition
            </Button>
          </div>
        </Card>
      )}

      {/* SUBMISSION SUCCESS */}
      {submittedReqNo && (
        <Card className="p-8 text-center bg-white border-slate-200 shadow-xl rounded-3xl space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Staffing Requisition Submitted!</h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Your institutional staffing request has been submitted to Pulse n Care Central Operations. Requisition ID:
          </p>
          <div className="bg-slate-100 p-3 rounded-xl inline-block font-mono text-base font-extrabold text-blue-800">
            {submittedReqNo}
          </div>
          <p className="text-[11px] text-slate-500">
            Operations desk is verifying staff eligibility and building the hospital shift roster.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <Button
              variant="primary"
              onClick={() => navigate('/organization/requests')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
            >
              View All Requisitions
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
