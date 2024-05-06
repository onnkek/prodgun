import { StoryFn } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);