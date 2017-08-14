import { IMatchesState } from './matches/matches.state';
import { ICoreState } from './core/core.state';
import { IUsersState } from './users/users.state';

export interface IAppState {
    core: ICoreState;
    users: IUsersState;
    matches: IMatchesState;
}

