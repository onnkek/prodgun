import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK)],
};