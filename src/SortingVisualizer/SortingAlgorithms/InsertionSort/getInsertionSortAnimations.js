const getInsertionSortAnimations = (array) => {
  const animations = []; // { comparingELement1, comparingElement2, doSwap, sortedTill }

  // Push animation for sorting first element.
  animations.push(0, 0, false, 0);

  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;

    // Push animation for comparing 2 elements
    animations.push(i, j, false, i - 1);
    while (j >= 0 && array[j] > key) {
      // Swapping 2 values
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      // Push animation for comparing 2 elements
      animations.push(j, j + 1, false, i);
      // Push animation for swapping 2 elements
      animations.push(j, j + 1, true, i);
      j--;
    }
  }

  // Push animation to know that it's the end of the animations.
  animations.push(array.length - 1, array.length - 1, false, array.length - 1);
  return animations;
};

export default getInsertionSortAnimations;
