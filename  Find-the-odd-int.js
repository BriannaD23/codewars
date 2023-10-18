function findOdd(A) {
    let result = 0;
  
    for (let i = 0; i < A.length; i++) {
      result ^= A[i]; // Using XOR to find the odd occurring number
    }
  
    return result;
  }