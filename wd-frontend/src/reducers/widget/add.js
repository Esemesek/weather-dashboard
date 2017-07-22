import uuid from 'uuid/v4';

const makeWidgetFromResponse = (response) => ({
  id: uuid(),
  ...response,
});

export const addWidgetRequest = (state) =>
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
      error: action.error,
    },
  });

export const addWidgetSuccess = (state, action) =>
  Object.assign({}, state, {
    addStatus: {
      isFetching: false,
      success: true,
    },
    widgets: [
      ...state.widgets,
      makeWidgetFromResponse(action.response),
    ],
  });
