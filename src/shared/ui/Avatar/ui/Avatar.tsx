import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.sass';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};