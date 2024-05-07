import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
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
    theme: ButtonTheme.CLEAR
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ClearInvertedLight: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const OutlineLight: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
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
    theme: ButtonTheme.CLEAR
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const ClearInvertedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OutlineDarkSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OutlineDarkSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const BackgroundLight: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const BackgroundInvertedLight: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const BackgroundDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
