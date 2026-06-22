function openBrowser() {
    return new Promise( function ( resolve ) {
        resolve( "Open the Browser" );
    } );
}

function goToLogin() {
    return new Promise( function ( resolve ) {
        resolve( "Login Page Loaded" );
    } );
}

function enterCredentials() {
    return new Promise( function ( resolve ) {
        resolve( "Credentials are Entered" );
    } );
}

function clickLogin() {
    return new Promise( function ( resolve ) {
        resolve( "Logged in Successfull" );
    } );
}

async function runTheE2E() {

    let msg1 = await openBrowser();
    console.log( "Step 1:", msg1 );

    let msg2 = await goToLogin();
    console.log( "Step 1:", msg2 );

    let msg3 = await enterCredentials();
    console.log( "Step 1:", msg3 );

    let msg4 = await clickLogin();
    console.log( "Step 1:", msg4 );
}
runTheE2E();