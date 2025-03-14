function reverseWords(str) {
//   let reversedStr = str.split('').reverse().join(' ');
​
  return str 
  .split(' ')
  .map((word) => {
      return word.split('').reverse().join('');
  })
  .join(' ')
​
}