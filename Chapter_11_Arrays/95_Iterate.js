// Iterate - Go from one to another

let tests = ["Login", "Checkout", "Search"];
for ( let i = 0; i < tests.length; i++ ) {
    console.log( tests[i] );
}

console.log( "-----" );

// for____of (cleanest for values)
for ( test of tests ) {
    console.log( test );
}

// forEach

console.log( "------" );
tests.forEach( ( test, index ) => {
    console.log( test, index );
} );


console.log( "------" );

let students = ["Methis", "Senthil", "Ajay", "Rahul"];
for ( let student in students ) {
    console.log( student, "->", students[student] ); // index in
}


console.log( "------" );

for ( let [i, test] of tests.entries() ) { // we will never use this syntax in javascript with playwright
    console.log( i, test );
}