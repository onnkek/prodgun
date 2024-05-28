import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Test comment',
        user: {
          id: '1',
          username: 'user'
        }
      },
      {
        id: '2',
        text: 'Test comment 2',
        user: {
          id: '2',
          username: 'user2'
        }
      }
    ]
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};
