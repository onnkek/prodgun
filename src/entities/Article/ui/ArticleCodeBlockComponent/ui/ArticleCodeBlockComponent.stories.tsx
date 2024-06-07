import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../../model/types/article';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: 'export const Code = ({ className, children }: CodeProps) => {\n  return (\n    <pre className={classNames(cls.code, {}, [className])}>\n      <Button className={cls.copyBtn}>Copy</Button>\n      <code>\n        {children}\n      </code>\n    </pre>\n  );\n};'
    }
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
