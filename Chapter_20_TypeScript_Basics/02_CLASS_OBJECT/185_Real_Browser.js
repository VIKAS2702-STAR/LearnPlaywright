class TestCase {

    constructor( name, status, priority ) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() { // Within the class is a method and outside the class is a function.
        console.log( this.name + " -> " + this.status + " -> " + this.priority );
    }
}
let LoginTC = new TestCase( "Login Test Case", "Pass", "High" );
let LogoutTC = new TestCase( "Logout Test Case", "Fail", "Medium" );
LoginTC.display();
// LogoutTC.display();