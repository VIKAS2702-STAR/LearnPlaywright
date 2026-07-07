// Primitive Types

let name: string = "Vikas Prajapati";
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 384400;
// let pi :float = 3.14; // Error: 'float' is not a valid type in TypeScript
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Array Types

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Vikas", "Prajapati", "John", "Doe"];

// Any avoid when possible

let anything: any = "Hello, World!";

// Unknow Safer than any

let unknown: unknown = "Hello, TypeScript!";


let message: string = "Hello, TypeScript!";
let count: number = 42;

// let isActive: boolean = true; // Error: 'isActive' is already declared

console.log( "Message:", message );
console.log( "Count:", count );
console.log( "Is Active:", isActive );