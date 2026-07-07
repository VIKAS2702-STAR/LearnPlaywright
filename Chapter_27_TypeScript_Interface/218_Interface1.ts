interface Calculator {
    add( a: number, b: number ): number;
    subtract( a: number, b: number ): number;
    multiply: ( a: number, b: number ) => number; // Alternative Syntax
}

// We can Create with no object
const noObject = {
    id: 1
}

const calc: Calculator = {
    add: ( a, b ) => a + b,
    subtract: ( a, b ) => a - b,
    multiply: ( a, b ) => a * b
}

console.log( calc );