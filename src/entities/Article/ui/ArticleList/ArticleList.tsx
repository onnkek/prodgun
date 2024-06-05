import { Text } from 'shared/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { AutoSizer, List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({ className, articles, isLoading, view = ArticleView.LIST, target }: ArticleListProps) => {
  const { t } = useTranslation();
  // const renderArticles = (article: Article) => {
  //   return <ArticleListItem
  //     article={article}
  //     view={view}
  //     className={cls.card}
  //     key={article.id}
  //     target={target}
  //   />;
  // };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    );
  }

  const isList = view === ArticleView.LIST;
  const itemsPerRow = isList ? 1 : 3;
  const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={articles[i].id}
        />
      );
    }
    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    );
  };


  return (
    <WindowScroller
      onScroll={() => console.log('scroll')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        isScrolling,
        scrollTop,
        onChildScroll

      }) => (

        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isList ? 700 : 330}
            rowRenderer={rowRenderer}
            width={width ? width - 80 : 700}
            autoHeight
            scrollTop={scrollTop}
            onScroll={onChildScroll}
            isScrolling={isScrolling}
          />
          {isLoading && new Array(view === ArticleView.PLATE ? 9 : 3).fill(0).map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
          ))}
        </div>
      )}
    </WindowScroller>

    // <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
    //   {articles.length > 0 ?
    //     articles.map(renderArticles) :
    //     null}
    //   {isLoading && new Array(view === ArticleView.PLATE ? 9 : 3).fill(0).map((item, index) => (
    //     <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    //   ))}
    // </div>
  );
};