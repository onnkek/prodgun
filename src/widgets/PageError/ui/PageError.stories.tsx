import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK)],
};