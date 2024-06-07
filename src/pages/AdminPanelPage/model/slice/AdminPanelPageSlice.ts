// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { ArticleDetailsScheme } from '../types/articleDetailsScheme';
// import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
// import { Article } from '../types/article';

// const initialStatye: AdminPanelPageScheme = {
//   isLoading: false,
//   error: undefined,
//   data: undefined
// };

// export const AdminPanelPageSlice = createSlice({
//   name: 'AdminPanelPage',
//   initialState,
//   reducers: {

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchArticleById.pending, (state) => {
//         state.error = undefined;
//         state.isLoading = true;
//       })
//       .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchArticleById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//   }
// });

// export const { actions: AdminPanelPageActions } = AdminPanelPageSlice;
// export const { reducer: AdminPanelPageReducer } = AdminPanelPageSlice;