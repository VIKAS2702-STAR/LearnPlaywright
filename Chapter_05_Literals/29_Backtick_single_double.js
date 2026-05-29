// Example 1: String Interpolation (Only Backticks allow this)
let name = "Vikas";
let single = 'Hello ' + name;  // Single quote: must use + operator
let double = "Hello " + name;  // Double quote: must use + operator
let backtick = `Hello ${name}`; // Backtick: use ${variable} directly

console.log(single);  // Output: Hello Vikas
console.log(double);  // Output: Hello Vikas
console.log(backtick); // Output: Hello Vikas

// Example 2: Multi-line Strings (Only Backticks allow this)
let singleLine = 'Line 1\nLine 2';  // Single quote: need \n for new line
let doubleLine = "Line 1\nLine 2";  // Double quote: need \n for new line
let backtickLine = `Line 1
Line 2`; // Backtick: new line works directly

console.log(singleLine);
console.log(doubleLine);
console.log(backtickLine);

// Key Difference:
// Single ('') and Double ("") quotes are identical in JavaScript.
// Backticks (``) are Template Literals - they support interpolation ${} and multi-line strings.
