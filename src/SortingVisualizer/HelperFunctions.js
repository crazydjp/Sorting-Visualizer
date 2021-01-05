import CompletedEffect from "./sounds/CompletedEffect.mp3";

const right_color_bar = document.getElementsByClassName("right-color-bar");
const left_color_bar = document.getElementsByClassName("left-color-bar");
const front_color_bar = document.getElementsByClassName("front-color-bar");
const back_color_bar = document.getElementsByClassName("back-color-bar");
const bottom_color_bar = document.getElementsByClassName("bottom");

// ## Helps to easily fetch all the sides of the element ## //
export function getBarStyle(index) {
  const barStyle = [
    right_color_bar[index].style,
    left_color_bar[index].style,
    back_color_bar[index].style,
    front_color_bar[index].style,
    bottom_color_bar[index].style,
  ];
  return barStyle;
}

// ## Changes color of all the sides of color-bar ## //
export function changeBackgroundColor(index, color) {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++)
    styleOfElement[j].backgroundColor = color;
}

// ## Changes box-shadow of all the sides of color-bar ## //
export function changeBoxShadow(index, shadow) {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++)
    styleOfElement[j].boxShadow = shadow;
}

// ## Swaps 2 array-bars ( Swapping heights ) ## //
export function swapBars(index1, index2) {
  const styleOfElement1 = getBarStyle(index1),
    styleOfElement2 = getBarStyle(index2);
  for (let j = 0; j < 4; j++) {
    const tempHeight = styleOfElement1[j].height;
    styleOfElement1[j].height = styleOfElement2[j].height;
    styleOfElement2[j].height = tempHeight;

    const h1 = parseInt(styleOfElement1[j].height, 10),
      h2 = parseInt(styleOfElement2[j].height, 10);

    styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
    styleOfElement2[j].transform = `translateY(${70 - h2}vh)`;
  }
}

// ## Reset the style of all the color-bars ## //
export function resetBarStyleDefault(array, animationSpeed) {
  setTimeout(() => {
    for (let j = 0; j < array.length; j++) {
      changeBackgroundColor(j, "rgba(225, 0, 120, 0.5)");
      changeBoxShadow(j, "5px 5px 50px 5px rgba(225, 0, 120, 0.2)");
    }
  }, animationSpeed);
}

// ## Returns any random value from the interval [min, max] ## //
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ## Enables all the buttons ## //
export function enableButtons() {
  document.getElementById("reset").disabled = false;
  document.getElementById("bubbleSortButton").disabled = false;
  document.getElementById("selectionSortButton").disabled = false;
  document.getElementById("insertionSortButton").disabled = false;
  document.getElementById("range-slider").style.opacity = 1;
  document.getElementById("range-slider").style.visibility = "visible";
}

// ## Disables all the buttons ## //
export function disableButtons() {
  document.getElementById("reset").disabled = true;
  document.getElementById("bubbleSortButton").disabled = true;
  document.getElementById("selectionSortButton").disabled = true;
  document.getElementById("insertionSortButton").disabled = true;
  document.getElementById("range-slider").style.opacity = 0;
  document.getElementById("range-slider").style.visibility = "hidden";
}

// ## Plays audio ## //
export function playAudio(myAudio) {
  const audio = new Audio(myAudio);
  audio.preload = "auto";
  const playing = audio.play();
  playing.then(() => {}).catch(() => {});
}

export function playCompletedSoundEffect() {
  playAudio(CompletedEffect);
}
