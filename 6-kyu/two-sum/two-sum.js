function twoSum(numbers, target) {
// we need to reach the target number
// it should find two different items in array
// indexes should be return
​
    for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target)
          return [i ,j]
      }
    }
    return [];
}
​