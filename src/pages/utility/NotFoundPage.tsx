import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { HeartPulse, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-canvas-teal text-brand-teal flex items-center justify-center border border-teal-200 shadow-card">
        <HeartPulse className="w-10 h-10" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Error 404</span>
        <h1 className="text-3xl font-extrabold text-text-primary">Page Not Found</h1>
        <p className="text-sm text-text-muted leading-relaxed">
          The healthcare resource or page you are looking for does not exist or has been moved.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/">
          <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </Link>
        <Link to="/client/search">
          <Button variant="outline">
            Search Services
          </Button>
        </Link>
      </div>
    </div>
  );
};
