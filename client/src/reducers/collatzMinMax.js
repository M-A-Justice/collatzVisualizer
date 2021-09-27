const collatzMinMaxReducer = (state = { 0: [] }, action) => {
  switch (action.type) {
    case 'COLLATZ_MIN_MAX':
      return action.payload;
    default:
      return state;
  }
};

export default collatzMinMaxReducer;
