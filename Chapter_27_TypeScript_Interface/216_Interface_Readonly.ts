interface APIResponse {

    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number

}

// Readonly- can't modify the readonly parameters
//?-optional parameters

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log( "status:", response.statusCode );
console.log( "body:", response.body );
console.log( "Headers:", response.headers );