import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ColumnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ColumnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    )
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};