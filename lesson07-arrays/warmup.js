// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

const sumArray = (arr) => {
    return arr.reduce((sum, num) => {
        return sum + num
    })
}

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
const findMax = (arr) => {
    return Math.max(...arr)
}

const findMaxAgain = (arr) => {
    let max = -Infinity

    for (const num of arr) {
        if (num > max) {
            max = num
        }
    }

    return max
}

// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.

const reverseArray = (arr) => {
    const resultArr = []

    for (const num of arr) {
        resultArr.unshift(num)
    }

    return resultArr
}

console.log(reverseArray([1,2,3]))