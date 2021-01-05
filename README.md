# Sorting-Visualizer
The concept of visualizing algorithms lets us understand algorithms in a much better way.

This project is built using ReactJS. 
It includes visualization of few classic sorting algorithms such as: Bubble Sort, Selection Sort and Insertion Sort.

Play around with it: https://crazydjp.github.io/Sorting-Visualizer/ 

( NOTE:  Enable hardware acceleration in Chrome for smooth transition effect. )

# Components
It consists of 4 main components.

1. **Header:** This component is just a text animation of the text "Sorting Visualizer".
![Header](https://i.imgur.com/QF8g3lE.gif)

2. **Buttons Bar:** This component includes few buttons which are used to start visualizing algorithms.
![Buttons Bar](https://i.imgur.com/3ilPL5x.png)

3. **Array Bar:** This component is where we visualize the algorithm using 3D Vertical Bars.
![Array Bar](https://i.imgur.com/97OaSKz.png)

4. **Range Slider:** This component includes some range sliders through which array size and animation speed can be changed in real time.
![Range Slider](https://i.imgur.com/XhLEuFy.gif)

# How does animations work?
While the array is being sorted, we push some indexes of the array and boolean values into animations array. 
These indexes are the indexes of the comparing element and final positioned element; and the boolean values are doSwap and isFinal which tells if the elment is being compared or is it in its final position. 
Now, this animations array is passed to another function which basically changes the color and size of the bar of the indexes in animations array. 
These changes are being done through a setTimeout() function to let the change be delayed and visible.

PLAY AROUND WITH IT AND HAVE FUN! :)
