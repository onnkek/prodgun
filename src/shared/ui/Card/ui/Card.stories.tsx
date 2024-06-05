import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Text } from '../../Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    children: <Text title='Test title' text='Test text' />
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
