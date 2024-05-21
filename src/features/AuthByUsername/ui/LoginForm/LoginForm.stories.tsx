import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: '123' }
  })]
};

export const withError: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { error: 'ERROR' }
  })]
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({
    loginForm: { isLoading: true }
  })]
};