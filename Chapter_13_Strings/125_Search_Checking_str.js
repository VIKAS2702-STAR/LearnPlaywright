// Searching and Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// Inclueds

// console.log( url.includes( "staging" ) );
// console.log( url.includes( "production" ) );

// startsWith and endswith

console.log( url.startsWith( "https" ) ); // true
console.log( url.startsWith( "https://" ) ); // true
console.log( url.endsWith( "true" ) ); // true

// indexOf and lastIndexOf

console.log( url.indexOf( "a" ) );
console.log( url.lastIndexOf( "a" ) );

console.log( url.indexOf( "nothere" ) );
console.log( url.indexOf( "x" ) );

console.log( url.search( /login/ ) );
console.log( url.search( /vwo/ ) );

// /regex/ - Regular Expression - These are nothing but
// A-patterns that you can find within the string automatically.

