import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleViewSwitcher.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-20-20.svg';
import GridIcon from 'shared/assets/icons/grid-20-20.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon';


export interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: GridIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
];

export const ArticleViewSwitcher = ({ className, view, onViewClick }: ArticleViewSwitcherProps) => {
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.articleViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
          />
        </Button>
      ))}
    </div>
  );
};