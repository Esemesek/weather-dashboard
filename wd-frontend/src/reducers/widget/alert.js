export const closeWidgetAlert = (state) =>
  Object.assign({}, state, {
    alert: {
      open: false,
      message: '',
    },
  });
