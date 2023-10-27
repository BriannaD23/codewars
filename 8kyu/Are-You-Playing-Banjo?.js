function areYouPlayingBanjo(name) {
    let firstLetter = name[0];
    let rLetter = 'r';
    
    if (firstLetter.toLowerCase() === rLetter) {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
}
    