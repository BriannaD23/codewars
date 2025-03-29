function isIsogram(str){
  // so basically we have an isogram that has no non repeating numbers
​
  if( str ===''){
    return true;
  } 
  if(!/^[a-zA-Z]+$/.test(str)){
    return false; 
  }
​
  let word = new Set(str.toLowerCase());
​
  return word.size === str.length
}