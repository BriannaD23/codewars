function friend(friends){
  //your code here
  // we are returning names with four characters 
  // best to use filter I feel 
​
 return friends
 .filter((names) => {
   if(names.length === 4){
     return names
    console.log(names.length)
   }
 })
​
}