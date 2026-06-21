let apiCall = new Promise( function ( resolve, reject ) {
    reject( "500 Error" );
} );

apiCall.then( function ( data ) {
    console.log( "Success or Resolve" );
} ).catch( function ( error ) {
    console.log( error );
} );

// .cath() runs only when promise is rejected
// .then() is completely skipped here.