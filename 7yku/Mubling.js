function accum(s) {
  
    let result = [];
    
    for(let i =0; i < s.length; i++){
      let modified = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
      result.push(modified)
    }
    
    return result.join('-');
    
  
}