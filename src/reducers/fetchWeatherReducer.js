import { FETCH_WEATHER } from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  errorMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_WEATHER}_FULFILLED`:
      const { city, list } = action.payload.data;
      const obj = {
        city,
        list
      };
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(obj),
        errorMessage: ""
      };
    case `${FETCH_WEATHER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case `${FETCH_WEATHER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Cannot find the city you just typed"
      };
    default:
      return state;
  }
}
