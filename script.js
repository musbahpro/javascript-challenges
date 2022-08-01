/*
  String Challenge
*/
let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,7)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ").slice(0,1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.split(" ").slice(0,1) + " " + a.split(" ").slice(2)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1,a.length -1).toUpperCase() + a.charAt(a.length -1).toLowerCase()); // eLZERO WEB SCHOOl



