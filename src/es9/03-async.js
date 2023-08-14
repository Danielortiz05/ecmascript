async function* iterate (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const numbers = iterate();
numbers.next().then(response => console.log(response.value));
numbers.next().then(response => console.log(response.value));
numbers.next().then(response => console.log(response.value));
console.log("After");

async function names (array){
    for await (let value of array){
        console.log(value);
    }
}
const name = names(["Carlos", "Alejandro", "Alejandra"]);
console.log("Hello");