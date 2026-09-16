import React, { useState } from 'react';
import { Bell, Clock, CheckCheck } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import type { Notification } from '../../types';

export const ClientNotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const clientNotifs = notifications.filter((n: Notification) => n.userId === 'usr-clt-001' || n.userId === 'all');
  const filtered = filter === 'unread' ? clientNotifs.filter((n: Notification) => !n.isRead) : clientNotifs;

  const markAllRead = () => {
    setNotifications(notifications.map((n: Notification) => ({ ...n, isRead: true })));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Notifications & Alerts</h1>
            <p className="text-slate-600 text-sm mt-1">Real-time shift tracking, visit reminders, and clinical updates</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={markAllRead}
            className="text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <CheckCheck className="w-4 h-4 text-teal-600" /> Mark All as Read
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            All Alerts ({clientNotifs.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              filter === 'unread' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            Unread ({clientNotifs.filter((n: Notification) => !n.isRead).length})
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((n: Notification) => (
              <div
                key={n.id}
                className={`p-4 rounded-xl border transition-all ${
                  n.isRead ? 'bg-white border-slate-200' : 'bg-teal-50/60 border-teal-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg mt-0.5 ${n.isRead ? 'bg-slate-100 text-slate-500' : 'bg-teal-100 text-teal-700'}`}>
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{n.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{n.body}</p>
                      <span className="text-[10px] text-slate-400 mt-2 block flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {n.createdAt}
                      </span>
                    </div>
                  </div>
                  {!n.isRead && (
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 mt-1" />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500 text-xs">No notifications found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
