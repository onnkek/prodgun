import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit';
import { MountedReducers, ReducerManager, StateScheme, StateSchemeKey } from './StateScheme';

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducerManager {

  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemeKey[] = [];
  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateScheme, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return combinedReducer(state, action);
    },
    add: (key: StateSchemeKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemeKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      mountedReducers[key] = false;
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}