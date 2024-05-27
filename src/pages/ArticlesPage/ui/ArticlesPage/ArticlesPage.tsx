import { memo } from 'react';
import cls from './ArticlesPage.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
};

export default memo(ArticlesPage);