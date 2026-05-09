// JavaScript Identifier Rules - Comprehensive Examples

// 1. Must begin with a letter, underscore, or dollar sign
let validName = "starts with letter";
let _underscore = "starts with underscore";
let $dollar = "starts with dollar sign";

// 2. Subsequent characters can be letters, digits, underscores, or dollar signs
let name123 = "letters followed by digits";
let name_123 = "mixed with underscore";
let name$123 = "mixed with dollar sign";
let name_$_123 = "multiple special chars";

// 3. Cannot begin with a digit (UNCOMMENT TO SEE ERROR)
// let 123name = "invalid"; // SyntaxError: Invalid or unexpected token

// 4. Case-sensitive
let myVariable = "lowercase m";
let MyVariable = "uppercase M";
let MYVARIABLE = "all uppercase";
console.log(myVariable !== MyVariable); // true - different identifiers

// 5. Cannot be a reserved word or keyword (UNCOMMENT TO SEE ERROR)
// let let = "invalid";     // SyntaxError
// let const = "invalid";   // SyntaxError
// let function = "invalid"; // SyntaxError
// let class = "invalid";    // SyntaxError
// let if = "invalid";       // SyntaxError
// let return = "invalid";   // SyntaxError

// But these are VALID (reserved words in different contexts)
let className = "valid";    // contains reserved word but not exactly it
let myFunction = "valid";   // contains reserved word but not exactly it
let _class = "valid";       // underscore prefix makes it valid
let $return = "valid";      // dollar prefix makes it valid

// 6. Can contain Unicode letters and digits
let naïve = "Unicode letter";
let 変数 = "Japanese characters";
let переменная = "Cyrillic characters";
let नाम = "Devanagari characters";

// 7. Can contain Unicode escape sequences
let \u0041BC = "A in escape + BC"; // \u0041 is 'A'
let \u006Eame = "n in escape + ame"; // \u006E is 'n'

// 8. Cannot contain spaces or special characters (UNCOMMENT TO SEE ERRORS)
// let my name = "invalid space";     // SyntaxError
// let my-name = "invalid hyphen";    // SyntaxError - parsed as subtraction
// let my@name = "invalid at";        // SyntaxError
// let my#name = "invalid hash";      // SyntaxError
// let my.name = "invalid dot";       // SyntaxError - parsed as property access

// Additional valid patterns
let $ = "single dollar sign";
let _ = "single underscore";
let $123 = "dollar followed by digits";
let _123 = "underscore followed by digits";
let a = "single letter";

// Demonstrating all examples are valid
console.log("All valid identifiers declared successfully!");
console.log(validName, _underscore, $dollar);
console.log(name123, name_123, name$123, name_$_123);
console.log(myVariable, MyVariable, MYVARIABLE);
console.log(className, myFunction, _class, $return);
console.log(naïve, 変数, переменная, नाम);
console.log(ABC, name); // from unicode escape examples
console.log($, _, $123, _123, a);
