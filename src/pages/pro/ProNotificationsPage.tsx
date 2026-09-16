import React from 'react';
import { Bell } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';
import type { Notification } from '../../types';

export const ProNotificationsPage: React.FC = () => {
  const proNotifs: Notification[] = MOCK_NOTIFICATIONS.filter((n: Notification) => n.userId === 'usr-pro-001' || n.userId === 'all');

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Professional Notifications</h1>
          <p className="text-slate-600 text-sm mt-1">Job dispatches, shift reminders, payout confirmations, and policy updates</p>
        </div>

        <div className="space-y-3">
          {proNotifs.map((n: Notification) => (
            <div key={n.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-50 text-teal-700 rounded-lg">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{n.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{n.body}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">{n.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
