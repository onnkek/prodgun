import { StateScheme } from "app/providers/StoreProvider";

export const getProfileIsLoading = (state: StateScheme) => state?.profile?.isLoading;