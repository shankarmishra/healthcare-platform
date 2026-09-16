import React from 'react';
import { clsx } from 'clsx';
import type { BookingStatus, KYCStatus, PaymentStatus, ProfessionalStatus } from '../../types';

export type BadgeVariant =
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'neutral'
  | 'teal'
  | 'blue';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  showDot?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  showDot = true,
  className,
  icon
}) => {
  const variantStyles: Record<BadgeVariant, { bg: string; text: string; dot: string }> = {
    success: { bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    info: { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
    warning: { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' },
    danger: { bg: 'bg-rose-50 border-rose-200', text: 'text-rose-700', dot: 'bg-rose-500' },
    neutral: { bg: 'bg-slate-100 border-slate-200', text: 'text-slate-700', dot: 'bg-slate-400' },
    teal: { bg: 'bg-teal-50 border-teal-200', text: 'text-teal-700', dot: 'bg-teal-500' },
    blue: { bg: 'bg-indigo-50 border-indigo-200', text: 'text-indigo-700', dot: 'bg-indigo-500' }
  };

  const currentVariant = variantStyles[variant];

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium border rounded-badge select-none',
        currentVariant.bg,
        currentVariant.text,
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs',
        className
      )}
    >
      {showDot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0', currentVariant.dot)} />
      )}
      {icon}
      <span>{children}</span>
    </span>
  );
};

/**
 * Specialized Status Badges
 */

export const BookingStatusBadge: React.FC<{ status: BookingStatus; className?: string }> = ({
  status,
  className
}) => {
  const statusConfig: Record<BookingStatus, { label: string; variant: BadgeVariant }> = {
    DRAFT: { label: 'Draft', variant: 'neutral' },
    REQUESTED: { label: 'Requested', variant: 'warning' },
    MATCHING: { label: 'Matching', variant: 'info' },
    ASSIGNED: { label: 'Assigned', variant: 'info' },
    ACCEPTED: { label: 'Accepted', variant: 'success' },
    ON_THE_WAY: { label: 'On The Way', variant: 'info' },
    CHECKED_IN: { label: 'Checked In', variant: 'teal' },
    IN_PROGRESS: { label: 'In Progress', variant: 'teal' },
    COMPLETED: { label: 'Completed', variant: 'success' },
    PAYMENT_PENDING: { label: 'Payment Pending', variant: 'warning' },
    CLOSED: { label: 'Closed', variant: 'neutral' },
    REJECTED: { label: 'Rejected', variant: 'danger' },
    CANCELLED: { label: 'Cancelled', variant: 'danger' },
    DISPUTED: { label: 'Disputed', variant: 'danger' }
  };

  const config = statusConfig[status] || { label: status, variant: 'neutral' };
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};

export const KYCStatusBadge: React.FC<{ status: KYCStatus; className?: string }> = ({
  status,
  className
}) => {
  const kycConfig: Record<KYCStatus, { label: string; variant: BadgeVariant }> = {
    not_started: { label: 'Not Started', variant: 'neutral' },
    draft: { label: 'Draft', variant: 'neutral' },
    submitted: { label: 'Submitted', variant: 'warning' },
    under_review: { label: 'Under Review', variant: 'info' },
    approved: { label: 'Approved & Verified', variant: 'success' },
    rejected: { label: 'Rejected', variant: 'danger' },
    reupload_required: { label: 'Re-upload Needed', variant: 'warning' },
    expired: { label: 'Expired', variant: 'danger' }
  };

  const config = kycConfig[status] || { label: status, variant: 'neutral' };
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};

export const PaymentStatusBadge: React.FC<{ status: PaymentStatus; className?: string }> = ({
  status,
  className
}) => {
  const payConfig: Record<PaymentStatus, { label: string; variant: BadgeVariant }> = {
    PENDING: { label: 'Pending', variant: 'warning' },
    PROCESSING: { label: 'Processing', variant: 'info' },
    COMPLETED: { label: 'Paid', variant: 'success' },
    FAILED: { label: 'Failed', variant: 'danger' },
    REFUND_REQUESTED: { label: 'Refund Requested', variant: 'warning' },
    REFUNDED: { label: 'Refunded', variant: 'neutral' },
    DISPUTED: { label: 'Disputed', variant: 'danger' }
  };

  const config = payConfig[status] || { label: status, variant: 'neutral' };
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};

export const ProStatusBadge: React.FC<{ status: ProfessionalStatus; className?: string }> = ({
  status,
  className
}) => {
  const proConfig: Record<ProfessionalStatus, { label: string; variant: BadgeVariant }> = {
    pending_verification: { label: 'Pending Verification', variant: 'warning' },
    verified: { label: 'Verified', variant: 'success' },
    active: { label: 'Online / Available', variant: 'success' },
    offline: { label: 'Offline', variant: 'neutral' },
    busy: { label: 'In Visit', variant: 'info' },
    suspended: { label: 'Suspended', variant: 'danger' },
    deactivated: { label: 'Deactivated', variant: 'neutral' }
  };

  const config = proConfig[status] || { label: status, variant: 'neutral' };
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};
