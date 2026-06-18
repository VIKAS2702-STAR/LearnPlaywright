let testMatrix = [
    ["Login", "Pass", 200],
    ["Checkout", "Fail", 404],
    ["Search", "Pass", 180]
];
// How many test cases have we executed?
// How many test cases are passed?
// What is the status code that you have got for the fail?

for ( let i = 0; i < testMatrix.length; i++ ) {
    for ( let j = 0; j < testMatrix[i].length; j++ ) {
        console.log( testMatrix[i][j] );
    }
    console.log();
}

// Another Process

for ( let row of testMatrix ) {
    for ( let cell of row ) {
        process.stdout.write( cell + " " )
    }
    console.log();
}


// forEach

testMatrix.forEach( row => {
    row.forEach( cell => process.stdout.write( cell + " " ) );
    console.log();
} )