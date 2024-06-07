import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Normal: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
