function countSheeps(sheep) {
  let count = 0
  for( let s of sheep){
    if(s ===true) count++
  }
  return count
}