// Pure Functions
// A Pure Function always returns the same output for the same input and had no side effects.

// Pure function has no side effect and give the predictable output
function calculatePassRate( total, passed ) {
    return ( ( passed / total ) * 100 ).toFixed( 2 );
}

console.log( calculatePassRate( 10, 7 ) );

// Impure functions are depends on external state

function isPassing( score ) {
    return score >= threshold; // depends on external variable
}

let threshold = 70;
console.log( isPassing( threshold ) );

threshold = 50;
console.log( isPassing( threshold ) );
