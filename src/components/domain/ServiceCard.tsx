import React from 'react';
import type { Service } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Activity, HeartPulse, UserCheck, Clock, Zap, Stethoscope, ShieldPlus, Heart, Baby, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

export interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
  selected?: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-6 h-6 text-brand-teal" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-brand-teal" />,
  UserCheck: <UserCheck className="w-6 h-6 text-brand-teal" />,
  Clock: <Clock className="w-6 h-6 text-brand-teal" />,
  Zap: <Zap className="w-6 h-6 text-brand-teal" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-brand-teal" />,
  ShieldPlus: <ShieldPlus className="w-6 h-6 text-brand-teal" />,
  Heart: <Heart className="w-6 h-6 text-brand-teal" />,
  Baby: <Baby className="w-6 h-6 text-brand-teal" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  selected = false
}) => {
  return (
    <Card
      variant={selected ? 'interactive' : 'default'}
      className={clsx(
        'flex flex-col justify-between h-full transition-all duration-200',
        selected && 'border-brand-teal ring-2 ring-brand-teal/20 bg-canvas-teal/10'
      )}
    >
      <div className="space-y-4">
        {/* Header Icon + Pricing */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-canvas-teal border border-teal-100 flex items-center justify-center shrink-0">
            {ICON_MAP[service.iconName] || <Activity className="w-6 h-6 text-brand-teal" />}
          </div>
          <div className="text-right">
            <span className="text-xl font-extrabold text-brand-teal">
              ₹{service.pricing.basePrice}
            </span>
            <span className="text-xs text-text-muted block font-medium">
              /{service.pricing.priceUnit.replace('per_', '')}
            </span>
          </div>
        </div>

        {/* Name & Description */}
        <div>
          <h3 className="font-bold text-lg text-text-primary leading-snug">
            {service.name}
          </h3>
          <p className="text-xs text-text-muted mt-1.5 leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Key Inclusions */}
        <div className="space-y-1.5 pt-2 border-t border-border-light">
          {service.keyInclusions.slice(0, 3).map((inclusion, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
              <span className="truncate">{inclusion}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-border-light flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-text-muted">
          Est: {service.estimatedDuration}
        </span>
        {onSelect && (
          <Button
            variant={selected ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onSelect(service)}
          >
            {selected ? 'Selected' : 'Book Service'}
          </Button>
        )}
      </div>
    </Card>
  );
};
