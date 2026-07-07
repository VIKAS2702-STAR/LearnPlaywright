class person {

    constructor() {
        console.log( "I will be created when any object is created!" )
    }

    // Attributes
    name;
    age;
    email;
    salary;
    address;

    // Behaviors
    sleep() { }
    eat() { }
    walk() { }
}

const obj_ref = new person();
// obje_ref = It is called as the object reference variable which is used to refer the object created in the memory.
// new person() = It is called as the object creation statement which is used to create the object in the memory.
// console.log( obj_ref );