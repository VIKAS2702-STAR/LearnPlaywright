const readline = require( "readline" );

const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
} );

r1.question( "Enter a Number:", ( Input ) => {
    let num = Number( input );

    if ( num % 2 === 0 ) {
        console.log( num + " is Even" );
    }
    else {
        console.log( num + " is Odd" );
    }
    r1.close();
} );

// We will never use this type of code in Javascript