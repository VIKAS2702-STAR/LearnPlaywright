interface testConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}

let ciConfig: testConfig = {
    browser: "Chrome",
    headless: true,
    baseURL: "https://staging.vwo.com"
};

let localConfig: testConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "https://localhost:3000",
    timeout: 1000,
    retries: 3
}

console.log( "CI:", ciConfig.browser, "| timeout:", ciConfig.timeout );
console.log( "Local:", localConfig.browser, "|timeout:", localConfig.timeout );