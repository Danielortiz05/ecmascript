let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world + '!'; 
//Template literals 
//Una de las novedades de ecmascript 6 es el uso de template literal, lo que significa que se pueden realizar con comillas francesas y el llamado a una variable por medio de ${} para no hacer el uso anterio de la concatenación de strings y tener una sintaxis más corta.


let epicPhrase2 = `${hello} ${world}!`

console.log(epicPhrase2)

//Multi-line strings.

let lorem = "esto es un string \n " + "esto es otra linea";


//Nueva forma con ecmascript 6

let lorem2 = `Esta es una frase épica 
la continuación de una frase épica.`

console.log(lorem2);