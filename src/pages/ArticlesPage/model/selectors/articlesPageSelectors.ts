import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.articlesPage?.view || ArticleView.PLATE;
export const getArticlesPageNumber = (state: StateScheme) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateScheme) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateScheme) => state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateScheme) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateScheme) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateScheme) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateScheme) => state.articlesPage?.type ?? ArticleType.ALL;