import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../../model/types/article';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { VStack } from 'shared/ui/Stack';

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {

  return (
    <VStack align='center' max className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </VStack>
  );
});