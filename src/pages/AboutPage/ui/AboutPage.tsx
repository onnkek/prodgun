import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return <div>{String(t('О сайте'))}</div>;
};

export default AboutPage;
