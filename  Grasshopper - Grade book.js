//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(score1, score2, score3) {
    // Calculate the average score
    const averageScore = (score1 + score2 + score3) / 3;
    
    if (averageScore >= 90 && averageScore <= 100) {
      return 'A';
    } else if (averageScore >= 80 && averageScore < 90) {
      return 'B';
    } else if (averageScore >= 70 && averageScore < 80) {
      return 'C';
    } else if (averageScore >= 60 && averageScore < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }
  