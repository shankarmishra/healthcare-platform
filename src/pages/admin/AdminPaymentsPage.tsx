import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MOCK_PAYMENTS } from '../../data/mockData';
import { PaymentStatusBadge } from '../../components/common/Badge';
import type { Payment } from '../../types';

export const AdminPaymentsPage: React.FC = () => {
  const [payments] = useState<Payment[]>(MOCK_PAYMENTS);
  const [search, setSearch] = useState('');

  const filtered = payments.filter((p: Payment) =>
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.bookingId.toLowerCase().includes(search.toLowerCase()) ||
    p.transactionId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Payment Transactions Ledger</h1>
        <p className="text-slate-600 text-xs mt-1">Audit patient payments, Razorpay transaction IDs, platform commissions, and refund logs</p>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Payment ID, Booking ID, Gateway Ref..."
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
                <th className="p-4">Payment ID</th>
                <th className="p-4">Booking Code</th>
                <th className="p-4">Method</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Gateway Ref</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((pay: Payment) => (
                <tr key={pay.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-900">{pay.id}</td>
                  <td className="p-4 font-mono font-semibold text-teal-800">{pay.bookingCode}</td>
                  <td className="p-4 uppercase font-semibold text-slate-700">{pay.paymentMethod}</td>
                  <td className="p-4 font-extrabold text-slate-900">₹{pay.amount}</td>
                  <td className="p-4 font-bold text-slate-800">{pay.clientName}</td>
                  <td className="p-4 font-mono text-[11px] text-slate-500">{pay.paymentProviderTransactionId || pay.transactionId}</td>
                  <td className="p-4">
                    <PaymentStatusBadge status={pay.status} />
                  </td>
                  <td className="p-4 text-right text-slate-400 text-[11px]">{pay.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
