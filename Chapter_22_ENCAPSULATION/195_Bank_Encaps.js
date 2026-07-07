class ICICI {
    #balance;

    constructor( name, balance ) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance( balance, isCashier ) {
        if ( isCashier ) {
            this.#balance = balance;
        }
        else {
            console.log( "You are not authorized to set the balance." );
        }
    }
}

let Vikas = new ICICI( "VIIKAASS", 1000 );
console.log( Vikas.getBalance() ); // 1000
Vikas.setBalance( 2000, false ); // You are not authorized to set the balance.
console.log( Vikas.getBalance() ); // 1000


let Vikas_Father = new ICICI( "VIIKAASS", 5000 );
console.log( Vikas_Father.getBalance() ); // 5000
Vikas_Father.setBalance( 19000, true ); // Authorized to set the balance
console.log( Vikas_Father.getBalance() ); // 19000