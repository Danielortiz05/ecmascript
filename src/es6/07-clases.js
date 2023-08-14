//Declarando clases.
class User{
    greeting(){
        return 'Hello';
    }
};
//Instanciando clases.
const newUser = new User();
console.log(newUser.greeting());

//Constructor y uso de this.
class NewAdmi{
    constructor(name){
        this.name = name;
    }
    greeting(){
        return `Hello ${this.name}!`;
    }
}
const newAdmi = new NewAdmi("Daniel");
console.log(newAdmi.greeting());

// Setters & getters

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Bienvenido de nuevo ${this.name}`;
    }

    get nAge(){
        return this.age;
    }   

    set nAge(n){
        this.age = n;
    }
}

const newStudent = new Student("Daniel", 21);
console.log(newStudent.age);
console.log(newStudent.age = 19);
