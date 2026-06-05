// Find the maximum number among three numbers using the ternary operator
// File: 49_Max_Num_Three_Ternary_op.js

let num1 = 34;
let num2 = 89;
let num3 = 56;

// Nested ternary operator to find the maximum of three numbers
let maxNumber = (num1 > num2)
    ? ((num1 > num3) ? num1 : num3)
    : ((num2 > num3) ? num2 : num3);

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Number 3:", num3);
console.log("Maximum Number:", maxNumber);


// --- Extra Test Cases ---

// Test Case 1: num1 is the largest
let a1 = 100, b1 = 45, c1 = 72;
let max1 = (a1 > b1) ? ((a1 > c1) ? a1 : c1) : ((b1 > c1) ? b1 : c1);
console.log("\nTest 1 ->", a1, b1, c1, "| Max:", max1);

// Test Case 2: num2 is the largest
let a2 = 12, b2 = 150, c2 = 88;
let max2 = (a2 > b2) ? ((a2 > c2) ? a2 : c2) : ((b2 > c2) ? b2 : c2);
console.log("Test 2 ->", a2, b2, c2, "| Max:", max2);

// Test Case 3: num3 is the largest
let a3 = 5, b3 = 18, c3 = 99;
let max3 = (a3 > b3) ? ((a3 > c3) ? a3 : c3) : ((b3 > c3) ? b3 : c3);
console.log("Test 3 ->", a3, b3, c3, "| Max:", max3);

// Test Case 4: All numbers are equal
let a4 = 20, b4 = 20, c4 = 20;
let max4 = (a4 > b4) ? ((a4 > c4) ? a4 : c4) : ((b4 > c4) ? b4 : c4);
console.log("Test 4 ->", a4, b4, c4, "| Max:", max4);

// Test Case 5: Two numbers are equal and largest
let a5 = 60, b5 = 60, c5 = 30;
let max5 = (a5 > b5) ? ((a5 > c5) ? a5 : c5) : ((b5 > c5) ? b5 : c5);
console.log("Test 5 ->", a5, b5, c5, "| Max:", max5);

// Test Case 6: Negative numbers
let a6 = -10, b6 = -3, c6 = -25;
let max6 = (a6 > b6) ? ((a6 > c6) ? a6 : c6) : ((b6 > c6) ? b6 : c6);
console.log("Test 6 ->", a6, b6, c6, "| Max:", max6);
