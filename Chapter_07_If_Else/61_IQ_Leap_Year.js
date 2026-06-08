// Leap Year

//Rules:

// Divisible by 4 AND not divisible by 100 --> Leap Year
// OR divisible by 400 ---> Leap Year
// Else --> Not a Leap Year

let year = 2024;

if ( ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 ) {
    console.log( year + "is s Leap Year" );
}
else {
    console.log( year + "is not a Leap Year" );
}