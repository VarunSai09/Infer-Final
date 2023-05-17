// actions.js
export const postDataRequest = () => ({
  type: 'POST_DATA_REQUEST',
});

export const postDataSuccess = (data) => ({
  type: 'POST_DATA_SUCCESS',
  payload: data,
});

export const postDataFailure = (error) => ({
  type: 'POST_DATA_FAILURE',
  payload: error,
});
export const postDataUnauthorized = () => ({
  type: 'POST_DATA_UNAUTHORIZED',
});
