import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../../model/types/article';
import { Code } from 'shared/ui/Code';

export interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {

  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});