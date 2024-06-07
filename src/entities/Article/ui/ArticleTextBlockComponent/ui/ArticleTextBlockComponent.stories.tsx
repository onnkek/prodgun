import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../../model/types/article';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'entities/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Do reprehenderit elit sit enim.',
      paragraphs: [
        'Et in dolor nisi ad cupidatat cillum duis incididunt ea enim incididunt magna. Ipsum quis commodo enim anim aute exercitation eiusmod pariatur proident mollit. Consequat cillum elit ipsum nulla enim. Culpa ad veniam elit laborum amet eiusmod ex laborum exercitation voluptate ad. Commodo duis aliquip est velit et dolore culpa aliquip aliquip nostrud elit ipsum aliqua aute. Fugiat velit esse aliqua ipsum elit cupidatat ea id esse dolor exercitation incididunt aliquip magna.',
        'Commodo ut labore veniam reprehenderit culpa. Deserunt mollit cupidatat incididunt nisi dolore cupidatat quis. Adipisicing duis incididunt reprehenderit minim officia ex mollit officia dolor eu in. Lorem quis labore ipsum pariatur aute ea aliquip amet dolore ut enim. Nulla consectetur est nisi do minim dolore reprehenderit aute ex excepteur proident dolor elit Lorem. Do fugiat incididunt quis et minim dolore anim consequat incididunt aliquip.',
        'Elit duis ullamco commodo nisi sunt cillum amet do aliqua fugiat fugiat cupidatat. Ex elit cillum sunt nostrud nulla ut ad aute aliqua qui. Lorem id veniam laborum ipsum. Anim proident voluptate ipsum nostrud qui pariatur fugiat adipisicing ex proident deserunt incididunt magna. Aliquip culpa exercitation exercitation magna velit. Officia qui ex officia occaecat labore nulla eiusmod esse do proident sit aliquip.'
      ]
    }
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
