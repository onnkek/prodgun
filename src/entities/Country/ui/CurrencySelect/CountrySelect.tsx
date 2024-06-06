import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/Listbox';

export interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.USA, content: Country.USA },
  { value: Country.UK, content: Country.UK },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Listbox
      className={className}
      items={options}
      value={value}
      defaultValue='Select country'
      label='Select country'
      onChange={onChangeHandler}
      readonly={readonly}
      anchor='top'
    />
  );
});