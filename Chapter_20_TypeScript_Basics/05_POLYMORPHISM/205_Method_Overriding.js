class BaseTest {
    setup() {
        console.log( "Base: Open The Browser" );
    }
}

class APITest extends BaseTest {
    setup() {
        console.log( "APITest: OPen The Browser" );
    }
}

const test = new APITest(); // Whoever object is created, that class's method will be called. It will not call the parent class's method.
test.setup(); // APITest: OPen The Browser