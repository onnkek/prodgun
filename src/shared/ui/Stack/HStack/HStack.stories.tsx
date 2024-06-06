import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from './HStack';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof HStack> = {
  title: 'shared/HStack',
  component: HStack,
};

export default meta;
type Story = StoryObj<typeof HStack>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
