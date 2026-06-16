let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.testName = "Login Test";

console.log( config );

delete config.browser;
console.log( config );

if ( config.browser === "Chrome" ) {
    console.log( "I will Execute My Test Case" );
}