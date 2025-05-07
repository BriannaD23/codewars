function add(arr) {
// we have an array
// the right array is the product of teh left array being sumed all together
// have two variable one to hold the array of numbers and the other to be the running result
let sumArray = []; 
let runningTotal = 0;
​
for(let num of arr){
  runningTotal += num
  sumArray.push(runningTotal)
 
​
}
 return sumArray
​
}