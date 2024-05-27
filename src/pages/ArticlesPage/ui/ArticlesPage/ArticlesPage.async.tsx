import React from 'react';

export const ArticlesPageAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticlesPage')), 1000);
    })
);
