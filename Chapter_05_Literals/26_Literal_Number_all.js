// Chapter 05: Literals
// Topic: All Number Types in JavaScript

/*
  JavaScript has a single Number type for all numeric values (integers and floats),
  except BigInt which is a separate type for arbitrarily large integers.

  1. Integer Literal
     - Whole numbers without a fractional component.
     - Example: 42, 0, -7

  2. Floating-Point Literal
     - Numbers with a decimal point.
     - Example: 3.14, 0.5, .75

  3. Binary Literal (base-2)
     - Starts with 0b or 0B.
     - Example: 0b1010

  4. Octal Literal (base-8)
     - Starts with 0o or 0O.
     - Example: 0o17

  5. Hexadecimal Literal (base-16)
     - Starts with 0x or 0X.
     - Example: 0xFF

  6. Exponential Notation
     - Represents numbers multiplied by a power of 10.
     - Example: 1.5e3 (1500), 2e-2 (0.02)

  7. BigInt Literal
     - Appends 'n' to an integer for arbitrarily large whole numbers.
     - Example: 12345678901234567890n

  8. Special Numeric Values
     - Infinity: result of dividing by zero (1 / 0)
     - -Infinity: negative divide by zero (-1 / 0)
     - NaN: "Not-a-Number", result of invalid math (0 / 0)

  9. Numeric Separators
     - Underscores can be used to make large numbers more readable.
     - Example: 1_000_000
*/

// 1. Integer Literal
let intNum = 42;
console.log("Integer:", intNum, "| Type:", typeof intNum);

// 2. Floating-Point Literal
let floatNum = 3.14159;
console.log("Float:", floatNum, "| Type:", typeof floatNum);

// 3. Binary Literal (base-2)
let binaryNum = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binaryNum, "| Type:", typeof binaryNum);

// 4. Octal Literal (base-8)
let octalNum = 0o17; // 15 in decimal
console.log("Octal 0o17:", octalNum, "| Type:", typeof octalNum);

// 5. Hexadecimal Literal (base-16)
let hexNum = 0xFF; // 255 in decimal
console.log("Hexadecimal 0xFF:", hexNum, "| Type:", typeof hexNum);

// 6. Exponential Notation
let expNum1 = 1.5e3;  // 1500
let expNum2 = 2e-2;   // 0.02
console.log("Exponential 1.5e3:", expNum1, "| Type:", typeof expNum1);
console.log("Exponential 2e-2:", expNum2, "| Type:", typeof expNum2);

// 7. BigInt Literal
let bigIntNum = 123456789012345678901234567890n;
console.log("BigInt:", bigIntNum, "| Type:", typeof bigIntNum);

// 8. Special Numeric Values
console.log("Infinity:", Infinity, "| Type:", typeof Infinity);
console.log("-Infinity:", -Infinity, "| Type:", typeof -Infinity);
console.log("NaN:", NaN, "| Type:", typeof NaN);

// 9. Numeric Separators (for readability)
let readableNum = 1_000_000;
console.log("Numeric Separator 1_000_000:", readableNum, "| Type:", typeof readableNum);

// 10. Negative Numbers
let negativeNum = -99;
console.log("Negative Number:", negativeNum, "| Type:", typeof negativeNum);

/*
  Quick Summary:
  - All regular numbers (int, float, binary, octal, hex, exponential) share the type "number".
  - BigInt has its own type "bigint".
  - Infinity, -Infinity, and NaN are also of type "number".
  - Use numeric separators (underscores) to improve readability in large literals.
*/
