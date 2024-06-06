import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/Listbox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {String(t('Главная страница'))}
      <div>asfdsg</div>
      <HStack>
        <div>asfdsg</div>
        <Listbox
          defaultValue='Select value'
          onChange={() => { }}
          value={undefined}
          items={[
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3', disabled: true },
            { value: '4', content: '4' },
            { value: '5', content: '5' },
          ]}
        />
      </HStack>
      <div>asfdsg</div>
      <div>asfdsg</div>
      <div>asfdsg</div>
      <div>asfdsg</div>
      <div>asfdsg</div>
    </Page>
  );
};

export default MainPage;
