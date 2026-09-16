import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CalendarCheck, Users, Building2, Sliders, X, ArrowRight } from 'lucide-react';
import { useBookings } from '../../context/BookingContext';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { bookings, professionals, services } = useBookings();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBookings = bookings.filter(
    (b) =>
      b.bookingCode.toLowerCase().includes(query.toLowerCase()) ||
      b.clientName.toLowerCase().includes(query.toLowerCase()) ||
      b.serviceName.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  const filteredPros = professionals.filter(
    (p) =>
      p.displayName.toLowerCase().includes(query.toLowerCase()) ||
      p.qualification.toLowerCase().includes(query.toLowerCase()) ||
      (p.employeeId && p.employeeId.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 3);

  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-border-default overflow-hidden text-left space-y-0">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-border-default flex items-center gap-3 bg-canvas-secondary">
          <Search className="w-5 h-5 text-brand-teal shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search bookings (BKG-2026), staff (EMP-1001), services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-semibold text-text-primary bg-transparent focus:outline-none placeholder:text-text-muted"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-canvas-tertiary text-xs font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[420px] overflow-y-auto space-y-4 text-xs">
          {/* Quick Navigation Links */}
          {!query && (
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest block">
                Quick Shortcuts
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/admin/matching')}
                  className="p-3 bg-canvas-secondary hover:bg-canvas-teal rounded-xl border border-border-default flex items-center justify-between text-text-primary font-bold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-brand-teal" /> Dispatch Console
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </button>
                <button
                  onClick={() => handleSelect('/admin/professionals')}
                  className="p-3 bg-canvas-secondary hover:bg-canvas-teal rounded-xl border border-border-default flex items-center justify-between text-text-primary font-bold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-teal" /> Staff Directory
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </button>
                <button
                  onClick={() => handleSelect('/admin/services')}
                  className="p-3 bg-canvas-secondary hover:bg-canvas-teal rounded-xl border border-border-default flex items-center justify-between text-text-primary font-bold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-brand-teal" /> Service Manager
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </button>
                <button
                  onClick={() => handleSelect('/organizations')}
                  className="p-3 bg-canvas-secondary hover:bg-canvas-teal rounded-xl border border-border-default flex items-center justify-between text-text-primary font-bold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-teal" /> B2B Organizations
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </button>
              </div>
            </div>
          )}

          {/* Bookings Match */}
          {filteredBookings.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest block">
                Bookings ({filteredBookings.length})
              </span>
              <div className="space-y-1.5">
                {filteredBookings.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => handleSelect(`/client/bookings/${b.id}`)}
                    className="p-3 bg-white hover:bg-canvas-secondary rounded-xl border border-border-default cursor-pointer flex items-center justify-between transition-all"
                  >
                    <div>
                      <span className="font-mono font-bold text-brand-teal block">{b.bookingCode}</span>
                      <span className="text-text-primary font-bold">{b.serviceName} • {b.clientName}</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-canvas-teal px-2 py-0.5 rounded text-brand-teal">
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Staff Match */}
          {filteredPros.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest block">
                Staff Members ({filteredPros.length})
              </span>
              <div className="space-y-1.5">
                {filteredPros.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelect('/admin/professionals')}
                    className="p-3 bg-white hover:bg-canvas-secondary rounded-xl border border-border-default cursor-pointer flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <img src={p.profilePhoto} alt="" className="w-7 h-7 rounded-lg object-cover" />
                      <div>
                        <span className="font-extrabold text-text-primary block">{p.displayName}</span>
                        <span className="text-[10px] text-text-muted">{p.qualification} • {p.employeeId || 'EMP-1001'}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ON DUTY
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Match */}
          {filteredServices.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest block">
                Services ({filteredServices.length})
              </span>
              <div className="space-y-1.5">
                {filteredServices.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => handleSelect(`/services/${s.id}`)}
                    className="p-3 bg-white hover:bg-canvas-secondary rounded-xl border border-border-default cursor-pointer flex items-center justify-between transition-all"
                  >
                    <div>
                      <span className="font-extrabold text-text-primary block">{s.name}</span>
                      <span className="text-text-muted text-[10px]">{s.shortDescription}</span>
                    </div>
                    <span className="font-extrabold text-brand-teal text-xs">₹{s.pricing.basePrice}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-canvas-secondary border-t border-border-default flex justify-between items-center text-[10px] text-text-muted font-semibold">
          <span>Press ESC to exit</span>
          <span className="text-brand-teal font-extrabold">Care Operating System Command Menu</span>
        </div>
      </div>
    </div>
  );
};
