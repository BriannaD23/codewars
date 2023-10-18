function findOdd(A) {
    let result = 0;
  
    for (let i = 0; i < A.length; i++) {
      result ^= A[i]; // Using XOR to find the odd occurring number
    }
  
    return result;
}

//when you XOR all the numbers in the list, the result will be the odd number because all the paired numbers will cancel each other out and become 0, leaving only the odd number.