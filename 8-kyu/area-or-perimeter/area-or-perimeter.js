 const areaOrPerimeter = function(l , w) {
  // so we have length and width as parameters
  // area is length times width
  // perimeter is all of the sides added up
  // maybe we could do an if statement if l === w then square it
  // if l !== w add up the sides
  
​
  if( l === w){
    return l * w
  }else if( l !== w){
    return l+w+l+w
  }
​
  
};