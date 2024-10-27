/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.*/

var summation = function (num) {
    // find the sum of every number from one to the num
    // number will always be greater than 0
    let sum = 0;
    
    for(let i =1; i <= num; i++){
       sum += i
    }
    
    return sum
}


// I like this solution because it provides a formula that finds the sum of a number so I will be using this in future solutions

// this is formula is constant time

const summation = n => n * (n + 1) / 2;

