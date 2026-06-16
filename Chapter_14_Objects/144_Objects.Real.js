const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "CHROME"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "Admin", active: true }
    }
}

const config = {
    //base url
    baseUrl: "https://localhost:3000",
    apiBaseUrl: "https:localhost:3000/api",


    testUser: {
        username: "testuser@example.com",
        password: "SecurePass123",
    },

    // Logging
    logLevel: "INFO",

    // Retry Configuration
    retryCount: parseInt( process.env.RETRY_COUNT || "3", 10 ),
};