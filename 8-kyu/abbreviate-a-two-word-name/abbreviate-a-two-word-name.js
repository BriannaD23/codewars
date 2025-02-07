function abbrevName(name){
//take in two names 
// one space in between
// most likely be using split and we need to turn the array
// need to return first and last letter 
​
    return name
    .split(' ')
    .map((initial) => {
        return initial.slice(0, 1).toUpperCase()
    })
    .join('.')
    
}