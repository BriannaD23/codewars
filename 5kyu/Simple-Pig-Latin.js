//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  var arrayWord = str.split(' ');

  return arrayWord.map(function(word) {
    // Check if the word is a letter
    if (word.match(/[a-zA-Z]/)) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    } else {
      // If the word contains non-letter characters, leave them unchanged
      return word;
    }
  }).join(' ');
}


// another solution

// function pigIt(str) {
//     var arrayWord = str.split(' ');
//     return arrayWord.map(function(word) {
//       var firstLetter = word.charAt(0);
//       return word.slice(1) + firstLetter + 'ay';
//     }).join(' ');
// }

