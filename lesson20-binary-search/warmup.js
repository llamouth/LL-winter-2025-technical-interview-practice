// 1. Given an array create a function that returns the element at the center of the array;
// input: [1,2,3,4] output: 2;
// input: [1,2,3,4,5] output: 3
const locateCenterOfArray = (arr) => {
    return arr[Math.floor((arr.length - 1) / 2)]
}

// 2. Given an array of integers return true if the array is sorted otherwise return false;
// input: [1,5,8,9,11] output: true
// input: [1,2,3,0] output: false
const isTheArraySorted = (arr) => {
    return arr.every((num, i) => num === arr[arr.length - 1] || num <= arr[i + 1])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false
        }
    }
    return true
}
console.log(isTheArraySorted([1,5,8,9,11]))

// 3. Given an array and a value return the index where that value can be found. Otherwise, return -1.
// input [1,2,3,4,5], 3 output: 2
// input ["yellow", "blue", "green"], "purple" output: -1

const findGivenValue = (arr, val) => {
    return arr.indexOf(val)
}

// console.log(findGivenValue(["yellow", "blue", "green"], "blue"))