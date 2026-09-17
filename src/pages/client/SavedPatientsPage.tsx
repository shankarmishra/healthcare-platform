import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import { EmptyState } from '../../components/common/EmptyState';
import {
  Plus,
  Activity,
  AlertTriangle,
  Edit2,
  Trash2,
  Heart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import type { PatientProfile } from '../../types';
import { clsx } from 'clsx';

const INITIAL_PATIENTS: PatientProfile[] = [
  {
    id: 'pat-001',
    clientId: 'clt-001',
    firstName: 'Kamla',
    lastName: 'Mehta',
    relationship: 'parent',
    dateOfBirth: '1958-05-14',
    gender: 'female',
    medicalNotes: 'Post-op total knee replacement (TKR), Type-2 Diabetes. Requires sterile wound dressing and gentle leg handling.',
    mobilityStatus: 'assisted',
    allergies: ['Penicillin', 'Sulfa drugs'],
    createdAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'pat-002',
    clientId: 'clt-001',
    firstName: 'Ramesh',
    lastName: 'Mehta',
    relationship: 'parent',
    dateOfBirth: '1954-11-20',
    gender: 'male',
    medicalNotes: 'Hypertension, Mild Parkinson tremor. Routine vitals checkup and medication management.',
    mobilityStatus: 'independent',
    allergies: [],
    createdAt: '2025-02-01T00:00:00Z'
  },
  {
    id: 'pat-003',
    clientId: 'clt-001',
    firstName: 'Rahul',
    lastName: 'Mehta',
    relationship: 'self',
    dateOfBirth: '1988-08-10',
    gender: 'male',
    medicalNotes: 'Sports Injury Rehab (ACL Sprain)',
    mobilityStatus: 'independent',
    allergies: [],
    createdAt: '2025-03-01T00:00:00Z'
  }
];

export const SavedPatientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<PatientProfile[]>(INITIAL_PATIENTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<PatientProfile | null>(null);

  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [relationship, setRelationship] = useState<'self' | 'parent' | 'spouse' | 'child' | 'sibling' | 'other'>('parent');
  const [dateOfBirth, setDateOfBirth] = useState('1960-01-01');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | 'prefer_not_to_say'>('female');
  const [mobilityStatus, setMobilityStatus] = useState<'independent' | 'assisted' | 'wheelchair' | 'bedridden'>('assisted');
  const [allergiesText, setAllergiesText] = useState('');
  const [medicalNotes, setMedicalNotes] = useState('');

  const openAddModal = () => {
    setEditingPatient(null);
    setFirstName('');
    setLastName('');
    setRelationship('parent');
    setDateOfBirth('1960-01-01');
    setGender('female');
    setMobilityStatus('assisted');
    setAllergiesText('');
    setMedicalNotes('');
    setModalOpen(true);
  };

  const openEditModal = (pat: PatientProfile) => {
    setEditingPatient(pat);
    setFirstName(pat.firstName);
    setLastName(pat.lastName);
    setRelationship(pat.relationship);
    setDateOfBirth(pat.dateOfBirth);
    setGender(pat.gender);
    setMobilityStatus(pat.mobilityStatus || 'assisted');
    setAllergiesText(pat.allergies?.join(', ') || '');
    setMedicalNotes(pat.medicalNotes || '');
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const allergiesList = allergiesText
      .split(',')
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    if (editingPatient) {
      setPatients(
        patients.map((p) =>
          p.id === editingPatient.id
            ? {
                ...p,
                firstName,
                lastName,
                relationship,
                dateOfBirth,
                gender,
                mobilityStatus,
                allergies: allergiesList,
                medicalNotes
              }
            : p
        )
      );
    } else {
      const newPatient: PatientProfile = {
        id: `pat-${Date.now()}`,
        clientId: 'clt-001',
        firstName,
        lastName,
        relationship,
        dateOfBirth,
        gender,
        mobilityStatus,
        allergies: allergiesList,
        medicalNotes,
        createdAt: new Date().toISOString()
      };
      setPatients([...patients, newPatient]);
    }
    setModalOpen(false);
  };

  const calculateAge = (dob: string) => {
    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left relative bg-white">
      <HealthcareTexture type="micro-dot-mesh" opacity={0.03} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-default pb-4 gap-4">
        <div>
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-brand-teal" /> Care Concierge Patient Hub
          </span>
          <h1 className="text-2xl font-extrabold text-text-primary">Saved Patient Profiles</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Manage patient records and medical history notes for instant home care booking dispatch.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={openAddModal}
          leftIcon={<Plus className="w-4 h-4" />}
          className="bg-brand-teal hover:bg-brand-teal-hover text-white font-bold cursor-pointer shrink-0"
        >
          Add New Patient Profile
        </Button>
      </div>

      {/* Patient Cards Grid */}
      {patients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((pat) => {
            const age = calculateAge(pat.dateOfBirth);
            return (
              <Card
                key={pat.id}
                className="p-5 space-y-4 border-border-default hover:border-brand-teal/40 transition-all flex flex-col justify-between shadow-subtle bg-white relative"
              >
                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-canvas-teal text-brand-teal font-extrabold text-lg flex items-center justify-center border border-teal-200">
                        {pat.firstName[0]}
                        {pat.lastName[0]}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-text-primary text-base">
                          {pat.firstName} {pat.lastName}
                        </h3>
                        <span className="text-xs text-text-muted capitalize">
                          {pat.relationship} • {age} yrs • {pat.gender}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-canvas-tertiary text-text-secondary border border-border-default">
                      {pat.relationship}
                    </span>
                  </div>

                  {/* Mobility Status Badge */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-border-light">
                    <span className="text-text-muted font-medium flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-brand-teal" /> Mobility Status:
                    </span>
                    <span
                      className={clsx(
                        'px-2.5 py-0.5 rounded-full text-[11px] font-extrabold capitalize border',
                        pat.mobilityStatus === 'independent' && 'bg-emerald-50 text-emerald-800 border-emerald-200',
                        pat.mobilityStatus === 'assisted' && 'bg-amber-50 text-amber-900 border-amber-200',
                        pat.mobilityStatus === 'wheelchair' && 'bg-blue-50 text-blue-900 border-blue-200',
                        pat.mobilityStatus === 'bedridden' && 'bg-rose-50 text-rose-900 border-rose-200'
                      )}
                    >
                      {pat.mobilityStatus}
                    </span>
                  </div>

                  {/* Allergies Pills */}
                  {pat.allergies && pat.allergies.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-rose-600" /> Allergies Recorded:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pat.allergies.map((alg) => (
                          <span
                            key={alg}
                            className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200"
                          >
                            {alg}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Medical Notes */}
                  {pat.medicalNotes && (
                    <div className="p-3 bg-canvas-secondary rounded-xl text-xs text-text-secondary space-y-1">
                      <span className="font-bold text-text-primary block text-[11px]">Clinical Notes:</span>
                      <p className="line-clamp-2 italic text-text-muted">{pat.medicalNotes}</p>
                    </div>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="pt-3 border-t border-border-default flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(pat)}
                      className="p-2 text-text-muted hover:text-brand-teal rounded-lg hover:bg-canvas-tertiary transition-colors cursor-pointer"
                      title="Edit Profile"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(pat.id)}
                      className="p-2 text-text-muted hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Delete Profile"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => navigate(`/client/booking/wizard?patientId=${pat.id}`)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-bold text-xs cursor-pointer border-brand-teal text-brand-teal hover:bg-canvas-teal"
                  >
                    Book Care
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No Saved Patient Profiles"
          description="Add your family members or care recipients to quickly pre-fill booking details."
          actionLabel="Add First Patient Profile"
          onAction={openAddModal}
        />
      )}

      {/* Add / Edit Patient Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingPatient ? 'Edit Patient Profile' : 'Add New Patient Profile'}
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="e.g. Kamla"
              required
            />
            <Input
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="e.g. Mehta"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Relationship</label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value as any)}
                className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="parent">Parent</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="self">Self</option>
                <option value="other">Other Relative</option>
              </select>
            </div>

            <Input
              label="Date of Birth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Mobility Status</label>
              <select
                value={mobilityStatus}
                onChange={(e) => setMobilityStatus(e.target.value as any)}
                className="w-full h-11 px-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="assisted">Assisted (Needs Support)</option>
                <option value="independent">Independent</option>
                <option value="wheelchair">Wheelchair Bound</option>
                <option value="bedridden">Bedridden / Total Care</option>
              </select>
            </div>

            <Input
              label="Known Allergies (Comma separated)"
              value={allergiesText}
              onChange={(e) => setAllergiesText(e.target.value)}
              placeholder="e.g. Penicillin, Sulfa"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
              Medical History & Handling Notes
            </label>
            <textarea
              rows={3}
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              className="w-full p-3 text-sm bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              placeholder="Enter surgeries, chronic conditions, diet instructions..."
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            leftIcon={<CheckCircle2 className="w-4 h-4" />}
            className="w-full bg-brand-teal text-white font-bold h-11 rounded-xl cursor-pointer"
          >
            {editingPatient ? 'Update Patient Profile' : 'Save Patient Profile'}
          </Button>
        </form>
      </Modal>
    </div>
  );
};
