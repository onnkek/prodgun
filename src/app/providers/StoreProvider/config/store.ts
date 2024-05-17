import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '..';

export function createReduxStore(initialState?: StateScheme) {
  const rootReducers: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
 
 
  return configureStore<StateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()