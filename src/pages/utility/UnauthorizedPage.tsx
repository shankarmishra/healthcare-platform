import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';

export const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-md w-full text-center space-y-4">
        <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">Access Restricted</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          You do not have the required role permissions to view this portal. Please use the Role Switcher bar at the top to select the matching role.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Button>
      </div>
    </div>
  );
};
