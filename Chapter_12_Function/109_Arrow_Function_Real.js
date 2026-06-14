// if (ourstatuscode >=200 && ourstatuscode < 300)

// This is a perfectly normal function

function validateStatusCode( status ) {
    if ( status >= 200 && status <= 300 ) {
        console.log( "Request is Fine!" )
    }
}

// This is an Function as an Expression

const validateStatusCode_Exp = function ( status ) {
    if ( status >= 200 && status <= 300 ) {
        console.log( "Request is Fine!" )
    }
}

// Arrow Function

const validateStatusCode_Arrow = ( status ) => {
    if ( status >= 200 && status <= 300 ) {
        console.log( "Request is Fine!" )
    }
}