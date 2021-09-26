const minMaxReducer = (state = [0, 0], action) => {
  switch (action.type) {
    case 'MIN_MAX': return [...action.payload];
    default: return state;
  }
};

export default minMaxReducer;
