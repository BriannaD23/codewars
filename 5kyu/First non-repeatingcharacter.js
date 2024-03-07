function firstNonRepeatingLetter(s) {
  let word = s.toLowerCase();
  
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (word.indexOf(char) === word.lastIndexOf(char)) {
      return s[i];
    }
  }
  
  return "";
}