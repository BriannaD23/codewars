function bonusTime(salary, bonus) {
    // function takes in two arguements
    //salary interger
    //bonus is a bool
    //£ this is punds we add $ to make it US currency
      
      if (bonus === true) {
        return `£${salary * 10}`;
      } else {
        return `£${salary}`;
      }
}
    
      