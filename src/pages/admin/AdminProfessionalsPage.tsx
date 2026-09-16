import React, { useState } from 'react';
import { 
  Search, Filter, ShieldCheck, Star, Eye, X, Stethoscope
} from 'lucide-react';
import { useBookings } from '../../context/BookingContext';
import { Button } from '../../components/common/Button';
import { KYCStatusBadge } from '../../components/common/Badge';
import type { ProfessionalProfile, ProfessionalDocument } from '../../types';

export const AdminProfessionalsPage: React.FC = () => {
  const { professionals } = useBookings();
  const [pros, setPros] = useState<ProfessionalProfile[]>(professionals);
  const [search, setSearch] = useState('');
  const [employmentFilter, setEmploymentFilter] = useState<string>('all');
  const [selectedPro, setSelectedPro] = useState<ProfessionalProfile | null>(null);

  const filtered = pros.filter((p: ProfessionalProfile) => {
    const matchesSearch = p.displayName.toLowerCase().includes(search.toLowerCase()) || 
                          p.qualification.toLowerCase().includes(search.toLowerCase()) || 
                          p.registrationNumber.toLowerCase().includes(search.toLowerCase()) ||
                          (p.employeeId && p.employeeId.toLowerCase().includes(search.toLowerCase()));
    const matchesEmp = employmentFilter === 'all' || p.employmentType === employmentFilter || (employmentFilter === 'full_time' && !p.employmentType);
    return matchesSearch && matchesEmp;
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
    <div className="space-y-6 text-left">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border-default pb-4">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">
            Provider Management
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Internal Staff Directory & Roster</h1>
          <p className="text-text-muted text-xs mt-0.5">
            Manage full-time & contract healthcare staff, employee IDs, shift rosters, and leave approvals.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-bold px-3 py-1.5 bg-canvas-teal text-brand-teal rounded-xl border border-teal-200 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-brand-teal" /> {pros.length} Active Internal Employees
          </span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-border-default shadow-subtle flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-text-muted" />
          <input
            type="text"
            placeholder="Search by Employee ID (EMP-1001), name, license..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-border-default focus:outline-none focus:border-brand-teal"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-text-muted" />
          <select
            value={employmentFilter}
            onChange={(e) => setEmploymentFilter(e.target.value)}
            className="text-xs p-2.5 rounded-xl border border-border-default bg-white font-semibold text-text-primary focus:outline-none focus:border-brand-teal"
          >
            <option value="all">All Employment Types</option>
            <option value="full_time">Full-Time Staff</option>
            <option value="contract">Contract Staff</option>
            <option value="part_time">Part-Time / On-Call</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-border-default shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-text-secondary">
            <thead className="bg-canvas-secondary border-b border-border-default text-text-primary font-extrabold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Staff ID & Employee</th>
                <th className="p-4">Role & Qualification</th>
                <th className="p-4">Employment Type</th>
                <th className="p-4">Assigned Shifts</th>
                <th className="p-4">Duty Status</th>
                <th className="p-4">Performance</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {filtered.map((pro: ProfessionalProfile, idx: number) => {
                const empId = pro.employeeId || `EMP-${1001 + idx}`;
                const empType = pro.employmentType || 'full_time';
                const dutyStatus = pro.availabilityStatus === 'active' ? 'ON DUTY' : 'OFF DUTY';

                return (
                  <tr key={pro.id} className="hover:bg-canvas-secondary/60 transition-colors">
                    <td className="p-4 font-semibold text-text-primary">
                      <div className="flex items-center gap-3">
                        <img src={pro.profilePhoto} alt={pro.displayName} className="w-10 h-10 rounded-xl object-cover border border-border-default" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-text-primary">{pro.displayName}</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-brand-teal bg-canvas-teal px-1.5 py-0.5 rounded border border-teal-200">
                            {empId}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-text-primary block">{pro.qualification}</span>
                      <span className="text-[10px] text-text-muted">{pro.registrationNumber}</span>
                    </td>
                    <td className="p-4 font-semibold uppercase text-[10px]">
                      <span className="px-2 py-0.5 rounded-full border bg-slate-100 text-slate-700 border-slate-300 font-bold">
                        {empType.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-4 font-extrabold text-text-primary">
                      {pro.assignedShiftCount || Math.floor(12 + idx * 3)} Shifts
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${
                        dutyStatus === 'ON DUTY' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}>
                        {dutyStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 font-bold text-text-primary">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {pro.rating}
                        <span className="text-[10px] text-text-muted">({pro.reviewCount})</span>
                      </div>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedPro(pro)}
                        className="p-1.5 text-brand-teal hover:bg-canvas-teal rounded-lg font-bold text-xs inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> Staff Drawer
                      </button>
                      <button
                        onClick={() => toggleProStatus(pro.id)}
                        className={`p-1.5 rounded-lg font-semibold text-xs inline-flex items-center gap-1 cursor-pointer ${
                          pro.kycStatus === 'approved'
                            ? 'text-rose-600 hover:bg-rose-50'
                            : 'text-emerald-700 hover:bg-emerald-50'
                        }`}
                      >
                        {pro.kycStatus === 'approved' ? 'Suspend' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staff Profile Drawer */}
      {selectedPro && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-xl bg-white h-full p-6 shadow-2xl overflow-y-auto space-y-6 text-left">
            <div className="flex justify-between items-center border-b border-border-default pb-4">
              <h2 className="text-lg font-extrabold text-text-primary flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-brand-teal" /> Employee Master File
              </h2>
              <button onClick={() => setSelectedPro(null)} className="text-text-muted hover:text-text-primary cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img src={selectedPro.profilePhoto} alt={selectedPro.displayName} className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-teal" />
              <div>
                <h3 className="text-xl font-extrabold text-text-primary">{selectedPro.displayName}</h3>
                <p className="text-xs text-text-muted">{selectedPro.qualification} • Staff ID: {selectedPro.employeeId || 'EMP-1001'}</p>
                <div className="mt-1 flex items-center gap-2">
                  <KYCStatusBadge status={selectedPro.kycStatus} />
                  <span className="text-[10px] font-extrabold uppercase bg-canvas-secondary border px-2 py-0.5 rounded">
                    {selectedPro.employmentType || 'Full Time Internal'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-canvas-secondary p-4 rounded-xl border border-border-default text-xs">
              <div className="flex justify-between">
                <span className="text-text-muted">Nursing License Registration:</span>
                <span className="font-mono font-bold text-brand-teal">{selectedPro.registrationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Base Hourly Pay:</span>
                <span className="font-bold text-text-primary">₹{selectedPro.hourlyRate}/hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Completed Care Visits:</span>
                <span className="font-bold text-text-primary">{selectedPro.totalVisits} shifts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Base Location:</span>
                <span className="font-medium text-text-primary">{selectedPro.location?.addressName || 'Indiranagar, Bangalore'}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-text-primary mb-2">Verified Documents & Licenses</h4>
              <div className="space-y-2">
                {selectedPro.documents.map((doc: ProfessionalDocument) => (
                  <div key={doc.id} className="p-3 bg-white border border-border-default rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-text-primary">{doc.type.toUpperCase()}</span>
                      <span className="block text-[10px] text-text-muted">Uploaded {doc.uploadedAt}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-bold">
                      {doc.verificationStatus.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-default flex gap-3">
              <Button
                onClick={() => {
                  toggleProStatus(selectedPro.id);
                  setSelectedPro(null);
                }}
                className="w-full bg-brand-teal hover:bg-brand-teal-hover text-white font-bold py-2.5 text-xs rounded-xl cursor-pointer"
              >
                Update Staff Duty Status
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
