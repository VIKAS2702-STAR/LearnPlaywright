let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 82, 92]
];
let rowSums = scores.map( row => row.reduce( ( a, b ) => a + b, 0 ) );
console.log( rowSums );

let suitResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

// I want all the test cases which have failed
for ( let i = 0; i < suitResults.length; i++ ) {
    for ( let j = 0; j < suitResults[i].length; j++ ) {
        if ( suitResults[i][j].includes( "fail" ) ) {
            console.log( suitResults[i][j] );
        }
    }
}