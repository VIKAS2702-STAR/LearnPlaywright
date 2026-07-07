class Student {
    constructor( name_student, age, phoneNo ) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static name = "Playwright2X";
    static mentor_name = "PrrammodDutta";

    static display() {
        console.log( "Hi, I am a common function" );
    }
}

const s1 = new Student( "Vikas", 25, 1234567890 );
const s2 = new Student( "Prajapati", 26, 9876543210 );

console.log( s1.name_student );
console.log( s2.name_student );

console.log( Student.name );
console.log( Student.mentor_name );