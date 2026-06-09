// Triangle Classifier

let a = 10, b = 10, c = 10;

if ( a === b & b === c && a === c ) {
    console.log( "Triangle is equilateral" );
}
else if ( a === b && b != c && a != c ) {
    console.log( "Triangle is isosceles" );
}
else {
    console.log( "Triangle is scalene" );
}

