import { Meta, StoryObj } from '@storybook/react-vite';
import { Tab } from './Tab';

const meta = {
  component: Tab,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['pill', 'underline'],
      description: 'The variant of the tab. Can be `pill`, `underline`. The pill variant is the default.',
    },
    label: { control: 'text', description: 'The label of the tab.' },
    selected: { control: 'boolean', description: 'Whether the tab is selected.' },
    badge: { control: 'object', description: 'The props for the badge component to display on the tab.' },
    onClick: { action: 'clicked', description: 'The function to call when the tab is clicked.' },
  },
  parameters: {
    componentSubtitle: 'A tab component for displaying labels in a tabbed interface. Can be used standalone or as part of a Tabs component. Supports two variants (pill, underline) to convey different styles. The pill variant is the default.',
  },
  
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default tab component which takes "pill" variant as default',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: false,
  },
};

export const PillSelected: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: true,
  },
};

export const PillWithBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a default badge',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: false,
    badge: {
      label: 'Badge',
    },
  },
};

export const PillWithBadgeSelected: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: true,
    badge: {
      label: 'Badge',
    },
  },
};

export const PillWithBadgePositive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a positive badge',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: false,
    badge: {
      label: 'Badge',
      variant: 'positive',
    },
  },
};

export const PillSelectedWithBadgePositive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a positive badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: true,
    badge: {
      label: 'Badge',
      variant: 'positive',
    },
  },
};

export const PillWithBadgeNegative: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a negative badge',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: false,
    badge: {
      label: 'Badge',
      variant: 'negative',
    },
  },
};

export const PillSelectedWithBadgeNegative: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "pill" variant and a negative badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'pill',
    selected: true,
    badge: {
      label: 'Badge',
      variant: 'negative',
    },
  },
};

export const Underline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: false,
  },
};

export const UnderlineSelected: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: true,
  },
};

export const UnderlineWithBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant and a default badge',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: false,
    badge: {
      label: 'Badge',
    },
  },
};

export const UnderlineSelectedWithBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant and a badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: true,
    badge: {
      label: 'Badge',
    },
  },
};
export const UnderlineSelectedWithBadgePositive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant and a positive badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: true,
    badge: {
      label: 'Badge',
      variant: 'positive',
    },
  },
};
export const UnderlineSelectedWithBadgeNegative: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The tab component with "underline" variant and a negative badge and is selected',
      },
    },
  },
  args: {
    label: 'Label',
    variant: 'underline',
    selected: true,
    badge: {
      label: 'Badge',
      variant: 'negative',
    },
  },
};
