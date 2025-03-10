function longest(s1, s2) {
  // we are returning a sorted string
  // the longest possible 
  // containing distinct letters
​
 //should i make a set ?
  let words = s1 + s2;
  console.log( words)
​
  let newWords = [...new Set(words)];
  console.log(newWords)
  
  let sortedString = newWords.sort().join('')
  console.log(sortedString);
​
  return sortedString;
  
  
​
​
  
​
  
}