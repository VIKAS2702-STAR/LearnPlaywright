class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor( baseURL: string, apiKey: string, timeout: number ) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer" + this.apiKey;
    }

    public sendRequest( path: string ): void {
        console.log( "GET:" + this.baseURL + path );
        console.log( "AUTH:" + this.getAuthHeader() );
        console.log( "TIMEOUT:" + this.timeout + "ms" );

    }

}

class UserAPIClient extends APIClient {

    getUsers(): void {
        console.log( "Fetching users (timeout: " + this.timeout + " ms)" );
        console.log( "URL:" + this.baseURL + "/users" );

    }
}

let client = new APIClient( "https://api.staging.com", "key_secret_123", 5000 );
console.log( "BASE URL:", client.baseURL );
client.sendRequest( "/health" );