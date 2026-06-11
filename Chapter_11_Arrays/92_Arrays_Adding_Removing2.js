let arr = [1, 2, 3];
arr.push( 4, 5, 6 );
console.log( arr );
// arr = [1,2,3,4,5,6]
//index= [0,1,2,3,4,5]

// // Splice (Start, deletCount,....itemToAdd)
// arr.splice( 2, 1 );
// console.log( arr );

// arr.splice( 2, 0, 99 ); // Adding a new number in the array
// console.log( arr );

// arr.splice( 2, 1, 99 ); // replacing a new number from the array
// console.log( arr );

arr.splice( 1, 2, 10, 20 );
console.log( arr );
