import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Plus,
  Search,
  Star
} from 'lucide-react';
import { MOCK_STAFF_PROFILES, MOCK_STAFF_ACCOUNTS } from '../../data/mockStaffData';

export const AdminStaffPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const filteredStaff = MOCK_STAFF_PROFILES.filter(s => {
    const matchesSearch =
      s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.phone.includes(searchTerm);
    
    const matchesRole = selectedRole === 'all' || s.roleCategory === selectedRole;
    const matchesCity = selectedCity === 'all' || s.eligibleCities.includes(selectedCity);

    return matchesSearch && matchesRole && matchesCity;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="teal">Operations OS</Badge>
            <span className="text-xs text-slate-400 font-mono">Managed Workforce</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">In-House Staff Directory</h1>
          <p className="text-xs text-slate-500">Manage internal care team, credentials, coverage, schedules, and duty assignments.</p>
        </div>

        <Button
          onClick={() => navigate('/admin/staff/new')}
          className="bg-brand-teal hover:bg-brand-teal-hover text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5" /> Onboard New Staff
        </Button>
      </div>

      {/* Search & Filter Bar */}
      <Card className="p-4 bg-white border-slate-200 shadow-xs rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by staff name, Employee ID (PNC-EMP-XXXX), phone..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:outline-none"
            />
          </div>

          <div>
            <select
              value={selectedRole}
              onChange={e => setSelectedRole(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-brand-teal"
            >
              <option value="all">All Role Categories</option>
              <option value="registered_nurse">Registered Nurse (RN)</option>
              <option value="icu_nurse">ICU & Critical Care Nurse</option>
              <option value="physiotherapist">Physiotherapist (PT)</option>
              <option value="caregiver_attendant">Caregiver Attendant</option>
              <option value="general_physician">General Physician</option>
            </select>
          </div>

          <div>
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-brand-teal"
            >
              <option value="all">All Delhi NCR Cities</option>
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Faridabad">Faridabad</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Operations Dense Staff Table */}
      <Card className="bg-white border-slate-200 shadow-md rounded-3xl overflow-hidden relative">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Staff & ID</th>
                <th className="py-3.5 px-4">Role Category</th>
                <th className="py-3.5 px-4">Experience</th>
                <th className="py-3.5 px-4">Coverage Hubs</th>
                <th className="py-3.5 px-4">Rating & Visits</th>
                <th className="py-3.5 px-4">Account Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredStaff.map((staff) => {
                const acc = MOCK_STAFF_ACCOUNTS.find(a => a.staffId === staff.id);
                return (
                  <tr key={staff.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal font-extrabold shrink-0">
                          {staff.fullName.charAt(0)}
                        </div>
                        <div>
                          <p
                            onClick={() => navigate(`/admin/staff/${staff.id}`)}
                            className="font-extrabold text-slate-900 hover:text-brand-teal cursor-pointer"
                          >
                            {staff.fullName}
                          </p>
                          <p className="text-[11px] font-mono text-brand-teal font-bold">{staff.employeeId}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <Badge variant="teal" size="sm">{staff.roleCategory.replace('_', ' ').toUpperCase()}</Badge>
                      <p className="text-[11px] text-slate-500 mt-0.5">{staff.education[0]?.qualification || 'B.Sc Nursing'}</p>
                    </td>

                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {staff.totalExperienceYears} Years
                    </td>

                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-slate-800">{staff.eligibleCities.join(', ')}</p>
                      <p className="text-[10px] text-slate-400">{staff.eligiblePincodes.length} Pincode Zones</p>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 font-extrabold text-slate-900">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{staff.averageRating}</span>
                        <span className="text-[11px] text-slate-400 font-normal">({staff.completedDutyCount} duties)</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      {acc?.accountStatus === 'active' ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Active
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                          Pending Setup
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/admin/staff/${staff.id}`)}
                        className="font-bold text-[11px] px-3 py-1.5 rounded-full"
                      >
                        Manage Profile
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
