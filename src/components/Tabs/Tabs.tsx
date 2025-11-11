import React from 'react';

import { getClassNames } from '../../utils/getClassNames';
import { TabsContext } from '../../providers/TabsContext';
import { Tab } from '../Tab/Tab';

import './Tabs.scss';

export interface TabsProps {
  children: React.ReactNode;
  variant?: 'pill' | 'underline';
  className?: string;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({ children, className, variant = 'pill' }, ref) => {
  const classNames = getClassNames('tabs', { variant, className });
  return (
    <TabsContext.Provider value={{ variant }}>
      <div className={classNames} role='tablist' aria-label='Tabs' ref={ref}>{children}</div>
    </TabsContext.Provider>
  );
});

const TabComponent = Object.assign(Tabs, {
  Tab: Tab,
});

export { TabComponent as Tabs };
