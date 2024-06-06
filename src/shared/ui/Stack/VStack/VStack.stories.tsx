import type { Meta, StoryObj } from '@storybook/react';

import { VStack } from './VStack';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof VStack> = {
  title: 'shared/VStack',
  component: VStack,
};

export default meta;
type Story = StoryObj<typeof VStack>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
