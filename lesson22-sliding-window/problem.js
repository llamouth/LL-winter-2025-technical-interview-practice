// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

module.exports = function maxSubArraySum(arr, subArrLength) {
  
  let largestSum = -Infinity
  let left = 0;
  let right = subArrLength - 1

  while (right != arr.length) {
    let tempSum = arr.slice(left, right + 1).reduce((a, b) => a + b)

    if (tempSum > largestSum) {
      largestSum = tempSum
    }

    left++
    right++
  }

  return largestSum
};
