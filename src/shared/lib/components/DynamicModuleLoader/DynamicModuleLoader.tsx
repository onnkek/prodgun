import { FC, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemeKey]?: Reducer; //<NonNullable<StateScheme[name]>>;
}

export interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemeKey];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemeKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemeKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {children}
    </>
  );
};