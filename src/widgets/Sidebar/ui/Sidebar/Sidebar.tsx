import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.sass';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/types/item';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed]);

return (
  <div
    data-testid="sidebar"
    className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
  >
    <Button
      data-testid="sidebar-toggle"
      onClick={onToggle}
      className={cls.collapseBtn}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      square
      size={ButtonSize.L}
    >
      {collapsed ? '>' : '<'}
    </Button>
    <div className={cls.items}>
      {SidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      ))}
    </div>

    <div className={cls.switchers}>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} className={cls.lang} />
    </div>
  </div>
);
});
