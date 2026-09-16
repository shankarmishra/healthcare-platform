import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer
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

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md sm:max-w-[480px] bg-white shadow-floating border-l border-border-default flex flex-col animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="flex items-start justify-between p-6 border-b border-border-light bg-canvas-secondary">
            <div>
              {title && <h2 className="text-lg font-bold text-text-primary">{title}</h2>}
              {subtitle && <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-text-muted hover:text-text-primary rounded-full hover:bg-canvas-tertiary transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 p-6 overflow-y-auto">{children}</div>

          {/* Drawer Footer */}
          {footer && (
            <div className="p-4 px-6 border-t border-border-light bg-canvas-secondary flex items-center justify-end gap-3">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
