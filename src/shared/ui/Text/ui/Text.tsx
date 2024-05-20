import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.sass';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = memo(({ className, title, text, theme = TextTheme.PRIMARY, ...otherProps }) => {

  const mods: Record<string, boolean | string> = {
    [cls[theme]]: true,
  };

  return (
    <div
      className={classNames(cls.textWrapper, mods, [className])}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});