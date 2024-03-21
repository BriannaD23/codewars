function sumArray(arr) {
  if (!arr || arr.length <= 1) {
    return 0; // input validation
  }

  // Sort the array
  arr.sort((a, b) => a - b);

  // Sum all elements except the first and last
  return arr.slice(1, -1).reduce((acc, val) => acc + val, 0);
}