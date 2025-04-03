function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  // we have four arguements  the start of the two colors and what has been pulled out
​
   let remainingBlue =  blueStart - bluePulled;
   let remainingRed = redStart - redPulled;
   let remainingMarbles  =  remainingBlue + remainingRed;
​
  console.log(remainingBlue)
 console.log(remainingRed)
  console.log(remainingMarbles )
​
  let chancesOfBlue = remainingBlue/ remainingMarbles
   console.log(chancesOfBlue)
​
  return chancesOfBlue
​
 }