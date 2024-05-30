import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = ({ className, articles, isLoading, view = ArticleView.LIST }: ArticleListProps) => {

  const renderArticles = (article: Article) => {
    return <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
    />
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