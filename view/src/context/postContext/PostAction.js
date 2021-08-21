export const postStart = () => ({
  type: 'POST_START',
});

export const postSuccess = (post) => ({
  type: 'POST_SUCCESS',
  payload: post,
});
export const postSave = (post) => ({
  type: 'POST_SAVE',
  payload: post,
});
