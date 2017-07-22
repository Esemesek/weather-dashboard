const refreshWidget = (widgets, id, response) =>
  widgets.map((widget) => {
    if (widget.id === id) {
      return { id, ...response };
    }

    return widget;
  });

export const refreshWidgetRequest = state =>
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
    alert: {
      open: true,
      message: 'Success refreshing widget',
    },
    widgets: refreshWidget(state.list, action.id, action.response),
  });

export const refreshWidgetFailure = (state, action) =>
  Object.assign({}, state, {
    refreshStatus: {
      isFetching: false,
      success: false,
    },
    alert: {
      open: true,
      message: `Failure in refreshing widget: ${action.error}`,
    },
  });
