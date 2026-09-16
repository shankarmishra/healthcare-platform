import React, { useState } from 'react';
import { Save, CheckCircle2, Sliders } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const AdminSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    dispatchTimeoutSeconds: 45,
    autoMatchingEnabled: true,
    platformGstin: '29ABCDE1234F1Z5',
    emergencyContactNumber: '+91 80000 99999',
    demoModeActive: true
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Platform System Settings</h1>
        <p className="text-slate-600 text-xs mt-1">Configure global platform operational rules, dispatch timers, GSTIN tax registration, and demo mode</p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Platform settings updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-teal-600" /> Operations Parameters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Job Broadcast Acceptance Timer (Seconds)</label>
            <input
              type="number"
              value={settings.dispatchTimeoutSeconds}
              onChange={(e) => setSettings({ ...settings, dispatchTimeoutSeconds: Number(e.target.value) })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 font-bold text-slate-900"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">Time pro has to accept broadcast before cascading to next pro.</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Platform Tax GSTIN Number</label>
            <input
              type="text"
              value={settings.platformGstin}
              onChange={(e) => setSettings({ ...settings, platformGstin: e.target.value })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 font-mono font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">24/7 Emergency Dispatch SOS Hotline</label>
            <input
              type="text"
              value={settings.emergencyContactNumber}
              onChange={(e) => setSettings({ ...settings, emergencyContactNumber: e.target.value })}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 font-bold text-slate-900"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-bold text-slate-900">Algorithmic Auto-Matching</span>
              <span className="text-[10px] text-slate-500">Auto-assign nearest qualified nurse</span>
            </div>
            <input
              type="checkbox"
              checked={settings.autoMatchingEnabled}
              onChange={(e) => setSettings({ ...settings, autoMatchingEnabled: e.target.checked })}
              className="w-4 h-4 text-teal-600 rounded"
            />
          </div>
        </div>

        <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer">
          <Save className="w-4 h-4" /> Save System Settings
        </Button>
      </form>
    </div>
  );
};
