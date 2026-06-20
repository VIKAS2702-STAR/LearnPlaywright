// Real QA Scenario : End-to-End Test Flow with 20+ Callbacks
// Flow: Open Browser -> Login -> Dashboard -> Profile -> Settings -> Logout -> Close Browser

function openBrowser( callback ) {
    console.log( "Step 1: Opening Chrome Browser" );
    setTimeout( function () {
        callback();
    }, 300 );
}

function navigateToApp( callback ) {
    console.log( "Step 2: Navigating to Application URL" );
    setTimeout( function () {
        callback();
    }, 500 );
}

function acceptCookies( callback ) {
    console.log( "Step 3: Accepting Cookie Consent Banner" );
    setTimeout( function () {
        callback();
    }, 300 );
}

function goToLoginPage( callback ) {
    console.log( "Step 4: Navigating to Login Page" );
    setTimeout( function () {
        callback();
    }, 400 );
}

function verifyLoginPageLoaded( callback ) {
    console.log( "Step 5: Verifying Login Page Elements Loaded" );
    setTimeout( function () {
        callback();
    }, 300 );
}

function enterUsername( callback ) {
    console.log( "Step 6: Entering Username" );
    setTimeout( function () {
        callback();
    }, 200 );
}

function enterPassword( callback ) {
    console.log( "Step 7: Entering Password" );
    setTimeout( function () {
        callback();
    }, 200 );
}

function clickLoginButton( callback ) {
    console.log( "Step 8: Clicking Login Button" );
    setTimeout( function () {
        callback();
    }, 600 );
}

function waitForDashboard( callback ) {
    console.log( "Step 9: Waiting for Dashboard to Load" );
    setTimeout( function () {
        callback();
    }, 800 );
}

function verifyDashboardElements( callback ) {
    console.log( "Step 10: Verifying Dashboard Widgets and Menus" );
    setTimeout( function () {
        callback();
    }, 400 );
}

function navigateToProfile( callback ) {
    console.log( "Step 11: Navigating to User Profile Page" );
    setTimeout( function () {
        callback();
    }, 500 );
}

function verifyProfilePage( callback ) {
    console.log( "Step 12: Verifying Profile Page Loaded" );
    setTimeout( function () {
        callback();
    }, 300 );
}

function updateProfileName( callback ) {
    console.log( "Step 13: Updating Profile Name" );
    setTimeout( function () {
        callback();
    }, 200 );
}

function updateProfileEmail( callback ) {
    console.log( "Step 14: Updating Profile Email" );
    setTimeout( function () {
        callback();
    }, 200 );
}

function saveProfileChanges( callback ) {
    console.log( "Step 15: Saving Profile Changes" );
    setTimeout( function () {
        callback();
    }, 500 );
}

function verifySuccessMessage( callback ) {
    console.log( "Step 16: Verifying Success Toast Message" );
    setTimeout( function () {
        callback();
    }, 300 );
}

function navigateToSettings( callback ) {
    console.log( "Step 17: Navigating to Settings Page" );
    setTimeout( function () {
        callback();
    }, 500 );
}

function toggleNotificationSettings( callback ) {
    console.log( "Step 18: Toggling Notification Preferences" );
    setTimeout( function () {
        callback();
    }, 200 );
}

function saveSettings( callback ) {
    console.log( "Step 19: Saving Settings Changes" );
    setTimeout( function () {
        callback();
    }, 400 );
}

function clickLogout( callback ) {
    console.log( "Step 20: Clicking Logout Button" );
    setTimeout( function () {
        callback();
    }, 500 );
}

function verifyLogoutSuccess( callback ) {
    console.log( "Step 21: Verifying Redirect to Login Page" );
    setTimeout( function () {
        callback();
    }, 400 );
}

function closeBrowser( callback ) {
    console.log( "Step 22: Closing Browser Instance" );
    setTimeout( function () {
        callback();
    }, 300 );
}

// THIS IS CALLBACK HELL - 22 Levels Deep

openBrowser( function () {
    navigateToApp( function () {
        acceptCookies( function () {
            goToLoginPage( function () {
                verifyLoginPageLoaded( function () {
                    enterUsername( function () {
                        enterPassword( function () {
                            clickLoginButton( function () {
                                waitForDashboard( function () {
                                    verifyDashboardElements( function () {
                                        navigateToProfile( function () {
                                            verifyProfilePage( function () {
                                                updateProfileName( function () {
                                                    updateProfileEmail( function () {
                                                        saveProfileChanges( function () {
                                                            verifySuccessMessage( function () {
                                                                navigateToSettings( function () {
                                                                    toggleNotificationSettings( function () {
                                                                        saveSettings( function () {
                                                                            clickLogout( function () {
                                                                                verifyLogoutSuccess( function () {
                                                                                    closeBrowser( function () {
                                                                                        console.log( "\n E2E Test Completed Successfully - But Look at this Pyramid of Doom!" );
                                                                                    } );
                                                                                } );
                                                                            } );
                                                                        } );
                                                                    } );
                                                                } );
                                                            } );
                                                        } );
                                                    } );
                                                } );
                                            } );
                                        } );
                                    } );
                                } );
                            } );
                        } );
                    } );
                } );
            } );
        } );
    } );
} );
