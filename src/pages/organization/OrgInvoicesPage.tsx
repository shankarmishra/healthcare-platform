import React from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { Download } from 'lucide-react';

export const OrgInvoicesPage: React.FC = () => {
  const invoices = [
    {
      id: 'inv-b2b-01',
      invoiceNumber: 'INV-2026-B2B-0812',
      billingPeriod: '01-Aug-2026 to 31-Aug-2026',
      totalShifts: 90,
      subtotal: 288000,
      gstAmount: 51840,
      totalAmount: 339840,
      status: 'PAID',
      paidAt: '05-Sep-2026',
    },
    {
      id: 'inv-b2b-02',
      invoiceNumber: 'INV-2026-B2B-0914',
      billingPeriod: '01-Sep-2026 to 15-Sep-2026',
      totalShifts: 45,
      subtotal: 144000,
      gstAmount: 25920,
      totalAmount: 169920,
      status: 'DUE',
      dueDate: '25-Sep-2026',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            B2B Billing & Financial Ledger
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-0.5">Institutional Invoices</h1>
          <p className="text-xs text-slate-500">Monthly billing statements, GST breakups, and shift timesheet logs.</p>
        </div>
      </div>

      <div className="space-y-4">
        {invoices.map((inv) => (
          <Card key={inv.id} className="p-6 bg-white border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {inv.invoiceNumber}
                  </span>
                  <Badge variant={inv.status === 'PAID' ? 'success' : 'warning'}>
                    {inv.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 font-medium">Billing Cycle: {inv.billingPeriod}</p>
              </div>

              <div className="text-right text-xs">
                <p className="text-slate-400 font-medium">Total Amount (incl 18% GST)</p>
                <p className="text-lg font-extrabold text-slate-900">₹{inv.totalAmount.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block">Total Shifts Billed</span>
                <span className="font-bold text-slate-800">{inv.totalShifts} Shifts</span>
              </div>
              <div>
                <span className="text-slate-400 block">Subtotal</span>
                <span className="font-bold text-slate-800">₹{inv.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-slate-400 block">GST (18%)</span>
                <span className="font-bold text-slate-800">₹{inv.gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-end">
                <Button size="sm" variant="outline" leftIcon={<Download className="w-3.5 h-3.5" />} className="cursor-pointer text-xs font-bold">
                  Download Invoice PDF
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
