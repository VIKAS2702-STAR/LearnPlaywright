function cafe( item, callWhenTableisReady ) {
    console.log( "Finding....1" );
    console.log( "Finding....2" );
    console.log( "Finding....3" );
    console.log( "Item" );
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log( "Calling 9969281949" );
}

cafe( "Burger", callWhenTableisReady );

cafe( "Pizza", function () {
    console.log( "Calling 8879343363" );
} )

cafe( "Momos", () => {
    console.log( "Calling 8286426271" );
} );