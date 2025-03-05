/**
 * Given a string, determine if it is a valid palindrome.
 * A valid palindrome is a string that reads the same forwards and backwards,
 * ignoring any non-alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if the string is a valid palindrome, false otherwise.
 *
 * Examples:
 * Input: "Madam, in Eden, I'm Adam."
 * Output: true
 *
 * Input: "Hello, World!"
 * Output: false
 */
function isValidPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isValidPalindrome(str.slice(1, str.length - 1));

}

module.exports = isValidPalindrome;
