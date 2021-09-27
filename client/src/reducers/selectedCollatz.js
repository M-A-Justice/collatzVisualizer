const selectedCollatzReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_COLLATZ':
      return action.payload;
    default:
      return state;
  }
};

export default selectedCollatzReducer;
