function duplicateEncode(word) {
  // Convert the word to lowercase to treat uppercase and lowercase characters as the same
  word = word.toLowerCase();

  // Create an array of characters where each character is replaced with '(' or ')'
  const result = word.split('').map(char => word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')').join('');

  return result;
}

// Example usage:
console.log(duplicateEncode("recede")); 