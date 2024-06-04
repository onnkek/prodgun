import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageScheme extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  _inited?: boolean;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

}