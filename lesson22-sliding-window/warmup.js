// 1. Given an array of integers return the largest number


// 2. Given an array of integers return the largest sum for two consecutive numbers
// input: [20,17,25] output: 42

const largestConsecutiveSum = (arr) => {

    let left = 1
    let right = left + 1
    let largestSum = arr[0] + arr[1]

    while (left != arr.length - 1) {
        let sum = arr[left] + arr[right]
        if (sum > largestSum) {
            largestSum = sum
        }
        left++
        right++
    }
    return largestSum
    
}

console.log(largestConsecutiveSum([20,17,25]))