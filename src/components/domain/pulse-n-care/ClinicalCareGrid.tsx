import React, { useState } from 'react';
import { Card } from '../../common/Card';
import { VitalsWaveformSVG } from './vectors/VitalsWaveformSVG';
import { MedicationTraySVG } from './vectors/MedicationTraySVG';
import { WoundCareSVG } from './vectors/WoundCareSVG';
import { TubeFeedingSVG } from './vectors/TubeFeedingSVG';
import { CatheterStomaSVG } from './vectors/CatheterStomaSVG';
import { RespiratoryEquipmentSVG } from './vectors/RespiratoryEquipmentSVG';
import { Activity, Pill, ShieldCheck, Stethoscope, Droplet, Wind, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';

export const ClinicalCareGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('vitals');

  const capabilities = [
    {
      id: 'vitals',
      icon: <Activity className="w-5 h-5 text-brand-teal" />,
      title: 'Vitals Tracking & Clinical Observation',
      shortDesc: 'Regular monitoring of vital parameters with digital charting for attending physician review.',
      details: [
        'Blood Pressure (BP) measurement & logging',
        'Pulse Rate & Heart Rate observation',
        'Oxygen Saturation (SpO₂) monitoring via oximeter',
        'Body Temperature recording',
        'Blood Glucose (GRBS) monitoring via glucometer'
      ],
      microUI: <VitalsWaveformSVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-vitals.webp'
    },
    {
      id: 'medication',
      icon: <Pill className="w-5 h-5 text-brand-teal" />,
      title: 'Medication Administration',
      shortDesc: 'Accurate and timely administration of prescribed medications within professional nurse scope.',
      details: [
        'Oral medication timely dosage administration',
        'Insulin injection administration & timing',
        'Intramuscular (IM) injection administration',
        'Intravenous (IV) fluids & IV medication management as prescribed'
      ],
      microUI: <MedicationTraySVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-medication.webp'
    },
    {
      id: 'wound',
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      title: 'Wound & Surgical Care',
      shortDesc: 'Sterile dressing techniques for surgical incisions, pressure sores, and diabetic wounds.',
      details: [
        'Post-operative surgical incision dressing',
        'Bedsore / Pressure ulcer sterile dressing & grade assessment',
        'Diabetic foot ulcer cleaning & protective care',
        'Aseptic technique adherence for infection prevention'
      ],
      microUI: <WoundCareSVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-wound-care.webp'
    },
    {
      id: 'tube',
      icon: <Droplet className="w-5 h-5 text-brand-teal" />,
      title: 'Tube Feeding Management',
      shortDesc: 'Enteral nutrition administration, tube hygiene, and flushing routines.',
      details: [
        'Ryle’s / Nasogastric (NG) tube meal administration',
        'Percutaneous Endoscopic Gastrostomy (PEG) feeding support',
        'Tube flushing & blockage prevention routines',
        'Sanitization of feeding equipment & posture positioning'
      ],
      microUI: <TubeFeedingSVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-tube-feeding.webp'
    },
    {
      id: 'catheter',
      icon: <Stethoscope className="w-5 h-5 text-brand-teal" />,
      title: 'Catheter & Stoma Care',
      shortDesc: 'Catheter hygiene, drainage bag management, and stoma bag maintenance.',
      details: [
        'Foley’s urinary catheter care & bag drainage logging',
        'Colostomy / Stoma bag change & skin barrier care',
        'Stoma-site hygiene & infection monitoring',
        'Perineal hygiene routines'
      ],
      microUI: <CatheterStomaSVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-catheter-stoma.webp'
    },
    {
      id: 'respiratory',
      icon: <Wind className="w-5 h-5 text-brand-teal" />,
      title: 'Respiratory & Medical Equipment Handling',
      shortDesc: 'Assistance with home medical equipment based on the patient’s prescribed care plan.',
      details: [
        'Oxygen Concentrator & Cylinder flow adjustment',
        'Suction Machine operation & airway clearance support',
        'CPAP / BiPAP mask fitting & compliance',
        'Home ventilator monitoring & alarm awareness'
      ],
      microUI: <RespiratoryEquipmentSVG className="mt-3" />,
      image: '/assets/services/home-nursing/pulse-n-care-equipment.webp'
    }
  ];

  return (
    <section className="py-12 bg-canvas-secondary border-b border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Section Editorial Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest block">
            Clinical Scope of Home Nursing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
            Clinical care, everyday support and continuous observation.
          </h2>
          <p className="text-sm text-text-secondary">
            Pulse n Care home nursing is designed around the patient's care requirements, helping families manage clinical routines, daily support, and ongoing observation from home.
          </p>
        </div>

        {/* 2-Column Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <Card
                key={cap.id}
                className={clsx(
                  'p-6 space-y-4 border transition-all bg-white shadow-subtle relative',
                  isExpanded ? 'border-brand-teal ring-1 ring-brand-teal/30' : 'border-border-default'
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-canvas-teal flex items-center justify-center shrink-0 border border-teal-200">
                      {cap.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-text-primary text-base">{cap.title}</h3>
                      <p className="text-xs text-text-secondary mt-0.5">{cap.shortDesc}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : cap.id)}
                    className="p-1.5 rounded-lg text-text-muted hover:text-brand-teal hover:bg-canvas-tertiary transition-colors cursor-pointer shrink-0"
                    title={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Optional Image Header */}
                {cap.image && isExpanded && (
                  <div className="rounded-xl overflow-hidden h-44 border border-border-default">
                    <img src={cap.image} alt={cap.title} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Dedicated Animated Vector SVG Component */}
                {cap.microUI}

                {/* Detailed Capability Checklist */}
                {isExpanded && (
                  <div className="pt-3 border-t border-border-light space-y-2 text-xs">
                    <span className="font-extrabold text-brand-teal uppercase tracking-wider text-[10px] block">
                      Prescribed Care Scope:
                    </span>
                    <ul className="space-y-1.5 text-text-secondary">
                      {cap.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
