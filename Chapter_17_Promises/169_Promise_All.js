let checkAuth = Promise.resolve( "Authentication is OK" );
let checkDB = Promise.resolve( "DB is Ok" );
let checkCache = Promise.resolve( "Cache is OK" );

// Promise.all( [checkAuth, checkDB, checkCache] ).then( function ( result ) {
//     console.log( "All checks are fine!" );
// } )

// Promise.all( [
//     Promise.resolve( "Ok" ),
//     Promise.reject( "DB Down" ),
//     Promise.resolve( "OK" )
// ] ).then( function ( r ) {
//     console.log( r );
// } ).catch( function ( error ) {
//     console.log( "Failed:", error );
// } )

Promise.allSettled( [
    Promise.resolve( "Test A Passed!" ),
    Promise.reject( "Test B Failed" ),
    Promise.resolve( "Test C Passed" )
] ).then( function ( result ) {
    result.forEach( function ( r, i ) {
        console.log( "Test " + ( i + 1 ) + ":", r.status, "-", r.value || r.reason );
    } );
} );

// This is like a test report - you want results for All tests,
// not just stop at the first failure.