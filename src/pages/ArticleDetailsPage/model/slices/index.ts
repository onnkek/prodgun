import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./ArticleDetailsCommentsSlice";
import { articleDetailsRecommendationsReducer } from "./ArticleDetailsRecommendationsSlice";

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer
});