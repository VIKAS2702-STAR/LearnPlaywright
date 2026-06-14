// Rest of the parameter.

function logResult( suitName, ...Results ) {
    console.log( suitName );
    console.log( Results );
}

logResult( "Login Test", 1, 2, 3 );
logResult( "Registration Test", "Hello", "Vikas" );