import React from 'react';
import { clsx } from 'clsx';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  width,
  height
}) => {
  const variantClasses = {
    text: 'h-4 w-3/4 rounded-sm',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
    card: 'rounded-2xl h-40 w-full'
  };

  return (
    <div
      className={clsx(
        'bg-slate-200/80 animate-pulse',
        variantClasses[variant],
        className
      )}
      style={{
        width: width !== undefined ? width : undefined,
        height: height !== undefined ? height : undefined
      }}
    />
  );
};

export const ProfessionalCardSkeleton: React.FC = () => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 animate-pulse">
    <div className="flex items-center gap-4">
      <Skeleton variant="circular" className="w-14 h-14" />
      <div className="space-y-2 flex-1">
        <Skeleton variant="text" className="w-1/2 h-4" />
        <Skeleton variant="text" className="w-3/4 h-3" />
      </div>
    </div>
    <Skeleton variant="rectangular" className="h-12 w-full" />
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 4 }) => (
  <div className="space-y-3 animate-pulse">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="h-12 bg-slate-100 rounded-xl w-full" />
    ))}
  </div>
);
