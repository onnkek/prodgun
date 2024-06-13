import { useMemo } from 'react';
import cls from './ArticleSortSelector.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { ArticleSortField } from '../../model/consts/consts';
import { SortOrder } from 'shared/types';

export interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
  className,
  order,
  sort,
  onChangeOrder,
  onChangeSort
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Ascending')
    },
    {
      value: 'desc',
      content: t('Descending')
    }
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('Creation date')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Views')
    }
  ], [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Sort by...')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
};