import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
} from '../actions/autocomplete';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_CITIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_CITIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.error,
      });
    case FETCH_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
        payload: action.response,
      });
    default:
      return state;
  }
}
