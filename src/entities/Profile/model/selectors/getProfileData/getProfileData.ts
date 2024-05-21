import { StateScheme } from "app/providers/StoreProvider";

export const getProfileData = (state: StateScheme) => state?.profile?.data;