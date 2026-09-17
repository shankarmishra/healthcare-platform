import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const StaffFirstLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('PNC-EMP-0044');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/staff/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <HealthcareTexture type="micro-dot-mesh" opacity={0.04} />

      <Card className="w-full max-w-md bg-white border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-8 space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <Badge variant="teal" size="md">First Login Password Configuration</Badge>
          <h1 className="text-xl font-black text-slate-900 mt-2">Welcome to Pulse n Care</h1>
          <p className="text-xs text-slate-500">For security, configure your permanent password before accessing operational duties.</p>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <p className="font-extrabold text-slate-900 text-sm">Password Configured Successfully!</p>
            <p className="text-xs text-slate-500">Redirecting to your duty portal...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Assigned Employee ID *"
              value={employeeId}
              onChange={e => setEmployeeId(e.target.value)}
              className="font-mono font-bold"
            />

            <Input
              label="Create New Password *"
              type="password"
              placeholder="Minimum 8 characters"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />

            <Input
              label="Confirm New Password *"
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">Password Requirements:</p>
              <p className="flex items-center gap-1">✓ Minimum 8 characters</p>
              <p className="flex items-center gap-1">✓ Include numbers & special characters</p>
            </div>

            <Button
              type="submit"
              disabled={!newPassword || newPassword !== confirmPassword}
              className="w-full bg-brand-teal hover:bg-brand-teal-hover text-white font-black text-sm h-11 rounded-full shadow-md mt-2"
            >
              Set Password & Access Portal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};
