function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    return str.split(" ").map(ele => `${ele[0].toUpperCase()}${ele.slice(1)}`).join(" ")
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    let count = 0
    const vowels = {
        "a": true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    }

    for(const letter of str){
        if(vowels[letter.toLowerCase()]){
            count++
        }
    }

    return count
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
