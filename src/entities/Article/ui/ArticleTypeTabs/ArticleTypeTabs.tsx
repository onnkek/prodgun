import { useCallback, useMemo } from 'react';
import { ArticleType } from '../../model/types/article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tabs';
import { TabItem } from 'shared/ui/Tabs/ui/Tabs';

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();
  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('All')
    },
    {
      value: ArticleType.IT,
      content: t('IT')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economics')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science')
    }
  ], []);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
};