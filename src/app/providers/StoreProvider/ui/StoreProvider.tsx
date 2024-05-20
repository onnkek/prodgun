import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from '../config/StateScheme';
import { createReduxStore } from '../config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateScheme>;
  asyncReducers?: Partial<ReducersMapObject>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  
  const store = createReduxStore(initialState as StateScheme, asyncReducers);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};