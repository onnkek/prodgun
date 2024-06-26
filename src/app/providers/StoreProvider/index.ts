import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateScheme, ThunkConfig } from './config/StateScheme';

export {
  StoreProvider,
  createReduxStore
};

export type {
  StateScheme,
  AppDispatch,
  ThunkConfig
};