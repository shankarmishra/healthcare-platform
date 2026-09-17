import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Phone,
  FileText,
  Star,
  AlertTriangle
} from 'lucide-react';
import { MOCK_STAFF_PROFILES } from '../../data/mockStaffData';

export const AdminStaffDetailPage: React.FC = () => {
  const { staffId } = useParams<{ staffId: string }>();
  const navigate = useNavigate();

  const staff = MOCK_STAFF_PROFILES.find(s => s.id === staffId) || MOCK_STAFF_PROFILES[0];
  const qualification = staff.education[0]?.qualification || 'B.Sc Nursing';

  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'personal'
    | 'professional'
    | 'education'
    | 'experience'
    | 'skills'
    | 'areas'
    | 'availability'
    | 'schedule'
    | 'assignments'
    | 'documents'
    | 'reviews'
    | 'leave'
    | 'communications'
    | 'security'
    | 'audit'
  >('overview');

  const [disableModalOpen, setDisableModalOpen] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'personal', label: 'Personal' },
    { id: 'professional', label: 'Professional' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills & Services' },
    { id: 'areas', label: 'Service Areas' },
    { id: 'availability', label: 'Availability' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'documents', label: 'Documents' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'leave', label: 'Leave' },
    { id: 'communications', label: 'Communications' },
    { id: 'security', label: 'Account & Security' },
    { id: 'audit', label: 'Activity Audit' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 space-y-6">
      
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/admin/staff')} className="text-xs font-bold text-slate-500 hover:text-brand-teal">
              ← Staff Directory
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono font-bold text-brand-teal">{staff.employeeId}</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">{staff.fullName}</h1>
          <p className="text-xs text-slate-500">{qualification} • {staff.totalExperienceYears} Years Exp • {staff.eligibleCities.join(', ')}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${staff.phone}`}
            className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-teal" /> Call Staff
          </a>
          <Button
            onClick={() => setDisableModalOpen(true)}
            variant="outline"
            size="sm"
            className="text-rose-600 border-rose-200 hover:bg-rose-50 font-bold text-xs rounded-full"
          >
            Disable Account
          </Button>
        </div>
      </div>

      {/* Staff Operational Header Card */}
      <Card className="p-6 bg-white border-slate-200 shadow-md rounded-3xl relative overflow-hidden">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal font-black text-xl shrink-0">
              {staff.fullName.charAt(0)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-black text-slate-900">{staff.fullName}</h2>
                <Badge variant="teal" size="sm">{staff.roleCategory.replace('_', ' ').toUpperCase()}</Badge>
                <Badge variant="success" size="sm">100% VERIFIED</Badge>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-3">
                <span>Employee ID: <strong className="font-mono text-slate-900">{staff.employeeId}</strong></span>
                <span>•</span>
                <span>Phone: <strong className="text-slate-900">{staff.phone}</strong></span>
                <span>•</span>
                <span>Email: <strong className="text-slate-900">{staff.email}</strong></span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 text-center">
            <div>
              <p className="text-[10px] font-extrabold uppercase text-slate-400">Duties</p>
              <p className="text-lg font-black text-slate-900">{staff.completedDutyCount}</p>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase text-slate-400">Rating</p>
              <p className="text-lg font-black text-amber-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {staff.averageRating}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase text-slate-400">Status</p>
              <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* 16-Tab Navigation Bar */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-1 min-w-[1100px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT PANELS */}
      <Card className="p-6 bg-white border-slate-200 shadow-md rounded-3xl">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 border-b pb-2">Clinical Profile Summary</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Primary Service:</span>
                    <span className="font-bold text-brand-teal">Clinical Home Nursing</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Qualifications:</span>
                    <span className="font-bold text-slate-900">B.Sc Nursing (Registered RN)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Total Experience:</span>
                    <span className="font-bold text-slate-900">6 Years</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Active Coverage Cities:</span>
                    <span className="font-bold text-slate-900">{staff.eligibleCities.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 border-b pb-2">Verified Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {staff.skills.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-xs font-bold text-brand-teal">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-sm font-extrabold text-slate-900">Verification & Qualification Documents</h3>
              <Button size="sm" className="bg-brand-teal text-white font-bold text-xs rounded-full">
                + Upload New Document
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staff.documents.map((doc) => (
                <div key={doc.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-brand-teal" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{doc.type.replace('_', ' ').toUpperCase()}</p>
                      <p className="text-[11px] text-slate-500 font-mono">Doc #: {doc.documentNumber}</p>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">VERIFIED</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <div className="space-y-6 max-w-xl">
            <h3 className="text-sm font-extrabold text-slate-900 border-b pb-2">Account Security & Access Control</h3>
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Force Password Reset</p>
                  <p className="text-slate-500">Require staff to set a new password on their next login.</p>
                </div>
                <Button size="sm" onClick={() => setResetModalOpen(true)} className="bg-slate-900 text-white font-bold text-xs rounded-full">
                  Trigger Reset
                </Button>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-rose-900">Disable Employee Account</p>
                  <p className="text-rose-700">Prevents login and duty assignment.</p>
                </div>
                <Button size="sm" onClick={() => setDisableModalOpen(true)} className="bg-rose-600 text-white font-bold text-xs rounded-full">
                  Disable Account
                </Button>
              </div>
            </div>
          </div>
        )}

      </Card>

      {/* DISABLE ACCOUNT MODAL WITH ACTIVE DUTIES CHECK */}
      <Modal
        isOpen={disableModalOpen}
        onClose={() => setDisableModalOpen(false)}
        title="Disable Staff Account"
        maxWidth="md"
      >
        <div className="space-y-4 text-left">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1">
              <p className="font-extrabold">Active Confirmed Duties Detected!</p>
              <p>{staff.fullName} currently has <strong className="font-bold text-slate-900">1 active/upcoming duty</strong> assigned (BKG-2026-8819).</p>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            You must reassign or cancel all upcoming duties before disabling this staff account. Disabling prevents staff login and duty execution immediately.
          </p>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setDisableModalOpen(false)} className="font-bold">
              Cancel
            </Button>
            <Button size="sm" onClick={() => navigate('/admin/staff/schedule')} className="bg-brand-teal text-white font-bold">
              Review & Reassign Duties First
            </Button>
          </div>
        </div>
      </Modal>

      {/* RESET PASSWORD MODAL */}
      <Modal
        isOpen={resetModalOpen}
        onClose={() => setResetModalOpen(false)}
        title="Force Password Reset"
        maxWidth="sm"
      >
        <div className="space-y-4 text-left">
          <p className="text-xs text-slate-600">
            An automated password reset link will be sent to <strong>{staff.email}</strong>. Their account status will be set to <span className="font-bold text-amber-700">Password Reset Required</span>.
          </p>
          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setResetModalOpen(false)}>Cancel</Button>
            <Button size="sm" onClick={() => setResetModalOpen(false)} className="bg-slate-900 text-white font-bold">Send Reset Link</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
