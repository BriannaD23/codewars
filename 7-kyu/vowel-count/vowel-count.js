function getCount(str) {
  let vowels = ["a", 'e', "i", "o","u"];
  let Lowerstr = str.toLowerCase();
  let count = Lowerstr.split('').filter(char => vowels.includes(char)).length;
  return count;
​
}