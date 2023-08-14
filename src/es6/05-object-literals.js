//Enhanced object literals
function newUser (user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser('Daniel', 24, 'COL', 1));