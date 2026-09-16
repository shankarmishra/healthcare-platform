import React, { useState } from 'react';
import { MOCK_SERVICES } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import type { Service } from '../../types';

export const AdminServicesPricingPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [platformCommission, setPlatformCommission] = useState(15);
  const [gstRate, setGstRate] = useState(18);

  const handleRateChange = (id: string, newRate: number) => {
    setServices(services.map((s: Service) => s.id === id ? { ...s, pricing: { ...s.pricing, basePrice: newRate } } : s));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Services Catalog & Pricing Manager</h1>
        <p className="text-slate-600 text-xs mt-1">Configure clinical service definitions, hourly base rates, platform commission slab, and GST tax rules</p>
      </div>

      {/* Financial Rules Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Platform Commission Fee (%)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={platformCommission}
              onChange={(e) => setPlatformCommission(Number(e.target.value))}
              className="w-32 text-xs p-2.5 rounded-xl border border-slate-200 font-bold text-slate-900"
            />
            <span className="text-xs text-slate-500 font-medium">% deducted per completed visit</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Government GST Tax Rate (%)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={gstRate}
              onChange={(e) => setGstRate(Number(e.target.value))}
              className="w-32 text-xs p-2.5 rounded-xl border border-slate-200 font-bold text-slate-900"
            />
            <span className="text-xs text-slate-500 font-medium">% added to patient checkout invoice</span>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Service Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Base Hourly Rate (₹)</th>
                <th className="p-4">Min Duration</th>
                <th className="p-4">Pro Qualification</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {services.map((service: Service) => (
                <tr key={service.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">
                    <span className="block">{service.name}</span>
                    <span className="text-[10px] text-slate-400">{service.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-teal-50 text-teal-800 rounded-md font-semibold text-[11px] border border-teal-200 uppercase">
                      {service.category.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900">₹</span>
                      <input
                        type="number"
                        value={service.pricing.basePrice}
                        onChange={(e) => handleRateChange(service.id, Number(e.target.value))}
                        className="w-20 p-1.5 rounded-lg border border-slate-200 text-xs font-extrabold text-teal-700"
                      />
                      <span className="text-slate-400 text-[11px]">/hr</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-slate-800">{service.pricing.minHours || 2} Hour(s)</td>
                  <td className="p-4 text-slate-700 font-medium">{service.requiredQualifications.join(', ')}</td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline" className="text-xs font-semibold cursor-pointer">
                      Save Rate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
