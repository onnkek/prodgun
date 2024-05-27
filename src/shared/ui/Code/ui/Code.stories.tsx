import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    text: 'export default meta;\ntype Story = StoryObj<typeof Code>;'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
