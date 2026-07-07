class BaseTest {
    setup(): void {
        console.log( "[BASE] Open Browser" );
    }
    teardown(): void {
        console.log( "[BASE] Close Browser" );

    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log( "[LoginTest] Open Browser" );
        console.log( "[LoginTest] Maximize" );
    }
}

class APITest extends BaseTest {
    override setup(): void {
        console.log( "[APITest] No Browser" );
    }
}

let test = new LoginTest();
test.setup();