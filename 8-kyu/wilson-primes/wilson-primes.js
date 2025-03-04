function amIWilson(p) {
    return p === 5 || p === 13 || p === 563;
}
​
// function isWilsonPrime(P) {
//     if (P < 2) return false; // Prime numbers must be >= 2
​
//     // Calculate (P - 1)! (factorial)
//     let factorial = 1;
//     for (let i = 1; i < P; i++) {
//         factorial *= i;
//     }
​
//     // Check if (P-1)! + 1 is divisible by P * P
//     return (factorial + 1) % (P * P) === 0;
// }
​