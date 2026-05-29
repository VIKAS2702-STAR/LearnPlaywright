// Chapter 05: Literals
// Topic: null vs undefined in JavaScript

/*
  null vs undefined — What's the difference?

  1. undefined
     - Means a variable has been declared but has not been assigned a value yet.
     - It is the default value of uninitialized variables.
     - It is also the return value of a function that does not explicitly return anything.
     - typeof undefined === "undefined"

  2. null
     - Represents the intentional absence of any object value.
     - It must be assigned explicitly by the programmer.
     - It is often used to indicate "no value" or "empty" on purpose.
     - typeof null === "object" (this is a well-known quirk in JavaScript)

  Key differences:
  - undefined = "not assigned yet"
  - null      = "assigned as empty on purpose"
*/

// Example 1: undefined (default when not assigned)
let userName;
console.log("userName:", userName);           // undefined
console.log("typeof userName:", typeof userName); // "undefined"

// Example 2: null (assigned intentionally)
let userEmail = null;
console.log("userEmail:", userEmail);           // null
console.log("typeof userEmail:", typeof userEmail); // "object"

// Example 3: function with no return
function sayHello() {
  // no return statement
}
let result = sayHello();
console.log("result:", result);                   // undefined

// Example 4: object property that does not exist
let person = { name: "Alice" };
console.log("person.age:", person.age);           // undefined (property doesn't exist)

// Example 5: comparing null and undefined
console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)

/*
  Summary:
  Use undefined when something is missing by default.
  Use null when you want to explicitly say "this is empty / has no value".
*/
