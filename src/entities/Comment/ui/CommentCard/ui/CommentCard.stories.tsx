import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CommentCard> = {
  title: 'shared/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
