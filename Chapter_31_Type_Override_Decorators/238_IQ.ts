class Father {
    home(): void {
        console.log( "2BHK" );
    }
}

class Vikas extends Father {
    override home(): void {
        console.log( "3BHK" );
    }
}
let vikas = new Vikas();
vikas.home();