import { ArticleList, ArticleView } from 'entities/Article';
import { useArticleRecList } from '../../api/articleRecommendationsApi';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';

export interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = ({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation();

  const { data: articles, isLoading, error } = useArticleRecList(4);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Recommend')}
      />
      <ArticleList
        articles={articles}
        target='_blank'
        view={ArticleView.PLATE}
        virtualized={false}
      />
    </VStack>
  );
};