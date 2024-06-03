import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

export const Card = ({ className, children, theme = CardTheme.NORMAL, ...otherProps }: CardProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
};