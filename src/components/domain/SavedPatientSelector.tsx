import React, { useState } from 'react';
import { Plus, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import type { PatientProfile } from '../../types';
import { clsx } from 'clsx';

const DEFAULT_SAVED_PATIENTS: PatientProfile[] = [
  {
    id: 'pat-001',
    clientId: 'clt-001',
    firstName: 'Kamla',
    lastName: 'Mehta',
    relationship: 'parent',
    dateOfBirth: '1958-05-14',
    gender: 'female',
    medicalNotes: 'Post-op total knee replacement (TKR), Type-2 Diabetes',
    mobilityStatus: 'assisted',
    allergies: ['Penicillin'],
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
    medicalNotes: 'Hypertension, Mild Parkinson tremor, Routine vitals checkup',
    mobilityStatus: 'independent',
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
    createdAt: '2025-03-01T00:00:00Z'
  }
];

interface SavedPatientSelectorProps {
  selectedPatientId?: string;
  onSelectPatient: (patient: PatientProfile) => void;
}

export const SavedPatientSelector: React.FC<SavedPatientSelectorProps> = ({
  selectedPatientId,
  onSelectPatient
}) => {
  const [patients, setPatients] = useState<PatientProfile[]>(DEFAULT_SAVED_PATIENTS);
  const [addingNew, setAddingNew] = useState(false);

  // New Patient Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [relationship, setRelationship] = useState<any>('parent');
  const [gender, setGender] = useState<any>('female');
  const [age, setAge] = useState('65');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [mobilityStatus, setMobilityStatus] = useState<any>('assisted');

  const handleAddNewPatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName) return;

    const newPat: PatientProfile = {
      id: `pat-${Date.now()}`,
      clientId: 'clt-001',
      firstName,
      lastName,
      relationship,
      dateOfBirth: `${2026 - parseInt(age || '65')}-01-01`,
      gender,
      medicalNotes: medicalNotes || 'General home care requirement',
      mobilityStatus,
      createdAt: new Date().toISOString()
    };

    setPatients([...patients, newPat]);
    onSelectPatient(newPat);
    setAddingNew(false);
    setFirstName('');
    setLastName('');
    setMedicalNotes('');
  };

  return (
    <div className="space-y-4 text-left">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-text-primary text-sm">Who Needs Care?</h3>
          <p className="text-xs text-text-muted">Select a saved family member or add a new patient profile.</p>
        </div>
        {!addingNew && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setAddingNew(true)}
            leftIcon={<Plus className="w-4 h-4 text-brand-teal" />}
            className="font-bold text-xs border-brand-teal text-brand-teal bg-white cursor-pointer"
          >
            Add New Patient
          </Button>
        )}
      </div>

      {/* Saved Patients Grid */}
      {!addingNew && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {patients.map((pat) => {
            const isSelected = selectedPatientId === pat.id;
            const ageYears = 2026 - parseInt(pat.dateOfBirth.substring(0, 4) || '1960');

            return (
              <div
                key={pat.id}
                onClick={() => onSelectPatient(pat)}
                className={clsx(
                  'p-4 rounded-2xl border cursor-pointer transition-all space-y-2 relative flex flex-col justify-between',
                  isSelected
                    ? 'border-brand-teal bg-canvas-teal ring-2 ring-brand-teal/20 shadow-xs'
                    : 'border-border-default bg-white hover:border-border-hover'
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-text-primary text-sm">
                      {pat.firstName} {pat.lastName}
                    </span>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />}
                  </div>
                  <span className="text-[10px] font-extrabold text-brand-teal uppercase bg-white px-2 py-0.5 rounded border border-teal-200 inline-block">
                    {pat.relationship} • {ageYears} Yrs • {pat.gender}
                  </span>
                  <p className="text-xs text-text-muted line-clamp-2 mt-1">{pat.medicalNotes}</p>
                </div>
                <div className="border-t border-border-light pt-2 text-[11px] text-text-secondary font-semibold">
                  Mobility: <span className="capitalize text-text-primary">{pat.mobilityStatus}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add New Patient Form Drawer */}
      {addingNew && (
        <form onSubmit={handleAddNewPatient} className="bg-canvas-secondary p-5 rounded-2xl border border-border-default space-y-4 text-xs">
          <div className="flex justify-between items-center border-b border-border-default pb-2">
            <span className="font-extrabold text-text-primary text-xs uppercase tracking-wider">Create New Saved Patient Profile</span>
            <button type="button" onClick={() => setAddingNew(false)} className="text-text-muted hover:text-text-primary font-bold">
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-text-secondary uppercase tracking-wider">Relationship</label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full h-10 px-2 text-xs bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="parent">Parent (Mother / Father)</option>
                <option value="self">Myself</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="grandparent">Grandparent</option>
              </select>
            </div>

            <Input label="Age (Years)" type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <div className="space-y-1.5">
              <label className="font-bold text-text-secondary uppercase tracking-wider">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full h-10 px-2 text-xs bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-text-secondary uppercase tracking-wider">Mobility Level</label>
              <select
                value={mobilityStatus}
                onChange={(e) => setMobilityStatus(e.target.value)}
                className="w-full h-10 px-2 text-xs bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              >
                <option value="assisted">Assisted Walking (Needs Support)</option>
                <option value="independent">Fully Independent</option>
                <option value="wheelchair">Wheelchair Bound</option>
                <option value="bedridden">Bedridden / Total Assistance</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-text-secondary uppercase tracking-wider">Medical Notes & Diagnoses</label>
              <input
                type="text"
                value={medicalNotes}
                onChange={(e) => setMedicalNotes(e.target.value)}
                placeholder="Surgeries, chronic conditions, allergies..."
                className="w-full h-10 px-3 bg-white border border-border-default rounded-xl focus:border-brand-teal focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-border-default">
            <Button type="button" variant="secondary" size="sm" onClick={() => setAddingNew(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" className="bg-brand-teal text-white font-bold">
              Save Patient Profile
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
