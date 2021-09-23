/* eslint-disable no-param-reassign */
const collatz = (int) => {
  const result = [];

  if (int === 1 || int === -1) {
    result.push(int);
    return result;
  }

  if (int % 2 === 0) {
    result.push(int);
    int /= 2;
  } else {
    result.push(int);
    if (int > 0) {
      int = (3 * int) + 1;
    } else {
      int = (3 * int) - 1;
    }
  }

  return result.concat(collatz(int));
};

export default collatz;
