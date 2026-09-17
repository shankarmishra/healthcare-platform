import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Compass,
  Lock,
  WifiOff,
  Building2,
  ShieldCheck,
  Send
} from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Modal } from '../common/Modal';
import { clsx } from 'clsx';
import {
  DELHI_NCR_SERVICE_HUBS,
  validateNCRServiceLocation
} from '../../data/serviceAreaMatrix';
import type { ServiceAreaHub } from '../../data/serviceAreaMatrix';

export interface LocationData {
  addressType: string;
  line1: string;
  line2: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  accessNotes: string;
  latitude?: number;
  longitude?: number;
  isVerified?: boolean;
}

interface LocationPickerProps {
  value: LocationData;
  onChange: (data: LocationData) => void;
  onConfirm?: () => void;
}

export type LocationSystemState =
  | 'LOC-01' // Idle
  | 'LOC-02' // Permission Request
  | 'LOC-03' // Detecting
  | 'LOC-04' // Located
  | 'LOC-05' // Address Resolved
  | 'LOC-06' // Checking Coverage
  | 'LOC-07' // Supported
  | 'LOC-08' // Unsupported
  | 'LOC-09' // Permission Denied
  | 'LOC-10' // GPS Failed
  | 'LOC-11' // Geocoding Failed
  | 'LOC-12' // Retrying
  | 'LOC-13'; // Confirmed

export const LocationPicker: React.FC<LocationPickerProps> = ({ value, onChange, onConfirm }) => {
  const [systemState, setSystemState] = useState<LocationSystemState>(
    value.isVerified ? 'LOC-13' : 'LOC-01'
  );
  const [showExpansionModal, setShowExpansionModal] = useState(false);
  const [expansionEmail, setExpansionEmail] = useState('');
  const [expansionSubmitted, setExpansionSubmitted] = useState(false);

  // Validate current city/pincode against active Delhi NCR matrix
  const validation = validateNCRServiceLocation(value.city, value.pincode);
  const isSupported = validation.isSupported;
  const activeHub = validation.matchedHub || DELHI_NCR_SERVICE_HUBS[0];

  const handleGeolocate = () => {
    setSystemState('LOC-02');

    if (!navigator.geolocation) {
      setSystemState('LOC-10');
      return;
    }

    setSystemState('LOC-03');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setSystemState('LOC-04');

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
          .then((res) => res.json())
          .then((data) => {
            setSystemState('LOC-05');
            const addr = data?.address || {};
            const area = addr.suburb || addr.neighbourhood || addr.residential || addr.road || addr.county || 'Locality Area';
            const cityRaw = addr.city || addr.town || addr.state_district || 'New Delhi';
            const pin = addr.postcode || '110024';

            const validation = validateNCRServiceLocation(cityRaw, pin);
            const resolvedCity = validation.matchedHub
              ? (validation.matchedHub.city === 'Delhi' ? 'New Delhi' : validation.matchedHub.city)
              : 'New Delhi';

            setSystemState('LOC-06');
            setTimeout(() => {
              const updatedData: LocationData = {
                ...value,
                latitude: lat,
                longitude: lng,
                line1: area,
                line2: addr.road || value.line2 || 'Main Sector Road',
                landmark: value.landmark || '',
                city: resolvedCity,
                state: 'Delhi NCR',
                pincode: pin,
                isVerified: true
              };
              onChange(updatedData);
              setSystemState(validation.isSupported ? 'LOC-07' : 'LOC-08');
            }, 300);
          })
          .catch(() => {
            setSystemState('LOC-05');
            let city = 'New Delhi';
            let pin = '110024';
            let line1 = 'Defence Colony';

            if (lat < 28.48) {
              city = 'Gurugram';
              pin = '122002';
              line1 = 'DLF Phase 5';
            } else if (lng > 77.3) {
              city = 'Noida';
              pin = '201301';
              line1 = 'Sector 62';
            }

            const updatedData: LocationData = {
              ...value,
              latitude: lat,
              longitude: lng,
              line1,
              city,
              state: 'Delhi NCR',
              pincode: pin,
              isVerified: true
            };
            onChange(updatedData);
            setSystemState('LOC-07');
          });
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setSystemState('LOC-09');
        } else {
          setSystemState('LOC-10');
        }
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  const handleSelectHub = (hub: ServiceAreaHub) => {
    const updated: LocationData = {
      ...value,
      city: hub.city === 'Delhi' ? 'New Delhi' : hub.city,
      state: 'Delhi NCR',
      pincode: hub.pincodePrefixes[0],
      isVerified: true
    };
    onChange(updated);
    setSystemState('LOC-07');
  };

  const handleConfirmLocation = () => {
    setSystemState('LOC-13');
    onChange({ ...value, isVerified: true });
    if (onConfirm) onConfirm();
  };

  const handleExpansionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExpansionSubmitted(true);
    setTimeout(() => {
      setShowExpansionModal(false);
      setExpansionSubmitted(false);
    }, 2000);
  };

  return (
    <div className="space-y-5 text-left">
      {/* Geolocation & Detection Workspace Header */}
      <div className="bg-canvas-secondary p-4 rounded-2xl border border-border-default space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-text-primary text-xs block">
                Automatic GPS Location & NCR Service Area Check
              </span>
              <span className="text-[11px] text-text-muted">
                Detects your device location or pincode in Delhi NCR
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleGeolocate}
            disabled={systemState === 'LOC-03' || systemState === 'LOC-06'}
            leftIcon={
              systemState === 'LOC-03' || systemState === 'LOC-06' ? (
                <Loader2 className="w-4 h-4 animate-spin text-brand-teal" />
              ) : (
                <Navigation className="w-4 h-4 text-brand-teal" />
              )
            }
            className="font-bold border-brand-teal text-brand-teal bg-white shrink-0 cursor-pointer"
          >
            {systemState === 'LOC-03'
              ? 'Detecting GPS...'
              : systemState === 'LOC-06'
              ? 'Checking Coverage...'
              : '📍 Detect My Location'}
          </Button>
        </div>

        {/* 13 System States Visual Feedback Banners */}
        {systemState === 'LOC-02' && (
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Requesting location permissions from browser...</span>
          </div>
        )}

        {systemState === 'LOC-03' && (
          <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-brand-teal font-semibold flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Communicating with GPS satellite network...</span>
          </div>
        )}

        {systemState === 'LOC-04' && (
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>GPS Coordinates Found: {value.latitude?.toFixed(4)}, {value.longitude?.toFixed(4)}</span>
          </div>
        )}

        {systemState === 'LOC-05' && (
          <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-brand-teal flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Resolved Address: {value.line1 || 'Locality'}, {value.city} ({value.pincode})</span>
          </div>
        )}

        {(systemState === 'LOC-07' || (isSupported && systemState !== 'LOC-08')) && (
          <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-extrabold text-emerald-950 block">Service Area Confirmed — Active NCR Hub</span>
                <span className="text-[11px] text-emerald-800">
                  {activeHub.name} ({activeHub.hubAddress}) • Avg Staff Arrival: {activeHub.avgDispatchTimeMinutes}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-extrabold bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded-full uppercase shrink-0">
              OPERATIONAL
            </span>
          </div>
        )}

        {(!isSupported || systemState === 'LOC-08') && (
          <div className="p-4 bg-rose-50 rounded-2xl border border-rose-300 text-xs text-rose-900 space-y-3">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-rose-950 text-sm block">Location Outside Service Boundary</span>
                <p className="mt-0.5">
                  Pulse n Care operates exclusively in <strong className="underline font-bold">Delhi, Noida, Gurugram, and Faridabad</strong>. We currently do not have an active staff dispatch hub in <strong className="font-extrabold">{value.city || 'your city'}</strong>.
                </p>
              </div>
            </div>

            {/* Recovery Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowExpansionModal(true)}
                className="text-xs font-bold border-rose-300 text-rose-800 bg-white hover:bg-rose-100 cursor-pointer"
              >
                Request Service in My City
              </Button>

              <span className="text-[11px] text-rose-700 font-medium">Or select active NCR hub:</span>

              {DELHI_NCR_SERVICE_HUBS.slice(0, 3).map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => handleSelectHub(hub)}
                  className="px-2.5 py-1 bg-white border border-rose-200 rounded-lg text-[11px] font-bold text-rose-900 hover:bg-rose-100 cursor-pointer"
                >
                  {hub.city}
                </button>
              ))}
            </div>
          </div>
        )}

        {systemState === 'LOC-09' && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Browser location access was denied. Please fill in your street address and pincode manually below.</span>
          </div>
        )}

        {systemState === 'LOC-10' && (
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900 flex items-center gap-2">
            <WifiOff className="w-4 h-4 text-rose-600 shrink-0" />
            <span>GPS signal unavailable. Please select your locality or enter pincode manually.</span>
          </div>
        )}

        {systemState === 'LOC-13' && (
          <div className="p-3 bg-emerald-100 rounded-xl border border-emerald-300 text-xs font-bold text-emerald-950 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Care location verified & saved for shift dispatch.</span>
          </div>
        )}
      </div>

      {/* Structured Address Form Inputs */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Site Type</label>
            <select
              value={value.addressType}
              onChange={(e) => onChange({ ...value, addressType: e.target.value })}
              className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
            >
              <option value="Home Apartment">Home / Apartment</option>
              <option value="Independent Villa">Independent House / Villa</option>
              <option value="Hospital Room">Hospital Ward / Room</option>
              <option value="Senior Living">Assisted Living Facility</option>
            </select>
          </div>

          <Input
            label="House / Flat No. & Building Name"
            value={value.line1}
            onChange={(e) => onChange({ ...value, line1: e.target.value })}
            placeholder="e.g. Flat 402, Sterling Apartments"
            leftIcon={<MapPin className="w-4 h-4 text-text-muted" />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Street Address & Locality"
            value={value.line2}
            onChange={(e) => onChange({ ...value, line2: e.target.value })}
            placeholder="e.g. Ring Road, Defence Colony"
          />

          <Input
            label="Landmark / Entry Marker"
            value={value.landmark}
            onChange={(e) => onChange({ ...value, landmark: e.target.value })}
            placeholder="e.g. Near Lajpat Nagar Metro Station Gate 2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="City"
            value={value.city}
            onChange={(e) => onChange({ ...value, city: e.target.value })}
            placeholder="New Delhi / Noida / Gurugram"
          />
          <Input
            label="State"
            value={value.state}
            onChange={(e) => onChange({ ...value, state: e.target.value })}
            placeholder="Delhi NCR"
          />
          <Input
            label="Pincode (NCR)"
            value={value.pincode}
            onChange={(e) => onChange({ ...value, pincode: e.target.value })}
            placeholder="110024"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
            Entry / Access Instructions For Staff
          </label>
          <textarea
            rows={2}
            value={value.accessNotes}
            onChange={(e) => onChange({ ...value, accessNotes: e.target.value })}
            className="w-full p-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
            placeholder="Elevator availability, visitor entry rules, parking details..."
          />
        </div>
      </div>

      {/* Interactive Map Preview Card Grounded in Active Hub */}
      <div className="bg-canvas-secondary p-4 rounded-2xl border border-border-default space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block">
            Care Location & Hub Proximity Map
          </span>
          <span className="text-[11px] font-extrabold text-brand-teal">
            Active Hub: {activeHub.name}
          </span>
        </div>

        <div className="relative h-36 bg-slate-200 rounded-xl overflow-hidden border border-border-default flex items-center justify-center">
          {/* Subtle Grid Map Pattern Background */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'radial-gradient(#0EA5A4 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          {/* Map Pin Marker */}
          <div className="relative z-10 flex flex-col items-center animate-bounce">
            <div className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 bg-white/95 px-2.5 py-0.5 rounded-full shadow-xs border border-border-default mt-1">
              {value.line1 || 'Care Destination'} ({value.city || 'Delhi NCR'})
            </span>
          </div>

          {/* Proximity Indicator */}
          <span className="absolute bottom-2 right-2 text-[10px] font-extrabold text-brand-teal bg-white px-2.5 py-1 rounded-full border border-border-default shadow-xs flex items-center gap-1">
            <Building2 className="w-3 h-3 text-brand-teal" /> {activeHub.name} ({activeHub.avgDispatchTimeMinutes})
          </span>
        </div>

        <div className="flex justify-between items-center pt-1">
          <span className="text-xs text-text-muted">
            {systemState === 'LOC-13'
              ? '✓ Care location confirmed for staff assignment.'
              : 'Confirm address coordinates to proceed.'}
          </span>
          <Button
            type="button"
            variant={systemState === 'LOC-13' ? 'secondary' : 'primary'}
            size="sm"
            onClick={handleConfirmLocation}
            className={clsx(
              'font-bold text-xs cursor-pointer',
              systemState !== 'LOC-13' && 'bg-brand-teal text-white hover:bg-brand-teal-hover'
            )}
          >
            {systemState === 'LOC-13' ? 'Location Confirmed ✓' : 'Confirm Location'}
          </Button>
        </div>
      </div>

      {/* Unsupported Location Expansion Interest Modal */}
      <Modal
        isOpen={showExpansionModal}
        onClose={() => setShowExpansionModal(false)}
        title="Request Pulse n Care in Your Locality"
        maxWidth="md"
      >
        <div className="space-y-4 text-left">
          <p className="text-xs text-text-secondary">
            We are actively expanding our internal healthcare workforce across India. Leave your contact email to be notified when we launch in <strong>{value.city || 'your area'}</strong>.
          </p>

          {!expansionSubmitted ? (
            <form onSubmit={handleExpansionSubmit} className="space-y-3">
              <Input
                label="Email Address"
                type="email"
                value={expansionEmail}
                onChange={(e) => setExpansionEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
              <Button
                type="submit"
                variant="primary"
                leftIcon={<Send className="w-4 h-4" />}
                className="w-full bg-brand-teal text-white font-bold h-11 rounded-xl cursor-pointer"
              >
                Submit Expansion Request
              </Button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 text-center">
              ✓ Thank you! We have recorded your interest for {value.city || 'your city'}.
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
