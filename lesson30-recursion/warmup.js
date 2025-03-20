// 1. Write a simple recursive function `countDown(n)` that logs numbers from n down to 1.
//    Base case: if n <= 0, stop.

const countDown = (n) => {
    if (n <= 0) { return n }
    
    console.log(countDown(n - 1))

    // return n
}

// console.log(countDown(10))

//    Example:
//    countDown(3)
//    Expected output in console:
//    3
//    2
//    1

// 2. Implement a function `isEvenRecursively(n)` that determines if a number is even using recursion.
//    Base case: 0 is even; 1 is odd.
//    If n < 0, handle negative by converting to positive or handle sign accordingly.

//    Examples:
//    isEvenRecursively(4) => true
//    isEvenRecursively(7) => false
//    isEvenRecursively(-2) => true

const isEvenRecursively = (n) => {
    if (n == 1) { return false }
    
    if (n == 2) { return true }
    
    n = n -  2
    return isEvenRecursively (n)
}

// console.log(isEvenRecursively(1001))

// 3. Create a recursive function `reverseStringRecursively(str)` that returns the reversed version of `str`.
//    Base case: empty string or length of 1 is already reversed.
//    Recursive case: last character + reverse of substring without the last character.

//    Examples:
//    reverseStringRecursively("abc") => "cba"
//    reverseStringRecursively("hello") => "olleh"

const reverseStringRecursively = (str) => {
    if (!str.length) { return str }
    
    return str.slice(-1) + reverseStringRecursively(str.slice(0, -1))
}

// 4. Test each function with console.log and verify the outputs match your expectations.
console.log(reverseStringRecursively("a"))

const unPackMatrix = (arr) => {
    if (!arr.length) { return arr }
    
    if (typeof arr[0] === "number") {
        arr.push()
    }
}