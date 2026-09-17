import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_JOB_POSTINGS, MOCK_JOB_APPLICATIONS } from '../../data/mockCareersData';
import type { JobPosting, JobApplication } from '../../types';
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  CheckCircle2,
  ShieldCheck,
  Send,
  X,
  FileText,
  DollarSign,
  Heart,
  Users,
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantQualification, setApplicantQualification] = useState('');
  const [applicantExperience, setApplicantExperience] = useState<number>(3);
  const [applicantOrg, setApplicantOrg] = useState('');
  const [applicantNotice, setApplicantNotice] = useState<number>(15);
  const [resumeFileName, setResumeFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplicationNo, setSubmittedApplicationNo] = useState<string | null>(null);

  const filteredJobs = selectedCategory === 'all'
    ? MOCK_JOB_POSTINGS
    : MOCK_JOB_POSTINGS.filter((j) => j.roleCategory === selectedCategory);

  const handleOpenApplyModal = (job: JobPosting) => {
    setSelectedJob(job);
    setApplicantQualification(job.qualifications[0] || '');
    setSubmittedApplicationNo(null);
    setIsApplyModalOpen(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newAppNo = `APP-2026-09${MOCK_JOB_APPLICATIONS.length + 1}`;
      const newApp: JobApplication = {
        id: `app-${Date.now()}`,
        applicationNumber: newAppNo,
        jobId: selectedJob.id,
        jobTitle: selectedJob.title,
        jobCode: selectedJob.jobCode,
        fullName: applicantName,
        email: applicantEmail,
        phone: applicantPhone,
        gender: 'female',
        qualification: applicantQualification,
        experienceYears: Number(applicantExperience),
        currentOrganization: applicantOrg || undefined,
        noticePeriodDays: Number(applicantNotice),
        resumeFileName: resumeFileName || 'Uploaded_Resume.pdf',
        status: 'applied',
        appliedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      MOCK_JOB_APPLICATIONS.unshift(newApp);
      setIsSubmitting(false);
      setSubmittedApplicationNo(newAppNo);
    }, 800);
  };

  return (
    <div className="space-y-12 pb-16 text-left relative max-w-7xl mx-auto px-4 sm:px-6">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <HealthcareTexture type="medical-grid" opacity={0.08} />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Verified In-House Clinical Care Team
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Build Your Clinical Career with <span className="text-teal-400">Pulse n Care</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Join Delhi NCR's premier healthcare team. We offer competitive salaries, flexible shift rosters, health insurance coverage, and continuous clinical certification programs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <p className="text-slate-400 font-semibold">Verification</p>
              <p className="text-white font-extrabold text-sm">100% In-House</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Service Zone</p>
              <p className="text-white font-extrabold text-sm">Delhi NCR</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Shift Roster</p>
              <p className="text-white font-extrabold text-sm">Home & Hospital</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Benefits</p>
              <p className="text-white font-extrabold text-sm">Insurance & Bonus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Pulse n Care */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900">Why Healthcare Professionals Choose Us</h2>
          <p className="text-slate-600 text-sm">
            We prioritize clinical safety, dignity, transparent earnings, and professional growth for every care team member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-3 border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Top Salary & On-Time Payroll</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guaranteed 1st of the month salary transfer, overtime incentives, travel allowance, and performance bonuses.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Health Insurance & Clinical Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive medical insurance, sterile PPE supply kits, and 24x7 doctor backup for emergency clinical support.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Flexible Shift Roster</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Choose between home care patient visits or partner hospital facility rosters (12h day/night & 24h options).
            </p>
          </Card>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Open Clinical & Nursing Positions</h2>
            <p className="text-xs text-slate-500">Explore active openings across Delhi NCR</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Jobs' },
              { id: 'icu_nurse', label: 'ICU Nurse' },
              { id: 'registered_nurse', label: 'Ward Nurse' },
              { id: 'physiotherapist', label: 'Physiotherapist' },
              { id: 'caregiver_attendant', label: 'Bedside Caregiver' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="p-6 border-slate-200 hover:border-teal-300 transition-all space-y-4 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="info" className="uppercase font-bold text-[10px]">
                      {job.jobCode}
                    </Badge>
                    <Badge variant="success" className="capitalize font-semibold text-[11px]">
                      {job.employmentType.replace('_', ' ')}
                    </Badge>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {job.salaryRange}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      Experience: {job.experienceRequired}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Posted: {new Date(job.postedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start lg:self-center">
                  <Button
                    variant="primary"
                    onClick={() => handleOpenApplyModal(job)}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {job.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-teal-600" /> Key Qualifications:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                    {job.qualifications.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Package Benefits:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                    {job.benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 text-left">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submittedApplicationNo ? (
              <>
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <Badge variant="info" className="uppercase font-bold text-[10px]">
                    {selectedJob.jobCode}
                  </Badge>
                  <h2 className="text-xl font-extrabold text-slate-900">Apply for {selectedJob.title}</h2>
                  <p className="text-xs text-slate-500">
                    Location: {selectedJob.location} • Salary: {selectedJob.salaryRange}
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      placeholder="e.g. Anjali Deshmukh"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      required
                    />
                    <Input
                      label="Phone Number (+91) *"
                      placeholder="+91-98765-43210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address *"
                      type="email"
                      placeholder="anjali@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      required
                    />
                    <Input
                      label="Primary Qualification *"
                      placeholder="e.g. B.Sc Nursing, BPT, GDM"
                      value={applicantQualification}
                      onChange={(e) => setApplicantQualification(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Experience (Years) *</label>
                      <input
                        type="number"
                        min={0}
                        max={40}
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Notice Period (Days)</label>
                      <input
                        type="number"
                        min={0}
                        max={90}
                        value={applicantNotice}
                        onChange={(e) => setApplicantNotice(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Current Employer</label>
                      <input
                        type="text"
                        placeholder="e.g. Fortis / Apollo"
                        value={applicantOrg}
                        onChange={(e) => setApplicantOrg(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Resume / CV File</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                      <FileText className="w-8 h-8 text-teal-600 mx-auto mb-1" />
                      <p className="text-xs font-bold text-slate-700">Click to upload or drag & drop CV</p>
                      <p className="text-[10px] text-slate-500">PDF, DOCX up to 5MB</p>
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={(e) => setResumeFileName(e.target.files?.[0]?.name || '')}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="block w-full h-full cursor-pointer mt-2 text-xs text-teal-700 font-bold underline">
                        {resumeFileName ? `Selected: ${resumeFileName}` : 'Choose File'}
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsApplyModalOpen(false)}
                      className="cursor-pointer"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for applying to Pulse n Care. Your application reference number is:
                </p>
                <div className="bg-slate-100 p-3 rounded-xl inline-block font-mono text-base font-extrabold text-teal-800">
                  {submittedApplicationNo}
                </div>
                <p className="text-[11px] text-slate-500">
                  Our HR & Clinical Operations Desk will review your application and contact you within 24-48 business hours.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold cursor-pointer mt-4"
                >
                  Done
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
