import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK)],
};