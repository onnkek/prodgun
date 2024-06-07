import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.sass';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserModerator, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {

  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isModerator = useSelector(isUserModerator);

  const onHideModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const canOpenAdminPanel = isAdmin || isModerator;

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Prodgun')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create article')}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
          anchor='bottom'
          items={[ 
            {
              content: t('Profile'),
              href: `${RoutePath.profile}${authData.id}`
            },
            ...(canOpenAdminPanel ? [{
              content: t('Admin panel'),
              href: RoutePath.admin
            }] : []),
            {
              content: t('Log out'),
              onClick: onLogout
            }
          ]}
          trigger={<Avatar size={30} alt='avatar' src={authData.avatar} />}
        />
      </header>
    );
  };

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Log in')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onHideModal} />}
    </header>

  );
});
