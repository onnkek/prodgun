import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateScheme, ReduxStoreWithManager } from './config/StateScheme';

export {
  StoreProvider,
  createReduxStore,
  StateScheme
};
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];