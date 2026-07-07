class car {
    //CAB
    //C Stands For Constructor
    constructor( name_given_during_object_creation ) {
        this.name = name_given_during_object_creation;
    }
    // Attributes
    //Behaviors
    drive() {
        console.log( "I am Driving", this.name );
    }
}

const tesla = new car( "Model S" );
tesla.drive();

const hyundai = new car( "Grand i10" );
hyundai.drive();