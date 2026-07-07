class F1 {
    money() {
        console.log( "Money is 1000" );
    }
}

class F2 {
    money() {
        console.log( "Money is 2000" );
    }
}

// class c extends F1, F2 { // Error: A class can only extend a single class

class Son extends F1, F2 { // Error: A class can only extend a single class
    money() {
        console.log( "Money is 3000" );
    }
}