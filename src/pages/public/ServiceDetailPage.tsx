import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookings } from '../../context/BookingContext';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { HealthcareTexture } from '../../components/common/HealthcareTexture';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  UserCheck,
  PhoneCall,
  HeartPulse
} from 'lucide-react';
import type { Service } from '../../types';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { services } = useBookings();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service: Service = services.find((s) => s.id === id) || services[0];

  const faqs = [
    {
      q: 'How does staff assignment work for this service?',
      a: 'Once you submit your booking requirements, our Central Operations Desk matches and assigns a qualified in-house staff member based on your clinical needs, location proximity, and requested time slot.'
    },
    {
      q: 'What equipment do I need to prepare at home?',
      a: 'Our staff bring standard clinical consumables (sterile gloves, BP monitor, pulse oximeter). For specialized procedures (e.g. PICC dressings or tracheostomy suctioning), surgeon discharge summary notes and prescribed medications should be available at home.'
    },
    {
      q: 'Can I request night shifts or 24-hour live-in care?',
      a: 'Yes. Night shifts (10:00 PM to 08:00 AM) and 24-hour live-in caregiver options are fully supported with transparent night surcharges included at checkout.'
    },
    {
      q: 'What is the cancellation policy?',
      a: 'Bookings are 100% refundable if cancelled up to 2 hours before the scheduled shift start time.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 text-left relative bg-white">
      <HealthcareTexture type="care-pathway" opacity={0.03} />

      {/* Hero Header */}
      <section className="bg-canvas-secondary border-b border-border-default pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-canvas-teal text-brand-teal px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-teal-200 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-brand-teal" /> Verified In-House Clinical Service
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => navigate(`/client/booking/wizard?serviceId=${service.id}`)}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="bg-brand-teal hover:bg-brand-teal-hover font-bold text-white px-8 py-4 text-base cursor-pointer shadow-subtle"
                >
                  Book This Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/client/support')}
                  leftIcon={<PhoneCall className="w-4 h-4 text-brand-teal" />}
                  className="font-bold border-border-default cursor-pointer text-text-primary"
                >
                  Talk To Our Care Team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-border-default shadow-subtle space-y-4">
                <div className="aspect-video rounded-2xl bg-canvas-teal flex items-center justify-center border border-teal-200 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-brand-teal border border-teal-200">
                    ₹{service.pricing.basePrice} / unit
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-canvas-secondary rounded-xl border border-border-default space-y-0.5">
                    <span className="text-text-muted font-semibold block">Duration</span>
                    <span className="font-extrabold text-text-primary block">{service.estimatedDuration}</span>
                  </div>
                  <div className="p-3 bg-canvas-secondary rounded-xl border border-border-default space-y-0.5">
                    <span className="text-text-muted font-semibold block">Staff License</span>
                    <span className="font-extrabold text-brand-teal block">{service.requiredQualifications.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* WHO IS IT FOR? */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">Clinical Care Scope</span>
            <h2 className="text-2xl font-extrabold text-text-primary mt-1">Who Is This Service For?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Post-Surgery Recovery', desc: 'Patients discharged after knee replacement, cardiac, or abdominal surgery requiring sterile wound dressing & IV care.' },
              { title: 'Elderly & Senior Citizens', desc: 'Seniors with chronic conditions (hypertension, diabetes, dementia) needing daily vital monitoring and medication management.' },
              { title: 'Bedridden Patients', desc: 'Patients needing total assistance for bathing, diaper changes, bedsore prevention, and frequent bed rotations.' },
              { title: 'Long-Term Rehab', desc: 'Patients recovering from stroke or physical trauma requiring structured daily clinical oversight at home.' }
            ].map((item) => (
              <Card key={item.title} className="p-5 border-border-default shadow-subtle space-y-2">
                <div className="w-10 h-10 rounded-xl bg-canvas-teal text-brand-teal flex items-center justify-center font-extrabold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-text-primary text-sm">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* WHAT WE PROVIDE VS WHAT WE DON'T PROVIDE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-canvas-teal p-6 rounded-3xl border border-teal-200 space-y-4">
            <h3 className="font-extrabold text-teal-900 text-lg flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-brand-teal" /> What We Provide
            </h3>
            <ul className="space-y-3 text-xs text-teal-950 font-semibold">
              {service.keyInclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rose-50/60 p-6 rounded-3xl border border-rose-200 space-y-4">
            <h3 className="font-extrabold text-rose-900 text-lg flex items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-600" /> What We Don't Provide
            </h3>
            <ul className="space-y-3 text-xs text-rose-950 font-semibold">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Emergency surgical room interventions or ambulance transport</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Prescription medication sales (prescriptions must be filled at licensed pharmacies)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Domestic household cleaning unrelated to patient hygiene</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CARE OPTIONS & SHIFTS */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">Flexible Duty Schedules</span>
            <h2 className="text-2xl font-extrabold text-text-primary mt-1">Available Shift & Duration Options</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { duration: '2 Hours', label: 'Short Visit', desc: 'Procedure or dressing' },
              { duration: '6 Hours', label: 'Half Day', desc: 'Morning or evening shift' },
              { duration: '12 Hours', label: 'Day / Night Shift', desc: 'Full continuous care' },
              { duration: '24 Hours', label: 'Live-In Care', desc: 'Round-the-clock support' }
            ].map((opt) => (
              <div key={opt.duration} className="p-4 rounded-2xl border border-border-default bg-white space-y-1 text-left">
                <span className="text-xs font-extrabold text-brand-teal block">{opt.duration}</span>
                <span className="text-sm font-bold text-text-primary block">{opt.label}</span>
                <span className="text-[11px] text-text-muted block">{opt.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT TO EXPECT TIMELINE */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">Care Delivery Process</span>
            <h2 className="text-2xl font-extrabold text-text-primary mt-1">What To Expect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-left">
            {[
              { step: '01', title: 'Request', desc: 'Specify care requirements' },
              { step: '02', title: 'Review', desc: 'Ops desk evaluates needs' },
              { step: '03', title: 'Assign', desc: 'Verified staff assigned' },
              { step: '04', title: 'Confirm', desc: 'Staff details & time sent' },
              { step: '05', title: 'Check-In', desc: 'QR code arrival verification' },
              { step: '06', title: 'Care & Log', desc: 'Clinical summary logged' }
            ].map((t) => (
              <div key={t.step} className="p-4 bg-canvas-secondary rounded-2xl border border-border-default space-y-1">
                <span className="text-xs font-mono font-extrabold text-brand-teal block">{t.step}</span>
                <h4 className="font-extrabold text-text-primary text-sm">{t.title}</h4>
                <p className="text-[11px] text-text-muted leading-tight">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STAFF REQUIREMENT GUARANTEE */}
        <section className="bg-canvas-teal p-6 rounded-3xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-teal-950 text-base">Internal Operations Assignment Guarantee</h3>
              <p className="text-xs text-teal-800 font-medium">
                Assigned by our central operations team based on care requirements, location proximity, and license qualification.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() => navigate(`/client/booking/wizard?serviceId=${service.id}`)}
            className="bg-brand-teal text-white font-bold text-xs px-6 py-3 shrink-0 cursor-pointer"
          >
            Book Service Now
          </Button>
        </section>

        {/* SERVICE FAQs */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">Frequently Asked Questions</span>
            <h2 className="text-2xl font-extrabold text-text-primary mt-1">Service FAQs</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="p-4 rounded-2xl border border-border-default bg-white cursor-pointer transition-all space-y-2 text-left"
              >
                <div className="flex justify-between items-center font-extrabold text-text-primary text-sm">
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-brand-teal" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
                </div>
                {openFaq === idx && (
                  <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-border-light">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky Bottom Action Bar on Desktop */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border-default p-4 z-40 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-text-muted block font-semibold">{service.name}</span>
            <span className="text-base font-extrabold text-brand-teal">₹{service.pricing.basePrice} / unit</span>
          </div>

          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate(`/client/booking/wizard?serviceId=${service.id}`)}
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="bg-brand-teal hover:bg-brand-teal-hover font-bold text-white px-8 cursor-pointer shadow-subtle"
          >
            Book This Service
          </Button>
        </div>
      </div>
    </div>
  );
};
