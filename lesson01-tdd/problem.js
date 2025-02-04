/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * 
 *   

 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

/*

  Use a two pointer right and left  
  right starts at the end left starts at the start 
  while left is less than right 
  if strings do not equal return false 
  else increase left and decrease right to move the pointers
  

  
*/

function isPalindrome(str) {
  if(typeof str != "string"){
    throw new Error("Wrong input")
  }
  if(!str.length || str.length == 1){return true}

  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
  let left = 0
  let right = str.length - 1

  while(left < right){
    if(str[left]!= str[right]){
      return false
    }

    left++
    right--
  }

  return true
}




module.exports = isPalindrome;
