//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
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

