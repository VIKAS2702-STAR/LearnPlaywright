let browser = "Chrome";

switch ( browser ) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log( "Chromium Project!" );
        break;
    case "Firefox":
        console.log( "Mozilla Project!" );
        break;
    case "Safari":
        console.log( "Apple Project -- Uses JavaScript Core Engine" );
        break;
    default:
        console.log( "Unknown Browser --- Manual Testing Needed" );
}