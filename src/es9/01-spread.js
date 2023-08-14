const person = { username: "kmx", age: 22, country: "Colombia"};
const {username, ...values} = person;

console.log(username, values);