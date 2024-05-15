import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.sass';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onHideModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onHideModal} />
    </div>

  );
};
