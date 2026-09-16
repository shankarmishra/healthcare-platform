import React, { useState } from 'react';
import { 
  Search, Filter, ShieldCheck, Star, Eye, X, Stethoscope 
} from 'lucide-react';
import { MOCK_PROFESSIONALS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { KYCStatusBadge } from '../../components/common/Badge';
import type { ProfessionalProfile, ProfessionalDocument } from '../../types';

export const AdminProfessionalsPage: React.FC = () => {
  const [pros, setPros] = useState<ProfessionalProfile[]>(MOCK_PROFESSIONALS);
  const [search, setSearch] = useState('');
  const [kycFilter, setKycFilter] = useState<string>('all');
  const [selectedPro, setSelectedPro] = useState<ProfessionalProfile | null>(null);

  const filtered = pros.filter((p: ProfessionalProfile) => {
    const matchesSearch = p.displayName.toLowerCase().includes(search.toLowerCase()) || 
                          p.qualification.toLowerCase().includes(search.toLowerCase()) || 
                          p.registrationNumber.toLowerCase().includes(search.toLowerCase());
    const matchesKyc = kycFilter === 'all' || p.kycStatus === kycFilter;
    return matchesSearch && matchesKyc;
  });

  const toggleProStatus = (id: string) => {
    setPros(pros.map((p: ProfessionalProfile) => {
      if (p.id === id) {
        const nextStatus = p.kycStatus === 'approved' ? ('rejected' as const) : ('approved' as const);
        return { ...p, kycStatus: nextStatus };
      }
      return p;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Healthcare Professionals Directory</h1>
          <p className="text-slate-600 text-xs mt-1">Audit credentials, verify state nursing council licenses, and manage field staff status</p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg border border-teal-200 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-teal-600" /> {pros.filter((p: ProfessionalProfile) => p.kycStatus === 'approved').length} Verified Staff
          </span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, license #, specialization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={kycFilter}
            onChange={(e) => setKycFilter(e.target.value)}
            className="text-xs p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="all">All KYC Statuses</option>
            <option value="approved">Approved Only</option>
            <option value="submitted">Under Review</option>
            <option value="rejected">Rejected / Suspended</option>
          </select>
        </div>
      </div>

      {/* Professionals Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Professional</th>
                <th className="p-4">Qualification</th>
                <th className="p-4">Registration #</th>
                <th className="p-4">Hourly Rate</th>
                <th className="p-4">KYC Status</th>
                <th className="p-4">Rating</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((pro: ProfessionalProfile) => (
                <tr key={pro.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-3">
                      <img src={pro.profilePhoto} alt={pro.displayName} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                      <div>
                        <span className="block font-bold">{pro.displayName}</span>
                        <span className="text-[10px] text-slate-400">{pro.id} • {pro.experienceYears} yrs exp</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium text-slate-800">{pro.qualification}</td>
                  <td className="p-4 font-mono font-semibold text-teal-800">{pro.registrationNumber}</td>
                  <td className="p-4 font-bold text-slate-900">₹{pro.hourlyRate}/hr</td>
                  <td className="p-4">
                    <KYCStatusBadge status={pro.kycStatus} />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {pro.rating}
                    </div>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setSelectedPro(pro)}
                      className="p-1.5 text-teal-700 hover:bg-teal-50 rounded-lg font-semibold text-xs inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Drawer
                    </button>
                    <button
                      onClick={() => toggleProStatus(pro.id)}
                      className={`p-1.5 rounded-lg font-semibold text-xs inline-flex items-center gap-1 cursor-pointer ${
                        pro.kycStatus === 'approved'
                          ? 'text-rose-600 hover:bg-rose-50'
                          : 'text-emerald-700 hover:bg-emerald-50'
                      }`}
                    >
                      {pro.kycStatus === 'approved' ? 'Suspend' : 'Verify'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Professional Detail Drawer */}
      {selectedPro && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-xl bg-white h-full p-6 shadow-2xl overflow-y-auto space-y-6 animate-in slide-in-from-right duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-600" /> Professional Audit Profile
              </h2>
              <button onClick={() => setSelectedPro(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img src={selectedPro.profilePhoto} alt={selectedPro.displayName} className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-500" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedPro.displayName}</h3>
                <p className="text-xs text-slate-500">{selectedPro.qualification} • ID: {selectedPro.id}</p>
                <div className="mt-1">
                  <KYCStatusBadge status={selectedPro.kycStatus} />
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Nursing Council Registration:</span>
                <span className="font-mono font-bold text-teal-800">{selectedPro.registrationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hourly Rate:</span>
                <span className="font-bold text-slate-900">₹{selectedPro.hourlyRate}/hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Completed Visits:</span>
                <span className="font-bold text-slate-900">{selectedPro.totalVisits} visits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Coverage Area:</span>
                <span className="font-medium text-slate-800">{selectedPro.location?.addressName || 'Central Bangalore'}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-2">Verified Documents Audit</h4>
              <div className="space-y-2">
                {selectedPro.documents.map((doc: ProfessionalDocument) => (
                  <div key={doc.id} className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-800">{doc.type.toUpperCase()}</span>
                      <span className="block text-[10px] text-slate-400">Uploaded {doc.uploadedAt}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-bold">
                      {doc.verificationStatus.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <Button
                onClick={() => {
                  toggleProStatus(selectedPro.id);
                  setSelectedPro(null);
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 text-xs rounded-xl cursor-pointer"
              >
                Toggle Status / Suspend Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
