function firstNonRepeatingLetter(s) {
    // Create an object to store the count of each character
    const charCount = {};
  
    // Convert the string to lowercase for case-insensitivity
    const lowerCaseString = s.toLowerCase();
  
    // Count the occurrences of each character
    for (let i = 0; i < lowerCaseString.length; i++) {
      const char = lowerCaseString[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeating character and its case
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[lowerCaseString[i]] === 1) {
        return char;
      }
    }
  
    // If all characters are repeating or the string is empty, return an empty string
    return "";
  }

// function firstNonRepeatingLetter(s) {
//   let str = s.toLowerCase();
//   for(let i = 0; i < str.length; i++) {
//     if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return s[i];
//     }
//   }
//   return "";
// }
  