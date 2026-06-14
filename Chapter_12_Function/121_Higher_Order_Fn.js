// Higher Order Function
// A function that takes a function as an argumen or returns a function.

function runWithLogin( testFn, testName ) {
    console.log( `Starting:${ testName }` );
    let result = testFn();
    console.log( `Finished:${ testName }->${ result }` );
    return result;
}

function loginTest() {
    return "Pass";
}

function loginTestFailed() {
    return "Fail";
}

runWithLogin( loginTest, "Login Test" );
runWithLogin( loginTestFailed, "Dashboard Failed Test" );