import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'ArticleDetails/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      console.log(articleId)
      const response = await extra.api.get<Article>(`/articles/${articleId}`);
      console.log(response)
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    }
    catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);