import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Themes } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam, non cupiditate aut ea officia eveniet beatae molestias nisi consectetur soluta dignissimos tempore veritatis! Cumque animi, nemo perferendis, itaque velit fugiat accusantium ab enim facere et expedita ex, minima pariatur officiis distinctio sit numquam sint porro excepturi soluta quasi. Consequatur et autem omnis aspernatur, sequi adipisci laboriosam voluptatem, ipsum consectetur aliquid aliquam. Quaerat minus tempora tempore modi sit, rem repellat et quasi reiciendis? Sed at iusto ipsum ea, modi, omnis dicta libero ipsam corporis quae praesentium impedit officiis similique? Voluptatem laudantium officia unde amet, dolorum nulla et perspiciatis quibusdam expedita!'
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam, non cupiditate aut ea officia eveniet beatae molestias nisi consectetur soluta dignissimos tempore veritatis! Cumque animi, nemo perferendis, itaque velit fugiat accusantium ab enim facere et expedita ex, minima pariatur officiis distinctio sit numquam sint porro excepturi soluta quasi. Consequatur et autem omnis aspernatur, sequi adipisci laboriosam voluptatem, ipsum consectetur aliquid aliquam. Quaerat minus tempora tempore modi sit, rem repellat et quasi reiciendis? Sed at iusto ipsum ea, modi, omnis dicta libero ipsam corporis quae praesentium impedit officiis similique? Voluptatem laudantium officia unde amet, dolorum nulla et perspiciatis quibusdam expedita!'
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};