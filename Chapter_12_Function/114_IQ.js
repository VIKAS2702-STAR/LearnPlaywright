// Returns a Value

function getStatus( code ) {
    if ( code >= 200 && code < 300 )
        return "Success!";
    if ( code >= 400 && code < 500 )
        return "Client Error!";
    if ( code >= 500 )
        return "Server Error!";
}

const r = getStatus( 200 );
console.log( r );
const c = getStatus( 404 );
console.log( c );
const s = getStatus( 500 );
console.log( s );

function logTest( name ) {
    console.log( `Running:${ name }` );
    // no return statement
}
let result = logTest( "Login" );
console.log( result );

greet( "Alice" );

function greet( name ) {
    return `Hello,${ name }!`;
}

sayHi( "Bob" );

const sayHi = function ( name ) {
    return `Hi, ${ name }!`;
}