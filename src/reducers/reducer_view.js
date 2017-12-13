import { CHANGE_VIEW } from '../actions/index';

export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.payload;
    default:
      return state;
  }

  return state;
}
