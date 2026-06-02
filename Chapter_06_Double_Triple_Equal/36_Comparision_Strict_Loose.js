// number == string
console.log( 42 == "42" ); // loose comparison
console.log( 42 === "42" ); // data type and converted value
console.log( 42 == "45" ); //different value

console.log( 5 == 5 );
console.log( 5 == "5" );

console.log( 5 === 5 );
console.log( 5 === "5" );

console.log( 0 == "" ); // ? "" =coverted into 0 then checked by the loose comparision
console.log( 0 === "" );

console.log( true == 1 );
console.log( false == 0 );
console.log( true == "1" );
console.log( true == 2 );


console.log( 5 != "5" ); // False , 5=int, "5" String, both of them are not equal
console.log( 5 !== "5" ); // True
//console.log( 5 !==="5" ); //this does not exist


// === Strict check we will check for both the daya type and value
// == Loose check we will check either value or data type