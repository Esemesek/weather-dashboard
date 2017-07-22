const removeWidget = (state, action) =>
  Object.assign({}, state, {
    list: state.list.filter(widget => widget.id !== action.id),
  });

export default {
  removeWidget,
};
