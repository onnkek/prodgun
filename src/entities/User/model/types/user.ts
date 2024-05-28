export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserScheme {
  authData?: User;
  _inited: boolean;
}