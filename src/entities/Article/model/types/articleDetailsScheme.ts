import { Article } from './article';

export interface ArticleDetailsScheme {
  isLoading?: boolean;
  error?: string;
  data?: Article;
}