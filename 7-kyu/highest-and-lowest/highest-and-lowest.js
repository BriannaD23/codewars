function highAndLow(numbers){
  let numList = numbers.split(' ').map(Number)
  let highest = Math.max(...numList)
  let lowest = Math.min(...numList)
​
  return highest + ' ' + lowest;
  
  
​
 
  
}