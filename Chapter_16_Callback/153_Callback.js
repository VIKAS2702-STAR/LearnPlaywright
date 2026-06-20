function print() {
    console.log( "Normal Function is called" );
}

function placeOrder( item, vikasCallback ) {
    console.log( "Hi, Your order is placed" );
    vikasCallback();
}

// First Way
placeOrder( "Pizza", print );

// Second Way

placeOrder( "Burger", function () {
    console.log( "Anonymous function, I am also a function without name!" )
} );

// Third Way

placeOrder( "Momos", () => {
    console.log( "Arrow Function, I am also a function without a name" )
} );
