import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK)],
};