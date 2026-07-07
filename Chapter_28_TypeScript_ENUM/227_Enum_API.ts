enum HTTPMethod {
    Geto = "GET",
    Puto = "PUT",
    Posto = "POST",
    Deleto = "DELETE"
}

function sendRequest( method: HTTPMethod, endpoint: string ): void {
    console.log( method + " " + endpoint + "-> 200 OK" );
}

sendRequest( HTTPMethod.Geto, "/api/users" );
sendRequest( HTTPMethod.Posto, "/api/users" );
sendRequest( HTTPMethod.Deleto, "/api/users" );
sendRequest( HTTPMethod.Puto, "/api/users" );