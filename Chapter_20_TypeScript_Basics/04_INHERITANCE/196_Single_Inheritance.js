class BasePage {
    constructor( PageName ) {
        this.PageName = PageName;
    }

    open() {
        console.log( "Opening the Page" );
    }
    close() {
        console.log( "Closing the Page" );
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage();
page.open(); // Opening the Page
page.close(); // Closing the Page