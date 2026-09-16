import React from 'react';
import { clsx } from 'clsx';

export type TextureType =
  | 'medical-grid'
  | 'anatomical-geometry'
  | 'care-pathway'
  | 'location-mesh'
  | 'clinical-wave'
  | 'micro-dot-mesh'
  | 'material-grain'
  | 'medical-halo'
  | 'soft-cell'
  | 'cross-grid';

interface HealthcareTextureProps {
  type: TextureType;
  opacity?: number; // Default 0.04 (4%)
  className?: string;
}

export const HealthcareTexture: React.FC<HealthcareTextureProps> = ({
  type,
  opacity = 0.04,
  className
}) => {
  const textureUrl = `/assets/textures/${type}.svg`;

  return (
    <div
      className={clsx('absolute inset-0 pointer-events-none select-none z-0', className)}
      style={{
        backgroundImage: `url(${textureUrl})`,
        backgroundRepeat: 'repeat',
        opacity: opacity
      }}
      aria-hidden="true"
    />
  );
};
