import { ArticleList } from 'entities/Article';
import cls from './ArticleInfinityList.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

export interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = ({ className }: ArticleInfinityListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text text={t('Loading error...')} theme={TextTheme.ERROR} />;
  }

  return (
    <div className={classNames(cls.articleInfinityList, {}, [className])}>
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
        className={className}
      />
    </div>
  );
};