import { ReactNode, useCallback } from 'react';
import cls from './Tabs.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from '../../Card';
import { CardTheme } from '../../Card/ui/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {

  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, [onTabClick]);

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};