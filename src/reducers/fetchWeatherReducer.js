import { FETCH_WEATHER } from "../actions/actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const newState = [action.payload.data, ...state];
      return newState;
    default:
      return state;
  }
}
