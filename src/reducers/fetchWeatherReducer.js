import { FETCH_WEATHER } from "../actions";

const initialState = {
  cities: []
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
        cities: state.cities.concat(obj)
      };
    case `${FETCH_WEATHER}_REJECTED`:
      console.log("TODO: FETCH_WEATHER_REJECTED");
      return state;
    default:
      return state;
  }
}
