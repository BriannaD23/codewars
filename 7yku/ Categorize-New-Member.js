function openOrSenior(data){
  
    return data.map(([age, handicap]) => {
    
      if( age >= 55 && handicap > 7){
        return 'Senior'
      }else {
        return 'Open'
      };
      
    });
}


// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//
// }
  