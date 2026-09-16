import React, { useState } from 'react';
import { MOCK_PAYOUTS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import type { Payout } from '../../types';

export const AdminPayoutsPage: React.FC = () => {
  const [payouts, setPayouts] = useState<Payout[]>(MOCK_PAYOUTS);

  const processPayoutBatch = (id: string) => {
    setPayouts(payouts.map((p: Payout) => p.id === id ? { ...p, status: 'COMPLETED' as const } : p));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Healthcare Professional Payouts Ledger</h1>
          <p className="text-slate-600 text-xs mt-1">Batch disbursement of caregiver shift earnings to registered bank accounts via RazorpayX</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Payout ID</th>
                <th className="p-4">Professional</th>
                <th className="p-4">Payout Amount</th>
                <th className="p-4">Bank Account Details</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payouts.map((payout: Payout) => (
                <tr key={payout.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-900">{payout.id}</td>
                  <td className="p-4 font-bold text-slate-900">
                    <span className="block">{payout.professionalName}</span>
                    <span className="text-[10px] text-slate-400">{payout.professionalId}</span>
                  </td>
                  <td className="p-4 font-extrabold text-emerald-700">₹{payout.amount.toLocaleString()}</td>
                  <td className="p-4 space-y-0.5">
                    <span className="block font-semibold text-slate-800">{payout.bankName}</span>
                    <span className="block text-slate-500 text-[10px]">Acc: {payout.accountNumberMasked} • IFSC: {payout.ifscCode}</span>
                  </td>
                  <td className="p-4">
                    <Badge variant={payout.status === 'COMPLETED' ? 'teal' : 'warning'}>
                      {payout.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    {payout.status === 'ELIGIBLE' || payout.status === 'PROCESSING' ? (
                      <Button
                        size="sm"
                        onClick={() => processPayoutBatch(payout.id)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg cursor-pointer"
                      >
                        Approve & Transfer
                      </Button>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Disbursed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
