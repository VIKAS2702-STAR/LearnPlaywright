// String reverse:

let str = "Welcome";
let reverse = "";

for ( let i = str.length - 1; i >= 0; i-- ) {
    reverse += str.charAt( i );
}
console.log( `Reverse of ${ str }: ${ reverse }` ); 
