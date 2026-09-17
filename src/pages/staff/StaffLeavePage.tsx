import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import { Plus } from 'lucide-react';
import { MOCK_STAFF_LEAVES } from '../../data/mockStaffData';

export const StaffLeavePage: React.FC = () => {
  const [leaves, setLeaves] = useState(MOCK_STAFF_LEAVES);
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      setLeaves([
        {
          id: `leave-${Date.now()}`,
          staffId: 'staff-1',
          staffName: 'Anita Sharma',
          type: 'casual',
          startDate,
          endDate,
          reason,
          status: 'pending'
        },
        ...leaves
      ]);
      setShowForm(false);
      setReason('');
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
        <div>
          <Badge variant="teal" size="sm">Leave Management</Badge>
          <h1 className="text-xl font-black text-slate-900 mt-1">My Leave Requests</h1>
          <p className="text-xs text-slate-500">Submit time-off requests for Operations Desk review.</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-brand-teal text-white font-extrabold text-xs px-4 rounded-full">
          <Plus className="w-4 h-4 mr-1" /> {showForm ? 'Close Form' : 'Apply for Leave'}
        </Button>
      </div>

      {showForm && (
        <Card className="p-5 bg-white border-teal-200 shadow-md rounded-3xl">
          <form onSubmit={handleApply} className="space-y-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">New Leave Request</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="Start Date *" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
              <Input label="End Date *" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <Input label="Reason for Time Off *" placeholder="e.g. Family medical emergency" value={reason} onChange={e => setReason(e.target.value)} />
            <Button type="submit" className="bg-brand-teal text-white font-extrabold text-xs px-6 rounded-full">
              Submit Leave Request
            </Button>
          </form>
        </Card>
      )}

      <div className="space-y-3">
        {leaves.map((leave) => (
          <Card key={leave.id} className="p-4 bg-white border-slate-200 shadow-xs rounded-2xl flex items-center justify-between text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900">{leave.startDate} → {leave.endDate}</span>
                <Badge variant={leave.status === 'approved' ? 'success' : 'warning'} size="sm">
                  {leave.status.toUpperCase()}
                </Badge>
              </div>
              <p className="text-slate-500">{leave.reason}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
