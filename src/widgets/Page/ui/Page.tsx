import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import cls from './Page.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UIActions, getUIScrollByPath } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateScheme } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

export interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}
export const PAGE_ID = 'PAGE_ID';
export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateScheme) => getUIScrollByPath(state, pathname));

  if (onScrollEnd) {
    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd
    });
  }

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    //if (e.currentTarget) {
    dispatch(UIActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }));
    //}

  }, 400);

  return (
    <section
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
};