// Given a string s and an integer k, write a function that finds the length of the longest substring that contains at most k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has length 3 and contains 2 distinct characters.

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The string "aa" has length 2 and contains 1 distinct character.

// Input: s = "abcdef", k = 3
// Output: 3
// Explanation: Any substring of length 3 contains exactly 3 distinct characters.

module.exports = function longestSubstringKDistinct(str, k) {

    const seenObj = {}
    let left = 0
    let right = 0 
    let distinctCount = 0
    let maxLength = 0

    while (right < str.length) {
        const rightChar = str[right]

        if (!seenObj[rightChar]) {
            seenObj[rightChar] = 0
            distinctCount++
        }

        seenObj[rightChar]++
        right++

        while (distinctCount > k) {
            const leftChar = str[left]
            seenObj[leftChar]--

            if (seenObj[leftChar] === 0) {
                delete seenObj[leftChar];
                distinctCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left)
    }

    return maxLength
};
  