class BaseTest {
    setUp() {
        console.log( "Base: Open The Browser" );
    }
    teardown() {
        console.log( "Base: Close The Browser" );
    }
}

class UITest extends BaseTest {
    setUp() {
        super.setUp(); // Call the parent class's setUp method
        console.log( "UITest:Maximize The Window" );
    }
    teardown() {
        console.log( "UITest: Take Screenshot" );
        super.teardown(); // Call the parent class's teardown method
    }
}

const test = new UITest();
test.setUp();
test.teardown();