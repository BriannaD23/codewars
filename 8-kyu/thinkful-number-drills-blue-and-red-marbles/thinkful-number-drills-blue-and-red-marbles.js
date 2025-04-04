function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  // we have four arguements  the start of the two colors and what has been pulled out
​
   let remainingBlue =  blueStart - bluePulled;
   let remainingRed = redStart - redPulled;
​
  let chancesOfBlue = remainingBlue/ (remainingBlue + remainingRed);
​
​
  return chancesOfBlue
​
 }