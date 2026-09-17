import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { Building2, ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

export const OrgLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { switchRole } = useAuth();
  const [email, setEmail] = useState('nursing.ops@maxhealthcare.in');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      switchRole('organization');
      setIsLoading(false);
      navigate('/organization/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 relative text-left">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      <div className="max-w-md w-full space-y-6 relative z-10">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">B2B Institutional Portal</h1>
          <p className="text-xs text-slate-500 font-medium">
            Pulse n Care Partner Hospital, Clinic & Institutional Care Login
          </p>
        </div>

        <Card className="p-8 bg-white border-slate-200 shadow-xl rounded-3xl space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Hospital / Institution Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hospital.com"
              leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
              required
            />

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                Remember facility session
              </label>
              <a href="#forgot" className="text-blue-600 font-bold hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm h-11 rounded-2xl shadow-sm cursor-pointer"
            >
              Sign In to Institutional Workspace
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 space-y-2">
            <p className="flex items-center justify-center gap-1.5 font-bold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Healthcare Partner Network
            </p>
            <p className="text-[11px]">
              Need to register your hospital or clinic for clinical shift staffing?{' '}
              <a href="/for-organizations" className="text-blue-600 font-bold underline">
                Enquire for B2B Contract
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
