function printerError(s) {
    let errorCount = 0;
​
    for(let char of s){
       if(!/[a-m]/.test(char)){
           errorCount++
       }
     }
    return `${errorCount}/${s.length}`
}
​