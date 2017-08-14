import { MATCHES_LOAD } from './matches.actions';
import { initialState } from './matches.state';

function loadMatches(state, action) {
  return Object.assign({}, state, {
    matches: action.matches
  });
}

export function matchesReducer(state = initialState, action) {
    switch (action.type) {
      case MATCHES_LOAD:
        return loadMatches(state, action);
      default:
        return state;
    }
}
