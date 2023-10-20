//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    const words = str.split(' ');
  
    const pigLatinWords = words.map(word => {
      if (/^[a-zA-Z]+$/.test(word)) { // Check if the word contains only letters
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        return restOfWord + firstLetter + 'ay';
      } else {
        // If the word contains non-alphabetic characters, leave it as is
        return word;
      }
    });
  
    return pigLatinWords.join(' ');
}


