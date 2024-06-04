import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateScheme) =>
  state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateScheme) =>
  state.articleDetailsPage?.recommendations?.error;