function spinWords(string){
  //TODO Have fun :)
   return string
    .split(' ')
   .map((word) => {
     if(word.length >= 5){
       return word.split('').reverse().join('')
     }
  return word
​
   })
  .join(' ')
}