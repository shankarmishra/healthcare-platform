import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

export interface RatingStarsProps {
  rating: number; // 0-5
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewCount,
  size = 'md',
  showNumber = true
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="inline-flex items-center gap-1 select-none">
      <Star className={clsx(iconSizes[size], 'fill-amber-400 text-amber-400 shrink-0')} />
      {showNumber && (
        <span className={clsx('font-bold text-text-primary ml-0.5', textSizes[size])}>
          {rating > 0 ? rating.toFixed(1) : 'New'}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={clsx('text-text-muted', textSizes[size])}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
