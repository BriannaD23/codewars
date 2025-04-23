function eachCons(array, n) {
  let arrPairs = [];
  for(let i = 0; i <= array.length - n ; i++){
   arrPairs.push(array.slice(i, i+ n));
  }
  
  return arrPairs
}
​
​
// What you need to do instead:
// Create a new array to hold all the slices.
​
// Push each slice into that array.
​
// Then return the full array after the loop.