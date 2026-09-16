import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { KYCStatusBadge } from '../../components/common/Badge';
import { KYCDocumentInspector } from '../../components/domain/KYCDocumentInspector';
import type { ProfessionalProfile } from '../../types';
import { Eye } from 'lucide-react';

export const AdminKYCQueuePage: React.FC = () => {
  const { professionals } = useBookings();
  const [selectedPro, setSelectedPro] = useState<ProfessionalProfile | null>(null);
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const filteredPros = professionals.filter((pro) => {
    if (filter === 'pending') return pro.kycStatus === 'under_review' || pro.kycStatus === 'reupload_required' || pro.kycStatus === 'submitted';
    if (filter === 'approved') return pro.kycStatus === 'approved';
    if (filter === 'rejected') return pro.kycStatus === 'rejected';
    return true;
  });

  const handleInspect = (pro: ProfessionalProfile) => {
    setSelectedPro(pro);
    setInspectorOpen(true);
  };

  return (
    <div className="space-y-6 text-left max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Compliance Governance</span>
          <h1 className="text-3xl font-extrabold text-text-primary">KYC Verification Queue</h1>
        </div>
        <div className="flex items-center gap-2">
          {['all', 'pending', 'approved', 'rejected'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize cursor-pointer border ${
                filter === f ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white text-text-secondary border-border-default'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-canvas-secondary uppercase text-[10px] font-extrabold text-text-muted border-b border-border-default">
              <tr>
                <th className="p-4">Professional</th>
                <th className="p-4">Qualification / License</th>
                <th className="p-4">Experience</th>
                <th className="p-4">Uploaded Docs</th>
                <th className="p-4">KYC Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {filteredPros.map((pro) => (
                <tr key={pro.id} className="hover:bg-canvas-secondary/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={pro.profilePhoto} alt={pro.displayName} className="w-9 h-9 rounded-full object-cover border" />
                      <div>
                        <span className="font-bold text-text-primary block text-sm">{pro.displayName}</span>
                        <span className="text-text-muted">{pro.location.addressName}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    <span className="text-text-primary block font-semibold">{pro.qualification}</span>
                    <span className="text-text-muted font-mono">{pro.registrationNumber}</span>
                  </td>
                  <td className="p-4 font-semibold text-text-primary">{pro.experienceYears} Years</td>
                  <td className="p-4 font-bold text-brand-teal">{pro.documents.length} File(s)</td>
                  <td className="p-4"><KYCStatusBadge status={pro.kycStatus} /></td>
                  <td className="p-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<Eye className="w-3.5 h-3.5" />}
                      onClick={() => handleInspect(pro)}
                    >
                      Inspect Credentials
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Side Inspector Drawer */}
      <KYCDocumentInspector
        professional={selectedPro}
        isOpen={inspectorOpen}
        onClose={() => setInspectorOpen(false)}
      />
    </div>
  );
};
