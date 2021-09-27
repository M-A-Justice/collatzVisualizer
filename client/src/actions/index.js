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

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
  };
};

export const updateMinMax = (payload) => {
  return {
    type: 'MIN_MAX',
    payload,
  };
};

export const collatzMinMax = (payload) => {
  return {
    type: 'COLLATZ_MIN_MAX',
    payload,
  };
};

export const updateSelectedCollatz = (payload) => {
  return {
    type: 'UPDATE_COLLATZ',
    payload,
  };
};
