import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UIScheme } from '../types/UISchema';

const initialState: UIScheme = {
  scroll: {}
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});

export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;