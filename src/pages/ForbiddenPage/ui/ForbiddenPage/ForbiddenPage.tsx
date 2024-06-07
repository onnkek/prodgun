import cls from './ForbiddenPage.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

export interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.forbiddenPage, {}, [className])}>
      {t('You do not have access to this page.')}
    </Page>
  );
};