import { AnyAction, Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit'
import { ReducerManager, StateScheme, StateSchemeKey } from './StateScheme';

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducerManager {

  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemeKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateScheme, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key: StateSchemeKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemeKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  }
}