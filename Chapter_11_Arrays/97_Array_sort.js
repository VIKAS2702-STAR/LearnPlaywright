let fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();
console.log( fruits );

let number = [3, 5, 1, 4, 2];
number.sort();
console.log( number );

let nums = [10, 1, 21, 2];
nums.sort();
console.log( nums ); // Natural sorting, Lexicographic sorting

nums.sort( ( a, b ) => a - b ); // Ascending
console.log( nums );

nums.sort( ( a, b ) => b - a ); // Descending
console.log( nums );