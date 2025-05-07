function add(arr) {
// we need to sum all elements
  let cumalativeSum = []
  let runningTotal = 0;
  
  for(let nums of arr){
    runningTotal += nums;
    cumalativeSum.push(runningTotal)
  }
  return cumalativeSum
}