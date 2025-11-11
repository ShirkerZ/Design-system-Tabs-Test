import React from 'react';

import { getClassNames } from '../../utils/getClassNames';
import { useTabsContext } from '../../providers/TabsContext';
import { Badge, BadgeProps } from '../Badge/Badge';

import './Tab.scss';

export interface TabProps {
  label: string;
  variant?: 'pill' | 'underline';
  selected?: boolean;
  className?: string;
  badge?: BadgeProps;
  onClick?: () => void;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(({ label, variant, selected, className, onClick, badge }, ref) => {
  const { variant: contextVariant } = useTabsContext();
  const tabVariant = variant ?? contextVariant ?? 'pill';

  const classNames = getClassNames('tab', { tabVariant, ...(selected && { selected: 'selected' }), className });
  return (
    <button className={classNames} onClick={onClick} ref={ref} role='tab' aria-selected={selected}>
      {label} {badge && <Badge {...badge} />}
    </button>
  );
});
