import React, { useState } from 'react';
import type { ProfessionalProfile } from '../../types';
import { Drawer } from '../common/Drawer';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { FileText, CheckCircle2, XCircle } from 'lucide-react';
import { useBookings } from '../../context/BookingContext';

export interface KYCDocumentInspectorProps {
  professional: ProfessionalProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

export const KYCDocumentInspector: React.FC<KYCDocumentInspectorProps> = ({
  professional,
  isOpen,
  onClose
}) => {
  const { updateKYCStatus } = useBookings();
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectInput, setShowRejectInput] = useState(false);

  if (!professional) return null;

  const handleApprove = () => {
    updateKYCStatus(professional.id, 'approved');
    onClose();
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) return;
    updateKYCStatus(professional.id, 'reupload_required', rejectionReason);
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="KYC Verification Inspector"
      subtitle={`Reviewing credentials for ${professional.displayName}`}
      footer={
        <div className="w-full flex items-center justify-between gap-3">
          {!showRejectInput ? (
            <>
              <Button
                variant="danger"
                size="sm"
                leftIcon={<XCircle className="w-4 h-4" />}
                onClick={() => setShowRejectInput(true)}
              >
                Reject / Require Re-upload
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftIcon={<CheckCircle2 className="w-4 h-4" />}
                onClick={handleApprove}
              >
                Approve & Verify Professional
              </Button>
            </>
          ) : (
            <div className="w-full space-y-3">
              <Input
                label="Reason for Rejection / Re-upload"
                placeholder="e.g. Scanned degree certificate is blurry..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => setShowRejectInput(false)}>
                  Cancel
                </Button>
                <Button variant="danger" size="sm" onClick={handleReject}>
                  Confirm Rejection
                </Button>
              </div>
            </div>
          )}
        </div>
      }
    >
      <div className="space-y-6">
        {/* Professional Overview */}
        <div className="flex items-center gap-4 p-4 bg-canvas-secondary rounded-card border border-border-default">
          <img
            src={professional.profilePhoto}
            alt={professional.displayName}
            className="w-16 h-16 rounded-2xl object-cover border border-border-default"
          />
          <div>
            <h4 className="font-bold text-base text-text-primary">{professional.displayName}</h4>
            <p className="text-xs text-text-muted">{professional.qualification}</p>
            <p className="text-xs font-semibold text-brand-teal mt-1">Reg: {professional.registrationNumber}</p>
          </div>
        </div>

        {/* Submitted Documents List */}
        <div>
          <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-teal" /> Submitted Documents ({professional.documents.length})
          </h4>
          {professional.documents.length === 0 ? (
            <div className="p-6 text-center text-xs text-text-muted bg-canvas-secondary rounded-card border border-border-default">
              No documents uploaded yet.
            </div>
          ) : (
            <div className="space-y-3">
              {professional.documents.map((doc) => (
                <div key={doc.id} className="p-4 border border-border-default rounded-card bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-text-primary uppercase block">
                        {doc.type.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xs text-text-muted font-mono">{doc.documentNumber}</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {doc.verificationStatus}
                    </span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-border-light bg-slate-100 h-36 flex items-center justify-center">
                    <img src={doc.fileUrl} alt={doc.fileName} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};
