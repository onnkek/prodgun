import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '1', content: 'One' },
      { value: '2', content: 'Two' },
      { value: '3', content: 'Three' },
    ]
  },
};
