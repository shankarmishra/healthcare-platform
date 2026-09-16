import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { ProfessionalCard } from '../../components/domain/ProfessionalCard';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import type { ProfessionalProfile } from '../../types';
import { MapPin, Search, ShieldCheck, Map as MapIcon, List } from 'lucide-react';
import { clsx } from 'clsx';

export const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { professionals } = useBookings();

  const [locationQuery, setLocationQuery] = useState('Indiranagar, Bangalore');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProId, setSelectedProId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'split' | 'list' | 'map'>('split');

  const filteredPros = professionals.filter((pro) => {
    if (!pro.isVerified) return false;
    return true;
  });

  const handleBookPro = (pro: ProfessionalProfile) => {
    navigate(`/client/booking/wizard?proId=${pro.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Search Header */}
      <div className="bg-white p-4 sm:p-6 rounded-card border border-border-default shadow-subtle space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <Input
              label="Location / Address"
              placeholder="e.g. Indiranagar, Bangalore"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              leftIcon={<MapPin className="w-4 h-4 text-brand-teal" />}
            />
          </div>

          <div className="w-full md:w-64">
            <label className="text-sm font-medium text-text-primary block mb-1.5">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-11 px-3 text-sm bg-white text-text-primary border border-border-default rounded-btn focus:outline-none focus:border-brand-teal"
            >
              <option value="all">All Healthcare Categories</option>
              <option value="home_nursing">Home Nursing</option>
              <option value="caregiver_attendant">Caregiver / Attendant</option>
              <option value="physiotherapy">Physiotherapy</option>
              <option value="doctor_visit">Doctor Home Visit</option>
              <option value="specialized_care">Specialized Care</option>
            </select>
          </div>

          <div className="w-full md:w-auto flex items-end pt-6">
            <Button variant="primary" className="w-full md:w-auto" leftIcon={<Search className="w-4 h-4" />}>
              Search
            </Button>
          </div>
        </div>

        {/* View Toggle Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-border-light text-xs">
          <span className="font-semibold text-text-secondary">
            Found <strong className="text-brand-teal">{filteredPros.length} Verified Professionals</strong> within 15km
          </span>

          <div className="flex items-center gap-1 bg-canvas-secondary p-1 rounded-lg border border-border-default">
            <button
              onClick={() => setViewMode('split')}
              className={clsx('px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer', viewMode === 'split' ? 'bg-white text-brand-teal shadow-xs' : 'text-text-muted')}
            >
              Split View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={clsx('px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer', viewMode === 'list' ? 'bg-white text-brand-teal shadow-xs' : 'text-text-muted')}
            >
              <List className="w-3.5 h-3.5 inline mr-1" /> List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={clsx('px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer', viewMode === 'map' ? 'bg-white text-brand-teal shadow-xs' : 'text-text-muted')}
            >
              <MapIcon className="w-3.5 h-3.5 inline mr-1" /> Map
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid / Map Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Results List */}
        <div className={clsx(viewMode === 'map' ? 'hidden' : viewMode === 'split' ? 'lg:col-span-7' : 'lg:col-span-12', 'space-y-4')}>
          {filteredPros.map((pro) => (
            <ProfessionalCard
              key={pro.id}
              professional={pro}
              selected={selectedProId === pro.id}
              onSelect={() => handleBookPro(pro)}
              onViewProfile={() => navigate(`/client/pro/${pro.id}`)}
            />
          ))}
        </div>

        {/* Interactive Abstract SVG Map Component */}
        <div className={clsx(viewMode === 'list' ? 'hidden' : viewMode === 'split' ? 'lg:col-span-5' : 'lg:col-span-12', 'sticky top-20')}>
          <Card padding="none" className="overflow-hidden border border-border-default shadow-card">
            <div className="bg-canvas-cool p-4 border-b border-border-default flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-teal" /> Service Area Map: {locationQuery}
              </span>
              <span className="text-[10px] bg-canvas-teal text-brand-teal px-2 py-0.5 rounded-full font-bold uppercase">
                Live Coverage
              </span>
            </div>

            {/* Custom SVG Abstract Healthcare Map */}
            <div className="relative w-full h-[520px] bg-slate-100 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full opacity-30 stroke-slate-300" width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Map Road Accents */}
              <svg className="absolute inset-0 w-full h-full stroke-teal-500/20 stroke-[3] fill-none">
                <path d="M 50 100 Q 200 150 400 300 T 700 500" />
                <path d="M 100 450 Q 300 300 600 150" />
              </svg>

              {/* User Center Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold ring-4 ring-brand-teal/20 animate-pulse shadow-card">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded-full mt-1 shadow-xs">
                  Your Location
                </span>
              </div>

              {/* Professional Location Pins */}
              {filteredPros.slice(0, 5).map((pro, index) => {
                const offsets = [
                  { top: '30%', left: '35%' },
                  { top: '25%', left: '68%' },
                  { top: '65%', left: '42%' },
                  { top: '70%', left: '75%' },
                  { top: '45%', left: '20%' }
                ];
                const pos = offsets[index % offsets.length];

                return (
                  <button
                    key={pro.id}
                    style={{ top: pos.top, left: pos.left }}
                    onClick={() => setSelectedProId(pro.id)}
                    className={clsx(
                      'absolute z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-110 cursor-pointer shadow-card border',
                      selectedProId === pro.id
                        ? 'bg-brand-teal text-white border-brand-teal ring-4 ring-brand-teal/30 scale-110'
                        : 'bg-white text-text-primary border-border-default hover:border-brand-teal'
                    )}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                    <span>₹{pro.hourlyRate}</span>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
