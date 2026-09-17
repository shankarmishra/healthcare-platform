import React, { useState } from 'react';
import { MapPin, HeartHandshake, Plus, Trash2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const ClientProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    emergencyContact: '+91 98765 00000 (Wife - Priya Sharma)'
  });

  const [savedPatients, setSavedPatients] = useState([
    { id: 'P-1', name: 'Ramesh Sharma', relation: 'Father', age: 72, condition: 'Post-stroke rehab & mobility assistance' },
    { id: 'P-2', name: 'Sunita Sharma', relation: 'Mother', age: 68, condition: 'Hypertension & post-surgical dressing' }
  ]);

  const [savedAddresses] = useState([
    { id: 'A-1', label: 'Home', address: '42, 4th Cross, Indiranagar 1st Stage, Delhi NCR - 560038' },
    { id: 'A-2', label: 'Parents House', address: '108, Palm Meadows, Whitefield, Delhi NCR - 560066' }
  ]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', relation: '', age: '', condition: '' });
  const [showAddPatient, setShowAddPatient] = useState(false);

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatient.name) return;
    setSavedPatients([
      ...savedPatients,
      { id: `P-${Date.now()}`, name: newPatient.name, relation: newPatient.relation, age: Number(newPatient.age) || 60, condition: newPatient.condition }
    ]);
    setNewPatient({ name: '', relation: '', age: '', condition: '' });
    setShowAddPatient(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Account & Patient Settings</h1>
          <p className="text-slate-600 text-sm mt-1">Manage family health profiles, saved care addresses, and emergency contacts</p>
        </div>

        {/* Client Personal Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-lg">
                RS
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">{profile.name}</h2>
                <p className="text-xs text-slate-500">Primary Account Holder • Verified Client</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="text-xs font-semibold cursor-pointer"
            >
              {isEditingProfile ? 'Cancel' : 'Edit Info'}
            </Button>
          </div>

          {isEditingProfile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div className="sm:col-span-2">
                <Button onClick={() => setIsEditingProfile(false)} className="bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer">
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Email Address</span>
                <span className="font-semibold text-slate-800">{profile.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Phone Number</span>
                <span className="font-semibold text-slate-800">{profile.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Emergency Contact</span>
                <span className="font-semibold text-slate-800">{profile.emergencyContact}</span>
              </div>
            </div>
          )}
        </div>

        {/* Saved Patients List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-teal-600" /> Saved Family Patients ({savedPatients.length})
            </h2>
            <Button
              size="sm"
              onClick={() => setShowAddPatient(true)}
              className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Patient
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {savedPatients.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{p.name}</h3>
                    <span className="text-xs text-teal-700 font-medium">{p.relation} • {p.age} years old</span>
                  </div>
                  <button
                    onClick={() => setSavedPatients(savedPatients.filter(sp => sp.id !== p.id))}
                    className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100">
                  {p.condition}
                </p>
              </div>
            ))}
          </div>

          {showAddPatient && (
            <form onSubmit={handleAddPatient} className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-3">
              <h3 className="font-bold text-xs text-teal-900">New Family Patient Details</h3>
              <div className="grid grid-cols-3 gap-2">
                <input
                  placeholder="Patient Name"
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                  className="text-xs p-2 rounded-lg border border-slate-200 bg-white"
                  required
                />
                <input
                  placeholder="Relation (e.g. Father)"
                  value={newPatient.relation}
                  onChange={(e) => setNewPatient({ ...newPatient, relation: e.target.value })}
                  className="text-xs p-2 rounded-lg border border-slate-200 bg-white"
                />
                <input
                  placeholder="Age"
                  type="number"
                  value={newPatient.age}
                  onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                  className="text-xs p-2 rounded-lg border border-slate-200 bg-white"
                />
              </div>
              <input
                placeholder="Medical Condition / Clinical Requirements"
                value={newPatient.condition}
                onChange={(e) => setNewPatient({ ...newPatient, condition: e.target.value })}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white"
              />
              <div className="flex gap-2 justify-end">
                <Button type="button" size="sm" variant="outline" onClick={() => setShowAddPatient(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" className="bg-teal-600 text-white cursor-pointer">
                  Save Patient
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Saved Addresses */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-600" /> Saved Care Addresses
          </h2>

          <div className="space-y-3">
            {savedAddresses.map((a) => (
              <div key={a.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-xs text-teal-800 bg-teal-100 px-2 py-0.5 rounded uppercase">
                    {a.label}
                  </span>
                  <p className="text-xs text-slate-700 mt-1 font-medium">{a.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
