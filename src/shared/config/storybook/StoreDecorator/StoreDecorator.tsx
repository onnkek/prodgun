import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateScheme>> = {
  loginForm: loginReducer,
}

export const StoreDecorator = (initialState: Partial<StateScheme>, asyncReducers?: Partial<ReducersMapObject<StateScheme>>) => (Story: StoryFn) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
  >
    <Story />
  </StoreProvider>
);