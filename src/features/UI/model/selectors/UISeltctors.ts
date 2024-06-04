import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

export const getUIScroll = (state: StateScheme) => state.UI.scroll;
export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateScheme, path: string) => path,
  (scroll, path) => scroll[path] || 0
);