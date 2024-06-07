import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../../model/types/article';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'entities/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.IMAGE,
      title: 'Image',
      src: 'https://www.onlineprinters.co.uk/magazine/wp-content/uploads/2019/08/lorem-ipsum.jpg'
    }
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
