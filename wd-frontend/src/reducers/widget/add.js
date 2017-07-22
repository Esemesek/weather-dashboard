import uuid from 'uuid/v4';

const makeWidgetFromResponse = response => ({
  id: uuid(),
  ...response,
});

export const addWidgetRequest = state =>
  Object.assign({}, state, {
    addStatus: {
      isFetching: true,
    },
  });

export const addWidgetFailure = (state, action) =>
  Object.assign({}, state, {
    addStatus: {
      isFetching: false,
      success: false,
    },
    alert: {
      open: true,
      message: `Failure adding widget: ${action.error}`,
    },
  });

export const addWidgetSuccess = (state, action) =>
  Object.assign({}, state, {
    addStatus: {
      isFetching: false,
      success: true,
    },
    alert: {
      open: true,
      message: `Success adding ${action.response.city} widget`,
    },
    list: [
      ...state.list,
      makeWidgetFromResponse(action.response),
    ],
  });
