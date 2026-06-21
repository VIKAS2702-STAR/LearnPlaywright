let apiCall = new Promise( function ( resolve, reject ) {
    resolve( {
        status: 200, Body: "User Data"
    } )
} );

apiCall.then( function ( response ) {
    console.log( response );
    // If we want only status value then we can call this function.
    console.log( response.status );
} );

// .then() runs only when the promise resolve successfully