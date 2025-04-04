function doubleChar(str) {
  let repeat = str.split('').map((char)=> {
    return char.repeat(2)
  })
  .join('')
  console.log(repeat)
​
  return repeat
}
​