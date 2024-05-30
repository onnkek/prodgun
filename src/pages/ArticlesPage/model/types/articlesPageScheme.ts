import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlesPageScheme extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  _inited?: boolean;
  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
}