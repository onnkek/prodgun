import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PrimaryLight: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ErrorLight: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const OnlyTitleLight: Story = {
  args: {
    title: 'Title lorem one two three'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const OnlyTextLight: Story = {
  args: {
    text: 'Text description description description description'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const ErrorDark: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem one two three'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text description description description description'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const SizeL: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description',
    size: TextSize.L
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SizeMDark: Story = {
  args: {
    title: 'Title lorem one two three',
    text: 'Text description description description description',
    size: TextSize.M
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};



