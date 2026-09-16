import React, { useState } from 'react';
import { Send, CheckCircle2, Megaphone } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const AdminNotificationsPage: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<'all' | 'clients' | 'pros'>('all');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setTitle('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Platform Broadcast & Notification Launcher</h1>
        <p className="text-slate-600 text-xs mt-1">Send system alerts, policy updates, or operational announcements to registered users</p>
      </div>

      {sentSuccess && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Broadcast alert dispatched to mobile apps & email queues successfully!
        </div>
      )}

      <form onSubmit={handleBroadcast} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-teal-600" /> New Broadcast Announcement
        </h2>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Target Audience Segment</label>
          <div className="flex gap-3">
            {[
              { id: 'all', label: 'All Users (Clients & Pros)' },
              { id: 'clients', label: 'Patients & Family Clients Only' },
              { id: 'pros', label: 'Healthcare Professionals Only' }
            ].map((aud) => (
              <button
                key={aud.id}
                type="button"
                onClick={() => setTargetAudience(aud.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  targetAudience === aud.id
                    ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {aud.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Announcement Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. System Maintenance Notice / Mandatory License Audit Reminder"
            className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Message Body</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Write clear, professional alert message..."
            className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer">
          <Send className="w-4 h-4" /> Dispatch Broadcast Notification
        </Button>
      </form>
    </div>
  );
};
