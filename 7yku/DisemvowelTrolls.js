function disemvowel(str) {
  
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(char => !vowel.includes(char.toLowerCase())).join('');
    
    
  }
  