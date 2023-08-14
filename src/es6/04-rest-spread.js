//Arrays destructuring EM6.
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

//Object destructuring EM6
let user = {
    username: 'Daniel',
    age: 24
}

let{username, age} = user;
console.log(username, age);

//Spread operator

let person = {
    name: 'Daniel',
    age: 26
};

let country = 'COL';
//Se usa la información de person para agregarla a data
let data = {...person, country};

console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);