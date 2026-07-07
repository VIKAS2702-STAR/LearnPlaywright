function sayHello( msg: string ): void {
    console.log( msg );
}

// Function Annotation

function greet( name: string ): string {
    return `Hello, ${ name }!`;
}

// Never - Function that never returns a value (e.g., throws an error or has an infinite loop)
function throwError( message: string ): never {
    throw new Error( message );
}

function infiniteLoop(): never {
    while ( true ) { }
}