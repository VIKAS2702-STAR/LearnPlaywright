let num = promp( "Enter a Number:" );
num = Number( num ); // convert string to number

if ( num % 2 === 0 ) {
    console.log( num + "is Even" );
}
else {
    console.log( num + "is Odd" );
}