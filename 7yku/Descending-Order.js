// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    //we will be using math.absolute value
    //we have to reverse in decending order
    //reearange to create highest num
    
    let num = Math.abs(n)
    
     let sortedNum = parseInt(
       num
      .toString()
       .split('')
      .sort((a,b) => b - a)
      .join('')
    )
    
      return sortedNum;
    
  }