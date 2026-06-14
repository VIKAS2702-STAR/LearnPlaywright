let str = " Hello, World! ";
console.log( str.toUpperCase() );
console.log( str.toLowerCase() );

console.log( str.trim() );

console.log( str.trimStart() )
console.log( str.trimEnd() );

let msg = "Test:FAIL. Retry:FAIL.";
console.log( msg.replace( "FAIL", "PASS" ) );
console.log( msg.replaceAll( "FAIL", "PASS" ) );
console.log( msg.replace( /FAIL/g, "PASS" ) ); // This is Regex Method


// Concatenation

console.log( "Hello" + " " + "World" );
console.log( "Hello".concat( " ", "World" ) );
console.log( `${ "Hello" } ${ "World" }` );


let url = "https://staging.vwo.com/api/login?retry=true";
console.log( url.replace( /staging/g, "qa" ) );

let r = "pass,fail,skip".split( "," );
console.log( r );

let rr = "test_login_pass".split( "_" ).join( " " );
console.log( rr );

let num = ["2024", "03", "07"];
let date = num.join( "-" );
console.log( date );




