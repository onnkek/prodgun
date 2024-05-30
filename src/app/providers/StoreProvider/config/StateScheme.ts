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
import { UIScheme } from 'features/UI/model/types/UISchema';
import { AddCommentFormScheme } from 'features/addCommentForm';
import { ArticleDetailsCommentsScheme } from 'pages/ArticleDetailsPage';
import { ArticlesPageScheme } from 'pages/ArticlesPage';

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;
  UI: UIScheme;

  // async
  loginForm?: LoginScheme;
  profile?: ProfileScheme;
  articleDetails?: ArticleDetailsScheme;
  articleDetailsComments?: ArticleDetailsCommentsScheme;
  addCommentForm?: AddCommentFormScheme;
  articlesPage?: ArticlesPageScheme;
};

export type StateSchemeKey = keyof StateScheme;
export type MountedReducers = OptionalRecord<StateSchemeKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: (state: StateScheme, action: UnknownAction) => StateFromReducersMapObject<ReducersMapObject<StateScheme>>;
  add: (key: StateSchemeKey, reducer: Reducer) => void;
  remove: (key: StateSchemeKey) => void;
  getMountedReducers: () => MountedReducers;
};

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager;
};

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateScheme;
}