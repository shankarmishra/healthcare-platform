import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_STAFF_PROFILES } from '../../data/mockStaffData';

export const StaffSecurityPage: React.FC = () => {
  const staff = MOCK_STAFF_PROFILES[0];
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
      setNewPassword('');
      setCurrentPassword('');
    }
  };

  return (
    <div className="space-y-6 pb-8 max-w-xl mx-auto">
      <div className="border-b border-slate-200 pb-3">
        <Badge variant="teal" size="sm">Staff Account</Badge>
        <h1 className="text-xl font-black text-slate-900 mt-1">Account & Security</h1>
        <p className="text-xs text-slate-500">Manage login credentials and security settings.</p>
      </div>

      <Card className="p-6 bg-white border-slate-200 shadow-md rounded-3xl space-y-4">
        <HealthcareTexture type="micro-dot-mesh" opacity={0.02} />

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-500">Employee ID:</span>
            <span className="font-mono font-bold text-slate-900">{staff.employeeId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Login Email:</span>
            <span className="font-bold text-slate-900">{staff.email}</span>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Change Password</h3>
          <Input
            label="Current Password *"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
          <Input
            label="New Password *"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />

          <Button type="submit" className="w-full bg-brand-teal text-white font-extrabold text-xs h-11 rounded-full shadow-sm">
            {isSaved ? 'Password Updated!' : 'Update Password'}
          </Button>
        </form>
      </Card>
    </div>
  );
};
