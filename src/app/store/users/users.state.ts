export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: string;
  username: string;
  profileCreated: boolean
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  username: null,
  profileCreated: false
};
