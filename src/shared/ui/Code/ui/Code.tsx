import { useCallback } from 'react';
import cls from './Code.module.sass';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

export interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({ className, text }: CodeProps) => {

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <Icon Svg={CopyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};