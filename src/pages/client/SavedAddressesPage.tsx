import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { EmptyState } from '../../components/common/EmptyState';
import { LocationPicker } from '../../components/domain/LocationPicker';
import type { LocationData } from '../../components/domain/LocationPicker';
import {
  MapPin,
  Plus,
  Building2,
  CheckCircle2,
  Edit2,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { validateNCRServiceLocation } from '../../data/serviceAreaMatrix';
import { clsx } from 'clsx';

export interface SavedAddressItem extends LocationData {
  id: string;
  clientId: string;
  isDefault?: boolean;
}

const INITIAL_ADDRESSES: SavedAddressItem[] = [
  {
    id: 'addr-001',
    clientId: 'clt-001',
    addressType: 'Home Apartment',
    line1: 'A-124, Defence Colony',
    line2: 'Near Lajpat Nagar Metro Station',
    landmark: 'Opposite Flyover Pillar 14',
    city: 'New Delhi',
    state: 'Delhi NCR',
    pincode: '110024',
    accessNotes: 'Elevator active 24/7. Visitor parking inside gate 3.',
    latitude: 28.6139,
    longitude: 77.2090,
    isVerified: true,
    isDefault: true
  },
  {
    id: 'addr-002',
    clientId: 'clt-001',
    addressType: 'Independent Villa',
    line1: 'Villa 18, DLF Phase 2',
    line2: 'Golf Course Road, Near Cyber City',
    landmark: 'Behind Central Plaza',
    city: 'Gurugram',
    state: 'Delhi NCR',
    pincode: '122002',
    accessNotes: 'Private driveway. Guard house entry approval required.',
    latitude: 28.4595,
    longitude: 77.0266,
    isVerified: true,
    isDefault: false
  },
  {
    id: 'addr-003',
    clientId: 'clt-001',
    addressType: 'Home Apartment',
    line1: 'Tower B-602, Jaypee Greens Wish Town',
    line2: 'Sector 128, Noida Express Highway',
    landmark: 'Near Max Super Speciality Hospital',
    city: 'Noida',
    state: 'Delhi NCR',
    pincode: '201304',
    accessNotes: 'Service elevator available for medical gear.',
    latitude: 28.5355,
    longitude: 77.3910,
    isVerified: true,
    isDefault: false
  }
];

export const SavedAddressesPage: React.FC = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<SavedAddressItem[]>(INITIAL_ADDRESSES);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<SavedAddressItem | null>(null);

  const [formLocation, setFormLocation] = useState<LocationData>({
    addressType: 'Home Apartment',
    line1: '',
    line2: '',
    landmark: '',
    city: 'New Delhi',
    state: 'Delhi NCR',
    pincode: '110024',
    accessNotes: '',
    isVerified: true
  });

  const openAddModal = () => {
    setEditingAddress(null);
    setFormLocation({
      addressType: 'Home Apartment',
      line1: '',
      line2: '',
      landmark: '',
      city: 'New Delhi',
      state: 'Delhi NCR',
      pincode: '110024',
      accessNotes: '',
      isVerified: true
    });
    setModalOpen(true);
  };

  const openEditModal = (item: SavedAddressItem) => {
    setEditingAddress(item);
    setFormLocation(item);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id
      }))
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(
        addresses.map((a) => (a.id === editingAddress.id ? { ...a, ...formLocation } : a))
      );
    } else {
      const newAddress: SavedAddressItem = {
        ...formLocation,
        id: `addr-${Date.now()}`,
        clientId: 'clt-001',
        isDefault: addresses.length === 0
      };
      setAddresses([...addresses, newAddress]);
    }
    setModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left relative bg-white">
      <HealthcareTexture type="location-mesh" opacity={0.03} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-default pb-4 gap-4">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-teal" /> Care Concierge Location Registry
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Saved Care Addresses</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Manage your verified Delhi NCR locations for instant staff dispatch and shift routing.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={openAddModal}
          leftIcon={<Plus className="w-4 h-4" />}
          className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold cursor-pointer shrink-0"
        >
          Add New Address
        </Button>
      </div>

      {/* Address Cards Grid */}
      {addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addresses.map((addr) => {
            const validation = validateNCRServiceLocation(addr.city, addr.pincode);
            const hub = validation.matchedHub;

            return (
              <Card
                key={addr.id}
                className={clsx(
                  'p-5 space-y-4 border hover:border-brand-teal/40 transition-all flex flex-col justify-between shadow-subtle bg-white relative',
                  addr.isDefault ? 'border-brand-teal bg-canvas-teal/20 ring-1 ring-brand-teal/30' : 'border-border-default'
                )}
              >
                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center shrink-0 border border-teal-200">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-extrabold text-text-primary text-sm block">
                          {addr.addressType}
                        </span>
                        <span className="text-[11px] font-semibold text-brand-teal">
                          {addr.city}, {addr.pincode}
                        </span>
                      </div>
                    </div>

                    {addr.isDefault ? (
                      <span className="text-[10px] font-extrabold bg-brand-teal text-white px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 shrink-0 shadow-2xs">
                        <Star className="w-3 h-3 fill-white" /> DEFAULT
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSetDefault(addr.id)}
                        className="text-[10px] font-bold text-text-muted hover:text-brand-teal border border-border-default px-2 py-0.5 rounded-full hover:border-brand-teal cursor-pointer shrink-0"
                      >
                        Set Default
                      </button>
                    )}
                  </div>

                  {/* Address Text */}
                  <div className="space-y-1 text-xs text-text-secondary pt-1 border-t border-border-light">
                    <p className="font-extrabold text-text-primary text-sm">{addr.line1}</p>
                    {addr.line2 && <p>{addr.line2}</p>}
                    {addr.landmark && (
                      <p className="text-text-muted text-[11px]">
                        Landmark: <span className="font-medium text-text-secondary">{addr.landmark}</span>
                      </p>
                    )}
                  </div>

                  {/* Hub Coverage Tag */}
                  {hub && (
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] font-bold text-emerald-900 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /> {hub.name}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-700">
                        ETA {hub.avgDispatchTimeMinutes}
                      </span>
                    </div>
                  )}

                  {/* Access Notes */}
                  {addr.accessNotes && (
                    <div className="p-2.5 bg-canvas-secondary rounded-xl text-xs text-text-muted">
                      <span className="font-bold text-text-primary text-[10px] block uppercase">Staff Entry Notes:</span>
                      <p className="italic line-clamp-2">{addr.accessNotes}</p>
                    </div>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="pt-3 border-t border-border-default flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(addr)}
                      className="p-2 text-text-muted hover:text-brand-teal rounded-lg hover:bg-canvas-tertiary transition-colors cursor-pointer"
                      title="Edit Address"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(addr.id)}
                      className="p-2 text-text-muted hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Delete Address"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => navigate(`/client/booking/wizard?addressId=${addr.id}`)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-bold text-xs cursor-pointer border-brand-teal text-brand-teal hover:bg-canvas-teal"
                  >
                    Book Care Here
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No Saved Care Addresses"
          description="Add your home, apartment, or hospital address to streamline clinical home care scheduling."
          actionLabel="Add First Care Address"
          onAction={openAddModal}
        />
      )}

      {/* Add / Edit Address Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingAddress ? 'Edit Care Address' : 'Add New Care Address'}
        maxWidth="lg"
      >
        <form onSubmit={handleSave} className="space-y-4 text-left">
          <LocationPicker
            value={formLocation}
            onChange={(updated) => setFormLocation(updated)}
          />

          <Button
            type="submit"
            variant="primary"
            leftIcon={<CheckCircle2 className="w-4 h-4" />}
            className="w-full bg-brand-teal text-white font-bold h-11 rounded-xl cursor-pointer"
          >
            {editingAddress ? 'Update Care Address' : 'Save Care Address'}
          </Button>
        </form>
      </Modal>
    </div>
  );
};
