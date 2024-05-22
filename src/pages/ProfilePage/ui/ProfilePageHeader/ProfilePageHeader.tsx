import { useSelector } from 'react-redux';
import cls from './ProfilePageHeader.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {readonly ? (
        <Button
          onClick={onEdit}
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >{t('Edit')}</Button>
      ) : (
        <div>
          <Button
            onClick={onSave}
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
          >{t('Save')}</Button>
          <Button
            onClick={onCancelEdit}
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.editBtn}
          >{t('Cancel')}</Button>
        </div>

      )}
    </div>
  );
};