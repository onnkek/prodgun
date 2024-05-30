import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StateScheme } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageScheme } from '../types/articlesPageScheme';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateScheme>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageScheme>({
    isLoading: false,
    ids: [],
    error: undefined,
    entities: {},
    view: ArticleView.PLATE,
    page: 1,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, String(action.payload));
    },
    initState: state => {
      state._inited = true;
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;