function dnaStrand(dna){
  return dna
  .split('')
  .map((strand) =>{
  if(strand == 'A'){
    return 'T'
  }else if (strand === 'T'){
    return "A"
  }else if (strand === 'C'){
    return "G"
  }else if (strand === 'G'){
    return "C"
  }
  })
  .join('')
}