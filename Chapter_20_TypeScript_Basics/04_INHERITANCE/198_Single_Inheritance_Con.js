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

const tes = new APITest(); // Whoever object is created, that class's method will be called. It will not call the parent class's method.
tes.setup(); // APITest: OPen The Browser