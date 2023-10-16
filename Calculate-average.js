function findAverage(array) {
   
    if(array.length === 0){
       return 0;// this returns an array if it is empty
    }
    
    let sum =0;// set sum to zero to use later
    
   for(let i =0; i < array.length; i++){
      sum += array[i];// add the numbers in the array
    }
    
    let average = sum/array.length;//calculate average
    return average;//return average
 }