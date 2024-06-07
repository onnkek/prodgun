import type { Meta, StoryObj } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
