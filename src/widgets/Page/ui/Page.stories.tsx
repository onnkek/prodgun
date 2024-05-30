import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
