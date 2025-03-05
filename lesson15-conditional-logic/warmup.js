// Prompt the user for their age
const prompt = require("prompt-sync")();

let age = prompt("Please enter your age: ");

// Check if the user is eligible to vote. If the user is 18 or older, display "You are eligible to vote!". Otherwise, display "You are not eligible to vote yet."
if (age >= 18) {
    console.log('You are eligible to vote!')
} else {
    console.log("You are not eligible to vote yet.")
}

// Prompt the user for a number

// Check if the number is positive, negative, or zero. If the number is positive, display "The number is positive.". If the number is negative, display "The number is negative.". If the number is zero, display "The number is zero."

let userNum = prompt("Gimmie a number any number ")

let newNum = Number(userNum)

if (newNum > 0) {
    console.log("The number is positive.")
} else if (newNum < 0) {
    console.log("The number is negative.")
} else {
    console.log("The number is zero.")
}

// Prompt the user to guess a number between 1 and 100. If the user's guess is correct, display "Congratulations! You guessed the correct number!". If the user's guess is too high, display "Your guess is too high. Please try again.". If the user's guess is too low, display "Your guess is too low. Please try again."
let number = Math.floor(Math.random() * 100);

const guessingGame = () => {
    const guess = prompt("Guess a number any number or press f to quit ")
    const regex = /[a-zA-Z]/g

    if (guess === 'f') { return } 

    if (regex.test(guess)) {
        console.log('Got to be a number my guy')
    }else if (Number(guess) > number) {
        console.log("Your guess is too high. Please try again.")
    } else if (Number(guess) < number) {
        console.log("Your guess is too low. Please try again.")
    } else if(Number(guess) == number){
        console.log("YOU DID IT NO WAY YOU DID IT YOU FREED ME THANK YOU!")
        return
    }
    guessingGame()
}

guessingGame()
