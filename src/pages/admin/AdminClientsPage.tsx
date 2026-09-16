import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MOCK_CLIENTS } from '../../data/mockData';
import { Badge } from '../../components/common/Badge';
import type { ClientProfile } from '../../types';

export const AdminClientsPage: React.FC = () => {
  const [clients] = useState<ClientProfile[]>(MOCK_CLIENTS);
  const [search, setSearch] = useState('');

  const filtered = clients.filter((c: ClientProfile) =>
    c.id.toLowerCase().includes(search.toLowerCase()) ||
    c.userId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patient & Client Directory</h1>
        <p className="text-slate-600 text-xs mt-1">Manage registered patient accounts, total bookings volume, and lifetime spend</p>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by client ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Client ID</th>
                <th className="p-4">User Account ID</th>
                <th className="p-4">Total Bookings</th>
                <th className="p-4">Saved Patients</th>
                <th className="p-4">Account Status</th>
                <th className="p-4 text-right">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((client: ClientProfile) => (
                <tr key={client.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-mono">{client.id}</td>
                  <td className="p-4 font-mono font-semibold text-teal-800">{client.userId}</td>
                  <td className="p-4 font-bold text-slate-900">{client.bookingCount} visits</td>
                  <td className="p-4 font-semibold text-slate-700">{client.patients.length} Registered</td>
                  <td className="p-4">
                    <Badge variant="teal">ACTIVE</Badge>
                  </td>
                  <td className="p-4 text-right text-slate-400 text-[11px]">{client.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
