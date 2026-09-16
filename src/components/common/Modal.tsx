import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = 'md'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-md',
    md: 'max-w-[560px]', // Design System standard modal max-width
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className={clsx(
          'relative w-full bg-white rounded-card-lg shadow-floating border border-border-default z-10 flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200',
          maxWidthClasses[maxWidth]
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Header */}
        {(title || subtitle) && (
          <div className="flex items-start justify-between p-6 pb-4 border-b border-border-light">
            <div>
              {title && (
                <h3 id="modal-title" className="text-xl font-bold text-text-primary">
                  {title}
                </h3>
              )}
              {subtitle && <p className="text-sm text-text-muted mt-1">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-canvas-tertiary transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-4 px-6 bg-canvas-secondary border-t border-border-light">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
