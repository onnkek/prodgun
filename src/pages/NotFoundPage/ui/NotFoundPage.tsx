import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.sass';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {String(t('Страница не найдена'))}
    </div>
  );
};