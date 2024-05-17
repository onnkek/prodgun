import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: Partial<StateScheme>) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);