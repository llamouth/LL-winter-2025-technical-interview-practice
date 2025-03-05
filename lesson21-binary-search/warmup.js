module.exports = binarySearch = (arr, target, left = 0, right = arr.length - 1) => { 

    if (left >= right) {
        return - 1
    }

    if (arr[right] === target) {
        return right
    } 

    const mid = Math.floor(left + right / 2)
    
    if (arr[mid] === target) {
        return mid
    }

    if (mid > target) {
        right = mid - 1
        return binarySearch(arr, target, left, right)
    } else {
        left = mid + 1
        return binarySearch(arr, target, left, right)
    }
}
const array = [1, 3, 5, 7, 9, 1]
console.log(binarySearch(array, 5))