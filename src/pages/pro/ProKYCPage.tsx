import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { KYCStatusBadge } from '../../components/common/Badge';
import { Upload, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ProKYCPage: React.FC = () => {
  const { currentUser } = useAuth();
  const { professionals } = useBookings();
  const pro = professionals.find((p) => p.userId === currentUser.id) || professionals[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-left">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Verification & Compliance</span>
          <h1 className="text-3xl font-extrabold text-text-primary">KYC Document Verification</h1>
        </div>
        <KYCStatusBadge status={pro.kycStatus} />
      </div>

      {pro.kycRejectionReason && (
        <Card className="p-4 bg-rose-50 border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <h4 className="font-bold">Verification Action Required</h4>
            <p>{pro.kycRejectionReason}</p>
          </div>
        </Card>
      )}

      {/* Uploaded Documents Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary">Required Clinical Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'State Nursing / Medical Council License', required: true, status: 'Verified', docNo: pro.registrationNumber },
            { title: 'Degree / Diploma Certificate', required: true, status: 'Verified', docNo: pro.qualification },
            { title: 'Aadhaar / Passport (Identity Proof)', required: true, status: 'Verified', docNo: 'XXXX-XXXX-8812' },
            { title: 'Police Clearance / Background Check', required: true, status: 'Verified', docNo: 'PCC-2025-9912' }
          ].map((doc, idx) => (
            <Card key={idx} className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-text-primary">{doc.title}</h4>
                  <span className="text-xs text-text-muted font-mono">{doc.docNo}</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {doc.status}
                </span>
              </div>

              <div className="pt-2 border-t border-border-light flex items-center justify-between text-xs">
                <span className="text-text-muted">Uploaded on Jan 10, 2025</span>
                <Button variant="ghost" size="sm" leftIcon={<Upload className="w-3.5 h-3.5" />}>
                  Re-upload
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
