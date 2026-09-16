import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { ServiceCard } from '../../components/domain/ServiceCard';
import type { ServiceCategory } from '../../types';
import { HeartPulse, UserCheck, Activity, Stethoscope, ShieldPlus } from 'lucide-react';
import { clsx } from 'clsx';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { services } = useBookings();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Services', icon: <HeartPulse className="w-4 h-4" /> },
    { id: 'home_nursing', label: 'Home Nursing', icon: <Activity className="w-4 h-4" /> },
    { id: 'caregiver_attendant', label: 'Caregiver / Attendant', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'physiotherapy', label: 'Physiotherapy', icon: <Activity className="w-4 h-4" /> },
    { id: 'doctor_visit', label: 'Doctor Visit', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'specialized_care', label: 'Specialized Care', icon: <ShieldPlus className="w-4 h-4" /> }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-left space-y-3 max-w-3xl">
        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Services Catalog</span>
        <h1 className="text-4xl font-extrabold text-text-primary">Clinical & Home Care Services</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Select from our range of verified home nursing, caregiver attendant, physical therapy, general physician, and specialized ICU/oncology services.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer border',
                isActive
                  ? 'bg-brand-teal text-white border-brand-teal shadow-xs'
                  : 'bg-white text-text-secondary border-border-default hover:bg-canvas-secondary'
              )}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={(srv) => navigate(`/client/booking/wizard?serviceId=${srv.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
