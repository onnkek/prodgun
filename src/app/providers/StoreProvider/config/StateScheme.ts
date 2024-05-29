import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  StateFromReducersMapObject,
  UnknownAction
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/Article';
import { CounterScheme } from 'entities/Counter';
import { ProfileScheme } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import { AddCommentFormScheme } from 'features/addCommentForm';
import { ArticleDetailsCommentsScheme } from 'pages/ArticleDetailsPage';
import { ArticlesPageScheme } from 'pages/ArticlesPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;

  // async
  loginForm?: LoginScheme;
  profile?: ProfileScheme;
  articleDetails?: ArticleDetailsScheme;
  articleDetailsComments?: ArticleDetailsCommentsScheme;
  addCommentForm?: AddCommentFormScheme;
  articlesPage?: ArticlesPageScheme;
};

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: (state: StateScheme, action: UnknownAction) => StateFromReducersMapObject<ReducersMapObject<StateScheme>>;
  add: (key: StateSchemeKey, reducer: Reducer) => void;
  remove: (key: StateSchemeKey) => void;
};

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager;
};

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateScheme;
}