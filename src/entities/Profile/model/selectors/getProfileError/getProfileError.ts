import { StateScheme } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateScheme) => state?.profile?.error;