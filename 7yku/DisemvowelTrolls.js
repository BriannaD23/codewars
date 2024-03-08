function disemvowel(str) {
  
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(char => !vowel.includes(char.toLowerCase())).join('');
    
    
}
/*
another solution

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }

  return result;
}



*/
  