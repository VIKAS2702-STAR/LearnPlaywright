// Private Fields(#) - Hidden Data
// Public Fields - Visible Data

class Credentials {
    #apikey; // Private variabls are not allowed to be accessed outside the class. It is only accessible inside the class.
    user;

    constructor( user, key ) {
        this.user = user; // Public Field
        this.#apikey = key;
    }
    // Custome made function by us
    vikasGetAuthHeader() {
        return "Bearer " + this.#apikey;
    }
}

let cred = new Credentials( "admin", "secret_key_1234" );
console.log( cred.user ); // Public Field
// console.log( cred.apikey ); // Private Field
// console.log( cred.#apikey ); // Private Field
// console.log( cred.vikasGetAuthHeader() ); // Public Method

const token = cred.vikasGetAuthHeader();
console.log( token );