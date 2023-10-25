//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    // Check if the number is already negative
    if (num < 0) {
      return num; // If it's negative, no need to make it negative again
    } else {
      return -num; // If it's positive or zero, return its negative counterpart
    }
}