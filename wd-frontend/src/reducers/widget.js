import uuid from 'uuid/v4';

import {
  ADD_WIDGET_REQUEST,
  ADD_WIDGET_FAILURE,
  ADD_WIDGET_SUCCESS,
  REMOVE_WIDGET,
} from '../actions/widget';

const DEFAULT_STATE = {
  widgets: []
};

const makeWidgetFromResponse = (response) => ({
  id: uuid(),
  ...response,
});

const filterWidget = (widgets, id) => widgets.filter(widget => widget.id !== id);

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
        widgets: [
          ...state.widgets,
          makeWidgetFromResponse(action.response),
        ],
      });
    case REMOVE_WIDGET:
      return Object.assign({}, state, {
        widgets: filterWidget(state.widgets, action.id),
      });
    default:
      return state;
  }
}