let str = "Login_Test_Pass_001";
// slice (Start, end) - negative indexes supported
console.log( str.slice( 0, 5 ) );
console.log( str.slice( 11 ) );

let testNumber = str.slice( -3 );
console.log( testNumber );

console.log( str.includes( "Pass" ) );

// substring (start,end) - no negatives(treat as 0)

console.log( str.substring( 6, 10 ) );
console.log( str.at( 0 ) );