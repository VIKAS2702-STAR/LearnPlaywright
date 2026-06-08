// You are Working API Validation
// Response code - 200, 404, 401, 403.....404

let responseCode = 404;
switch ( responseCode ) {
    case 200:
        console.log( "200 is Ok" );
        break;
    case 404:
        console.log( "404 not found!" );
        break;
    default:
        console.log( "No Status Code Match" );
}