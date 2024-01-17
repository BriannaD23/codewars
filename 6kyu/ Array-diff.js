//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element));
  }

/*
  Here, b.includes(a[i]) checks if the current element in array a is present in array b. If this condition is false (i.e., the element is not present in b), then !b.includes(a[i]) becomes true, and the code inside the if block will be executed. 
  This ensures that only elements not present in array b are included in the result array.
*/
  
  // Example usage:
  const arrayA = [1, 2, 2, 3, 4, 5];
  const arrayB = [2, 5];
  const result = arrayDiff(arrayA, arrayB);
  console.log(result); // Output: [1, 3, 4]

/*second answer 
function array_diff(a, b) {
 return a.filter(e => !b.includes(e));
 }*/
