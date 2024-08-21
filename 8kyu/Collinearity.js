// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

function collinearity(x1, y1, x2, y2) {
    // All vectors start from 0
      return (x1 * y2 - y1 * x2) === 0;
}
    