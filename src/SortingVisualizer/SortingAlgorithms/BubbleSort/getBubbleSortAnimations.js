const getBubbleSortAnimations = (array) => {
  const animations = []; // { comparingElement1, comparingElement2, doSwap, isFinalElement, finalElement }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Push animation for comparing 2 elements
      animations.push(j, j + 1, false, false, -1);
      if (array[j] > array[j + 1]) {
        // Swapping values
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // Push animation for swapping 2 values
        animations.push(j, j + 1, true, false, -1);
      }
    }
    // Here, the (array.length - 1 - i)th indexed element will be sorted. So we need to change its color.
    // Push animation for (array.length - 1 - i)th indexed element which got its sorted position.
    animations.push(
      array.length - 1 - i,
      array.length - 1 - i,
      false,
      true,
      array.length - 1 - i
    );
  }
  // Push animation to know that it's the end of the animation.
  animations.push(0, 0, false, true, 0);

  return animations;
};

export default getBubbleSortAnimations;
