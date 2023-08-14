function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const array = iterate(["José", "Sebastián", "Daniel", "Camila", "Karen"]);
console.log(array.next().value);
console.log(array.next().value);
console.log(array.next().value);
console.log(array.next().value);
console.log(array.next().value);

