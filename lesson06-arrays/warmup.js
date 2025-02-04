// 1. Counting: create a function that prints out the numbers 1-10
const couting = () => {
    for(let i = 1; i < 11; i++){
        console.log(i)
    }
}
// 2. Evens: create a function that prints out the even numbers 1-20
const countEvenNums = () => {
    for(let i = 2; i < 21; i+=2) {
        console.log(i)
    }
}
// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

const printFizzBuzz = () => {
    for(let i = 3; i < 101; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz',i)
        }else if(i % 3 === 0){
            console.log('Fizz',i)
        }else if(i % 5 === 0){
            console.log('Buzz',i)
        }
    }
    
}

printFizzBuzz()