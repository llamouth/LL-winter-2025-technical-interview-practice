// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
const equation = (num) => {
    return num % 2 === 0
}
const filterEvens = (arr) => {
    return arr.filter(equation)
}


// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.
const conversion = (str) => {
    return str.length
}
const convertStringToLength = (arr) => {
    return arr.map(conversion)
}


// Prompt 3: Write a function that takes an array of objects representing students, where each object has a "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.

const greaterThan18 = (student) => {
    return student.age >= 18 
}

const filterStudents = (arr) => {
    return arr.reduce((arr, student) => {
        if (greaterThan18(student)) {
            arr.push(student.name)
        }
        return arr
    },[])
}

const students = [
    {age: 18, name: "nyla"},
    {age: 13, name: "ne"},
    {age: 29, name: "larry"},
    {age: 30, name: "katt"},
]

console.log(filterStudents(students))