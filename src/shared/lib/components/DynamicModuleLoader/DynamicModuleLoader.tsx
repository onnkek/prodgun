import { FC, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemeKey]?: Reducer;
}

type ReducersListEntry = [StateSchemeKey, Reducer];

export interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name);
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
}