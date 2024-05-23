import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/Avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first: 'TestFirstName',
      lastname: 'TestLastName',
      username: 'testname',
      city: 'TestCity',
      country: Country.Russia,
      currency: Currency.RUB,
      age: 11,
      avatar: AvatarImg
    }
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const withError: Story = {
  args: {
    error: 'error',
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};