"use strict";
// In terminal run code with node warmup.js. If there are any errors, debug them.

function buggyCode() {
  let x = 15;
  function innerFunction() {
    let y = 5;
    console.log(x + y);
  }

  innerFunction();
}

buggyCode();


function sumArrayOfNumbers(a) {
  let sum = 0;
  for (let ele of a) {
    sum += +ele;
  }
  return sum;
}

console.log(sumArrayOfNumbers(["1", "2", "3", "4", "5"]));
