import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

export interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
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
    <HStack max justify='between' className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              onClick={onEdit}
              theme={ButtonTheme.OUTLINE}
              data-testid={'EditableProfileCardHeader.EditButton'}
            >{t('Edit')}</Button>
          ) : (
            <HStack gap='8'>
              <Button
                onClick={onSave}
                theme={ButtonTheme.OUTLINE}
                data-testid={'EditableProfileCardHeader.SaveButton'}
              >{t('Save')}</Button>
              <Button
                onClick={onCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid={'EditableProfileCardHeader.CancelButton'}
              >{t('Cancel')}</Button>
            </HStack>

          )}
        </>
      )}
    </HStack>
  );
};