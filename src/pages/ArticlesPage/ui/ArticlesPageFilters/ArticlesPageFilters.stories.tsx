import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageFilters } from './ArticlesPageFilters';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticlePageFilters> = {
  title: 'pages/ArticlePageFilters',
  component: ArticlePageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlePageFilters>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
