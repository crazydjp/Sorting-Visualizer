import getBubbleSortAnimations from "./getBubbleSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const BubbleSort = (array, animationSpeed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
  disableButtons();

  // Getting the animations which has been generated in the "getBubbleSortAnimations" function.
  const animations = getBubbleSortAnimations(array);

  for (let i = 0; i < animations.length; i += 5) {
    const comparingElement1 = animations[i];
    const comparingElement2 = animations[i + 1];
    const doSwap = animations[i + 2];
    const isFinalElement = animations[i + 3];
    const finalElement = animations[i + 4];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of comparing elements.
        changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
          swapBars(comparingElement1, comparingElement2);
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isFinalElement === true) {
          // Changing the color-bar of finalElement index which has taken its final sorted position.
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px  rgba(0, 164, 86, 0.2)"
          );
        } else {
          // Changing the color-bar of element which has not taken its final sorted position yet.
          changeBackgroundColor(comparingElement1, "rgba(225, 0, 120, 0.6)");
          changeBoxShadow(comparingElement1, "rgba(225, 0, 120, 0.2)");
        }
        // From "getBubbleSortAnimations" function, we know that the array is sorted when finalElement is 0.
        // Resolving the promise when the finalElement index is 0.
        if (finalElement === 0) resolve();
      }, (i + 5) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
      // Enabling the buttons when both the promises have been resolved.
      .then(enableButtons);
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 5) * animationSpeed);
};

export default BubbleSort;
