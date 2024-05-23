import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({
    profile: {
      form: {
        first: 'TestFirstName',
        lastname: 'TestLastName',
        username: 'testname',
        city: 'TestCity',
        country: Country.Russia,
        currency: Currency.RUB,
        age: 11,
      }
    }
  })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({
    profile: {
      form: {
        first: 'TestFirstName',
        lastname: 'TestLastName',
        username: 'testname',
        city: 'TestCity',
        country: Country.Russia,
        currency: Currency.RUB,
        age: 11,
      }
    }
  })],
};