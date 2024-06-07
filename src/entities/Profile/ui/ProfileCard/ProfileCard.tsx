import cls from './ProfileCard.module.sass';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  readonly
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify='center' max className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify='center' max className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Server error')}
          text={t('Try to reload page...')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap='8' max className={classNames(cls.profileCard, mods, [className])}>

      {data?.avatar &&
        <HStack justify='center' max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t('Avatar')} />
        </HStack>
      }
      <Input
        className={cls.input}
        value={data?.first}
        placeholder={t('Your first name')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        placeholder={t('Your last name')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('Your age')}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid={'ProfileCard.age'}
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('Your city')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('Your username')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('Your avatar path')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>

  );
};