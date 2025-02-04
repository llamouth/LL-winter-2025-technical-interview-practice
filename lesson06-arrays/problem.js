// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */

function checkLargestElement(nums) {
    if(!nums.length){return -1}
    const maxNum = nums.splice(nums.indexOf(Math.max(...nums)), 1)[0]
    // console.log(maxNum[0])
    for(const num of nums){
        if(!(num * 2 <= maxNum)){
            return -1
        }
    }
    return maxNum
}

module.exports = checkLargestElement;