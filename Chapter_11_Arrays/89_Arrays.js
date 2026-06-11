// Creating Arrays // Array Literal (preferred)
let browser = ["chrome", "firefox", "safari"];

// Array Constructor

let scores = new Array( 3 ); // Here 3 is total number of element or length
scores[0] = 1;
scores[1] = 2;
scores[2] = 3;
let scores2 = new Array( 4, 5, 6 );
console.log( scores );
console.log( scores2 );

let numbers = new Array( 100, 200, 300, 400, 500 );
console.log( numbers );

let test = Array.of( 10, 20, 30, 40, 50 );
console.log( test );

// Array.from(  )
let chars = Array.from( "Hello" ); // we will use Array.from with charachters only
console.log( chars );

let numbers1 = Array.from( "123456789" ); // we do not use Array.from with numbers
console.log( numbers1 );
