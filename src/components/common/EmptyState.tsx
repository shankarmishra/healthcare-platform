import React from 'react';
import { Button } from './Button';
import { SearchX } from 'lucide-react';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  illustrationSrc?: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  illustrationSrc,
  title,
  description,
  actionLabel,
  onAction,
  className
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto ${className || ''}`}>
      {illustrationSrc ? (
        <img src={illustrationSrc} alt="" className="w-40 h-28 object-contain mb-4" />
      ) : (
        <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 border border-teal-100 shadow-xs">
          {icon || <SearchX className="w-8 h-8" />}
        </div>
      )}
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" className="cursor-pointer">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
