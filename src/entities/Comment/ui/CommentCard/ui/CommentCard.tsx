import { Avatar } from 'shared/ui/Avatar';
import { Comment } from '../../../model/types/comment';
import cls from './CommentCard.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';

export interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={40} height={40} border='50%' className={cls.avatar} />
          <Skeleton width={130} height={30}/>
        </div>
        <Skeleton className={cls.text} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar &&
          <Avatar
            size={30}
            alt='Avatar'
            src={comment.user.avatar}
            className={cls.avatar}
          />
        }
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};