// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

const displayAmountOfStars = (n) => {
    return "*".repeat(n)
}


// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

const displayStarsWithAGap = (n) => {
    return `*${" ".repeat(n-2)}*`
}


// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

const displayBoxWithStars = (n, m) => {

    let result = displayAmountOfStars(m)

    for( let i = 1; i < n - 1; i++ ) {
        result += `\n${displayStarsWithAGap(m)}`
    }

    result += `\n${displayAmountOfStars(m)}`
    
    return result
    
}


// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.

module.exports = { displayAmountOfStars, displayBoxWithStars, displayStarsWithAGap}