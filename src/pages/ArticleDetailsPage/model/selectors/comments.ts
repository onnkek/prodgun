import { StateScheme } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateScheme) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateScheme) => state.articleDetailsComments?.error;