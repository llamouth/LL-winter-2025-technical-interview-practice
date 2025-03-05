// Write a function binarySearch that takes a sorted array of integers and a target integer. The function should return the index of the target in the array if it exists. If the target does not exist, return -1.

// arr (array of integers): A sorted array of integers in ascending order. The array may contain duplicate values.
// target (integer): The value to search for in the array.

module.exports = function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  let mid;
  
  while (left != right - 1) {

    mid = Math.floor((right + left) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      // console.log(arr[mid])
      left = mid
    } else {
      right = mid
    }
  }

  if (arr[mid] === target || arr[mid + 1] == target) {
    return arr[mid] === target ? mid : mid + 1
  }

  return -1
  
};



function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  
  while (left != right - 1) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      // console.log(arr[mid])
      left = mid
    } else {
      right = mid
    }
  }
  return -1
  
};
