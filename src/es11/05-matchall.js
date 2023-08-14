const regex = /\b(Daniel)+\b/g;

const names = "Daniel, Camilo, José, Ernesto, Jocelin";

for (const match of names.matchAll(regex)){
    console.log(match);
}