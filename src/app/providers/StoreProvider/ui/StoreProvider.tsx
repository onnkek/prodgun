import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from '../config/StateScheme';
import { createReduxStore } from '../config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {

  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as StateScheme,
    asyncReducers as ReducersMapObject<StateScheme>,
    navigate
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};