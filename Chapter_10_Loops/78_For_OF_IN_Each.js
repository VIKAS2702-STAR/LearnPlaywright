// Creating Arrays // Array Literals (prefered)

let browser = ["Chrome", "Firefox", "Safari"];

// Array Constructor

let scores = new Array( 3 );
let scores2 = new Array( 1, 2, 3 );
console.log( scores );
console.log( scores2 );


let number = new Array( 100, 200, 300, 400 ); //0-3:4
console.log( number );

let test = Array.of( 10, 20, 30, 40, 50 );
console.log( test );

// Array From

let chars = Array.from( "Hello" );
// ["H","e","l","l",o]
console.log( chars );


// let numbers = Array.from( "123456789" );
// console.log( numbers );