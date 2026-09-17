import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_B2B_ORGANIZATIONS } from '../../data/mockB2BData';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export const OrgProfilePage: React.FC = () => {
  const org = MOCK_B2B_ORGANIZATIONS[0];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Institutional Account Settings
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-0.5">Facility Profile</h1>
          <p className="text-xs text-slate-500 font-medium">Partner healthcare organization credentials & registration.</p>
        </div>

        <Badge variant="success" className="uppercase font-bold text-[10px]">
          Verified Partner Facility
        </Badge>
      </div>

      <Card className="p-6 bg-white border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">{org.name}</h2>
            <p className="text-xs text-slate-600 font-medium">Registration #: <strong className="font-mono text-slate-800">{org.registrationNumber}</strong></p>
            <p className="text-xs text-teal-700 font-bold mt-0.5">Contract Type: Monthly Retainer Deployment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <p className="text-slate-400 font-medium flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" /> Operational Email:
            </p>
            <p className="font-bold text-slate-900">{org.contactEmail}</p>
          </div>

          <div className="space-y-1">
            <p className="text-slate-400 font-medium flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-600" /> Operational Phone:
            </p>
            <p className="font-bold text-slate-900">{org.contactPhone}</p>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <p className="text-slate-400 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Facility Location:
            </p>
            <p className="font-bold text-slate-900">{org.address.line1}, {org.address.city}, {org.address.state} - {org.address.pincode}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
