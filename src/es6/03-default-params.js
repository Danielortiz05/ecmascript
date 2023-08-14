//Anteriormente.
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 31;
    var country = country || "COL";
}

newUser();


//Ecmascript 6

function newAdmi(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name,age,country);
}

newAdmi();
newAdmi('Maria', 24, 'US')