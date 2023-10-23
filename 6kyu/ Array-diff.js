//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element));
  }
  
  // Example usage:
  const arrayA = [1, 2, 2, 3, 4, 5];
  const arrayB = [2, 5];
  const result = arrayDiff(arrayA, arrayB);
  console.log(result); // Output: [1, 3, 4]
