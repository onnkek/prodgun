import {
  Listbox as HListbox,
  ListboxButton as HListboxButton,
  ListboxOption as HListboxOption,
  ListboxOptions as HListboxOptions
} from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import cls from './Listbox.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../Button';
import { HStack } from '../../Stack';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';

export interface ListboxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps {
  items?: ListboxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  className?: string;
  readonly?: boolean;
  anchor?: AnchorProps;
  label?: string;
}


export const Listbox = ({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  anchor = 'bottom',
  label

}: ListboxProps) => {

  return (
    <HStack gap='4'>
      {label &&
        <span className={classNames('', { [cls.disabled]: readonly, }, [])}>
          {`${label}>`}
        </span>}
      <HListbox
        as='div'
        className={classNames(cls.listbox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListboxButton
          className={cls.trigger}
          disabled={readonly}
        >
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListboxButton>
        <HListboxOptions as='ul' anchor={anchor} className={classNames(cls.options, {}, [])}>
          {items?.map((item) => (
            <HListboxOption
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            //className="data-[focus]:bg-blue-100"
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, {
                  [cls.active]: active,
                  [cls.disabled]: item.disabled
                })}>
                  {item.content}
                </li>
              )}
            </HListboxOption>
          ))}
        </HListboxOptions>
      </HListbox>
    </HStack >
  );
};