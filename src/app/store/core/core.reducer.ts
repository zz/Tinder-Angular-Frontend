import { initialState } from './core.state';
import { ROUTES_CHANGE } from './core.actions';

function handleMessage(state: any, action: any) {
  const result = action.result;
  if (result) {
    let message = result.message;
    const errors = result.errors;
    if (errors) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const firstKey = Object.keys(errors)[0];
        message = errors[firstKey];
      }
    }
    if (message) {
      return Object.assign({}, state, {
        message,
      });
    }
  }

  return state;
}

function routeChange(state: any, action: any) {
  return Object.assign({}, state, {
    message: null,
  });
}

export function coreReducer(state = initialState, action: any) {
  if (action.type === ROUTES_CHANGE) {
    return routeChange(state, action);
  } else {
    return handleMessage(state, action);
  }
}
