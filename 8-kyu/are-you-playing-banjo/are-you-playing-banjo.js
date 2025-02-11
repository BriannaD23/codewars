function areYouPlayingBanjo(name) {
  let firstChar = name.slice(0,1).toUpperCase()
  let letterR = ('R').toUpperCase()
  if(firstChar === letterR){
    return  name + " plays banjo"
  }else{
  return name + " does not play banjo" ;
  }
}