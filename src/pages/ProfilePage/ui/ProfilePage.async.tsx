import React from 'react';

export const ProfilePageAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1000);
    })
);
