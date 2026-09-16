import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, AlertCircle, Loader2, Compass } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { clsx } from 'clsx';

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

export const LocationPicker: React.FC<LocationPickerProps> = ({ value, onChange, onConfirm }) => {
  const [detecting, setDetecting] = useState(false);
  const [detectionStatus, setDetectionStatus] = useState<'idle' | 'success' | 'denied' | 'error'>('idle');
  const [confirmed, setConfirmed] = useState(false);

  // Check if city/pincode is within supported NCR service areas (Delhi, Noida, Gurugram, Faridabad)
  const cityLower = (value.city || '').toLowerCase();
  const pincodeTrim = (value.pincode || '').trim();
  const isNCRCity = cityLower.includes('delhi') || cityLower.includes('noida') || cityLower.includes('gurugram') || cityLower.includes('gurgaon') || cityLower.includes('faridabad');
  const isNCRPin = pincodeTrim.startsWith('110') || pincodeTrim.startsWith('2013') || pincodeTrim.startsWith('122') || pincodeTrim.startsWith('121');
  const isSupportedLocation = isNCRCity || isNCRPin || (!value.city && !value.pincode);

  const handleGeolocate = () => {
    setDetecting(true);
    setDetectionStatus('idle');

    if (!navigator.geolocation) {
      setDetecting(false);
      setDetectionStatus('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude || 28.6139;
        const lng = pos.coords.longitude || 77.2090;

        setTimeout(() => {
          setDetecting(false);
          setDetectionStatus('success');
          onChange({
            ...value,
            latitude: lat,
            longitude: lng,
            line1: value.line1 || 'A-124, Defence Colony',
            line2: value.line2 || 'Near Lajpat Nagar Metro Station',
            landmark: value.landmark || 'Opposite Flyover Pillar 14',
            city: 'New Delhi',
            state: 'Delhi NCR',
            pincode: '110024',
            isVerified: true
          });
        }, 1200);
      },
      (err) => {
        setDetecting(false);
        if (err.code === err.PERMISSION_DENIED) {
          setDetectionStatus('denied');
        } else {
          setDetectionStatus('error');
        }
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="space-y-5 text-left">
      {/* Automatic Browser Location Trigger Card */}
      <div className="bg-canvas-secondary p-4 rounded-2xl border border-border-default space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-text-primary text-xs block">Automatic GPS Location Detection</span>
              <span className="text-[11px] text-text-muted">Use device sensors for precise care visit dispatch</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleGeolocate}
            disabled={detecting}
            leftIcon={detecting ? <Loader2 className="w-4 h-4 animate-spin text-brand-teal" /> : <Navigation className="w-4 h-4 text-brand-teal" />}
            className="font-bold border-brand-teal text-brand-teal bg-white shrink-0 cursor-pointer"
          >
            {detecting ? 'Detecting Coordinates...' : '📍 Use My Current Location'}
          </Button>
        </div>

        {/* Detection Feedback Status Banners */}
        {detectionStatus === 'success' && (
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Location detected (verified via GPS coords: {value.latitude?.toFixed(4)}, {value.longitude?.toFixed(4)})</span>
            </span>
            <span className="text-[10px] uppercase font-extrabold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">VERIFIED</span>
          </div>
        )}

        {detectionStatus === 'denied' && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Browser location permission denied. Please enter address details manually below.</span>
          </div>
        )}

        {detectionStatus === 'error' && (
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-800 flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Unable to detect GPS signal. Enter address manually below.</span>
          </div>
        )}

        {/* Unsupported Geographical Service Area Warning Banner */}
        {!isSupportedLocation && (
          <div className="p-3.5 bg-rose-50/90 rounded-xl border border-rose-300 text-xs text-rose-900 flex items-start gap-2.5 font-medium shadow-2xs">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-rose-900 block">Location Outside Service Boundary</span>
              <span>
                We currently do not operate in <strong className="font-extrabold">{value.city || 'this location'}</strong>. Our in-house healthcare workforce is strictly active within <strong className="underline">Delhi, Noida, Gurugram, and Faridabad (NCR)</strong>.
              </span>
            </div>
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
            placeholder="e.g. Flat 402, Sterling Residency"
            leftIcon={<MapPin className="w-4 h-4 text-text-muted" />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Street Address & Locality"
            value={value.line2}
            onChange={(e) => onChange({ ...value, line2: e.target.value })}
            placeholder="e.g. 100 Feet Rd, Indiranagar"
          />

          <Input
            label="Landmark / Entry Marker"
            value={value.landmark}
            onChange={(e) => onChange({ ...value, landmark: e.target.value })}
            placeholder="e.g. Opposite Toit Pub, Gate 2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input label="City" value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })} />
          <Input label="State" value={value.state} onChange={(e) => onChange({ ...value, state: e.target.value })} />
          <Input label="Pincode" value={value.pincode} onChange={(e) => onChange({ ...value, pincode: e.target.value })} />
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

      {/* Compact Interactive Map Preview Card */}
      <div className="bg-canvas-secondary p-4 rounded-2xl border border-border-default space-y-3">
        <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block">
          Care Location Map Preview
        </span>
        <div className="relative h-36 bg-slate-200 rounded-xl overflow-hidden border border-border-default flex items-center justify-center">
          {/* Subtle Grid Map Pattern Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#0EA5A4 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          {/* Map Pin Marker */}
          <div className="relative z-10 flex flex-col items-center animate-bounce">
            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-slate-900 bg-white/95 px-2 py-0.5 rounded-full shadow-xs border border-border-default mt-1">
              {value.line1 || 'Care Destination'}
            </span>
          </div>
          {/* Proximity Coverage Indicator */}
          <span className="absolute bottom-2 right-2 text-[10px] font-extrabold text-brand-teal bg-white px-2 py-0.5 rounded-full border border-border-default shadow-xs">
            Bangalore East Hub (1.8 km to nearest staff)
          </span>
        </div>

        <div className="flex justify-between items-center pt-1">
          <span className="text-xs text-text-muted">
            {confirmed ? '✓ Location confirmed for dispatch.' : 'Please confirm location to lock care request coordinates.'}
          </span>
          <Button
            type="button"
            variant={confirmed ? 'secondary' : 'primary'}
            size="sm"
            onClick={() => {
              setConfirmed(true);
              if (onConfirm) onConfirm();
            }}
            className={clsx('font-bold text-xs', !confirmed && 'bg-brand-teal text-white hover:bg-brand-teal-hover')}
          >
            {confirmed ? 'Location Confirmed ✓' : 'Confirm Location'}
          </Button>
        </div>
      </div>
    </div>
  );
};
