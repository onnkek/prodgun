import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.sass';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{String(t('An unexpected error occurred'))}</p>
      <Button onClick={reloadPage}>
        {String(t('Update page'))}
      </Button>
    </div>
  );
};