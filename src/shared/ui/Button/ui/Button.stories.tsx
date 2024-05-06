import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const PrimaryLight: Story = {
  args: {
    children: 'Text'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const OutlineLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};