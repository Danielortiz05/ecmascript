//Flat
const array = [1, 2, 3, 4, 5, 6, [2, 5, 4, 7, [1, 4, 7,9]]];
console.log(array.flat(3));

//Flat-map

const array2 = [1, 3, 4, 5, 9, 7];
console.log(array2.flatMap((v)=>[v, v*2]));