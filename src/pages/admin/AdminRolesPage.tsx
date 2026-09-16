import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export const AdminRolesPage: React.FC = () => {
  const [roles] = useState([
    {
      id: 'R-01',
      name: 'Super Admin',
      usersCount: 2,
      permissions: ['All Permissions', 'Financial Refunds', 'System Settings', 'KYC Verification', 'Staff Control']
    },
    {
      id: 'R-02',
      name: 'Operations Manager',
      usersCount: 5,
      permissions: ['Booking Dispatch', 'Manual Assignment', 'Professional Directory', 'Support Desk']
    },
    {
      id: 'R-03',
      name: 'KYC Document Inspector',
      usersCount: 3,
      permissions: ['KYC Queue Inspection', 'Document Audit', 'Council License Lookup']
    },
    {
      id: 'R-04',
      name: 'Support Agent',
      usersCount: 8,
      permissions: ['Support Desk Tickets', 'Client Communications', 'View Bookings']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Roles & RBAC Access Matrix</h1>
          <p className="text-slate-600 text-xs mt-1">Role-Based Access Control (RBAC) definitions and administrative staff permission scopes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{role.name}</h3>
                  <p className="text-xs text-slate-500">{role.usersCount} Active Staff Members</p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-slate-400">{role.id}</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Granted Scope Permissions:</span>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((p, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-lg border border-slate-200">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
