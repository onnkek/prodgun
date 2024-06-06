import { Avatar } from 'shared/ui/Avatar';
import { Comment } from '../../../model/types/comment';
import cls from './CommentCard.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';

export interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={40} height={40} border='50%' className={cls.avatar} />
          <Skeleton width={130} height={30} />
        </div>
        <Skeleton className={cls.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap='8' max className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar &&
          <Avatar
            size={30}
            alt='Avatar'
            src={comment.user.avatar}
            className={cls.avatar}
          />
        }
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
};