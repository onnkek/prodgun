import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Rectangle: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const RectangleDark: Story = {
  args: {
    width: '100%',
    height: 100,
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};
