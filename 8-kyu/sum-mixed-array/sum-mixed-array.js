function sumMix(x){
​
 //array of intergers contain both strings and numbers 
 // convert sum to numbet
​
  let sum = 0
​
  for(let num of x){
    sum += Number(num)
  }
  return(sum)
}