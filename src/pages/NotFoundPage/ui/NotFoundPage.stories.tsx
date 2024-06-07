import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;
export const Light: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Themes.DARK), StoreDecorator({})],
};