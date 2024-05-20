import { AnyAction, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { Profile } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;

  // async
  loginForm?: LoginScheme;
  profile?: Profile
};

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: (state: StateScheme, action: AnyAction) => StateFromReducersMapObject<ReducersMapObject<StateScheme>>;
  add: (key: StateSchemeKey, reducer: Reducer) => void;
  remove: (key: StateSchemeKey) => void;
};

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager;
};