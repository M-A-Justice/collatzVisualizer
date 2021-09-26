const updateSelectionReducer = (state = [0, 0], action) => {
  switch (action.type) {
    case 'UPDATE_SELECTION':
      return [...action.payload];
    default:
      return state;
  }
};

export default updateSelectionReducer;
