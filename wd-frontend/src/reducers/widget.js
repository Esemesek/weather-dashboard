import {
  ADD_WIDGET_REQUEST,
  ADD_WIDGET_FAILURE,
  ADD_WIDGET_SUCCESS,
} from '../actions/widget';

const DEFAULT_STATE = {
  widgets: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_WIDGET_REQUEST:
      return Object.assign({}, state ,{
        requestStatus: {
          isFetching: true,
        }
      });
    case ADD_WIDGET_FAILURE:
      return Object.assign({}, state, {
        requestStatus: {
          isFetching: false,
          success: false,
          error: action.error,
        },
      });
    case ADD_WIDGET_SUCCESS:
      return Object.assign({}, state, {
        requestStatus: {
          isFetching: false,
          success: true,
        },
        widgets: [...state.widgets, action.response],
      });
    default:
      return state;
  }
}