export const initialState = {
  posts: {
    currentPost: {},
    data: [
      
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  //logged: true, //user logged or not?
  user: {
    userId: 'abc',
    logged: true,
    admin: false,
  },
};
