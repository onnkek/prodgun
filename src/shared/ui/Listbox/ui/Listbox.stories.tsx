import type { Meta, StoryObj } from '@storybook/react';

import { Listbox } from './Listbox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Listbox> = {
  title: 'shared/Listbox',
  component: Listbox,
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
