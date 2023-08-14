class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    #greeting(){
        return `Bienvenido de nuevo ${this.name}`;
    }

    get #nAge(){
        return this.age;
    }   

    set #nAge(n){
        this.age = n;
    }
}

const newStudent = new Student("Daniel", 21);
console.log(newStudent.age);
console.log(newStudent.age = 19);