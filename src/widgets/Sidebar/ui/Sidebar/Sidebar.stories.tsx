import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK)],
};