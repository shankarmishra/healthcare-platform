import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_JOB_APPLICATIONS, MOCK_JOB_POSTINGS } from '../../data/mockCareersData';
import { MOCK_STAFF_PROFILES } from '../../data/mockStaffData';
import type { JobApplication, StaffProfile } from '../../types';
import {
  Users,
  Briefcase,
  Search,
  UserCheck,
  CheckCircle2,
  X,
  ShieldCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminCareersPage: React.FC = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<JobApplication[]>(MOCK_JOB_APPLICATIONS);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);
  const [convertModalOpen, setConvertModalOpen] = useState(false);
  const [convertSuccessMsg, setConvertSuccessMsg] = useState<string | null>(null);

  const filteredApps = applications.filter((app) => {
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleConvertToStaff = (app: JobApplication) => {
    // Generate new PNC employee ID
    const newEmpId = `PNC-EMP-00${MOCK_STAFF_PROFILES.length + 45}`;
    const newStaffId = `staff-${Date.now()}`;

    // Create staff profile
    const newStaff: StaffProfile = {
      id: newStaffId,
      userId: `user-staff-${Date.now()}`,
      employeeId: newEmpId,
      fullName: app.fullName,
      displayName: app.fullName,
      gender: app.gender,
      dateOfBirth: app.dateOfBirth || '1995-01-01',
      phone: app.phone,
      email: app.email,
      residentialAddress: {
        id: `addr-${Date.now()}`,
        label: 'Home Address',
        line1: 'Sector 62, Institutional Area',
        city: 'Noida',
        state: 'Uttar Pradesh NCR',
        pincode: '201309',
        latitude: 28.627,
        longitude: 77.372,
      },
      emergencyContact: {
        name: 'Spouse / Family Contact',
        relationship: 'Spouse',
        phone: app.phone,
      },
      roleCategory: 'registered_nurse',
      primaryServiceId: 'srv-nursing-01',
      eligibleServiceIds: ['srv-nursing-01', 'srv-icu-02'],
      skills: ['Clinical Assessment', 'Patient Care', 'Vitals Monitoring'],
      specializations: [app.qualification],
      totalExperienceYears: app.experienceYears,
      languages: ['Hindi', 'English'],
      eligibleCities: ['Delhi', 'Noida', 'Gurugram', 'Faridabad'],
      eligibleLocalities: ['All Zones'],
      eligiblePincodes: ['110001', '201301', '122001'],
      shiftEligibility: {
        canDo12HourDay: true,
        canDo12HourNight: true,
        canDo24HourShift: false,
        canDoB2BHospitalRoster: true,
      },
      weeklySchedule: [
        { dayOfWeek: 1, startTime: '08:00', endTime: '20:00', isAvailable: true },
        { dayOfWeek: 2, startTime: '08:00', endTime: '20:00', isAvailable: true },
        { dayOfWeek: 3, startTime: '08:00', endTime: '20:00', isAvailable: true },
        { dayOfWeek: 4, startTime: '08:00', endTime: '20:00', isAvailable: true },
        { dayOfWeek: 5, startTime: '08:00', endTime: '20:00', isAvailable: true },
      ],
      employmentStatus: 'active',
      verificationStatus: 'verified',
      onboardingCompletionPercent: 100,
      education: [
        {
          id: `edu-${Date.now()}`,
          qualification: app.qualification,
          institution: 'Delhi Nursing College & University',
          completionYear: 2020,
          verificationStatus: 'verified',
        },
      ],
      experience: [
        {
          id: `exp-${Date.now()}`,
          organization: app.currentOrganization || 'Partner Healthcare Hospital',
          role: app.jobTitle,
          startDate: '2021-01-01',
          isCurrent: true,
          responsibilities: 'Patient care delivery & clinical shift duties.',
          verificationStatus: 'verified',
        },
      ],
      documents: [],
      completedDutyCount: 0,
      averageRating: 5.0,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    MOCK_STAFF_PROFILES.push(newStaff);

    // Update application status
    setApplications((prev) =>
      prev.map((item) =>
        item.id === app.id
          ? { ...item, status: 'converted_to_staff', convertedStaffId: newStaffId }
          : item
      )
    );

    setConvertSuccessMsg(`Successfully converted ${app.fullName} to active staff member with Employee ID ${newEmpId}!`);
    setTimeout(() => {
      setConvertSuccessMsg(null);
      setConvertModalOpen(false);
      navigate(`/admin/staff/${newStaffId}`);
    }, 1500);
  };

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto relative px-4 sm:px-6">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            Care Operations HR & Candidate Desk
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Careers ATS & Staffing Pipeline
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Review applicant profiles, schedule interviews, and convert candidates into background-verified Pulse n Care staff.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-xs px-4 py-2 rounded-2xl text-center border border-white/10">
            <p className="text-[10px] text-slate-300 font-bold uppercase">Total Applicants</p>
            <p className="text-xl font-extrabold text-white">{applications.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-4 py-2 rounded-2xl text-center border border-white/10">
            <p className="text-[10px] text-teal-300 font-bold uppercase">Open Postings</p>
            <p className="text-xl font-extrabold text-teal-300">{MOCK_JOB_POSTINGS.length}</p>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 relative z-10">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search candidate name, App #, or job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'All Candidates' },
            { id: 'applied', label: 'New Applied' },
            { id: 'screening', label: 'Screening' },
            { id: 'interview_scheduled', label: 'Interview' },
            { id: 'offered', label: 'Offered' },
            { id: 'converted_to_staff', label: 'Converted Staff' },
          ].map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap border transition-all ${
                selectedStatus === status.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      </div>

      {/* Candidates List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredApps.map((app) => (
          <Card
            key={app.id}
            className="p-6 border-slate-200 hover:border-teal-400 transition-all shadow-xs space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-extrabold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  {app.applicationNumber}
                </span>
                <Badge
                  variant={
                    app.status === 'converted_to_staff'
                      ? 'success'
                      : app.status === 'offered'
                      ? 'info'
                      : 'warning'
                  }
                  className="capitalize font-bold text-[10px]"
                >
                  {app.status.replace(/_/g, ' ')}
                </Badge>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{app.fullName}</h3>
                <p className="text-xs text-slate-600 font-medium flex items-center gap-1 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  Applied: {app.jobTitle}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="flex justify-between">
                  <span className="text-slate-400">Qualification:</span>
                  <span className="font-bold text-slate-800">{app.qualification}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-slate-400">Experience:</span>
                  <span className="font-bold text-slate-800">{app.experienceYears} Years</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-slate-400">Current Org:</span>
                  <span className="font-bold text-slate-800">{app.currentOrganization || 'N/A'}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-slate-400">Notice Period:</span>
                  <span className="font-bold text-slate-800">{app.noticePeriodDays || 0} Days</span>
                </p>
              </div>

              {app.adminNotes && (
                <p className="text-[11px] text-slate-500 italic bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                  "{app.adminNotes}"
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedApp(app)}
                className="text-xs font-bold cursor-pointer"
              >
                View Full CV
              </Button>

              {app.status !== 'converted_to_staff' ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    setSelectedApp(app);
                    setConvertModalOpen(true);
                  }}
                  leftIcon={<UserCheck className="w-3.5 h-3.5" />}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer text-xs"
                >
                  Convert to Staff
                </Button>
              ) : (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Active Staff
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Convert to Staff Confirmation Modal */}
      {convertModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left">
            <button
              onClick={() => setConvertModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!convertSuccessMsg ? (
              <>
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900">Convert Candidate to Active Staff</h2>
                  <p className="text-xs text-slate-600">
                    This action will onboard <strong>{selectedApp.fullName}</strong> as an internal verified Pulse n Care employee.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                  <p className="font-bold text-slate-900">System Onboarding Actions:</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Generate immutable Employee ID (e.g. PNC-EMP-0045)</li>
                    <li>Create internal <code>StaffProfile</code> with qualification & experience</li>
                    <li>Issue first-time login credentials for Employee Duty Portal (<code>/staff/login</code>)</li>
                    <li>Set employment status to <strong>ACTIVE</strong></li>
                  </ul>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Button variant="outline" onClick={() => setConvertModalOpen(false)} className="cursor-pointer">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleConvertToStaff(selectedApp)}
                    leftIcon={<ShieldCheck className="w-4 h-4" />}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                  >
                    Confirm & Onboard Staff
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Onboarding Complete!</h3>
                <p className="text-xs text-slate-600">{convertSuccessMsg}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
