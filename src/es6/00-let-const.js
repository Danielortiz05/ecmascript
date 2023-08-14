// En ecmascript 6 se añade las palabras reservadas let y const y su scope es de tipo bloque.
// para la asignación de variables.
//Ej let:
let fruit = "Banana"; //Se realiza la declaración y la asignación a la variable.
fruit = "Coco";// Se realiza una reasignación a la variable "fruit".
console.log(fruit);

// Ej const:
//La palabra reservada const no permite la reasignación de su valor.
const car = "Mazda";
car = "Renault";
console.log(car);
//El resultado de la ejecución del código anterior va elevar un error de tipo TypeError.


