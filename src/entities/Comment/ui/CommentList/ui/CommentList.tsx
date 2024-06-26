import { Text } from 'shared/ui/Text';
import cls from './CommentList.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../../CommentCard/ui/CommentCard';
import { Comment } from '../../../model/types/comment';
import { VStack } from 'shared/ui/Stack';

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap='16' className={classNames(cls.commentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap='16' max className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ?
        comments.map(comment => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        )) :
        <Text text={t('Comments not found')} />
      }
    </VStack>
  );
};