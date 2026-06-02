// == (Loose Equality) vs === (Strict Equality) in JavaScript

console.log("=== Confusing Comparison: == vs === ===\n");

// ========================================================
// 1. NUMBER vs STRING
// ========================================================
console.log("1. NUMBER vs STRING");
console.log("5 == '5':", 5 == '5');           // true  -> string '5' converted to number 5
console.log("5 === '5':", 5 === '5');         // false -> different types (number vs string)
console.log("0 == '0':", 0 == '0');           // true
console.log("0 === '0':", 0 === '0');         // false
console.log("");

// ========================================================
// 2. NULL vs UNDEFINED
// ========================================================
console.log("2. NULL vs UNDEFINED");
console.log("null == undefined:", null == undefined);     // true  -> special case in JS
console.log("null === undefined:", null === undefined);     // false -> different types
console.log("null == null:", null == null);               // true
console.log("undefined == undefined:", undefined == undefined); // true
console.log("");

// ========================================================
// 3. BOOLEAN vs NUMBER
// ========================================================
console.log("3. BOOLEAN vs NUMBER");
console.log("true == 1:", true == 1);         // true  -> true coerced to 1
console.log("true === 1:", true === 1);       // false
console.log("false == 0:", false == 0);        // true  -> false coerced to 0
console.log("false === 0:", false === 0);     // false
console.log("true == 2:", true == 2);         // false -> true is 1, not 2
console.log("");

// ========================================================
// 4. BOOLEAN vs STRING (Very Confusing!)
// ========================================================
console.log("4. BOOLEAN vs STRING");
console.log("true == 'true':", true == 'true');    // false! -> 'true' string becomes NaN
console.log("false == 'false':", false == 'false'); // false! -> 'false' string becomes NaN
console.log("true == '1':", true == '1');        // true  -> '1' becomes number 1
console.log("false == '0':", false == '0');      // true  -> '0' becomes number 0
console.log("");

// ========================================================
// 5. EMPTY STRING vs ZERO vs FALSE
// ========================================================
console.log("5. EMPTY STRING vs ZERO vs FALSE");
console.log("'' == false:", '' == false);      // true  -> both become 0
console.log("'' === false:", '' === false);    // false
console.log("'' == 0:", '' == 0);              // true  -> '' becomes 0
console.log("'' === 0:", '' === 0);            // false
console.log("0 == false:", 0 == false);        // true  -> false becomes 0
console.log("0 === false:", 0 === false);      // false
console.log("");

// ========================================================
// 6. ARRAY vs STRING/NUMBER
// ========================================================
console.log("6. ARRAY vs STRING/NUMBER");
console.log("[1,2] == '1,2':", [1,2] == '1,2');       // true  -> array becomes string '1,2'
console.log("[1,2] === '1,2':", [1,2] === '1,2');     // false
console.log("[] == '':", [] == '');                  // true  -> [] becomes ''
console.log("[] === '':", [] === '');                // false
console.log("[] == 0:", [] == 0);                    // true  -> [] becomes '' then 0
console.log("[] === 0:", [] === 0);                  // false
console.log("[0] == false:", [0] == false);           // true  -> [0] becomes '0' then 0
console.log("[0] === false:", [0] === false);         // false
console.log("");

// ========================================================
// 7. OBJECT vs PRIMITIVE
// ========================================================
console.log("7. OBJECT vs PRIMITIVE");
const obj = { valueOf: () => 42 };
console.log("obj == 42:", obj == 42);            // true  -> calls valueOf()
console.log("obj === 42:", obj === 42);          // false
console.log("");

// ========================================================
// 8. NaN (Special Case)
// ========================================================
console.log("8. NaN (Special Case)");
console.log("NaN == NaN:", NaN == NaN);          // false! -> NaN is never equal to anything
console.log("NaN === NaN:", NaN === NaN);        // false! -> even with strict equality
console.log("isNaN(NaN):", isNaN(NaN));           // true  -> use this instead
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("");

// ========================================================
// 9. Special Number Values
// ========================================================
console.log("9. Special Number Values");
console.log("+0 == -0:", +0 == -0);              // true
console.log("+0 === -0:", +0 === -0);            // true
console.log("Infinity == Infinity:", Infinity == Infinity);     // true
console.log("Infinity === Infinity:", Infinity === Infinity);   // true
console.log("");

// ========================================================
// 10. TRICKY EDGE CASES
// ========================================================
console.log("10. TRICKY EDGE CASES");
console.log("[] == ![]:", [] == ![]);            // true!  -> [] is truthy, ![] is false, [] == false -> true
console.log("[] === ![]:", [] === ![]);          // false
console.log("'' == []:", '' == []);              // true
console.log("'' === []:", '' === []);            // false
console.log("0 == '':", 0 == '');                // true
console.log("0 === '':", 0 === '');              // false
console.log("null == 0:", null == 0);            // false! -> null only equals undefined
console.log("null === 0:", null === 0);          // false
console.log("undefined == 0:", undefined == 0);  // false
console.log("undefined === 0:", undefined === 0);// false
console.log("");

// ========================================================
// 11. COMPARISON WITH 'OBJECT IS' (ES6)
// ========================================================
console.log("11. Object.is() (ES6)");
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));       // true
console.log("Object.is(+0, -0):", Object.is(+0, -0));           // false
console.log("Object.is(5, '5'):", Object.is(5, '5'));           // false
console.log("");

// ========================================================
// 12. REAL-WORLD PRACTICAL EXAMPLES
// ========================================================
console.log("12. Real-World Practical Examples");

function checkValue(input) {
    // DANGEROUS: loose equality with null/undefined
    if (input == null) {
        console.log("  (== null) catches both null and undefined");
    }
    
    // SAFE: strict equality
    if (input === null) {
        console.log("  (=== null) catches only null");
    }
    
    if (input === undefined) {
        console.log("  (=== undefined) catches only undefined");
    }
}

console.log("Calling checkValue(null):");
checkValue(null);
console.log("Calling checkValue(undefined):");
checkValue(undefined);
console.log("");

// String comparison gotcha
const userInput = "5";
const configValue = 5;
console.log("userInput == configValue:", userInput == configValue);   // true (accidental match!)
console.log("userInput === configValue:", userInput === configValue); // false (correct!)
console.log("");

// ========================================================
// 13. COMPARISON CHAIN GOTCHA
// ========================================================
console.log("13. Comparison Chain Gotcha");
const a = 1, b = true, c = "1";
console.log("a == b == c:", a == b == c);      // false! -> (1 == true) = true, then true == "1" = true... wait!
console.log("Let's break it down:");
console.log("  a == b:", a == b);               // true
console.log("  true == c (which is '1'):", true == '1'); // true -> true becomes 1, '1' becomes 1
console.log("  So a == b == c is actually:", a == b == c); // true!

// But with different values:
const x = 0, y = false, z = "0";
console.log("x == y == z:", x == y == z);      // false! -> (0 == false) = true, true == "0" = false
console.log("");

// ========================================================
// SUMMARY: Best Practice
// ========================================================
console.log("=== SUMMARY: Best Practice ===");
console.log("ALWAYS use === (strict equality) for comparisons");
console.log("Use == (loose equality) ONLY when:");
console.log("  1. Checking for both null AND undefined: if (x == null)");
console.log("  2. You explicitly want type coercion (rare)");
console.log("\nCommon pitfalls to avoid:");
console.log("  - Don't compare arrays/objects with ==");
console.log("  - Don't compare booleans with strings");
console.log("  - Be careful with empty strings and zeros");
console.log("  - Use Number.isNaN() or Object.is() for NaN checks");
