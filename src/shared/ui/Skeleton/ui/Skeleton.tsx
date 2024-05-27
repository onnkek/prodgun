import { CSSProperties } from 'react';
import cls from './Skeleton.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = ({ className, height, width, border }: SkeletonProps) => {

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles}>

    </div>
  );
};