const PostReducer = (state, action) => {
  switch (action.type) {
    case 'POST_START':
      return {
        title: '',
        data: [],
        photo: '',
        userId: '',
        loding: false,
      };
    case 'POST_SUCCESS':
      return {
        title: '',
        data: [],
        photo: '',
        userId: '',
        loding: false,
      };

    default:
      return { ...state };
  }
};

export default PostReducer;
