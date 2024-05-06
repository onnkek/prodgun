import { StoryFn } from '@storybook/react';
import '../../../../app/styles/index.sass';

export const StyleDecorator = (Story: StoryFn) => (
  <div className={'app light'}>
    <Story />
  </div>
);