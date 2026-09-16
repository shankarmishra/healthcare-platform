import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { MOCK_ORGANIZATIONS } from '../../data/mockData';
import { Badge } from '../../components/common/Badge';
import type { Organization } from '../../types';

export const AdminOrganizationsPage: React.FC = () => {
  const [orgs] = useState<Organization[]>(MOCK_ORGANIZATIONS);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hospital & Healthcare Facility Accounts</h1>
          <p className="text-slate-600 text-xs mt-1">Enterprise B2B staffing contracts, ICU shift allocations, and active staffing requisitions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orgs.map((org: Organization) => (
          <div key={org.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <Building2 className="w-6 h-6" />
              </div>
              <Badge variant="teal">ACTIVE CONTRACT</Badge>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg">{org.name}</h3>
              <p className="text-xs text-slate-500 capitalize">{org.type.replace('_', ' ')} • ID: {org.id}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-600 border border-slate-100">
              <div className="flex justify-between">
                <span>Registration #:</span>
                <span className="font-bold text-slate-800">{org.registrationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Email:</span>
                <span className="font-medium text-slate-800">{org.contactEmail}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Phone:</span>
                <span className="font-mono text-slate-800">{org.contactPhone}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-3">
              <span className="text-slate-500">Active Staffing Requisitions:</span>
              <span className="font-bold text-blue-700">{org.openStaffingRequestsCount} Open Shift(s)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
