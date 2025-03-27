function grow(x){
  //aray od intergers and we need to multiply the elements that are inside the array
  let multiplyer = x.reduce((acc, current) => acc * current , 1) 
​
  return multiplyer
}