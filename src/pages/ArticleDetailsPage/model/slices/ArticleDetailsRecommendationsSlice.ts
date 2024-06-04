import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { ArticleDetailsRecommendationsScheme } from '../types/ArticleDetailsRecommendationsScheme';
import { Article } from 'entities/Article';
import { StateScheme } from 'app/providers/StoreProvider';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateScheme>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const ArticleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsScheme>({
    isLoading: false,
    ids: [],
    error: undefined,
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsRecommendationsReducer } = ArticleDetailsRecommendationsSlice;
