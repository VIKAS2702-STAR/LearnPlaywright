// Logical Operator + if else statement

let username = "Vikas";
let password = "Secure123";
let isAccountLocked = true;

// we can also use like !isAccountLocked in this condition the output will be "You are not allowed to enter"

if ( ( username === "Vikas" && password === "Secure123" ) && isAccountLocked ) {
    console.log( "You are allowed to enter" );
}
else {
    console.log( "You are not allowed to enter" );
}