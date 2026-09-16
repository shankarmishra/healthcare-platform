import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import type { ServiceCategory, Service } from '../../types';
import { HeartPulse, UserCheck, Activity, Stethoscope, ShieldPlus, Search, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { services } = useBookings();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Care Needs', icon: <HeartPulse className="w-4 h-4" /> },
    { id: 'home_nursing', label: 'Clinical Nursing', icon: <Activity className="w-4 h-4" /> },
    { id: 'caregiver_attendant', label: 'Attendant & Daily Care', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'physiotherapy', label: 'Physical Therapy', icon: <Activity className="w-4 h-4" /> },
    { id: 'doctor_visit', label: 'Doctor Visit', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'specialized_care', label: 'Specialized ICU / Oncology', icon: <ShieldPlus className="w-4 h-4" /> }
  ];

  const filteredServices = services.filter((s: Service) => {
    const matchesCat = activeCategory === 'all' || s.category === activeCategory;
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left relative bg-white">
      <HealthcareTexture type="medical-grid" opacity={0.03} />

      {/* Hero Title Section */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-canvas-teal text-brand-teal px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-teal-200 uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-brand-teal" /> Care Operating System Services Catalog
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
          Healthcare Services Built Around Real Care Needs
        </h1>
        <p className="text-base text-text-secondary leading-relaxed font-medium">
          Choose from verified clinical nursing, bedridden attendant care, physical rehabilitation, doctor home visits, and specialized palliative/ICU care.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-canvas-secondary p-4 rounded-2xl border border-border-default space-y-4 shadow-subtle">
        <div className="relative w-full">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-text-muted" />
          <input
            type="text"
            placeholder="Search services by keyword e.g. wound dressing, elderly care, knee rehab, ICU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-4 text-sm font-semibold text-text-primary bg-white border border-border-default rounded-xl focus:outline-none focus:border-brand-teal"
          />
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border',
                  isActive
                    ? 'bg-brand-teal text-white border-brand-teal shadow-xs'
                    : 'bg-white text-text-secondary border-border-default hover:bg-canvas-tertiary'
                )}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid (Section 14 UI) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="p-0 border-border-default shadow-subtle overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="space-y-4 p-5">
              {/* Media Container */}
              <div className="aspect-video rounded-xl bg-canvas-teal flex items-center justify-center border border-teal-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-extrabold text-brand-teal border border-teal-200 uppercase">
                  {service.category.replace('_', ' ')}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-text-primary">{service.name}</h3>
                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">{service.shortDescription}</p>
              </div>

              {/* Ideal For Tags */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">Ideal For</span>
                <div className="flex flex-wrap gap-1">
                  {['Post-surgery', 'Elderly', 'Recovery'].map((tag) => (
                    <span key={tag} className="text-[10px] font-bold bg-canvas-secondary text-text-primary px-2 py-0.5 rounded border border-border-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Price & CTAs */}
            <div className="p-5 bg-canvas-secondary border-t border-border-default space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-text-muted block font-semibold">Starting From</span>
                  <span className="text-base font-extrabold text-brand-teal">₹{service.pricing.basePrice} <span className="text-xs font-normal text-text-muted">/ unit</span></span>
                </div>
                <span className="text-[10px] font-bold text-text-secondary flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-teal" /> Day · Night · 24h
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="w-full text-xs font-bold border-border-default bg-white cursor-pointer"
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigate(`/client/booking/wizard?serviceId=${service.id}`)}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full text-xs font-bold bg-brand-teal hover:bg-brand-teal-hover text-white cursor-pointer"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
