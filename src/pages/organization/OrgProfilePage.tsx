import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Building2,
  Users,
  CheckCircle2,
  Save,
  Building,
  Key,
} from 'lucide-react';

export const OrgProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facility' | 'contacts' | 'security'>('facility');
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  // Form State
  const [orgName, setOrgName] = useState('Max Super Speciality Hospital, Saket');
  const [regNo, setRegNo] = useState('DL-HOSP-2018-9921');
  const [address, setAddress] = useState('1, 2 Press Enclave Marg, Saket Institutional Area, New Delhi - 110017');
  const [primaryName, setPrimaryName] = useState('Dr. Rakesh Sharma');
  const [primaryDesignation, setPrimaryDesignation] = useState('Nursing Superintendent');
  const [primaryPhone, setPrimaryPhone] = useState('+91-98112-99012');
  const [primaryEmail, setPrimaryEmail] = useState('rakesh.sharma@maxhealthcare.in');

  const handleSaveProfile = () => {
    setSavedMsg('Facility profile and contact information updated successfully!');
    setTimeout(() => {
      setSavedMsg(null);
    }, 2500);
  };

  return (
    <div className="space-y-8 text-left max-w-5xl mx-auto relative px-4 sm:px-6">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <Building2 className="w-3.5 h-3.5" />
            Institutional Partner Profile
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Facility Profile & Settings
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Manage hospital registration details, ward locations, and authorized contact persons.
          </p>
        </div>

        <Badge variant="success" className="text-xs px-3 py-1 font-extrabold">
          NABH Accredited
        </Badge>
      </div>

      {/* TABS */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-2 max-w-md relative z-10">
        {[
          { id: 'facility', label: 'Facility Details', icon: <Building className="w-4 h-4" /> },
          { id: 'contacts', label: 'Authorized Contacts', icon: <Users className="w-4 h-4" /> },
          { id: 'security', label: 'Account Security', icon: <Key className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {savedMsg && (
        <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-extrabold text-xs flex items-center gap-2 relative z-10">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{savedMsg}</span>
        </div>
      )}

      {/* TAB 1: FACILITY DETAILS */}
      {activeTab === 'facility' && (
        <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-6 relative z-10">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Hospital Facility & License Information</h3>
            <p className="text-xs text-slate-500">Legal registration details and physical address</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Legal Hospital Name *"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            />
            <Input
              label="Hospital Registration / License No *"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
            <div className="sm:col-span-2">
              <Input
                label="Primary Facility Address *"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Configured Departments List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Active Hospital Departments</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {[
                { name: 'Cardiac ICU Ward 4', head: 'Sr. Mary Kurien', beds: '24 Beds' },
                { name: 'Post-Op Recovery Ward B', head: 'Sr. Anish Paul', beds: '18 Beds' },
                { name: 'Physiotherapy & Rehab Unit', head: 'Dr. Alok Verma', beds: 'OPD & Inpatient' },
              ].map((d, i) => (
                <div key={i} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1">
                  <p className="font-extrabold text-slate-900">{d.name}</p>
                  <p className="text-slate-600 font-medium">In-Charge: {d.head}</p>
                  <span className="inline-block text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-blue-700">
                    {d.beds}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button
              variant="primary"
              onClick={handleSaveProfile}
              leftIcon={<Save className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Save Facility Profile
            </Button>
          </div>
        </Card>
      )}

      {/* TAB 2: AUTHORIZED CONTACTS */}
      {activeTab === 'contacts' && (
        <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-6 relative z-10">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Authorized Facility Contacts</h3>
            <p className="text-xs text-slate-500">Personnel authorized to create requisitions and sign timesheets</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Primary Contact Name *"
              value={primaryName}
              onChange={(e) => setPrimaryName(e.target.value)}
              required
            />
            <Input
              label="Designation *"
              value={primaryDesignation}
              onChange={(e) => setPrimaryDesignation(e.target.value)}
              required
            />
            <Input
              label="Official Phone (+91) *"
              value={primaryPhone}
              onChange={(e) => setPrimaryPhone(e.target.value)}
              required
            />
            <Input
              label="Official Email *"
              type="email"
              value={primaryEmail}
              onChange={(e) => setPrimaryEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button
              variant="primary"
              onClick={handleSaveProfile}
              leftIcon={<Save className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Save Authorized Contacts
            </Button>
          </div>
        </Card>
      )}

      {/* TAB 3: ACCOUNT SECURITY */}
      {activeTab === 'security' && (
        <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-6 relative z-10">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Account Credentials & Password</h3>
            <p className="text-xs text-slate-500">Manage login credentials for your institutional portal</p>
          </div>

          <div className="space-y-4 max-w-md">
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Input label="Confirm New Password" type="password" placeholder="••••••••" />
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button
              variant="primary"
              onClick={handleSaveProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Update Password
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
