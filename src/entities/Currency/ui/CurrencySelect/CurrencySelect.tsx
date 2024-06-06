import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/Listbox';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Listbox
      className={className}
      items={options}
      value={value}
      defaultValue='Select currency'
      label='Select currency'
      onChange={onChangeHandler}
      readonly={readonly}
      anchor='top'
    />
  );
});