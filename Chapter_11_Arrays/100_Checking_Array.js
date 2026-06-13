// Checking Arrays

// Check if something is an array
let result = Array.isArray( [1, 2, 3] );
console.log( result );
let result1 = Array.isArray( "a" ) //[]
console.log( result1 );


// Every & Some

[80, 90, 85].every( s => s >= 70 ); // true
[65, 75, 85].every( s => s >= 70 );// false

// Playwright API
[200, 201, 202].every( statuscode => statuscode > 200 );

// some- AT least one must pass

[80, 60, 85].some( s => s < 70 );//true
[80, 90, 85].some( s => s < 70 );//false