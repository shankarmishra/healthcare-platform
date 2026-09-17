import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { MOCK_B2B_REQUESTS } from '../../data/mockB2BData';
import { Plus } from 'lucide-react';

export const OrgRequestsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState<string>('all');

  const filteredRequests = activeStatus === 'all'
    ? MOCK_B2B_REQUESTS
    : MOCK_B2B_REQUESTS.filter((r) => r.status === activeStatus);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 text-left relative">
      <HealthcareTexture type="soft-cell" opacity={0.03} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Hospital Requisitions Desk
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-0.5">Staffing Requisitions</h1>
          <p className="text-xs text-slate-500">Track fulfillment status for all institutional care deployments.</p>
        </div>

        <Button
          onClick={() => navigate('/organization/requests/new')}
          leftIcon={<Plus className="w-4 h-4" />}
          className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md cursor-pointer self-start sm:self-auto"
        >
          New Staffing Request
        </Button>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        {[
          { id: 'all', label: 'All Requests' },
          { id: 'submitted', label: 'Submitted' },
          { id: 'partially_fulfilled', label: 'Partially Fulfilled' },
          { id: 'fulfilled', label: 'Fulfilled' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveStatus(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border transition-all ${
              activeStatus === tab.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((req) => (
          <Card key={req.id} className="p-6 bg-white border-slate-200 hover:border-blue-300 transition-all shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {req.requestNumber}
                  </span>
                  <Badge variant={req.status === 'fulfilled' ? 'success' : 'warning'} className="capitalize font-bold text-[10px]">
                    {req.status.replace(/_/g, ' ')}
                  </Badge>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{req.organizationName}</h3>
                <p className="text-xs text-slate-600">
                  Dept: <strong className="text-slate-800">{req.facilityLocation.department}</strong> • Contact:{' '}
                  <strong>{req.contactPerson.name}</strong>
                </p>
              </div>

              <div className="text-right text-xs">
                <p className="text-slate-400 font-medium">Deployment Contract</p>
                <p className="font-extrabold text-slate-900 text-sm">₹{req.estimatedContractValue.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-700">Requirement Lines:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {req.requirements.map((line) => (
                  <div key={line.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-900">{line.roleCategoryTitle}</p>
                      <p className="text-slate-500">Shift: {line.shiftType.replace('_', ' ')} • Rate: ₹{line.agreedDailyRate}/day</p>
                    </div>
                    <span className="font-extrabold text-teal-700 bg-white px-2.5 py-1 rounded border border-slate-200">
                      {line.assignedCount} / {line.requiredCount} Assigned
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
