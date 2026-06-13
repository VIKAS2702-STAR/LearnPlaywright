const greet = function ( name ) {
    return `Hello, ${ name }`;
}

let r = greet( "Vikas" );
console.log( r );

// Type 4 normal function

function greet1( name1 ) {
    return `Hello, ${ name1 }!`;
}
console.log( greet1( "Pramod Sir" ) );

// Function as a Expression

const greet2 = function ( name1 ) {
    return `Hello, ${ name1 }!`;
}

console.log( greet2( "Mahesh" ) );