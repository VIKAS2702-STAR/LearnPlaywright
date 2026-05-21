var a = 10; // Global Scope

// var is function scoped

console.log( a );

function printHello() {
    console.log( "Hello the world is waiting for you" );
    var a = 20; // Local Scope
    console.log( a );
    if ( true ) {
        var a = 30;
        console.log( a );
    }
}
printHello();
