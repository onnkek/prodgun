import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  
  return (
    <div>
      <BugButton />
      {String(t('Главная страница'))}
    </div>
  );
};

export default MainPage;
