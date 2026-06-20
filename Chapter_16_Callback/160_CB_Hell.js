// Real QA Scenario : End to End Login for the App.vwo.com

// openBrowser()
// goToLoginPage()
// enterCredentials()
//clickLogin()

function openBrowser( callback ) {
    console.log( "Step 1: Opening The Chrome Browser" );
    setTimeout( function () {
        callback();
    }, 1000 );
}

function goToLoginPage( callback ) {
    console.log( "Step 2: Login Page Loaded" );
    setTimeout( function () {
        callback();
    }, 2000 );
}

function enterCredentials( callback ) {
    console.log( "Step 3: Credentials Entered" );
    setTimeout( function () {
        callback();
    }, 2000 );
}

function clickLogin( callback ) {
    console.log( "Step 4: Login Button Clicked" );
    setTimeout( function () {
        callback();
    }, 2000 );
}

// THIS IS CALLBACK HELL

openBrowser( function () {
    goToLoginPage( function () {
        enterCredentials( function () {
            clickLogin( function () {
                console.log( "Test Completed" );
            } )
        } )
    } )
} )