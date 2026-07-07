class BasePage {
    constructor( PageName ) {
        this.PageName = PageName;
    }

    open() {
        console.log( "[Open]" + this.PageName );
    }
}

class AuthPage extends BasePage {
    loging( user ) {
        console.log( "[Login]" + user );
    }
}
class AdminPage extends AuthPage {
    constructor() {
        super( "Admin Page" );
    }

    managerUsers() {
        console.log( "[ADMIN] Managing users..." );
    }
}

let admin = new AdminPage();
admin.open(); // [Open]Admin Page
admin.loging( "Vikas" ); // [Login]Vikas
admin.managerUsers(); // [ADMIN] Managing users...  
