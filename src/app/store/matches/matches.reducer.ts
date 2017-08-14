import { MATCHES_LOAD, MESSAGES_LOAD } from './matches.actions';
import { initialState } from './matches.state';

function loadMatches(state, matches) {
  return Object.assign({}, state, { matches });
}

function loadMessages(state, messages) {
  return Object.assign({}, state, { messages });
}

export function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case MATCHES_LOAD:
      return loadMatches(state, action.matches);
    case MESSAGES_LOAD:
      return loadMessages(state, action.messages);
    default:
      return state;
  }
}
