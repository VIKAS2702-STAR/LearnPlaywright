// Objects
// Key and Value

let student1 = { name: "Vikas", age: 31 }; // Here name = key and value = Vikas
let student2 = { name: "Vikas" };
let student3 = { name: "Vikas", age: 31, Phone: 9969281949 };

// Key will not be in the double quotes
// below key in double quote is actually JSON

let JSON_student4 = { "name": "Vikas", "age": 31, "Phone": 9969281949 };

let a = { status: "pass" };
// console.log( a.status );
// console.log( a["status"] );

// let a1 = { status: "pass" };
// console.log( a1.status );

// let b = a;
// console.log( b.status );

let b = a;
b.status = "Fail";
console.log( a.status );
console.log( b.status );

if ( b === a ) {
    console.log( "true" );
}
else {
    console.log( "false" );
}