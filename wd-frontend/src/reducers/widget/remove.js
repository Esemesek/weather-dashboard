export const removeWidget = (state, action) =>
  Object.assign({}, state, {
    widgets: state.widgets.filter(widget => widget.id !== action.id),
  });
