import cls from './ArticleEditPage.module.sass';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? 'Edit ' + id : 'Create'}
    </Page>
  );
};

export default ArticleEditPage;