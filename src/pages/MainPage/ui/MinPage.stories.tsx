import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({})],
};