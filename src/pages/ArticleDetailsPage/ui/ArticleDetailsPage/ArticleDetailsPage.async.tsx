import React from 'react';

export const ArticleDetailsPageAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
    })
);
