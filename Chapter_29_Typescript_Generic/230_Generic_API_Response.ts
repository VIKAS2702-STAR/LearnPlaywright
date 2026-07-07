function wrapResponse<T>( statusCode: number, data: T ): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>( 200, "admin" );
console.log( userResp );

let falgResp = wrapResponse<boolean>( 200, true );
console.log( falgResp );

let countResp = wrapResponse<number>( 200, 500 );
console.log( countResp );