//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('')
};

//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    let words = string.split(' ');
    
    for(let i=0; i < words.length; i++){
      if(words[i].length >= 5)
      words[i] = words[i].split('').reverse().join('');
    }
     
    let reversedString = words.join(' ');
    return reversedString;
}
  
const phrase = "How can super woman fly south of the mountain";
const result = spinWords(phrase);
  
console.log(result)


//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if( number % 2 === 0){
     return 'Even';
    } else{
      return 'Odd';
    }
    
};