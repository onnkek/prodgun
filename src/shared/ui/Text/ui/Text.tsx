import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.sass';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo(({ className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, ...otherProps }) => {

  const mods: Record<string, boolean | string> = {
    [cls[theme]]: true,
    [cls[align]]: true
  };

  return (
    <div
      data-testid="text"
      className={classNames(cls.textWrapper, mods, [className])}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});