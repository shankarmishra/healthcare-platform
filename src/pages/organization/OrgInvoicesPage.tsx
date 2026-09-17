import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  Receipt,
  Download,
  Eye,
  Printer,
} from 'lucide-react';

export const OrgInvoicesPage: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);

  const invoices = [
    {
      id: 'inv-2026-081',
      invoiceNumber: 'INV-2026-8801',
      billingPeriod: '01 Aug 2026 – 31 Aug 2026',
      requestNumber: 'PNC-B2B-2026-041',
      contractType: 'Monthly Retainer (Fixed ICU Roster)',
      netAmount: 549153,
      gstTax: 98847, // 18% GST
      totalAmount: 648000,
      status: 'paid',
      dueDate: '10 Sep 2026',
      paidDate: '08 Sep 2026',
    },
    {
      id: 'inv-2026-091',
      invoiceNumber: 'INV-2026-8802',
      billingPeriod: '01 Sep 2026 – 15 Sep 2026',
      requestNumber: 'PNC-B2B-2026-041',
      contractType: 'Bi-Weekly Retainer Billing',
      netAmount: 274576,
      gstTax: 49424, // 18% GST
      totalAmount: 324000,
      status: 'issued',
      dueDate: '25 Sep 2026',
    },
  ];

  return (
    <div className="space-y-8 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <Receipt className="w-3.5 h-3.5" />
            Institutional Retainer Billing & GST Accounting
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Retainer Invoices & Ledger
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Itemized invoices, 18% GST tax breakdown, and contract billing records.
          </p>
        </div>

        <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/10 text-center">
          <p className="text-[10px] text-teal-300 font-bold uppercase">Current Billing Status</p>
          <p className="text-xl font-extrabold text-white">Account Clear</p>
        </div>
      </div>

      {/* INVOICES TABLE */}
      <Card className="p-0 border-slate-200 shadow-xs rounded-3xl overflow-hidden bg-white relative z-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Invoice No</th>
                <th className="p-4">Billing Period</th>
                <th className="p-4">Contract Ref</th>
                <th className="p-4 text-right">Net Amount</th>
                <th className="p-4 text-right">18% GST</th>
                <th className="p-4 text-right">Total Amount</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-blue-700">{inv.invoiceNumber}</td>
                  <td className="p-4 font-bold text-slate-900">{inv.billingPeriod}</td>
                  <td className="p-4">
                    <span className="font-mono text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {inv.requestNumber}
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold text-slate-700">
                    ₹{inv.netAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-right font-bold text-slate-600">
                    ₹{inv.gstTax.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-right font-black text-slate-900 text-sm">
                    ₹{inv.totalAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-center">
                    <Badge
                      variant={inv.status === 'paid' ? 'success' : 'warning'}
                      className="capitalize font-bold text-[10px]"
                    >
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedInvoice(inv)}
                        leftIcon={<Eye className="w-3.5 h-3.5" />}
                        className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold text-[11px] cursor-pointer"
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => alert(`Downloading PDF for ${inv.invoiceNumber}...`)}
                        leftIcon={<Download className="w-3.5 h-3.5" />}
                        className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold text-[11px] cursor-pointer"
                      >
                        PDF
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* INVOICE ITEMIZED BREAKDOWN MODAL */}
      {selectedInvoice && (
        <Modal
          isOpen={!!selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
          title={`Tax Invoice — ${selectedInvoice.invoiceNumber}`}
        >
          <div className="space-y-5 text-left text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold text-blue-700 uppercase">
                  GSTIN: 07AABCP9921D1ZB
                </span>
                <Badge variant={selectedInvoice.status === 'paid' ? 'success' : 'warning'} className="capitalize">
                  {selectedInvoice.status}
                </Badge>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 pt-1">
                Tax Invoice #{selectedInvoice.invoiceNumber}
              </h3>
              <p className="text-slate-600">Period: <strong>{selectedInvoice.billingPeriod}</strong></p>
              <p className="text-slate-600">Contract Ref: <strong>{selectedInvoice.requestNumber}</strong></p>
            </div>

            {/* Itemized Line Items */}
            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">Itemized Service Breakdown</h4>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                    <tr>
                      <th className="p-2.5">Description</th>
                      <th className="p-2.5 text-center">Qty / Shift Days</th>
                      <th className="p-2.5 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-2.5 font-bold text-slate-900">
                        ICU Registered Nurse Retainer Deployment (4 Day Staff)
                      </td>
                      <td className="p-2.5 text-center font-semibold">120 Shifts</td>
                      <td className="p-2.5 text-right font-bold">₹3,84,000</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-slate-900">
                        Physiotherapy Specialist Retainer Deployment (2 Day Staff)
                      </td>
                      <td className="p-2.5 text-center font-semibold">60 Shifts</td>
                      <td className="p-2.5 text-right font-bold">₹1,65,153</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GST Tax Calculation Breakup */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 text-slate-800">
              <div className="flex justify-between">
                <span>Net Subtotal:</span>
                <span className="font-bold">₹{selectedInvoice.netAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>CGST (9%):</span>
                <span>₹{(selectedInvoice.gstTax / 2).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>SGST (9%):</span>
                <span>₹{(selectedInvoice.gstTax / 2).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t border-blue-200 pt-2 font-black text-sm text-slate-900">
                <span>Total Amount Payable (Incl. 18% GST):</span>
                <span className="text-blue-700">₹{selectedInvoice.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button
                variant="outline"
                onClick={() => alert(`Printing Tax Invoice ${selectedInvoice.invoiceNumber}...`)}
                leftIcon={<Printer className="w-3.5 h-3.5" />}
                className="border-slate-300 text-slate-800 font-bold text-xs"
              >
                Print Invoice
              </Button>
              <Button
                variant="primary"
                onClick={() => setSelectedInvoice(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
              >
                Close Invoice View
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
