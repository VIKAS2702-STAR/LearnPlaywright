// This method we will not use never in playwright

abstract class BaseTest {
    protected testName: string;
    constructor( testName: string ) {
        this.testName = testName;
    }
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    loan1(): void {
        console.log( "HI" );
    }
}

class UItest extends BaseTest {
    setup(): void {
        console.log( " Setup: launch the browser" );
    }
    execute(): void {
        console.log( " Execute: click buttons, fill forms" );
    }
    teardown(): void {
        console.log( " Teardown: close browser" );
    }
    loan(): void {
        console.log( " Give Loan" );

    }
}