import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'entities/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
