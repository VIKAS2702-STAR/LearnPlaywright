class BasePage {
    verify() {
        console.log( "Verifying the Base Page" );
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log( "Verifying: username field exists" );
        console.log( "Verifying: password field exists" );
        console.log( "Verifying: login button exists" );
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log( "Verifying: welcome message is displayed" );
        console.log( "Verifying: sidebar menu is loaded" );

    }
}

class cartPage extends BasePage {
    verify() {
        console.log( "Verifying: cart items are displayed" );
        console.log( "Verifying: total amount is correct" );
    }
}

const pages = [new LoginPage(), new DashboardPage(), new cartPage()];
pages.forEach( function ( page ) {
    page.verify();
    console.log( "------------------------" );
} );