let result = ["Pass", "Fail", "Pass", "Error", "Fail"];

//indexOf --> returns first index, or -1 if not found

result.indexOf( "fail" ); //1
result.indexOf( "Skip" );  //-1

// lastIndexOf --> searches from the end

result.lastIndexOf( "Fail" ); // 4

// Inclued --> Returns the boolean value

result.includes( "Error" ) // True
result.includes( "Skip" ) // False

// Find --> Returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find( x => x > 20 );
console.log( r );

//findIndex
nums.findIndex( x => x > 20 ); // 1,2,3

//findLast
nums.findLast( x => x > 20 );//45

//findLastIndex
nums.findLastIndex( x => x > 20 );//3