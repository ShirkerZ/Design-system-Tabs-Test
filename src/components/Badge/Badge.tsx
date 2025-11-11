import React from 'react';

import { getClassNames } from '../../utils/getClassNames';

import './Badge.scss';

export interface BadgeProps {
  label: string;
  variant?: 'neutral' | 'positive' | 'negative';
  className?: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ variant = 'neutral', label, className }, ref) => {
  const classNames = getClassNames('badge', { variant, className });
  return (
    <div className={classNames} aria-label='Badge' ref={ref}>
      {label}
    </div>
  );
});
