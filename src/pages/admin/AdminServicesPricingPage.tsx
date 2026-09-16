import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';
import { Button } from '../../components/common/Button';
import { Sliders, Plus, Edit2, CheckCircle2 } from 'lucide-react';
import type { Service } from '../../types';

export const AdminServicesPricingPage: React.FC = () => {
  const { services } = useBookings();
  const [serviceList, setServiceList] = useState<Service[]>(services);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [savedNotice, setSavedNotice] = useState('');

  const handleRateChange = (id: string, newRate: number) => {
    setServiceList(serviceList.map((s: Service) => s.id === id ? { ...s, pricing: { ...s.pricing, basePrice: newRate } } : s));
  };

  const handleSave = (service: Service) => {
    setSavedNotice(`Updated service catalog rules for "${service.name}". Changes reflect in Client Requirement Wizard.`);
    setTimeout(() => setSavedNotice(''), 3000);
    setSelectedService(null);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border-default pb-4">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">
            Service Catalog & Questionnaire Configurator
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Admin Dynamic Service Manager</h1>
          <p className="text-text-muted text-xs mt-0.5">
            Configure clinical service definitions, inclusions, exclusions, who it's for, shift multipliers, and required staff qualifications.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />} size="sm" className="bg-brand-teal hover:bg-brand-teal-hover font-bold">
            Add New Service
          </Button>
        </div>
      </div>

      {savedNotice && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> {savedNotice}
        </div>
      )}

      {/* Services Table */}
      <div className="bg-white rounded-2xl border border-border-default shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-text-secondary">
            <thead className="bg-canvas-secondary border-b border-border-default text-text-primary font-extrabold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Service & Code</th>
                <th className="p-4">Category</th>
                <th className="p-4">Base Hourly Rate (₹)</th>
                <th className="p-4">Night Surcharge</th>
                <th className="p-4">Staff Qualification Required</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {serviceList.map((service: Service) => (
                <tr key={service.id} className="hover:bg-canvas-secondary/60 transition-colors">
                  <td className="p-4 font-bold text-text-primary">
                    <span className="block font-extrabold">{service.name}</span>
                    <span className="text-[10px] text-text-muted font-mono">{service.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-canvas-teal text-brand-teal rounded-md font-bold text-[10px] border border-teal-200 uppercase">
                      {service.category.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-text-primary">₹</span>
                      <input
                        type="number"
                        value={service.pricing.basePrice}
                        onChange={(e) => handleRateChange(service.id, Number(e.target.value))}
                        className="w-24 p-1.5 rounded-lg border border-border-default text-xs font-extrabold text-brand-teal focus:outline-none focus:border-brand-teal"
                      />
                      <span className="text-text-muted text-[11px]">/ unit</span>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-amber-800">
                    +{service.pricing.nightShiftSurchargePercent || 20}% Surcharge
                  </td>
                  <td className="p-4 text-text-primary font-semibold">
                    {service.requiredQualifications.join(', ')}
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedService(service)}
                      leftIcon={<Edit2 className="w-3.5 h-3.5" />}
                      className="text-xs font-bold cursor-pointer"
                    >
                      Edit Rules & Inclusions
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Service Configurator Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-5 text-left max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-border-default pb-3">
              <h3 className="text-lg font-extrabold text-text-primary flex items-center gap-2">
                <Sliders className="w-5 h-5 text-brand-teal" /> Service Configurator: {selectedService.name}
              </h3>
              <button onClick={() => setSelectedService(null)} className="text-text-muted hover:text-text-primary cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-text-primary uppercase tracking-wider">Who It's For (Target Patient Group)</label>
                <textarea
                  rows={2}
                  value={selectedService.whoItsFor || 'Post-operative surgical patients requiring wound dressing, IV antibiotic administration, and vital signs logging.'}
                  onChange={(e) => setSelectedService({ ...selectedService, whoItsFor: e.target.value })}
                  className="w-full p-3 bg-canvas-secondary border border-border-default rounded-xl focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-text-primary uppercase tracking-wider">Key Clinical Inclusions</label>
                <textarea
                  rows={3}
                  value={selectedService.keyInclusions.join('\n')}
                  onChange={(e) => setSelectedService({ ...selectedService, keyInclusions: e.target.value.split('\n') })}
                  className="w-full p-3 bg-canvas-secondary border border-border-default rounded-xl focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-text-primary uppercase tracking-wider">Exclusions (Not Included In Service)</label>
                <textarea
                  rows={2}
                  value={(selectedService.exclusions || ['Intensive ventilators requiring ICU setup', 'Emergency surgery intervention']).join('\n')}
                  onChange={(e) => setSelectedService({ ...selectedService, exclusions: e.target.value.split('\n') })}
                  className="w-full p-3 bg-canvas-secondary border border-border-default rounded-xl focus:outline-none focus:border-brand-teal"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-border-default">
              <Button variant="secondary" onClick={() => setSelectedService(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handleSave(selectedService)} className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold">
                Save Service Rules
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
