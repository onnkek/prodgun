import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateScheme) => state.user.authData?.roles;
export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);
export const isUserModerator = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MODERATOR))
);