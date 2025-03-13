var countSheep = function (num){
  //your code here
  // we are going to print 
 if(num === 0) return ''
 let result = ''
 for(let i = 1; i <= num; i++){
   result +=(`${i} sheep...`)
 }
 return result
 
}