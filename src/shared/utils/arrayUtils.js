export const removeItemFromArray = (array, index) => {
  const firstHalf = array.slice(0, index);
  const secondHalf = array.slice(index + 1, array.length);

  return [...firstHalf, ...secondHalf];
};
