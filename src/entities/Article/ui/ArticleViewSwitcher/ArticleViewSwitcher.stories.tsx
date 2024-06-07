import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSwitcher } from './ArticleViewSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticleViewSwitcher> = {
  title: 'entities/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
