function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) return [];
    
    let positiveCount = 0
    let sumNegative = 0;
    
    input.forEach(number =>{
      if(number > 0){
        positiveCount += 1;
      }else if(number < 0){
        sumNegative += number;
      }
      
    });
    
    return [positiveCount, sumNegative]
}