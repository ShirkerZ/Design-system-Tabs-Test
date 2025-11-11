import { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'positive', 'negative'],
      description: 'The variant of the badge. Can be `neutral`, `positive`, or `negative`. The neutral variant is the default.',
    },
    label: { control: 'text', description: 'The label of the badge.' },
  },
  args: {
    label: 'Badge',
  },
  parameters: {
    componentSubtitle: 'A badge component for displaying labels or status indicators. Supports three variants (neutral, positive, negative) to convey different states. The neutral variant is the default.',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default badge component which takes which takes "neutral" variant as default',
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
  },
};
