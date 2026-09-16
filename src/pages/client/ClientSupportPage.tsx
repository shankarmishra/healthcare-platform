import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Plus, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { MOCK_SUPPORT_TICKETS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import type { SupportTicket, SupportMessage } from '../../types';

export const ClientSupportPage: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>(MOCK_SUPPORT_TICKETS);
  const [activeTab, setActiveTab] = useState<'faq' | 'tickets' | 'new'>('tickets');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newSubject, setNewSubject] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPriority, setNewPriority] = useState<'low' | 'medium' | 'high' | 'urgent'>('medium');
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const faqs = [
    {
      q: 'How does verification work for nurses and caregivers?',
      a: 'Every healthcare professional undergoes a mandatory 5-stage credential audit including State Nursing Council license verification, police background check, government ID audit, clinical reference validation, and COVID-19/infectious disease screening.'
    },
    {
      q: 'What if a professional is delayed or unable to visit?',
      a: 'If a professional is delayed beyond 15 minutes, our Automated Dispatch Command Center alerts operations staff and offers immediate priority re-assignment or full instant refund.'
    },
    {
      q: 'Can I request the same nurse for recurring home visits?',
      a: 'Yes! During Step 6 of the booking wizard, select "Preferred Nurse" to choose a caregiver who previously completed visits for your family.'
    },
    {
      q: 'How are cancellations and refunds calculated?',
      a: 'Cancellations made more than 2 hours before shift start are 100% refunded to original payment method. Cancellations within 2 hours incur a nominal ₹200 caregiver mobilization fee.'
    }
  ];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject || !newDescription) return;

    const newTicket: SupportTicket = {
      id: `TICK-00${tickets.length + 1}`,
      ticketNumber: `TICK-00${tickets.length + 1}`,
      creatorId: 'usr-clt-001',
      creatorName: 'Rahul Sharma',
      creatorRole: 'client',
      subject: newSubject,
      description: newDescription,
      category: 'clinical_concern',
      priority: newPriority,
      status: 'OPEN',
      messages: [
        {
          id: `M-01`,
          ticketId: `TICK-00${tickets.length + 1}`,
          senderId: 'usr-clt-001',
          senderName: 'Rahul Sharma',
          senderRole: 'client',
          message: newDescription,
          attachments: [],
          timestamp: new Date().toISOString()
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setTickets([newTicket, ...tickets]);
    setCreatedSuccess(true);
    setTimeout(() => {
      setCreatedSuccess(false);
      setNewSubject('');
      setNewDescription('');
      setActiveTab('tickets');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patient & Family Help Center</h1>
          <p className="text-slate-600 text-sm mt-1">24/7 Clinical Care Support, Billing Help & Safety Inquiries</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 space-x-6">
          <button
            onClick={() => setActiveTab('tickets')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'tickets' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> My Support Tickets ({tickets.length})
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'new' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Plus className="w-4 h-4" /> Create New Ticket
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'faq' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </button>
        </div>

        {/* Tab 1: Active Tickets */}
        {activeTab === 'tickets' && (
          <div className="space-y-4">
            {tickets.map((t: SupportTicket) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                      {t.id}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">{t.subject}</h3>
                  </div>
                  <Badge variant={t.status === 'OPEN' ? 'warning' : 'teal'}>
                    {t.status}
                  </Badge>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl space-y-3 border border-slate-100">
                  {t.messages.map((m: SupportMessage) => (
                    <div key={m.id} className="text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="font-semibold text-slate-800">{m.senderName} ({m.senderRole})</span>
                        <span>{m.timestamp}</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                        {m.message}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Category: {t.category.replace('_', ' ')} • Priority: <strong className="capitalize">{t.priority}</strong></span>
                  <span>Updated: {t.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Create Ticket */}
        {activeTab === 'new' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Open a Support Request</h2>
            
            {createdSuccess ? (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl flex items-center gap-3 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-semibold">Support ticket created successfully! Directing to ticket thread...</span>
              </div>
            ) : (
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject / Issue Title</label>
                  <input
                    type="text"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    placeholder="e.g. Question regarding nurse check-in time for tomorrow"
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                      <option value="clinical_concern">Care Quality & Nursing</option>
                      <option value="booking_issue">Booking & Scheduling</option>
                      <option value="payment_refund">Billing & Payment</option>
                      <option value="other">Account & Privacy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Urgency Level</label>
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value as any)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="low">Low (General Inquiry)</option>
                      <option value="medium">Medium (Upcoming Visit)</option>
                      <option value="high">High (Active Visit Issue)</option>
                      <option value="urgent">Urgent Clinical Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Description</label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows={4}
                    placeholder="Describe what happened or what assistance you need..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl cursor-pointer">
                  Submit Support Ticket
                </Button>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Healthcare Knowledge Base</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 bg-slate-50 font-semibold text-sm text-slate-900 flex justify-between items-center cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp className="w-4 h-4 text-teal-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
