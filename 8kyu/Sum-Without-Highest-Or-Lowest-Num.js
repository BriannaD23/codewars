function sumArray(array) {
    // Check if the array is empty or has only one element
    if (array == null || array.length < 2) {
      return 0;
    } else {
      // Sort the array in ascending order
      array = array.sort(function(a, b) {
        return a - b;
      });
  
      // Initialize a variable to store the sum
      var total = 0;
  
      // Loop through the array, starting from the second element
      // up to the second-to-last element
      for (var i = 1; i < array.length - 1; i++) {
        // Add each element to the total sum
        total += array[i];
      }
  
      // Return the total sum
      return total;
    }
}
  