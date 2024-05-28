import React, { FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = React.lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./AddCommentForm')), 1000);
    })
);
