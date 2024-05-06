import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, RouterDecorator],
};

export default preview;