import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CommentList> = {
  title: 'shared/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
