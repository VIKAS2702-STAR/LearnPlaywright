let responseCode: number[] = [200, 201, 302, 403, 404, 500];

function getFailedCodes( codes: number[] ): number[] {
    return codes.filter( function ( code: number ): boolean {
        return code >= 400;
    } );
}

console.log( "All Codes", responseCode );
console.log( "All Failed Codes", getFailedCodes( responseCode ) );