import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({})],
};