import cls from './Icon.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';

export interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => {

  return (
    <Svg className={classNames(cls.icon, {}, [className])} />
  );
};