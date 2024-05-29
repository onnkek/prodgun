import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'shared/ArticleList',
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
