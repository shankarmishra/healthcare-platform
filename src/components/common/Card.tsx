import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'outlined' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'normal' | 'large';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'md', radius = 'normal', className, ...props }, ref) => {
    const baseStyles = 'bg-white border transition-all duration-200';

    const variantStyles = {
      default: 'border-border-default shadow-subtle',
      flat: 'border-transparent bg-canvas-secondary',
      outlined: 'border-border-default bg-white',
      interactive: 'border-border-default shadow-subtle hover:shadow-card hover:border-brand-teal/40 cursor-pointer active:scale-[0.995]'
    };

    const paddingStyles = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const radiusStyles = {
      normal: 'rounded-card', // 16px
      large: 'rounded-card-lg' // 20px
    };

    return (
      <div
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          radiusStyles[radius],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
