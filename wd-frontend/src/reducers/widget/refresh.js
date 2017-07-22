const refreshWidget = (widgets, id, response) =>
  widgets.map((widget) => {
    if (widget.id === id) {
      widget = { id, ...response }
    }

    return widget;
  });

export const refreshWidgetRequest = (state) =>
  Object.assign({}, state, {
    refreshStatus: {
      isFetching: true,
    },
  });

export const refreshWidgetSuccess = (state, action) =>
  Object.assign({}, state, {
    refreshStatus: {
      isFetching: false,
      success: true,
    },
    widgets: refreshWidget(state.widgets, action.id, action.response),
  });

export const refreshWidgetFailure = (state, action) =>
  Object.assign({}, state, {
    refreshStatus: {
      isFetching: false,
      success: false,
      error: action.error,
    },
  });
