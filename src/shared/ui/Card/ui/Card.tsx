import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
      {children} 
    </div>
  );
};