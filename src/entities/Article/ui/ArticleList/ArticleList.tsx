import { Text } from 'shared/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({ className, articles, isLoading, view = ArticleView.LIST, target }: ArticleListProps) => {
  const { t } = useTranslation();
  const renderArticles = (article: Article) => {
    return <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />;
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ?
        articles.map(renderArticles) :
        null}
      {isLoading && new Array(view === ArticleView.PLATE ? 9 : 3).fill(0).map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
      ))}
    </div>
  );
};