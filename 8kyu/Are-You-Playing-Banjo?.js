function areYouPlayingBanjo(name) {
    let firstLetter = name[0];
    let rLetter = 'r';
    
    if (firstLetter.toLowerCase() === rLetter) {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
}

// second solution
// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === 'r') {
//     return name + ' plays banjo';
//   } else {
//     return name + ' does not play banjo';
//   }
// }f