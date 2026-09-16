import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: UserRole;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'client'
}) => {
  const { switchRole } = useAuth();
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [phone, setPhone] = useState('9876543210');
  const [otp, setOtp] = useState(['5', '8', '2', '9', '1', '4']);
  const [selectedRole, setSelectedRole] = useState<UserRole>(defaultRole);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    switchRole(selectedRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure Authentication
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-2">
              {step === 'input' ? 'Sign In / Register' : 'Enter 6-Digit Verification Code'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {step === 'input' ? 'Select your role and enter mobile number' : `OTP sent via SMS to +91 ${phone}`}
            </p>
          </div>

          {step === 'input' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Sign In As</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'client', label: 'Patient / Family' },
                    { id: 'pro', label: 'Nurse / Carer' },
                    { id: 'admin', label: 'Admin Ops' }
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRole(r.id as UserRole)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedRole === r.id
                          ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full text-xs pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 font-semibold"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                Send OTP Verification <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="flex justify-between gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const copy = [...otp];
                      copy[idx] = e.target.value;
                      setOtp(copy);
                    }}
                    className="w-12 h-12 text-center text-lg font-bold text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
                  />
                ))}
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl cursor-pointer">
                Verify & Continue
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
