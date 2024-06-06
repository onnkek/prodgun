import cls from './Dropdown.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Fragment } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { AppLink } from 'shared/ui/AppLink';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  anchor?: AnchorProps;
}

export const Dropdown = ({ className, items, trigger, anchor }: DropdownProps) => {
  return (
    <Menu as='div' className={classNames(cls.dropdown, {}, [className])}>
      <MenuButton className={cls.btn}>
        {trigger}
      </MenuButton>
      <MenuItems anchor={anchor} className={cls.menu}>
        {items.map(item => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <MenuItem
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={item.href}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              as={Fragment}
              disabled={item.disabled}
              key={item.href}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};