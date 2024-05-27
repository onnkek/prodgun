import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../../model/types/article';
import { Text } from 'shared/ui/Text';

export interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});