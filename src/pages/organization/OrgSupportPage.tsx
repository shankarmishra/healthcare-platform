import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_B2B_SUPPORT_TICKETS } from '../../data/mockB2BData';
import type { B2BSupportTicket } from '../../types';
import {
  HelpCircle,
  PlusCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';

export const OrgSupportPage: React.FC = () => {
  const [tickets, setTickets] = useState<B2BSupportTicket[]>(MOCK_B2B_SUPPORT_TICKETS as any);
  const [isCreating, setIsCreating] = useState(false);
  const [category, setCategory] = useState<'staffing' | 'roster' | 'timesheet' | 'billing' | 'facility' | 'urgent_issue' | 'other'>('staffing');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [submittedMsg, setSubmittedMsg] = useState<string | null>(null);

  const handleCreateTicket = () => {
    if (!subject.trim() || !description.trim()) return;

    const newTicket: B2BSupportTicket = {
      id: `tkt-${Date.now()}`,
      ticketNumber: `TKT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      organizationId: 'org-max-saket',
      category: category,
      subject: subject,
      description: description,
      status: 'open',
      priority: category === 'urgent_issue' ? 'urgent' : 'medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTickets([newTicket, ...tickets]);
    setSubmittedMsg(`Support Ticket ${newTicket.ticketNumber} created! Operations will respond shortly.`);
    setTimeout(() => {
      setSubmittedMsg(null);
      setIsCreating(false);
      setSubject('');
      setDescription('');
    }, 2000);
  };

  return (
    <div className="space-y-8 text-left max-w-5xl mx-auto relative px-4 sm:px-6">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Institutional Operations Support Desk
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Pulse n Care Operations Desk
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            24×7 dedicated support for hospital superintendents, staffing escalation, and billing queries.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setIsCreating(!isCreating)}
          leftIcon={<PlusCircle className="w-4 h-4" />}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-2xl cursor-pointer shrink-0"
        >
          {isCreating ? 'View Tickets' : 'New Support Request'}
        </Button>
      </div>

      {submittedMsg && (
        <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-extrabold text-xs flex items-center gap-2 relative z-10">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{submittedMsg}</span>
        </div>
      )}

      {/* NEW TICKET CREATION WIZARD */}
      {isCreating && (
        <Card className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-6 relative z-10">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Create Operations Support Ticket</h3>
            <p className="text-xs text-slate-500">Transmitted directly to Pulse n Care Command Center</p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Issue Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-900 bg-white"
              >
                <option value="staffing">Staffing Requisition Query</option>
                <option value="roster">Roster / Shift Change Request</option>
                <option value="timesheet">Shift Timesheet Discrepancy</option>
                <option value="billing">Retainer Invoice / Tax Query</option>
                <option value="urgent_issue">Urgent Operational Emergency</option>
                <option value="facility">Facility Location Update</option>
                <option value="other">General Enquiry</option>
              </select>
            </div>

            <Input
              label="Ticket Subject *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Request for additional ICU ventilator nurse for Ward 4"
              required
            />

            <div>
              <label className="block font-bold text-slate-700 mb-1">Detailed Description *</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide complete context for Operations team..."
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium text-slate-900 bg-white"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={() => setIsCreating(false)}
              className="text-slate-700 font-bold text-xs"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleCreateTicket}
              leftIcon={<Send className="w-4 h-4" />}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Submit Ticket to Operations
            </Button>
          </div>
        </Card>
      )}

      {/* TICKETS LIST */}
      <div className="space-y-4 relative z-10">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          Active & Resolved Support Tickets
        </h3>

        <div className="space-y-3">
          {tickets.map((t) => (
            <Card key={t.id} className="p-5 bg-white border-slate-200 shadow-2xs rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {t.ticketNumber}
                  </span>
                  <Badge
                    variant={
                      t.status === 'resolved'
                        ? 'success'
                        : t.status === 'in_progress'
                        ? 'info'
                        : 'warning'
                    }
                    className="capitalize text-[10px] font-bold"
                  >
                    {t.status.replace(/_/g, ' ')}
                  </Badge>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Created: {new Date(t.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="space-y-1 text-xs">
                <h4 className="font-extrabold text-slate-900 text-sm">{t.subject}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{t.description}</p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium border-t border-slate-100">
                <span>Category: <strong className="text-slate-800 uppercase">{t.category}</strong></span>
                <span>Priority: <strong className="text-blue-700 uppercase">{t.priority}</strong></span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
