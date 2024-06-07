import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../../model/types/article';
import { Code } from 'shared/ui/Code';
import { VStack } from 'shared/ui/Stack';

export interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {

  return (
    <VStack align='center' max className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </VStack>
  );
});