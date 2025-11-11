import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tabs } from './Tabs';
import { BadgeProps } from '../Badge/Badge';

const meta = {
  component: Tabs,
  parameters: {
    componentSubtitle: 'A tabs component for displaying a list of tabs and their content. It uses the TabsContext to provide the variant to the tabs and their content to the Tab component. Supports two variants (pill, underline) to convey different styles. The pill variant is the default.',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['pill', 'underline'],
      description: 'The variant of the tabs. Can be `pill`, `underline`. The pill variant is the default.',
    },
    children: { control: 'object', description: 'The tabs to display in the tabs component.' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default tabs component which takes "pill" variant as default',
      },
    },
  },
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const badgePositive: BadgeProps = { label: 'Active', variant: 'positive' };
    const badgeNegative: BadgeProps = { label: 'Warning', variant: 'negative' };

    return (
      <Tabs {...args}>
        <Tabs.Tab label='Pill variant' variant='pill' selected={selectedTab === 0} onClick={() => setSelectedTab(0)} />
        <Tabs.Tab label='Underline variant' variant='underline' selected={selectedTab === 1} onClick={() => setSelectedTab(1)} />
        <Tabs.Tab label='Default' selected={selectedTab === 2} onClick={() => setSelectedTab(2)} />
        <Tabs.Tab label='Positive badge' badge={badgePositive} selected={selectedTab === 3} onClick={() => setSelectedTab(3)} />
        <Tabs.Tab label='Negative badge' badge={badgeNegative} selected={selectedTab === 4} onClick={() => setSelectedTab(4)} />
      </Tabs>
    );
  },
};

const SkeletonVariantA = () => {
  return <div style={{ width: '100%', height: '40px', backgroundColor: '#b8b8c2', borderRadius: '4px' }} />;
};
const SkeletonVariantB = () => {
  return <div style={{ width: '100px', height: '100px', backgroundColor: '#b8b8c2', borderRadius: '4px' }} />;
};
const SkeletonPageVariantA = () => {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '24px', flexDirection: 'column' }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonVariantA key={index} />
      ))}
    </div>
  );
};
const SkeletonPageVariantB = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonVariantB key={index} />
      ))}
    </div>
  );
};

export const TabsWithContent: Story = {
  args: {
    children: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'The tabs component with page like content',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['pill', 'underline'],
    },
  },
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const badgePositive: BadgeProps = { label: 'Active', variant: 'positive' };
    const badgeNegative: BadgeProps = { label: 'Warning', variant: 'negative' };

    return (
      <div
        style={{ width: '500px', display: 'flex', gap: '24px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
      >
        <Tabs {...args}>
          <Tabs.Tab label='Pill variant' variant='pill' selected={selectedTab === 0} onClick={() => setSelectedTab(0)} />
          <Tabs.Tab label='Underline variant' variant='underline' selected={selectedTab === 1} onClick={() => setSelectedTab(1)} />
          <Tabs.Tab label='Default' selected={selectedTab === 2} onClick={() => setSelectedTab(2)} />
          <Tabs.Tab label='Positive badge' badge={badgePositive} selected={selectedTab === 3} onClick={() => setSelectedTab(3)} />
          <Tabs.Tab label='Negative badge' badge={badgeNegative} selected={selectedTab === 4} onClick={() => setSelectedTab(4)} />
        </Tabs>
        <div className='pages' style={{ width: '100%' }}>
          {selectedTab % 2 === 0 && <SkeletonPageVariantA />}
          {selectedTab % 2 === 1 && <SkeletonPageVariantB />}
        </div>
      </div>
    );
  },
};
