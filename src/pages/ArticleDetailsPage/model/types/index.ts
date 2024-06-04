import { ArticleDetailsCommentsScheme } from './ArticleDetailsCommentsScheme';
import { ArticleDetailsRecommendationsScheme } from './ArticleDetailsRecommendationsScheme';

export interface ArticleDetailsPageScheme {
  comments: ArticleDetailsCommentsScheme;
  recommendations: ArticleDetailsRecommendationsScheme;
}