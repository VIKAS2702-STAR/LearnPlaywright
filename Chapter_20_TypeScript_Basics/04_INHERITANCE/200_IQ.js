class TestCase {
    execute() {
        console.log( "Running Generic Test" );
    }
}

class UniTest extends TestCase {
    execute() {
        console.log( "Running Unit Test - Checking one functionality" );
    }
}

class APITest extends TestCase {
    execute() {
        console.log( "Running API Test - Sending HTTP Request" );
    }
}
class E2ETest extends TestCase {
    execute() {
        console.log( "Running E2E Test - Checking the complete flow" );
    }
}

const tests = [new UniTest(), new APITest(), new E2ETest()];
tests.forEach( function ( test ) {
    test.execute();
} );