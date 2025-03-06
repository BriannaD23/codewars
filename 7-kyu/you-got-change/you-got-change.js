function giveChange(amount) {
  const denominations = [100, 50, 20, 10, 5, 1];
​
  let result = denominations.map((bill) => {
    let count = Math.floor(amount / bill); // How many of this bill fit in `amount`
    amount -= count * bill; // Reduce `amount`
    return count; // Store the count of this bill
  });
​
  return result.reverse(); // Reverse to match expected output order
}