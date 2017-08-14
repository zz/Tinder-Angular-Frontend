export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: string;
  username: string;
  usersList: Array<any>; // TODO: User Model
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  username: null,
  usersList: []
};
