const user = { name: "Vikas", age: 31, city: "Mumbai" };

// Basic Destructuring

// const { name, age } = user;
// console.log( name );
// console.log( age );

// Rename Variables

const { name: userName, age: userAge } = user;
console.log( userName );
console.log( userAge );

//Destructuring - In this if we want only age then we can
// fetch the data

const { age } = user;

// Default Value
const { country = "INDIA" } = user;
console.log( country );
console.log( user );


const data = {
    user: {
        name: "John",
        address:
        {
            city: "Mumbai"
        }
    }
};
const { user: { address: { city } } } = data;
console.log( data.user.address.city );
