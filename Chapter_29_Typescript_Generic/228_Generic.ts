function getString( name: string ): string {
    return "Vikas";
}

getString( "Prajapati" );
//getFirstResult(123);--- this will not allow in typescript

function getFirstResult<T>( results: T[] ) {
    return results[0]!; // ! tells the compiler: This value is NOT null or undefined.
}

let firstCode = getFirstResult<number>( [200, 400, 500] );
let firstTest = getFirstResult<string>( ["Login", "Signup", "Dashboard"] );

console.log( "First Code:", firstCode );
console.log( "First Test:", firstTest )