// This is a older format and we can not use this method in our playwright.

const user = {
    firstName: "Vikas",
    lastName: "Prajapati",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName( value ) {
        [this.firstName, this.lastName] = value.split( " " );
    }
}

// Objects - JS{}
// Class and Object
// This. it means the current value in the object.

console.log( user.fullName );
user.fullName = "Amit Sharma";
console.log( user.fullName );