const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log( user );

// Accessing Properties

console.log( user.name );
console.log( user["age"] );

// Dynamic property access
const key = "age";
console.log( user[key] );

// Adding Or Modifying properties
user.city = "NYC";
user.age = 31;
console.log( user );

// Below example we will not use any where it is an axmple to understand the concept.

let obj = { name: "Login" };
console.log( Object.getOwnPropertyDescriptor( obj, "name" ) );

//{
//Value:"Login",
//Writable: true,       <----   can change the value
//enumerable :true,     <----shows in for...in/objects.keys()
//configurable: true     <----can delete or redefine
// }