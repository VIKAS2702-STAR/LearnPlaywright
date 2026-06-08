/*let statusCode = 200;

if ( statusCode === 200 ) {
    console.log( "Successfull!" );
}
else if ( StatusCode === 303 ) {
    console.log( "Redirection!" )
}
else if ( statusCode === 404 ) {
    console.log( "Client Error!" );
}
else if ( statusCode === 505 ) {
    console.log( "Server Error!" )
}
else {
    console.log( "No Status Code Match!" );
}*/

/*status code checker

Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid */

let status_code = 600;
if ( status_code >= 200 && status_code <= 299 ) {
    console.log( "success" )
}
else if ( status_code >= 300 && status_code <= 399 ) {
    console.log( "Redirection" )
}
else if ( status_code >= 400 && status_code <= 499 ) {
    console.log( "Client Error" )
}
else if ( status_code >= 500 && status_code <= 599 ) {
    console.log( "Server Error" )
}
else {
    console.log( "invalid" )
}