import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.sass';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <span className='loader'></span>
  );
};