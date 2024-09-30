function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

// n.toString() converts the number into a string
//.split() splits the string into an array of individual digits
// .reverse() reverses the array
// .map(Number) converts each element in the array back to a number