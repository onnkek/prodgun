import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from '../config/StateScheme';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateScheme>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  
  const store = createReduxStore(initialState as StateScheme);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};