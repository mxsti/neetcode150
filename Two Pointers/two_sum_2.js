/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];
    
    while (sum != target) {
        if (sum < target) { i++ } else { j-- };
        sum = numbers[i] + numbers[j];
    }

    return [i + 1, j + 1];
};

numbers = [2,7,11,15]
target = 9

console.log(twoSum(numbers,target))