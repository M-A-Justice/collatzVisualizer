/* eslint-disable arrow-body-style */
export const updateSelection = (payload) => {
  return {
    type: 'UPDATE_SELECTION',
    payload,
  };
};

export const userInput = (payload) => {
  return {
    type: 'USER_INPUT',
    payload,
  };
};
