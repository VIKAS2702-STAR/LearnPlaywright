// let p = new Promise( function ( resolve, reject ) {
//     resolve( 42 );
// } );
// p.then( function ( value ) {
//     console.log( "Answer:", value );
// } );

// let p = new Promise( function ( resolve, reject ) {
//     reject( "Something Broke" );
// } );
// p.catch( function ( error ) {
//     console.log( "Caught:", error );
// } );

// let p = Promise.resolve( 5 );
// p.then( function ( value ) {
//     return value * 10;
// } ).then( function ( value ) {
//     console.log( "Result:", value );
// } );


// Promise.resolve( 1 )
//     .then( function ( val ) {
//         console.log( val );
//         return val + 1;
//     } )
//     .then( function ( val ) {
//         console.log( val );
//         return val + 1;
//     } )
//     .then( function ( val ) {
//         console.log( val );
//     } );

// Promise.resolve( "Start" )
//     .then( function ( val ) {
//         console.log( val );
//         throw new Error( "Broke at step 2" );
//     } )
//     .then( function () {
//         console.log( "This will not run" );
//     } )
//     .catch( function ( error ) {
//         console.log( "Caught:", error.message );
//     } );


// Promise.reject( "Test Failed" )
//     .then( function ( data ) {
//         console.log( "Data:", data );
//     } )
//     .catch( function ( error ) {
//         console.log( "Error:", error );
//     } )
//     .finally( function () {
//         console.log( "Cleanup Done" );
//     } );


// Promise.resolve( "Quick Win" ).then( function ( msg ) {
//     console.log( msg );
// } );

// Promise.reject( "Quick Loss" ).catch( function ( msg ) {
//     console.log( msg );
// } );


// let t1 = Promise.resolve( "Login: Pass" );
// let t2 = Promise.resolve( "Search: Pass" );
// let t3 = Promise.resolve( "Logout: Pass" );

// Promise.all( [t1, t2, t3] ).then( function ( results ) {
//     console.log( results );
// } );

// let t1 = Promise.resolve( "Login: Pass" );
// let t2 = Promise.reject( "Search: Fail" );
// let t3 = Promise.resolve( "Logout: Pass" );
// Promise.all( [t1, t2, t3] )
//     .then( function ( r ) {
//         console.log( "All:", r );
//     } )
//     .catch( function ( error ) {
//         console.log( "Stopped:", error );
//     } );

// Promise.allSettled( [
//     Promise.resolve( "API 200" ),
//     Promise.reject( "API 500" ),
//     Promise.resolve( "API 201" )
// ] )
//     .then( function ( results ) {
//         results.forEach( function ( error ) {
//             let value = error.status === "fulfilled" ? error.value : error.reason;
//             console.log( error.status + "->" + value );
//         } );
//     } );


Promise.allSettled( [
    Promise.resolve( "API 200" ),
    Promise.reject( "API 500" ),
    Promise.resolve( "API 201" )
] )
    .then( function ( results ) {
        results.forEach( function ( r ) {
            console.log( r );
        } );
    } );