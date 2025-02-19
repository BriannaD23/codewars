function replace(s) {
  let vowels = ['a','e','i','o', 'u']
    return s
​
​
    .split('')
    .map((char) =>{   
      if(vowels.includes(char.toLowerCase())){
            return '!';
      }
      return char  
    })
     
    .join('')
  
    
}
​
​
// function replace(s) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   return s
//     .split('') // Split string into array
//     .map((char) => {
//       if (vowels.includes(char.toLowerCase())) { // Check for vowels
//         return '!';
//       }
//       return char; // Keep character if not a vowel
//     })
//     .join(''); // Join array back into a string
// }