import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 2',
        content: 'tab 2'
      },
      {
        value: 'tab 3',
        content: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};
