//let is blocked scope
let x = "global";
if ( true ) {
    // TDZ for block-scoped "X" starts here
    // console.log(x); // ReferenceError (NOT "global")
    let x = "block";   // TDZ ends
    console.log( x );  // "block"
}

console.log( x );
