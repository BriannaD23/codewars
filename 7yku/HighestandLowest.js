/*In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.*/

function highAndLow(numbers) {
    let numList = numbers.split(' ').map(num => parseInt(num));
    let highest = Math.max(...numList);
    let lowest = Math.min(...numList);
    
    return highest + ' ' + lowest;
}


