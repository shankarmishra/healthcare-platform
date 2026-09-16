import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { MOCK_SUPPORT_TICKETS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import type { SupportTicket, SupportMessage } from '../../types';

export const AdminSupportDeskPage: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>(MOCK_SUPPORT_TICKETS);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket>(tickets[0]);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText || !selectedTicket) return;

    const newMessage: SupportMessage = {
      id: `M-${Date.now()}`,
      ticketId: selectedTicket.id,
      senderId: 'usr-adm-001',
      senderName: 'Admin Operations',
      senderRole: 'admin',
      message: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedTickets = tickets.map((t: SupportTicket) => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          messages: [...t.messages, newMessage],
          status: 'IN_PROGRESS' as const
        };
      }
      return t;
    });

    setTickets(updatedTickets);
    setSelectedTicket({
      ...selectedTicket,
      messages: [...selectedTicket.messages, newMessage],
      status: 'IN_PROGRESS'
    });
    setReplyText('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Operations Support Command Desk</h1>
        <p className="text-slate-600 text-xs mt-1">Multi-ticket triage for patient inquiries, nurse dispatch escalations, and payment issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900">Support Ticket Queue</h2>
          <div className="space-y-3">
            {tickets.map((t: SupportTicket) => (
              <div
                key={t.id}
                onClick={() => setSelectedTicket(t)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedTicket?.id === t.id
                    ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold text-teal-800">{t.id}</span>
                  <Badge variant={t.status === 'OPEN' ? 'warning' : 'teal'}>
                    {t.status}
                  </Badge>
                </div>
                <h3 className="font-bold text-slate-900 text-xs mt-2">{t.subject}</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">{t.creatorName} ({t.creatorRole})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Conversation */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          {selectedTicket ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {selectedTicket.id}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-1">{selectedTicket.subject}</h2>
                  <p className="text-xs text-slate-500">Submitted by: {selectedTicket.creatorName} ({selectedTicket.creatorRole}) • Priority: <strong className="capitalize text-slate-800">{selectedTicket.priority}</strong></p>
                </div>
              </div>

              {/* Messages Thread */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {selectedTicket.messages.map((m: SupportMessage) => (
                  <div
                    key={m.id}
                    className={`p-4 rounded-xl text-xs space-y-1 ${
                      m.senderRole === 'admin'
                        ? 'bg-teal-50 border border-teal-200 text-teal-900 ml-6'
                        : 'bg-slate-50 border border-slate-200 text-slate-800 mr-6'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold mb-1">
                      <span>{m.senderName} ({m.senderRole.toUpperCase()})</span>
                      <span>{m.timestamp}</span>
                    </div>
                    <p className="leading-relaxed">{m.message}</p>
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              <form onSubmit={handleSendReply} className="space-y-3 border-t border-slate-100 pt-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={3}
                  placeholder="Type official response to patient/professional..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <div className="flex justify-end">
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer">
                    <Send className="w-3.5 h-3.5" /> Send Response
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 text-xs">
              Select a ticket from queue to open conversation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
