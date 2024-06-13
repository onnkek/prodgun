import cls from './AdminPanelPage.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

export interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.adminPanelPage, {}, [className])}>
      {t('ADMIN PANEL PAGE')}
    </Page>
  );
};

export default AdminPanelPage;