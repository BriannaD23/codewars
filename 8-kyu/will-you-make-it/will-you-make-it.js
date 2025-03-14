const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //we have three arguements 
  //car runs for 25 per gallon
   if(  mpg * fuelLeft  >=  distanceToPump ){
     
   return true
   }else{
     return false
   }
  
};