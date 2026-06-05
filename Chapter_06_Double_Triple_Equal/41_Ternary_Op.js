//let rajkumar_age = 18;
//let rj_will_goa = rajkumar_age > 18 ? "RJ will go goa" : "No Goa";
//console.log( rj_will_goa );


let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go goa" : "No Goa";
console.log( rj_will_goa );


let actualstatuscode = 200;
let expectedstatuscode = 200;
let testResult = actualstatuscode === expectedstatuscode ? "Pass" : "Fail";
console.log( testResult );


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log( baseUrl );


let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log( "Launching browser in:", browserMode, "mode" );


let responseTime = 850; //ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log( `Response:${ responseTime }ms-${ slaStatus }` );


let condition = "true";
let isSKMale = condition ? true : false;
console.log( isSKMale );


// Nested Ternary operator having multiple condition---->

let age = 26;
let is_vikas_goa = age > 26 ? "Yes, He will go to Goa" : "Else, He will not go to Goa";
console.log( is_vikas_goa );



let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log( `Status${ statusCode }:${ category }` );



let temp = 35;
let feel = ( temp >= 40 ) ? "Very Hot" :
    ( temp >= 30 ) ? "Hot" :
        ( temp >= 20 ) ? "Warm" :
            ( temp >= 10 ) ? "Cool" : "Cold";
console.log( "7.Temperature:", temp, "|Feel:" );

