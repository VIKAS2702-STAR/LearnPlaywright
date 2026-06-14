// Scope in Function

let env = "Staging!"; // Global Scope

function setupConfig() {
    let timeout = 3000; // local scope
    console.log( env ); // can access global scope
    console.log( timeout ); // can access local scope
}

setupConfig();
console.log( env );
console.log( timeout );