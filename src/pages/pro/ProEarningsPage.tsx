import React from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { MOCK_PAYOUTS } from '../../data/mockData';

export const ProEarningsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-left">
      <div>
        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Financial Ledger</span>
        <h1 className="text-3xl font-extrabold text-text-primary">Earnings & Bank Payouts</h1>
        <p className="text-xs text-text-muted mt-1">Transparent breakdown of completed visit earnings and weekly bank transfers.</p>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="p-6 space-y-2">
          <span className="text-xs font-semibold text-text-muted block">Total Earned to Date</span>
          <span className="text-3xl font-extrabold text-brand-teal">₹1,42,850</span>
          <span className="text-[11px] text-emerald-600 font-semibold block">142 Completed Care Visits</span>
        </Card>

        <Card className="p-6 space-y-2">
          <span className="text-xs font-semibold text-text-muted block">Pending Payout</span>
          <span className="text-3xl font-extrabold text-amber-600">₹11,200</span>
          <span className="text-[11px] text-text-muted block">Next batch: Friday 6:00 PM</span>
        </Card>

        <Card className="p-6 space-y-2">
          <span className="text-xs font-semibold text-text-muted block">Connected Bank</span>
          <span className="text-sm font-bold text-text-primary block">HDFC Bank</span>
          <span className="text-xs font-mono text-text-muted block">XXXX-XXXX-4819</span>
        </Card>
      </div>

      {/* Payout History List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary">Payout History</h3>
        <div className="space-y-3">
          {MOCK_PAYOUTS.map((payout) => (
            <Card key={payout.id} className="p-5 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-text-primary">{payout.payoutBatchId}</span>
                  <Badge variant={payout.status === 'COMPLETED' ? 'success' : 'warning'}>
                    {payout.status}
                  </Badge>
                </div>
                <p className="text-xs text-text-muted">
                  Bank: {payout.bankName} ({payout.accountNumberMasked}) • IFSC: {payout.ifscCode}
                </p>
              </div>

              <div className="text-right">
                <span className="text-lg font-extrabold text-brand-teal block">₹{payout.amount}</span>
                <span className="text-[11px] text-text-muted">
                  {payout.processedAt ? `Processed on ${new Date(payout.processedAt).toLocaleDateString()}` : 'In Processing'}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
