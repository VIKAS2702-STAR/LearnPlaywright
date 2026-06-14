//String Palindrome
let str = String( "Madam" ).toLowerCase();
let palindrome = "";

for ( let i = str.length - 1; i >= 0; i-- ) {
    palindrome += str.charAt( i );
}

if ( palindrome === str ) {
    console.log( `${ str } is palindrome` );
}
else {
    console.log( `${ str } is not palindrome` );
}
