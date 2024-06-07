import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfinityList } from './ArticleInfinityList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleInfinityList> = {
  title: 'pages/ArticleInfinityList',
  component: ArticleInfinityList,
};

export default meta;
type Story = StoryObj<typeof ArticleInfinityList>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};
