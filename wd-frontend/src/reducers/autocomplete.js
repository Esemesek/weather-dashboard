import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
} from '../actions/autocomplete';

const DEFAULT_STATE = {
  cities: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return Object.assign({}, state, {
        autocompleteStatus: {
          isFetching: true,
        },
      });
    case FETCH_CITIES_FAILURE:
      return Object.assign({}, state, {
        autocompleteStatus: {
          isFetching: false,
          success: false,
          error: action.error,
        },
      });
    case FETCH_CITIES_SUCCESS:
      return Object.assign({}, state, {
        autocompleteStatus: {
          isFetching: false,
          success: true,
        },
        cities: action.response,
      });
    default:
      return state;
  }
};
