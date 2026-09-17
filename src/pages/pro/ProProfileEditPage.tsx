import React, { useState } from 'react';
import { Save, CheckCircle2 } from 'lucide-react';
import { MOCK_PROFESSIONALS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import type { ProfessionalProfile } from '../../types';

export const ProProfileEditPage: React.FC = () => {
  const pro: ProfessionalProfile = MOCK_PROFESSIONALS[0];
  const [bio, setBio] = useState(pro.bio);
  const [hourlyRate, setHourlyRate] = useState(pro.hourlyRate);
  const [serviceArea, setServiceArea] = useState(pro.location?.addressName || 'Delhi NCR Active Hubs');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Professional Profile & Rates</h1>
          <p className="text-slate-600 text-sm mt-1">Manage public clinical bio, service radius, and base hourly rate</p>
        </div>

        {saved && (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Profile updated successfully! Changes reflected live on Marketplace.
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <img src={pro.profilePhoto} alt={pro.displayName} className="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">{pro.displayName}</h2>
              <p className="text-xs text-slate-500">{pro.qualification} • Reg: {pro.registrationNumber}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded mt-1 border border-teal-200">
                Verified Clinical Professional
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Clinical Bio & Care Philosophy</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Base Hourly Rate (₹)</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-xs">₹</span>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full text-xs pl-7 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Service Area</label>
                <input
                  type="text"
                  value={serviceArea}
                  onChange={(e) => setServiceArea(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Verified Specializations</label>
              <div className="flex flex-wrap gap-2">
                {pro.specializations.map((spec: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer">
            <Save className="w-4 h-4" /> Save Profile Changes
          </Button>
        </form>
      </div>
    </div>
  );
};
