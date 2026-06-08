//app.vwo.com --> viewer, editor and admin

let isLoggedIn = true;
let userRole = "Editor";

if ( isLoggedIn ) {
    if ( userRole === "Admin" ) {
        console.log( "Admin can do all the things." );
    }
    else if ( userRole === "Editor" ) {
        console.log( "Welcome Editor - Edit Access Granted." );
    }
    else if ( userRole === "Viewer" ) {
        console.log( "Welcome Viewer -- Read Only Access Granted" );
    }
    else {
        console.log( "No Idea You May be a Guest! Role" );

    }
}
else {
    console.log( "You are not Logged In!!" );

}
