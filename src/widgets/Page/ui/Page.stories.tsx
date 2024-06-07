import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Normal: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({})],
};
