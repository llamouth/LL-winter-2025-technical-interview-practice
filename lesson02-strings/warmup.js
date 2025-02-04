// 1. given a string with three characters, return the second character
const retrieveSecondChar = (str) => {
    return str.charAt(1);
}

// 2. get the second and third char from a string. the string will always have atleast three characters
const retrieveSecondAndThirdChar = (str) => {
    return `${retrieveSecondChar(str)}${str.charAt(2)}`
}

// 3. Given a word with 5 letters, return the second through 5th letter

function retrieveSecondThroughFifthLetter (word, n = 5){
  return word.slice(1, n);
}

// 4. given a string and a number called N, return the second through the Nth character

const retrieveSecondAndNthChar = (str, n) => {
    return retrieveSecondThroughFifthLetter(str, n)
}

// 5. Given an array of booleans, return an arrray of only false elements

const getOnlyFalseElements = (arr) => {
    // filter through an array and return only false
    return arr.filter(ele => !ele)
}

// 6. given a string with two words, put ' the ' between the words and return the string

const insertTheInBetween = (str) => {
    let arr = str.split(" ")
    return `${arr[0]} the ${arr[1]}`
}

console.log(insertTheInBetween('to beach'))
// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
