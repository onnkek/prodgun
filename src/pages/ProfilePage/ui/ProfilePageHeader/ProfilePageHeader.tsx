import { useSelector } from 'react-redux';
import cls from './ProfilePageHeader.module.sass';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

export interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
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
    <HStack max justify='between' className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              onClick={onEdit}
              theme={ButtonTheme.OUTLINE}
            >{t('Edit')}</Button>
          ) : (
            <HStack gap='8'>
              <Button
                onClick={onSave}
                theme={ButtonTheme.OUTLINE}
              >{t('Save')}</Button>
              <Button
                onClick={onCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
              >{t('Cancel')}</Button>
            </HStack>

          )}
        </>
      )}
    </HStack>
  );
};