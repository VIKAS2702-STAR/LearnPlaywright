let unknown: unknown = "Hello, TypeScript!";

if ( typeof unknown === "string" ) {
    console.log( "Hi, TypeScript!" );
}

let message: string = "Hello";

let username: string = "Vikas Prajapati";
let uderId: number = 12345;

// Function Annotation

function greet( name: string ): string {
    return `Hello, ${ name }!`;
}

// Arrow Function Annotation

const multiply = ( a: number, b: number ): number => a * b;

// Object Annotation

let user: { name: string; age: number } = {
    name: "Vikas Prajapati",
    age: 30
};