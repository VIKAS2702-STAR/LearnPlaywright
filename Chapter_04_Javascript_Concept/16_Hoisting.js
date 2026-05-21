// JS Engine\
// Line By Line, JIT Compilation

console.log( greeting );
var greeting = ( "Hello" );
console.log( greeting );
// Behind The Scene
// var greeting    <----- hoisted with undefined
// console.log( greeting );  <----- undefined
// greeting = "Hello";      <----- assignment stays in place
//console.log (greeting);   <----- "Hello!"

//var a ;
console.log( a );
var a = "Vikas Prajapati";
console.log( a );

