// Using array methods such as reduce(), map(), or filter(), solve these problems: 

// 1. Given a sorted array, return the largest sum between two numbers. 
const findLargestSum = (arr) => {
    return arr[arr.length - 2] + arr[arr.length - 1]
}

const findLargestSum2 = (arr) => {
    return arr.reduce((acc, curr, i) => {
        if(i === arr.length - 1){return acc}
        let sum = curr + arr[i + 1]
        if (sum > acc) {
            return sum
        }
        return acc
    }, -Infinity)
}

console.log(findLargestSum2([4, 2, 8, 5, 9, 1]))

function maxSum(arr, k) {
    if (arr.length < k) return null; // Handle edge case
    let windowSum = 0, maxSum = 0;
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    for(let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum); // Check max within the updated window
    }
    return maxSum;
}