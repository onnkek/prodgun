import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Test comment',
      user: {
        id: '1',
        username: 'user'
      }
    }
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Test comment',
      user: {
        id: '1',
        username: 'user'
      }
    },
    isLoading: true
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
