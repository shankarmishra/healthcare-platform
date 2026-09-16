/**
 * Healthcare Staffing & Home Care Platform
 * Notification Context with Accessible Toast Live Region
 * Source of Truth: docs/17-Notification-System.md
 */

import React, { createContext, useContext, useState } from 'react';
import type { Notification } from '../types';
import { MOCK_NOTIFICATIONS } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

interface Toast {
  id: string;
  title: string;
  message: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => void;
  showToast: (title: string, message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const showToast = (title: string, message: string) => {
    const toastId = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id: toastId, title, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 4000);
  };

  const addNotification = (notif: Omit<Notification, 'id' | 'createdAt' | 'isRead'>) => {
    const newNotif: Notification = {
      ...notif,
      id: `notif-${Date.now()}`,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    setNotifications((prev) => [newNotif, ...prev]);
    showToast(notif.title, notif.body);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
        showToast
      }}
    >
      {children}

      {/* Accessible Toast Notification Live Region */}
      <div
        aria-live="polite"
        role="status"
        aria-atomic="true"
        className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-white border border-teal-200 text-slate-900 p-4 rounded-2xl shadow-lg flex items-start gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 pointer-events-auto"
          >
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-left space-y-0.5">
              <h4 className="text-xs font-extrabold text-slate-900">{toast.title}</h4>
              <p className="text-[11px] text-slate-600 leading-tight">{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
