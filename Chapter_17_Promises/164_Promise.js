let order = new Promise( function ( resolve, reject ) {
    let foodready = true;
    if ( foodready ) {
        resolve( "Food is Ready, Pizza is delivered" );
    } else {
        reject( "Your Order is Cancelled Due to Heavy Rain" );
    }
} )
console.log( order );