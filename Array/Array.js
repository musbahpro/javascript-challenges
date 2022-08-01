/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here


console.log(my.slice(0,4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(1,3).reverse()); // ["Elham", "Mazero"]

console.log(my[1][4] + my[3][0]); // "rO"

// Add and Remov Elements
my.push("musbah")
my.pop("musbah")
my.unshift("musbah")
my.shift("musbah")

console.log(my);